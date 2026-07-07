import { Translation } from './types';

export const en: Translation = {
  navLinks: ['Home', 'Experience', 'Projects', 'Education', 'Contact'],
  statusBadge: 'Open to internships & working student positions in Germany',
  title: 'Jnanadeep S R',
  subtitle:
    'Data Scientist and Software Engineer turning complex backend datasets into scalable applications. Currently pursuing my M.Sc. in Data Science at Göttingen — specializing in core systems optimization, cloud frameworks, and predictive modeling.',
  quickList: [
    'M.Sc. Data Science at Georg-August-Universität Göttingen',
    'Experienced in high-throughput microservices and data-driven engineering',
    'Skilled in AWS, analytics, and resilient backend architecture'
  ],
  skillGroups: [
    {
      category: 'Languages & Frameworks',
      skills: ['Python', 'TypeScript', 'React', 'Node.js', 'Next.js']
    },
    {
      category: 'Cloud & Data',
      skills: ['AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools & Practices',
      skills: ['Git', 'CI/CD', 'Jira', 'Agile', 'Unit Testing']
    }
  ],
  whatIDoTitle: 'What I Do',
  whatIDo: [
    {
      title: 'Data Science & Analytics',
      description: 'Statistical modeling, ML pipelines, reporting, and analytics that help teams make smarter decisions.'
    },
    {
      title: 'Software & Web Development',
      description: 'Backend services, REST APIs, and developer-friendly web applications built for scale.'
    },
    {
      title: 'Cloud & Systems Engineering',
      description: 'AWS architecture, serverless integrations, and reliable infrastructure for production apps.'
    }
  ],
  resumeButton: 'Download Resume',
  contactButton: 'Contact',
  experienceTitle: 'Professional Experience',
  jobTabs: ['Software Engineer', 'Associate SE', 'Intern'],
  jobs: {
    se: {
      title: 'Software Engineer',
      company: '@ Tekion',
      meta: '04/2024 - 03/2026 | Bangalore, India',
      bullets: [
        'Developed an automated notification system to trigger timely customer alerts, improving customer engagement by 30% and reducing missed appointments by 25%.',
        'Led and managed multiple migrations for car dealerships, minimizing operational disruptions and improving overall efficiency.',
        'Streamlined application workflows to enhance user experience, resulting in a 26% reduction in booking time.',
        'Implemented an integration flow for the appointment booking system, enabling seamless connectivity with upcoming OEMs through simple configurations.',
        'Optimized the audit log system by implementing serverless architecture with AWS Lambda functions, reducing infrastructure costs by around 15%.'
      ]
    },
    ase: {
      title: 'Associate Software Engineer',
      company: '@ Tekion',
      meta: '07/2022 - 03/2024 | Bangalore, India',
      bullets: [
        'Managed the appointment booking feature for Dealer Management Systems, optimizing the slot availability algorithm to reduce latency by 27%.',
        'Enhanced consumer-facing booking application APIs to speed up response times and introduced key security compliance measures.',
        'Integrated the parts reservation system into the appointment flow to ensure guaranteed availability for scheduled bookings.',
        'Led the migration of multiple microservices from Java 8 to Java 11, yielding a 15-20% performance improvement and 10-15% increased stability.',
        'Optimized reporting features enabling dealerships to track critical profit metrics from customer communication datasets.'
      ]
    },
    intern: {
      title: 'Software Engineer Intern',
      company: '@ Tekion',
      meta: '01/2022 - 06/2022 | Bangalore, India',
      bullets: [
        'Developed a Custom Form Builder featuring smooth drag-and-drop mechanics, allowing enterprise users to create completely personalized application intake sheets.'
      ]
    }
  },
  projectsTitle: 'Projects',
  projectsIntro: 'A couple of things I\'m building on the side — both still in progress.',
  projects: [
    {
      name: 'ccle-ml-dr-analysis',
      status: 'In Progress',
      summary:
        'Exploring the Cancer Cell Line Encyclopedia (CCLE) dataset — ~545 drugs × 887 cell lines × 19K+ gene expression features — to find which genes drive drug sensitivity (EC50) and train per-drug regression models that predict response directly from gene expression profiles.',
      stack: ['Python', 'pandas', 'scikit-learn', 'NumPy', 'Matplotlib', 'Seaborn'],
      href: 'https://github.com/jnanadeep-sr/ccle-ml-dr-analysis'
    },
    {
      name: 'airbnb-price-prediction',
      status: 'In Progress',
      summary:
        'A multimodal ML pipeline (course project) predicting nightly Airbnb listing prices from Inside Airbnb data — combining tabular listing features, geolocation, and review-text sentiment (NLTK VADER) through tree ensembles, AutoGluon, and stacked regressors.',
      stack: ['Python', 'scikit-learn', 'XGBoost', 'AutoGluon', 'NLTK', 'SHAP'],
      href: 'https://github.com/jnanadeep-sr/airbnb-price-prediction'
    }
  ],
  educationTitle: 'Education',
  certificationsTitle: 'Certifications',
  educationItems: [
    {
      degree: 'M.Sc. Data Science',
      school: 'Georg-August-Universität Göttingen',
      meta: '04/2026 - Present | Göttingen, Germany'
    },
    {
      degree: 'Bachelor of Technology',
      school: 'Bangalore University',
      meta: '2018 - 2022 | Bangalore, India'
    }
  ],
  certificationCard: {
    title: '🏆 Infosys Certified Software Programmer',
    linkText: 'View PDF ↗',
    description:
      'Demonstrated expertise in foundational engineering principles and algorithmic problem-solving. Click to open and verify formal document.'
  },
  contactTitle: 'Contact',
  contactInfo: [
    { label: 'email', value: 'srjnanadeep@gmail.com', href: 'mailto:srjnanadeep@gmail.com' },
    { label: 'phone', value: '+49 160 91040865', href: 'tel:+4916091040865' },
    { label: 'address', value: 'Emilienstraße 4, 37075 Göttingen, Germany' }
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/jnanadeep-sr?tab=repositories' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jnanadeep-s-r-142b12197' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/jnanadeep9023/' }
  ],
  footerNote: 'Built with Next.js, deployed on Vercel.'
};
