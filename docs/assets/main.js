const STORAGE_KEYS = {
  progress: 'courseProgress',
  customCourses: 'customCourses',
  milestones: 'studyMilestones',
};

async function loadJsonFromMarkdown(path) {
  // Cache-bust to ensure GitHub Pages/CDN serves the latest markdown after updates
  const cacheBust = `_=${Date.now()}`;
  const url = path.includes('?') ? `${path}&${cacheBust}` : `${path}?${cacheBust}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  const text = await res.text();
  const match = text.match(/```json([\s\S]*?)```/);
  if (!match) throw new Error(`No JSON block found in ${path}`);
  return JSON.parse(match[1]);
}

function formatDateTime(date) {
  return date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
}

function computeWeightedScore(groupScores, weights) {
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
  if (!totalWeight) return 0;
  const weighted = Object.entries(weights).reduce(
    (sum, [group, weight]) => sum + (groupScores[group] || 0) * weight,
    0,
  );
  return (weighted / totalWeight) * 100;
}

function humanizeDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function loadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
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
  const isMobile = window.matchMedia('(max-width: 820px)').matches;
  const sorted = events.map((evt) => ({ ...evt, date: new Date(evt.datetime) })).sort((a, b) => a.date - b.date);

  if (isMobile) {
    container.innerHTML = '';
    sorted.forEach((evt) => {
      const status = evt.date < new Date() ? 'done' : 'upcoming';
      const card = document.createElement('div');
      card.className = `timeline-item timeline-item--stacked ${status}`;
      card.innerHTML = `
        <div class="timeline-dot"></div>
        <p class="timeline-date">${formatDateTime(evt.date)}</p>
        <h4>${evt.name}</h4>
        <p class="timeline-meta">${evt.type}</p>
        <p class="timeline-desc">${evt.description}</p>`;
      container.appendChild(card);
    });
    return;
  }

  container.innerHTML = '<div class="timeline-track"></div>';
  const track = container.querySelector('.timeline-track');
  const start = sorted[0].date.getTime();
  const end = sorted[sorted.length - 1].date.getTime();
  const span = Math.max(1, end - start);
  const rowAnchors = [];
  const trackWidth = track.getBoundingClientRect().width || track.offsetWidth || 780;
  const cardWidth = 190;
  const minGapPx = cardWidth + 24;

  sorted.forEach((evt) => {
    const status = evt.date < new Date() ? 'done' : 'upcoming';
    const ratio = (evt.date.getTime() - start) / span;
    const leftPercent = ratio * 100;
    const leftPx = ratio * trackWidth;
    let rowIndex = 0;
    while (rowAnchors[rowIndex] !== undefined && Math.abs(leftPx - rowAnchors[rowIndex]) < minGapPx) {
      rowIndex += 1;
    }
    rowAnchors[rowIndex] = leftPx;
    const item = document.createElement('div');
    item.className = `timeline-item ${status}`;
    item.style.left = `${leftPercent}%`;
    item.style.setProperty('--row', rowIndex);
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <p class="timeline-date">${formatDateTime(evt.date)}</p>
      <h4>${evt.name}</h4>
      <p class="timeline-meta">${evt.type}</p>
      <p class="timeline-desc">${evt.description}</p>`;
    track.appendChild(item);
  });

  const rowsUsed = rowAnchors.length || 1;
  track.style.minHeight = `${170 + (rowsUsed - 1) * 140}px`;
}

function renderWeightLegend(weights) {
  const legend = document.getElementById('weight-legend');
  legend.innerHTML = '<p class="eyebrow">Course weights</p>';
  const list = document.createElement('div');
  list.className = 'weight-pills';
  Object.entries(weights)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([group, weight]) => {
      const pill = document.createElement('div');
      pill.className = 'weight-pill';
      pill.innerHTML = `<span>${group}</span><strong>${weight}</strong>`;
      list.appendChild(pill);
    });
  legend.appendChild(list);
}

function getProgressState(courseCode, progress) {
  const stored = progress[courseCode] || {};
  return {
    sessionsDone: stored.sessionsDone || 0,
    questionsDone: stored.questionsDone || 0,
    totalSessions: stored.totalSessions || null,
    totalQuestions: stored.totalQuestions || null,
  };
}

function renderCourseCard(course, weights, progress, onUpdate) {
  const weight = weights[course.code] ?? weights[course.group.split(' ')[0]];
  const state = getProgressState(course.code, progress);
  const totalSessions = state.totalSessions ?? course.totalSessions ?? '';
  const totalQuestions = state.totalQuestions ?? course.totalQuestions ?? '';

  const card = document.createElement('div');
  card.className = 'course-card';
  const books = (course.books || [])
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
    .join('');
  const ocw = (course.ocw || [])
    .map((c) => `<li class="ocw-item"><a href="${c.url}" target="_blank" rel="noopener">${c.title}</a></li>`)
    .join('');

  card.innerHTML = `
    <div class="course-card__header">
      <div>
        <h3>${course.group}</h3>
        <p class="course-weight">Weight in model: <strong>${weight ? `×${weight}` : '—'}</strong></p>
        <p class="focus">${course.focus || ''}</p>
      </div>
    </div>
    <div class="progress-block">
      <div class="progress-row">
        <label>Sessions watched</label>
        <div class="progress-inputs">
          <input type="number" min="0" class="input-sessions-done" value="${state.sessionsDone}" />
          <span>/</span>
          <input type="number" min="0" class="input-sessions-total" value="${totalSessions}" placeholder="total" />
        </div>
      </div>
      <div class="progress-row">
        <label>Questions solved</label>
        <div class="progress-inputs">
          <input type="number" min="0" class="input-questions-done" value="${state.questionsDone}" />
          <span>/</span>
          <input type="number" min="0" class="input-questions-total" value="${totalQuestions}" placeholder="total" />
        </div>
      </div>
      <div class="progress-bar">
        <span style="width:${computeProgressPct(state.sessionsDone, totalSessions)}%"></span>
      </div>
      <p class="muted small">Progress bars use the sessions total; edit totals to match your source.</p>
    </div>
    <div>
      <p class="eyebrow">Books</p>
      <ul class="book-list">${books}</ul>
    </div>
    <div>
      <p class="eyebrow">OCW / Lectures</p>
      <ul class="ocw-list">${ocw}</ul>
    </div>`;

  const sessionDoneInput = card.querySelector('.input-sessions-done');
  const sessionTotalInput = card.querySelector('.input-sessions-total');
  const qDoneInput = card.querySelector('.input-questions-done');
  const qTotalInput = card.querySelector('.input-questions-total');
  const bar = card.querySelector('.progress-bar span');

  const sync = () => {
    const next = {
      sessionsDone: Number(sessionDoneInput.value) || 0,
      questionsDone: Number(qDoneInput.value) || 0,
      totalSessions: Number(sessionTotalInput.value) || 0,
      totalQuestions: Number(qTotalInput.value) || 0,
    };
    bar.style.width = `${computeProgressPct(next.sessionsDone, next.totalSessions)}%`;
    onUpdate(course.code, next);
  };

  [sessionDoneInput, sessionTotalInput, qDoneInput, qTotalInput].forEach((el) => {
    el.addEventListener('input', sync);
  });

  return card;
}

function computeProgressPct(done, total) {
  if (!total || total <= 0) return 0;
  return Math.min(100, Math.max(0, (done / total) * 100));
}

function renderCourses(courses, weights, progress, onUpdate) {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = '';
  courses.forEach((course) => grid.appendChild(renderCourseCard(course, weights, progress, onUpdate)));
}

function renderCustomCourses(weights, progress, onUpdate) {
  const custom = loadLocal(STORAGE_KEYS.customCourses, []);
  const grid = document.getElementById('custom-course-grid');
  grid.innerHTML = '';
  custom.forEach((course) => {
    const card = renderCourseCard(course, weights, progress, onUpdate);
    grid.appendChild(card);
  });
}

function renderStudyTracks(tracks) {
  const grid = document.getElementById('study-tracks');
  if (!grid) return;
  grid.innerHTML = '';
  tracks.forEach((track) => {
    const card = document.createElement('div');
    card.className = 'study-card';
    const sections = track.sections
      .map(
        (section) => `
        <div class="track-section">
          <h4>${section.title}</h4>
          <p class="eyebrow">Konkur focus</p>
          <ul>${section.konkurTopics.map((t) => `<li>${t}</li>`).join('')}</ul>
          <p class="eyebrow">Textbook chapters</p>
          <p class="muted">${section.chapters}</p>
          <p class="eyebrow">OCW playlist</p>
          <ul>${section.ocwPlaylist.map((lec) => `<li>${lec}</li>`).join('')}</ul>
        </div>`
      )
      .join('');

    card.innerHTML = `
      <h3>${track.title}</h3>
      <p class="muted"><strong>Main textbook:</strong> ${track.mainTextbook}<br /><strong>Main OCW:</strong> ${track.mainOCW}</p>
      <p class="muted">${track.overview}</p>
      <div class="track-sections">${sections}</div>`;
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
  const featured = safeRanges.featured || safeRanges.top3;
  if (!featured) {
    container.innerHTML = '<p>No safe range data provided.</p>';
    return;
  }
  container.innerHTML = `
    <h3>${featured.title || 'Safe range snapshot'}</h3>
    <p>${featured.confidence}</p>
    <p class="result">${featured.targetWeighted}</p>
    <ul>
      ${(featured.perGroup &&
        Object.entries(featured.perGroup)
          .map(([group, band]) => `<li><strong>${group}</strong>: ${band}</li>`)
          .join('')) || ''}
    </ul>`;
}

function renderSectionPacing(sections, weights, weightingDisplay, totalMinutes = 240) {
  const container = document.getElementById('pacing-table');
  if (!container || !sections) return;
  const weightTotals = sections.reduce((sum, sec) => {
    const effectiveWeight = sec.weight || weights[sec.group] || 1;
    return sum + (sec.questions || 0) * effectiveWeight;
  }, 0);
  let cursor = 0;
  const weightingRows = (weightingDisplay?.groups || [])
    .map(
      (g) => `
        <tr>
          <td><strong>${g.code}</strong></td>
          <td>${g.subjects}</td>
          <td>×${g.weight}</td>
        </tr>`
    )
    .join('');
  const targetBadges = (weightingDisplay?.targetProfile?.items || [])
    .map((item) => `<span class="target-badge"><strong>${item.group}</strong>: ${item.target}</span>`)
    .join('');
  const rows = sections
    .map((sec) => {
      const effectiveWeight = sec.weight || weights[sec.group] || 1;
      const weightedUnits = (sec.questions || 0) * effectiveWeight;
      const share = weightTotals ? (weightedUnits / weightTotals) * 100 : 0;
      const minutes = weightTotals
        ? (totalMinutes * weightedUnits) / weightTotals
        : totalMinutes / sections.length;
      const perQuestion = sec.questions ? minutes / sec.questions : 0;
      const startWindow = cursor;
      const endWindow = cursor + minutes;
      cursor = endWindow;
      return `
        <tr>
          <td><strong>${sec.section}</strong><br/><span class="muted">${sec.note || ''}</span></td>
          <td>${sec.numbers || '—'}</td>
          <td>${sec.questions}</td>
          <td>×${effectiveWeight}</td>
          <td>${share.toFixed(1)}%</td>
          <td>${minutes.toFixed(1)} min</td>
          <td>${perQuestion.toFixed(2)} min/q</td>
          <td>${startWindow.toFixed(0)} – ${endWindow.toFixed(0)} min</td>
        </tr>`;
    })
    .join('');

  container.innerHTML = `
    <div class="plan-heading">
      <h3>Exam-day pacing by section (115 questions, 240 minutes)</h3>
      <p class="muted">Time per section is proportional to (questions × coefficient), matching the official weights and keeping math ≈2× language per question.</p>
    </div>
    ${weightingRows
      ? `<div class="weighting-flex">
          <div class="weighting-card">
            <p class="eyebrow">${weightingDisplay?.title || 'Group weights'}</p>
            <h4>For the AI subgroup of Computer Engineering</h4>
            <p class="muted">${weightingDisplay?.subtitle || ''}</p>
            <table class="weighting-table">
              <thead><tr><th>Group</th><th>Subjects</th><th>Weight</th></tr></thead>
              <tbody>${weightingRows}</tbody>
            </table>
          </div>
          ${targetBadges
            ? `<div class="weighting-card">
                <p class="eyebrow">${weightingDisplay?.targetProfile?.title || 'Targets'}</p>
                <h4>Suggested mock targets</h4>
                <div class="target-badges">${targetBadges}</div>
              </div>`
            : ''}
        </div>`
      : ''}
    <table class="plan-table">
      <thead>
        <tr>
          <th>Section</th>
          <th>Q. range</th>
          <th>#</th>
          <th>Weight</th>
          <th>Score share</th>
          <th>Suggested minutes</th>
          <th>Minutes per question</th>
          <th>Suggested exam window</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function initTabs() {
  const buttons = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  const activate = (id) => {
    buttons.forEach((btn) => btn.classList.toggle('active', btn.dataset.target === id));
    panels.forEach((panel) => panel.classList.toggle('active', panel.id === id));
  };
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => activate(btn.dataset.target));
  });
  activate('tab-timeline');
}

function setupCustomCourseForm(weights, progress, onUpdate) {
  const form = document.getElementById('add-course-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const title = (formData.get('title') || '').trim();
    if (!title) return;
    const url = (formData.get('url') || '').trim();
    const sessions = Number(formData.get('sessions')) || 0;
    const questions = Number(formData.get('questions')) || 0;
    const custom = loadLocal(STORAGE_KEYS.customCourses, []);
    const code = `CUSTOM-${Date.now()}`;
    custom.push({
      code,
      group: title,
      focus: url ? `Custom source: ${url}` : 'Custom source',
      books: [],
      ocw: url ? [{ title: 'Link', url }] : [],
      totalSessions: sessions || undefined,
      totalQuestions: questions || undefined,
    });
    saveLocal(STORAGE_KEYS.customCourses, custom);
    form.reset();
    renderCustomCourses(weights, progress, onUpdate);
  });
}

function renderPlanning(milestones) {
  const list = document.getElementById('milestone-list');
  if (!list) return;
  if (!milestones.length) {
    list.innerHTML = '<p class="muted">No milestones yet. Add one to get started.</p>';
    return;
  }
  const rows = milestones
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(
      (m) => `
      <div class="milestone">
        <div>
          <p class="eyebrow">${m.date}</p>
          <h4>${m.title}</h4>
          <p class="muted">${m.note || ''}</p>
        </div>
      </div>`
    )
    .join('');
  list.innerHTML = rows;
}

function setupPlanningForm() {
  const form = document.getElementById('planning-form');
  if (!form) return;
  const milestones = loadLocal(STORAGE_KEYS.milestones, []);
  renderPlanning(milestones);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const title = (data.get('title') || '').trim();
    const date = data.get('date');
    if (!title || !date) return;
    const note = (data.get('note') || '').trim();
    milestones.push({ title, date, note });
    saveLocal(STORAGE_KEYS.milestones, milestones);
    renderPlanning(milestones);
    form.reset();
  });
}

async function bootstrap() {
  try {
    initTabs();
    setupPlanningForm();
    const [eventData, resources] = await Promise.all([
      loadJsonFromMarkdown('./data/events.md'),
      loadJsonFromMarkdown('./data/resources.md'),
    ]);
    const events = eventData.events;
    const progress = loadLocal(STORAGE_KEYS.progress, {});

    const updateProgress = (code, data) => {
      const next = { ...progress, [code]: data };
      saveLocal(STORAGE_KEYS.progress, next);
    };

    renderCountdownCards(events);
    renderNextEvent(events);
    renderTimeline(events);
    renderWeightLegend(resources.weights);
    renderCourses(resources.courses, resources.weights, progress, updateProgress);
    renderCustomCourses(resources.weights, progress, updateProgress);
    setupCustomCourseForm(resources.weights, progress, updateProgress);
    renderStudyTracks(resources.studyTracks || []);
    renderCalculator(resources.weights);
    renderSafeRange(resources.safeRanges || {});
    renderSectionPacing(resources.sectionPacing, resources.weights, resources.weightingDisplay);
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
