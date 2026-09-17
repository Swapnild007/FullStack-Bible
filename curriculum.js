window.FULLSTACK_BIBLE = {
  version: '0.2.0',
  philosophy: 'Learn from the real-world problem to the idea, then the technical vocabulary, mechanism, code, consequences, and production use.',
  domains: [
    {id:'computer',number:'01',title:'Computer & Programming Foundations',subtitle:'Computers, operating systems, programming, algorithms and developer tools',lessons:[
      {id:'computer-basics',title:'How Computers Work',level:'Foundations',time:'45 min',body:'Understand CPU, memory, storage, input/output and the basic path from a program to machine work.'},
      {id:'binary-data',title:'Bits, Bytes and Data',level:'Foundations',time:'40 min',body:'Learn how numbers, text, images and files are represented as data.'},
      {id:'memory-processes',title:'Memory, Processes and Threads',level:'Deep Dive',time:'50 min',body:'Understand memory allocation, processes, threads and why programs need an operating system.'},
      {id:'programming-fundamentals',title:'How Programs Work',level:'Foundations',time:'45 min',body:'Learn instructions, values, state, control flow, functions and data as the building blocks of software.'},
      {id:'data-structures',title:'Data Structures',level:'Core',time:'55 min',body:'Understand arrays, objects, maps, sets, stacks, queues, trees and graphs and when each representation helps.'},
      {id:'algorithms',title:'Algorithms and Problem Solving',level:'Core',time:'55 min',body:'Learn decomposition, search, sorting, traversal and how to reason about solutions.'},
      {id:'complexity',title:'Time and Space Complexity',level:'Deep Dive',time:'45 min',body:'Measure how computation and memory requirements change as input grows.'},
      {id:'cli-editor-debugger',title:'Command Line, Editor and Debugger',level:'Practice',time:'40 min',body:'Build practical fluency with terminals, files, editors, breakpoints, logs and debugging workflows.'}
    ]},
    {id:'web',number:'02',title:'Internet & Web Foundations',subtitle:'Networks, browsers, URLs, protocols and the Web platform',lessons:[
      {id:'web-works',title:'How the Web Works',level:'First Principles',time:'45 min',body:'Trace a website request from URL entry through DNS, network connection, HTTP, server processing and browser rendering.'},
      {id:'internet-networking',title:'The Internet and TCP/IP',level:'Foundations',time:'50 min',body:'Understand packets, IP addresses, ports, routing, TCP and the network layers used by web applications.'},
      {id:'urls-dns',title:'URLs, Domains and DNS',level:'Core',time:'40 min',body:'Learn URL structure, domains, DNS records, recursive resolution, caching and hosting.'},
      {id:'http',title:'HTTP from First Principles',level:'Deep Dive',time:'60 min',body:'Study requests, responses, methods, status codes, headers, bodies, cookies, caching and content negotiation.'},
      {id:'http-versions',title:'HTTP/1.1, HTTP/2 and HTTP/3',level:'Advanced',time:'50 min',body:'Understand connection management, multiplexing, compression and modern transport choices.'},
      {id:'tls',title:'HTTPS and TLS',level:'Security',time:'50 min',body:'Understand certificates, certificate authorities, public-key cryptography, handshakes and encrypted transport.'},
      {id:'realtime-web',title:'WebSockets, SSE and Real-Time Web',level:'Advanced',time:'45 min',body:'Compare request-response communication with persistent connections and server-sent updates.'},
      {id:'web-platform',title:'The Web Platform',level:'Advanced',time:'55 min',body:'Connect browser APIs, storage, workers, fetch, streams, events and browser security boundaries.'}
    ]},
    {id:'html-css',number:'03',title:'HTML, CSS & Accessibility',subtitle:'Semantic documents, styling, layout, responsive UI and inclusive interfaces',lessons:[
      {id:'html',title:'HTML Document Structure',level:'Foundations',time:'40 min',body:'Learn elements, attributes, nesting, metadata and how HTML describes document structure.'},
      {id:'semantic-html',title:'Semantic HTML',level:'Core',time:'40 min',body:'Use meaningful elements so browsers, assistive technologies and developers can understand content.'},
      {id:'forms',title:'Forms and User Input',level:'Core',time:'50 min',body:'Build forms with controls, labels, validation, submission and accessible interaction.'},
      {id:'css-foundations',title:'CSS Fundamentals',level:'Foundations',time:'45 min',body:'Understand selectors, declarations, values, inheritance, cascade and computed styles.'},
      {id:'box-model',title:'The Box Model',level:'Core',time:'35 min',body:'Master content, padding, border, margin, sizing and box-sizing.'},
      {id:'flex-grid',title:'Flexbox and Grid',level:'Core',time:'60 min',body:'Build one-dimensional and two-dimensional layouts while understanding how space is distributed.'},
      {id:'responsive',title:'Responsive Design',level:'Production',time:'45 min',body:'Design interfaces that adapt to viewport size, input method, content and device capabilities.'},
      {id:'accessibility',title:'Accessibility',level:'Production',time:'55 min',body:'Learn keyboard access, focus, semantics, ARIA, contrast, screen-reader behavior and accessible testing.'}
    ]},
    {id:'javascript',number:'04',title:'JavaScript & Browser Engineering',subtitle:'Language internals, asynchronous execution, DOM and Web APIs',lessons:[
      {id:'js-language',title:'JavaScript as a Language',level:'Foundations',time:'50 min',body:'Learn values, types, variables, expressions, control flow, functions and errors.'},
      {id:'arrays-functions',title:'Functions, Arrays and Data Transformation',level:'Core',time:'50 min',body:'Master functions and common array operations including map, filter and reduce through practical problems.'},
      {id:'scope-closures',title:'Scope and Closures',level:'Deep Dive',time:'50 min',body:'Understand lexical scope, environments, closures and how functions retain access to surrounding variables.'},
      {id:'objects-prototypes',title:'Objects, Prototypes and Classes',level:'Deep Dive',time:'55 min',body:'Explore property lookup, prototypes, descriptors, this and class syntax.'},
      {id:'async',title:'Promises and Async/Await',level:'Core',time:'55 min',body:'Understand asynchronous work, promise states, composition and async/await error handling.'},
      {id:'event-loop',title:'The Event Loop',level:'Runtime',time:'60 min',body:'Trace call stacks, tasks, microtasks and scheduling to explain asynchronous execution precisely.'},
      {id:'dom-events',title:'DOM and Events',level:'Browser',time:'50 min',body:'Connect JavaScript to documents through traversal, mutation, event propagation and delegation.'},
      {id:'web-apis',title:'Fetch, Storage, Workers and Web APIs',level:'Advanced',time:'55 min',body:'Use fetch, Web Storage, IndexedDB concepts, workers and browser APIs while respecting security boundaries.'}
    ]},
    {id:'typescript',number:'05',title:'TypeScript & Modern Tooling',subtitle:'Type safety, modules, packages, builds and developer workflow',lessons:[
      {id:'ts-why',title:'Why TypeScript Exists',level:'Foundations',time:'35 min',body:'Understand the problems TypeScript solves and what static types can and cannot guarantee.'},
      {id:'ts-types',title:'Types, Interfaces and Unions',level:'Core',time:'50 min',body:'Learn primitive types, objects, interfaces, unions, intersections and type annotations.'},
      {id:'ts-narrowing',title:'Type Narrowing and Inference',level:'Deep Dive',time:'45 min',body:'Understand how TypeScript reasons about values and narrows types from program logic.'},
      {id:'ts-generics',title:'Generics and Reusable Types',level:'Advanced',time:'50 min',body:'Build reusable functions, data structures and APIs without losing type information.'},
      {id:'ts-utility',title:'Utility Types and Type Design',level:'Advanced',time:'45 min',body:'Use mapped, conditional and utility types to model real application boundaries.'},
      {id:'modules-packages',title:'Modules, npm and Package Management',level:'Core',time:'45 min',body:'Understand imports, exports, package manifests, dependency graphs and package boundaries.'},
      {id:'vite',title:'Vite and the Development Build',level:'Tooling',time:'45 min',body:'Understand dev servers, modules, asset handling, environment variables and production builds.'},
      {id:'lint-format',title:'Linting, Formatting and Code Quality',level:'Production',time:'35 min',body:'Use automated rules and formatting to keep a growing codebase consistent and maintainable.'}
    ]},
    {id:'frontend',number:'06',title:'Frontend Engineering',subtitle:'React, Vite, Tailwind, data fetching, state and production UI',lessons:[
      {id:'react-model',title:'How React Thinks',level:'First Principles',time:'45 min',body:'Understand components, props, state and rendering before learning framework conventions.'},
      {id:'components',title:'Component Design and Composition',level:'Core',time:'45 min',body:'Create components with clear responsibilities, data flow, composition and reusable interfaces.'},
      {id:'react-state',title:'State, Reducers and Effects',level:'Deep Dive',time:'55 min',body:'Understand state transitions, derived data, reducers and effects as synchronization with external systems.'},
      {id:'rendering',title:'Rendering and Reconciliation',level:'Deep Dive',time:'55 min',body:'Trace React updates and understand component rendering, reconciliation and performance implications.'},
      {id:'tailwind',title:'Tailwind CSS and Design Systems',level:'Production',time:'45 min',body:'Build consistent interfaces with utility classes, tokens, reusable patterns and accessible components.'},
      {id:'tanstack-query',title:'Server State with TanStack Query',level:'Production',time:'50 min',body:'Handle remote data, caching, loading, errors, invalidation and optimistic updates.'},
      {id:'forms-client',title:'Frontend Forms and Validation',level:'Production',time:'45 min',body:'Design reliable forms with client validation, server validation, errors and accessible feedback.'},
      {id:'frontend-performance',title:'Frontend Performance',level:'Advanced',time:'55 min',body:'Measure loading, rendering, JavaScript cost, caching, code splitting and interaction performance.'}
    ]},
    {id:'react-next',number:'07',title:'React & Next.js Applications',subtitle:'Modern React architecture, routing, rendering and full-stack UI',lessons:[
      {id:'react-hooks',title:'Hooks and Custom Hooks',level:'Core',time:'45 min',body:'Understand built-in hooks and how custom hooks package reusable stateful behavior.'},
      {id:'routing',title:'Routing and Application Navigation',level:'Core',time:'45 min',body:'Design client and server navigation, nested routes, parameters and loading/error states.'},
      {id:'next-routing',title:'Next.js App Router',level:'Framework',time:'50 min',body:'Learn layouts, route segments, loading states, error boundaries and application structure.'},
      {id:'server-client',title:'Server and Client Boundaries',level:'Deep Dive',time:'55 min',body:'Understand what runs on the server, what runs in the browser and how data crosses the boundary.'},
      {id:'rendering-strategies',title:'Static, Dynamic and Streaming Rendering',level:'Advanced',time:'55 min',body:'Compare rendering strategies and understand their impact on performance, freshness and infrastructure.'},
      {id:'next-data',title:'Data Fetching and Caching',level:'Advanced',time:'50 min',body:'Reason about server fetching, caching, revalidation and request lifecycles in Next.js.'},
      {id:'mutations',title:'Forms, Actions and Mutations',level:'Production',time:'50 min',body:'Build server-backed mutations with validation, authorization, errors and optimistic interfaces.'},
      {id:'frontend-architecture',title:'Frontend Architecture',level:'Mastery',time:'60 min',body:'Design scalable frontend boundaries, state ownership, data access, testing and component systems.'}
    ]},
    {id:'backend',number:'08',title:'Backend & API Engineering',subtitle:'Node.js, Express, HTTP servers, REST and production services',lessons:[
      {id:'node-runtime',title:'The Node.js Runtime',level:'First Principles',time:'50 min',body:'Understand Node.js, its runtime model, asynchronous I/O, processes and operating-system interaction.'},
      {id:'http-server',title:'Build an HTTP Server',level:'Practice',time:'50 min',body:'Implement request parsing, routing, headers, responses, errors and graceful shutdown.'},
      {id:'express',title:'Express Applications',level:'Core',time:'50 min',body:'Build structured Express applications with routing, middleware and error handling.'},
      {id:'rest',title:'REST API Design',level:'Production',time:'55 min',body:'Design resources, HTTP contracts, status codes, pagination, filtering, validation and versioning.'},
      {id:'validation',title:'Input Validation and Error Design',level:'Production',time:'45 min',body:'Treat external input as untrusted and design predictable validation and error responses.'},
      {id:'middleware',title:'Middleware and Request Pipelines',level:'Deep Dive',time:'45 min',body:'Understand how requests pass through authentication, logging, validation and business boundaries.'},
      {id:'rate-limits',title:'Rate Limiting and Abuse Protection',level:'Security',time:'45 min',body:'Control excessive traffic, identify abusive patterns and protect expensive application operations.'},
      {id:'api-production',title:'Production API Architecture',level:'Advanced',time:'60 min',body:'Connect configuration, logging, observability, caching, security, graceful failure and deployment.'}
    ]},
    {id:'data',number:'09',title:'Databases, MongoDB & Data Systems',subtitle:'PostgreSQL, MongoDB, Redis, modeling, querying and scale',lessons:[
      {id:'database-thinking',title:'How Databases Work',level:'First Principles',time:'50 min',body:'Understand persistence, records, pages, indexes, queries and why databases are separate systems.'},
      {id:'sql',title:'SQL Fundamentals',level:'Core',time:'55 min',body:'Learn SELECT, filtering, joins, grouping, aggregation, subqueries and relational thinking.'},
      {id:'postgres',title:'PostgreSQL',level:'Production',time:'55 min',body:'Build schemas, constraints, queries, migrations and connection management with PostgreSQL.'},
      {id:'data-modeling',title:'Relational Data Modeling',level:'Design',time:'55 min',body:'Translate domain concepts into tables, relationships, constraints and normalization decisions.'},
      {id:'indexes',title:'Indexes and Query Plans',level:'Deep Dive',time:'55 min',body:'Understand index structures, selectivity, composite indexes and how databases execute queries.'},
      {id:'transactions',title:'Transactions and Concurrency',level:'Deep Dive',time:'60 min',body:'Study ACID, isolation, locking, concurrency anomalies and safe transaction design.'},
      {id:'mongodb',title:'MongoDB and Document Databases',level:'Core',time:'60 min',body:'Learn documents, collections, BSON, CRUD, aggregation, indexes, embedding, references and document modeling.'},
      {id:'redis-cache',title:'Redis and Caching',level:'Advanced',time:'50 min',body:'Use key-value storage for caching, sessions, TTLs, rate limiting and selected coordination patterns.'}
    ]},
    {id:'orm',number:'10',title:'Data Access & Application Architecture',subtitle:'ORMs, migrations, repositories, validation and reliable data access',lessons:[
      {id:'orm-concept',title:'What an ORM Does',level:'Foundations',time:'40 min',body:'Understand the relationship between application objects, database queries and an ORM abstraction.'},
      {id:'prisma',title:'Prisma',level:'Core',time:'50 min',body:'Model data, generate clients, query PostgreSQL and manage migrations with Prisma.'},
      {id:'drizzle',title:'Drizzle',level:'Core',time:'45 min',body:'Use a TypeScript-first SQL approach and understand where it differs from heavier ORM abstractions.'},
      {id:'migrations',title:'Database Migrations',level:'Production',time:'45 min',body:'Version database structure safely and coordinate schema changes with application releases.'},
      {id:'repositories',title:'Data Access Boundaries',level:'Architecture',time:'45 min',body:'Separate business rules from persistence details without creating unnecessary abstraction layers.'},
      {id:'transactions-app',title:'Transactions in Application Code',level:'Advanced',time:'50 min',body:'Coordinate multiple writes, validation and business invariants safely.'},
      {id:'pagination',title:'Pagination, Filtering and Search',level:'Production',time:'45 min',body:'Design efficient APIs and queries for large datasets using offset, cursor and search strategies.'},
      {id:'data-scale',title:'Replication, Partitioning and Sharding',level:'Advanced',time:'60 min',body:'Understand read replicas, partitioning, sharding, failover and distributed data trade-offs.'}
    ]},
    {id:'security',number:'11',title:'Authentication, Security & Privacy',subtitle:'Identity, authorization, application security and threat modeling',lessons:[
      {id:'identity',title:'Identity and Authentication',level:'First Principles',time:'50 min',body:'Separate the concepts of identity, authentication and authorization and trace a secure login flow.'},
      {id:'cookies-sessions',title:'Cookies and Sessions',level:'Core',time:'50 min',body:'Understand HTTP-only cookies, session identifiers, expiration, secure attributes and session lifecycle.'},
      {id:'jwt',title:'JWT and Token-Based Authentication',level:'Core',time:'50 min',body:'Understand signed tokens, claims, expiration, storage choices and the trade-offs of token authentication.'},
      {id:'oauth',title:'OAuth and OpenID Connect',level:'Advanced',time:'60 min',body:'Understand delegated authorization and identity federation without confusing OAuth with authentication itself.'},
      {id:'passwords',title:'Password Hashing',level:'Security',time:'40 min',body:'Learn why passwords must be hashed and how Argon2 and bcrypt fit into secure credential storage.'},
      {id:'authorization',title:'Authorization and Permissions',level:'Security',time:'50 min',body:'Design roles, capabilities, ownership checks and policy boundaries.'},
      {id:'web-attacks',title:'Common Web Attacks',level:'Security',time:'65 min',body:'Study XSS, CSRF, injection, SSRF, broken access control, unsafe redirects and related defenses.'},
      {id:'cors-csp-secrets',title:'CORS, CSP and Secrets',level:'Advanced',time:'55 min',body:'Understand browser cross-origin rules, content security policy and safe secret management.'}
    ]},
    {id:'testing',number:'12',title:'Testing & Software Quality',subtitle:'Unit, integration, API, browser testing and reliable delivery',lessons:[
      {id:'testing-why',title:'Why We Test Software',level:'Foundations',time:'35 min',body:'Understand what tests protect, what they cannot prove and how confidence is built.'},
      {id:'unit-testing',title:'Unit Testing',level:'Core',time:'45 min',body:'Test isolated business logic with clear inputs, outputs and controlled dependencies.'},
      {id:'integration-testing',title:'Integration Testing',level:'Core',time:'50 min',body:'Test multiple components working together, including databases and HTTP boundaries.'},
      {id:'api-testing',title:'API Testing',level:'Production',time:'45 min',body:'Verify contracts, validation, authentication, authorization and failure responses.'},
      {id:'vitest',title:'Vitest',level:'Tooling',time:'40 min',body:'Build a modern TypeScript testing workflow with Vitest.'},
      {id:'jest',title:'Jest and Test Ecosystems',level:'Tooling',time:'40 min',body:'Understand Jest concepts and how test runners fit into JavaScript projects.'},
      {id:'e2e',title:'End-to-End Browser Testing',level:'Advanced',time:'50 min',body:'Test complete user journeys across browser, frontend, API and database boundaries.'},
      {id:'quality',title:'Code Quality and Test Strategy',level:'Mastery',time:'50 min',body:'Balance unit, integration and end-to-end tests while keeping feedback fast and useful.'}
    ]},
    {id:'git-devops',number:'13',title:'Git, Linux & DevOps',subtitle:'Version control, containers, automation and operational workflow',lessons:[
      {id:'git-fundamentals',title:'Git Fundamentals',level:'Core',time:'45 min',body:'Understand repositories, commits, branches, remotes and safe history management.'},
      {id:'git-advanced',title:'Branches, Rebasing and Conflicts',level:'Advanced',time:'50 min',body:'Work with feature branches, rebasing, conflict resolution and clean project history.'},
      {id:'github-workflow',title:'GitHub and Pull Requests',level:'Production',time:'40 min',body:'Use pull requests, reviews and collaborative workflows to safely deliver changes.'},
      {id:'linux',title:'Linux and Processes',level:'Foundations',time:'50 min',body:'Understand files, permissions, processes, signals, networking and the operating-system environment of servers.'},
      {id:'docker',title:'Docker and Containers',level:'Core',time:'55 min',body:'Understand images, layers, containers, networking, volumes and reproducible environments.'},
      {id:'compose',title:'Docker Compose and Local Systems',level:'Practice',time:'45 min',body:'Run applications with databases and supporting services as a repeatable local environment.'},
      {id:'cicd',title:'CI/CD Pipelines',level:'Production',time:'55 min',body:'Automate testing, validation, builds and controlled deployment using CI/CD.'},
      {id:'release',title:'Release Engineering',level:'Advanced',time:'50 min',body:'Design versioning, migrations, rollbacks, deployment checks and safe releases.'}
    ]},
    {id:'cloud',number:'14',title:'Cloud, Deployment & Observability',subtitle:'Hosting, networking, infrastructure, monitoring and reliability',lessons:[
      {id:'cloud-primitives',title:'Cloud Fundamentals',level:'Foundations',time:'45 min',body:'Understand compute, storage, networking, identity and managed services as cloud building blocks.'},
      {id:'deployment',title:'Deploy a Full-Stack Application',level:'Practice',time:'55 min',body:'Deploy frontend, backend and database components and connect them safely.'},
      {id:'env-config',title:'Environment Configuration and Secrets',level:'Production',time:'40 min',body:'Separate configuration from code and manage secrets safely across environments.'},
      {id:'reverse-proxy',title:'Domains, DNS, TLS and Reverse Proxies',level:'Advanced',time:'50 min',body:'Connect domains and certificates to production services through a reverse proxy or edge layer.'},
      {id:'logging',title:'Logs and Structured Logging',level:'Production',time:'40 min',body:'Produce useful machine-readable logs that support debugging and incident investigation.'},
      {id:'metrics',title:'Metrics and Health Checks',level:'Production',time:'45 min',body:'Measure traffic, latency, errors, resource use and service health.'},
      {id:'tracing',title:'Tracing and Request Lifecycles',level:'Advanced',time:'45 min',body:'Follow work across service boundaries to locate latency and failures.'},
      {id:'reliability',title:'Reliability and Recovery',level:'Advanced',time:'55 min',body:'Design timeouts, retries, graceful degradation, backups, recovery and operational safeguards.'}
    ]},
    {id:'architecture',number:'15',title:'Systems, Architecture & Scalability',subtitle:'Architecture decisions, distributed systems, messaging and resilience',lessons:[
      {id:'architecture',title:'How to Think About Architecture',level:'First Principles',time:'50 min',body:'Start with requirements, constraints, boundaries and trade-offs instead of memorizing diagrams.'},
      {id:'monolith',title:'Monoliths and Modular Architecture',level:'Core',time:'45 min',body:'Understand simple application boundaries, modules and when a monolith is useful.'},
      {id:'microservices',title:'Microservices',level:'Advanced',time:'55 min',body:'Understand service boundaries, independent deployment, operational costs and distributed failure.'},
      {id:'scaling',title:'Scaling Applications',level:'Systems',time:'55 min',body:'Reason about vertical scaling, horizontal scaling, load balancing, stateless services and bottlenecks.'},
      {id:'caching',title:'Caching at Scale',level:'Advanced',time:'50 min',body:'Design cache placement, invalidation, TTLs, consistency and failure behavior.'},
      {id:'queues',title:'Queues and Background Jobs',level:'Advanced',time:'55 min',body:'Use queues, workers, retries, idempotency and dead-letter handling for asynchronous work.'},
      {id:'distributed',title:'Distributed Systems',level:'Advanced',time:'65 min',body:'Explore latency, partial failure, consistency, coordination, replication and distributed state.'},
      {id:'resilience',title:'Failure, Resilience and Disaster Recovery',level:'Mastery',time:'60 min',body:'Design for dependency failure, overload, outages, recovery objectives and graceful degradation.'}
    ]},
    {id:'architecture-practice',number:'16',title:'System Design & Production Architecture',subtitle:'Requirements, capacity, security, trade-offs and complete systems',lessons:[
      {id:'requirements',title:'Turning Requirements into Engineering Work',level:'Practice',time:'45 min',body:'Convert ambiguous product requirements into explicit functional and technical constraints.'},
      {id:'capacity',title:'Capacity Estimation',level:'Systems',time:'50 min',body:'Estimate traffic, storage, bandwidth, latency and resource requirements before choosing architecture.'},
      {id:'api-system-design',title:'Designing APIs at System Level',level:'Advanced',time:'50 min',body:'Connect API contracts to clients, services, data models, caching and operational constraints.'},
      {id:'security-architecture',title:'Security Architecture',level:'Advanced',time:'55 min',body:'Apply trust boundaries, least privilege, threat modeling, encryption and defense in depth.'},
      {id:'architecture-patterns',title:'Architecture Patterns',level:'Advanced',time:'60 min',body:'Compare layered, clean, hexagonal, event-driven and domain-oriented structures by their trade-offs.'},
      {id:'system-design-method',title:'System Design Method',level:'Practice',time:'60 min',body:'Work from requirements through data model, APIs, architecture, bottlenecks and failure scenarios.'},
      {id:'production-checklist',title:'Production Readiness',level:'Production',time:'50 min',body:'Review security, performance, observability, backups, deployment, testing and operational readiness.'},
      {id:'capstone',title:'Full-Stack Production Capstone',level:'Mastery',time:'120 min',body:'Design and build a complete production-oriented application while explaining every major technical decision.'}
    ]}
  ]
};
