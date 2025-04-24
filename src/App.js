// Hosted on GitHub Pages: https://hemang-shimpi.github.io

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './index.css';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    AOS.init({ duration: 800, once: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const navItems = ['Home', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'];

  return (
    <div className="font-sans text-black bg-white m-0 p-0">
      {/* Navigation */}
      <nav className="fixed top-4 w-full z-50 flex justify-center px-2">
  <div className="bg-gray-300/80 backdrop-blur-sm flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-4 py-2 rounded-full shadow-lg text-sm sm:text-base">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item);
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                activeSection === item ? 'bg-white text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative text-center px-6 pt-28 sm:pt-0 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden h-[500px] flex flex-col justify-center"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute top-0 left-0 right-0 h-full z-0"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: ['repulse', 'connect'] },
                onClick: { enable: false },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                connect: { distance: 120, radius: 60, links: { opacity: 0.5 } },
              },
            },
            particles: {
              color: { value: '#ffffff' },
              links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 2, outModes: 'bounce' },
              number: { value: 50, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
        />
        <div className="relative z-10">
          <a href="https://github.com/hemang-shimpi" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github.com/hemang-shimpi.png"
              alt="Hemang"
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white transition-transform duration-300 hover:scale-110"
            />
          </a>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white animate-fade-in">
            Hello, I'm Hemang 👋
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto text-white animate-fade-in delay-100">
            I'm a full stack software engineer and computer science student at Georgia State University.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 animate-fade-in delay-200">
            <a href="https://github.com/hemang-shimpi" target="_blank" rel="noopener noreferrer" className="btn flex items-center gap-2" title="GitHub">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/hemangshimpi" target="_blank" rel="noopener noreferrer" className="btn flex items-center gap-2" title="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:hemangshimpi@outlook.com" target="_blank" rel="noopener noreferrer" className="btn flex items-center gap-2" title="Email">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-gray-300" />

      <section id="projects" data-aos="fade-up" className="bg-gray-100 text-black px-4 sm:px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

    {/* Project - Bearhood */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <img src="/assets/bearhood demo.png" alt="bearhood demo" className="w-full h-auto max-h-60 object-cover" />
      <div className="p-6 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square" alt="React" />
          <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat-square" alt="Python" />
          <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square" alt="Firebase" />
          <img src="https://img.shields.io/badge/Azure-0078D4?logo=azure-devops&logoColor=white&style=flat-square" alt="Azure" />
        </div>
        <h3 className="text-xl font-bold mb-2">Bearhood – Paper Trading Platform</h3>
        <p className="text-sm text-gray-600 mb-3">
        Full-stack trading simulation app that mimics stock trades using real-time data. Built with <b>React</b>, <b>Python WebSockets</b>, and deployed via <b>Azure</b>.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
        <li>Over 95% login success rate using Firebase Authentication</li>
                <li>Optimized API usage with server-side caching for live stock data</li>
                <li>Designed trading UIs and portfolio dashboards for usability</li>
        </ul>
        <div className="flex gap-3">
          <a href="https://github.com/hemang-shimpi/PaperTradingApp" target="_blank" rel="noopener noreferrer" className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Project - Chatbot */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <img src="/assets/chatbot cover.png" alt="chatbot demo" className="w-full h-auto max-h-60 object-cover" />
      <div className="p-6 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square" alt="React" />
          <img src="https://img.shields.io/badge/LangChain-000?logo=python&logoColor=white&style=flat-square" alt="LangChain" />
          <img src="https://img.shields.io/badge/Gemini-4285F4?logo=google&logoColor=white&style=flat-square" alt="Gemini" />
          <img src="https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white&style=flat-square" alt="Kubernetes" />
        </div>
        <h3 className="text-xl font-bold mb-2">Graduate School AI Chatbot</h3>
        <p className="text-sm text-gray-600 mb-3">
        AI-powered chatbot using <b>React</b>, <b>LangChain</b>, <b>Google Gemini</b>, <b>ChromaDB</b>, and <b>Kubernetes</b>. Handles multi-session context-aware queries.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
        <li>Supports multiple concurrent queries with context preservation</li>
        <li>Tested with Postman; deployed using Uvicorn + Docker</li>
        </ul>
        <div className="flex gap-3">
          <a href="http://askpounce.me/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
            🎯 Live
          </a>
          <a href="https://github.com/hemang-shimpi/Graduate-AI-Chatbot" target="_blank" rel="noopener noreferrer" className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Project - E-Commerce */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-6 flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <img src="https://img.shields.io/badge/SpringBoot-6DB33F?logo=springboot&logoColor=white&style=flat-square" alt="Spring Boot" />
        <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square" alt="React" />
        <img src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white&style=flat-square" alt="PostgreSQL" />
        <img src="https://img.shields.io/badge/JWT-FB542B?logo=jsonwebtokens&logoColor=white&style=flat-square" alt="JWT" />
        <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=flat-square" alt="Docker" />
      </div>
      <h3 className="text-xl font-bold mb-2">E-Commerce Product Catalog</h3>
      <p className="text-sm text-gray-600 mb-3">
      Full-stack catalog with <b>Spring Boot</b> backend, <b>React</b> frontend, <b>PostgreSQL</b>, <b>JWT Auth</b>, and deployed using <b>Docker</b>.
      </p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
      <li>Secure login and role-based access using JWT + Spring Security</li>
      <li>Product management dashboard and category filters</li>
      </ul>
      <div className="flex gap-3">
  <a href="https://github.com/hemang-shimpi/ecommerce-product-catalog" target="_blank" rel="noopener noreferrer" className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm flex items-center gap-2">
    <FaGithub /> GitHub
  </a>
</div>

    </div>

    {/* Project - Akamai Automation */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-6 flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <img src="https://img.shields.io/badge/Jenkins-D24939?logo=jenkins&logoColor=white&style=flat-square" alt="Jenkins" />
        <img src="https://img.shields.io/badge/AWS-232F3E?logo=amazonaws&logoColor=white&style=flat-square" alt="AWS" />
        <img src="https://img.shields.io/badge/Akamai-009DDC?style=flat-square" alt="Akamai" />
        <img src="https://img.shields.io/badge/Shell-89E051?logo=gnu-bash&logoColor=black&style=flat-square" alt="Shell" />
      </div>
      <h3 className="text-xl font-bold mb-2">API Gateway Cache Clearing System</h3>
      <p className="text-sm text-gray-600 mb-3">
      Automated Akamai cache clearing using <b>Jenkins Pipelines</b>, <b>AWS</b>, and <b>Shell scripting</b> to minimize latency for POS payment apps.
      </p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-2">
      <li>Reduced manual deployment delays by 70%</li>
      <li>Modular Groovy stages dynamically trigger Akamai purge requests</li>
      </ul>
      <p className="text-sm text-gray-400">U.S. Bank Project</p>
    </div>

  </div>
</section>


      <div className="w-full border-t border-gray-300" />

      {/* Skills Section */}
      <section id="skills" data-aos="fade-up" className="bg-white text-black py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {[
            'Python',
            'Java',
            'React',
            'Spring',
            'MySQL',
            'PostgreSQL',
            'Jenkins',
            'GitLab',
            'Docker',
            'Linux',
          ].map((skill) => (
            <div key={skill} className="text-center transition-transform duration-300 hover:-translate-y-2">
              <img
                src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`}
                alt={skill}
                className="mx-auto w-16 h-16"
              />
              <p className="mt-2 text-sm">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full border-t border-gray-300" />

      {/* Experience Section */}
      <section id="experience" data-aos="fade-up" className="bg-white text-black py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"></div>

          {/* Timeline Entries */}
          <div className="mb-16 flex flex-col md:flex-row justify-between items-center w-full">
            <div className="w-full md:w-5/12 text-left px-4 md:pr-8">
              <h3 className="text-lg font-semibold">Software Engineering Intern @ U.S. Bank</h3>
              <p className="text-sm text-gray-500">June 2024 – August 2024 · Atlanta, GA</p>
              <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
              <li>Supported merchant payment processing systems by maintaining and improving the Converge Payment
                Application, contributing to the stability of a platform that processes thousands of secure transactions daily.</li>
                <li>Led and executed UAT deployments for feature releases, improving QA throughput and reducing
                environment-related failures by 40% through version control automation and pre-deployment checks.</li>
                <li>Automated Akamai cache clearing using RESTful API scripts and Linux shell scripting, reducing deployment
                delays by 70% and ensuring real-time merchant platform availability.</li>
                <li>Strengthened application security by identifying and patching authentication vulnerabilities in TestRail and
                Confluence, enabling direct AWS-based authentication, and resolving 100% of the flagged issues during audits.</li>
                <li>Streamlined CI/CD pipelines using Jenkins and GitLab, cutting average deployment time by 25% and enabling
                more frequent and reliable code releases.</li>
                <li>Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives, consistently
                delivering updates and collaborating with cross-functional DevOps and QA teams.</li>
              </ul>
            </div>
            <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow my-6 md:my-0"></div>
            <div className="w-full md:w-5/12" />
          </div>

          <div className="mb-16 flex flex-col md:flex-row justify-between items-center w-full">
            <div className="w-full md:w-5/12 order-2 md:order-1" />
            <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow my-6 md:my-0 order-1 md:order-2"></div>
            <div className="w-full md:w-5/12 text-left px-4 md:pl-8 order-3">
              <h3 className="text-lg font-semibold">B.S. in Computer Science</h3>
              <p className="text-sm text-gray-500">Georgia State University · May 2025</p>
              <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
              <li>Relevant Coursework: Software Development, Web Development, Cloud Computing, Artificial Intelligence, Data Structures, System Level Programming, Mobile App Development</li>
                <li>Dean’s List & President’s List (2024)</li>
                <li>PantherWeb & CS Club Member + Mentor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-gray-300" />

      {/* Education Section */}
      <section id="education" data-aos="fade-up" className="bg-gray-100 text-black py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <img src="./assets/gsuLogo.jpg" alt="GSU Logo" className="w-24 h-24 object-contain" />
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-lg text-gray-600">Georgia State University</p>
            <p className="text-lg text-gray-600">Expected Graduation: May 2025</p>
            <ul className="list-disc text-sm text-gray-700 pl-4 mt-2">
            <li>President's List Recipient: Sep 2024</li>
            <li>Dean's List Recipient: Jun 2024</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-gray-300" />

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up" className="bg-[#1a1a1d] text-white py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          ></textarea>
          <button type="submit" className="btn w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 text-center text-sm py-6 border-t px-2">
        &copy; {new Date().getFullYear()} Hemang Shimpi · Built with React & Tailwind CSS
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
