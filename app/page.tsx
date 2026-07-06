'use client';

import Header from './components/Header';
import { useTranslation } from './lang/LanguageContext';
import './portfolio.css';

export default function Home() {
  const t = useTranslation();

  return (
    <div className="portfolio-body">
      <Header />

      <div className="portfolio-wrapper">
        <section id="about" className="portfolio-heroSection">
          <div className="portfolio-statusBadge">
            <span className="portfolio-pulseDot"></span>
            {t.statusBadge}
          </div>

          <h1 className="portfolio-title">{t.title}</h1>
          <p className="portfolio-subtitle">{t.subtitle}</p>

          <div className="portfolio-heroActions">
            <a
              href="https://infytq.onwingspan.com/public-assets/Infosys-Certified-Software-Programmer_2022/7c596724-35a7-46eb-aa4e-be27f6c65af3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button portfolio-buttonPrimary"
            >
              {t.resumeButton}
            </a>
            <a
              href="https://www.linkedin.com/in/jnanadeep-s-r-142b12197"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button portfolio-buttonSecondary"
            >
              {t.contactButton}
            </a>
          </div>

          <ul className="portfolio-quickList">
            {t.quickList.map((item, index) => (
              <li key={index}>
                <span className="portfolio-bulletArrow">▶</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="portfolio-skillsContainer">
            {t.skillGroups.map((group, index) => (
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

        <section className="portfolio-whatIDoSection">
          <h2 className="portfolio-sectionTitle">{t.whatIDoTitle}</h2>
          <div className="portfolio-whatGrid">
            {t.whatIDo.map((item, index) => (
              <div key={index} className="portfolio-whatCard">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="portfolio-divider" />

        <section id="education" className="portfolio-splitSection">
          <div>
            <h2 className="portfolio-sectionTitle">{t.educationTitle}</h2>
            <div className="portfolio-eduList">
              {t.educationItems.map((item, index) => (
                <div key={index} className="portfolio-eduItem">
                  <h4>{item.degree}</h4>
                  <p className="portfolio-eduSchool">{item.school}</p>
                  <span className="portfolio-eduMeta">{item.meta}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="portfolio-sectionTitle">{t.certificationsTitle}</h2>
            <a
              href="https://infytq.onwingspan.com/public-assets/Infosys-Certified-Software-Programmer_2022/7c596724-35a7-46eb-aa4e-be27f6c65af3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-certCard"
            >
              <div className="portfolio-certHeader">
                <h4 className="portfolio-certTitle">{t.certificationCard.title}</h4>
                <span className="portfolio-certLinkText">{t.certificationCard.linkText}</span>
              </div>
              <p className="portfolio-certDescription">{t.certificationCard.description}</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
