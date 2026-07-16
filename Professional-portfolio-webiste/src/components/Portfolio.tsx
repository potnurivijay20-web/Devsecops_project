import { cn } from "../utils/cn";

export interface WorkItem {
  id: string;
  title: string;
  category: "Project" | "Article" | "Case Study";
  date: string;
  excerpt: string;
  link?: string;
}

interface PortfolioProps {
  title: string;
  subtitle: string;
  items: WorkItem[];
}

export function Portfolio({ title, subtitle, items }: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-md"
            >
              <div className="flex h-48 items-center justify-center bg-slate-100">
                <svg
                  className="h-12 w-12 text-slate-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {item.category === "Article" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  )}
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      item.category === "Project" &&
                        "bg-blue-50 text-blue-800",
                      item.category === "Article" &&
                        "bg-emerald-50 text-emerald-800",
                      item.category === "Case Study" &&
                        "bg-amber-50 text-amber-800"
                    )}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                  {item.link ? (
                    <a href={item.link} className="focus:outline-none">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.excerpt}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center text-sm font-medium text-slate-900 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
