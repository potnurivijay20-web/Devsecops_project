interface FooterProps {
  name: string;
  tagline: string;
  socials: { label: string; href: string }[];
}

export function Footer({ name, tagline, socials }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">{name}</p>
            <p className="mt-1 text-sm text-slate-400">{tagline}</p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {currentYear} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
