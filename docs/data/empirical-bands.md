# Empirical Safe Bands by Block (AI – 1404–1403 Sample)

```json
{
  "summary": {
    "note": "Real AI subgroup sample (~35 candidates). Observed patterns only; not guarantees.",
    "weights": "1*L + 2*M + 3*T + 4*A + 2*H + 3*S",
    "population": 35
  },
  "formula": "(1*L + 2*M + 3*T + 4*A + 2*H + 3*S) / 15",
  "bands": [
    {
      "id": "A",
      "label": "Band A – ranks 1–10",
      "range": "1–10",
      "sampleSize": 2,
      "description": "Top-10 sample; both had very strong DS/Alg/AI and Systems with solid Theory.",
      "metrics": {
        "L": { "avg": 11, "range": "0–23%" },
        "M": { "avg": 24, "range": "17–32%" },
        "T": { "avg": 59, "range": "47–70%" },
        "A": { "avg": 76, "range": "73–78%" },
        "H": { "avg": 44, "range": "38–51%" },
        "S": { "avg": 59, "range": "56–63%" },
        "W": { "avg": 54, "range": "52–55%" }
      }
    },
    {
      "id": "B",
      "label": "Band B – ranks 11–30",
      "range": "11–30",
      "sampleSize": 3,
      "description": "Strong DS/Alg/AI with mid Theory; Systems varies widely in this band.",
      "metrics": {
        "L": { "avg": 20, "range": "0–60%" },
        "M": { "avg": 28, "range": "10–42%" },
        "T": { "avg": 55, "range": "33–89%" },
        "A": { "avg": 53, "range": "49–61%" },
        "H": { "avg": 49, "range": "42–53%" },
        "S": { "avg": 31, "range": "14–49%" },
        "W": { "avg": 43, "range": "41–46%" }
      }
    },
    {
      "id": "C",
      "label": "Band C – ranks 31–100",
      "range": "31–100",
      "sampleSize": 6,
      "description": "Mid-field sample; DS/Alg/AI still the anchor while other blocks vary.",
      "metrics": {
        "L": { "avg": 37, "range": "0–84%" },
        "M": { "avg": 19, "range": "-2–58%" },
        "T": { "avg": 32, "range": "19–47%" },
        "A": { "avg": 43, "range": "35–52%" },
        "H": { "avg": 41, "range": "13–72%" },
        "S": { "avg": 37, "range": "10–63%" },
        "W": { "avg": 36, "range": "32–40%" }
      }
    },
    {
      "id": "D",
      "label": "Band D – ranks 101–300",
      "range": "101–300",
      "sampleSize": 12,
      "description": "Lower mid-band from the sample.",
      "metrics": {
        "W": { "avg": 27, "range": "22–32%" }
      }
    },
    {
      "id": "E",
      "label": "Band E – ranks 301–700",
      "range": "301–700",
      "sampleSize": 12,
      "description": "Long tail of the sample.",
      "metrics": {
        "W": { "avg": 20, "range": "16–24%" }
      }
    }
  ],
  "weightedBands": [
    { "range": "1–10", "score": "≥52%", "note": "Behaves like ranks 1–10 in this sample" },
    { "range": "10–30", "score": "45–52%", "note": "Typical of ranks 10–30" },
    { "range": "30–100", "score": "38–45%", "note": "Typical of ranks 30–100" },
    { "range": "100–300", "score": "28–38%", "note": "Typical of ranks 100–300" },
    { "range": "300–700", "score": "20–28%", "note": "Typical of ranks 300–700" }
  ],
  "blockTargets": [
    {
      "block": "A",
      "name": "DS/Alg/AI block",
      "weight": 4,
      "bands": {
        "A": "73–78% (avg ~76%)",
        "B": "49–61% (avg ~53%)",
        "C": "35–52% (avg ~43%)"
      },
      "targets": [
        "Aim for ≥70% to mimic top-10 sample",
        "≥55–60% for a stable 11–30 shot",
        "40–50% is common for 31–100"
      ]
    },
    {
      "block": "T",
      "name": "Theory & Signals",
      "weight": 3,
      "bands": {
        "A": "47–70% (avg ~59%)",
        "B": "33–89% (avg ~55%)",
        "C": "19–47% (avg ~32%)"
      },
      "targets": [
        "≥50% to sit comfortably in top 30",
        "55–60%+ aligns with the top-10 sample"
      ]
    },
    {
      "block": "S",
      "name": "Systems (OS/Networks/DB)",
      "weight": 3,
      "bands": {
        "A": "56–63% (avg ~59%)",
        "B": "14–49% (avg ~31%)",
        "C": "10–63% (avg ~37%)"
      },
      "targets": [
        "≥50–55% for a balanced high-rank profile",
        "30–40% still works for 11–30 if A/T are strong"
      ]
    },
    {
      "block": "M",
      "name": "Math",
      "weight": 2,
      "bands": {
        "A": "17–32% (avg ~24%)",
        "B": "10–42% (avg ~28%)",
        "C": "-2–58% (avg ~19%)"
      },
      "targets": [
        "Top-30 planning: 20–30%",
        "Extra safety: 30–40%"
      ]
    },
    {
      "block": "L",
      "name": "Language",
      "weight": 1,
      "bands": {
        "A": "0–23% (avg ~11%)",
        "B": "0–60% (avg ~20%)",
        "C": "0–84% (avg ~37%)"
      },
      "targets": [
        "Treat as bonus; 20–30% is usually sufficient"
      ]
    },
    {
      "block": "H",
      "name": "Hardware (logic + architecture)",
      "weight": 2,
      "bands": {
        "A": "38–51% (avg ~44%)",
        "B": "42–53% (avg ~49%)",
        "C": "13–72% (avg ~41%)"
      },
      "targets": [
        "Top-30 planning: 40–50%",
        "Scores below ~30% show up more often in lower bands"
      ]
    }
  ],
  "mockSchema": {
    "download": "./data/mock-results-schema.csv"
  }
}
```

> ⚠️ Important
>
> - The sample has **~35 candidates**, not the full population.
> - Bands below are **observed patterns**, not guarantees.
> - Treat them as **targets for planning**, not strict cut-offs.

---

## 1. Rank bands used

From the sample we grouped candidates into:

- **Band A – ranks 1–10** (2 candidates in our data: ranks 1 and 7)
- **Band B – ranks 11–30** (3 candidates: ranks 11, 17, 21)
- **Band C – ranks 31–100** (6 candidates: ranks 33, 54, 64, 72, 88, 95)
- **Band D – ranks 101–300** (12 candidates)
- **Band E – ranks 301–700** (12 candidates)

For each band we computed:

- Minimum, maximum and **average** percentage in each block:
  - `L` – Language
  - `M` – Math
  - `T` – Theory & Signals
  - `A` – Data Structures / Algorithms / AI
  - `H` – Hardware (logic + architecture)
  - `S` – Systems (OS + Networks + DB)
  - `W` – WeightedScore using the 1–2–3–4–2–3 weights

Numbers below are rounded for readability.

---

## 2. Observed averages (quick view)

### Band A – ranks 1–10 (n = 2)

- `L` (language): **~11%** (range 0–23)
- `M` (math): **~24%** (17–32)
- `T` (theory/signals): **~59%** (47–70)
- `A` (DS/Alg/AI): **~76%** (73–78)
- `H` (hardware): **~44%** (38–51)
- `S` (systems): **~59%** (56–63)
- `W` (weighted score): **~54%** (52–55)

### Band B – ranks 11–30 (n = 3)

- `L`: **~20%** (0–60)
- `M`: **~28%** (10–42)
- `T`: **~55%** (33–89)
- `A`: **~53%** (49–61)
- `H`: **~49%** (42–53)
- `S`: **~31%** (14–49)
- `W`: **~43%** (41–46)

### Band C – ranks 31–100 (n = 6)

- `L`: **~37%** (0–84)
- `M`: **~19%** (−2–58)
- `T`: **~32%** (19–47)
- `A`: **~43%** (35–52)
- `H`: **~41%** (13–72)
- `S`: **~37%** (10–63)
- `W`: **~36%** (32–40)

(See `real-ai-results-1404-1403.md` if you want the exact raw rows.)

---

## 3. Empirical “safe bands” per block

### 3.1 DS/Alg/AI block (A)

This block has the **highest weight (4)** and very strong correlation with rank.

From the sample:

- Band A (1–10): A ≈ **73–78%** (avg ≈ 76%)
- Band B (11–30): A ≈ **49–61%** (avg ≈ 53%)
- Band C (31–100): A ≈ **35–52%** (avg ≈ 43%)

**Practical targets:**

- For a **strong shot at ranks 1–10**  
  → Aim for **A ≳ 70%** in mocks.

- For a **stable position in 11–30**  
  → Aim for **A ≳ 55–60%**.

- For **31–100**  
  → A around **40–50%** appears typical.

### 3.2 Theory & Signals block (T)

From the sample:

- Band A (1–10): T ≈ **47–70%**, avg ~59%
- Band B (11–30): T ≈ **33–89%**, avg ~55%
- Band C (31–100): T ≈ **19–47%**, avg ~32%

**Practical targets:**

- To sit comfortably in **top 30**  
  → Aim for **T ≳ 50%**.

- To match the top-10 sample qualitatively  
  → **T in the 55–60%+** zone is a good planning target.

### 3.3 Systems (OS/Networks/DB, S)

From the sample:

- Band A (1–10): S ≈ **56–63%**, avg ~59%
- Band B (11–30): S ≈ **14–49%**, avg ~31% (very spread)
- Band C (31–100): S ≈ **10–63%**, avg ~37%

Takeaways:

- Top-10 in the sample had **very strong systems scores (~60%)**.
- It is possible to reach **11–30** with weaker systems (even ~15–30%), but that requires **very strong A and T** to compensate.

**Practical targets:**

- For a **balanced high-rank profile**  
  → Aim for **S ≳ 50–55%**.

- For “compensate with A/T” strategy  
  → You could still be in **11–30** with **S ≈ 30–40%**, **if** A and T are very strong.

### 3.4 Math (M)

From the sample:

- Band A (1–10): M ≈ **17–32%**, avg ~24%
- Band B (11–30): M ≈ **10–42%**, avg ~28%
- Band C (31–100): M ≈ **−2–58%**, avg ~19%

Observations:

- High ranks are not necessarily **math monsters**; mid-20s are common.  
- Very low math scores start to show up more often below rank ~100.

**Practical targets:**

- For **top 30**: aim for **M ≳ 20–30%**.  
- For **extra safety** and flexibility in other blocks: **M ≳ 30–40%** is excellent.

### 3.5 Language (L)

From the sample:

- Band A (1–10): L ≈ **0–23%**, avg ~11%
- Band B (11–30): L ≈ **0–60%**, avg ~20%
- Band C (31–100): L ≈ **0–84%**, avg ~37%

Observations:

- Many top candidates have **low or even zero** language scores; others have strong scores.  
- Language behaves more like a **bonus** than a critical determinant for rank.

**Practical target:**

- Do not sacrifice heavy CS blocks for language.  
- Aiming for **L ≈ 20–30%** is usually sufficient; higher is a bonus.

### 3.6 Hardware (H)

From the sample:

- Band A (1–10): H ≈ **38–51%**, avg ~44%
- Band B (11–30): H ≈ **42–53%**, avg ~49%
- Band C (31–100): H ≈ **13–72%**, avg ~41%

**Practical targets:**

- For **top 30**: aim for **H ≳ 40–50%**.  
- Scores below ~30% in H appear more often in lower bands.

---

## 4. Empirical WeightedScore bands (from the same sample)

Using the weight model:

- Band A (1–10): **W ≈ 52–55%**, avg ~54%
- Band B (11–30): **W ≈ 41–46%**, avg ~43%
- Band C (31–100): **W ≈ 32–40%**, avg ~36%
- Band D (101–300): **W ≈ 22–32%**, avg ~27%
- Band E (301–700): **W ≈ 16–24%**, avg ~20%

**Heuristic mapping (planning use only):**

- **W ≥ 52%** → behaves like **ranks 1–10** in this sample.  
- **W 45–52%** → typical of **ranks 10–30**.  
- **W 38–45%** → typical of **ranks 30–100**.  
- **W 28–38%** → typical of **ranks 100–300**.  
- **W 20–28%** → typical of **ranks 300–700**.

You can plug your own mock exam results into these bands to see roughly where you stand, then adjust your study focus accordingly.
