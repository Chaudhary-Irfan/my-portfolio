import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimations.css";

const ScrollAnimation = ({ 
  children, 
  animationType = "fade-in", 
  delay = "", 
  duration = "", 
  threshold = 0.2,
  stagger = false,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once element has been animated, no need to observe it anymore
          observer.unobserve(elementRef.current);
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: threshold // Trigger when 20% of element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  // Combine animation classes
  const animationClasses = [
    'animate-on-scroll',
    animationType,
    delay ? `delay-${delay}` : '',
    duration ? `duration-${duration}` : '',
    stagger ? 'stagger-list' : '',
    isVisible ? 'animated' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div ref={elementRef} className={animationClasses}>
      {children}
    </div>
  );
};

export default ScrollAnimation;