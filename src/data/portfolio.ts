export const navItems = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "approach", label: "Approach" },
  { id: "projects", label: "Projects" },
  { id: "backend", label: "Backend" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const heroHighlights = [
  "React and Next.js interfaces that stay clean and intuitive as features grow.",
  "Python backend development with Flask, FastAPI, Django, and practical REST design.",
  "Relational data modeling with SQLAlchemy ORM, Alembic migrations, and maintainable schemas.",
];

export const stackGroups = [
  {
    title: "Frontend",
    note: "Responsive interfaces with reusable components and thoughtful UI structure.",
    items: ["React", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    note: "API-first thinking with clear routes, validation, and predictable JSON responses.",
    items: ["Python", "Flask", "FastAPI", "Django", "REST APIs"],
  },
  {
    title: "Database",
    note: "Relational modeling that supports real product behavior and future change.",
    items: ["SQL", "SQLAlchemy ORM", "Alembic", "Relational Modeling"],
  },
  {
    title: "Tools",
    note: "Day-to-day engineering workflow for version control, testing, and collaboration.",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const approachCards = [
  {
    title: "Frontend Thinking",
    body: "Grace approaches interfaces as systems: reusable components, clear hierarchy, accessible states, and layouts that remain readable across devices.",
    points: [
      "Reusable UI patterns",
      "Responsive structure",
      "Readable interactions",
    ],
  },
  {
    title: "Backend Thinking",
    body: "She designs routes and controllers around API contracts, validation, and dependable JSON responses so the frontend can integrate with confidence.",
    points: ["RESTful routes", "Validation logic", "Error handling"],
  },
  {
    title: "Database Thinking",
    body: "Her database work focuses on relationships, foreign keys, migration flow, and schemas that reflect real business rules instead of short-term hacks.",
    points: ["One-to-many design", "Many-to-many modeling", "Migration safety"],
  },
  {
    title: "Integration Thinking",
    body: "Grace pays attention to the full connection layer: CORS, serialization, frontend fetch patterns, and keeping data flow maintainable across the stack.",
    points: [
      "CORS awareness",
      "Frontend/backend communication",
      "Maintainable integration",
    ],
  },
];

export const projects = [
  {
    title: "Chatterbox Lab",
    summary:
      "A full-stack integration project where a Flask API powers a React frontend and replaces `json-server` with a real backend workflow.",
    tags: ["React", "Flask", "CRUD", "CORS"],
    demonstrates: [
      "Building a Flask API for a React client",
      "CRUD operations with JSON responses",
      "Frontend/backend integration and CORS understanding",
    ],
    href: "https://github.com/bugslayer254/python-p4-chatterbox-lab.git",
  },
  {
    title: "REST CRUD Lab",
    summary:
      "A RESTful API exercise focused on resource-based backend design, proper HTTP methods, and frontend fetch integration.",
    tags: ["Flask", "REST", "PATCH", "DELETE"],
    demonstrates: [
      "PATCH and DELETE route design",
      "JSON responses and status codes",
      "Clear resource-oriented API thinking",
    ],
    href: "https://github.com/bugslayer254/python-p4-flask-restful-crud-lab.git",
  },
  {
    title: "Flask-SQLAlchemy Lab 2",
    summary:
      "An ORM-focused project centered on relationship design, serialization, schema evolution, and migration-aware backend structure.",
    tags: ["SQLAlchemy", "Alembic", "Serialization", "ORM"],
    demonstrates: [
      "SQLAlchemy relationships and association proxies",
      "Serialization patterns for API responses",
      "Migration workflow and schema evolution",
    ],
    href: "https://github.com/bugslayer254/python-p4-v2-flask-sqlalchemy-lab-2.git",
  },
  {
    title: "Pizza Restaurant API",
    summary:
      "A relational backend challenge that highlights many-to-many modeling, validations, nested responses, and practical route design.",
    tags: ["Python", "Flask", "Relational Data", "Validation"],
    demonstrates: [
      "Many-to-many relationship modeling",
      "Validation and nested JSON responses",
      "Cascade deletion logic and API route design",
    ],
    href: "https://github.com/bugslayer254/python-phase-4-code-challenge-pizza.git",
  },
  {
    title: "Articles Code Challenge",
    summary:
      "A pure Python OOP project that demonstrates domain modeling, object relationships, and strong programming fundamentals without relying on an ORM.",
    tags: ["Python", "OOP", "Domain Modeling"],
    demonstrates: [
      "Object relationships and association methods",
      "Data ownership and class responsibility",
      "Solid programming fundamentals and problem solving",
    ],
    href: "https://github.com/bugslayer254/python-non-sqlalchemy-code-challenge-articles.git",
  },
];

export const backendStrengths = [
  "REST principles and resource-based route design",
  "CRUD operations with clear controller structure",
  "JSON serialization for frontend consumption",
  "Validation and error handling for reliable API behavior",
  "Flask, FastAPI, and Django foundations for service development",
];

export const databaseKnowledge = [
  "Relational data modeling with entities, keys, and constraints",
  "SQLAlchemy ORM relationships for real application flows",
  "Alembic migrations for schema evolution and change management",
  "One-to-many and many-to-many relationship design",
  "Serialization tradeoffs when exposing nested backend data",
];

export const learningJourney = [
  "Building projects end-to-end from requirements to working implementation.",
  "Translating prompts and product requirements into structured code decisions.",
  "Testing, iterating, and refining behavior instead of stopping at the first draft.",
  "Using GitHub as a record of practical engineering growth and shipped work.",
];
