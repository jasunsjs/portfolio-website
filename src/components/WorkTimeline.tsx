import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export default function WorkTimeline() {
  if (!siteConfig.experience.visible) {
    return null;
  }

  return (
    <section id="experience" className="py-12 scroll-mt-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading>{siteConfig.headings.experience}</SectionHeading>
        <div className="relative mt-10 pl-6">
          <div className="absolute left-4 top-0 h-full w-px bg-[color:var(--color-subtext-soft)]" />
          <ul className="space-y-8">
            {siteConfig.experience.items.map((item, index) => (
              <li
                key={`${item.company}-${index}`}
                className="relative ml-10"
              >
                <div className="rounded-2xl border border-[color:var(--color-subtext-soft)] bg-[color:var(--color-body)] p-6 shadow-[var(--shadow-soft)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-tertiary)]">
                    {item.time}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-text)]">
                    {item.company}
                  </h3>
                  <p className="text-sm text-[color:var(--color-text-muted)]">
                    {item.position}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--color-subtext)]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
