export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "medium" | "twitter" | "mail" | "phone";
};

export type ExperienceItem = {
  company: string;
  companyLogo: string;
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

export type Blog = {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
};

export const siteConfig = {
  name: "Jason Sun",
  logoText: "Jason Sun",
  greeting: {
    title: "Hey, it's Jason.",
    subtitles: [
      "I'm a software engineer.",
      "I'm a saxophonist/musician.",
      "I'm a basketball player.",
    ],
  },
  contact: {
    email: "jasonsunjishen@gmail.com",
    phone: "416-347-9816",
    countryCode: "+1",
    location: "Toronto, ON, Canada",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/jasunsjs", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jason-sun0/", icon: "linkedin" },
  ] satisfies SocialLink[],
  about: {
    resumeUrl: "/",
  },
  headings: {
    projectsHomePage: "Projects",
    projectsMainPage: "Projects",
    about: "About Me",
    education: "Education",
    experience: "Experiences",
    contact: "Contact Me",
  },
  cta: {
    landing: "My work",
    work: "View All",
    resume: "Resume",
    submit: "Submit",
  },
  experience: {
    visible: true,
    items: [
      {
        company: "Zomp Inc.",
        companyLogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Software Engineer",
        time: "Sep 2025 - Dec 2025",
        description:
          "Worked on oil/gas pipeline analytics software & AWS internal pipeline tools",
      },
      {
        company: "Sparklease Inc.",
        companyLogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Full Stack Developer",
        time: "Jan 2025 - Apr 2025",
        description:
          "Developed end-to-end features for an online automotive marketplace & built ETL pipelines",
      },
      {
        company: "Home Hardware Stores Limited",
        companyLogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Software Developer",
        time: "May 2024 - Aug 2024",
        description:
          "Automated test suites & Python internal tools to support ERP system workflows",
      },
    ] satisfies ExperienceItem[],
  },
  blogs: {
    visible: true,
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
      "/images/projects/buildbane.jpg",
    ],
    projectUrl: "https://www.buildbane.com/",
  },
  {
    name: "Linguistify",
    description:
      "AI-powered audio dubbing application using TTS/STT and AI contextual translations to synchronize audio tracks into different languages.",
    tech: ["React", "JavaScript", "Python", "Flask"],
    images: [
      "/images/projects/linguistify.jpg",
    ],
    projectUrl: "https://github.com/jasunsjs/linguistify",
  },
  {
    name: "Biquadris",
    description:
      "A Tetris-inspired multiplayer game engine with a twist - different levels, special blocks and effects, and unique rotation mechanics.",
    tech: ["C++"],
    images: [
      "/images/projects/biquadris.jpg",
    ],
    projectUrl: "https://github.com/jasunsjs/biquadris",
  },
] satisfies Project[];

export const blogs = [
  {
    title: "Blog Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    href: "https://www.google.com",
    image: "/images/projects/blog.jpg",
    tags: ["jim", "pam", "dwight"],
  },
  {
    title: "Blog Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    href: "https://www.google.com",
    image: "/images/projects/blog.jpg",
    tags: ["jim", "pam", "dwight"],
  },
  {
    title: "Blog Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    href: "https://www.google.com",
    image: "/images/projects/blog.jpg",
    tags: ["jim", "pam", "dwight"],
  },
  {
    title: "Blog Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    href: "https://www.google.com",
    image: "/images/projects/blog.jpg",
    tags: ["jim", "pam", "dwight"],
  },
] satisfies Blog[];
