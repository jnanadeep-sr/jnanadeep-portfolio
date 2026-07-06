export type Job = {
  title: string;
  company: string;
  meta: string;
  bullets: string[];
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
  quickActions: {
    label: string;
    href: string;
  }[];
  experienceTitle: string;
  jobTabs: string[];
  jobs: Record<'se' | 'ase' | 'intern', Job>;
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
};
