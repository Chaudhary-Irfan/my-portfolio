# Portfolio Website Information

## Summary
A personal portfolio website built with React.js showcasing the developer's skills, projects, and resume. Features a responsive multi-page layout with dark/light mode toggle and is styled with React-Bootstrap and CSS.

## Structure
- **public/**: Contains static assets and the HTML entry point
- **src/**: Main source code directory
  - **components/**: React components organized by feature (About, Home, Projects, Resume)
  - **Assets/**: Images and other static resources
  - **App.js**: Main application component with routing configuration
- **Images/**: Additional image resources

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 17.0.2
**Build System**: Create React App
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^17.0.2
- react-dom: ^17.0.2
- react-router-dom: ^6.2.2
- react-bootstrap: ^2.2.1
- bootstrap: ^5.1.3
- react-github-calendar: ^3.2.2
- react-pdf: ^5.7.1
- react-tsparticles: ^1.42.2
- typewriter-effect: ^2.18.2
- axios: ^0.26.1

**Development Dependencies**:
- gh-pages: ^6.3.0
- Testing libraries: jest-dom, react, user-event

## Build & Installation
```bash
# Installation
npm install

# Development server
npm start

# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Testing
**Framework**: Jest with React Testing Library
**Test Location**: src/App.test.js and potentially other test files
**Configuration**: src/setupTests.js
**Run Command**:
```bash
npm test
```

## Key Components
- **Home**: Landing page with introduction and typewriter effect
- **About**: Developer information, tech stack, and GitHub contributions
- **Projects**: Portfolio of completed projects with descriptions
- **Resume**: Downloadable resume and skills showcase
- **Navbar**: Navigation with dark/light mode toggle
- **Footer**: Contact information and social links

## Performance Optimizations
- Lazy loading of page components
- Image preloading for critical assets
- Suspense with fallback for component loading