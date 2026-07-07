'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../lang/LanguageContext';
import '../portfolio.css';

export default function ProjectsPage() {
  const t = useTranslation();

  return (
    <div className="portfolio-body">
      <Header />

      <main className="portfolio-wrapper">
        <section className="portfolio-projectsSection">
          <h1 className="portfolio-title">{t.projectsTitle}</h1>
          <p className="portfolio-subtitle term-comment">{t.projectsIntro}</p>

          <div className="portfolio-projectsList">
            {t.projects.map((project, index) => (
              <div key={index} className="term-window portfolio-projectCard">
                <div className="term-titlebar">
                  <span className="portfolio-dot portfolio-dotRed" />
                  <span className="portfolio-dot portfolio-dotYellow" />
                  <span className="portfolio-dot portfolio-dotGreen" />
                  <span className="term-titlebarLabel">{project.name}.ipynb</span>
                </div>

                <div className="term-body">
                  <div className="portfolio-projectStatus">
                    <span className="portfolio-pulseDot portfolio-pulseDotAmber" />
                    {project.status}
                  </div>

                  <h2 className="portfolio-projectName">{project.name}</h2>
                  <p className="portfolio-projectSummary term-comment">{project.summary}</p>

                  <div className="portfolio-pillsContainer">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="portfolio-pill">{tech}</span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-socialPill portfolio-projectLink"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
