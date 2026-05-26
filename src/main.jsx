import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  Bot,
  ChartNoAxesCombined,
  Code2,
  Database,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Syed Sobaan Najmi",
  title: "Computer Engineer & Aspiring AI/ML Engineer",
  email: "sobaannajmii567@gmail.com",
  linkedin: "https://www.linkedin.com/in/syed-sobaan-najmi/",
  github: "https://github.com/Sobaan567",
  cv: "https://drive.google.com/file/d/1HqqUH4GkQPkYl2pKQBzkkVgKJzOojtX6/view?usp=drivesdk",
  huggingFace: "https://huggingface.co/Sobaan567",
  kaggle: "https://www.kaggle.com/sobaannajmi",
  langSmith: "https://smith.langchain.com/public/syed-sobaan-najmi",
};

const projects = [
  {
    name: "Traffic Management System",
    type: "Full Stack Platform",
    stack: "React, Node.js, MS SQL",
    summary:
      "A city-scale traffic operations platform for signal monitoring, incident tracking, and live control workflows with structured dashboards and MS SQL persistence.",
    image: "/project-01-traffic-management.png",
    tags: ["React", "Node.js", "MS SQL", "Dashboards"],
  },
  {
    name: "PSX AI",
    type: "ML Finance Platform",
    stack: "React.jsx, FastAPI, ML Algorithms",
    summary:
      "Pakistan Stock Exchange intelligence platform for price prediction, EOD signals, market pattern analysis, and ML-backed decision support.",
    image: "/project-02-psx-ai.png",
    tags: ["FastAPI", "Machine Learning", "Forecasting", "PSX"],
  },
  {
    name: "Student Nexus Portal",
    type: "AI Analytics Portal",
    stack: "React.jsx, Node.js",
    summary:
      "Student intelligence portal with AI analysis for academic performance, engagement trends, administrative workflows, and student support signals.",
    image: "/project-03-student-nexus.png",
    tags: ["AI Analysis", "React", "Node.js", "Portal"],
  },
  {
    name: "RAG Chatbot Oracle Query Bot",
    type: "Database AI Assistant",
    stack: "React.jsx, LangChain, Oracle DB",
    summary:
      "Retrieval-augmented Oracle query assistant that turns natural language questions into database-backed insights through LangChain and React.",
    image: "/project-04-oracle-assistant.png",
    tags: ["RAG", "LangChain", "Oracle", "Chatbot"],
  },
  {
    name: "RPL Simulator",
    type: "ML Simulation Pipeline",
    stack: "React.jsx, FastAPI, ML Pipeline",
    summary:
      "Interactive ML simulator with a React interface, FastAPI services, and an end-to-end pipeline for modeling behavior and visualizing predictions.",
    image: "/project-05-rpl-simulator.png",
    tags: ["Simulation", "FastAPI", "ML Pipeline", "React"],
  },
];

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Model experiments, predictive workflows, RAG systems, assistants, evaluation loops, and intelligent product features.",
  },
  {
    title: "Full Stack Development",
    description:
      "React frontends, API backends, dashboards, authentication flows, integrations, and reliable user-facing tools.",
  },
  {
    title: "Data Products",
    description:
      "Decision tools, financial analytics, student intelligence portals, reporting systems, and practical engineering products.",
  },
  {
    title: "Database Engineering",
    description:
      "MS SQL and Oracle-backed applications with query tooling, clean schemas, and reliable backend access patterns.",
  },
];

const process = [
  ["Phase 01", "Discover", "Map the goal, user flow, data sources, system needs, and engineering constraints."],
  ["Phase 02", "Design", "Plan the interface, APIs, database, data flow, and any AI workflow needed."],
  ["Phase 03", "Build", "Create polished product screens, reliable APIs, database layers, and usable workflows."],
  ["Phase 04", "Refine", "Test, tune, document, improve outputs, and smooth the experience across devices."],
];

const toolbelt = [
  "React",
  "FastAPI",
  "Node.js",
  "Django",
  "Machine Learning",
  "RAG Systems",
  "LangChain",
  "MS SQL",
  "Oracle",
  "MongoDB",
  "PostgreSQL",
  "Dashboards",
  "Data Workflows",
];

const aboutHighlights = [
  ["Current Focus", "Building stronger software systems while growing deeper into AI/ML, data, and product engineering."],
  ["What I Enjoy", "Turning rough ideas into assistants, dashboards, simulations, portals, and tools people can actually use."],
  ["Working Style", "Understand the problem, build clearly, evaluate results, and keep improving the product experience."],
];

const dashboardStats = [
  ["05", "Featured Projects"],
  ["11", "Core Tools"],
  ["03", "Public Profiles"],
];

const skillChart = [
  ["Frontend", 88],
  ["Backend", 82],
  ["Databases", 84],
  ["Machine Learning", 78],
  ["RAG Systems", 76],
  ["Data Analysis", 82],
];

const activityBars = [42, 68, 54, 82, 64, 92, 76, 88, 58, 80, 70, 96];

const platforms = [
  {
    name: "GitHub",
    label: "Code & Repositories",
    url: profile.github,
    mark: "GH",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    label: "Professional Profile",
    url: profile.linkedin,
    mark: "IN",
    Icon: Linkedin,
  },
  {
    name: "Hugging Face",
    label: "Models & AI Spaces",
    url: profile.huggingFace,
    mark: "HF",
    Icon: Bot,
  },
  {
    name: "Kaggle",
    label: "Datasets & Notebooks",
    url: profile.kaggle,
    mark: "K",
    Icon: ChartNoAxesCombined,
  },
  {
    name: "LangChain",
    label: "Public LangSmith Work",
    url: profile.langSmith,
    mark: "LC",
    Icon: Boxes,
  },
];

function useCursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    const toggleHover = (event) => {
      const isHover = event.target.closest("a, button, .hov");
      ring.classList.toggle("is-hovering", Boolean(isHover));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", toggleHover);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", toggleHover);
    };
  }, []);
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Magnetic({ children, className = "", ...props }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    element.style.transform = `translate(${x * 0.16}px, ${y * 0.16 - 3}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      className={`magnetic hov ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </a>
  );
}

function SpinningBadge() {
  return (
    <div className="badge-wrap reveal">
      <svg viewBox="0 0 180 180" className="spin-badge" aria-hidden="true">
        <defs>
          <path
            id="badge-circle"
            d="M 90, 90 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
          />
        </defs>
        <text>
          <textPath href="#badge-circle">
            OPEN TO WORK - FREELANCE AVAILABLE -
          </textPath>
        </text>
      </svg>
      <Magnetic href={`mailto:${profile.email}`} className="badge-button" aria-label="Email Sobaan">
        <ArrowUpRight size={24} />
      </Magnetic>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Profile", "About", "Socials", "Work", "Expertise", "Process", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="logo hov" href="#top" aria-label="Go to top">
        SSN
      </a>
      <nav className="desktop-nav">
        {links.map((link) => (
          <a className="nav-link hov" href={`#${link.toLowerCase()}`} key={link}>
            {link}
          </a>
        ))}
        <Magnetic href={`mailto:${profile.email}`} className="talk-button">
          Let's Talk
        </Magnetic>
      </nav>
      <button className="menu-button hov" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} />
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <button className="menu-close hov" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={24} />
        </button>
        {links.map((link, index) => (
          <a
            style={{ transitionDelay: `${index * 0.08}s` }}
            className="mobile-link hov"
            href={`#${link.toLowerCase()}`}
            key={link}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="intro section" aria-labelledby="intro-title">
      <div className="container intro-grid">
        <div className="intro-copy">
          <div className="eyebrow reveal">
            <span />
            Computer Engineer / Aspiring AI/ML Engineer
          </div>
          <h1 id="intro-title" className="name-heading" aria-label={profile.name}>
            {profile.name.split(" ").map((word, index) => (
              <span className="name-word" style={{ "--delay": `${index * 0.12}s` }} key={word}>
                {word.split("").map((letter, letterIndex) => (
                  <i
                    style={{ "--letter-delay": `${index * 0.12 + letterIndex * 0.025}s` }}
                    key={`${word}-${letter}-${letterIndex}`}
                  >
                    {letter}
                  </i>
                ))}
              </span>
            ))}
          </h1>
          <p className="role-line reveal">{profile.title}</p>
          <p className="intro-text reveal">
            I build practical software products with polished interfaces, reliable APIs,
            database-backed workflows, data dashboards, and a growing focus on applied AI
            and machine learning systems.
          </p>
          <div className="toolbelt reveal" aria-label="Core tools">
            {toolbelt.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <div className="impact-strip reveal" aria-label="Portfolio highlights">
            <div>
              <strong>05</strong>
              <span>AI-driven projects</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Backend stacks</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Database systems</span>
            </div>
          </div>
          <div className="intro-actions reveal">
            <Magnetic href="#work" className="primary-link">
              View Projects <ArrowRight size={17} />
            </Magnetic>
            <Magnetic href={profile.cv} target="_blank" rel="noreferrer" className="secondary-link">
              CV <ArrowUpRight size={16} />
            </Magnetic>
          </div>
        </div>
        <div className="portrait-panel reveal" id="profile">
          <img src="/mecool.jpeg" alt="Syed Sobaan Najmi" />
          <div className="portrait-meta">
            <span>Available for AI, ML and full stack work</span>
            <SpinningBadge />
          </div>
        </div>
      </div>
    </section>
  );
}

function OpeningHero() {
  return (
    <section className="opening-hero" id="top" aria-labelledby="opening-title">
      <img className="opening-bg" src="/opening-hero.png" alt="" aria-hidden="true" />
      <div className="opening-shade" />
      <div className="container opening-content">
        <div className="opening-kicker reveal">Portfolio 2026</div>
        <h1 id="opening-title" className="opening-title reveal">
          <span>Syed</span>
          <span>Sobaan</span>
        </h1>
        <p className="opening-subtitle reveal">
          Computer Engineer / Aspiring AI/ML Engineer
        </p>
        <div className="opening-actions reveal">
          <Magnetic href="#work" className="primary-link">
            Projects <ArrowRight size={17} />
          </Magnetic>
          <Magnetic href={`mailto:${profile.email}`} className="secondary-link">
            Contact <Mail size={16} />
          </Magnetic>
        </div>
        <a className="scroll-cue hov" href="#profile" aria-label="Scroll to profile">
          <span>Scroll</span>
          <i />
        </a>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["AI Engineering", "Machine Learning", "React.jsx", "FastAPI", "Node.js", "MS SQL", "Oracle", "LangChain"];
  const track = useMemo(() => [...words, ...words, ...words], []);
  return (
    <div className="marquee hov" aria-hidden="true">
      <div className="marquee-track">
        {track.map((word, index) => (
          <span key={`${word}-${index}`}>
            {word} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="section-head about-head reveal">
          <span>About Me</span>
          <h2>Computer engineer building practical, intelligent software.</h2>
        </div>
        <div className="about-copy reveal">
          <p>
            I am a computer engineering student and aspiring AI/ML engineer who likes
            building products that feel useful from the first screen. My work sits between
            full stack development, databases, data-heavy dashboards, RAG assistants,
            and applied AI systems.
          </p>
          <p>
            I enjoy taking complex ideas like traffic monitoring, stock market signals,
            student analytics, database query assistants, or network simulations and turning
            them into clear interfaces with working logic behind them.
          </p>
          <p>
            Right now, I am sharpening my React, backend, database, data analysis,
            LangChain, and machine learning skills through real projects. The goal is
            simple: build software that looks polished, works reliably, and keeps getting smarter.
          </p>
          <div className="about-actions">
            <Magnetic href="#work" className="primary-link">
              See Projects <ArrowRight size={17} />
            </Magnetic>
            <Magnetic href={profile.github} target="_blank" rel="noreferrer" className="secondary-link">
              GitHub <Github size={16} />
            </Magnetic>
          </div>
        </div>
        <div className="about-panel reveal">
          <div className="about-signal">
            <BrainCircuit size={26} />
            <span>Learning by building</span>
          </div>
          <div className="about-highlight-list">
            {aboutHighlights.map(([title, text], index) => (
              <article className="about-highlight" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="about-stack">
            <div>
              <Code2 size={20} />
              Full Stack
            </div>
            <div>
              <Database size={20} />
              Databases
            </div>
            <div>
              <BrainCircuit size={20} />
              AI/ML
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthDashboard() {
  return (
    <section className="section dashboard-section" aria-labelledby="dashboard-title">
      <div className="container dashboard-grid">
        <div className="dashboard-copy reveal">
          <span>Build Dashboard</span>
          <h2 id="dashboard-title">A quick look at my engineering momentum.</h2>
          <p>
            I am growing through real builds: dashboards, RAG tools, database assistants,
            simulations, data analysis flows, and ML experiments. This section tracks the
            shape of my current engineering direction and project energy.
          </p>
        </div>
        <div className="metric-row reveal">
          {dashboardStats.map(([value, label]) => (
            <div className="metric-tile" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="skill-panel reveal">
          <div className="panel-title">
            <BrainCircuit size={20} />
            Skill Signal
          </div>
          {skillChart.map(([label, value]) => (
            <div className="skill-meter" style={{ "--value": `${value}%` }} key={label}>
              <div>
                <span>{label}</span>
                <strong>{value}%</strong>
              </div>
              <i />
            </div>
          ))}
        </div>
        <div className="activity-panel reveal">
          <div className="panel-title">
            <ChartNoAxesCombined size={20} />
            Project Activity
          </div>
          <div className="activity-chart" aria-label="Project activity chart">
            {activityBars.map((height, index) => (
              <span style={{ "--height": `${height}%`, "--delay": `${index * 0.05}s` }} key={index} />
            ))}
          </div>
          <div className="activity-note">
            <span />
            Consistent practice across AI, databases, frontend, and backend systems.
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="platforms-section" id="socials" aria-labelledby="platforms-title">
      <div className="container">
        <div className="platforms-head reveal">
          <span>Socials</span>
          <h2 id="platforms-title">Connect with me across the web.</h2>
        </div>
        <div className="platform-grid">
          {platforms.map(({ name, label, url, mark, Icon }, index) => (
            <Magnetic
              href={url}
              target="_blank"
              rel="noreferrer"
              className="platform-card reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
              key={name}
            >
              <span className="platform-glow" />
              <span className="platform-logo" aria-hidden="true">
                {mark}
              </span>
              <span className="platform-copy">
                <small>{label}</small>
                <strong>{name}</strong>
              </span>
              <span className="platform-icon">
                <Icon size={20} />
              </span>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span>Selected Work</span>
          <h2>Real builds, not just portfolio placeholders.</h2>
        </div>
        <p className="section-copy reveal">
          Each card shows an actual project interface: dashboards, assistants, simulators,
          academic tools, and market intelligence systems built around useful workflows,
          data, automation, and clean interfaces.
        </p>
        <div className="work-showcase reveal">
          <div>
            <span>Live archive</span>
            <p>
              These are the featured builds. More experiments, backend work, AI tools,
              notebooks, and in-progress projects live on GitHub and Kaggle.
            </p>
          </div>
          <Magnetic href={profile.github} target="_blank" rel="noreferrer" className="github-cta">
            Check GitHub <Github size={18} />
          </Magnetic>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article
              className="project-card reveal hov"
              style={{ transitionDelay: `${index * 0.08}s` }}
              key={project.name}
            >
              <div className="project-visual">
                <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
                <span className="project-status">Featured build</span>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <Magnetic href="#contact" className="project-button">
                  Ask for link <ArrowUpRight size={15} />
                </Magnetic>
              </div>
              <div className="project-info">
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <span>{project.stack}</span>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <article className="project-card project-card-more reveal hov">
            <div className="more-visual">
              <div className="more-grid" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
              <div className="more-icon">
                <Rocket size={34} />
              </div>
              <span className="project-number">06+</span>
            </div>
            <div className="project-info more-info">
              <p>More Projects</p>
              <h3>Many more projects to come.</h3>
              <span>AI tools, APIs, dashboards, experiments</span>
              <p>
                The portfolio will keep growing. For the rest of the builds, repos,
                and new work, check the GitHub profile.
              </p>
              <div className="more-actions">
                <Magnetic href={profile.github} target="_blank" rel="noreferrer" className="primary-link">
                  View GitHub <FolderGit2 size={17} />
                </Magnetic>
                <Magnetic href="#contact" className="secondary-link">
                  Discuss Work <ArrowUpRight size={16} />
                </Magnetic>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <div className="section-head reveal">
          <span>Expertise</span>
          <h2>Engineering range with an AI direction.</h2>
        </div>
        <p className="section-copy reveal">
          I focus on solid engineering foundations, then add AI and data workflows where
          they make the product smarter, faster, or easier to use.
        </p>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row reveal hov" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowRight className="service-arrow" size={24} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const icons = [BrainCircuit, Server, Database, Sparkles];
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span>Process</span>
          <h2>A smoother path from idea to usable product.</h2>
        </div>
        <p className="section-copy reveal">
          My workflow stays practical: understand the problem, design the system,
          build the product, test the results, then polish the experience.
        </p>
        <div className="process-grid">
          {process.map(([phase, title, description], index) => {
            const Icon = icons[index];
            return (
              <article
                className="process-card reveal"
                style={{ transitionDelay: `${index * 0.08}s` }}
                key={phase}
              >
                <div className="process-icon">
                  <Icon size={24} />
                </div>
                <span>{phase}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section" id="contact">
      <div className="container footer-grid">
        <div>
          <h2>{profile.name}</h2>
          <p>
            Computer engineer and aspiring AI/ML engineer building intelligent,
            database-backed products with React, Node.js, FastAPI, LangChain,
            MS SQL, Oracle, MongoDB, and PostgreSQL.
          </p>
          <div className="footer-status">
            <span />
            Available for internships, freelance builds, and collaboration
          </div>
        </div>
        <div>
          <h3>Navigate</h3>
          <a className="footer-link hov" href="#profile">Profile</a>
          <a className="footer-link hov" href="#about">About</a>
          <a className="footer-link hov" href="#socials">Socials</a>
          <a className="footer-link hov" href="#work">Work</a>
          <a className="footer-link hov" href="#expertise">Expertise</a>
          <a className="footer-link hov" href="#process">Process</a>
        </div>
        <div>
          <h3>Connect</h3>
          <a className="footer-link hov" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="footer-link hov" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="footer-link hov" href={profile.huggingFace} target="_blank" rel="noreferrer">
            Hugging Face
          </a>
          <a className="footer-link hov" href={profile.kaggle} target="_blank" rel="noreferrer">
            Kaggle
          </a>
          <a className="footer-link hov" href={profile.langSmith} target="_blank" rel="noreferrer">
            LangChain
          </a>
          <a className="footer-link hov" href={profile.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
        <div>
          <h3>Contact</h3>
          <a className="footer-link hov" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <Magnetic href={`mailto:${profile.email}`} className="footer-cta">
            Start a Project <ArrowUpRight size={18} />
          </Magnetic>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Syed Sobaan Najmi</span>
        <div className="footer-icons">
          <Magnetic href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </Magnetic>
          <Magnetic href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </Magnetic>
          <Magnetic href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </Magnetic>
          <Magnetic href="#top" aria-label="Back to top">
            <ArrowRight className="up-icon" size={18} />
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useCursor();
  useReveal();

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="grain" />
      <Navbar />
      <main>
        <OpeningHero />
        <Intro />
        <Marquee />
        <About />
        <GrowthDashboard />
        <Platforms />
        <Work />
        <Expertise />
        <Process />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
