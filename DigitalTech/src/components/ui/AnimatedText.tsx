import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  // Split text into words
  const words = text.split(' ');

  return (
    <div ref={textRef} className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2 overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className={`inline-block transition-transform duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
              style={{
                transitionDelay: `${delay + (wordIndex * 0.1) + (charIndex * 0.03)}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;