window.FULLSTACK_BIBLE = {
  version: '0.1.0',
  domains: [
    { id:'foundations', number:'01', title:'Web Foundations', subtitle:'Internet, browser, HTTP and the platform', lessons:[
      {id:'web-works',title:'How the Web Works',level:'First Principles',time:'35 min',body:'A web application is a conversation between clients and servers carried by networks and protocols. Start with the complete request lifecycle: URL parsing, DNS, connection establishment, TLS, HTTP, server processing, response handling and browser rendering.'},
      {id:'html-anatomy',title:'HTML Document Anatomy',level:'Fundamentals',time:'30 min',body:'HTML is a structured document language. Learn elements, attributes, nesting, semantics, metadata, forms and how the browser parses source into the DOM.'},
      {id:'browser-runtime',title:'Inside the Browser',level:'Deep Dive',time:'45 min',body:'Follow a document from bytes to pixels: parsing, DOM, CSSOM, render tree, style calculation, layout, paint and compositing. Connect JavaScript execution to browser APIs.'},
      {id:'http',title:'HTTP from First Principles',level:'Deep Dive',time:'50 min',body:'Understand methods, status codes, headers, bodies, caching, cookies, content negotiation, redirects, compression, HTTP/2 and HTTP/3.'},
      {id:'urls-dns',title:'URLs, DNS and Naming',level:'Fundamentals',time:'35 min',body:'Learn how names become addresses, recursive resolution works, DNS records are used, and how naming affects availability and architecture.'},
      {id:'tls',title:'TLS and Secure Transport',level:'Security',time:'40 min',body:'Understand certificates, certificate authorities, public-key cryptography, handshakes, symmetric session keys and why HTTPS protects data in transit.'},
      {id:'devtools',title:'Developer Tools',level:'Practice',time:'30 min',body:'Use browser DevTools to inspect DOM, CSS, network traffic, storage, console output, performance and runtime behavior.'},
      {id:'web-platform',title:'The Web Platform',level:'Advanced',time:'45 min',body:'Connect Web APIs, storage, events, workers, fetch, streams and browser security boundaries into one coherent platform model.'}
    ]},
    { id:'css', number:'02', title:'CSS & Modern Styling', subtitle:'Layout, rendering, responsive systems and design', lessons:[
      {id:'css-model',title:'The CSS Mental Model',level:'First Principles',time:'35 min',body:'Understand selectors, declarations, cascade, inheritance, computed values and the path from CSS source to rendered styles.'},
      {id:'box-model',title:'The Box Model',level:'Fundamentals',time:'25 min',body:'Master content, padding, border, margin, sizing and box-sizing. Learn why dimensions behave differently across layout contexts.'},
      {id:'flexbox',title:'Flexbox',level:'Fundamentals',time:'35 min',body:'Learn one-dimensional layout, axes, sizing, alignment, distribution and how flex items negotiate available space.'},
      {id:'grid',title:'CSS Grid',level:'Fundamentals',time:'40 min',body:'Build two-dimensional layouts with tracks, areas, auto-placement, intrinsic sizing and responsive patterns.'},
      {id:'responsive',title:'Responsive Design',level:'Production',time:'35 min',body:'Design interfaces that adapt to viewport, input, density and content rather than targeting a fixed list of devices.'},
      {id:'cascade',title:'Cascade and Specificity',level:'Deep Dive',time:'30 min',body:'Reason about origins, layers, specificity, inheritance and source order without relying on trial-and-error styling.'},
      {id:'animations',title:'Motion and Compositing',level:'Advanced',time:'35 min',body:'Understand transitions, animations, transforms, compositing and how to design motion without creating unnecessary rendering work.'},
      {id:'css-architecture',title:'CSS Architecture',level:'Production',time:'40 min',body:'Organize styles for scale using tokens, components, composition, layers and predictable naming and ownership.'}
    ]},
    { id:'javascript', number:'03', title:'JavaScript Essentials', subtitle:'Language, runtime, browser APIs and asynchronous systems', lessons:[
      {id:'js-language',title:'JavaScript as a Language',level:'First Principles',time:'45 min',body:'Learn values, types, expressions, statements, variables, control flow and functions as the primitive vocabulary of JavaScript.'},
      {id:'scope-closures',title:'Scope and Closures',level:'Deep Dive',time:'45 min',body:'Understand lexical environments, scope chains, closures and why functions retain access to variables after their surrounding code has returned.'},
      {id:'objects-prototypes',title:'Objects and Prototypes',level:'Deep Dive',time:'50 min',body:'Explore property lookup, prototypes, descriptors, classes and the object model underneath familiar JavaScript syntax.'},
      {id:'async',title:'Promises and Asynchronous JavaScript',level:'Deep Dive',time:'50 min',body:'Understand promises, async functions, error propagation and how asynchronous work is represented and composed.'},
      {id:'event-loop',title:'The Event Loop',level:'Runtime',time:'55 min',body:'Trace call stacks, tasks, microtasks and browser scheduling. Learn why seemingly simple asynchronous code executes in a particular order.'},
      {id:'dom-events',title:'DOM and Events',level:'Browser',time:'40 min',body:'Connect JavaScript to documents through DOM traversal, mutation, event propagation, delegation and browser APIs.'},
      {id:'modules',title:'Modules and Tooling',level:'Modern JS',time:'40 min',body:'Understand ES modules, imports, exports, dependency graphs, bundling, transpilation and package boundaries.'},
      {id:'js-performance',title:'JavaScript Performance',level:'Advanced',time:'45 min',body:'Reason about memory, garbage collection, hot paths, rendering work, code splitting and practical performance measurement.'}
    ]},
    { id:'react', number:'04', title:'React & Next.js', subtitle:'Component architecture, state, rendering and full-stack UI', lessons:[
      {id:'react-model',title:'The React Mental Model',level:'First Principles',time:'40 min',body:'Understand components, props, state, rendering and reconciliation before learning framework conventions.'},
      {id:'components',title:'Component Design',level:'Fundamentals',time:'35 min',body:'Build components with clear responsibilities, data flow and composable interfaces.'},
      {id:'state',title:'State and Effects',level:'Deep Dive',time:'45 min',body:'Understand state transitions, derived data, effects, synchronization and why effects should represent external synchronization.'},
      {id:'rendering',title:'Rendering and Reconciliation',level:'Deep Dive',time:'50 min',body:'Follow updates through React rendering and reconciliation, and understand the implications for component performance.'},
      {id:'next-routing',title:'Next.js Routing and Rendering',level:'Framework',time:'45 min',body:'Learn routing, layouts, server components, client components and the different rendering strategies available in Next.js.'},
      {id:'data-fetching',title:'Data Fetching',level:'Production',time:'40 min',body:'Compare server-side fetching, client fetching, caching, revalidation and loading and error boundaries.'},
      {id:'forms',title:'Forms and Mutations',level:'Production',time:'40 min',body:'Build robust forms, validation, optimistic interactions and server-backed mutations.'},
      {id:'frontend-architecture',title:'Frontend Architecture',level:'Advanced',time:'50 min',body:'Design scalable frontend boundaries, state ownership, data access layers, component systems and testing strategy.'}
    ]},
    { id:'backend', number:'05', title:'Node.js & APIs', subtitle:'Processes, servers, APIs, auth and distributed work', lessons:[
      {id:'node-runtime',title:'Node.js Runtime',level:'First Principles',time:'45 min',body:'Understand Node as a JavaScript runtime built around an event-driven architecture, operating-system primitives and asynchronous I/O.'},
      {id:'http-server',title:'Build an HTTP Server',level:'Practice',time:'45 min',body:'Implement request routing, parsing, response handling, headers, errors and graceful shutdown.'},
      {id:'api-design',title:'API Design',level:'Production',time:'50 min',body:'Design resource boundaries, contracts, validation, status codes, pagination, filtering and versioning.'},
      {id:'authentication',title:'Authentication',level:'Security',time:'55 min',body:'Understand identity, sessions, cookies, tokens, password storage, OAuth concepts and common authentication failure modes.'},
      {id:'authorization',title:'Authorization',level:'Security',time:'40 min',body:'Model permissions, roles, capabilities and policy checks so identity does not get confused with access control.'},
      {id:'queues',title:'Queues and Background Jobs',level:'Systems',time:'45 min',body:'Move slow or asynchronous work out of request paths using queues, workers, retries and idempotency.'},
      {id:'api-security',title:'API Security',level:'Security',time:'45 min',body:'Study input validation, rate limiting, CSRF, CORS, injection, secrets and abuse-resistant API boundaries.'},
      {id:'backend-production',title:'Production Backend Architecture',level:'Advanced',time:'55 min',body:'Connect services, configuration, observability, caching, failure handling, deployment and operational ownership.'}
    ]},
    { id:'database', number:'06', title:'Databases', subtitle:'Data modeling, SQL, indexes, transactions and scale', lessons:[
      {id:'data-modeling',title:'How Databases Think',level:'First Principles',time:'45 min',body:'Understand persistence, records, pages, indexes, queries and why databases exist as a separate system.'},
      {id:'sql',title:'SQL Fundamentals',level:'Fundamentals',time:'50 min',body:'Learn SELECT, filtering, joins, grouping, aggregation, subqueries and the relational model.'},
      {id:'schema',title:'Schema and Data Modeling',level:'Design',time:'45 min',body:'Translate domain concepts into tables, relationships, constraints and normalization decisions.'},
      {id:'indexes',title:'Indexes',level:'Deep Dive',time:'45 min',body:'Understand index structures, selectivity, query plans, composite indexes and the cost of reads versus writes.'},
      {id:'transactions',title:'Transactions and ACID',level:'Deep Dive',time:'55 min',body:'Explore atomicity, consistency, isolation, durability, locking, concurrency and common transaction anomalies.'},
      {id:'postgres',title:'PostgreSQL in Practice',level:'Production',time:'50 min',body:'Build production schemas, constraints, migrations, queries, connection management and operational practices.'},
      {id:'caching',title:'Caching and Data Access',level:'Systems',time:'40 min',body:'Understand cache-aside, invalidation, TTLs, consistency trade-offs and where caching belongs in an application.'},
      {id:'database-scale',title:'Replication and Scaling',level:'Advanced',time:'55 min',body:'Study replicas, read scaling, partitioning, sharding, failover and the operational trade-offs of distributed data.'}
    ]},
    { id:'cloud', number:'07', title:'Cloud & DevOps', subtitle:'Containers, deployment, CI/CD and operations', lessons:[
      {id:'linux',title:'Linux and Processes',level:'First Principles',time:'45 min',body:'Understand files, permissions, processes, signals, networking and the operating-system environment behind deployed applications.'},
      {id:'git',title:'Git and Version Control',level:'Fundamentals',time:'35 min',body:'Learn commits, branches, merges, rebases, remotes and workflows for safely evolving software.'},
      {id:'docker',title:'Containers and Docker',level:'Fundamentals',time:'45 min',body:'Understand images, layers, containers, isolation, networking and reproducible application environments.'},
      {id:'cicd',title:'CI/CD',level:'Production',time:'45 min',body:'Build pipelines that test, package, validate and deploy software with repeatability and controlled promotion.'},
      {id:'cloud',title:'Cloud Primitives',level:'Architecture',time:'50 min',body:'Understand compute, storage, networking, identity, managed databases and the abstraction layers offered by cloud platforms.'},
      {id:'observability',title:'Observability',level:'Production',time:'45 min',body:'Use logs, metrics, traces, health checks and alerting to understand a running system.'},
      {id:'reliability',title:'Reliability Engineering',level:'Advanced',time:'50 min',body:'Study availability, SLOs, error budgets, graceful degradation, retries, timeouts and recovery.'},
      {id:'deployment',title:'Production Deployment',level:'Advanced',time:'55 min',body:'Design deployment strategies, secrets management, rollbacks, migrations, scaling and operational safeguards.'}
    ]},
    { id:'systems', number:'08', title:'Systems & Architecture', subtitle:'Scale, distributed systems and engineering decisions', lessons:[
      {id:'architecture',title:'What Is Software Architecture?',level:'First Principles',time:'45 min',body:'Learn to reason about boundaries, dependencies, constraints, quality attributes and trade-offs instead of memorizing architecture diagrams.'},
      {id:'scaling',title:'Scaling Applications',level:'Systems',time:'50 min',body:'Understand vertical scaling, horizontal scaling, load balancing, stateless services and bottleneck analysis.'},
      {id:'distributed',title:'Distributed Systems',level:'Advanced',time:'60 min',body:'Explore latency, partial failure, clocks, consistency, coordination and why distributed systems are fundamentally different from local programs.'},
      {id:'messaging',title:'Messaging and Event-Driven Systems',level:'Advanced',time:'50 min',body:'Understand brokers, producers, consumers, delivery semantics, ordering, replay and event-driven boundaries.'},
      {id:'system-design',title:'System Design Method',level:'Practice',time:'55 min',body:'Turn ambiguous product requirements into capacity estimates, APIs, data models, architecture and explicit trade-offs.'},
      {id:'security-architecture',title:'Security Architecture',level:'Advanced',time:'50 min',body:'Apply threat modeling, trust boundaries, least privilege, secrets, encryption and defense-in-depth at system level.'},
      {id:'failure',title:'Failure and Resilience',level:'Advanced',time:'50 min',body:'Design for timeouts, retries, circuit breaking, overload, dependency failure, recovery and graceful degradation.'},
      {id:'capstone',title:'Production System Capstone',level:'Mastery',time:'90 min',body:'Design and build a complete production-oriented application while explaining every major technology and architectural decision.'}
    ]}
  ]
};
