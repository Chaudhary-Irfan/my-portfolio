import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

// Mock the Image constructor
global.Image = class {
  constructor() {
    setTimeout(() => {
      this.onload?.();
    }, 0);
  }
};

// Mock lazy loaded components
jest.mock('./components/Home/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('./components/About/About', () => {
  return function MockAbout() {
    return <div data-testid="about-page">About Page</div>;
  };
});

jest.mock('./components/Projects/Projects', () => {
  return function MockProjects() {
    return <div data-testid="projects-page">Projects Page</div>;
  };
});

jest.mock('./components/Resume/ResumeNew', () => {
  return function MockResume() {
    return <div data-testid="resume-page">Resume Page</div>;
  };
});

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', async () => {
    render(<App />);
    
    // Wait for the preloader to finish
    await waitFor(() => {
      expect(screen.queryByTestId('preloader')).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('displays preloader initially', () => {
    render(<App />);
    expect(document.getElementById('preloader')).toBeInTheDocument();
  });

  test('removes preloader after timeout', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(document.getElementById('preloader')).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('applies dark mode class by default', () => {
    render(<App />);
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });

  test('renders navbar component', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders footer component', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders home page by default', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('preloads critical images', () => {
    render(<App />);
    expect(global.Image).toHaveBeenCalled();
  });
});
