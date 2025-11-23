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
  "safeRanges": {
    "top3": {
      "targetWeighted": "≈52%+ (model, not official)",
      "confidence": "Based on the 1404–1403 AI subgroup public table; hitting ~52% weighted kept the leading three candidates safely ahead in this model.",
      "perGroup": {
        "G3": "67–78%",
        "G2": "69–89%",
        "G5": "50–63%",
        "G4": "47–54%",
        "G1": "17–32%",
        "G0": "0–23%"
      }
    }
  },
  "courses": [
    {
      "code": "G0",
      "group": "G0 – English Language",
      "focus": "Reading speed, vocabulary depth, and academic structures with TOEFL/IELTS-style passages.",
      "books": [
        {
          "title": "Barron's Essential Words for the TOEFL",
          "author": "Steven J. Matthiesen",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51YO5uQm3jL._SX258_BO1,204,203,200_.jpg"
        },
        {
          "title": "Objective IELTS Advanced",
          "author": "Annette Capel, Wendy Sharp",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51WyQ6ttuNL._SX379_BO1,204,203,200_.jpg"
        }
      ],
      "ocw": [
        {
          "title": "MIT OpenCourseWare – Academic English for International Students",
          "url": "https://ocw.mit.edu/courses/21g-223-writing-in-english-spring-2004/"
        },
        {
          "title": "Sharif University – Technical English seminars",
          "url": "https://ocw.sharif.edu/course/id/130/"
        }
      ]
    },
    {
      "code": "G1",
      "group": "G1 – Math & Statistics",
      "focus": "Linear algebra foundations, probability/statistics for AI, and discrete math for proofs and counting.",
      "books": [
        {
          "title": "Advanced Engineering Mathematics",
          "author": "Erwin Kreyszig",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/51L1WTrS8hL._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Probability and Statistics for Engineering and the Sciences",
          "author": "Jay L. Devore",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/41lMY1N0bBL._SX396_BO1,204,203,200_.jpg"
        },
        {
          "title": "Discrete Mathematics and Its Applications",
          "author": "Kenneth H. Rosen",
          "cover": "https://images-na.ssl-images-amazon.com/images/I/41h0uxq9dCL._SX397_BO1,204,203,200_.jpg"
        }
      ],
      "ocw": [
        {
          "title": "MIT 18.06 Linear Algebra",
          "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
        },
        {
          "title": "MIT 6.041 / RES.6-012 – Probability",
          "url": "https://ocw.mit.edu/search/?q=6.041"
        },
        {
          "title": "University of Tehran – Discrete Mathematics (OCW)",
          "url": "https://ocw.ut.ac.ir/course/2480/Discrete-Mathematics"
        }
      ]
    },
    {
      "code": "G2",
      "group": "G2 – Automata & Signals",
      "focus": "Formal languages/automata paired with CT/DT signal processing and transforms.",
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
  "candidateScores":
[
  {
    "id": "Rank-1",
    "rank": 1,
    "groupScores": {
      "G0": 0.227,
      "G1": 0.167,
      "G2": 0.7037,
      "G3": 0.7333,
      "G4": 0.3833,
      "G5": 0.6316
    },
    "weightedScore": 55.11
  },
  {
    "id": "Rank-7",
    "rank": 7,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.318,
      "G2": 0.4667,
      "G3": 0.78,
      "G4": 0.5064,
      "G5": 0.5569
    },
    "weightedScore": 52.26
  },
  {
    "id": "Rank-11",
    "rank": 11,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.1,
      "G2": 0.8889,
      "G3": 0.5,
      "G4": 0.5333,
      "G5": 0.2982
    },
    "weightedScore": 45.52
  },
  {
    "id": "Rank-17",
    "rank": 17,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.318,
      "G2": 0.4334,
      "G3": 0.4854,
      "G4": 0.5064,
      "G5": 0.4935
    },
    "weightedScore": 42.47
  },
  {
    "id": "Rank-21",
    "rank": 21,
    "groupScores": {
      "G0": 0.601,
      "G1": 0.424,
      "G2": 0.3334,
      "G3": 0.6066,
      "G4": 0.4246,
      "G5": 0.1414
    },
    "weightedScore": 40.99
  },
  {
    "id": "Rank-33",
    "rank": 33,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.1852,
      "G3": 0.5167,
      "G4": 0.7167,
      "G5": 0.6316
    },
    "weightedScore": 39.67
  },
  {
    "id": "Rank-54",
    "rank": 54,
    "groupScores": {
      "G0": 0.1472,
      "G1": 0.583,
      "G2": 0.4667,
      "G3": 0.3986,
      "G4": 0.245,
      "G5": 0.0951
    },
    "weightedScore": 33.89
  },
  {
    "id": "Rank-64",
    "rank": 64,
    "groupScores": {
      "G0": 0.0,
      "G1": -0.0166,
      "G2": 0.3333,
      "G3": 0.5,
      "G4": 0.55,
      "G5": 0.5789
    },
    "weightedScore": 38.69
  },
  {
    "id": "Rank-72",
    "rank": 72,
    "groupScores": {
      "G0": 0.5766,
      "G1": 0.0,
      "G2": 0.4,
      "G3": 0.3466,
      "G4": 0.4574,
      "G5": 0.2282
    },
    "weightedScore": 31.75
  },
  {
    "id": "Rank-88",
    "rank": 88,
    "groupScores": {
      "G0": 0.653,
      "G1": 0.2,
      "G2": 0.2593,
      "G3": 0.4667,
      "G4": 0.1333,
      "G5": 0.4561
    },
    "weightedScore": 35.55
  },
  {
    "id": "Rank-95",
    "rank": 95,
    "groupScores": {
      "G0": 0.84,
      "G1": 0.367,
      "G2": 0.2963,
      "G3": 0.3667,
      "G4": 0.3333,
      "G5": 0.2456
    },
    "weightedScore": 35.55
  },
  {
    "id": "Rank-106",
    "rank": 106,
    "groupScores": {
      "G0": 0.2454,
      "G1": 0.0883,
      "G2": 0.3,
      "G3": 0.5546,
      "G4": 0.1634,
      "G5": 0.1522
    },
    "weightedScore": 28.83
  },
  {
    "id": "Rank-127",
    "rank": 127,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.053,
      "G2": 0.0667,
      "G3": 0.52,
      "G4": 0.441,
      "G5": 0.2829
    },
    "weightedScore": 27.45
  },
  {
    "id": "Rank-143",
    "rank": 143,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.133,
      "G2": 0.3333,
      "G3": 0.3833,
      "G4": 0.5667,
      "G5": 0.2982
    },
    "weightedScore": 32.18
  },
  {
    "id": "Rank-155",
    "rank": 155,
    "groupScores": {
      "G0": 0.48,
      "G1": 0.0,
      "G2": 0.2222,
      "G3": 0.2833,
      "G4": 0.65,
      "G5": 0.386
    },
    "weightedScore": 31.59
  },
  {
    "id": "Rank-170",
    "rank": 170,
    "groupScores": {
      "G0": 0.5152,
      "G1": 0.0353,
      "G2": 0.1333,
      "G3": 0.104,
      "G4": 0.735,
      "G5": 0.3031
    },
    "weightedScore": 25.21
  },
  {
    "id": "Rank-194",
    "rank": 194,
    "groupScores": {
      "G0": 0.0,
      "G1": -0.0332,
      "G2": 0.2222,
      "G3": 0.4333,
      "G4": 0.4833,
      "G5": 0.3509
    },
    "weightedScore": 29.02
  },
  {
    "id": "Rank-212",
    "rank": 212,
    "groupScores": {
      "G0": 0.107,
      "G1": 0.0,
      "G2": 0.3333,
      "G3": 0.4667,
      "G4": 0.3167,
      "G5": 0.2456
    },
    "weightedScore": 28.96
  },
  {
    "id": "Rank-232",
    "rank": 232,
    "groupScores": {
      "G0": 0.0,
      "G1": -0.0176,
      "G2": 0.4,
      "G3": 0.104,
      "G4": 0.3756,
      "G5": 0.3638
    },
    "weightedScore": 22.82
  },
  {
    "id": "Rank-246",
    "rank": 246,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.2667,
      "G3": 0.1734,
      "G4": 0.3594,
      "G5": 0.3804
    },
    "weightedScore": 22.36
  },
  {
    "id": "Rank-253",
    "rank": 253,
    "groupScores": {
      "G0": 0.0933,
      "G1": 0.133,
      "G2": 0.0741,
      "G3": 0.1167,
      "G4": 0.5667,
      "G5": 0.5439
    },
    "weightedScore": 25.42
  },
  {
    "id": "Rank-268",
    "rank": 268,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.3333,
      "G3": 0.2,
      "G4": 0.3833,
      "G5": 0.386
    },
    "weightedScore": 24.83
  },
  {
    "id": "Rank-299",
    "rank": 299,
    "groupScores": {
      "G0": 0.787,
      "G1": 0.1,
      "G2": 0.3333,
      "G3": 0.1167,
      "G4": 0.25,
      "G5": 0.2632
    },
    "weightedScore": 24.96
  },
  {
    "id": "Rank-314",
    "rank": 314,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.2,
      "G3": 0.0346,
      "G4": 0.441,
      "G5": 0.485
    },
    "weightedScore": 20.5
  },
  {
    "id": "Rank-338",
    "rank": 338,
    "groupScores": {
      "G0": 0.0933,
      "G1": 0.4,
      "G2": 0.0741,
      "G3": 0.35,
      "G4": 0.0833,
      "G5": 0.2982
    },
    "weightedScore": 23.85
  },
  {
    "id": "Rank-355",
    "rank": 355,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.2222,
      "G3": 0.2333,
      "G4": 0.4667,
      "G5": 0.3158
    },
    "weightedScore": 23.2
  },
  {
    "id": "Rank-374",
    "rank": 374,
    "groupScores": {
      "G0": 0.1594,
      "G1": 0.0,
      "G2": 0.1667,
      "G3": 0.156,
      "G4": 0.3104,
      "G5": 0.3233
    },
    "weightedScore": 19.16
  },
  {
    "id": "Rank-385",
    "rank": 385,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.0,
      "G3": 0.2774,
      "G4": 0.3266,
      "G5": 0.3593
    },
    "weightedScore": 18.94
  },
  {
    "id": "Rank-405",
    "rank": 405,
    "groupScores": {
      "G0": 0.0368,
      "G1": 0.0,
      "G2": -0.0666,
      "G3": 0.2254,
      "G4": 0.5064,
      "G5": 0.3436
    },
    "weightedScore": 18.55
  },
  {
    "id": "Rank-429",
    "rank": 429,
    "groupScores": {
      "G0": 0.0667,
      "G1": 0.0,
      "G2": 0.1481,
      "G3": 0.3667,
      "G4": 0.1333,
      "G5": 0.2982
    },
    "weightedScore": 20.93
  },
  {
    "id": "Rank-457",
    "rank": 457,
    "groupScores": {
      "G0": 0.12,
      "G1": 0.0,
      "G2": 0.2963,
      "G3": 0.1667,
      "G4": 0.3167,
      "G5": 0.3333
    },
    "weightedScore": 22.06
  },
  {
    "id": "Rank-489",
    "rank": 489,
    "groupScores": {
      "G0": 0.08,
      "G1": 0.0333,
      "G2": 0.0741,
      "G3": 0.2167,
      "G4": 0.3667,
      "G5": 0.3333
    },
    "weightedScore": 19.79
  },
  {
    "id": "Rank-539",
    "rank": 539,
    "groupScores": {
      "G0": 0.0,
      "G1": 0.0,
      "G2": 0.0333,
      "G3": 0.2946,
      "G4": 0.3756,
      "G5": 0.1414
    },
    "weightedScore": 16.36
  },
  {
    "id": "Rank-580",
    "rank": 580,
    "groupScores": {
      "G0": 0.08,
      "G1": 0.05,
      "G2": 0.0,
      "G3": 0.3167,
      "G4": 0.25,
      "G5": 0.2807
    },
    "weightedScore": 18.59
  },
  {
    "id": "Rank-627",
    "rank": 627,
    "groupScores": {
      "G0": 0.213,
      "G1": 0.0333,
      "G2": 0.0741,
      "G3": 0.3167,
      "G4": 0.3167,
      "G5": 0.1579
    },
    "weightedScore": 19.17
  }
]
}
```
