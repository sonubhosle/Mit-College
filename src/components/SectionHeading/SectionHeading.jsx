import React, { useEffect, useRef, useState } from 'react';



const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  align = 'center',
  className = '',
  lightMode = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const lineAlignmentClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <div 
      ref={ref} 
      className={`max-w-3xl ${alignmentClasses[align]} ${className}`}
    >
      {subtitle && (
        <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-3 justify-center">
   {align === 'center' && <span className="w-8 h-px bg-amber-500/50"></span>}
   {subtitle}
   {align === 'center' && <span className="w-8 h-px bg-amber-500/50"></span>}
</span>

        </div>
      )}
      
      <div className={`transition-all duration-700 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-6 ${lightMode ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
      </div>

      <div className={`h-1.5 bg-linear-to-r from-amber-400 to-amber-600 rounded-full mb-8 transition-all duration-1000 delay-200 ease-out transform ${lineAlignmentClasses[align]} ${isVisible ? 'w-24 opacity-100 scale-100' : 'w-0 opacity-0 scale-50'}`}></div>
      
      {description && (
        <div className={`transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className={`text-lg leading-relaxed font-medium ${lightMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;