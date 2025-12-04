
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, Mail, GraduationCap, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading/SectionHeading';

const TEACHING_STAFF = [
  {
    id: 1,
    name: "Dr. Robert Fox",
    role: "HOD, Computer Science",
    exp: "15+ Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    specialization: "Artificial Intelligence"
  },
  {
    id: 2,
    name: "Prof. Eleanor Pena",
    role: "Senior Lecturer, Physics",
    exp: "12+ Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    specialization: "Quantum Mechanics"
  },
  {
    id: 3,
    name: "Mr. Wade Warren",
    role: "Assistant Professor, BBA",
    exp: "8+ Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    specialization: "Business Strategy"
  },
  {
    id: 4,
    name: "Dr. Cameron Williamson",
    role: "Professor, Mathematics",
    exp: "20+ Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    specialization: "Calculus & Algebra"
  },
  {
    id: 5,
    name: "Ms. Esther Howard",
    role: "Lab Instructor, Chemistry",
    exp: "5+ Years",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
    specialization: "Organic Chemistry"
  }
];

const NON_TEACHING_STAFF = [
  {
    id: 6,
    name: "Dr. Arlene McCoy",
    role: "Dean of Student Affairs",
    exp: "18+ Years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    specialization: "Student Welfare"
  },
  {
    id: 7,
    name: "Mrs. Jane Cooper",
    role: "Head Librarian",
    exp: "10+ Years",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&q=80&w=400",
    specialization: "Information Science"
  },
  {
    id: 8,
    name: "Mr. Guy Hawkins",
    role: "Sports Director",
    exp: "14+ Years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    specialization: "Physical Education"
  },
  {
    id: 9,
    name: "Mr. Cody Fisher",
    role: "IT Administrator",
    exp: "7+ Years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    specialization: "Network Security"
  }
];

const Faculty = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('teaching');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleTabChange = (tab) => {
    if (tab === activeTab || isTransitioning) return;
    
    // Start exit animation
    setIsTransitioning(true);

    // Wait for fade out, then switch data and fade in
    setTimeout(() => {
      setActiveTab(tab);
      // Small delay to ensure DOM update before starting entrance animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Match this with the duration of the exit transition
  };

  const activeData = activeTab === 'teaching' ? TEACHING_STAFF : NON_TEACHING_STAFF;
  
  // Elements are visible if scrolled into view AND not currently switching tabs
  const shouldShow = isVisible && !isTransitioning;

  return (
    <section className=" pt-34 bg-slate-900  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>
      <div className="bg-slate-50 py-10">
  <div className="max-w-7xl mx-auto  px-5  relative z-10">
        <SectionHeading
          subtitle="Our Team"
          title="Meet The Experts"
          description="Dedicated professionals committed to academic excellence and student support."
          className="mb-8"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl px-3 border border-slate-200">
            <button
              onClick={() => handleTabChange('teaching')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'teaching'
                  ? 'bg-white text-amber-600 shadow-md border border-amber-400/20 shadow-amber-500/10 '
                  : 'text-slate-500 hover:text-slate-700 border border-transparent'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Teaching Staff
            </button>
            <button
              onClick={() => handleTabChange('non-teaching')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'non-teaching'
                 ? 'bg-white text-amber-600 shadow-md border border-amber-400/20 shadow-amber-500/10 '
                  : 'text-slate-500 hover:text-slate-700 border border-transparent'
    
              }`}
            >
              <Users className="w-4 h-4" />
              Non-Teaching Staff
            </button>
          </div>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {activeData.map((staff, index) => (
            <div 
              key={staff.id}
              className={`group flex p-1 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-200 transition-all duration-500 ease-out transform h-auto ${
                shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: shouldShow ? `${index * 100}ms` : '0ms' }}
            >
              {/* Left Side: Image (Fixed 150px Width) */}
              <div className="w-[100px] h-[100px] relative rounded-xl shrink-0 overflow-hidden">
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Right Side: Info (Table Format) */}
              <div className="flex-1 px-4 flex flex-col  relative overflow-hidden">
                 {/* Decorative Corner */}
                 <div className="absolute top-0 right-0 w-12 h-12 bg-linear-to-bl from-slate-300 to-transparent rounded-bl-3xl -mr-2 -mt-2"></div>

                 {/* Header Row */}
                 <div className="mb-2 border-b border-slate-100 pb-2 mr-4">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight truncate">
                      {staff.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-0.5 truncate">
                      {staff.role}
                    </p>
                 </div>

                 {/* Details Table */}
                 <div className="space-y-1">
                    <div className="flex items-center text-sm">
                       <div className="w-5 flex justify-center mr-2 text-slate-400">
                         <Briefcase className="w-4 h-4" />
                       </div>
                       <span className="text-slate-700 font-semibold text-sm mb-0.5">{staff.exp}</span>
                    </div>
                    
                 
                 </div>

                 {/* Action Icon */}
                 <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                    <Mail className="w-4 h-4" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    
    </section>
  );
};

export default Faculty;
