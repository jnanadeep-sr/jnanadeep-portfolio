export type Job = {
  title: string;
  company: string;
  meta: string;
  bullets: string[];
};

export type Project = {
  name: string;
  status: string;
  summary: string;
  stack: string[];
  href: string;
};

export type Translation = {
  navLinks: string[];
  statusBadge: string;
  title: string;
  subtitle: string;
  quickList: string[];
  skillGroups: {
    category: string;
    skills: string[];
  }[];
  whatIDoTitle: string;
  whatIDo: {
    title: string;
    description: string;
  }[];
  resumeButton: string;
  contactButton: string;
  experienceTitle: string;
  jobTabs: string[];
  jobs: Record<'se' | 'ase' | 'intern', Job>;
  projectsTitle: string;
  projectsIntro: string;
  projects: Project[];
  educationTitle: string;
  certificationsTitle: string;
  educationItems: {
    degree: string;
    school: string;
    meta: string;
  }[];
  certificationCard: {
    title: string;
    linkText: string;
    description: string;
  };
  contactTitle: string;
  contactInfo: {
    label: string;
    value: string;
    href?: string;
  }[];
  socialLinks: {
    label: string;
    href: string;
  }[];
  footerNote: string;
};
