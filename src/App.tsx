import { useEffect, useState } from "react";
import "./App.css";
import { Section } from "./components/Section";
import {
  approachCards,
  backendStrengths,
  databaseKnowledge,
  heroHighlights,
  learningJourney,
  navItems,
  projects,
  stackGroups,
} from "./data/portfolio";

const githubProfile = "https://github.com/bugslayer254";
const emailAddress = "Kelgraygrakel@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/grace-kamau-189817225/";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#hero">
          <span className="brand__name">Grace Kamau</span>
          <span className="brand__role">Software Engineer</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hero" className="hero reveal is-visible">
          <div className="hero__content">
            <p className="hero__eyebrow">Full-stack engineer</p>
            <div className="hero__meta">
              <span className="hero__pill">
                Open to software engineering roles
              </span>
              <span className="hero__pill hero__pill--outline">
                Frontend • API • Data
              </span>
            </div>
            <h1>Grace Kamau — Software Engineer</h1>
            <p className="hero__lead">
              Grace builds full-stack applications with React, Next.js, Python,
              FastAPI, Django, SQLAlchemy, and Alembic.
            </p>
            <p className="hero__support">
              She builds clean interfaces, reliable APIs, and maintainable
              database-backed systems with a thoughtful, engineering-first
              approach to product work.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>
              <a className="button button--secondary" href="#contact">
                Contact Me
              </a>
              <a
                className="button button--ghost"
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="hero__stats">
              <article className="hero__stat">
                <strong>Frontend</strong>
                <span>React, Next.js, TypeScript</span>
              </article>
              <article className="hero__stat">
                <strong>Backend</strong>
                <span>Flask, FastAPI, Django APIs</span>
              </article>
              <article className="hero__stat">
                <strong>Data</strong>
                <span>SQLAlchemy, Alembic, SQL</span>
              </article>
            </div>
          </div>

          <aside className="card hero__panel">
            <div className="hero__panel-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p className="panel__eyebrow">Engineering focus</p>

            <div className="hero__code" aria-label="Technical summary">
              <p>
                <span className="hero__code-key">frontend</span>: React +
                Next.js
              </p>
              <p>
                <span className="hero__code-key">backend</span>: Flask + FastAPI
                + Django
              </p>
              <p>
                <span className="hero__code-key">data</span>: SQLAlchemy +
                Alembic + relational modeling
              </p>
              <span className="hero__code-note">
                thoughtful, maintainable, full-stack
              </span>
            </div>

            <ul className="signal-list">
              {heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="hero__mini-grid">
              <div>
                <strong>UI systems</strong>
                <span>Readable, responsive, polished frontends</span>
              </div>
              <div>
                <strong>API contracts</strong>
                <span>Clear routes, JSON responses, validation</span>
              </div>
              <div>
                <strong>Schema design</strong>
                <span>Relationships, migrations, clean data flow</span>
              </div>
            </div>
          </aside>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title="A full-stack builder with practical engineering discipline"
          intro="Grace Kamau brings hands-on training from Moringa School and applies it with a clear focus on maintainable frontend systems, backend APIs, and structured data layers."
        >
          <div className="about-grid">
            <article className="card prose-card">
              <p>
                Her work reflects more than coursework completion. It shows an
                ability to read requirements, break problems into parts, and
                translate them into working software that stays understandable
                as features expand.
              </p>
              <p>
                Across React interfaces, Python services, and relational
                modeling, Grace aims for clarity in the user experience and
                reliability in the implementation behind it.
              </p>
            </article>

            <div className="metric-grid">
              <article className="card metric-card">
                <span className="metric-card__label">Frontend systems</span>
                <strong>React and Next.js</strong>
                <p>Component structure, responsive layouts, and usable UI.</p>
              </article>
              <article className="card metric-card">
                <span className="metric-card__label">Backend foundations</span>
                <strong>Python APIs</strong>
                <p>Routes, validation, JSON responses, and integration flow.</p>
              </article>
              <article className="card metric-card">
                <span className="metric-card__label">Data thinking</span>
                <strong>SQLAlchemy + Alembic</strong>
                <p>Relationships, migrations, and schema evolution.</p>
              </article>
            </div>
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="Technical Stack"
          title="An easy-to-scan view of Grace’s working toolkit"
          intro="Grouped to quickly show her breadth across the frontend, backend, and database layers."
        >
          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <article key={group.title} className="card stack-card">
                <div className="card-topline">
                  <span className="card-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.note}</p>
                <div className="badge-list">
                  {group.items.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="approach"
          eyebrow="Engineering Approach"
          title="How Grace thinks about building software, not just writing syntax"
          intro="This is where her engineering mindset shows up most clearly: structure, integration, and maintainability."
        >
          <div className="approach-grid">
            {approachCards.map((card, index) => (
              <article key={card.title} className="card approach-card">
                <div className="card-topline">
                  <span className="card-index">0{index + 1}</span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.body}</p>
                <div className="badge-list badge-list--muted">
                  {card.points.map((point) => (
                    <span key={point} className="badge badge--muted">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Featured Projects"
          title="Selected work that shows full-stack range and sound engineering habits"
          intro="These projects highlight API design, frontend/backend integration, ORM thinking, and strong Python fundamentals."
        >
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`card project-card ${index === 0 ? "project-card--featured" : ""}`}
              >
                <div className="project-card__top">
                  <div>
                    <p className="project-card__kicker">
                      Project {String.fromCharCode(65 + index)}
                    </p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="badge-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge badge--muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="project-card__summary">{project.summary}</p>

                <div className="project-card__details">
                  <h4>What it demonstrates</h4>
                  <ul className="feature-list">
                    {project.demonstrates.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__footer">
                  <span className="project-card__signal">
                    Engineering signal: integration, structure, maintainability
                  </span>
                  <a
                    className="text-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub repository →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="backend"
          eyebrow="Backend / API Expertise"
          title="Backend work centered on dependable contracts and clean application flow"
          intro="Grace understands that a strong API is not only about endpoints — it is about predictability, validation, and how well the frontend can consume the data."
        >
          <div className="split-grid">
            <article className="card prose-card">
              <p>
                Her backend foundation includes REST principles, CRUD workflows,
                route and controller design, JSON serialization, and practical
                error handling. She is comfortable thinking about how interfaces
                consume data, how routes should behave, and how a backend stays
                maintainable as product requirements evolve.
              </p>
              <p>
                Alongside Flask-based project work, Grace also brings strong
                foundations in FastAPI and Django concepts for modern Python web
                development.
              </p>
            </article>

            <div className="detail-list">
              {backendStrengths.map((item) => (
                <article key={item} className="card detail-card">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="database"
          eyebrow="Database / ORM / Migration Knowledge"
          title="Comfortable with the data layer that supports real application behavior"
          intro="Grace’s database work shows understanding of relationships, schema evolution, and how structured data affects every layer of an application."
        >
          <div className="split-grid">
            <article className="card prose-card">
              <p>
                She has worked with relational models, foreign keys, one-to-many
                and many-to-many relationships, SQLAlchemy ORM patterns, and
                Alembic migrations for controlled schema changes.
              </p>
              <p>
                That foundation helps her think beyond isolated queries and
                focus on data integrity, serialization tradeoffs, and long-term
                maintainability.
              </p>
            </article>

            <div className="detail-list">
              {databaseKnowledge.map((item) => (
                <article key={item} className="card detail-card">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="journey"
          eyebrow="GitHub / Learning Journey"
          title="A record of practical engineering growth, iteration, and shipped work"
          intro="Grace uses GitHub as a working log of how she builds: reading requirements, coding against them, testing ideas, and refining the result."
        >
          <div className="journey-grid">
            <article className="card prose-card">
              <p>
                Her Moringa portfolio work is best understood as practical
                engineering training — not filler. The projects show end-to-end
                implementation, structured problem solving, and repeated
                practice translating requirements into functioning code.
              </p>
              <a
                className="text-link"
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
              >
                Explore Grace’s GitHub profile →
              </a>
            </article>

            <article className="card journey-card">
              <h3>What that journey reflects</h3>
              <ul className="feature-list">
                {learningJourney.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact / CTA"
          title="Open to software engineering opportunities and technical conversations"
          intro="If you are hiring for a thoughtful early-career engineer with full-stack foundations and strong growth momentum, Grace would be glad to connect."
          className="section--cta"
        >
          <div className="contact-panel card">
            <div>
              <h3>Grace Kamau</h3>
              <p>
                Available for roles where she can keep building reliable,
                maintainable products across the stack.
              </p>
            </div>

            <div className="contact-links">
              <a className="contact-link" href={`mailto:${emailAddress}`}>
                <span>Email</span>
                <strong>{emailAddress}</strong>
              </a>
              <a
                className="contact-link"
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>github.com/bugslayer254</strong>
              </a>
              <a
                className="contact-link"
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>linkedin.com/in/grace-kamau</strong>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <p>© {currentYear} Grace Kamau — Software Engineer</p>
      </footer>
    </div>
  );
}

export default App;
