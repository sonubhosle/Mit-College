import React, { useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';



const SearchOverlay = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="absolute top-8 right-8 z-50">
        <button 
          onClick={onClose}
          className="p-3 text-slate-400 hover:text-amber-500 hover:bg-white/5 rounded-full transition-all group"
        >
          <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full px-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] transition-all duration-1000 ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] transition-all duration-1000 delay-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>

        <div className={`w-full max-w-3xl transform transition-all duration-700 delay-100 relative z-10 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl text-white font-bold mb-8 text-center tracking-tight">What are you looking for?</h2>
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-amber-500 transition-colors duration-300" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search courses, professors, events..."
              className="w-full bg-white/5 border-2 border-white/10 text-white text-xl placeholder-slate-500 rounded-2xl py-6 pl-16 pr-8 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all duration-300 shadow-2xl"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-slate-400 text-sm">
            <span className="mr-2">Popular:</span>
            {['Computer Science', 'Admissions', 'Scholarships', 'Campus Life'].map((tag, i) => (
               <button 
                 key={i} 
                 className="px-4 py-1.5 rounded-full border border-slate-700 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300"
               >
                 {tag}
               </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;