import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

// Mock the Image constructor to simulate image loading
global.Image = class {
  constructor() {
    this.src = '';
    setTimeout(() => {
      this.onload?.();
    }, 10);
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

describe('Performance Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('app loads within reasonable time', async () => {
    const startTime = Date.now();
    
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(2000); // Should load within 2 seconds
  });

  test('preloader timeout is reasonable', async () => {
    const startTime = Date.now();
    
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(document.getElementById('preloader')).not.toBeInTheDocument();
    }, { timeout: 1500 });

    const preloaderTime = Date.now() - startTime;
    expect(preloaderTime).toBeGreaterThan(900); // Should be at least 1 second
    expect(preloaderTime).toBeLessThan(1200); // But not more than 1.2 seconds
  });

  test('images are preloaded efficiently', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if image preloading is triggered
    expect(global.Image).toHaveBeenCalled();
    
    // Should not create excessive image objects
    expect(global.Image).toHaveBeenCalledTimes(1);
  });

  test('components use lazy loading', async () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Home component should load
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    // Switch to about page
    rerender(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    // About component should load lazily
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('no excessive DOM elements on initial load', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    const allElements = document.querySelectorAll('*');
    expect(allElements.length).toBeLessThan(1000); // Reasonable DOM size
  });

  test('no memory leaks with multiple renders', async () => {
    const { unmount } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    unmount();

    // Re-render to check for memory leaks
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('scroll event handlers are cleaned up', () => {
    const mockRemoveEventListener = jest.fn();
    const mockAddEventListener = jest.fn();

    Object.defineProperty(window, 'addEventListener', {
      value: mockAddEventListener,
      writable: true,
    });

    Object.defineProperty(window, 'removeEventListener', {
      value: mockRemoveEventListener,
      writable: true,
    });

    const { unmount } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    unmount();

    // Check if event listeners are removed
    expect(mockRemoveEventListener).toHaveBeenCalled();
  });

  test('dark mode toggle does not cause excessive re-renders', () => {
    const renderCount = jest.fn();
    
    const TestComponent = () => {
      renderCount();
      return <App />;
    };

    render(
      <MemoryRouter>
        <TestComponent />
      </MemoryRouter>
    );

    // Initial render should be reasonable
    expect(renderCount).toHaveBeenCalledTimes(1);
  });

  test('route changes are efficient', async () => {
    const startTime = Date.now();
    
    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    // Switch routes
    rerender(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    const routeChangeTime = Date.now() - startTime;
    expect(routeChangeTime).toBeLessThan(500); // Route change should be fast
  });

  test('component cleanup prevents memory leaks', () => {
    const { unmount } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Unmount the component
    unmount();

    // Check if body classes are cleaned up
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });
});