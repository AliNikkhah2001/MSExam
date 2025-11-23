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
  container.innerHTML = '<div class="timeline-track"></div>';
  const track = container.querySelector('.timeline-track');
  const now = new Date();
  const sorted = events.map((evt) => ({ ...evt, date: new Date(evt.datetime) })).sort((a, b) => a.date - b.date);
  const start = sorted[0].date.getTime();
  const end = sorted[sorted.length - 1].date.getTime();
  const span = Math.max(1, end - start);
  const rowAnchors = [];
  const trackWidth = track.getBoundingClientRect().width || track.offsetWidth || 780;
  const cardWidth = 190;
  const minGapPx = cardWidth + 24;

  sorted.forEach((evt) => {
    const status = evt.date < now ? 'done' : 'upcoming';
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

function renderCourses(courses, weights) {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = '';
  courses.forEach((course) => {
    const card = document.createElement('div');
    card.className = 'course-card';
    const weight = weights[course.code] ?? weights[course.group.split(' ')[0]];
    card.innerHTML = `
      <h3>${course.group}</h3>
      <p class="course-weight">Weight in model: <strong>${weight ? `×${weight}` : '—'}</strong></p>
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
  if (!featured) return;
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

function renderScoreTable(candidates, weights) {
  const tbody = document.querySelector('#score-table tbody');
  tbody.innerHTML = '';
  const formatCell = (value) => `${(value * 100).toFixed(1)}%`;
  candidates.forEach((c) => {
    const computed = computeWeightedScore(c.groupScores, weights);
    const breakdown = Object.entries(weights)
      .map(([group, weight]) => `${group}×${weight}=${(((c.groupScores || {})[group] || 0) * 100).toFixed(1)}%`)
      .join(' + ');
    const barWidth = Math.min(100, computed);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.rank}</td>
      <td>${c.id}</td>
      <td>
        <div class="score-bar">
          <span style="width:${barWidth.toFixed(1)}%"></span>
          <strong>${computed.toFixed(2)}%</strong>
        </div>
      </td>
      <td>${formatCell(c.groupScores.G0)}</td>
      <td>${formatCell(c.groupScores.G1)}</td>
      <td>${formatCell(c.groupScores.G2)}</td>
      <td>${formatCell(c.groupScores.G3)}</td>
      <td>${formatCell(c.groupScores.G4)}</td>
      <td>${formatCell(c.groupScores.G5)}</td>
      <td class="formula" title="${breakdown}">${breakdown}</td>`;
    tbody.appendChild(tr);
  });
}

function renderBandSummary(bandsData) {
  const container = document.getElementById('band-grid');
  if (!container || !bandsData?.bands) return;
  container.innerHTML = '';
  bandsData.bands.forEach((band) => {
    const card = document.createElement('div');
    card.className = 'band-card';
    const metrics = ['L', 'M', 'T', 'A', 'H', 'S', 'W']
      .filter((k) => band.metrics[k])
      .map(
        (k) => `
        <li>
          <span class="code">${k}</span>
          <div>
            <p class="range">${band.metrics[k].range}</p>
            <p class="muted">avg ~${band.metrics[k].avg}%</p>
          </div>
        </li>`,
      )
      .join('');
    card.innerHTML = `
      <div class="band-header">
        <p class="eyebrow">${band.label}</p>
        <h3>${band.range}</h3>
        <p class="muted">Sample size: ${band.sampleSize}</p>
        <p class="muted">${band.description}</p>
      </div>
      <ul class="band-metrics">${metrics}</ul>`;
    container.appendChild(card);
  });
}

function renderBlockTargets(bandsData) {
  const container = document.getElementById('block-targets');
  if (!container || !bandsData?.blockTargets) return;
  container.innerHTML = '';
  bandsData.blockTargets.forEach((block) => {
    const bandLines = Object.entries(block.bands)
      .map(([band, text]) => `<li><strong>${band}</strong>: ${text}</li>`)
      .join('');
    const targets = (block.targets || []).map((t) => `<li>${t}</li>`).join('');
    const card = document.createElement('div');
    card.className = 'target-card';
    card.innerHTML = `
      <div class="target-heading">
        <p class="eyebrow">${block.block} block (weight ×${block.weight})</p>
        <h4>${block.name}</h4>
        <p class="muted">${block.notes || ''}</p>
      </div>
      <div class="target-body">
        <p class="eyebrow">Observed ranges (sample)</p>
        <ul class="band-lines">${bandLines}</ul>
        <p class="eyebrow">Practical targets</p>
        <ul class="targets">${targets}</ul>
      </div>`;
    container.appendChild(card);
  });
}

function renderWeightedBands(bandsData) {
  const container = document.getElementById('weighted-bands');
  if (!container || !bandsData?.weightedBands) return;
  container.innerHTML = '<h3>Weighted score bands (model)</h3>';
  const list = document.createElement('div');
  list.className = 'weighted-band-list';
  bandsData.weightedBands.forEach((band) => {
    const pill = document.createElement('div');
    pill.className = 'weighted-band';
    pill.innerHTML = `
      <div class="band-range">${band.range}</div>
      <div class="band-score">${band.score}</div>
      <p class="muted">${band.note}</p>`;
    list.appendChild(pill);
  });
  container.appendChild(list);
}

function renderFormula(bandsData, weights) {
  const container = document.getElementById('formula-card');
  if (!container) return;
  const formulaText = bandsData?.formula || '(1*L + 2*M + 3*T + 4*A + 2*H + 3*S) / 15';
  const mockLink = bandsData?.mockSchema?.download || './data/mock-results-schema.csv';
  container.innerHTML = `
    <h3>Mock logging template</h3>
    <p class="muted">Use this Excel/Sheets-ready schema and formula to log your practice tests.</p>
    <p class="eyebrow">Weighted formula</p>
    <code class="formula-code">${formulaText}</code>
    <p class="muted">Weights currently: ${Object.entries(weights)
      .map(([g, w]) => `${g}×${w}`)
      .join(', ')}</p>
    <a class="download" href="${mockLink}" download>Download mock-results-schema.csv</a>
  `;
}

async function bootstrap() {
  try {
    const [eventData, resources, bands] = await Promise.all([
      loadJsonFromMarkdown('./data/events.md'),
      loadJsonFromMarkdown('./data/resources.md'),
      loadJsonFromMarkdown('./data/empirical-bands.md'),
    ]);
    const events = eventData.events;
    renderCountdownCards(events);
    renderNextEvent(events);
    renderTimeline(events);
    renderWeightLegend(resources.weights);
    renderCourses(resources.courses, resources.weights);
    renderStudyTracks(resources.studyTracks || []);
    renderCalculator(resources.weights);
    renderSafeRange(resources.safeRanges);
    renderScoreTable(resources.candidateScores, resources.weights);
    renderBandSummary(bands);
    renderBlockTargets(bands);
    renderWeightedBands(bands);
    renderFormula(bands, resources.weights);
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
