# FullStack Bible

A connected technical knowledge system for learning and building full-stack software.

## Product model

**Knowledge → Learn → Visualize → Code Lab → Practice → Build → Master**

FullStack Bible is a working browser application rather than a generic LMS or essay collection. The interface connects curriculum, mental models, executable examples, checkpoints, notes, projects and progress in one persistent technical workspace.

## Curriculum

8 domains × 8 core lessons = **64 structured lessons**:

1. Web Foundations
2. CSS & Modern Styling
3. JavaScript Essentials
4. React & Next.js
5. Node.js & APIs
6. Databases
7. Cloud & DevOps
8. Systems & Architecture

## Working features

- Home / connected curriculum map
- Learning Path with 64 lessons
- Lesson reader
- Visual system maps
- Browser Code Lab
- JavaScript execution sandbox for lesson examples
- Run / Reset / console output
- Lesson completion and mastery tracking
- Previous / next lesson navigation
- Per-lesson notes
- Bible-wide lesson search
- Project system with build milestones
- Progress dashboard by domain
- Local persistence with `localStorage`
- Learning-data JSON export
- AI Tutor interaction surface anchored to the active lesson
- Local experience settings
- Responsive desktop, tablet and mobile layouts
- Reduced-motion support

## Run

Open `index.html` in a modern browser. No build step is required for the current browser application.

## Engineering rule

The repository is the single source of truth. Existing working functionality must be preserved when extending the system. New curriculum should be added as structured lesson data and connected to the same Learn → Visualize → Code Lab → Practice → Build flow.
