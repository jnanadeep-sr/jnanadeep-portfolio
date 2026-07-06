'use client';

import Link from 'next/link';
import { useLanguage, useTranslation } from '../lang/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <nav className="portfolio-navbar">
      <Link href="/" className="portfolio-logo">
        {t.title}
      </Link>

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

        <div className="portfolio-navLinks">
          <Link href="/#about">{t.navLinks[0]}</Link>
          <Link href="/experience">{t.navLinks[1]}</Link>
          <Link href="/#education">{t.navLinks[2]}</Link>
          <a href="https://www.linkedin.com/in/jnanadeep-s-r-142b12197" target="_blank" rel="noopener noreferrer">
            {t.navLinks[3]}
          </a>
        </div>
      </div>
    </nav>
  );
}
