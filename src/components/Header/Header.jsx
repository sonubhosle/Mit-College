import React, { useState, useEffect } from 'react';
import { Menu, Search, GraduationCap, ChevronDown, ArrowRight, X, Phone } from 'lucide-react';
import { MENU_ITEMS } from '../../Types';
import SearchOverlay from './SearchOverlay';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Desktop Hover Handlers
  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Toggle for Click (Mobile & Desktop click support)
  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  // Handle link click in mobile menu
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (events) => {
      const target = event.target;
      if (!target.closest('.nav-item-container') && !target.closest('.mobile-menu-container')) {
        // Only close if not clicking inside mobile menu (handled separately)
        if (!isMobileMenuOpen) {
          setActiveDropdown(null);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Dynamic colors based on scroll state
  const textColor = scrolled ? 'text-slate-700' : 'text-slate-200';
  const hoverColor = 'hover:text-amber-500';
  const activeColor = scrolled ? 'text-amber-600 bg-amber-50' : 'text-amber-400 bg-white/10';
  const logoColor = scrolled ? 'text-slate-900' : 'text-white';
  const logoSubColor = 'text-amber-500';

  return (
    <>
      <header
        className={`transition-all duration-500 ease-in-out  py-4 ${scrolled
          ? 'bg-white  '
          : 'bg-transparent '
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">

          {/* Logo Section (Left Side) */}
          <div className="flex items-center group cursor-pointer mr-8 z-50">
            <div className="relative flex items-center justify-center rounded-xl mr-3 w-12 h-12 transition-all duration-300">
              <div className={`absolute inset-0 rounded-xl  transition duration-300 opacity-90 border border-white/10 ${scrolled ? 'bg-white' : 'bg-slate-950'}`}></div>
              <GraduationCap className={`relative z-10 w-7 h-7 ${scrolled ? 'text-amber-500' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <h1 className={`font-bold tracking-tight leading-none group-hover:text-amber-500 transition-all duration-300 text-2xl mb-1 ${logoColor}`}>EduPrime</h1>
              <span className={`text-[10px] tracking-[0.2em] font-extrabold uppercase mt-1 ${logoSubColor}`}>College</span>
            </div>
          </div>

          {/* Right Side: Desktop Navigation + Actions */}
          <div className="hidden lg:flex items-center justify-end flex-1">

            {/* Menu Items */}
            <nav className="flex items-center gap-1 mr-8">
              {MENU_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative nav-item-container"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.label);
                      }}
                      className={`cursor-pointer flex items-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300
    ${activeDropdown === item.label ? activeColor : `${textColor} ${hoverColor}`}
  `}
                    >
                      {item.label}

                      {/* apply icon classes directly */}
                      <ChevronDown
                        className={`ml-1.5 flex items-center justify-center rounded-full mt-0.5
      w-4 h-4 transform transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
      ${activeDropdown === item.label ? 'rotate-180 text-white bg-amber-400 ' : 'text-slate-400 bg-white/20'}
    `}
                      />
                    </button>

                  ) : (
                    <a href={item.href}
                      className={`block px-4 py-2 text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${textColor} ${hoverColor}`}>
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  )}

                  {/* Animated Dropdown */}
                  {item.children && (
                    <div
                      className={`absolute top-full right-0 pt-4 w-72 transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top-right z-50 ${activeDropdown === item.label
                        ? 'opacity-100 visible scale-100 translate-y-0'
                        : 'opacity-0 invisible scale-95 -translate-y-2'
                        } `}
                    >
                      <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
                        <div className="p-2 bg-white mt-1">
                          {item.children.map((child, idx) => (
                            <a
                              key={idx}
                              href={child.href}
                              className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-all duration-200 group"
                            >
                              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mr-3 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                {idx + 1}
                              </span>
                              <span className="flex-1">{child.label}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Separator */}
            <div className={`h-8 w-px mx-2 transition-colors duration-300 ${scrolled ? 'bg-slate-400' : 'bg-white/50'}`}></div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              {/* Contact Us Button */}
              <a
                href="#contact"
                className={`group cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 border hover:scale-105 active:scale-95 ${scrolled
                  ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500'
                  : 'bg-white/10 text-white border-white/10 hover:bg-amber-500 hover:text-white hover:border-amber-500'
                  }`}
              >
                <Phone className=" w-4 h-4" />
              </a>

              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 border hover:scale-105 active:scale-95 ${scrolled
                  ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500'
                  : 'bg-white/10 text-white border-white/10 hover:bg-amber-500 hover:text-white hover:border-amber-500'
                  }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle (Right Side) */}
          <div className="flex items-center lg:hidden space-x-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 rounded-full transition-all ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2.5 rounded-xl transition-all shadow-sm border ${scrolled
                ? 'text-slate-900 bg-white hover:bg-slate-50 border-slate-200'
                : 'text-white bg-white/10 hover:bg-white/20 border-white/10'
                }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu Slide-over */}
      <div className={`fixed inset-0 z-100 lg:hidden mobile-menu-container ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-900 shadow-2xl shadow-black transform transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) border-l border-slate-800 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="p-6 flex justify-between items-center bg-slate-900 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-linear-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <GraduationCap className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-white tracking-tight">EduPrime</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:bg-white/5 hover:text-white rounded-full transition-colors group"
              >
                {/* Close Icon */}
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto py-6 px-5 custom-scrollbar">
              <ul className="space-y-3 pb-8">
                {MENU_ITEMS.map((item, index) => (
                  <li
                    key={item.label}
                    className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-amber-500/30"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.children ? (
                      <div className="space-y-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(item.label);
                          }}
                          className={`flex items-center justify-between w-full px-5 py-4 font-semibold text-base transition-colors ${activeDropdown === item.label ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:bg-white/5'
                            }`}
                        >
                          {item.label}
                          <div className={`p-1 rounded-full transition-all duration-300 ${activeDropdown === item.label ? 'bg-amber-500/20 rotate-180' : 'bg-white/5'}`}>
                            <ChevronDown
                              className={`w-4 h-4 ${activeDropdown === item.label ? 'text-amber-400' : 'text-slate-400'}`}
                            />
                          </div>
                        </button>
                        <div
                          className={`grid transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-black/20 ${activeDropdown === item.label ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                          <div className="overflow-hidden min-h-0">
                            <div className="py-2 space-y-1 px-3 pb-3 border-t border-white/5">
                              {item.children.map((child, idx) => (
                                <a
                                  key={idx}
                                  href={child.href}
                                  onClick={handleMobileLinkClick}
                                  className="flex items-center px-4 py-3 text-sm font-medium text-slate-400 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-amber-500/20 group/sub"
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300 ${activeDropdown === item.label ? 'bg-amber-500' : 'bg-slate-600'}`}></div>
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="block px-5 py-4 text-slate-300 font-semibold text-base hover:text-amber-400 hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <a
                href="#contact"
                onClick={handleMobileLinkClick}
                className="flex items-center justify-center w-full px-6 py-4 text-base font-bold text-white bg-slate-800 border border-slate-700 rounded-xl shadow-lg shadow-black/20 hover:shadow-amber-500/20 active:scale-[0.98] transition-all overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Contact Us Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;