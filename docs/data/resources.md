# Resource and scoring data

```json
{
  "weights": {
    "G0": 1,
    "G1": 2,
    "G2": 3,
    "G3": 4,
    "G4": 2,
    "G5": 3
  },
  "weightingDisplay": {
    "title": "AI subgroup (Computer Engineering) weights",
    "subtitle": "115 questions, 240 minutes — time and score weight by coefficient.",
    "groups": [
      { "code": "G0", "subjects": "English language", "weight": 1 },
      { "code": "G1", "subjects": "Engineering Math, Diff Eq, Prob/Stats, Discrete", "weight": 2 },
      { "code": "G2", "subjects": "Theory of Languages & Automata, Signals & Systems", "weight": 3 },
      { "code": "G3", "subjects": "Data Structures, Algorithms, Artificial Intelligence", "weight": 4 },
      { "code": "G4", "subjects": "Digital Logic, Computer Architecture, Digital Electronics", "weight": 2 },
      { "code": "G5", "subjects": "Operating Systems, Computer Networks, Databases", "weight": 3 }
    ],
    "targetProfile": {
      "title": "Target profile for top performance (aggressive but realistic)",
      "items": [
        { "group": "G3 and G5", "target": "80–95%" },
        { "group": "G2 and G4", "target": "70–90%" },
        { "group": "G1", "target": "40–60%" },
        { "group": "G0 (English)", "target": "70–90%" }
      ]
    }
  },
  "safeRanges": {
    "featured": {
      "title": "Top sample (ranks 1–10, model)",
      "targetWeighted": "≈52–55% (model, not official)",
      "confidence": "Derived from the 1404–1403 AI subgroup sample with weights 1–2–3–4–2–3; guidance only, not guarantees.",
      "perGroup": {
        "G3": "73–78%",
        "G2": "47–70%",
        "G5": "56–63%",
        "G4": "38–51%",
        "G1": "17–32%",
        "G0": "0–23%"
      }
    }
  },
  "courses": [
    {
      "code": "G0",
      "group": "G0 – English Language",
      "focus": "جلد ۱ کتاب زبان عمومی زیر ذره‌بین (نگاه دانش). 440 vocab + 43 cloze practice tests; exam mix: 10 vocab, 5 grammar, 15 reading. Target ≥60%.",
      "totalQuestions": 483,
      "books": [
        {
          "title": "زبان عمومی زیر ذره‌بین – جلد ۱",
          "author": "H. Dehghanpour, A. Abbasi (نگاه دانش)",
          "cover": "https://generalenglish.ir/wp-content/uploads/2017/09/vol1-cover-1.png"
        }
      ]
    },
    {
      "code": "G1-M1",
      "group": "G1 – Math 1",
      "focus": "Sharif OCW (ریاضی 1) – 30 sessions. Exam: 3 questions. Practice bank: 197 test questions.",
      "totalSessions": 30,
      "totalQuestions": 197,
      "ocw": [
        {
          "title": "Sharif University OCW – ریاضی 1 (30 sessions)",
          "url": "https://ocw.sharif.ir/course/id/255/%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C-1"
        }
      ]
    },
    {
      "code": "G1-M2",
      "group": "G1 – Math 2",
      "focus": "Continuation math track. Exam: 3 questions. Practice bank: 169 test questions.",
      "totalQuestions": 169,
      "books": [],
      "ocw": []
    },
    {
      "code": "G1-STAT",
      "group": "G1 – Engineering Statistics & Probability",
      "focus": "Exam: 7 questions in G1. Practice bank: 246 test questions.",
      "totalQuestions": 246,
      "books": [],
      "ocw": []
    },
    {
      "code": "G2",
      "group": "G2 – Automata & Signals",
      "focus": "Formal languages/automata paired with CT/DT signal processing and transforms.",
      "totalSessions": 28,
      "totalQuestions": 250,
      "books": [
        {
          "title": "Introduction to Automata Theory, Languages, and Computation",
          "author": "Hopcroft, Motwani, Ullman",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51UmSNAc9sL._SX384_BO1,204,203,200_.jpg"
        },
        {
          "title": "Signals and Systems",
          "author": "Alan V. Oppenheim, Alan S. Willsky",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51ANzWEVxQL._SX403_BO1,204,203,200_.jpg"
        }
      ],
      "ocw": [
        {
          "title": "MIT 6.003 Signals and Systems",
          "url": "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/"
        },
        {
          "title": "Sharif University – Automata Theory",
          "url": "https://ocw.sharif.edu/course/id/124/"
        }
      ]
    },
    {
      "code": "G3",
      "group": "G3 – Data Structures, Algorithms, AI",
      "focus": "High-weight core for the AI subgroup: DS/algorithms, AIMA search & probabilistic reasoning.",
      "totalSessions": 36,
      "totalQuestions": 400,
      "books": [
        {
          "title": "Introduction to Algorithms",
          "author": "Cormen, Leiserson, Rivest, Stein",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/41SNpVYYoyL._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Artificial Intelligence: A Modern Approach",
          "author": "Russell, Norvig",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/41tMKvd4x0L._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Algorithm Design Manual",
          "author": "Steven S. Skiena",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51k-9sHkYDL._SX379_BO1,204,203,200_.jpg"
        }
      ],
      "ocw": [
        {
          "title": "MIT 6.006 Introduction to Algorithms",
          "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
        },
        {
          "title": "MIT 6.046J Design & Analysis of Algorithms",
          "url": "https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/"
        },
        {
          "title": "Berkeley CS188 – Intro to AI",
          "url": "https://inst.eecs.berkeley.edu/~cs188/sp24/"
        }
      ]
    },
    {
      "code": "G4",
      "group": "G4 – Digital Logic & Architecture",
      "focus": "Logic design, combinational/sequential circuits, datapath/control, and MIPS-level architecture.",
      "totalSessions": 24,
      "totalQuestions": 240,
      "books": [
        {
          "title": "Digital Design",
          "author": "M. Morris Mano, Michael D. Ciletti",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/41qF54q9y8L._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Computer Organization and Design: MIPS Edition",
          "author": "Patterson, Hennessy",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51Yf6w7T6SL._SX396_BO1,204,203,200_.jpg"
        }
      ],
      "ocw": [
        {
          "title": "MIT 6.004 Computation Structures",
          "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
        },
        {
          "title": "Tehran Polytechnic – Digital Logic",
          "url": "https://ocw.aut.ac.ir/course/digital-logic-circuits/"
        }
      ]
    },
    {
      "code": "G5",
      "group": "G5 – Systems (OS, Networks, DB)",
      "focus": "Operating systems, networks, and databases with emphasis on OS scheduling, transport layer, and SQL/normalization.",
      "totalSessions": 30,
      "totalQuestions": 360,
      "books": [
        {
          "title": "Operating System Concepts",
          "author": "Silberschatz, Galvin, Gagne",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51Uo-TD5xXL._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Computer Networking: A Top-Down Approach",
          "author": "Kurose, Ross",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51bQ8DL5ZkL._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Database System Concepts",
          "author": "Silberschatz, Korth, Sudarshan",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51-i5nTRmpL._SX396_BO1,204,203,200_.jpg"
        }
      ],
      "ocw": [
        {
          "title": "MIT 6.1810 Operating System Engineering",
          "url": "https://ocw.mit.edu/courses/6-1810-operating-system-engineering-fall-2020/"
        },
        {
          "title": "Stanford – CS144 Introduction to Computer Networking",
          "url": "https://cs144.github.io/"
        },
        {
          "title": "Sharif University – Database Systems",
          "url": "https://ocw.sharif.edu/course/id/51/"
        }
      ]
    }
  ],
  "studyTracks": [
    {
      "id": "g3-algorithms",
      "title": "Data Structures & Algorithms (G3 core)",
      "mainTextbook": "CLRS 3rd ed.",
      "mainOCW": "MIT 6.006 + 6.046J playlists",
      "overview": "Pick one playlist and run it end-to-end alongside the matching CLRS chapters instead of hopping between sources.",
      "sections": [
        {
          "title": "Sorting & Order Statistics",
          "konkurTopics": ["Comparison and linear-time sorting", "Selection and order statistics", "Lower bounds and stability"],
          "chapters": "CLRS Ch.2–3 (growth), Ch.6–9 for heapsort/quicksort/linear-time sorting and medians",
          "ocwPlaylist": ["MIT 6.006 Lec 3 – Sets and Sorting", "MIT 6.006 Lec 5 – Linear Sorting", "Problem sessions 2–3 for practice"]
        },
        {
          "title": "Basic Data Structures",
          "konkurTopics": ["Lists, stacks, queues", "Balanced BST intuition", "Heaps and hashing"],
          "chapters": "CLRS Ch.10–13, 18 (BSTs, hashing, heaps, B-trees light)",
          "ocwPlaylist": ["MIT 6.006 Lec 2 – Dynamic Arrays", "MIT 6.006 Lec 6–8 – Trees & Heaps", "MIT 6.006 Lec 4 – Hashing"]
        },
        {
          "title": "Graph Algorithms",
          "konkurTopics": ["BFS/DFS & topological sort", "Shortest paths (Dijkstra, Bellman–Ford)", "MST (Prim, Kruskal)"],
          "chapters": "CLRS Ch.22–25 (graph basics, MST, shortest paths)",
          "ocwPlaylist": ["MIT 6.006 Lec 9–10 – BFS/DFS", "MIT 6.006 Lec 11–14 – Shortest paths & APSP"]
        },
        {
          "title": "Greedy & Dynamic Programming",
          "konkurTopics": ["Interval scheduling/Huffman reasoning", "DP on sequences and DAGs"],
          "chapters": "CLRS Ch.15–16",
          "ocwPlaylist": ["MIT 6.006 Lec 15–18 – DP parts 1–4", "MIT 6.046J greedy/DP refresher"]
        }
      ]
    },
    {
      "id": "g3-ai",
      "title": "Artificial Intelligence (within G3)",
      "mainTextbook": "Russell & Norvig – AIMA",
      "mainOCW": "Berkeley CS188",
      "overview": "Use AIMA for structure and lean on CS188 lectures for intuition and problem framing.",
      "sections": [
        {
          "title": "State-space search",
          "konkurTopics": ["BFS/DFS/uniform-cost", "Greedy best-first & A* with heuristics", "Optimality and completeness"],
          "chapters": "AIMA Ch.3–4",
          "ocwPlaylist": ["CS188 LEC02 – Uninformed search", "CS188 LEC03 – Informed search & A*", "CS188 LEC04 – Local search (intuition)"]
        },
        {
          "title": "Constraint Satisfaction Problems",
          "konkurTopics": ["Variables/domains/constraints", "Backtracking with forward checking", "Arc consistency"],
          "chapters": "AIMA Ch.6",
          "ocwPlaylist": ["CS188 CSP lectures (LEC07–08 style)"]
        },
        {
          "title": "Probabilistic reasoning & decision making",
          "konkurTopics": ["Bayes rule & conditional independence", "Simple Bayes nets and inference", "Utility + simple MDP intuition"],
          "chapters": "AIMA Ch.12–13, 16–17 (skim decisions)",
          "ocwPlaylist": ["CS188 probability/Bayes/MDP/RL lectures (LEC10–25 range)"]
        }
      ]
    },
    {
      "id": "g1-probability",
      "title": "Probability & Statistics (G1)",
      "mainTextbook": "MIT RES.6-012 notes / Devore for exercises",
      "mainOCW": "MIT 6.041 / RES.6-012",
      "overview": "Focus on distributions, conditional probability, and limit theorems that appear in AI subgroup questions.",
      "sections": [
        {
          "title": "Core probability",
          "konkurTopics": ["Sample spaces & conditional probability", "Common discrete/continuous distributions", "Expectation and variance"],
          "chapters": "RES.6-012 core lectures; Devore chapters on discrete/continuous RVs",
          "ocwPlaylist": ["RES.6-012 video series", "MIT 6.041 lectures on distributions"]
        },
        {
          "title": "Limit theorems & inference basics",
          "konkurTopics": ["LLN and CLT", "Simple confidence intervals & estimation intuition"],
          "chapters": "Later RES.6-012 lectures and 6.041 notes",
          "ocwPlaylist": ["MIT 6.041 later lectures on CLT/inference"]
        }
      ]
    },
    {
      "id": "g2-theory",
      "title": "Theory of Computation & Discrete Math (G2 partly)",
      "mainTextbook": "Sipser or Hopcroft–Motwani–Ullman; Rosen for discrete",
      "mainOCW": "MIT 6.045J",
      "overview": "Pair automata/decidability with discrete math counting and graph basics for the mixed G2 questions.",
      "sections": [
        {
          "title": "Automata & formal languages",
          "konkurTopics": ["DFA/NFA/regex equivalence", "Regular/context-free languages", "Pumping lemmas"],
          "chapters": "Sipser Ch.1–2 or HMU automata sections",
          "ocwPlaylist": ["MIT 6.045J early DFA/NFA/CFG lectures"]
        },
        {
          "title": "Decidability & complexity",
          "konkurTopics": ["Turing machines (basic)", "Decidable vs. undecidable", "P/NP and NP-complete intuition"],
          "chapters": "Sipser Ch.3–7 selections",
          "ocwPlaylist": ["MIT 6.045J computability/complexity lectures"]
        },
        {
          "title": "Discrete math & graph foundations",
          "konkurTopics": ["Logic, sets, functions", "Induction and combinatorics", "Graph fundamentals"],
          "chapters": "Rosen chapters on logic, induction, counting, graphs",
          "ocwPlaylist": ["UT Discrete Math OCW; MIT 6.042J style playlists"]
        }
      ]
    },
    {
      "id": "g2-signals",
      "title": "Signals & Systems (G2)",
      "mainTextbook": "Oppenheim & Willsky – Signals and Systems",
      "mainOCW": "MIT 6.003 / RES.6-007",
      "overview": "Hit the CT/DT fundamentals: convolution, Fourier/Laplace/Z, and sampling/frequency response.",
      "sections": [
        {
          "title": "Time-domain analysis",
          "konkurTopics": ["CT/DT signals & operations", "LTI systems and convolution", "Impulse/step responses"],
          "chapters": "Oppenheim early chapters on signals, LTI, convolution",
          "ocwPlaylist": ["MIT 6.003 lectures on LTI and convolution"]
        },
        {
          "title": "Transform-domain analysis",
          "konkurTopics": ["Fourier series/transform", "Laplace and Z-transform", "Frequency response & Bode ideas"],
          "chapters": "Oppenheim chapters on Fourier, Laplace, Z-transform and sampling",
          "ocwPlaylist": ["MIT 6.003 Fourier/Laplace/Z-transform lectures"]
        }
      ]
    },
    {
      "id": "g4-g5-systems",
      "title": "Hardware & Systems (G4 & G5)",
      "mainTextbook": "Mano (logic), Patterson/Hennessy (arch), Silberschatz (OS/DB), Kurose & Ross (networks)",
      "mainOCW": "MIT 6.004, MIT 6.S081, Stanford CS144, Stanford-style DB materials",
      "overview": "Cover the architecture path plus the OS/network/DB trio that drives G4–G5 weighting.",
      "sections": [
        {
          "title": "Digital logic & architecture",
          "konkurTopics": ["Combinational & sequential circuits", "FSM design", "Datapath + control"],
          "chapters": "Mano logic chapters; Patterson/Hennessy datapath/control sections",
          "ocwPlaylist": ["MIT 6.004 combinational/sequential modules"]
        },
        {
          "title": "Operating systems",
          "konkurTopics": ["Processes/threads & scheduling", "Synchronization/deadlocks", "Virtual memory"],
          "chapters": "Silberschatz OS Concepts core chapters",
          "ocwPlaylist": ["MIT 6.S081 lectures"]
        },
        {
          "title": "Networks & databases",
          "konkurTopics": ["Transport/application layer flows", "SQL, relational algebra, normalization"],
          "chapters": "Kurose & Ross transport/app chapters; Silberschatz DB normalization sections",
          "ocwPlaylist": ["Stanford CS144 modules", "Stanford/Sharif DB playlists"]
        }
      ]
    }
  ],
  "candidateScores": [
    {
      "rank": 1,
      "groupScores": { "G0": 0.227, "G1": 0.167, "G2": 0.7037, "G3": 0.7333, "G4": 0.3833, "G5": 0.6316 },
      "weightedScore": 55.11
    },
    {
      "rank": 7,
      "groupScores": { "G0": 0.0, "G1": 0.318, "G2": 0.4667, "G3": 0.78, "G4": 0.5064, "G5": 0.5569 },
      "weightedScore": 52.26
    },
    {
      "rank": 11,
      "groupScores": { "G0": 0.0, "G1": 0.1, "G2": 0.8889, "G3": 0.5, "G4": 0.5333, "G5": 0.2982 },
      "weightedScore": 45.52
    },
    {
      "rank": 17,
      "groupScores": { "G0": 0.0, "G1": 0.318, "G2": 0.4334, "G3": 0.4854, "G4": 0.5064, "G5": 0.4935 },
      "weightedScore": 42.47
    },
    {
      "rank": 21,
      "groupScores": { "G0": 0.601, "G1": 0.424, "G2": 0.3334, "G3": 0.6066, "G4": 0.4246, "G5": 0.1414 },
      "weightedScore": 40.99
    },
    {
      "rank": 33,
      "groupScores": { "G0": 0.0, "G1": 0.0, "G2": 0.1852, "G3": 0.5167, "G4": 0.7167, "G5": 0.6316 },
      "weightedScore": 39.67
    },
    {
      "rank": 54,
      "groupScores": { "G0": 0.1472, "G1": 0.583, "G2": 0.4667, "G3": 0.3986, "G4": 0.245, "G5": 0.0951 },
      "weightedScore": 33.89
    },
    {
      "rank": 64,
      "groupScores": { "G0": 0.0, "G1": -0.0166, "G2": 0.3333, "G3": 0.5, "G4": 0.55, "G5": 0.5789 },
      "weightedScore": 38.69
    },
    {
      "rank": 72,
      "groupScores": { "G0": 0.5766, "G1": 0.0, "G2": 0.4, "G3": 0.3466, "G4": 0.4574, "G5": 0.2282 },
      "weightedScore": 31.75
    },
    {
      "rank": 88,
      "groupScores": { "G0": 0.653, "G1": 0.2, "G2": 0.2593, "G3": 0.4667, "G4": 0.1333, "G5": 0.4561 },
      "weightedScore": 35.55
    },
    {
      "rank": 95,
      "groupScores": { "G0": 0.84, "G1": 0.367, "G2": 0.2963, "G3": 0.3667, "G4": 0.3333, "G5": 0.2456 },
      "weightedScore": 35.55
    }
  ],
  "selfEvalPlan": {
    "studyCompletionBy": "2026-02-15",
    "headline": "Finish one full pass of the syllabus by mid-February, then enter an 8-week past-paper sprint.",
    "pastPapers": [
      { "year": 1404, "recommendedDate": "2026-03-02", "focus": "Baseline self-eval right after first-pass review" },
      { "year": 1403, "recommendedDate": "2026-03-06", "focus": "Tighten timing and note careless errors" },
      { "year": 1402, "recommendedDate": "2026-03-10", "focus": "Reinforce DS/Alg/AI pacing" },
      { "year": 1401, "recommendedDate": "2026-03-13", "focus": "Watch Systems (OS/DB/Networks) timing" },
      { "year": 1400, "recommendedDate": "2026-03-17", "focus": "Math + Theory stamina" },
      { "year": 1399, "recommendedDate": "2026-03-20", "focus": "Hardware refresh (logic + arch)" },
      { "year": 1398, "recommendedDate": "2026-03-24", "focus": "AI search + probability drills" },
      { "year": 1397, "recommendedDate": "2026-03-27", "focus": "Networking/DB recall under time" },
      { "year": 1396, "recommendedDate": "2026-03-31", "focus": "Algorithm design & proofs" },
      { "year": 1395, "recommendedDate": "2026-04-03", "focus": "Signals/transforms quick checks" },
      { "year": 1394, "recommendedDate": "2026-04-07", "focus": "Operating systems corner cases" },
      { "year": 1393, "recommendedDate": "2026-04-10", "focus": "Probability & combinatorics redo" },
      { "year": 1392, "recommendedDate": "2026-04-14", "focus": "Graph/DP mastery" },
      { "year": 1391, "recommendedDate": "2026-04-17", "focus": "Architecture & caching details" },
      { "year": 1390, "recommendedDate": "2026-04-21", "focus": "Final dress rehearsal before tapered review" }
    ],
    "notes": [
      "Run each past paper as a full 240-minute simulation with the same break policy you plan for the real exam.",
      "Record scores in mock-results-schema.csv and compare to the empirical bands.",
      "Cycle back to weak blocks within 48 hours of each mock while the mistakes are fresh."
    ]
  },
  "sectionPacing": [
    {
      "section": "English (General + Technical)",
      "numbers": "1–25",
      "questions": 25,
      "group": "G0",
      "weight": 1,
      "note": "Light but fast — keep the flow and avoid overthinking vocabulary traps."
    },
    {
      "section": "Mathematics",
      "numbers": "26–45",
      "questions": 20,
      "group": "G1",
      "weight": 2,
      "note": "Calculus I&II, probability/statistics, discrete — aim for clean setups and avoid long derivations."
    },
    {
      "section": "Specialised 1 – Theory & Signals",
      "numbers": "46–55",
      "questions": 10,
      "group": "G2",
      "weight": 3,
      "note": "Theory of languages/machines + signals/systems; quick eliminations beat long proofs."
    },
    {
      "section": "Specialised 2 – DS, Algorithms, AI",
      "numbers": "56–75",
      "questions": 20,
      "group": "G3",
      "weight": 4,
      "note": "Highest leverage block; protect time for graph/DP and AI reasoning."
    },
    {
      "section": "Specialised 3 – Logic, Architecture, Digital",
      "numbers": "76–95",
      "questions": 20,
      "group": "G4",
      "weight": 2,
      "note": "Circuits, FSMs, datapath/control — mind the arithmetic and timing diagrams."
    },
    {
      "section": "Specialised 4 – OS, Networks, DB",
      "numbers": "96–115",
      "questions": 20,
      "group": "G5",
      "weight": 3,
      "note": "Concept-heavy; bank time by recalling definitions and common patterns quickly."
    }
  ]
}
```
