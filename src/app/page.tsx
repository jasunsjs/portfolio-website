import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import WorkTimeline from "@/components/WorkTimeline";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div>
      <section
        id="top"
        className="relative flex min-h-[90vh] items-center justify-center bg-(--color-secondary) px-[10vw] text-center"
      >
        <div
          className="animate-hero-bg absolute inset-0 bg-[url('/images/background.webp')] bg-cover bg-center"
          aria-hidden
        />
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1
            className="animate-fade-up font-serif text-4xl text-foreground md:text-6xl"
            style={{ animationDelay: "1.2s" }}
          >
            {siteConfig.greeting.title}
          </h1>
          <div className="flex flex-col gap-2">
            {(siteConfig.greeting.subtitles).map(
              (subtitle, index) => (
                <p
                  key={`${subtitle}-${index}`}
                  className="animate-fade-up text-base text-foreground md:text-xl"
                  style={{ animationDelay: `${2 + index * 0.5}s` }}
                >
                  {subtitle}
                </p>
              ),
            )}
          </div>
        </div>
        <div className="absolute bottom-9">
          <Icons.arrowDown className="float-arrow h-7 w-7" />
        </div>
      </section>

      <section
        id="about"
        className="bg-(--color-secondary) px-[10vw] py-14 text-left"
      >
        <div className="mx-auto grid w-full max-w-6xl items-start gap-15 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <SectionHeading className="text-left text-white">
              About Me
            </SectionHeading>
            <p className="text-sm text-foreground md:text-base">
              {`I'm a CS + AI student at UWaterloo and a passionate software engineer with 3+ years
                of experience. I love learning new tools and technologies to develop
                cool things in any field - web, backend, AI/ML, Cloud, etc.`}
            </p>

            <p className="text-sm text-foreground md:text-base">
              {`My biggest passions outside of tech are by far music and basketball. I'm a freelance r&b/jazz saxophonist
                on the side (hit me up for gigs!), and I've been an avid hooper my whole life.`}
            </p>

            <p className="text-sm text-foreground md:text-base">
              {`But I'm curious about just anything in this world today that's full of wonder. 
                So let's connect - we'll certainly have something in common.`}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border-(--color-subtext-soft)">
              <Image
                src="/images/aboutme/about_me1.jpg"
                alt="About me photo 1"
                width={600}
                height={900}
                sizes="(max-width: 768px) 100vw, 320px"
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg border-(--color-subtext-soft)">
              <Image
                src="/images/aboutme/about_me2.jpg"
                alt="About me photo 2"
                width={600}
                height={900}
                sizes="(max-width: 768px) 100vw, 320px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <WorkTimeline />

      <section id="projects" className="px-6 py-10">
        <SectionHeading>{siteConfig.headings.projectsHomePage}</SectionHeading>
        <div className="mt-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="pb-8 text-center">
          <Link
            href="https://github.com/jasunsjs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-(--color-accent) px-8 py-2 text-sm text-(--color-subtext) transition hover:scale-105"
          >
            {siteConfig.cta.work}
          </Link>
        </div>
      </section>

      <section
        id="contact"
        className="bg-(--color-footer) px-[22vw] pb-55 pt-16"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
          <SectionHeading className="text-white text-5xl">
            {siteConfig.headings.contact}
          </SectionHeading>
          <p className="text-sm text-foreground md:text-base">
            Let's do something cool.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_0.6fr]">
          <div className="space-y-6 text-base text-foreground md:text-base">
            <div className="flex items-center gap-5">
              <Icons.mail className="h-8 w-8" />
              {siteConfig.contact.email}
            </div>
            <div className="flex items-center gap-5">
              <Icons.phone className="h-8 w-8" />
              {siteConfig.contact.countryCode} {siteConfig.contact.phone}
            </div>
            <div className="flex items-center gap-5">
              <Icons.location className="h-8 w-8" />
              {siteConfig.contact.location}
            </div>
          </div>
          <div className="space-y-10 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                Follow Me On Socials
              </p>
              <div className="mt-4 flex items-center justify-center gap-8">
                <a
                  href="https://www.linkedin.com/in/jason-sun0/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition duration-200 ease-out hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Icons.linkedin className="h-12 w-12" />
                </a>
                <a
                  href="https://github.com/jasunsjs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition duration-200 ease-out hover:scale-110"
                  aria-label="GitHub"
                >
                  <Icons.github className="h-12 w-12" />
                </a>
                <a
                  href="https://www.instagram.com/sjs.jasun/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition duration-200 ease-out hover:scale-110"
                  aria-label="Instagram"
                >
                  <Icons.instagram className="h-12 w-12" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                Check Out My Music
              </p>
              <div className="mt-4 flex items-center justify-center gap-8">
                <a
                  href="https://www.instagram.com/jasunsaxmusic/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition duration-200 ease-out hover:scale-110"
                  aria-label="Instagram"
                >
                  <Icons.instagram className="h-12 w-12" />
                </a>
                <a
                  href="https://www.youtube.com/@sjsjasun"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition duration-200 ease-out hover:scale-110"
                  aria-label="YouTube"
                >
                  <Icons.youtube className="h-12 w-12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
