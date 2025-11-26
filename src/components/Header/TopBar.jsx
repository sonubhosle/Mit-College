import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-all duration-500 relative z-51 ${
      scrolled 
        ? 'bg-white border-b border-gray-50  ' 
        : 'bg-transparent  border-b border-transparent '
    } py-2.5`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        {/* Left Side: Contact Info */}
        <div className={`flex items-center space-x-4 sm:space-x-6 transition-colors duration-300 ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
          <a href="mailto:info@eduprime.edu" className="flex items-center hover:text-amber-500 transition-colors group">
            <div className={`p-1.5 rounded-full transition-colors ${scrolled ? 'bg-amber-100 text-amber-600' : 'bg-white/10 text-amber-500 group-hover:bg-amber-500/20'}`}>
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="hidden sm:inline ml-2 font-medium tracking-wide">info@eduprime.edu</span>
          </a>
          <div className={`h-4 w-px hidden sm:block ${scrolled ? 'bg-slate-300' : 'bg-white/20'}`}></div>
          <a href="tel:+1234567890" className="flex items-center hover:text-amber-500 transition-colors group">
             <div className={`p-1.5 rounded-full transition-colors ${scrolled ? 'bg-amber-100 text-amber-600' : 'bg-white/10 text-amber-500 group-hover:bg-amber-500/20'}`}>
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="hidden sm:inline ml-2 font-medium tracking-wide">+1 (555) 123-4567</span>
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-3">
          <a href="#" className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
            scrolled 
              ? 'bg-slate-100 text-slate-500 hover:bg-amber-500 hover:text-white' 
              : 'bg-white/10 text-slate-200 hover:bg-amber-500 hover:text-white'
          }`}>
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
            scrolled 
              ? 'bg-slate-100 text-slate-500 hover:bg-amber-400 hover:text-white' 
              : 'bg-white/10 text-slate-200 hover:bg-amber-400 hover:text-white'
          }`}>
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
            scrolled 
              ? 'bg-slate-100 text-slate-500 hover:bg-amber-600 hover:text-white' 
              : 'bg-white/10 text-slate-200 hover:bg-amber-600 hover:text-white'
          }`}>
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
            scrolled 
              ? 'bg-slate-100 text-slate-500 hover:bg-amber-700 hover:text-white' 
              : 'bg-white/10 text-slate-200 hover:bg-amber-700 hover:text-white'
          }`}>
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;