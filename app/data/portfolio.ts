export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectEntry = {
  title: string;
  description: string;
  tags: string[];
};

export type SkillCategory = {
  category: string;
  tags: string[];
};

export type DevOpsTool = {
  name: string;
  src?: string;
  logoClass?: string;
};

export type EducationEntry = {
  degree: string;
  university: string;
  period: string;
  location: string;
};

export const EXPERIENCES: ExperienceEntry[] = [
  {
    title: "Sr. Full Stack Developer",
    company: "EdysorAI (Udaipur)",
    period: "Jun 2025 – Present",
    location: "Udaipur",
    points: [
      "Led architecture, database design, and end-to-end development of scalable B2B SaaS and HR automation platforms using Node.js, FastAPI, and React, managing a team of 10 engineers and delivering production-grade systems.",
      "Built fully automated, AI-powered, 24/7 event-driven systems (Kafka) for business operations and recruitment workflows, reducing operational costs by ~55% and ~47% while eliminating manual intervention.",
      "Designed and deployed resilient, high-performance systems with CI/CD pipelines (Jenkins, ArgoCD), optimizing queries and response times to improve system throughput, reliability, and uptime for distributed services.",
      "Ensured enterprise-grade compliance (GDPR, ISO, DPDP Act) and system stability by resolving production issues, driving POCs for new technologies, and implementing robust testing (Pytest).",
    ],
  },
  {
    title: "Sr. Full Stack Developer",
    company: "Webanix Solutions (Udaipur)",
    period: "Nov 2020 – Jun 2025",
    location: "Udaipur",
    points: [
      "Built and scaled multiple B2B web applications using React, Node.js, Express, Laravel, and MongoDB/MySQL, delivering high-performance and maintainable systems.",
      "Designed and owned backend architecture for billing and order management systems, handling async workflows, role-based access, and third-party integrations.",
      "Engineered a custom billing system that recovered ~80% of unpaid invoices, significantly improving revenue flow and financial efficiency.",
      "Systematized order tracking and approval workflows, reducing processing time from 30–45 days to under 7 days and accelerating business operations.",
      "Guided digital transformation initiatives, converting manual, paper-based processes into fully mechanized systems, reducing operational overhead by ~90%.",
      "Managed a team of 7–8 developers, driving code quality (code reviews, Jest/Pest testing), database optimization, and consistent on-time delivery of scalable solutions.",
    ],
  },
  {
    title: "QA Tester",
    company: "NoverERP (Hybrid)",
    period: "Sep 2020 – Nov 2020",
    location: "Hybrid",
    points: [
      "Implemented automation testing using JMeter and Selenium (Java), delivering ~85% bug-free, client-ready releases, and contributed to building a scalable ERP platform with Next.js for a solar domain client.",
    ],
  },
  {
    title: "Web Developer",
    company: "Papasiddhi",
    period: "Feb 2020 – Sep 2020",
    location: "Udaipur",
    points: [
      "Built and optimized a Laravel & CodeIgniter portal for Zambia's pollution control permits, automating workflows and reducing ~35% paperwork, enabling fully online submissions for all companies and improving government service efficiency.",
    ],
  },
];

export const PROJECTS: ProjectEntry[] = [
  {
    title: "Web Portals",
    description:
      "Created Dharohar, Bharat Aatma, Third.space, Five5 Digital, Webank Solutions, Eragon.",
    tags: ["React", "Node.js", "MongoDB", "Next.js", "Docker"],
  },
  {
    title: "CRM/ERP Solutions",
    description: "Developed 20M Konnect, Abhi Construction, WebPM, UCCI.",
    tags: ["MERN", "MySQL", "REST API"],
  },
  {
    title: "E-commerce Platform",
    description:
      "Built Minfert, NM, India, 20 MCC, Price360, Vaibhav Stores, Makeup biography.",
    tags: ["MERN Stack", "Next.js", "Laravel", "Docker"],
  },
  {
    title: "AI-Powered HR Automation Platform",
    description: "Worked on gorec.ai, edysorai.",
    tags: ["Node.js", "FastAPI", "Kafka", "React"],
  },
  {
    title: "Zambia Pollution Control Portal",
    description: "ZEMA.",
    tags: ["Laravel", "CodeIgniter", "PHP", "MySQL"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    tags: ["JavaScript", "TypeScript", "PHP", "SQL", "Python"],
  },
  {
    category: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "CSS"],
  },
  {
    category: "Backend",
    tags: ["Node.js", "Express.js", "Laravel", "FastAPI", "CodeIgniter"],
  },
  {
    category: "Databases",
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
  },
  {
    category: "Architecture",
    tags: [
      "REST APIs",
      "Microservices",
      "Event-Driven",
      "MVC",
      "GraphQL",
    ],
  },
  {
    category: "Testing",
    tags: [
      "Jest (JS)",
      "Pest (PHP)",
      "Pytest (Python)",
      "JMeter",
      "Selenium",
    ],
  },
];

export const DEVOPS_TOOLS: DevOpsTool[] = [
  { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kafka", src: "https://cdn.simpleicons.org/apachekafka/FFFFFF" },
  { name: "Jenkins", src: "https://cdn.simpleicons.org/jenkins/D24939" },
  { name: "Argo CD", src: "https://cdn.simpleicons.org/argo/EF7B4D" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "GitLab", src: "https://cdn.simpleicons.org/gitlab/FC6D26" },
  { name: "Bitbucket", src: "https://cdn.simpleicons.org/bitbucket/0052CC" },
  { name: "CI/CD" },
  {
    name: "AWS (basic)",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    logoClass: "skill-devops-chip__logo--wide",
  },
  {
    name: "Azure (basic)",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
  {
    name: "MongoDB Atlas",
    src: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  { name: "Jira", src: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "Trello", src: "https://cdn.simpleicons.org/trello/0052CC" },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master of Computer Applications",
    university:
      "Janardan Rai Nagar Rajasthan Vidyapeeth University, DCS & IT (Udaipur)",
    period: "2013 – 2016",
    location: "Udaipur",
  },
  {
    degree: "Bachelor of Computer Applications",
    university:
      "Janardan Rai Nagar Rajasthan Vidyapeeth University, DCS & IT (Udaipur)",
    period: "2016 – 2019",
    location: "Udaipur",
  },
];
