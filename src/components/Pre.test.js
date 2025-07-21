import { render } from '@testing-library/react';
import Pre from './Pre';

describe('Pre Component', () => {
  test('renders with preloader id when load is true', () => {
    const { container } = render(<Pre load={true} />);
    
    const preloader = container.querySelector('#preloader');
    expect(preloader).toBeInTheDocument();
  });

  test('renders with preloader-none id when load is false', () => {
    const { container } = render(<Pre load={false} />);
    
    const preloader = container.querySelector('#preloader-none');
    expect(preloader).toBeInTheDocument();
  });

  test('does not render preloader id when load is false', () => {
    const { container } = render(<Pre load={false} />);
    
    const preloader = container.querySelector('#preloader');
    expect(preloader).not.toBeInTheDocument();
  });

  test('does not render preloader-none id when load is true', () => {
    const { container } = render(<Pre load={true} />);
    
    const preloader = container.querySelector('#preloader-none');
    expect(preloader).not.toBeInTheDocument();
  });

  test('renders an empty div', () => {
    const { container } = render(<Pre load={true} />);
    
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  test('handles undefined load prop gracefully', () => {
    const { container } = render(<Pre />);
    
    // Should render preloader-none when load is falsy
    const preloader = container.querySelector('#preloader-none');
    expect(preloader).toBeInTheDocument();
  });

  test('handles null load prop', () => {
    const { container } = render(<Pre load={null} />);
    
    const preloader = container.querySelector('#preloader-none');
    expect(preloader).toBeInTheDocument();
  });

  test('handles string load prop', () => {
    const { container } = render(<Pre load="true" />);
    
    // String "true" should be truthy
    const preloader = container.querySelector('#preloader');
    expect(preloader).toBeInTheDocument();
  });

  test('component structure is correct', () => {
    const { container } = render(<Pre load={true} />);
    
    expect(container.children).toHaveLength(1);
    expect(container.firstChild.tagName).toBe('DIV');
  });
});