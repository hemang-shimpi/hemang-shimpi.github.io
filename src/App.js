// Portfolio Website for Hemang Shimpi
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
    // Resetting margin and padding so the page starts at the very top.
    <div className="font-sans text-black bg-white m-0 p-0">
      {/* Navigation */}
      <nav className="fixed top-4 w-full z-50 flex justify-center">
        <div className="bg-gray-300 flex items-center space-x-4 px-5 py-2 rounded-full shadow-lg">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item);
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-full font-medium focus:outline-none transition-colors duration-300 ${
                activeSection === item
                  ? 'bg-white text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section with particles */}
      <section
        id="home"
        className="relative text-center px-6 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden h-[500px] flex flex-col justify-center"
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
          <h1 className="text-4xl font-bold mb-4 text-white animate-fade-in">
            Hello, I'm Hemang 👋
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto text-white animate-fade-in delay-100">
            I'm a full stack software engineer and computer science student at Georgia State University.
          </p>
          <div className="mt-6 flex justify-center gap-4 animate-fade-in delay-200">
            <a href="https://github.com/hemang-shimpi" className="btn flex items-center gap-2" title="GitHub">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/hemangshimpi" className="btn flex items-center gap-2" title="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:hemangshimpi@outlook.com" className="btn flex items-center gap-2" title="Email">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-gray-300" />

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up" className="bg-gray-100 text-black px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">API Gateway Cache Clearing System</h3>
            <p className="text-sm text-gray-600 mb-4">
              Built using Jenkins, AWS, and Akamai APIs. Automates cache clearing for POS payment apps with Shell scripting and Groovy.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn" type="button">
                Demo
              </button>
              <a className="btn-outline" href="https://github.com/hemang-shimpi">
                GitHub
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in delay-100 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">E-Commerce Product Catalog</h3>
            <p className="text-sm text-gray-600 mb-4">
              Spring Boot backend with React.js frontend, PostgreSQL database, Spring Security + JWT, and deployed with Docker.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn" type="button">
                Live
              </button>
              <a className="btn-outline" href="https://github.com/hemang-shimpi">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-gray-300" />

      {/* Skills Section */}
      <section id="skills" data-aos="fade-up" className="bg-white text-black py-16 px-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto">
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
            <div key={skill} className="text-center animate-fade-in transition-transform duration-300 hover:-translate-y-2">
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
      <section id="experience" data-aos="fade-up" className="bg-white text-black py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          <div className="mb-16 flex justify-between items-center w-full">
            <div className="w-5/12 text-left pr-8">
              <h3 className="text-lg font-semibold">Software Engineering Intern @ U.S. Bank</h3>
              <p className="text-sm text-gray-500">June 2024 – August 2024 · Atlanta, GA</p>
              <ul className="list-disc pr-4 mt-2 text-sm text-gray-700">
                <li>Optimized CI/CD pipelines with Jenkins.</li>
                <li>Led UAT deployments for Converge Payment App.</li>
                <li>Automated AWS provisioning using Infrastructure as Code.</li>
              </ul>
            </div>
            <div className="w-2/12 flex justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow"></div>
            </div>
            <div className="w-5/12"></div>
          </div>
          <div className="mb-16 flex justify-between items-center w-full">
            <div className="w-5/12"></div>
            <div className="w-2/12 flex justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow"></div>
            </div>
            <div className="w-5/12 text-left pl-8">
              <h3 className="text-lg font-semibold">B.S. in Computer Science</h3>
              <p className="text-sm text-gray-500">Georgia State University · May 2025</p>
              <ul className="list-disc pl-4 mt-2 text-sm text-gray-700">
                <li>Relevant Coursework: Cloud, AI, Data Structures, Mobile Dev</li>
                <li>Dean’s List & President’s List (2024)</li>
                <li>PantherWeb & CS Club Member + Mentor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-gray-300" />

      {/* Education Section */}
      <section id="education" data-aos="fade-up" className="bg-gray-100 text-black py-16 px-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-10 flex flex-row items-center gap-6">
          <img src="./assets/gsuLogo.jpg" alt="GSU Logo" className="w-24 h-24 object-contain" />
          <div className="text-left">
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
      <section id="contact" data-aos="fade-up" className="bg-[#1a1a1d] text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
          ></textarea>
          <button type="submit" className="btn w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 text-center text-sm py-6 border-t">
        &copy; {new Date().getFullYear()} Hemang Shimpi · Built with React & Tailwind CSS
      </footer>

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
