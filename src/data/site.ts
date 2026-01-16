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
  githubUrl: string;
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
    content:
      "'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it's not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
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
        company: "Dunder Mifflin",
        companyLogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      },
      {
        company: "Dunder Mifflin",
        companyLogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      },
      {
        company: "Dunder Mifflin",
        companyLogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
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
    name: "Dunder Mifflin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    tech: ["Tech1", "Tech2", "Tech3"],
    images: [
      "/images/projects/buildbane.jpg",
    ],
    githubUrl: "",
    projectUrl: "",
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    tech: ["Tech1", "Tech2", "Tech3"],
    images: [
      "/images/projects/linguistify.jpg",
    ],
    githubUrl: "/",
    projectUrl: "/",
  },
  {
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    tech: ["Tech1", "Tech2", "Tech3"],
    images: [
      "/images/projects/biquadris.jpg",
    ],
    githubUrl: "/",
    projectUrl: "/",
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
