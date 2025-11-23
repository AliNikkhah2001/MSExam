async function loadJsonFromMarkdown(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  const text = await res.text();
  const match = text.match(/```json([\s\S]*?)```/);
  if (!match) throw new Error(`No JSON block found in ${path}`);
  return JSON.parse(match[1]);
}

function formatDateTime(date) {
  return date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
}

function humanizeDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function renderCountdownCards(events) {
  const container = document.getElementById('countdown-grid');
  container.innerHTML = '';
  const now = new Date();
  events
    .map((evt) => ({ ...evt, date: new Date(evt.datetime) }))
    .sort((a, b) => a.date - b.date)
    .forEach((evt) => {
      const diff = evt.date - now;
      const { days, hours, minutes } = humanizeDuration(diff);
      const card = document.createElement('div');
      card.className = `countdown-card ${diff < 0 ? 'passed' : 'upcoming'}`;
      card.innerHTML = `
        <p class="countdown-label">${evt.type}</p>
        <h3>${evt.name}</h3>
        <p>${formatDateTime(evt.date)}</p>
        <div class="countdown-row">
          <div>
            <div class="countdown-value">${days}</div>
            <div class="countdown-label">days</div>
          </div>
          <div>
            <div class="countdown-value">${hours}</div>
            <div class="countdown-label">hours</div>
          </div>
          <div>
            <div class="countdown-value">${minutes}</div>
            <div class="countdown-label">minutes</div>
          </div>
        </div>`;
      container.appendChild(card);
    });
}

function renderNextEvent(events) {
  const now = new Date();
  const upcoming = events
    .map((evt) => ({ ...evt, date: new Date(evt.datetime) }))
    .filter((evt) => evt.date > now)
    .sort((a, b) => a.date - b.date);
  const target = upcoming[0] || events.map((evt) => ({ ...evt, date: new Date(evt.datetime) }))[0];
  const timeEl = document.getElementById('next-event-time');
  const labelEl = document.getElementById('next-event-label');

  function tick() {
    const diff = target.date - new Date();
    const { days, hours, minutes, seconds } = humanizeDuration(diff);
    timeEl.textContent = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    labelEl.textContent = `${target.name} (${formatDateTime(target.date)})`;
  }

  tick();
  setInterval(tick, 1000);
}

function renderTimeline(events) {
  const container = document.getElementById('timeline');
  container.innerHTML = '';
  const now = new Date();
  const sorted = events.map((evt) => ({ ...evt, date: new Date(evt.datetime) })).sort((a, b) => a.date - b.date);
  const start = sorted[0].date.getTime();
  const end = sorted[sorted.length - 1].date.getTime();
  sorted.forEach((evt) => {
    const status = evt.date < now ? 'done' : 'upcoming';
    const progressRatio = Math.min(1, Math.max(0, (now - start) / (end - start)));
    const item = document.createElement('div');
    item.className = `timeline-item ${status}`;
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <h4>${evt.name}</h4>
      <div class="meta">
        <span>${evt.type}</span>
        <span>${formatDateTime(evt.date)}</span>
      </div>
      <p>${evt.description}</p>
      <div class="progress"><span style="width:${(progressRatio * 100).toFixed(1)}%"></span></div>`;
    container.appendChild(item);
  });
}

function renderCourses(courses) {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = '';
  courses.forEach((course) => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <h3>${course.group}</h3>
      <p class="focus">${course.focus}</p>
      <div>
        <p class="eyebrow">Books</p>
        <ul class="book-list">
          ${course.books
            .map(
              (book) => `
              <li class="book-item">
                <img src="${book.cover}" alt="${book.title} cover" />
                <div>
                  <p class="title">${book.title}</p>
                  <p class="author">${book.author}</p>
                </div>
              </li>`
            )
            .join('')}
        </ul>
      </div>
      <div>
        <p class="eyebrow">OCW / Lectures</p>
        <ul class="ocw-list">
          ${course.ocw
            .map((c) => `
              <li class="ocw-item"><a href="${c.url}" target="_blank" rel="noopener">${c.title}</a></li>
            `)
            .join('')}
        </ul>
      </div>`;
    grid.appendChild(card);
  });
}

function renderCalculator(weights) {
  const container = document.getElementById('calculator');
  container.innerHTML = '<h3>Your weighted score</h3>';
  const fields = document.createElement('div');
  const state = {};
  Object.keys(weights).forEach((group) => {
    state[group] = 85;
    const row = document.createElement('div');
    row.className = 'field';
    row.innerHTML = `
      <label for="${group}">${group}</label>
      <input id="${group}" type="number" min="0" max="100" value="85" />`;
    row.querySelector('input').addEventListener('input', (e) => {
      state[group] = Number(e.target.value || 0);
      update();
    });
    fields.appendChild(row);
  });
  const result = document.createElement('div');
  result.className = 'result';
  container.append(fields, result);

  function update() {
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    const weighted = Object.entries(state).reduce((sum, [group, value]) => sum + value * weights[group], 0) / totalWeight;
    result.textContent = `${weighted.toFixed(2)}%`;
  }

  update();
}

function renderSafeRange(safeRanges) {
  const container = document.getElementById('safe-range');
  const top3 = safeRanges.top3;
  container.innerHTML = `
    <h3>Safe range for top 3</h3>
    <p>${top3.confidence}</p>
    <p class="result">${top3.targetWeighted}</p>
    <ul>
      ${Object.entries(top3.perGroup)
        .map(([group, band]) => `<li><strong>${group}</strong>: ${band}</li>`)
        .join('')}
    </ul>`;
}

function renderScoreTable(candidates) {
  const tbody = document.querySelector('#score-table tbody');
  tbody.innerHTML = '';
  candidates.slice(0, 50).forEach((c) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.rank}</td>
      <td>${c.id}</td>
      <td>${c.weightedScore.toFixed(2)}%</td>
      <td>${Math.round(c.groupScores.G0 * 100)}%</td>
      <td>${Math.round(c.groupScores.G1 * 100)}%</td>
      <td>${Math.round(c.groupScores.G2 * 100)}%</td>
      <td>${Math.round(c.groupScores.G3 * 100)}%</td>
      <td>${Math.round(c.groupScores.G4 * 100)}%</td>
      <td>${Math.round(c.groupScores.G5 * 100)}%</td>`;
    tbody.appendChild(tr);
  });
}

async function bootstrap() {
  try {
    const [eventData, resources] = await Promise.all([
      loadJsonFromMarkdown('./data/events.md'),
      loadJsonFromMarkdown('./data/resources.md'),
    ]);
    const events = eventData.events;
    renderCountdownCards(events);
    renderNextEvent(events);
    renderTimeline(events);
    renderCourses(resources.courses);
    renderCalculator(resources.weights);
    renderSafeRange(resources.safeRanges);
    renderScoreTable(resources.candidateScores);
  } catch (err) {
    console.error(err);
    const page = document.querySelector('.page');
    const error = document.createElement('div');
    error.className = 'panel';
    error.innerHTML = `<h3>Failed to load data</h3><p>${err.message}</p>`;
    page.prepend(error);
  }
}

document.addEventListener('DOMContentLoaded', bootstrap);
