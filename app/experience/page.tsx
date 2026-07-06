'use client';

import { useState } from 'react';
import { languages, LanguageCode } from '../lang';
import '../portfolio.css';

const defaultLanguage: LanguageCode = 'en';

export default function ExperiencePage() {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);
  const [activeJob, setActiveJob] = useState<'se' | 'ase' | 'intern'>('se');
  const t = languages[language];

  return (
    <div className="portfolio-body">
      <nav className="portfolio-navbar">
        <div className="portfolio-logo">{t.title}</div>
        <div className="portfolio-navActions">
          <div className="portfolio-languageToggle">
            <button
              type="button"
              className={`portfolio-languageButton ${language === 'en' ? 'portfolio-languageButtonActive' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`portfolio-languageButton ${language === 'de' ? 'portfolio-languageButtonActive' : ''}`}
              onClick={() => setLanguage('de')}
            >
              DE
            </button>
          </div>
        </div>
      </nav>

      <main className="portfolio-wrapper">
        <section className="portfolio-experienceSection">
          <h1 className="portfolio-title">{t.experienceTitle}</h1>
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
                    {tabLabel}
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
                      <div className="portfolio-jobHeader">
                        <div>
                          <h3 className="portfolio-jobTitle">{job.title}</h3>
                          <p className="portfolio-jobCompany">{job.company}</p>
                        </div>
                        <span className="portfolio-jobMeta">{job.meta}</span>
                      </div>
                      <ul className="portfolio-bulletList">
                        {job.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
