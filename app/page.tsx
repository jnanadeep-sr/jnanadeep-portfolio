'use client';

import { useState } from 'react';
import './portfolio.css'; // Direct link to your new error-free style sheet

export default function Home() {
  const [activeJob, setActiveJob] = useState('se');

  const skillGroups = [
    {
      category: 'Backend & Architecture',
      skills: ['Spring Boot', 'Spring MVC', 'Microservices', 'REST APIs', 'SDLC']
    },
    {
      category: 'Languages & Data Science',
      skills: ['Java Core', 'Python', 'R', 'SQL']
    },
    {
      category: 'Cloud & Databases',
      skills: ['AWS Lambda', 'DynamoDB', 'MongoDB', 'Redis', 'Elastic Search']
    },
    {
      category: 'Testing & Tools',
      skills: ['JUnit', 'Mockito']
    }
  ];

  return (
    <div className="portfolio-body">
      
      {/* NAVIGATION BAR */}
      <nav className="portfolio-navbar">
        <div className="portfolio-logo"> Jnanadeep S R </div>
        <div className="portfolio-navLinks">
          <a href="#about">Startseite</a>
          <a href="#experience">Erfahrung</a>
          <a href="#education">Ausbildung</a>
          <a href="https://www.linkedin.com/in/jnanadeep-s-r-142b12197" target="_blank" rel="noopener noreferrer">Kontakt</a>
        </div>
      </nav>

      <div className="portfolio-wrapper">
        
        {/* HERO SECTION */}
        <section id="about" className="portfolio-heroSection">
          <div className="portfolio-statusBadge">
            <span className="portfolio-pulseDot"></span>
            Open to internships & working student positions in Germany
          </div>

          <h1 className="portfolio-title">Jnanadeep S R</h1>
          
          <p className="portfolio-subtitle">
            Data Scientist and Software Engineer turning complex backend datasets into scalable applications. Currently pursuing my M.Sc. in Data Science at Göttingen — specializing in core systems optimization, cloud frameworks, and predictive modeling.
          </p>

          <ul className="portfolio-quickList">
            <li><span className="portfolio-bulletArrow">▶</span> M.Sc. Data Science at Georg-August-Universität Göttingen</li>
            <li><span className="portfolio-bulletArrow">▶</span> Former Full-Time Systems Engineer specializing in high-throughput microservices</li>
            <li><span className="portfolio-bulletArrow">▶</span> Expert in building automated tracking systems and AWS architecture pipelines</li>
          </ul>

          {/* GROUPED SKILLS CONTAINER */}
          <div className="portfolio-skillsContainer">
            {skillGroups.map((group, index) => (
              <div key={index} className="portfolio-skillGroup">
                <h3 className="portfolio-groupLabel">{group.category}</h3>
                <div className="portfolio-pillsContainer">
                  {group.skills.map((skill, idx) => (
                    <span key={idx} className="portfolio-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="portfolio-divider" />

        {/* EXPERIENCE SECTION */}
        <section id="experience" style={{ marginBottom: '4rem' }}>
          <h2 className="portfolio-sectionTitle">Professional Experience</h2>
          
          <div className="portfolio-tabsContainer">
            <div className="portfolio-tabList">
              <button 
                onClick={() => setActiveJob('se')}
                className={`portfolio-tabButton ${activeJob === 'se' ? 'portfolio-tabButtonActive' : ''}`}>
                Software Engineer
              </button>
              <button 
                onClick={() => setActiveJob('ase')}
                className={`portfolio-tabButton ${activeJob === 'ase' ? 'portfolio-tabButtonActive' : ''}`}>
                Associate SE
              </button>
              <button 
                onClick={() => setActiveJob('intern')}
                className={`portfolio-tabButton ${activeJob === 'intern' ? 'portfolio-tabButtonActive' : ''}`}>
                Intern
              </button>
            </div>

            <div className="portfolio-jobCard">
              {activeJob === 'se' && (
                <div>
                  <div className="portfolio-jobHeader">
                    <h3 className="portfolio-jobTitle">Software Engineer <span className="portfolio-jobCompany">@ Tekion</span></h3>
                    <span className="portfolio-jobMeta">04/2024 - 03/2026 | Bangalore, India</span>
                  </div>
                  <ul className="portfolio-bulletList">
                    <li>Developed an automated notification system to trigger timely customer alerts, improving customer engagement by 30% and reducing missed appointments by 25%.</li>
                    <li>Led and managed multiple migrations for car dealerships, minimizing operational disruptions and improving overall efficiency.</li>
                    <li>Streamlined application workflows to enhance user experience, resulting in a 26% reduction in booking time.</li>
                    <li>Implemented an integration flow for the appointment booking system, enabling seamless connectivity with upcoming OEMs through simple configurations.</li>
                    <li>Optimized the audit log system by implementing serverless architecture with AWS Lambda functions, reducing infrastructure costs by around 15%.</li>
                  </ul>
                </div>
              )}

              {activeJob === 'ase' && (
                <div>
                  <div className="portfolio-jobHeader">
                    <h3 className="portfolio-jobTitle">Associate Software Engineer <span className="portfolio-jobCompany">@ Tekion</span></h3>
                    <span className="portfolio-jobMeta">07/2022 - 03/2024 | Bangalore, India</span>
                  </div>
                  <ul className="portfolio-bulletList">
                    <li>Managed the appointment booking feature for Dealer Management Systems, optimizing the slot availability algorithm to reduce latency by 27%.</li>
                    <li>Enhanced consumer-facing booking application APIs to speed up response times and introduced key security compliance measures.</li>
                    <li>Integrated the parts reservation system into the appointment flow to ensure guaranteed availability for scheduled bookings.</li>
                    <li>Led the migration of multiple microservices from Java 8 to Java 11, yielding a 15-20% performance improvement and 10-15% increased stability.</li>
                    <li>Optimized reporting features enabling dealerships to track critical profit metrics from customer communication datasets.</li>
                  </ul>
                </div>
              )}

              {activeJob === 'intern' && (
                <div>
                  <div className="portfolio-jobHeader">
                    <h3 className="portfolio-jobTitle">Software Engineer Intern <span className="portfolio-jobCompany">@ Tekion</span></h3>
                    <span className="portfolio-jobMeta">01/2022 - 06/2022 | Bangalore, India</span>
                  </div>
                  <ul className="portfolio-bulletList">
                    <li>Developed a Custom Form Builder featuring smooth drag-and-drop mechanics, allowing enterprise users to create completely personalized application intake sheets.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <hr className="portfolio-divider" />

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="portfolio-splitSection">
          <div>
            <h2 className="portfolio-sectionTitle">Education</h2>
            <div className="portfolio-eduList">
              <div className="portfolio-eduItem">
                <h4>M.Sc. Data Science</h4>
                <p className="portfolio-eduSchool">Georg-August-Universität Göttingen</p>
                <span className="portfolio-eduMeta">04/2026 - Present | Göttingen, Germany</span>
              </div>
              <div className="portfolio-eduItem">
                <h4>Bachelor of Technology</h4>
                <p className="portfolio-eduSchoolAlt">Bangalore University</p>
                <span className="portfolio-eduMeta">2018 - 2022 | Bangalore, India</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="portfolio-sectionTitle">Certifications</h2>
            <a 
              href="https://infytq.onwingspan.com/public-assets/Infosys-Certified-Software-Programmer_2022/7c596724-35a7-46eb-aa4e-be27f6c65af3.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-certCard"
            >
              <div className="portfolio-certHeader">
                <h4 className="portfolio-certTitle">🏆 Infosys Certified Software Programmer</h4>
                <span className="portfolio-certLinkText">View PDF ↗</span>
              </div>
              <p className="portfolio-certDescription">
                Demonstrated expertise in foundational engineering principles and algorithmic problem-solving. Click to open and verify formal document.
              </p>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}