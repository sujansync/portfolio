import React, { useState } from 'react';
import { Menu, X, ExternalLink, Mail, ArrowRight, Zap, TrendingUp, GraduationCap, Award, Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';
import profileImg from '@/images/Sujan_Pic.js';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedExp, setExpandedExp] = useState(new Set([0]));

  const toggleExp = (i) => setExpandedExp(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  const projects = [
    {
      id: 1,
      title: 'Revit BIM Automation Suite',
      category: 'BIM Development',
      description: 'Custom Revit Add-Ins for automated BIM workflows, model coordination, and data extraction.',
      image: '🏗️',
      tags: ['Revit API', 'C#', 'BIM Automation'],
      impact: 'Reduced design time by 40%',
      link: '#',
    },
    {
      id: 2,
      title: 'SAP Enterprise Security System',
      category: 'Enterprise Systems',
      description: 'Implemented SAML-based SSO and managed high-availability SAP HANA clusters for enterprise infrastructure.',
      image: '🔐',
      tags: ['SAP Basis', 'Security', 'HANA'],
      impact: '99.9% uptime maintained',
      link: '#',
    },
    {
      id: 3,
      title: 'AI-Driven Healthcare Analytics',
      category: 'Data & AI',
      description: 'Developed machine learning models for adverse drug reaction analysis and clinical decision support.',
      image: '🤖',
      tags: ['Machine Learning', 'Data Analytics', 'Python'],
      impact: '95% prediction accuracy',
      link: '#',
    },
    {
      id: 4,
      title: 'COVID-19 Diagnosis Framework',
      category: 'AI Research',
      description: 'Deep learning system using GANs and LSTM for medical image analysis and diagnosis support.',
      image: '🔬',
      tags: ['Deep Learning', 'GANs', 'LSTM'],
      impact: 'Published research findings',
      link: '#',
    },
    {
      id: 5,
      title: 'Network Infrastructure Monitoring',
      category: 'Infrastructure',
      description: 'Enterprise-level network security monitoring and infrastructure optimization systems.',
      image: '📡',
      tags: ['Network Security', 'Monitoring', 'Infrastructure'],
      impact: 'Prevented 50+ security incidents',
      link: '#',
    },
    {
      id: 6,
      title: 'Technical Training Platform',
      category: 'Education',
      description: 'Comprehensive training programs in data science, Python, and web development for professionals.',
      image: '📚',
      tags: ['Python', 'Data Science', 'Web Dev'],
      impact: '500+ students trained',
      link: '#',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Students Trained', value: '500+' },
  ];

  const skills = [
    { category: 'BIM & Engineering', items: ['Revit API', 'Revit Add-Ins', 'BIM Automation', 'Dynamo', 'Autodesk Revit'] },
    { category: 'Programming', items: ['C#', 'Python', 'Java', 'C', '.NET'] },
    { category: 'Enterprise Systems', items: ['SAP Basis', 'SAP Security', 'SAP HANA', 'SAP ERP'] },
    { category: 'Data & AI', items: ['Machine Learning', 'Deep Learning', 'Data Analytics', 'LLM'] },
    { category: 'Infrastructure', items: ['Network Security', 'Cloud Systems', 'Cybersecurity', 'Monitoring'] },
    { category: 'Soft Skills', items: ['Technical Training', 'Team Leadership', 'Research', 'Documentation'] },
  ];

  const testimonials = [
    {
      name: 'Engineering Manager',
      company: 'EMA Engineering',
      text: "Sujan's BIM automation solutions have transformed our workflow efficiency. A rare mix of engineering domain knowledge and software craftsmanship.",
      rating: 5,
    },
    {
      name: 'IT Director',
      company: 'INVISTA',
      text: 'Exceptional technical knowledge and problem-solving abilities. Sujan delivered enterprise-grade security with zero downtime.',
      rating: 5,
    },
    {
      name: 'Research Advisor',
      company: 'UT Tyler',
      text: 'Outstanding research contributions and technical implementation skills. His AI research has real-world clinical implications.',
      rating: 5,
    },
  ];

  const education = [
    {
      degree: 'Master of Science – Computer Science',
      institution: 'University of Texas at Tyler',
      location: 'Tyler, Texas',
      period: 'Aug 2023 – May 2025',
      gpa: '3.66',
      courses: ['Cybersecurity', 'Computer Networks', 'Machine Learning', 'Data Analytics'],
    },
    {
      degree: 'Bachelor of Engineering – Computer Science & Engineering',
      institution: 'Visvesvaraya Technological University',
      location: 'Bangalore, India',
      period: 'Jun 2017 – Aug 2021',
      gpa: '3.86',
      courses: ['C#', 'C++', 'Java', 'Python', 'Web Development'],
    },
  ];

  const certifications = [
    { name: 'Licensed Computer Engineer', issuer: 'Nepal Engineering Council', year: '2022' },
    { name: 'Revit Add-In Development', issuer: 'Credmark', year: '2025' },
    { name: 'Computer Networks and Network Security', issuer: 'IBM', year: null },
    { name: 'SAP Professional Fundamentals', issuer: 'SAP', year: null },
    { name: 'Foundations of Cybersecurity', issuer: 'Google', year: null },
  ];

  const experience = [
    {
      role: 'BIM Developer',
      company: 'EMA Engineering & Consulting, Inc.',
      location: 'Tyler, Texas',
      period: 'May 2025 – Present',
      current: true,
      icon: '🏗️',
      color: 'cyan',
      bullets: [
        'Develop and maintain custom Revit Add-Ins and automation tools using C# and the Autodesk Revit API.',
        'Design BIM automation scripts and workflows to improve engineering design productivity and project delivery efficiency.',
        'Build and support Revit-based BIM workflows that streamline project setup, modeling standards, and coordination across engineering teams.',
        'Troubleshoot and maintain internal Revit toolbars and add-in systems used by design professionals across multiple disciplines.',
        'Implement and enforce company BIM standards and drafting standards across engineering projects.',
        'Document BIM workflows, provide technical reports, and communicate development progress with BIM management and production teams.',
      ],
      tech: ['Revit API', 'C#', 'BIM Automation', 'Revit Add-Ins'],
    },
    {
      role: 'IT Analyst',
      company: 'INVISTA',
      location: 'Texas, United States',
      period: 'Jan 2025 – May 2025',
      current: false,
      icon: '🔐',
      color: 'violet',
      bullets: [
        'Supported enterprise network security, configuration, and infrastructure monitoring for IT and operational technology environments.',
        'Monitored system performance and analyzed security risks to ensure infrastructure reliability.',
        'Troubleshot network, firewall, and server-related issues to maintain business continuity.',
        'Documented IT processes, compliance procedures, and technical performance reports.',
      ],
      tech: ['Network Security', 'Infrastructure Monitoring', 'Jira', 'ServiceNow'],
    },
    {
      role: 'Graduate Research & Data Analytics Lab Assistant',
      company: 'University of Texas at Tyler',
      location: 'Tyler, Texas',
      period: 'Aug 2023 – May 2025',
      current: false,
      icon: '🔬',
      color: 'blue',
      bullets: [
        'Conducted research and data analysis on healthcare datasets related to adverse drug reactions.',
        'Developed machine learning models for speech enhancement and accent conversion.',
        'Built AI-driven data analysis tools utilizing Large Language Models (LLMs).',
        'Presented research findings at the East Texas Research Conference.',
      ],
      tech: ['Machine Learning', 'Data Analytics', 'Artificial Intelligence', 'LLM'],
    },
    {
      role: 'SAP Basis Security Consultant',
      company: 'Quinnox',
      location: 'Chicago, Illinois',
      period: 'Aug 2021 – Jan 2024',
      current: false,
      icon: '⚙️',
      color: 'violet',
      bullets: [
        'Managed SAP HANA replication and high-availability cluster environments for enterprise systems.',
        'Implemented SAML-based Single Sign-On (SSO) across SAP applications.',
        'Monitored enterprise SAP systems including ECC Production and PI/PO environments.',
      ],
      tech: ['SAP Basis', 'SAP Security', 'SAP ERP', 'SAP HANA'],
    },
    {
      role: 'Technical Trainer',
      company: 'Lithoera Technologies Pvt. Ltd.',
      location: 'Bangalore, India',
      period: 'Apr 2021 – Sep 2021',
      current: false,
      icon: '📚',
      color: 'cyan',
      bullets: [
        'Delivered training programs in data science, Python programming, advanced Excel, and web development.',
        'Prepared course materials and technical learning modules for software development education.',
      ],
      tech: ['Python', 'Data Science', 'Web Development'],
    },
  ];

  const TABS = ['all', 'BIM Development', 'Enterprise Systems', 'Data & AI', 'Infrastructure', 'Education'];
  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ── Navigation ── */}
      <nav className="fixed w-full z-50 border-b border-white/[0.06] bg-gray-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent tracking-widest">
              SK
            </a>

            <div className="hidden md:flex items-center gap-1">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/5"
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="md:hidden text-gray-400 hover:text-white transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-1 border-t border-white/[0.06]">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2.5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/5 rounded-lg transition text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
                <span className="text-white block">Sujan</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Khadka
                </span>
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-cyan-500/60 to-transparent" />
                <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
                  BIM Developer · Software Engineer
                </p>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                Building intelligent automation solutions that transform engineering workflows. Specialized in
                Revit API, enterprise systems, and AI-driven technologies.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href="mailto:contactsujan247@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02]"
                >
                  <Mail size={17} /> Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/sujan-khadka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-bold transition flex items-center gap-2 hover:border-white/20 hover:scale-[1.02]"
                >
                  LinkedIn <ArrowRight size={17} />
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition text-center group"
                  >
                    <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-gray-600 font-medium mt-1 group-hover:text-gray-500 transition">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — profile image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-3xl" />
              </div>

              <div className="relative animate-float">
                {/* Gradient border frame */}
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl p-[2px] bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 shadow-2xl shadow-cyan-500/20">
                  <div className="w-full h-full rounded-[22px] bg-gray-900 overflow-hidden">
                    <img src={profileImg} alt="Sujan Khadka" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Badge — degree */}
                <div className="absolute -bottom-5 -right-5 px-4 py-3 rounded-2xl border border-cyan-500/20 bg-gray-900/95 backdrop-blur-xl shadow-2xl">
                  <p className="text-sm font-black text-white">🎓 MSCS</p>
                  <p className="text-xs text-cyan-400 font-semibold">UT Tyler</p>
                </div>

                {/* Badge — specialization */}
                <div className="absolute -top-5 -left-5 px-3 py-2 rounded-xl border border-violet-500/20 bg-gray-900/95 backdrop-blur-xl shadow-2xl">
                  <p className="text-xs font-bold text-violet-400">Revit API</p>
                  <p className="text-[11px] text-gray-600">Specialist</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Career</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Professional Experience</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              A track record across BIM development, enterprise systems, AI research, and technical training
            </p>
          </div>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/30 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="relative sm:pl-20">

                  {/* Timeline node */}
                  <div className="hidden sm:flex absolute left-0 top-6 flex-col items-center">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl border-2 shadow-lg z-10 ${
                      exp.current
                        ? 'bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border-cyan-500/60 shadow-cyan-500/25'
                        : 'bg-gray-900 border-white/[0.10]'
                    }`}>
                      {exp.icon}
                    </div>
                    {exp.current && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60 animate-pulse" />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`group relative rounded-2xl border transition-all duration-300 hover:shadow-2xl overflow-hidden ${
                    exp.current
                      ? 'border-cyan-500/25 bg-gradient-to-br from-cyan-500/[0.06] to-violet-500/[0.03] hover:border-cyan-500/40 hover:shadow-cyan-500/10'
                      : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:shadow-white/5'
                  }`}>

                    {/* Card inner glow */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition pointer-events-none" />

                    {/* Clickable header */}
                    <button
                      onClick={() => toggleExp(i)}
                      className="relative w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Mobile icon */}
                        <div className={`sm:hidden w-10 h-10 rounded-xl flex items-center justify-center text-lg border flex-shrink-0 ${
                          exp.current ? 'bg-cyan-500/15 border-cyan-500/30' : 'bg-white/[0.05] border-white/[0.08]'
                        }`}>
                          {exp.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-0.5">
                            <h3 className="text-base font-black text-white group-hover:text-cyan-300 transition leading-snug">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-black tracking-wide">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-bold text-cyan-400">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-xs text-gray-600">
                              <MapPin size={11} /> {exp.location}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-600">
                              <Calendar size={11} /> {exp.period}
                            </span>
                          </div>
                          {/* Tech tags always visible */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {exp.tech.map((t, j) => (
                              <span
                                key={j}
                                className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-gray-500 text-[11px] font-semibold group-hover:border-cyan-500/20 group-hover:text-gray-400 transition"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Chevron toggle */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                        expandedExp.has(i)
                          ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-600 group-hover:border-white/20 group-hover:text-gray-400'
                      }`}>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${expandedExp.has(i) ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    {/* Expandable bullets */}
                    {expandedExp.has(i) && (
                      <div className="relative px-6 sm:px-7 pb-6 sm:pb-7">
                        <div className="h-px bg-gradient-to-r from-white/[0.06] to-transparent mb-5" />
                        <ul className="space-y-2.5">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                              <span className="text-cyan-500/50 mt-[5px] flex-shrink-0 text-xs">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Innovative solutions across BIM, enterprise systems, and AI technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'border border-white/[0.06] bg-white/[0.03] text-gray-500 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                {tab === 'all' ? 'All Projects' : tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/25 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/[0.04] group-hover:to-violet-500/[0.04] transition-all duration-300 pointer-events-none" />

                <div className="h-40 bg-gradient-to-br from-gray-800/60 to-gray-900/60 flex items-center justify-center text-6xl border-b border-white/[0.05] group-hover:text-7xl transition-all duration-300">
                  {project.image}
                </div>

                <div className="relative p-6">
                  <span className="text-[11px] font-bold text-cyan-500 tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1.5 mb-2 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-4">
                    <TrendingUp size={13} /> {project.impact}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-gray-500 text-[11px] font-semibold group-hover:border-cyan-500/20 group-hover:text-gray-400 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-cyan-500 hover:text-cyan-300 text-sm font-bold transition"
                  >
                    View Details <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              A broad toolkit spanning engineering automation, AI, and enterprise infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/25 hover:bg-cyan-500/[0.03] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/40 transition">
                    <Zap size={18} className="text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-gray-500 text-xs font-semibold hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/[0.06] transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section id="education" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Background</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Education & Certifications</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Academic foundations and professional credentials
            </p>
          </div>

          {/* Degrees */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {education.map((edu, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/25 hover:bg-cyan-500/[0.03] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/40 transition">
                      <GraduationCap size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-cyan-400 font-semibold mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{edu.location} · {edu.period}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                      GPA {edu.gpa}
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((c, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-gray-500 text-[11px] font-semibold group-hover:border-cyan-500/20 group-hover:text-gray-400 transition"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-4 text-center">Certifications</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/25 hover:bg-violet-500/[0.03] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-violet-500/40 transition">
                    <Award size={16} className="text-violet-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-200 leading-snug truncate group-hover:text-white transition">
                      {cert.name}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {cert.issuer}{cert.year ? ` · ${cert.year}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/25 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl group-hover:bg-violet-500/20 transition" />

                <div className="relative">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-base">★</span>
                    ))}
                  </div>
                  <p className="text-gray-500 italic mb-6 leading-relaxed text-sm group-hover:text-gray-400 transition">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-200">{t.name}</p>
                      <p className="text-xs text-gray-600">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative p-10 md:p-16 text-center">
              <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Build Something</h2>
              <p className="text-gray-600 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
                Always open to discussing new opportunities, innovative projects, and meaningful collaborations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                <a
                  href="mailto:contactsujan247@gmail.com"
                  className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.02]"
                >
                  <Mail size={17} /> Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/sujan-khadka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-bold transition flex items-center justify-center gap-2 hover:border-white/20 hover:scale-[1.02]"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Email', value: 'contactsujan247@gmail.com', href: 'mailto:contactsujan247@gmail.com' },
                  { label: 'Phone', value: '903-508-3807', href: 'tel:9035083807' },
                  { label: 'Location', value: 'Tyler, Texas', href: null },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.03]">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-gray-300">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent tracking-widest">
            SK
          </span>
          <p className="text-gray-700 text-xs">© 2025 Sujan Khadka · Licensed Computer Engineer</p>
          <div className="flex gap-5 text-xs text-gray-700">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
