import Link from "next/link";
import { Icons } from "@/components/icons";
import { navigation, siteConfig } from "@/data/site";

const iconMap = {
  github: Icons.github,
  linkedin: Icons.linkedin,
  medium: Icons.medium,
  twitter: Icons.twitter,
  mail: Icons.mail,
  phone: Icons.phone,
};

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-footer)] px-6 py-8 text-[color:var(--color-subtext)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:grid md:grid-cols-3 md:gap-10">
        <div>
          <Link href="/" className="font-serif text-2xl text-[color:var(--color-text)]">
            {siteConfig.logoText}
          </Link>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text)]">
            Socials
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.label}>
                  <Link
                    href={social.href || "#"}
                    className="flex items-center gap-2 transition hover:text-[color:var(--color-text)]"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 transition hover:text-[color:var(--color-text)]"
              >
                <Icons.mail className="h-4 w-4" />
                Mail
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text)]">
            Pages
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[color:var(--color-text)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-[color:var(--color-subtext-muted)] pt-4 text-center text-sm">
        Inspired by the Next.js portfolio template.
      </div>
    </footer>
  );
}
