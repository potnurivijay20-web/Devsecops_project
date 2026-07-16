import { Button } from "./Button";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface AboutProps {
  title: string;
  bio: string[];
  skills: string[];
  experience: ExperienceItem[];
  resumeHref?: string;
}

export function About({
  title,
  bio,
  skills,
  experience,
  resumeHref,
}: AboutProps) {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6 space-y-4">
              {bio.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Core Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {resumeHref && (
              <div className="mt-8">
                <Button as="a" href={resumeHref} variant="secondary">
                  Download Resume
                </Button>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Experience
            </h3>
            <div className="mt-6 space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-slate-200 pl-6"
                >
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-slate-400" />
                  <h4 className="text-lg font-semibold text-slate-900">
                    {job.role}
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    {job.company} · {job.period}
                  </p>
                  <p className="mt-2 text-slate-600">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
