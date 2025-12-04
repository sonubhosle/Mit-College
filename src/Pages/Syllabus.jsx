
import React, { useState, useRef, useEffect } from 'react';
import { FileText, Download, Search, Filter, Upload, Plus, Trash2, Calendar, HardDrive, CheckCircle, Shield, BookOpen, ChevronDown } from 'lucide-react';
import SectionHeading from '../components/SectionHeading/SectionHeading';

// Mock Data
const INITIAL_DATA = [
  { id: 1, title: 'BCA 1st Sem - Fundamentals of IT', subject: 'BCA', year: '1st Year', date: '2023-10-15', size: '2.4 MB', downloads: 1240 },
  { id: 2, title: 'BCA 3rd Sem - Database Management Systems', subject: 'BCA', year: '2nd Year', date: '2023-11-02', size: '1.8 MB', downloads: 856 },
  { id: 3, title: 'BSc CS 1st Sem - Programming in C', subject: 'BSc CS', year: '1st Year', date: '2023-09-20', size: '3.1 MB', downloads: 645 },
  { id: 4, title: 'BCA 5th Sem - Web Development', subject: 'BCA', year: '3rd Year', date: '2023-12-05', size: '4.2 MB', downloads: 2100 },
  { id: 5, title: 'BSc CS 4th Sem - Operating Systems', subject: 'BSc CS', year: '2nd Year', date: '2023-08-10', size: '5.5 MB', downloads: 930 },
  { id: 6, title: 'BBA 1st Sem - Principles of Management', subject: 'Management', year: '1st Year', date: '2023-11-28', size: '1.2 MB', downloads: 340 },
  { id: 7, title: 'Engineering Physics - Module 1', subject: 'Engineering', year: '1st Year', date: '2023-10-01', size: '3.8 MB', downloads: 500 },
  { id: 8, title: 'Modern Art History', subject: 'Arts', year: '1st Year', date: '2023-09-15', size: '1.5 MB', downloads: 200 },
];

const SUBJECTS = ['All', 'BCA', 'BSc CS'];
const YEARS = ['All Years', '1st Year', '2nd Year', '3rd Year'];

const Syllabus= () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [syllabi, setSyllabi] = useState(INITIAL_DATA);
  const [filterSubject, setFilterSubject] = useState('All');
  const [filterYear, setFilterYear] = useState('All Years');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState(null);

  // Custom Dropdown State
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const yearDropdownRef = useRef(null);

  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('BCA');
  const [newYear, setNewYear] = useState('1st Year');
  const [isUploading, setIsUploading] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
        setIsYearDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle Download Simulation
  const handleDownload = (id) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert("Syllabus downloaded successfully!");
      // Increment download count locally
      setSyllabi(prev => prev.map(item => item.id === id ? { ...item, downloads: item.downloads + 1 } : item));
    }, 1500);
  };

  // Handle Delete (Admin)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this syllabus?")) {
      setSyllabi(prev => prev.filter(item => item.id !== id));
    }
  };

  // Handle Upload (Admin)
  const handleUpload = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    setIsUploading(true);
    
    // Simulate API Upload
    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        title: newTitle,
        subject: newSubject,
        year: newYear,
        date: new Date().toISOString().split('T')[0],
        size: '1.5 MB', // Mock size
        downloads: 0
      };
      
      setSyllabi([newItem, ...syllabi]);
      setNewTitle('');
      setIsUploading(false);
      alert("New syllabus uploaded successfully!");
    }, 1500);
  };

  // Filter Logic
  const filteredList = syllabi.filter(item => {
    const matchesSubject = filterSubject === 'All' || item.subject === filterSubject;
    const matchesYear = filterYear === 'All Years' || item.year === filterYear;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesYear && matchesSearch;
  });

  return (
    <section id="syllabus" className="pt-34 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
       <div className="bg-slate-50 py-10">
         <div className="max-w-7xl mx-auto px-5 relative z-10">
         <SectionHeading 
            subtitle="Academic Resources"
            title="Download Syllabus"
            description="Access year-wise course structures and detailed syllabus curriculum."
           
            className="mb-16"
          />
        <div className="flex  flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-12">
         
          
          {/* Admin Toggle */}
          <button 
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm border ${
              isAdminMode 
                ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-amber-500 hover:text-amber-600'
            }`}
          >
            {isAdminMode ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Shield className="w-4 h-4" />}
            {isAdminMode ? 'Admin Mode Active' : 'Faculty Login'}
          </button>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
             {/* Subject Filter */}
             <div className="flex flex-wrap gap-2">
                {SUBJECTS.map(subject => (
                  <button
                    key={subject}
                    onClick={() => setFilterSubject(subject)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      filterSubject === subject 
                        ? 'bg-amber-100 text-amber-700 shadow-sm ring-1 ring-amber-500/20' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
             </div>

             {/* Year Filter Separator (Desktop) */}
             <div className="hidden sm:block w-px bg-slate-200 mx-2"></div>

             {/* Custom Animated Year Filter Dropdown */}
             <div className="flex flex-wrap gap-2 items-center">
                
                <div className="relative" ref={yearDropdownRef}>
                  <button
                    onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                    className={`flex items-center justify-between gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 min-w-[140px] border ${
                      isYearDropdownOpen 
                        ? 'bg-white border-amber-500 text-amber-600 ring-2 ring-amber-500/20' 
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-600'
                    }`}
                  >
                    <span>{filterYear}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isYearDropdownOpen ? 'rotate-180 text-amber-500' : 'text-slate-400'}`} />
                  </button>

                  <div className={`absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden z-30 transition-all duration-300 origin-top transform ${isYearDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="py-1">
                      {YEARS.map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setFilterYear(year);
                            setIsYearDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group ${
                            filterYear === year 
                              ? 'bg-amber-50 text-amber-700' 
                              : 'text-slate-600 hover:bg-slate-50 hover:text-amber-600'
                          }`}
                        >
                          {year}
                          {filterYear === year && <CheckCircle className="w-3.5 h-3.5 text-amber-500" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72 group">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
             <input 
               type="text" 
               placeholder="Search topics..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
             />
          </div>
        </div>

        {/* Admin Upload Area (Collapsible) */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isAdminMode ? 'max-h-[600px] opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
           <div className="bg-slate-900 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
              {/* Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                 <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                   <Upload className="w-5 h-5 text-amber-500" /> Upload New Syllabus
                 </h3>
                 <form onSubmit={handleUpload} className="grid md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-4 space-y-2">
                       <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Document Title</label>
                       <input 
                         type="text" 
                         value={newTitle}
                         onChange={(e) => setNewTitle(e.target.value)}
                         placeholder="e.g., Intro to Robotics Module 1"
                         className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                       />
                    </div>
                    <div className="md:col-span-3 space-y-2">
                       <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Stream</label>
                       <select 
                         value={newSubject}
                         onChange={(e) => setNewSubject(e.target.value)}
                         className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none"
                       >
                         {SUBJECTS.filter(s => s !== 'All').map(s => <option key={s} value={s}>{s}</option>)}
                       </select>
                    </div>
                    <div className="md:col-span-3 space-y-2">
                       <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Year</label>
                       <select 
                         value={newYear}
                         onChange={(e) => setNewYear(e.target.value)}
                         className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none"
                       >
                         {YEARS.filter(y => y !== 'All Years').map(y => <option key={y} value={y}>{y}</option>)}
                       </select>
                    </div>
                    <div className="md:col-span-2">
                       <button 
                         type="submit" 
                         disabled={!newTitle || isUploading}
                         className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                       >
                         {isUploading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Upload'}
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        </div>

        {/* Syllabus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Gradient Border */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-amber-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                     <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-slate-200">
                       {item.subject}
                     </span>
                     <span className="text-amber-600 text-[10px] font-bold uppercase tracking-wide">
                       {item.year}
                     </span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 min-h-14 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
                    <HardDrive className="w-3.5 h-3.5" /> {item.size}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                   <div className="text-xs text-slate-400">
                      <span className="font-semibold text-slate-600">{item.downloads}</span> Downloads
                   </div>
                   
                   <div className="flex gap-2">
                     {isAdminMode && (
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete Syllabus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                     )}
                     <button 
                       onClick={() => handleDownload(item.id)}
                       disabled={downloadingId === item.id}
                       className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                         downloadingId === item.id 
                           ? 'bg-amber-100 text-amber-700 w-32 justify-center' 
                           : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-amber-500 hover:shadow-lg hover:text-white hover:shadow-amber-500/20'
                       }`}
                     >
                       {downloadingId === item.id ? (
                         <>
                           <div className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                         </>
                       ) : (
                         <>
                           Download <Download className="w-4 h-4" />
                         </>
                       )}
                     </button>
                   </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-100 border-dashed flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                 <BookOpen className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-lg font-bold text-slate-700 mb-1">No syllabus found</p>
              <p className="text-sm text-slate-500">Try adjusting your year or stream filters.</p>
            </div>
          )}
        </div>

      </div>
       </div>
     
    </section>
  );
};

export default Syllabus;
