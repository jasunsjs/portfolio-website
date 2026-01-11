import Image from "next/image";
import Link from "next/link";
import WorkTimeline from "@/components/WorkTimeline";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div>
      <section
        id="top"
        className="relative flex min-h-[90vh] items-center justify-center bg-[color:var(--color-secondary)] px-[10vw] text-center scroll-mt-28"
      >
        <div
          className="absolute inset-0 bg-[url('/images/background2.jpg')] bg-cover bg-center opacity-30"
          aria-hidden
        />
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1
            className="animate-fade-up font-serif text-4xl text-[color:var(--color-text)] md:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            {siteConfig.greeting.title}
          </h1>
          <div className="flex flex-col gap-2">
            {(siteConfig.greeting.subtitles).map(
              (subtitle, index) => (
                <p
                  key={`${subtitle}-${index}`}
                  className="animate-fade-up text-base text-[color:var(--color-text)] md:text-xl"
                  style={{ animationDelay: `${1 + index * 1}s` }}
                >
                  {subtitle}
                </p>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[color:var(--color-secondary)] px-[10vw] py-14 text-left scroll-mt-28"
      >
        <div className="mx-auto grid w-full max-w-6xl items-start gap-15 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <SectionHeading className="text-left text-white">
              About Me
            </SectionHeading>
            <p className="text-sm text-[color:var(--color-text)] md:text-base">
              {siteConfig.about.content}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border-[color:var(--color-subtext-soft)]">
              <Image
                src="/images/aboutme/about_me1.jpg"
                alt="About me photo 1"
                width={600}
                height={900}
                sizes="(max-width: 768px) 100vw, 320px"
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg border-[color:var(--color-subtext-soft)]">
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

      <section id="projects" className="px-6 py-10 scroll-mt-28">
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
            className="inline-flex items-center justify-center rounded-lg bg-[color:var(--color-accent)] px-8 py-2 text-sm text-[color:var(--color-contrast)] transition hover:-translate-y-1"
          >
            {siteConfig.cta.work} <span className="ml-2">&gt;</span>
          </Link>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[90vh] flex-col items-center justify-center px-6 py-12 scroll-mt-28"
      >
        <SectionHeading>{siteConfig.headings.contact}</SectionHeading>
        <div className="mt-6 w-full max-w-2xl">
        </div>
      </section>
    </div>
  );
}
