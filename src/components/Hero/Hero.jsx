import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Welcome to EduPrime College",
    title: "Shape Your",
    highlight: "Bright Future",
    description: "Discover a world of knowledge, innovation, and community. Our world-class programs and dedicated faculty are here to help you achieve your dreams."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80",
    subtitle: "Excellence in Education",
    title: "Innovate &",
    highlight: "Inspire",
    description: "Join a vibrant community of scholars and changemakers. Experience learning that goes beyond the classroom with our practical approach."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    subtitle: "World Class Facilities",
    title: "Empowering",
    highlight: "Leaders",
    description: "State-of-the-art labs, modern libraries, and recreational centers designed to foster your growth, creativity, and academic success."
  }
];

const Hero  = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;``
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative bg-slate-900 overflow-hidden h-[680px] flex items-center">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            className={`w-full h-full object-cover transition-transform duration-8000 ease-linear ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            src={slide.image}
            alt={slide.title}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-slate-900/40 bg-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>
      ))}
      
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-30 ">
        {SLIDES.map((slide, index) => {
           const isActive = index === currentSlide;
           return (
             <div 
               key={slide.id} 
               className={`max-w-4xl transition-opacity duration-500 ${
                 isActive 
                   ? 'opacity-100 relative pointer-events-auto' 
                   : 'opacity-0 absolute top-0 pointer-events-none'
               }`}
             >
               {/* Badge */}
               <div className={`transform transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                 isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
               }`}>
                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                   <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
                   {slide.subtitle}
                 </div>
               </div>
               
               {/* Heading */}
               <h1 className="text-5xl font-extrabold tracking-tight text-white   mb-8 leading-tight overflow-hidden">
                 <div className={`transform transition-all duration-1000 delay-150 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                   isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                 }`}>
                   {slide.title}
                 </div> 
                 <div className={`transform transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                   isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                 }`}>
                   <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-sm">
                     {slide.highlight}
                   </span>
                 </div>
               </h1>
               
               {/* Description */}
               <div className={`transform transition-all duration-1000 delay-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                 isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
               }`}>
                 <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl border-l-4 border-amber-500 pl-6 backdrop-blur-sm bg-slate-900/10 py-2 rounded-r-lg">
                   {slide.description}
                 </p>
               </div>
               
               {/* Buttons */}
               <div className={`flex flex-col sm:flex-row gap-5 transform transition-all duration-1000 delay-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                 isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
               }`}>
                 <a
                   href="#"
                   className="group flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(245,158,11,0.6)] hover:-translate-y-1"
                 >
                   Explore Courses
                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </a>
                 
                 <a
                   href="#"
                   className="group flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/50 transition-all hover:-translate-y-1"
                 >
                   <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                   </div>
                   Virtual Tour
                 </a>
               </div>
             </div>
           );
        })}
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-30 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
   
          
          {/* Arrow Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-amber-500 hover:border-amber-500 transition-all active:scale-95 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
               onClick={nextSlide}
               className="p-3 rounded-full border border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-amber-500 hover:border-amber-500 transition-all active:scale-95 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
         </div>
  );
};

export default Hero;