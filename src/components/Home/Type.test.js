import { render } from '@testing-library/react';
import Type from './Type';

// Mock the Typewriter component
jest.mock('typewriter-effect', () => {
  return function MockTypewriter({ options }) {
    return (
      <div data-testid="typewriter-component">
        <span>Mock Typewriter</span>
        <div data-testid="typewriter-options" style={{ display: 'none' }}>
          {JSON.stringify(options)}
        </div>
      </div>
    );
  };
});

describe('Type Component', () => {
  test('renders typewriter component', () => {
    const { getByTestId } = render(<Type />);
    
    expect(getByTestId('typewriter-component')).toBeInTheDocument();
  });

  test('passes correct options to Typewriter', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    
    expect(options.autoStart).toBe(true);
    expect(options.loop).toBe(true);
    expect(options.deleteSpeed).toBe(50);
  });

  test('includes all expected profession strings', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    const strings = options.strings;
    
    const expectedStrings = [
      "Software Engineer",
      "Full Stack Developer",
      "Dev Ops Engineer",
      "React Native Developer",
      "React JS Developer",
      "Mobile App Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
      "Django Developer",
      "Open Source Enthusiast",
      "Problem Solver",
      "Competitive Programmer",
      "Tech Explorer",
      ".net Frontend Developer",
    ];
    
    expectedStrings.forEach(string => {
      expect(strings).toContain(string);
    });
  });

  test('has correct number of profession strings', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    
    expect(options.strings).toHaveLength(15);
  });

  test('includes software engineering roles', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    const strings = options.strings;
    
    expect(strings).toContain("Software Engineer");
    expect(strings).toContain("Full Stack Developer");
    expect(strings).toContain("Dev Ops Engineer");
  });

  test('includes web development roles', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    const strings = options.strings;
    
    expect(strings).toContain("Web Developer");
    expect(strings).toContain("Frontend Developer");
    expect(strings).toContain("Backend Developer");
  });

  test('includes mobile development roles', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    const strings = options.strings;
    
    expect(strings).toContain("Mobile App Developer");
    expect(strings).toContain("React Native Developer");
  });

  test('includes specific technology roles', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    const strings = options.strings;
    
    expect(strings).toContain("React JS Developer");
    expect(strings).toContain("Django Developer");
    expect(strings).toContain(".net Frontend Developer");
  });

  test('includes personal characteristics', () => {
    const { getByTestId } = render(<Type />);
    
    const optionsElement = getByTestId('typewriter-options');
    const options = JSON.parse(optionsElement.textContent);
    const strings = options.strings;
    
    expect(strings).toContain("Open Source Enthusiast");
    expect(strings).toContain("Problem Solver");
    expect(strings).toContain("Competitive Programmer");
    expect(strings).toContain("Tech Explorer");
  });
});