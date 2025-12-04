import React, { useState } from 'react';
import { Send, Mail, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubscribe = (et) => {
        e.preventDefault();
        if (!email) return;

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                setEmail('');
            }, 3000);
        }, 1500);
    };

    return (
        <section className="py-12  relative overflow-hidden">
            {/* Background Decorations - Adjusted for Light Theme */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="relative  p-1 overflow-hidden group">

                    {/* Animated Border Gradient - refined for light theme */}

                    {/* Main Card Content - White Background */}
                   


                        {/* Pattern Grid - Darker for visibility */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">

                            {/* Text Content */}
                            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-sm font-bold uppercase tracking-wider shadow-sm animate-fade-in">
                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                    <span>Join 10,000+ Scholars</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                    Unlock Your <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-600 to-amber-700">Potential Today</span>
                                </h2>

                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                    Subscribe to our exclusive newsletter for weekly insights on academic trends, scholarship opportunities, and campus events.
                                </p>

                                <div className="flex items-center justify-center lg:justify-start gap-6 pt-2">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-md">
                                                <img src={`https://i.pravatar.cc/100?img=${20 + i}`} alt="Subscriber" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-500 text-white font-bold text-xs flex items-center justify-center relative shadow-md">
                                            +2k
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-slate-600">
                                        <span className="text-amber-600 font-bold">4.9/5</span> rating from students
                                    </div>
                                </div>
                            </div>

                            {/* Form Section - Clean Light Design */}
                            <div className="lg:w-5/12 w-full max-w-md">
                                <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-2 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                                    <div className="bg-slate-50/80 rounded-[1.2rem] p-6 border border-slate-100">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm border border-slate-100">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-slate-900 font-bold">Newsletter</h4>
                                                <p className="text-xs text-slate-500">No spam, unsubscribe anytime</p>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubscribe} className="space-y-4">
                                            <div className="relative group">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email address"
                                                    disabled={status === 'success'}
                                                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-4 pl-12 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 font-medium shadow-sm"
                                                />
                                                <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={status !== 'idle'}
                                                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${status === 'success'
                                                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/30'
                                                        : 'bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1'
                                                    }`}
                                            >
                                                {status === 'idle' && (
                                                    <>
                                                        Subscribe Now <ArrowRight className="w-5 h-5" />
                                                    </>
                                                )}
                                                {status === 'submitting' && (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        Processing...
                                                    </>
                                                )}
                                                {status === 'success' && (
                                                    <>
                                                        Subscribed! <ShieldCheck className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Newsletter;