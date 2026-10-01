export const projectsData = [
  {
    id: "climatetwin-ai",
    title: "ClimateTwin-AI — AI-Powered Climate Risk Digital Twin",
    shortDescription: "An AI-powered Digital Twin developed for the ISRO Bharatiya Antariksh Hackathon to model and analyze climate risk across Odisha.",
    fullDescription: "ClimateTwin-AI is an AI-powered Digital Twin system developed for the ISRO Bharatiya Antariksh Hackathon (Team BrainStormers). It integrates historical ISRO climate datasets, live WeatherAPI data, a Hybrid AI risk engine (Random Forest + Rule Engine override), and an interactive scenario simulator for district-wise climate monitoring across Odisha.",
    category: ["AI/ML", "Python", "Full Stack"],
    technologies: ["Python", "FastAPI", "Scikit-Learn", "Random Forest", "WeatherAPI", "HTML5/CSS3/JS", "Unittest"],
    featured: true,
    status: "Completed",
    date: "2024",
    github: "https://github.com/srabani-khuntia/ClimateTwin-AI",
    liveDemo: "",
    image: "/assets/projects/ClimateTwinAI.png",
    features: [
      "Digital Twin virtual climate state management & confidence score generation",
      "Hybrid AI Risk Engine combining Random Forest classification with safety Rule Engine overrides",
      "Live WeatherAPI integration for real-time district-wise Odisha weather monitoring",
      "Interactive Scenario Simulator for temperature and rainfall 'What-If' climate modeling",
      "Automated unit testing suite verifying Digital Twin state updates and input validation"
    ],
    challenges: "Ensuring accurate climate risk predictions during extreme weather spikes where statistical Machine Learning models alone might under-predict unprecedented conditions.",
    solution: "Implemented a Hybrid AI architecture combining Random Forest prediction with a deterministic Rule Engine override that safely detects severe weather anomalies."
  },
  {
    id: "ai-study-buddy",
    title: "AI Study Buddy — AI PDF Question-Answering System",
    shortDescription: "An AI-powered PDF question-answering system built with Streamlit, Python, and Gemini API for intelligent document understanding.",
    fullDescription: "AI Study Buddy is an interactive learning workspace that enables users to upload PDF documents and receive instant AI-generated answers, concept summaries, and document insights.",
    category: ["AI/ML", "Python"],
    technologies: ["Streamlit", "Python", "Gemini API", "PDF Parsing"],
    featured: true,
    status: "Completed",
    date: "2025",
    github: "https://github.com/Jagannath357/Ai_Study_Body",
    liveDemo: "",
    image: "/assets/projects/ai-study-buddy.png",
    features: [
      "Developed an AI-powered PDF question-answering system using Streamlit, Python, and Gemini API",
      "Implemented PDF upload and AI-based document understanding for user queries",
      "Interactive focus UI for instant key summary extraction and study revision"
    ],
    challenges: "Efficiently extracting and chunking large PDF document texts for low-latency Gemini API prompt processing.",
    solution: "Used Python PyPDF parsing pipelines paired with semantic text chunking for fast API response generation."
  },
  {
    id: "order-management-system",
    title: "Online Product Order Management System (OMS)",
    shortDescription: "Full-stack OMS for product management, inventory, orders, invoices, and delivery tracking built with Angular and Spring Boot.",
    fullDescription: "A complete enterprise Order Management System covering end-to-end product lifecycle, inventory sync, order processing, PDF invoice generation, delivery tracking, and customer support notifications.",
    category: ["Full Stack", "Java", "Spring Boot"],
    technologies: ["Angular", "Spring Boot", "MySQL", "REST APIs", "Java", "Spring MVC"],
    featured: true,
    status: "Completed",
    date: "2024",
    github: "https://github.com/Jagannath357",
    liveDemo: "",
    image: "/assets/projects/student-progress-tracker.png",
    features: [
      "Developed a full-stack OMS for product management, bookings, inventory, orders, invoices, and delivery tracking",
      "Implemented REST APIs, CRUD operations, customer support, reports, filtering, and notification management",
      "Role-based access control and dashboard reports for inventory managers"
    ],
    challenges: "Maintaining relational transactional consistency across concurrent order bookings and inventory updates.",
    solution: "Implemented Spring `@Transactional` service demarcation with MySQL ACID isolation levels."
  },
  {
    id: "customer-lead-crm",
    title: "Customer Lead CRM System (Full Stack)",
    shortDescription: "Full-stack CRM to manage customer leads, follow-ups, statuses, priorities, and lead types using Angular and Spring Boot.",
    fullDescription: "Customer Lead CRM allows sales teams to manage customer leads, track follow-up schedules, filter priorities, and analyze conversion pipelines through intuitive analytics dashboards.",
    category: ["Full Stack", "Java", "Spring Boot"],
    technologies: ["Angular", "Spring Boot", "MySQL", "REST APIs", "Java"],
    featured: true,
    status: "Completed",
    date: "2024",
    github: "https://github.com/Jagannath357",
    liveDemo: "",
    image: "/assets/projects/customer-lead-crm.png",
    features: [
      "Developed a full-stack CRM to manage customer leads, follow-ups, statuses, priorities, and lead types",
      "Implemented REST APIs, CRUD operations, search/filtering, validation, dashboard, and follow-up management",
      "Interactive status pipeline visualization"
    ],
    challenges: "Building responsive multi-criteria lead search filters with real-time paginated results.",
    solution: "Utilized JPA Criteria Builder dynamic query specs in Spring Boot with Angular reactive forms."
  },
  {
    id: "connectx",
    title: "ConnectX — Social Networking Platform",
    shortDescription: "A developer social networking platform built using Java Servlets, JSP, JSTL, and MySQL following MVC architecture.",
    fullDescription: "ConnectX is a web-based social networking platform allowing developers to create profiles, post updates, message connections, and showcase technical projects.",
    category: ["Java", "Full Stack"],
    technologies: ["Java", "Servlets", "JSP", "JSTL", "MySQL", "JDBC", "MVC"],
    featured: true,
    status: "Completed",
    date: "2024",
    github: "https://github.com/Jagannath357/connectx",
    liveDemo: "",
    image: "/assets/projects/connectx.png",
    features: [
      "Developed a social networking platform using Java Servlets, JSP, JSTL, and MySQL",
      "Implemented authentication, posting, messaging, MVC architecture, and database integration",
      "Session management and SQL injection prevention via PreparedStatements"
    ],
    challenges: "Structuring dynamic web request dispatching cleanly using core Servlet APIs without external frameworks.",
    solution: "Followed strict Front Controller MVC architecture with centralized request routing."
  },
  {
    id: "rappidnet",
    title: "RappidNet — Network Utility Web App",
    shortDescription: "Responsive React and Supabase web application built using Lovable featuring user authentication and database connectivity.",
    fullDescription: "RappidNet is a modern web application providing network diagnostic analytics, live ping tracking, and Supabase cloud data storage.",
    category: ["React", "Frontend"],
    technologies: ["React", "Supabase", "JavaScript", "Tailwind CSS", "Lovable"],
    featured: false,
    status: "Completed",
    date: "2024",
    github: "https://github.com/Jagannath357/rappidnet",
    liveDemo: "",
    image: "/assets/projects/rappidnet.png",
    features: [
      "Developed a responsive React and Supabase web application using Lovable",
      "Implemented user authentication and Supabase database connectivity",
      "Real-time state synchronization and responsive UI design"
    ],
    challenges: "Integrating cloud authentication flows with local client state persistence.",
    solution: "Used Supabase auth state change listeners bound to React context state."
  }
];

export const projectCategories = [
  "All",
  "React",
  "Java",
  "Spring Boot",
  "AI/ML",
  "Full Stack",
  "Python"
];
