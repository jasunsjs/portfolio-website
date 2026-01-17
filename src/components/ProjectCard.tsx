import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const previewImage = project.images[0] ?? "/images/projects/default.jpg";
  const destination = project.projectUrl || "https://github.com";

  return (
    <div className="mx-auto my-8 w-full max-w-4xl">
      <Link
        href={destination}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <div className="rounded-2xl border border-(--color-subtext-soft) bg-background p-6 shadow-(--shadow-soft) transition duration-200 hover:scale-[1.02]">
          <div className="flex flex-row gap-6">
            <div className="relative h-36 w-56 flex-none overflow-hidden rounded-xl bg-(--color-footer) md:h-40">
              <Image
                src={previewImage}
                alt={project.name}
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                {project.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-(--color-secondary) px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-(--color-subtext)">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
