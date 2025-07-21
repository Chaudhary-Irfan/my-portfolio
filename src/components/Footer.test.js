import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders footer with correct content', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Chaudhary Irfan')).toBeInTheDocument();
    expect(screen.getByText(/A passionate Full Stack Developer/)).toBeInTheDocument();
  });

  test('displays current year in copyright', () => {
    renderWithRouter(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Chaudhary Irfan`))).toBeInTheDocument();
  });

  test('shows contact information', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('chaudharyirfan0420@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+92 318 5248744')).toBeInTheDocument();
    expect(screen.getByText('Rawalpindi, Pakistan')).toBeInTheDocument();
  });

  test('displays professional specialties', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument();
    expect(screen.getByText('Backend Solutions')).toBeInTheDocument();
  });

  test('shows availability status', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Available for freelance projects')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  test('social media links are present', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('WhatsApp Contact')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Contact')).toBeInTheDocument();
  });

  test('social links have correct attributes', () => {
    renderWithRouter(<Footer />);
    
    const githubLink = screen.getByLabelText('GitHub Profile');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Chaudhary-Irfan');
    
    const linkedinLink = screen.getByLabelText('LinkedIn Profile');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chaudhary-irfan');
  });

  test('email links have correct mailto attributes', () => {
    renderWithRouter(<Footer />);
    
    const emailLinks = screen.getAllByText('chaudharyirfan0420@gmail.com');
    const contactEmailLink = emailLinks[0];
    
    expect(contactEmailLink).toHaveAttribute('href', 'mailto:chaudharyirfan0420@gmail.com');
  });

  test('WhatsApp links have correct href', () => {
    renderWithRouter(<Footer />);
    
    const whatsappLinks = screen.getAllByText('+92 318 5248744');
    const contactWhatsappLink = whatsappLinks[0];
    
    expect(contactWhatsappLink).toHaveAttribute('href', expect.stringContaining('wa.me/923185248744'));
  });

  test('scroll to top button is present', () => {
    renderWithRouter(<Footer />);
    
    const scrollButton = screen.getByLabelText('Scroll to top');
    expect(scrollButton).toBeInTheDocument();
  });

  test('scroll to top button works', () => {
    renderWithRouter(<Footer />);
    
    const scrollButton = screen.getByLabelText('Scroll to top');
    fireEvent.click(scrollButton);
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });

  test('footer navigation links have correct href attributes', () => {
    renderWithRouter(<Footer />);
    
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    const projectsLink = screen.getByText('Projects').closest('a');
    const resumeLink = screen.getByText('Resume').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(projectsLink).toHaveAttribute('href', '/project');
    expect(resumeLink).toHaveAttribute('href', '/resume');
  });

  test('footer has wave SVG decoration', () => {
    renderWithRouter(<Footer />);
    
    const waveSvg = document.querySelector('.footer-wave');
    expect(waveSvg).toBeInTheDocument();
  });

  test('footer has correct role attribute', () => {
    renderWithRouter(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('social icons have tooltips', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('displays developer signature', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText(/Designed and Developed with/)).toBeInTheDocument();
    expect(screen.getByText('❤️')).toBeInTheDocument();
  });
});