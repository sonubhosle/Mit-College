import React, { useState, useEffect, useRef } from 'react';
import { Send, GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ShieldCheck, HelpCircle, FileText, MapPinned } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);



  return (
    <footer ref={footerRef} className="bg-white border-t border-slate-200  relative overflow-hidden pt-20">
      {/* Background Pattern */}
       <div
    className="absolute inset-0 opacity-40  pointer-events-none"
    style={{
      backgroundImage:
        'radial-gradient(circle at 2px 2px, #e2e8f0 2px, transparent 0)', // amber-400
      backgroundSize: '40px 40px'
    }}
  ></div>

      <div className="max-w-7xl mx-auto px-5  relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-16 border-b border-slate-200">
          
          {/* Column 1: Brand */}
          <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/10">
                 <GraduationCap className="text-slate-900 w-7 h-7" />
              </div>
              <div className="">
                <span className="font-bold text-2xl text-slate-800 tracking-tight">EduPrime</span>
              <p className='text-slate-600'>Sciens 2007</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Empowering the next generation of leaders through excellence in education, innovation, and integrity.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl text-slate-500 bg-slate-100 border border-slate-200 flex items-center justify-center  hover:bg-amber-500 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h4 className="text-slate-800 font-bold text-lg mb-6  gap-2">
              Explore 
              <p className="h-1 w-8 bg-amber-500 rounded-full mt-2"></p>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Courses', 'Admissions', 'Content', 'News & Events'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
             <h4 className="text-slate-800 font-bold text-lg mb-6  gap-2">
              Support 
              <p className="h-1 w-8 bg-amber-500 rounded-full mt-2"></p>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-amber-4 transition-colors group">
                  <HelpCircle className="w-4 h-4 text-slate-600 group-hover:text-amber-500" /> Help Center
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-amber-4 transition-colors group">
                  <ShieldCheck className="w-4 h-4 text-slate-600 group-hover:text-amber-500" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-amber-4 transition-colors group">
                  <FileText className="w-4 h-4 text-slate-600 group-hover:text-amber-500" /> Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-amber-400 transition-colors group">
                  <Phone className="w-4 h-4 text-slate-600 group-hover:text-amber-500" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
           <h4 className="text-slate-800 font-bold text-lg mb-6  gap-2">
              Contact
              <p className="h-1 w-8 bg-amber-500 rounded-full mt-2"></p>
            </h4>
            <ul className="space-y-5">
               
               <li className="flex items-center gap-4 text-slate-600">
                   <Phone className="w-5 h-5" />
                                   <a href="tel:+15551234567" className="text-sm text-slate-600 hover:text-amber-500 transition-colors">+1 (555) 123-4567</a>
               </li>
               <li className="flex items-center gap-4 text-slate-600">
                   <Mail className="w-5 h-5" />
                   <a href="mailto:info@eduprime.edu" className="text-sm text-slate-600 hover:text-amber-500 transition-colors">info@eduprime.edu</a>
               </li>
              <li className="flex items-center gap-4 text-slate-600">
                <MapPinned className="w-9 h-9" />
                   123 Education Lane, Knowledge City, State 45001
               </li> 
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
           <p className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
             &copy; {new Date().getFullYear()} EduPrime College. All rights reserved.
           </p>
           <div className={`flex gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <a href="#" className="hover:text-amber-500 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Cookies</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Accessibility</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
