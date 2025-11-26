import React, { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading/SectionHeading';

const leaders = [
  {
    role: "Vice Chancellor",
    name: "Dr. Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote: "Education is not just about acquiring knowledge, but about igniting a lifelong passion for learning, innovation, and societal impact.",
    email: "vc@eduprime.edu",
    linkedin: "#"
  },
  {
    role: "Principal",
    name: "Prof. James Sterling",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    quote: "Our mission is to nurture future leaders who act with integrity, think critically, and serve the global community with compassion and purpose.",
    email: "principal@eduprime.edu",
    linkedin: "#"
  }
];

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-linear-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-slate-50/50 to-transparent"></div>
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] mix-blend-multiply"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Our Administration"
          title="Visionary Leadership"
          description="Guiding our institution towards excellence with experience, wisdom, and an unwavering commitment to student success."
          className="mb-16"
        />

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-4xl shadow-xl shadow-slate-200/40 overflow-hidden border border-slate-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col md:flex-row h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Section */}
              <div className="md:w-[45%] relative overflow-hidden h-80 md:h-auto shrink-0">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent md:bg-linear-to-r md:from-transparent md:via-slate-900/10 md:to-slate-900/40 z-10"></div>
                
                {/* Image Scale Effect */}
                <div className="w-full h-full overflow-hidden">
                   <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-amber-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 rounded-br-4xl"></div>

                {/* Mobile overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 md:hidden">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-2 shadow-lg shadow-amber-900/20">
                    {leader.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">{leader.name}</h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-[55%] p-8 flex flex-col relative">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>

                {/* Desktop Heading */}
                <div className="hidden md:block mb-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center px-4 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 text-xs font-bold uppercase tracking-wider rounded-full mb-3 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors duration-300 shadow-sm">
                      {leader.role}
                    </span>
                    <Quote className="text-amber-500/20 w-10 h-10 transform rotate-180 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-500/30" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 mt-2">
                    {leader.name}
                  </h3>
                </div>

                <div className="relative z-10 flex-1">
                  <div className="relative">
                    {/* Left border accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-200/50 rounded-full group-hover:bg-amber-500 transition-colors duration-500"></div>
                    <p className="text-slate-600 italic leading-relaxed text-base font-medium pl-5">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
                  <div className="flex items-center gap-4">
                    <a 
                      href={`mailto:${leader.email}`} 
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 text-slate-600 font-bold text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 group/btn"
                    >
                      <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Email</span>
                    </a>
                    <a 
                      href={leader.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 text-slate-600 font-bold text-sm hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/20 group/btn"
                    >
                      <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-full text-slate-600 bg-white hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
                Meet The Full Board 
                <div className="w-6 h-6 rounded-full bg-slate-100 ml-3 flex items-center justify-center group-hover:bg-amber-200 group-hover:text-amber-700 transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Leadership;