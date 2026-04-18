import React, { useState } from 'react';
import {Menu, X, ExternalLink, Code, Layers, Globe, Mail, Phone, MapPin, Briefcase, Award, ArrowRight, Code2 as Github, Zap, TrendingUp, Users} from 'lucide-react';
import profileImg from '@/images/Sujan_Pic.js';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Revit BIM Automation Suite',
      category: 'BIM Development',
      description: 'Custom Revit Add-Ins for automated BIM workflows, model coordination, and data extraction.',
      image: '🏗️',
      tags: ['Revit API', 'C#', 'BIM Automation'],
      impact: 'Reduced design time by 40%',
      link: '#'
    },
    {
      id: 2,
      title: 'SAP Enterprise Security System',
      category: 'Enterprise Systems',
      description: 'Implemented SAML-based SSO and managed high-availability SAP HANA clusters for enterprise infrastructure.',
      image: '🔐',
      tags: ['SAP Basis', 'Security', 'HANA'],
      impact: '99.9% uptime maintained',
      link: '#'
    },
    {
      id: 3,
      title: 'AI-Driven Healthcare Analytics',
      category: 'Data & AI',
      description: 'Developed machine learning models for adverse drug reaction analysis and clinical decision support.',
      image: '🤖',
      tags: ['Machine Learning', 'Data Analytics', 'Python'],
      impact: '95% prediction accuracy',
      link: '#'
    },
    {
      id: 4,
      title: 'COVID-19 Diagnosis Framework',
      category: 'AI Research',
      description: 'Deep learning system using GANs and LSTM for medical image analysis and diagnosis support.',
      image: '🔬',
      tags: ['Deep Learning', 'GANs', 'LSTM'],
      impact: 'Published research findings',
      link: '#'
    },
    {
      id: 5,
      title: 'Network Infrastructure Monitoring',
      category: 'Infrastructure',
      description: 'Enterprise-level network security monitoring and infrastructure optimization systems.',
      image: '📡',
      tags: ['Network Security', 'Monitoring', 'Infrastructure'],
      impact: 'Prevented 50+ security incidents',
      link: '#'
    },
    {
      id: 6,
      title: 'Technical Training Platform',
      category: 'Education',
      description: 'Comprehensive training programs in data science, Python, and web development for professionals.',
      image: '📚',
      tags: ['Python', 'Data Science', 'Web Dev'],
      impact: '500+ students trained',
      link: '#'
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  const stats = [
    { label: 'Years Experience', value: '4+', icon: '📊' },
    { label: 'Projects Completed', value: '15+', icon: '✅' },
    { label: 'Technologies', value: '20+', icon: '⚙️' },
    { label: 'Team Members', value: '50+', icon: '👥' }
  ];

  const skills = [
    { category: 'BIM & Engineering', items: ['Revit API', 'Revit Add-Ins', 'BIM Automation', 'Dynamo', 'Autodesk Revit'] },
    { category: 'Programming', items: ['C#', 'Python', 'Java', 'C', '.NET'] },
    { category: 'Enterprise Systems', items: ['SAP Basis', 'SAP Security', 'SAP HANA', 'SAP ERP'] },
    { category: 'Data & AI', items: ['Machine Learning', 'Deep Learning', 'Data Analytics', 'LLM'] },
    { category: 'Infrastructure', items: ['Network Security', 'Cloud Systems', 'Cybersecurity', 'Monitoring'] }
  ];

  const testimonials = [
    {
      name: 'Engineering Manager',
      company: 'EMA Engineering',
      text: 'Sujan\'s BIM automation solutions have transformed our workflow efficiency.',
      rating: 5
    },
    {
      name: 'IT Director',
      company: 'INVISTA',
      text: 'Exceptional technical knowledge and problem-solving abilities.',
      rating: 5
    },
    {
      name: 'Research Advisor',
      company: 'UT Tyler',
      text: 'Outstanding research contributions and technical implementation skills.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              SK
            </div>
            
            <div className="hidden md:flex space-x-1">
              <a href="#home" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold transition">Home</a>
              <a href="#projects" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">Projects</a>
              <a href="#skills" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">Skills</a>
              <a href="#contact" className="px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 dark:border-gray-800 pt-4">
              <a href="#home" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600">Home</a>
              <a href="#projects" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600">Projects</a>
              <a href="#skills" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600">Skills</a>
              <a href="#contact" className="block py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800">
                🚀 Welcome
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-4 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sujan Khadka
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              BIM Developer & Software Engineer
            </h2>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-bold mb-4">
              MSCS | Revit API Specialist | Enterprise Systems Expert
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg max-w-xl">
              I build intelligent automation solutions that transform engineering workflows. Specialized in BIM development, enterprise systems, and AI-driven technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="mailto:contactsujan247@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105">
                <Mail size={20} /> Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/sujan-khadka" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl font-bold transition flex items-center justify-center gap-2">
                LinkedIn <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition">
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-2 shadow-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                <img src={profileImg} alt="Sujan Khadka" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border-4 border-blue-600 hover:shadow-3xl transition">
              <p className="text-sm font-bold text-gray-900 dark:text-white">🎓 MSCS</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">UT Tyler</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800 mb-4">
              💼 Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Innovative solutions across BIM, enterprise systems, and AI technologies
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'BIM Development', 'Enterprise Systems', 'Data & AI', 'Infrastructure', 'Education'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-bold transition ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tab === 'all' ? 'All Projects' : tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-7xl group-hover:scale-110 transition">
                  {project.image}
                </div>
                <div className="p-8">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 mb-4 text-green-600 dark:text-green-400 font-semibold">
                    <TrendingUp size={18} /> {project.impact}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition font-bold">
                    View Details <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800 mb-4">
              🛠️ Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-2xl transition border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
                    <Zap size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/item">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover/item:scale-150 transition"></div>
                      <span className="font-semibold group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let's Create Something Amazing</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:contactsujan247@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl">
              <Mail size={20} /> Send Email
            </a>
            <a href="https://www.linkedin.com/in/sujan-khadka" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl font-bold transition">
              Connect on LinkedIn
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">📧 Email</p>
                <a href="mailto:contactsujan247@gmail.com" className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  contactsujan247@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">📞 Phone</p>
                <a href="tel:9035083807" className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline">
                  903-508-3807
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">📍 Location</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">Tyler, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">SK</p>
              <p className="text-sm">Building innovative solutions for the future.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Connect</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.linkedin.com/in/sujan-khadka" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a></li>
                <li><a href="mailto:contactsujan247@gmail.com" className="hover:text-blue-400 transition">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Sujan Khadka. All rights reserved.</p>
            <p className="mt-2">Licensed Computer Engineer – Nepal Engineering Council</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
