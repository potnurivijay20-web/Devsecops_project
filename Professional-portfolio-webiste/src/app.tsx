import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import type { WorkItem } from "./components/Portfolio";

// ============================================================
// PERSONALIZE THIS CONFIGURATION
// Change the values below to customize the site with your own
// name, role, bio, projects, articles, and contact details.
// ============================================================
const profile = {
  name: "Alex Morgan",
  role: "Senior Product Manager & Strategy Consultant",
  summary:
    "I help organizations turn complex problems into clear product strategies, user-focused solutions, and measurable business outcomes. Welcome to my portfolio and writing.",
  email: "alex.morgan@example.com",
  location: "San Francisco, CA",
  resumeHref: "#",
};

const heroCTAs = {
  primary: { label: "View My Work", href: "#portfolio" },
  secondary: { label: "Get in Touch", href: "#contact" },
};

const portfolioContent = {
  title: "Selected Work & Insights",
  subtitle:
    "A collection of recent projects, case studies, and articles on product strategy, leadership, and building effective teams.",
  items: [
    {
      id: "project-1",
      title: "Enterprise SaaS Platform Redesign",
      category: "Project" as const,
      date: "2024",
      excerpt:
        "Led the end-to-end redesign of a B2B analytics platform, improving user retention by 28% and reducing time-to-insight.",
      link: "#",
    },
    {
      id: "case-study-1",
      title: "Market Expansion Strategy",
      category: "Case Study" as const,
      date: "2024",
      excerpt:
        "Developed a go-to-market strategy that opened three new verticals and generated $1.2M in pipeline within the first quarter.",
      link: "#",
    },
    {
      id: "article-1",
      title: "The Art of Product Discovery",
      category: "Article" as const,
      date: "Nov 2024",
      excerpt:
        "Why the best product teams spend twice as much time understanding problems before they start building solutions.",
      link: "#",
    },
    {
      id: "project-2",
      title: "Mobile App Launch",
      category: "Project" as const,
      date: "2023",
      excerpt:
        "Shipped a native iOS and Android experience for a fintech startup, reaching 50,000 downloads in the first month.",
      link: "#",
    },
    {
      id: "article-2",
      title: "Building Trust with Data",
      category: "Article" as const,
      date: "Sep 2023",
      excerpt:
        "A practical framework for using metrics and user research to align stakeholders and drive confident decisions.",
      link: "#",
    },
    {
      id: "case-study-2",
      title: "Operational Efficiency Initiative",
      category: "Case Study" as const,
      date: "2023",
      excerpt:
        "Partnered with operations to streamline internal workflows, saving 400+ hours per month across the customer success team.",
      link: "#",
    },
  ] as WorkItem[],
};

const aboutContent = {
  title: "About Me",
  bio: [
    "I’m a product leader with over 10 years of experience building digital products for startups and Fortune 500 companies. My work sits at the intersection of business strategy, user experience, and technology.",
    "I believe the best products are built by teams that listen carefully, move deliberately, and stay focused on outcomes rather than output.",
  ],
  skills: [
    "Product Strategy",
    "Go-to-Market",
    "User Research",
    "Agile Leadership",
    "Data Analysis",
    "Stakeholder Management",
    "Prototyping",
    "Cross-Functional Teams",
  ],
  experience: [
    {
      role: "Senior Product Manager",
      company: "Northstar Technologies",
      period: "2021 – Present",
      description:
        "Leading product strategy for the core analytics platform and managing a team of product managers and designers.",
    },
    {
      role: "Product Manager",
      company: "Atlas Consulting Group",
      period: "2017 – 2021",
      description:
        "Drove digital transformation projects for enterprise clients across finance, healthcare, and retail sectors.",
    },
    {
      role: "Business Analyst",
      company: "Summit Solutions",
      period: "2014 – 2017",
      description:
        "Analyzed market trends, modeled financial scenarios, and supported leadership with strategic recommendations.",
    },
  ],
};

const footerContent = {
  tagline: "Product strategy, thoughtful writing, and proven results.",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header name={profile.name} />
      <main className="flex-1">
        <Hero
          name={profile.name}
          role={profile.role}
          summary={profile.summary}
          ctaPrimary={heroCTAs.primary}
          ctaSecondary={heroCTAs.secondary}
        />
        <Portfolio
          title={portfolioContent.title}
          subtitle={portfolioContent.subtitle}
          items={portfolioContent.items}
        />
        <About
          title={aboutContent.title}
          bio={aboutContent.bio}
          skills={aboutContent.skills}
          experience={aboutContent.experience}
          resumeHref={profile.resumeHref}
        />
        <Contact
          title="Let’s Work Together"
          subtitle="Have a project, speaking opportunity, or just want to connect? I’d love to hear from you."
          email={profile.email}
          location={profile.location}
        />
      </main>
      <Footer
        name={profile.name}
        tagline={footerContent.tagline}
        socials={footerContent.socials}
      />
    </div>
  );
}
