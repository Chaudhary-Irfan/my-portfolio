import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from './Services';

// Mock the ScrollAnimation component
jest.mock('../ScrollAnimation', () => {
  return function MockScrollAnimation({ children }) {
    return <div>{children}</div>;
  };
});

// Mock the Particle component
jest.mock('../Particle', () => {
  return function MockParticle() {
    return <div data-testid="particle" />;
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Services Component', () => {
  test('renders services heading', () => {
    renderWithRouter(<Services />);
    expect(screen.getByRole('heading', { name: /My Services/i })).toBeInTheDocument();
  });

  test('renders all service cards', () => {
    renderWithRouter(<Services />);
    expect(screen.getByText('Full-stack Web App Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile App UI Development')).toBeInTheDocument();
    expect(screen.getByText('Dashboard & Admin Panel Development')).toBeInTheDocument();
    expect(screen.getByText('RESTful API Integration')).toBeInTheDocument();
    expect(screen.getByText('Maintenance & Deployment')).toBeInTheDocument();
  });

  test('renders technology stack section', () => {
    renderWithRouter(<Services />);
    expect(screen.getByRole('heading', { name: /Technologies I Work With/i })).toBeInTheDocument();
  });

  test('renders call to action section', () => {
    renderWithRouter(<Services />);
    expect(screen.getByRole('heading', { name: /Ready to Start Your Project/i })).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  test('renders contact links', () => {
    renderWithRouter(<Services />);
    const emailLink = screen.getByText('Get In Touch');
    const linkedinLink = screen.getByText('View LinkedIn');
    
    expect(emailLink).toHaveAttribute('href', 'mailto:chaudharyirfan.dev@gmail.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chaudhary-irfan/');
  });
});