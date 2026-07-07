'use client';

import { useTranslation } from '../lang/LanguageContext';

export default function Footer() {
  const t = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footerInner">
        <span className="portfolio-footerCopyright">© {year} {t.title}</span>
        <span className="portfolio-footerNote term-comment">{t.footerNote}</span>
      </div>
    </footer>
  );
}
