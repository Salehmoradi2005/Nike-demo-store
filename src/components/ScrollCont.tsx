import  { useEffect, useRef, useState } from 'react';

const ScrollCont = ({ children  }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} `} >
      {children}
    </div>
  );
};

export default ScrollCont;
