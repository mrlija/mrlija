export interface CV {
  name: string;
  title: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  personalWebsiteUrl: string;
  contact: Contact;
  work: Work[];
  projects: Projects[];
  education: Education[];
  skills: string[];
}

export interface Contact {
  email: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
}

export interface Item {
  title: string;
  description: string;
  link?: string;
  start?: string;
  end?: string | null;
  badges?: string[];
}

export interface Work extends Item { }

export interface Projects extends Item { }

export interface Education extends Item { }

function getAllSkillsFromBadges(cvData: Partial<CV>): string[] {
  const allBadges = new Set<string>();

  cvData.work?.forEach(item => {
    item.badges?.forEach(badge => allBadges.add(badge));
  });

  cvData.projects?.forEach(item => {
    item.badges?.forEach(badge => allBadges.add(badge));
  });

  cvData.education?.forEach(item => {
    item.badges?.forEach(badge => allBadges.add(badge));
  });

  return Array.from(allBadges).sort();
}

const cvDataBase = {
  name: "Jakub Mrlina",
  title: "Student informační technologie",
  location: "Jablonec nad Nisou, Česká Republika",
  locationLink: "https://www.google.com/maps/place/Jablonec+nad+Nisou",
  about: "Student @ Průmyslovka Liberec",
  summary: "Jsem student informační technologie se zaměřením na desktopové, mobilní a webové aplikace a multimédia na Střední průmyslové škole a Vyšší odborné škole v Liberci. Mám zkušenosti s designem herního prostředí, zajištění kvality, webovým designem a vývojem.",
  personalWebsiteUrl: "https://www.mrlija.cz",
  contact: {
    email: "jakub.mrlina@icloud.com",
    social: [
      { name: "GitHub", url: "https://github.com/mrlija" },
      { name: "LinkedIn", url: "https://linkedin.com/in/mrlija" },
    ],
  },
  work: [
    {
      title: "Accuracy (Hra)",
      description: "Design herního prostředí a zajištění kvality",
      start: "Červenec 2024",
      end: "Současnost",
      badges: [
        "Blender",
        "Git",
        "Týmová komunikace",
        "Unity",
        "Zajištění kvality",
      ],
    },
  ],
  projects: [
    {
      title: "Obklady Mrlina",
      description: "Webové rozhraní pro firmu Obklady Mrlina",
      link: "https://www.obkladymrlina.cz/",
      badges: [
        "Git",
        "React",
        "TypeScript",
        "UI/UX",
        "Webový design",
      ],
    },
    {
      title: "Středoškolský Majáles",
      description: "Webové rozhraní pro akci středoškolský Majáles",
      link: "https://www.stredoskolskymajales.cz/",
      badges: [
        "Git",
        "React",
        "Týmová komunikace",
        "TypeScript",
        "UI/UX",
        "Webový design",
      ],
    },
  ],
  education: [
    {
      title: "Střední průmyslová škola a Vyšší odborná škola, Liberec",
      description: "Informační technologie",
      link: "https://www.prumyslovkaliberec.cz/",
      start: "2025",
      end: "Současnost",
      badges: [
        "Git",
        "Kybernetická bezpečnost",
        "Multimédia",
        "Návrh databází",
        "React",
        "Správa pocítačových sítí",
        "TypeScript",
        "UI/UX",
        "Unity",
        "Vývoj webových, desktopových a mobilních aplikací",
        "Webový design",
      ],
    },
  ],
};

export const CV_DATA: CV = {
  ...cvDataBase,
  skills: getAllSkillsFromBadges(cvDataBase),
};
