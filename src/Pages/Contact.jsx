import React, { useRef, useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, MapPin, Loader2, Github, Twitter, Linkedin, Globe, Share2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading/SectionHeading';

const CONTACT_INFO = {
  email: "info@eduprime.edu",
  phone: "+1 (555) 123-4567",
  location: "123 Education Lane, Knowledge City, State 45001"
};

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    const { name, email, number, message } = data;

    if (!name || !email || !number || !message) {
      alert("All fields are required!");
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      alert("Message sent successfully!");
      if (formRef.current) formRef.current.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Modern Background Gradients (Amber/Slate Theme) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-amber-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply"></div>
         <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-slate-100/40 rounded-full blur-[80px] mix-blend-multiply opacity-70"></div>
      </div>
         <SectionHeading  subtitle="Get In Touch"
          title="Contact Us"   description="Interested in joining EduPrime or have questions about our curriculum? Reach out to us today."className="mb-16" />


      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Info & Cards (5 cols) - Sticky */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky  h-fit">
             <div className="inline-flex w-50 items-center gap-2 px-3 py-2 rounded-xl bg-white border border-amber-100 text-amber-600 text-base font-medium cursor-default shadow-sm">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600"></span>
                  </span>
                  <span className=''>Admissions Open</span>
                </div>

             {/* Contact Detail Cards Grid */}
             <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
           
     
                {/* Email Card */}
                <a href={`mailto:${CONTACT_INFO.email}`} className="group px-5 py-5 bg-white rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                   <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                      <Mail size={22} />
                   </div>
                   <div className="overflow-hidden">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                      <h4 className="text-slate-900 font-semibold text-base group-hover:text-amber-600 transition-colors break-all sm:break-normal truncate">
                        {CONTACT_INFO.email}
                      </h4>
                   </div>
                </a>

                {/* Phone Card */}
                <a href={`tel:${CONTACT_INFO.phone}`} className="group px-5 py-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                      <Phone size={22} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                      <h4 className="text-slate-900 font-semibold text-base group-hover:text-blue-600 transition-colors">
                        {CONTACT_INFO.phone}
                      </h4>
                   </div>
                </a>

                {/* Location Card */}
                <div className="group px-5 py-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                   <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                      <MapPin size={22} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                      <h4 className="text-slate-900 font-semibold text-sm leading-tight">
                        {CONTACT_INFO.location}
                      </h4>
                   </div>
                </div>
                   {/* Social Media Card */}
                <div className="group px-5 py-5 bg-white rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                     <h1 className='font-semibold text-slate-600'>Follow Us</h1>
                   <div className="flex  items-center gap-5">
                      {[
                        { icon: <Twitter size={18} />, href: "#" },
                        { icon: <Linkedin size={18} />, href: "#" },
                        { icon: <Github size={18} />, href: "#" },
                        { icon: <Globe size={18} />, href: "#" }
                      ].map((social, i) => (
                         <a 
                           key={i} 
                           href={social.href} 
                           className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300 shadow-sm"
                         >
                           {social.icon}
                         </a>
                      ))}
                   </div>
                </div>
                          {/* Embed Map - Below Form */}
            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 relative group bg-white">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531615!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1629873429812!5m2!1sen!2sau" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                 title="College Location"
               ></iframe>
               <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-[2.5rem] z-10"></div>
               <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                  <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
                     <MapPin size={14} className="text-amber-500" /> View Larger Map
                  </span>
               </div>
            </div>
    
             </div>
          </div>

          {/* Right Column: Premium Glass Form (7 cols) & Map */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Form */}
            <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-white/60 relative overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
                <p className="text-slate-500">I usually respond within 24 hours. No spam, promised.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div className="space-y-2">
                   <label 
                     htmlFor="name" 
                     className={`text-sm font-bold ml-1 transition-colors duration-300 ${focusedField === 'name' ? 'text-amber-600' : 'text-slate-700'}`}
                   >
                     Full Name
                   </label>
                   <div className="relative group mt-2">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'text-amber-600 scale-110' : 'text-slate-400'}`}>
                        <User size={20} />
                      </div>
                      <input 
                        type="text" 
                        id="name"
                        name='name'
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe" 
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 focus:shadow-xl transition-all duration-300 font-medium"
                      />
                   </div>
                </div>

                {/* Email & Mobile Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label 
                        htmlFor="email" 
                        className={`text-sm font-bold ml-1 transition-colors duration-300 ${focusedField === 'email' ? 'text-amber-600' : 'text-slate-700'}`}
                      >
                        Email Address
                      </label>
                      <div className="relative mt-2 group">
                          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-amber-600 scale-110' : 'text-slate-400'}`}>
                            <Mail size={20} />
                          </div>
                          <input 
                            type="email" 
                            id="email" 
                            name='email'
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="john@example.com" 
                            required
                            className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 focus:shadow-xl transition-all duration-300 font-medium"
                          />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="number" 
                        className={`text-sm font-bold mb-1 ml-1 transition-colors duration-300 ${focusedField === 'number' ? 'text-amber-600' : 'text-slate-700'}`}
                      >
                        Phone 
                      </label>
                      <div className="relative mt-2 group">
                          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'number' ? 'text-amber-600 scale-110' : 'text-slate-400'}`}>
                            <Phone size={20} />
                          </div>
                          <input 
                            type="tel" 
                            id="number" 
                            name='number'
                            onFocus={() => setFocusedField('number')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="+1 (555) 000-0000" 
                            className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 focus:shadow-xl transition-all duration-300 font-medium"
                          />
                      </div>
                    </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                   <label 
                     htmlFor="message" 
                     className={`text-sm font-bold ml-1 transition-colors duration-300 ${focusedField === 'message' ? 'text-amber-600' : 'text-slate-700'}`}
                   >
                     Your Message
                   </label>
                   <div className="relative mt-2 group">
                      <div className={`absolute left-4 top-5 transition-all duration-300 ${focusedField === 'message' ? 'text-amber-600 scale-110' : 'text-slate-400'}`}>
                        <MessageSquare size={20} />
                      </div>
                      <textarea 
                        id="message" 
                        name='message'
                        rows={5} 
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your inquiry details..." 
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 focus:shadow-xl transition-all duration-300 font-medium resize-none"
                      ></textarea>
                   </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-amber-500 to-amber-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  
                  {isSubmitting ? (
                    <>
                      <Loader2 size={22} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

             </form>
            </div>

 
      
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;