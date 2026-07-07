import { Translation } from './types';

export const de: Translation = {
  navLinks: ['Startseite', 'Erfahrung', 'Ausbildung', 'Kontakt'],
  statusBadge: 'Offen für Praktika & Werkstudentenstellen in Deutschland',
  title: 'Jnanadeep S R',
  subtitle:
    'Datenwissenschaftler und Softwareingenieur, der komplexe Backend-Daten in skalierbare Anwendungen verwandelt. Derzeit M.Sc. Data Science in Göttingen — spezialisiert auf Kernsystemoptimierung, Cloud-Frameworks und prädiktive Modellierung.',
  quickList: [
    'M.Sc. Data Science an der Georg-August-Universität Göttingen',
    'Erfahrung mit leistungsstarken Microservices und datengetriebener Entwicklung',
    'Kompetent in AWS, Analytics und belastbarer Backend-Architektur'
  ],
  skillGroups: [
    {
      category: 'Sprachen & Frameworks',
      skills: ['Python', 'TypeScript', 'React', 'Node.js', 'Next.js']
    },
    {
      category: 'Cloud & Daten',
      skills: ['AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools & Prozesse',
      skills: ['Git', 'CI/CD', 'Jira', 'Agile', 'Unit Testing']
    }
  ],
  whatIDoTitle: 'Was ich mache',
  whatIDo: [
    {
      title: 'Data Science & Analytics',
      description: 'Statistische Modellierung, ML-Pipelines, Reporting und Analytics für intelligentere Entscheidungen.'
    },
    {
      title: 'Software & Web Development',
      description: 'Backend-Services, REST-APIs und webbasierte Anwendungen, die für Skalierung gebaut sind.'
    },
    {
      title: 'Cloud & Systems Engineering',
      description: 'AWS-Architekturen, serverlose Integrationen und zuverlässige Produktionsinfrastrukturen.'
    }
  ],
  resumeButton: 'Zertifikat ansehen',
  contactButton: 'Kontakt',
  experienceTitle: 'Berufserfahrung',
  jobTabs: ['Software-Ingenieur', 'Associate SE', 'Praktikum'],
  jobs: {
    se: {
      title: 'Software-Ingenieur',
      company: '@ Tekion',
      meta: '04/2024 - 03/2026 | Bangalore, Indien',
      bullets: [
        'Entwickelte ein automatisiertes Benachrichtigungssystem, das zeitnahe Kundenwarnungen auslöst, die Kundeneinbindung um 30 % verbessert und verpasste Termine um 25 % reduziert.',
        'Leitete und verwaltete mehrere Migrationen für Autohäuser, minimierte Betriebsstörungen und steigerte die Gesamteffizienz.',
        'Optimierte Anwendungs-Workflows zur Verbesserung der Benutzererfahrung, was zu einer 26%igen Reduzierung der Buchungszeit führte.',
        'Implementierte einen Integrationsablauf für das Terminbuchungssystem und ermöglichte nahtlose Konnektivität zu kommenden OEMs durch einfache Konfigurationen.',
        'Optimierte das Audit-Logging-System durch serverlose Architektur mit AWS Lambda-Funktionen und senkte die Infrastrukturkosten um rund 15 %.'
      ]
    },
    ase: {
      title: 'Associate Software Engineer',
      company: '@ Tekion',
      meta: '07/2022 - 03/2024 | Bangalore, Indien',
      bullets: [
        'Betreute die Terminbuchungsfunktion für Dealer Management Systems und optimierte den Slot-Verfügbarkeitsalgorithmus, um die Latenz um 27 % zu reduzieren.',
        'Verbesserte die APIs der kundenorientierten Buchungsanwendung, um die Antwortzeiten zu beschleunigen, und führte wichtige Sicherheitsmaßnahmen ein.',
        'Integrierte das Teilereservierungssystem in den Buchungsablauf, um die Verfügbarkeit geplanter Termine sicherzustellen.',
        'Leitete die Migration mehrerer Microservices von Java 8 auf Java 11 und erzielte eine Leistungssteigerung von 15-20 % sowie eine Stabilitätssteigerung von 10-15 %.',
        'Optimierte Reporting-Funktionen, die Autohäusern ermöglichen, kritische Gewinnmetriken aus Kundendaten zu verfolgen.'
      ]
    },
    intern: {
      title: 'Software Engineer Intern',
      company: '@ Tekion',
      meta: '01/2022 - 06/2022 | Bangalore, Indien',
      bullets: [
        'Entwickelte einen benutzerdefinierten Formular-Builder mit flüssigem Drag-and-Drop, mit dem Unternehmenskunden vollständig personalisierte Aufnahmeanforderungsformulare erstellen können.'
      ]
    }
  },
  educationTitle: 'Ausbildung',
  certificationsTitle: 'Zertifikate',
  educationItems: [
    {
      degree: 'M.Sc. Data Science',
      school: 'Georg-August-Universität Göttingen',
      meta: '04/2026 - Gegenwart | Göttingen, Deutschland'
    },
    {
      degree: 'Bachelor of Technology',
      school: 'Bangalore University',
      meta: '2018 - 2022 | Bangalore, Indien'
    }
  ],
  certificationCard: {
    title: '🏆 Infosys Certified Software Programmer',
    linkText: 'PDF ansehen ↗',
    description:
      'Zeigt Fachwissen in grundlegenden Ingenieurprinzipien und algorithmischem Problemlösen. Klicken Sie, um das offizielle Dokument zu öffnen und zu prüfen.'
  },
  contactTitle: 'Kontakt',
  contactInfo: [
    { label: 'email', value: 'srjnanadeep@gmail.com', href: 'mailto:srjnanadeep@gmail.com' },
    { label: 'telefon', value: '+49 160 91040865', href: 'tel:+4916091040865' },
    { label: 'adresse', value: 'Emilienstraße 4, 37075 Göttingen, Deutschland' }
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/jnanadeep-sr?tab=repositories' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jnanadeep-s-r-142b12197' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/jnanadeep9023/' }
  ]
};
