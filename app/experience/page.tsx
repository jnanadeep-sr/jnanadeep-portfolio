'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../lang/LanguageContext';
import '../portfolio.css';

export default function ExperiencePage() {
  const t = useTranslation();
  const [activeJob, setActiveJob] = useState<'se' | 'ase' | 'intern'>('se');

  return (
    <div className="portfolio-body">
      <Header />

      <main className="portfolio-wrapper">
        <section className="portfolio-experienceSection">
          <h1 className="portfolio-title">{t.experienceTitle}</h1>

          <div className="term-window">
            <div className="term-titlebar">
              <span className="portfolio-dot portfolio-dotRed" />
              <span className="portfolio-dot portfolio-dotYellow" />
              <span className="portfolio-dot portfolio-dotGreen" />
              <span className="term-titlebarLabel">experience.log</span>
            </div>

            <div className="portfolio-tabsContainer">
              <div className="portfolio-tabList">
                {t.jobTabs.map((tabLabel, index) => {
                  const jobKey = index === 0 ? 'se' : index === 1 ? 'ase' : 'intern';
                  return (
                    <button
                      key={jobKey}
                      onClick={() => setActiveJob(jobKey)}
                      className={`portfolio-tabButton ${activeJob === jobKey ? 'portfolio-tabButtonActive' : ''}`}
                    >
                      {jobKey}.{tabLabel}
                    </button>
                  );
                })}
              </div>

              <div className="portfolio-jobCard">
                {(['se', 'ase', 'intern'] as const).map((jobKey) => {
                  const job = t.jobs[jobKey];
                  return (
                    activeJob === jobKey && (
                      <div key={jobKey}>
                        <p className="portfolio-codeLine">
                          <span className="portfolio-fnKeyword">const</span> role = {'{'}
                        </p>
                        <div className="portfolio-jobHeader">
                          <div>
                            <h3 className="portfolio-jobTitle">{job.title}</h3>
                            <p className="portfolio-jobCompany">{job.company}</p>
                          </div>
                          <span className="portfolio-jobMeta"># {job.meta}</span>
                        </div>
                        <ul className="portfolio-bulletList">
                          {job.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                        <p className="portfolio-codeLine">{'}'};</p>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
