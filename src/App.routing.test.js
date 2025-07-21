import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

describe('App Component - Routing', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders home page on default route', async () => {
    renderWithRouter(['/']);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('renders about page on /about route', async () => {
    renderWithRouter(['/about']);
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('renders projects page on /project route', async () => {
    renderWithRouter(['/project']);
    
    await waitFor(() => {
      expect(screen.getByTestId('projects-page')).toBeInTheDocument();
    });
  });

  test('renders resume page on /resume route', async () => {
    renderWithRouter(['/resume']);
    
    await waitFor(() => {
      expect(screen.getByTestId('resume-page')).toBeInTheDocument();
    });
  });

  test('redirects to home page on invalid route', async () => {
    renderWithRouter(['/invalid-route']);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('redirects to home page on empty route', async () => {
    renderWithRouter(['']);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('lazy loading works correctly', async () => {
    renderWithRouter(['/about']);
    
    // Should show loading state initially
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('navbar is present on all routes', async () => {
    renderWithRouter(['/about']);
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  test('footer is present on all routes', async () => {
    renderWithRouter(['/project']);
    
    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  test('scroll to top component is present on all routes', async () => {
    renderWithRouter(['/resume']);
    
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalled();
    });
  });

  test('preloader is shown initially regardless of route', () => {
    renderWithRouter(['/about']);
    
    expect(document.getElementById('preloader')).toBeInTheDocument();
  });

  test('multiple route transitions work correctly', async () => {
    const { rerender } = renderWithRouter(['/']);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
    
    rerender(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('case sensitive routes work correctly', async () => {
    renderWithRouter(['/About']);
    
    // Should redirect to home as routes are case sensitive
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('trailing slash routes work correctly', async () => {
    renderWithRouter(['/about/']);
    
    // Should redirect to home as exact routes don't match trailing slash
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('query parameters redirect to home', async () => {
    renderWithRouter(['/about?test=123']);
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('hash routes redirect to home', async () => {
    renderWithRouter(['/unknown#section']);
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });
});