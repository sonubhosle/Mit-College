import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronRight, Minimize2 } from 'lucide-react';



// Knowledge Base Data
const KNOWLEDGE_BASE = {
  default: "I'm not sure about that. You can contact our administration at info@eduprime.edu or try asking about 'Courses', 'Admissions', or 'Principal'.",
  greeting: "Hello! Welcome to EduPrime College. How can I help you shape your future today?",
  
  // Contact & Admin
  contact: "You can reach us via:\n📧 Email: info@eduprime.edu\n📞 Phone: +1 (555) 123-4567\n📍 Address: 123 Education Lane, Knowledge City.",
  email: "Our general inquiry email is info@eduprime.edu. For the VC, contact vc@eduprime.edu.",
  principal: "Our Principal is Prof. James Sterling. He is a visionary leader focused on nurturing future leaders with integrity and critical thinking.",
  vc: "Our Vice Chancellor is Dr. Sarah Mitchell. She is dedicated to igniting a lifelong passion for learning.",
  leadership: "Our leadership team consists of Dr. Sarah Mitchell (VC) and Prof. James Sterling (Principal).",
  
  // Courses
  courses: "We offer industry-aligned programs including:\n1. BCA (Bachelor of Computer Applications)\n2. BSc Computer Science\n3. Web Development Bootcamp\n4. Java Development Certification",
  bca: "Our BCA program is a 3-year full-time course covering Software Engineering, Cloud Computing, and Data Science. It's a popular choice for aspiring tech professionals.",
  web: "Our Web Development course covers the MERN stack (MongoDB, Express, React, Node.js), Next.js, and DevOps. It's designed to make you a Full Stack Developer.",
  java: "The Java Development track masters Object-Oriented Programming and enterprise application building.",
  cs: "BSc Computer Science dives deep into algorithms, computational theory, and advanced mathematics.",
  syllabus: "The syllabus is updated annually to match industry standards. You can download the specific brochure for each course from the 'Courses' section or visit the Admissions office.",
  subjects: "Key subjects include Data Structures, Algorithms, Web Technologies, Database Management, Artificial Intelligence, and Cloud Computing.",

  // General Info
  about: "EduPrime College is a premier institution dedicated to excellence in education. We foster growth, innovation, and leadership through diverse programs and a global community.",
  facilities: "We boast world-class facilities including:\n- State-of-the-art Computer Labs\n- Modern Digital Library\n- Sports Complex\n- Robotics & AI Lab\n- Student Recreational Centers",
  teachers: "Our faculty comprises industry experts and PhD holders who are dedicated to practical, hands-on learning.",
  announcements: "Latest Updates:\n- Admissions for 2024-2025 are closing soon.\n- EduPrime ranked #1 Innovation College.\n- New Robotics Lab opening this Friday.",
  admission: "Admissions are currently open for the 2024-2025 academic year. You can apply online via the 'Admission' menu or visit our campus office before October 30.",
  fees: "Fee structures vary by course. Please contact the accounts department at accounts@eduprime.edu or visit the campus for a detailed breakdown.",
};

const SUGGESTIONS = [
  "What courses do you offer?",
  "Who is the Principal?",
  "Contact Information",
  "Tell me about admissions",
  "Latest Announcements"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: KNOWLEDGE_BASE.greeting,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const findResponse = (input)=> {
    const lowerInput = input.toLowerCase();
    
    // Pattern Matching
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) return KNOWLEDGE_BASE.greeting;
    if (lowerInput.includes('principal') || lowerInput.includes('head')) return KNOWLEDGE_BASE.principal;
    if (lowerInput.includes('vc') || lowerInput.includes('vice chancellor')) return KNOWLEDGE_BASE.vc;
    if (lowerInput.includes('course') || lowerInput.includes('program') || lowerInput.includes('degree')) return KNOWLEDGE_BASE.courses;
    if (lowerInput.includes('bca')) return KNOWLEDGE_BASE.bca;
    if (lowerInput.includes('web')) return KNOWLEDGE_BASE.web;
    if (lowerInput.includes('java')) return KNOWLEDGE_BASE.java;
    if (lowerInput.includes('bsc') || lowerInput.includes('cs') || lowerInput.includes('science')) return KNOWLEDGE_BASE.cs;
    if (lowerInput.includes('facility') || lowerInput.includes('lab') || lowerInput.includes('library')) return KNOWLEDGE_BASE.facilities;
    if (lowerInput.includes('teacher') || lowerInput.includes('faculty') || lowerInput.includes('professor')) return KNOWLEDGE_BASE.teachers;
    if (lowerInput.includes('announcement') || lowerInput.includes('news') || lowerInput.includes('update')) return KNOWLEDGE_BASE.announcements;
    if (lowerInput.includes('syllabus') || lowerInput.includes('curriculum') || lowerInput.includes('subject')) return KNOWLEDGE_BASE.syllabus;
    if (lowerInput.includes('admission') || lowerInput.includes('apply') || lowerInput.includes('join')) return KNOWLEDGE_BASE.admission;
    if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) return KNOWLEDGE_BASE.fees;
    if (lowerInput.includes('about') || lowerInput.includes('history') || lowerInput.includes('mission')) return KNOWLEDGE_BASE.about;
    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('address') || lowerInput.includes('location')) return KNOWLEDGE_BASE.contact;
    if (lowerInput.includes('email') || lowerInput.includes('mail')) return KNOWLEDGE_BASE.email;
    
    return KNOWLEDGE_BASE.default;
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add User Message
    const userMsg = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate Thinking Delay
    setTimeout(() => {
      const responseText = findResponse(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend(inputText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-100 font-sans">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-linear-to-r from-amber-500 to-amber-600 text-white'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-[90vw] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-50 translate-y-12 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 p-4 flex items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-amber-500/20 to-blue-500/20"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-amber-400 to-amber-600 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                 <Bot className="w-5 h-5 text-amber-500" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">EduPrime Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-slate-400">Online & Ready</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors relative z-10 p-1 hover:bg-white/10 rounded-lg"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="h-[400px] overflow-y-auto bg-slate-50 p-4 custom-scrollbar">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-linear-to-r from-amber-500 to-amber-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
               <div className="flex justify-start animate-fade-in">
                 <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions - Only show if not typing and last message is from bot */}
          {!isTyping && messages[messages.length - 1].sender === 'bot' && (
            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up">
              {SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(suggestion)}
                  className="text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full hover:bg-amber-100 hover:border-amber-300 transition-all flex items-center gap-1"
                >
                  {suggestion}
                  <ChevronRight className="w-3 h-3" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about courses, fees, etc..."
              className="w-full bg-slate-100 text-slate-700 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder-slate-400"
            />
            <button
              onClick={() => handleSend(inputText)}
              disabled={!inputText.trim() || isTyping}
              className="absolute right-2 p-2 rounded-lg bg-slate-900 text-white hover:bg-amber-500 disabled:opacity-50 disabled:hover:bg-slate-900 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> 
              AI Assistant powered by EduPrime Logic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;