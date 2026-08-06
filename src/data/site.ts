export type ExperienceItem = {
  company: string;
  companyLogo: string;
  companyUrl: string;
  position: string;
  time: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  images: string[];
  projectUrl: string;
};

export const siteConfig = {
  name: "Jason Sun",
  logoText: "Jason Sun",
  greeting: {
    title: "Hey, I'm Jason.",
    subtitles: [
      "Software Engineer.",
      "Saxophonist/Musician.",
      "Basketball Player.",
    ],
  },
  contact: {
    email: "jasonsunjishen@gmail.com",
    phone: "416-347-9816",
    countryCode: "+1",
    location: "Toronto, ON, Canada",
  },
  about: {
    resumeUrl: "/",
  },
  footer: {
    copyrightName: "Jason Sun",
    copyrightYear: "2025",
    currentJam: {
      label: "Current Jam:",
      song: "Pink + White",
      artist: "Frank Ocean",
      url: "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8",
    },
  },
  headings: {
    projectsHomePage: "Projects",
    about: "About Me",
    education: "Education",
    experience: "Experiences",
    contact: "Contact Me",
  },
  experience: {
    visible: true,
    items: [
      {
        company: "Zanbato Inc.",
        companyLogo:
          "",
        companyUrl: "https://www.zanbato.com/",
        position: "Software Engineer",
        time: "May 2026 - Aug 2026",
        description:
          "Internal and LP tools for private market SPV fund services and the ZX alternate trading platform",
      },
      {
        company: "8VC Fellowship",
        companyLogo:
          "",
        companyUrl: "https://8vc.com/fellowships",
        position: "Engineering Fellow",
        time: "May 2026 - Aug 2026",
        description:
          "1 of 40 fellows from 1K+ applicants to connect with VCs and high-growth startups in the SF Bay Area and NYC",
      },
      {
        company: "Zomp Inc.",
        companyLogo:
          "",
        companyUrl: "",
        position: "Software Engineer",
        time: "Sep 2025 - Dec 2025",
        description:
          "Oil/gas pipeline inspection analytics algorithms for modeling defect patterns & AWS internal pipeline tools",
      },
      {
        company: "Sparklease Inc.",
        companyLogo:
          "",
        companyUrl: "https://www.sparklease.com/",
        position: "Full Stack Engineer",
        time: "Jan 2025 - Apr 2025",
        description:
          "Vehicle discovery and listing features for an online automotive marketplace & ETL pipelines",
      },
      {
        company: "Home Hardware Stores Limited",
        companyLogo:
          "",
        companyUrl: "",
        position: "Software Developer",
        time: "May 2024 - Aug 2024",
        description:
          "Automated test suites & Python internal data analytics tools to support ERP system workflows",
      },
    ] satisfies ExperienceItem[],
  },
};

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Experiences", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    name: "BuildBane (Co-founding Engineer)",
    description:
      "A platform  that connects entrepreneurs with builders to collaborate on projects and kickstart ideas.",
    tech: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Prisma ORM", "Redis", "Firebase"],
    images: [
      "/images/projects/buildbane.png",
    ],
    projectUrl: "https://www.buildbane.com/",
  },
  {
    name: "MarketLens",
    description:
      "A real-time AI stock analytics mobile app monitoring your portfolio with custom alert notifications for price movements.",
    tech: ["Kotlin", "TypeScript", "Supabase"],
    images: [
      "/images/projects/marketlens.png",
    ],
    projectUrl: "https://github.com/jasunsjs/marketlens",
  },
  {
    name: "Linguistify",
    description:
      "AI-powered audio dubbing application using TTS/STT and AI contextual translations to synchronize audio tracks into different languages.",
    tech: ["React", "JavaScript", "Python", "Flask"],
    images: [
      "/images/projects/linguistify.png",
    ],
    projectUrl: "https://github.com/jasunsjs/linguistify",
  },
] satisfies Project[];
