
import React, { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, FileText, UserCheck, CreditCard, CheckCircle2, AlertTriangle, ArrowRight, Download, GraduationCap, FileCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading/SectionHeading';

const STEPS = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: "Online Registration",
    description: "Fill out the pre-admission form available on the EduPrime portal. Ensure all personal details match your official documents."
  },
  {
    id: 2,
    icon: FileCheck,
    title: "Document Verification",
    description: "Visit the college administration office with original documents. Our counselors will verify your eligibility and academic records."
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Merit List Display",
    description: "Admissions are granted based on merit (12th Std percentage + MAH CET score for BCA). Check the notice board/website for the list."
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Final Confirmation",
    description: "Secure your seat by paying the requisite admission fees online or via DD within the stipulated deadline."
  }
];

const DOCUMENTS = [
  "Original 10th (SSC) Marksheet",
  "Original 12th (HSC) Marksheet",
  "School Leaving Certificate (LC)",
  "MAH CET Score Card (Mandatory for BCA)",
  "Caste Certificate (If applicable)",
  "Domicile / Nationality Certificate",
  "3 Recent Passport Size Photos",
  "Aadhar Card (Photocopy)"
];

const Admission= () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="admission" className="pt-33 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6  relative z-10">
        <SectionHeading
          subtitle="Join The Community"
          title="Admission Process"
          description="Your journey to excellence starts here. Follow this simple guide to secure your spot in our prestigious programs."
          className="mb-12"
        />

        <div ref={sectionRef} className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Side: Steps & Alert (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
             
             {/* BCA Eligibility Alert Card */}
             <div className={`bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-amber-100 p-2.5 rounded-full shrink-0 animate-pulse">
                   <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                   <h4 className="text-amber-800 font-bold text-lg mb-1">Important for BCA Applicants</h4>
                   <p className="text-amber-700/80 text-sm leading-relaxed">
                     As per the latest university guidelines, a valid score in <strong>MAH BCA CET</strong> is mandatory for admission to the Bachelor of Computer Applications program. Please ensure you have your score card ready during verification.
                   </p>
                </div>
             </div>

             {/* Timeline Steps */}
             <div className="relative  ">
                <div className="space-y-8">
                  {STEPS.map((step, index) => (
                    <div 
                      key={step.id} 
                      className={`relative flex items-start gap-6 transform transition-all duration-700`}
                      style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)' }}
                    >
                       {/* Vertical Connector Line (Segment) */}
                       {index !== STEPS.length - 1 && (
                         <div className={`absolute left-5 sm:left-6 top-6 sm:top-6 -bottom-8 w-1 bg-slate-200 -translate-x-1/2 -z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
                       )}

                       {/* Step Number Bubble */}
                       <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center shrink-0 group hover:border-amber-100 transition-colors">
                          <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                            {step.id}
                          </div>
                       </div>

                       {/* Content */}
                       <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 flex-1 group">
                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            {step.description}
                          </p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Side: Documents & Download (5 Cols) */}
          <div className={`lg:col-span-5 flex flex-col gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
             
             {/* Documents Card */}
             <div className="bg-white rounded-4xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-500" /> Required Documents
                </h3>

                <ul className="space-y-4">
                  {DOCUMENTS.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                       <CheckCircle2 className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors shrink-0 mt-0.5" />
                       <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors border-b border-transparent group-hover:border-slate-200 border-dashed pb-0.5">
                         {doc}
                       </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100">
                   <p className="text-xs text-slate-400 mb-4 font-medium">
                     * Note: Please carry 2 sets of photocopies along with original documents.
                   </p>
                   <button className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 group">
                      <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> Download Brochure
                   </button>
                </div>
             </div>

             {/* Help Box */}
             <div className="bg-slate-900 rounded-4xl p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-950"></div>
                {/* Animated Circles */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                   <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border border-white rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute top-[-40%] left-[-40%] w-[180%] h-[180%] border border-white/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>

                <div className="relative z-10">
                   <div className="w-12 h-12 bg-amber-500 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-xl mb-2">Need Help?</h3>
                   <p className="text-slate-400 text-sm mb-6">
                     Our admission counselors are available to guide you through the process.
                   </p>
                   <a href="#contact" className="inline-flex items-center text-amber-400 font-bold hover:text-white transition-colors">
                     Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
                   </a>
                </div>
             </div>

          </div>

        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Admission;
