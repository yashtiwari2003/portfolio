export const PERSONAL_INFO = {
  name: "Yash Tiwari",
  initial: "Y",
  role: "AI-Powered Data Analyst",
  tagline: "Empowering business decisions through predictive analytics, machine learning diagnostics, and interactive visualization dashboards.",
  email: "yashtiwari1812003@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1Nla5rXjXlbiZTdpJ-zzMxJt8PAKdm5CZ/view?usp=drive_link",
  github: "https://github.com/yashtiwari2003",
  linkedin: "https://www.linkedin.com/in/yash-tiwari-40b068255/",
  location: "Jabalpur, India"
};

export const NAV_LINKS = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "analytics", title: "Analytics" },
  { id: "achievements", title: "Milestones" },
  { id: "certifications", title: "Certifications" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const HIGHLIGHT_CARDS = [
  {
    title: "AI-Powered Diagnostics",
    subtitle: "Automated Root-Cause Analysis",
    description: "Combining LLM reasoning with STL decomposition, MAD robust z-scores, and contribution tests to dissect anomalies across 100K+ enterprise records with 98% audit verification.",
    icon: "BrainCircuit",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    title: "Workforce & BI Engineering",
    subtitle: "Executive Power BI & DAX",
    description: "Architecting interactive multi-page dashboards on 16K+ employee records, delivering real-time metrics on attrition, headcount velocity, and retention forecast.",
    icon: "BarChart3",
    accent: "from-purple-500 to-indigo-600"
  },
  {
    title: "Data Pipeline & Cleaning",
    subtitle: "Pandas, SQL & DuckDB",
    description: "Production data wrangling, duplicate resolution, outlier pruning, and automated validation pipelines turning messy raw telemetry into high-integrity decision assets.",
    icon: "Database",
    accent: "from-emerald-500 to-teal-600"
  },
  {
    title: "Automation & Backend APIs",
    subtitle: "FastAPI, Django & Python",
    description: "Building scalable analytics microservices, automated scheduled reports, and read-only SQL guardrails ensuring safe, reproducible business reporting.",
    icon: "Cpu",
    accent: "from-amber-500 to-orange-600"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming & Data Science",
    color: "cyan",
    skills: [
      { name: "Python", level: 95, icon: "Code2" },
      { name: "Pandas", level: 92, icon: "Table" },
      { name: "NumPy", level: 90, icon: "Binary" },
      { name: "SQL", level: 90, icon: "Database" },
      { name: "DAX", level: 88, icon: "Sigma" },
      { name: "VBA", level: 82, icon: "FileSpreadsheet" }
    ]
  },
  {
    title: "BI & Visualization",
    color: "purple",
    skills: [
      { name: "Power BI", level: 95, icon: "PieChart" },
      { name: "Excel with AI", level: 92, icon: "Sheet" },
      { name: "Interactive Reporting", level: 90, icon: "LayoutDashboard" },
      { name: "Data Storytelling", level: 88, icon: "Presentation" },
      { name: "KPI Dashboards", level: 94, icon: "TrendingUp" }
    ]
  },
  {
    title: "AI & Statistical Modeling",
    color: "emerald",
    skills: [
      { name: "Anomaly Detection", level: 90, icon: "SearchCheck" },
      { name: "STL Decomposition", level: 86, icon: "Activity" },
      { name: "MAD Robust Z-Scores", level: 88, icon: "Sliders" },
      { name: "LLM APIs & Prompting", level: 88, icon: "Bot" },
      { name: "SQL Guardrails", level: 92, icon: "ShieldCheck" },
      { name: "ML Foundations", level: 85, icon: "Network" }
    ]
  },
  {
    title: "Databases, Frameworks & Tools",
    color: "blue",
    skills: [
      { name: "DuckDB", level: 85, icon: "DatabaseZap" },
      { name: "FastAPI", level: 84, icon: "Zap" },
      { name: "Django", level: 80, icon: "Server" },
      { name: "Streamlit", level: 92, icon: "Layers" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch" },
      { name: "Docker", level: 78, icon: "Container" },
      { name: "Postman & REST APIs", level: 85, icon: "Send" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "workforce-analytics",
    title: "Workforce Analytics: Manpower, Attrition & Hiring Dashboards",
    timeline: "Aug 2026 – Present",
    category: "Business Intelligence & People Analytics",
    summary: "End-to-end Power BI executive dashboard ecosystem for manpower planning, attrition forecasting, and recruitment tracking built on internal HR master datasets.",
    metrics: [
      { label: "Master Records", value: "16,000+" },
      { label: "Data Quality", value: "99.8%" },
      { label: "Turnaround Time", value: "-60%" }
    ],
    features: [
      "Engineered end-to-end Power BI dashboards visualizing active headcount, joining vs. exit trajectories, and recruitment funnel bottlenecks.",
      "Cleaned, deduplicated, and standardized 16,000+ employee records using Python (Pandas) and SQL queries to construct a single source of truth.",
      "Developed complex DAX measures including dynamic rolling attrition rates, average tenure distribution, and gender diversity indexes with multi-level drill-down capabilities."
    ],
    tags: ["Power BI", "DAX", "Python", "Pandas", "SQL", "HR Analytics"],
    liveUrl: "https://github.com/yashtiwari2003",
    githubUrl: "https://github.com/yashtiwari2003",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    chartType: "bar"
  },
  {
    id: "metric-detective",
    title: "Metric Detective — AI Root-Cause Analyst",
    timeline: "Sep 2026",
    category: "AI / ML Analytics & Automated Diagnostics",
    summary: "Automated AI-powered anomaly detection and causal diagnostic engine scanning 100,000+ Brazilian e-commerce transaction records to explain KPI variances in real time.",
    metrics: [
      { label: "Orders Analyzed", value: "100,000+" },
      { label: "Number Audit Match", value: "98.0%" },
      { label: "Root-Cause Precision", value: "66.6%" }
    ],
    features: [
      "Detected anomalies across revenue, sales volumes, delivery delays, cancellations, and customer review scores using STL decomposition and MAD robust z-scores.",
      "Automated SQL-based hypothesis testing and dimension contribution analysis with 66.6% root-cause precision on 30 benchmark anomaly simulations.",
      "Engineered read-only SQL execution sandboxes and an automated claim verification agent that cross-checks LLM narrative outputs against executed query results with 98% accuracy."
    ],
    tags: ["Python", "SQL", "DuckDB", "LLM APIs", "Streamlit", "STL Decomposition"],
    liveUrl: "https://github.com/yashtiwari2003",
    githubUrl: "https://github.com/yashtiwari2003",
    gradient: "from-cyan-500 via-teal-500 to-emerald-600",
    chartType: "line"
  },
  {
    id: "pipeline-automation",
    title: "Automated Data Pipeline & KPI Telemetry Engine",
    timeline: "2026",
    category: "Data Engineering & Process Automation",
    summary: "High-throughput data extraction and automated validation service processing daily transactional dumps into normalized analytical datasets ready for instant executive consumption.",
    metrics: [
      { label: "Manual Effort Saved", value: "85%" },
      { label: "SQL Accuracy", value: "97.0%" },
      { label: "Sync Latency", value: "< 2 min" }
    ],
    features: [
      "Constructed automated ETL workflows using Python, FastAPI microservices, and scheduled cron workers to ingest raw Excel/CSV dumps.",
      "Designed data integrity rules preventing schema drift, invalid foreign keys, and duplicate entries before updating analytical tables.",
      "Auto-generated executive KPI summaries formatted for instant consumption in Power BI and automated email dispatches."
    ],
    tags: ["Python", "FastAPI", "SQL", "Excel VBA", "Automation Strategy"],
    liveUrl: "https://github.com/yashtiwari2003",
    githubUrl: "https://github.com/yashtiwari2003",
    gradient: "from-purple-600 via-pink-600 to-amber-600",
    chartType: "area"
  }
];

export const ACHIEVEMENTS = [
  {
    count: "100K+",
    label: "E-Commerce Records Analyzed",
    description: "Deep anomaly detection & root-cause discovery across large-scale marketplace orders."
  },
  {
    count: "98.0%",
    label: "AI Claim Verification Rate",
    description: "Automated audit verification matching AI claims with executed SQL query results."
  },
  {
    count: "16K+",
    label: "Cleaned HR Master Records",
    description: "Standardized, deduplicated, and modeled for workforce & attrition dashboards."
  },
  {
    count: "97.0%",
    label: "First-Try SQL Execution Success",
    description: "Achieved through robust schema guardrails and syntax-validating LLM agents."
  }
];

export const CERTIFICATIONS = [
  {
    title: "PCAP – Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Nov 2023",
    skills: ["Python 3", "Data Structures", "Object-Oriented Programming", "Algorithm Design"],
    link: "https://drive.google.com/file/d/1Nla5rXjXlbiZTdpJ-zzMxJt8PAKdm5CZ/view?usp=drive_link"
  },
  {
    title: "AWS Academy Graduate – Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "Sep 2024",
    skills: ["Machine Learning Concepts", "Model Evaluation", "Cloud ML Workflows", "Feature Engineering"],
    link: "https://drive.google.com/file/d/1Nla5rXjXlbiZTdpJ-zzMxJt8PAKdm5CZ/view?usp=drive_link"
  }
];

export const EDUCATION = {
  institution: "Gyan Ganga Institute of Technology and Sciences",
  location: "Jabalpur, Madhya Pradesh, India",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Artificial Intelligence and Machine Learning (AI & ML)",
  duration: "2022 – 2026",
  cgpa: "7.18 / 10.0",
  highlights: [
    "Specialized coursework in AI/ML Algorithms, Applied Statistics, Database Management Systems, and Python Engineering.",
    "Led academic and applied projects focusing on real-world business data diagnostics, anomaly detection, and predictive modeling.",
    "Active participant in technical symposiums, analytical hackathons, and technical community workshops."
  ]
};
