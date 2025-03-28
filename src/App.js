import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Hemang Shimpi</h1>
        <p>Software Engineer | Machine Learn | Cloud Computing</p>
      </header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Computer Science student at Georgia State University, passionate about software engineering, cloud computing, and machine learning.</p>
        </section>
        <section id="education" className="section">
          <h2>Education</h2>
          <p><strong>Bachelor of Science - Computer Science</strong> (May 2025) <br /> Georgia State University</p>
        </section>
        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <ul>
            <li>Python, Java, MySQL, React, Spring, REST API</li>
            <li>Linux, Shell Scripting, PostgreSQL, MongoDB</li>
            <li>Hadoop, Apache Spark, Jenkins, Git, Jira</li>
          </ul>
        </section>
        <section id="experience" className="section">
          <h2>Experience</h2>
          <h3>Software Engineering Intern - U.S. Bank (June 2024 – Aug 2024)</h3>
          <ul>
            <li>Developed and optimized CI/CD pipelines using Jenkins.</li>
            <li>Led UAT deployments for the Converge Payment Application.</li>
            <li>Implemented Infrastructure as Code (IaC) with AWS.</li>
          </ul>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <h3>API Gateway Cache Clearing System</h3>
          <ul>
            <li>Automated cache clearing for POS payment applications using Akamai API.</li>
            <li>Enhanced CI/CD pipeline efficiency with Ansible and AWS Cloud Automation.</li>
          </ul>
          <h3>Stock Price Predictor with ML</h3>
          <ul>
            <li>Built a stock price prediction model using Keras and Scikit-learn.</li>
            <li>Developed an interactive visualization dashboard with Streamlit.</li>
          </ul>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:hemangshimpi@outlook.com">hemangshimpi@outlook.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/hemangshimpi">linkedin.com/in/hemangshimpi</a></p>
        </section>
      </div>
    </div>
  );
}

export default App;
