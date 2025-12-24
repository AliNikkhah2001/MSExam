# AI M.Sc Konkur 1405 – Master Plan

> Treat this like a production rollout: each **subject** is a service, each **mock exam** is an integration test, each **mistake** is a bug you must triage and fix.

<!-- COUNTDOWN_START -->
![Exam](https://img.shields.io/badge/Exam-AI%20MSc%201405-blue)
![Days_to_Day_1](https://img.shields.io/badge/days_to_day1-165-informational)
![Days_to_Day_2](https://img.shields.io/badge/days_to_day2-166-informational)

> As of 23 Nov 2025 (local planning date)  
> - Day 1: 7 May 2026 → **165 days left**  
> - Day 2: 8 May 2026 → **166 days left**
<!-- COUNTDOWN_END -->

---

## Table of Contents

1. [How the dynamic countdown works](#how-the-dynamic-countdown-works)
2. [Live GitHub Pages microsite](#live-github-pages-microsite)
3. [Key dates & admin](#key-dates--admin)
4. [Subject groups & weights](#subject-groups--weights)
5. [Weekly & phase roadmap](#weekly--phase-roadmap)
6. [Global task checklist](#global-task-checklist)
7. [Per-subject checklists](#persubject-checklists)
8. [Mock exam log](#mock-exam-log)

---

## How the dynamic countdown works

This repo is wired so you can keep the countdown in the header **up to date automatically** using GitHub Actions:

- The badges above are between markers:

  ```md
  <!-- COUNTDOWN_START -->
  ...
  <!-- COUNTDOWN_END -->
  ```

- A small Python script in `scripts/update_countdown.py`:
  - Recomputes days to **Day 1 (7 May 2026)** and **Day 2 (8 May 2026)**.
  - Rewrites the block between the markers with fresh values.

- A GitHub Actions workflow in `.github/workflows/update_countdown.yml`:
  - Runs once per day on a schedule.
  - Commits the updated README back to the repo.

> TL;DR: push this repo to GitHub with Actions enabled and the countdown stays fresh without you touching it.

---

## Live GitHub Pages microsite

- The repository now ships with a ready-to-serve site in **`docs/index.html`** that GitHub Pages can publish from the
  `/docs` folder.
- All timelines, countdowns, resources, and score analytics pull data from markdown:
  - **`docs/data/events.md`** – edit event names or dates and the countdowns + timeline will update automatically on the
    next page load.
  - **`docs/data/resources.md`** – edit course books/OCW links, playlist mappings, exam weights, or the real candidate table
    and the site will re-render without code changes.
    - `selfEvalPlan` → suggested dates for running past papers (1404–1390) plus the “finish syllabus by” milestone.
    - `sectionPacing` → official question counts with a weight-aware time budget per section for the 240-minute exam.
  - **`docs/data/real-ai-results-1404-1403.md`** – the raw table of public AI subgroup results used to seed the score model.
  - **`docs/data/empirical-bands.md`** – JSON + narrative of empirical rank bands, block targets, and the weighted score
    mapping used by the “Empirical bands” panel.
  - **`docs/data/mock-results-schema.csv`** – Excel/Sheets-ready schema for logging your own mocks with the same weight model.
- To publish:
  1. In the GitHub repository settings, set **Pages → Source** to **Deploy from a branch → `/docs` folder**.
  2. Push changes; Pages will serve the site (no build step required).
  3. Update the markdown data whenever schedules or resources change; the browser fetches the latest JSON block from
     each markdown file on every load.

---

## Key dates & admin

- **Exam days**
  - Day 1: **7 May 2026** (17 Ordibehesht 1405)
  - Day 2: **8 May 2026** (18 Ordibehesht 1405)

- **Registration window (on sanjesh.org)**
  - Approx. **7–14 Dec 2025** (16–23 Azar 1404 – check final brochure for exact dates again).

### Admin checklist

- [ ] Create / confirm account on **sanjesh.org**.
- [ ] Set two calendar reminders: **start** and **end** of registration window.
- [ ] Download and read the **official 1405 brochure** once it is published.
- [ ] Decide whether to choose any **second (شناور) field**.

### Registration documents checklist

- [ ] **National ID & birth certificate** handy for accurate data entry.
- [ ] **Scanned photo** (JPG, correct size, formal, no heavy edits).
- [ ] **Bachelor’s info**:
  - [ ] University name and major.
  - [ ] Entry / graduation (or expected) dates.
  - [ ] Official GPA (or sanctioned partial GPA if still studying).
- [ ] **Military status** clarified and appropriate code ready (if applicable).
- [ ] **Special quotas** (ایثارگری etc.) documents, if relevant.
- [ ] Valid **phone** and **email** that you check regularly.

---

## Subject groups & weights

For the **AI subgroup** of Computer Engineering:

| Group | Subjects                                           | Weight |
|-------|----------------------------------------------------|--------|
| G0    | English language                                   | 1      |
| G1    | Engineering Math, Diff Eq, Prob/Stats, Discrete   | 2      |
| G2    | Theory of Languages & Automata, Signals & Systems | 3      |
| G3    | Data Structures, Algorithms, Artificial Intelligence | 4   |
| G4    | Digital Logic, Computer Architecture, Digital Electronics | 2 |
| G5    | Operating Systems, Computer Networks, Databases   | 3      |

**Target profile for top performance (aggressive but realistic):**

- G3 and G5: **80–95%**
- G2 and G4: **70–90%**
- G1: **40–60%**
- G0 (English): **70–90%**

---

## Weekly & phase roadmap

You have ~24 weeks from late November to early May. Split into 3 phases:

### Phase 1 – Coverage & setup (Weeks 1–8)

- [ ] Set up this repo and your study tools (Airtable / Notion / Excel).  
- [ ] First **full pass** of all subjects (light but complete).  
- [ ] Reach at least **300–400 questions** solved in total.

### Phase 2 – Deep practice & integration (Weeks 9–18)

- [ ] Focus heavily on **G3 and G5** (high-weight groups).  
- [ ] For every 2-week block:
  - [ ] Select 2 main groups to push.
  - [ ] Solve 150–200 targeted questions per group.
  - [ ] Run at least 1 mixed mini-mock.

### Phase 3 – Mocks & polishing (Weeks 19–24)

- [ ] 1 full-length mock exam per week.
- [ ] Deep analysis after every mock (timing, mistakes, topic heatmap).
- [ ] Last 2 weeks: no big new topics, only review + light drills.

See `docs/timeline.md` for a more granular calendar.

---

## Global task checklist

General infra & habits:

- [ ] Keep a **daily log** of hours, topics, and question counts.
- [ ] Update a simple **heatmap** of strengths/weaknesses per group (G0–G5).
- [ ] Every week:
  - [ ] 1–2 hours of **weekly retrospective**.
  - [ ] Create 3–5 specific “fix tickets” for the next week.
- [ ] Every month:
  - [ ] 1 full mock.
  - [ ] Revisit high-level priorities based on data.

More detailed checklists live in the files under `notes/`.

---

## Per-subject checklists

Each subject group has its own markdown file under `notes/` with:

- Topic breakdown
- Learning subtasks
- Question-count goals
- Mini self-evaluation prompts

Start with:

- `notes/g3-ds-algo-ai.md` (core of your AI rank)
- `notes/g5-os-net-db.md` (huge impact on total score)

---

## Mock exam log

Use files under `mocks/` to log each mock. For example `mocks/mock-01.md` contains a template with:

- Time and conditions
- Per-group scores (G0–G5)
- Time management notes
- Top mistakes and concrete actions

Keeping this log honest and updated will probably move your rank more than buying any extra book.
