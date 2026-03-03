'use client';

import React, { useState } from 'react';
import { Search, MapPin, Clock, ExternalLink, X, Upload, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const jobsData = [
    {
        id: 1,
        title: 'Senior Digital Marketer',
        location: 'Trivandrum, India / Remote',
        type: 'Full-time',
        category: 'Marketing',
        experience: '2-4 years',
        salary: '5-6 LPA',
        equity: 'No equity',
        shortDesc: 'Drive our digital marketing strategies, manage campaigns, and accelerate client growth through data-driven approaches.',
        fullDesc: `We are looking for a Senior Digital Marketer to lead our marketing initiatives and client campaigns. You will be responsible for planning, executing, and optimizing digital marketing strategies that drive growth and maximize ROI.

Key Responsibilities:
• Develop and execute comprehensive digital marketing strategies.
• Manage performance marketing campaigns (Meta, Google Ads).
• Analyze traffic metrics and optimize conversion funnels.
• Lead SEO and content marketing initiatives.
• Report on campaign performance and ROI.

Requirements:
• 2-4 years of proven experience in Digital Marketing.
• Strong understanding of performance marketing and analytics tools.
• Excellent communication and strategic planning skills.
• Ability to work in a fast-paced agency environment.`,
    },
    {
        id: 2,
        title: 'Senior Full Stack Developer',
        location: 'Remote',
        type: 'Full-time',
        category: 'Engineering',
        experience: '2-4 years',
        salary: '5 LPA',
        equity: 'No equity',
        skills: 'Next.js, Node.js',
        shortDesc: 'Build high-performance web applications using modern stacks like Next.js and Node.js for our global clients.',
        fullDesc: `Join our engineering team as a Senior Full Stack Developer to build robust, scalable web applications. You will take ownership of the technical architecture and deliver high-quality code using React, Next.js, and Node.js.

Key Responsibilities:
• Architect, build, and maintain scalable web applications.
• Write clean, maintainable, and efficient code.
• Collaborate with designers to implement intuitive user interfaces.
• Build RESTful APIs and microservices using Node.js.
• Optimize applications for maximum speed and scalability.

Requirements:
• 2-4 years of professional experience in full-stack development.
• Strong proficiency in JavaScript/TypeScript, React, Next.js, and Node.js.
• Experience with database design (SQL/NoSQL).
• Familiarity with modern deployment pipelines and CI/CD.`,
    },
    {
        id: 3,
        title: 'Digital Marketing Intern',
        location: 'Trivandrum, India / Remote',
        type: 'Internship',
        category: 'Marketing',
        experience: 'Fresher',
        salary: '2 LPA',
        equity: 'No equity',
        shortDesc: 'Kickstart your career in digital marketing. Learn performance marketing, SEO, and content creation hands-on.',
        fullDesc: `Are you passionate about digital marketing and eager to learn? Join SalHurry as a Digital Marketing Intern! You will work closely with our senior marketers to manage real-world campaigns and learn the ins and outs of growth marketing.

Key Responsibilities:
• Assist in creating and scheduling social media content.
• Help monitor and report on campaign performance.
• Conduct market research and competitor analysis.
• Support SEO tasks like keyword research and on-page optimization.

Requirements:
• Fresh graduate or currently pursuing a degree in Marketing, Communications, or related fields.
• Basic understanding of digital marketing channels.
• Strong written and verbal communication skills.
• Highly motivated and eager to learn in a fast-paced environment.`,
    }
];

const categories = ['All Positions', 'Marketing', 'Engineering', 'Operations'];

export default function JobBoard() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All Positions');
    const [showInternshipsOnly, setShowInternshipsOnly] = useState(false);
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [showAppModal, setShowAppModal] = useState(false);

    // Filter Jobs
    const filteredJobs = jobsData.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
        const matchesCat = activeCategory === 'All Positions' || job.category === activeCategory;
        const matchesInternship = showInternshipsOnly ? job.type === 'Internship' : true;
        return matchesSearch && matchesCat && matchesInternship;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-screen bg-[#F9FAFB] font-sans text-[#1A1A1A]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Sidebar */}
                <div className="w-full lg:w-[320px] shrink-0">
                    <div className="sticky top-24">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                            Career at <br />
                            <span className="text-black">SalHurry</span>
                        </h1>

                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#A3E635] focus:border-transparent transition-all shadow-sm"
                            />
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-[24px] p-2 border border-gray-100 shadow-sm mb-6">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors flex items-center gap-3 ${activeCategory === cat ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    <Briefcase className="w-4 h-4 opacity-50" />
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Internships Toggle */}
                        <div className="bg-white rounded-full p-4 border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer" onClick={() => setShowInternshipsOnly(!showInternshipsOnly)}>
                            <span className="text-sm font-medium text-gray-700">Show only internships</span>
                            <div className={`w-12 h-6 rounded-full p-1 transition-colors flex items-center ${showInternshipsOnly ? 'bg-[#A3E635]' : 'bg-gray-200'}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${showInternshipsOnly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job List */}
                <div className="flex-1 flex flex-col gap-6">
                    {
                        filteredJobs.length === 0 ? (
                            <div className="bg-white p-12 rounded-[32px] text-center border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">No positions found</h3>
                                <p className="text-gray-500">Try adjusting your filters or search query.</p>
                            </div>
                        ) : (
                            filteredJobs.map((job) => (
                                <div key={job.id} className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-semibold text-gray-600">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                                            <Clock className="w-3.5 h-3.5" />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#A3E635]/10 text-[#5c8a16] rounded-full border border-[#A3E635]/20">
                                            {job.category}
                                        </div>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[#1A1A1A]">
                                        {job.title}
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed mb-8 max-w-3xl">
                                        {job.shortDesc}
                                    </p>

                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setSelectedJob(job)}
                                            className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-black transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View job details
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>

            {/* --- MODALS --- */}
            <AnimatePresence>
                {
                    selectedJob && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => { setSelectedJob(null); setShowAppModal(false); }}
                                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-3xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
                            >
                                {/* Modal Header */}
                                <div className="p-8 pb-6 border-b border-gray-100 flex justify-between items-start sticky top-0 bg-white/80 backdrop-blur-md z-20">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                                        <div className="flex gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedJob.location}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedJob.type}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => { setSelectedJob(null); setShowAppModal(false); }} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                                    {!showAppModal ? (
                                        <>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                                <div className="bg-gray-50 p-4 rounded-2xl">
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Experience</p>
                                                    <p className="font-bold text-sm">{selectedJob.experience}</p>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-2xl">
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Salary</p>
                                                    <p className="font-bold text-sm">{selectedJob.salary}</p>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-2xl">
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Equity</p>
                                                    <p className="font-bold text-sm">{selectedJob.equity}</p>
                                                </div>
                                                {selectedJob.skills && (
                                                    <div className="bg-gray-50 p-4 rounded-2xl">
                                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Stack</p>
                                                        <p className="font-bold text-sm">{selectedJob.skills}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="prose prose-gray max-w-none whitespace-pre-line text-gray-600">
                                                {selectedJob.fullDesc}
                                            </div>

                                            <div className="mt-12 flex justify-end border-t border-gray-100 pt-8">
                                                <button
                                                    onClick={() => setShowAppModal(true)}
                                                    className="bg-[#A3E635] text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-[#8bc929] transition-colors flex items-center gap-2"
                                                >
                                                    Apply Now <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                            <h3 className="text-2xl font-bold mb-6">Application: {selectedJob.title}</h3>
                                            <form className="space-y-5" onSubmit={async (e) => {
                                                e.preventDefault();
                                                const form = e.target as HTMLFormElement;
                                                const formData = new FormData(form);
                                                formData.append('role', selectedJob.title);

                                                try {
                                                    const res = await fetch('/api/apply', {
                                                        method: 'POST',
                                                        body: formData
                                                    });

                                                    if (res.ok) {
                                                        alert("Application Submitted Successfully!");
                                                        form.reset();
                                                        setSelectedJob(null);
                                                        setShowAppModal(false);
                                                    } else {
                                                        const data = await res.json();
                                                        alert("Error: " + data.error);
                                                    }
                                                } catch (err) {
                                                    alert("Failed to submit application. Please try again.");
                                                }
                                            }}>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                                    <input type="text" name="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#A3E635] transition-all" placeholder="John Doe" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                                    <input type="tel" name="phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#A3E635] transition-all" placeholder="+91 9876543210" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume / CV (PDF/DOCX) *</label>
                                                    <div className="relative">
                                                        <input type="file" name="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".pdf,.doc,.docx" />
                                                        <div className="w-full px-4 py-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-500 group hover:border-[#A3E635] hover:bg-[#A3E635]/5 transition-all">
                                                            <Upload className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#A3E635]" />
                                                            <span className="text-sm font-medium group-hover:text-black">Click to upload or drag and drop</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-6">
                                                    <button type="button" onClick={() => setShowAppModal(false)} className="text-gray-500 font-medium text-sm hover:text-black transition-colors">
                                                        Back to details
                                                    </button>
                                                    <button type="submit" className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black transition-colors">
                                                        Submit Application
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}
