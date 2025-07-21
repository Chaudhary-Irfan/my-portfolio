import { render } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { act } from 'react-dom/test-utils';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

// Test component to trigger location changes
const TestComponent = () => {
  const location = useLocation();
  
  return (
    <div>
      <ScrollToTop />
      <div data-testid="current-path">{location.pathname}</div>
    </div>
  );
};

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('scrolls to top on route change', () => {
    const { rerender } = render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>
    );

    // Initial render should call scrollTo
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

    // Change route by re-rendering with different initial entries
    act(() => {
      window.history.pushState({}, 'Test page', '/about');
    });

    // Re-render to trigger the effect
    rerender(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>
    );

    // Should call scrollTo again
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });

  test('renders nothing (returns null)', () => {
    const { container } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeNull();
  });

  test('calls scrollTo with correct parameters', () => {
    render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('effect runs on pathname changes', () => {
    let mockPathname = '/';
    
    // Mock useLocation to return our controlled pathname
    const mockUseLocation = jest.fn();
    mockUseLocation.mockReturnValue({ pathname: mockPathname });
    
    // Mock the module
    jest.doMock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: mockUseLocation
    }));

    const { rerender } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(window.scrollTo).toHaveBeenCalledTimes(1);

    // Change pathname
    mockPathname = '/about';
    mockUseLocation.mockReturnValue({ pathname: mockPathname });

    rerender(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    );

    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });

  test('handles window.scrollTo errors gracefully', () => {
    // Mock scrollTo to throw an error
    window.scrollTo = jest.fn().mockImplementation(() => {
      throw new Error('ScrollTo not supported');
    });

    // Should not throw an error
    expect(() => {
      render(
        <BrowserRouter>
          <ScrollToTop />
        </BrowserRouter>
      );
    }).not.toThrow();
  });
});