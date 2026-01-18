import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export default function WorkTimeline() {
  if (!siteConfig.experience.visible) {
    return null;
  }

  return (
    <section id="experience" className="py-12 scroll-mt-28">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <SectionHeading>{siteConfig.headings.experience}</SectionHeading>
        </Reveal>
        <div className="relative mt-10 pl-6">
          <div className="absolute left-4 top-0 h-full w-px bg-(--color-subtext-soft)" />
          <ul className="space-y-8">
            {siteConfig.experience.items.map((item, index) => (
              <Reveal key={`${item.company}-${index}`} as="li" className="relative ml-10">
                <div className="rounded-2xl border border-(--color-subtext-soft) bg-background p-6 shadow-(--shadow-soft) transition duration-200 hover:scale-[1.02]">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--color-tertiary)">
                    {item.time}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {item.company}
                  </h3>
                  <p className="text-sm text-(--color-text-muted)">
                    {item.position}
                  </p>
                  <p className="mt-3 text-sm text-(--color-subtext)">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
