import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

// Mock child components
jest.mock('../Particle', () => {
  return function MockParticle() {
    return <div data-testid="particle-component">Particle Component</div>;
  };
});

jest.mock('./Home2', () => {
  return function MockHome2() {
    return <div data-testid="home2-component">Home2 Component</div>;
  };
});

jest.mock('./Type', () => {
  return function MockType() {
    return <div data-testid="type-component">Type Component</div>;
  };
});

jest.mock('../ScrollAnimation', () => {
  return function MockScrollAnimation({ children, ...props }) {
    return <div data-testid="scroll-animation" {...props}>{children}</div>;
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders home page content', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Hi There!')).toBeInTheDocument();
    expect(screen.getByText('👋🏻')).toBeInTheDocument();
    expect(screen.getByText(/I'M/)).toBeInTheDocument();
    expect(screen.getByText('Chaudhary Irfan')).toBeInTheDocument();
  });

  test('displays professional badge', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  test('shows hero description', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText(/I build exceptional digital experiences/)).toBeInTheDocument();
  });

  test('displays action buttons', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  test('shows tech stack', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Tech Stack:')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Django')).toBeInTheDocument();
    expect(screen.getByText('React Native')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  test('buttons have correct accessibility labels', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByLabelText('View my projects')).toBeInTheDocument();
    expect(screen.getByLabelText('Download my resume')).toBeInTheDocument();
  });

  test('renders home main image', () => {
    renderWithRouter(<Home />);
    
    const homeImage = screen.getByAltText('developer illustration');
    expect(homeImage).toBeInTheDocument();
    expect(homeImage).toHaveAttribute('loading', 'lazy');
  });

  test('renders particle component', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByTestId('particle-component')).toBeInTheDocument();
  });

  test('renders type component', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByTestId('type-component')).toBeInTheDocument();
  });

  test('renders Home2 component', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByTestId('home2-component')).toBeInTheDocument();
  });

  test('scroll animations are present', () => {
    renderWithRouter(<Home />);
    
    const scrollAnimations = screen.getAllByTestId('scroll-animation');
    expect(scrollAnimations.length).toBeGreaterThan(0);
  });

  test('wave emoji has correct accessibility attributes', () => {
    renderWithRouter(<Home />);
    
    const waveEmoji = screen.getByText('👋🏻');
    expect(waveEmoji).toHaveAttribute('role', 'img');
    expect(waveEmoji).toHaveAttribute('aria-labelledby', 'wave');
  });

  test('hero section has fade-in animation', async () => {
    renderWithRouter(<Home />);
    
    await waitFor(() => {
      const heroSection = screen.getByText('Hi There!').closest('.home-header');
      expect(heroSection).toHaveClass('fade-in');
    });
  });

  test('buttons link to correct routes', () => {
    renderWithRouter(<Home />);
    
    const projectButton = screen.getByText('View My Work').closest('a');
    const resumeButton = screen.getByText('Resume').closest('a');
    
    expect(projectButton).toHaveAttribute('href', '/project');
    expect(resumeButton).toHaveAttribute('href', '/resume');
  });

  test('main name has correct styling class', () => {
    renderWithRouter(<Home />);
    
    const mainName = screen.getByText('Chaudhary Irfan');
    expect(mainName).toHaveClass('main-name');
  });

  test('hero title has correct styling', () => {
    renderWithRouter(<Home />);
    
    const heroTitle = screen.getByText('Hi There!');
    expect(heroTitle).toHaveClass('hero-title');
  });
});