import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

// Mock window.addEventListener and removeEventListener
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
  writable: true,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
  writable: true,
});

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true,
});

const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders navbar with correct links', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Blogs')).toBeInTheDocument();
  });

  test('displays brand logo and text', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByAltText('brand')).toBeInTheDocument();
    expect(screen.getByText('Irfan')).toBeInTheDocument();
  });

  test('shows active link for current route', () => {
    renderWithRouter(<Navbar />, { route: '/about' });
    
    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink).toHaveClass('nav-link-active');
  });

  test('theme toggle button is present', () => {
    renderWithRouter(<Navbar />);
    
    const themeButton = screen.getByLabelText(/switch to light mode/i);
    expect(themeButton).toBeInTheDocument();
  });

  test('theme toggle changes icon', () => {
    renderWithRouter(<Navbar />);
    
    const themeButton = screen.getByLabelText(/switch to light mode/i);
    fireEvent.click(themeButton);
    
    expect(screen.getByLabelText(/switch to dark mode/i)).toBeInTheDocument();
  });

  test('mobile menu toggle works', () => {
    renderWithRouter(<Navbar />);
    
    const toggleButton = screen.getByLabelText('Toggle navigation');
    fireEvent.click(toggleButton);
    
    // Check if the navbar is expanded
    expect(toggleButton).not.toHaveClass('collapsed');
  });

  test('navigation links have correct href attributes', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/project');
    expect(screen.getByText('Resume').closest('a')).toHaveAttribute('href', '/resume');
  });

  test('external links open in new tab', () => {
    renderWithRouter(<Navbar />);
    
    const blogLink = screen.getByText('Blogs').closest('a');
    expect(blogLink).toHaveAttribute('target', '_blank');
    expect(blogLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('GitHub fork button is present', () => {
    renderWithRouter(<Navbar />);
    
    const forkButton = screen.getByLabelText('View source code on GitHub');
    expect(forkButton).toBeInTheDocument();
    expect(forkButton).toHaveAttribute('target', '_blank');
  });

  test('adds scroll event listener on mount', () => {
    renderWithRouter(<Navbar />);
    
    expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  test('removes scroll event listener on unmount', () => {
    const { unmount } = renderWithRouter(<Navbar />);
    
    unmount();
    
    expect(mockRemoveEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  test('navbar changes style on scroll', () => {
    renderWithRouter(<Navbar />);
    
    // Simulate scroll event
    Object.defineProperty(window, 'scrollY', { value: 25, writable: true });
    
    // Get the scroll handler from addEventListener mock
    const scrollHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'scroll'
    )[1];
    
    // Call the scroll handler
    scrollHandler();
    
    // Check if navbar has sticky class
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('sticky');
  });

  test('clicking nav links collapses mobile menu', () => {
    renderWithRouter(<Navbar />);
    
    const toggleButton = screen.getByLabelText('Toggle navigation');
    const homeLink = screen.getByText('Home');
    
    // First expand the menu
    fireEvent.click(toggleButton);
    expect(toggleButton).not.toHaveClass('collapsed');
    
    // Then click a nav link
    fireEvent.click(homeLink);
    
    // Menu should collapse
    expect(toggleButton).toHaveClass('collapsed');
  });
});