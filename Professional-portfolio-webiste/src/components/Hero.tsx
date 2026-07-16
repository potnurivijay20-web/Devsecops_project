import { Button } from "./Button";

interface HeroProps {
  name: string;
  role: string;
  summary: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export function Hero({
  name,
  role,
  summary,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center bg-slate-50 pt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {role}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Hi, I’m {name.split(" ")[0]}.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                {summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href={ctaPrimary.href} variant="primary">
                {ctaPrimary.label}
              </Button>
              <Button as="a" href={ctaSecondary.href} variant="outline">
                {ctaSecondary.label}
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="flex h-72 w-72 items-center justify-center rounded-full bg-slate-200 sm:h-96 sm:w-96">
                <svg
                  className="h-32 w-32 text-slate-400 sm:h-40 sm:w-40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="mt-4 text-center text-sm text-slate-400">
                Replace with your professional headshot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
