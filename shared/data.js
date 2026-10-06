/* Shared content for all portfolio design variants. Loaded as a global. */
window.PORTFOLIO = {
  name: "Harshita Purwar",
  initials: "HP",
  role: "Software Developer",
  location: "Navi Mumbai, India",
  email: "harshitapurwar.rath@gmail.com",
  phone: "+91 70078 52636",
  phoneHref: "+917007852636",
  github: "https://github.com/harshita21-06",
  githubHandle: "harshita21-06",
  linkedin: "https://www.linkedin.com/in/harshita-purwar-8232821b7",
  linkedinHandle: "in/harshita-purwar",
  resume: "assets/harshita_purwar_frontend.pdf",
  lede: "Software Developer at CarTrade Tech, building the design system and UI behind CarWale & BikeWale — from MUI theming and a React Native component library to ChatGPT-powered car discovery.",
  typed: ["design systems that scale", "high-performance React UIs", "React Native components", "AI-powered interfaces"],

  stats: [
    { count: 2, suffix: "", label: "years building product UI" },
    { count: 170, suffix: "+", label: "merged PRs shipped" },
    { count: 80, suffix: "+", label: "components versioned (web + native)" },
    { count: 85, suffix: "%", label: "faster Figma → React" },
  ],

  profiles: [
    { icon: "leetcode", name: "LeetCode", desc: "500+ problems solved across platforms.", url: "https://leetcode.com/" },
    { icon: "geeksforgeeks", name: "GeeksforGeeks", desc: "Problems solved — add your score.", url: "https://www.geeksforgeeks.org/user/" },
    { icon: "hackerrank", name: "HackerRank", desc: "Certified — add your badges.", url: "https://www.hackerrank.com/" },
  ],

  skillGroups: [
    { label: "Languages", items: [
      { n: "JavaScript (ES6+)", i: "javascript" }, { n: "Java", i: "java" }, { n: "SQL", i: "mysql" },
      { n: "HTML5", i: "html5" }, { n: "CSS3", i: "css" }, { n: "SCSS" }, { n: "OracleDB", i: "oracle" } ] },
    { label: "Frontend & Mobile", items: [
      { n: "React.js", i: "react" }, { n: "React Native", i: "react" }, { n: "Expo" }, { n: "Next.js" },
      { n: "Redux Toolkit", i: "redux" }, { n: "Material UI", i: "mui" }, { n: "Styled-Components", i: "styledcomponents" },
      { n: "Storybook", i: "storybook" }, { n: "Design systems" }, { n: "Core Web Vitals", i: "webvitals" } ] },
    { label: "Backend & AI", items: [
      { n: "Node.js" }, { n: "Express.js" }, { n: "REST APIs", i: "rest" }, { n: "JWT", i: "jwt" },
      { n: "OpenAI API", i: "openai" }, { n: "LLM integration" }, { n: "MCP" }, { n: "Spring Boot" } ] },
    { label: "Tooling", items: [
      { n: "Git & GitHub", i: "github" }, { n: "Lerna (monorepos)", i: "monorepo" }, { n: "Webpack" }, { n: "Jenkins" },
      { n: "Husky" }, { n: "Jest" }, { n: "AWS S3" }, { n: "Figma", i: "figma" }, { n: "Cursor", i: "cursor" }, { n: "BrowserStack" } ] },
    { label: "Practices", items: [
      { n: "Component architecture" }, { n: "Performance optimisation" }, { n: "Responsive design" },
      { n: "RBAC" }, { n: "Unit testing" }, { n: "Code review" }, { n: "Agile / Scrum" } ] },
  ],

  projects: [
    { cat: "professional", title: "Oxygen design system versioning", where: "CarTrade Tech",
      art: { icon: "layers-outline", big: "80+", small: "components versioned" },
      desc: "Pioneered component-level versioning so each component updates independently — 40% less integration overhead across 5+ teams.",
      tags: ["Design systems", "Monorepo", "React"], link: "https://oxygen.cwsystem.in/docs/", linkText: "View Oxygen docs" },
    { cat: "professional", title: "React Native component library", where: "CarTrade Tech",
      art: { icon: "phone-portrait-outline", big: "web + native", small: "component library" },
      desc: "An MUI-style component library for React Native built from scratch — structure, theme, palette and components — wired into the design-to-code flow.",
      tags: ["React Native", "Design systems", "Theming"], link: "https://oxygen.cwsystem.in/v2/", linkText: "View Oxygen v2" },
    { cat: "professional", title: "Figma → React automation", where: "CarTrade Tech",
      art: { icon: "color-wand-outline", big: "85%", small: "faster component creation" },
      desc: "Automated Figma-to-production React components on a custom wrapper over MUI, cutting manual UI effort dramatically across the company.",
      tags: ["Figma", "MUI", "Automation", "React"] },
    { cat: "professional", title: "CarWale ChatGPT integration", where: "CarTrade Tech",
      art: { icon: "sparkles-outline", big: "Millions", small: "of users reached" },
      desc: "Built the interface layer between OpenAI's LLM and live automotive inventory, powering real-time AI car discovery.",
      tags: ["OpenAI API", "LLM", "REST APIs"],
      link: "https://chatgpt.com/plugins/plugin_asdk_app_69a804be51c081918b68832b1ae53c77?plugin_detail_origin=inline_selection_pill", linkText: "Open in ChatGPT" },
    { cat: "professional", title: "Template automation system", where: "CarTrade Tech",
      art: { icon: "flash-outline", big: "2h → 15m", small: "template creation" },
      desc: "Modular automation that removed 80–90% of duplicate JavaScript across teams and slashed template creation time.",
      tags: ["JavaScript", "Automation", "Performance"] },
    { cat: "professional", title: "CWOPR operations panel", where: "CarTrade Tech",
      art: { icon: "construct-outline", big: "real-time", small: "asset deployment" },
      desc: "Internal ops panel: slot automation, click tracking, AWS S3 asset management and RBAC for 50+ members — from 2-day to real-time deploys.",
      tags: ["Automation", "AWS S3", "RBAC"] },
    { cat: "personal", title: "Cred-Wallet", link: "https://github.com/harshita21-06/Cred-Wallet",
      art: { icon: "wallet-outline", big: "Full-stack", small: "secure card wallet" },
      desc: "A secure digital wallet for credit &amp; debit cards — store and organise cards with automatic card-type detection, protected by JWT-authenticated accounts. Built on the MERN stack.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"], linkText: "View project" },
    { cat: "personal", title: "WhatsChat", link: "https://github.com/harshita21-06",
      art: { icon: "chatbubbles-outline", big: "Real-time", small: "chat app" },
      desc: "Real-time chat application with instant messaging, typing indicators and live presence, built for a smooth, lag-free experience. (Repo coming soon.)",
      tags: ["React", "Socket.io", "JavaScript"], linkText: "View GitHub" },
    { cat: "personal", title: "Hospital Management System", link: "https://github.com/harshita21-06/Hospital-Management-System",
      art: { icon: "medkit-outline", big: "Java", small: "management system" },
      desc: "Desktop application to manage patients, doctors and appointments with a relational database back end.",
      tags: ["Java", "SQL"], linkText: "View project" },
  ],

  roles: [
    { time: "Apr 2026 – present", badge: "Promoted in 17 months", promo: true, title: "Software Development Engineer I",
      points: [
        "Lead component development in the <strong>Oxygen design system</strong> across <strong>web &amp; React Native</strong> (Carousel, Rating, BarMeter, SelectWithRef) with full Storybook docs.",
        "Drove the <strong>Material UI</strong> migration and a unified theme system (v1 &amp; v2, dark mode) and automated Figma → React, cutting manual component time by <strong>85%</strong>.",
        "Engineered CarWale's <strong>ChatGPT integration</strong> and an AI Assistant in global autocomplete; improved runtime UX with <strong>INP / Core Web Vitals</strong> fixes.",
      ] },
    { time: "Nov 2024 – Apr 2026", badge: "1 yr 5 mos", promo: false, title: "Associate Software Development Engineer",
      points: [
        "Shipped <strong>170+ merged PRs</strong>; pioneered component-level versioning for <strong>80+</strong> components, cutting integration overhead by 40% across 5+ teams.",
        "Built the <strong>CarWale Operations panel (CWOPR)</strong> with slot automation, click tracking, AWS S3 asset management and RBAC for <strong>50+</strong> people.",
        "Delivered <strong>40+</strong> Go-Live skin-ad campaigns with advanced CSS animation, tested cross-browser on BrowserStack.",
        "Built a template automation system removing <strong>80–90%</strong> duplicate JavaScript, cutting creation from <strong>2 hours to 15 minutes</strong>.",
      ] },
  ],

  wins: [
    { k: "SDE I", v: "Promoted for impact in UI architecture & design systems" },
    { k: "170+", v: "Merged PRs shipped since Nov 2024" },
    { k: "500+", v: "LeetCode problems solved" },
    { k: "8.88", v: "B.Tech IT CGPA · LNCT Bhopal" },
    { k: "Cert", v: "Persistent Martian Program — Java, DBMS & DSA" },
  ],

  education: { time: "2020 – 2024", school: "Lakshmi Narain College of Technology", degree: "B.Tech, Information Technology · Bhopal", cgpa: "8.88" },
};
