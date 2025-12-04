import React from 'react';
import { School, Target, BookOpen, Handshake, Compass } from 'lucide-react';
import SectionHeading from '../components/SectionHeading/SectionHeading';

const About = () => {
    return (
        <section id="story" className="py-20">
            <div className=" px-5 ">

                <SectionHeading
                    subtitle="Our Story"
                    title="About Us"
                    description="The Core Philosophy of Yuvak Pratishthan"
                    className="mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 max-w-7xl mx-auto">
                    {/* Main Story Box */}
                    <div className="md:col-span-2 md:row-span-2 bg-white p-6 border border-slate-200 rounded-xl  flex flex-col  transition-all duration-300 hover:shadow-xl hover:shadow-slate-400/10 hover:-translate-y-1">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 text-slate-600  mb-4">
                            <Handshake className='w-8 h-8' />
                        </div>

                        <h3 className="text-2xl font-semibold text-slate-600 mb-4 flex items-center gap-3"> Our Story</h3>
                        <p className="text-slate-600 leading-relaxed mb-3">
                            Yuvak Pratishthan was founded on the principle that education is the most powerful tool for social transformation. Our journey began with a simple yet profound goal: to create centers of academic excellence that are accessible to all.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We believe in nurturing talent, fostering innovation, and instilling strong ethical values. We are committed to building a knowledgeable and empowered society, one student at a time.
                        </p>
                    </div>

                    {/* Vision Box */}
                    <div className="md:col-span-1 md:row-span-2 bg-white p-6  border border-slate-200 rounded-xl  flex flex-col justify-center transition-all duration-300 hover:shadow-xl hover:shadow-slate-400/10 hover:-translate-y-1">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 text-slate-600 mx-auto mb-4">
                            <School className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-600 mb-2 text-center">Our Vision</h3>
                        <p className="text-slate-500 text-center">To be a catalyst for educational reform, creating a nationwide network of institutions that are benchmarks in quality, innovation, and social responsibility.</p>
                    </div>

                    {/* Mission Box */}
                    <div className="md:col-span-1 md:row-span-1 bg-white p-6 rounded-xl border border-slate-200  flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-slate-400/10 hover:-translate-y-1">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 text-slate-600  mb-4">
                            <Target className="w-10 h-10 " />
                        </div>
                        <h3 className="text-xl font-bold text-slate-600 mb-2">Our Mission</h3>
                        <p className="text-slate-500 text-sm">To establish and manage exemplary educational institutions that provide holistic development.</p>
                    </div>

                    {/* Values Box */}
                    <div className="md:col-span-1 md:row-span-1 bg-white p-6 rounded-xl border border-slate-200  flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-slate-400/10 hover:-translate-y-1">
                         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 text-slate-600  mb-4">
                            <BookOpen className="w-10 h-10 " />
                        </div>
                        <h3 className="text-xl font-bold text-slate-600 mb-2">Our Values</h3>
                        <p className="text-slate-500 text-sm">Excellence, Integrity, Inclusivity, and student-centric learning.</p>
                    </div>

                    {/* Approach Box */}
                    <div className="md:col-span-1 md:row-span-1 bg-white p-6 rounded-xl border border-slate-200  flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-slate-400/10 hover:-translate-y-1">
                         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 text-slate-600  mb-4">
                            <Compass className="w-10 h-10 " />
                        </div>
                        <h3 className="text-xl font-bold text-slate-600 mb-2">Our Approach</h3>
                        <p className="text-slate-500 text-sm">Hands-on learning, mentorship, and a focus on real-world application.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
