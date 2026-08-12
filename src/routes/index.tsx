import { Link, createFileRoute } from "@tanstack/react-router";

import { projects } from "../lib/projects";

const SITE_URL = "https://s1nka.com";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Kakhaber Sinauridze",
    alternateName: "s1nka",
    jobTitle: "Product Designer",
    description:
      "Product Designer specializing in UX/UI, product design, design systems, and native iOS applications. Designs, builds, and ships apps end-to-end.",
    url: SITE_URL,
    email: "mailto:kakh.sinauridze@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/kakhasinauridze",
      "https://www.instagram.com/s1nka",
      "https://github.com/Sinka48",
    ],
    knowsAbout: [
      "Product Design",
      "UX Design",
      "UI Design",
      "Interaction Design",
      "Design Systems",
      "Prototyping",
      "Figma",
      "SwiftUI",
      "iOS Development",
      "React",
      "TypeScript",
      "AI-assisted Development",
      "Music Production",
    ],
  },
};

const skillGroups = [
  {
    label: "Design",
    items: [
      {
        lead: "Fuzzy idea → shippable product.",
        detail: "First sketch to App Store — no hand-offs.",
      },
      {
        lead: "Design systems that scale.",
        detail: "Tokens, components, Figma libraries.",
      },
      {
        lead: "Prototypes that settle debates.",
        detail: "Test it in Figma before code exists.",
      },
    ],
  },
  {
    label: "Build",
    items: [
      {
        lead: "I ship what I design.",
        detail: "Four iOS apps live, end-to-end SwiftUI. React + TypeScript on the web.",
      },
      {
        lead: "AI-accelerated.",
        detail: "Design → build → ship in weeks. Taste stays human.",
      },
    ],
  },
  {
    label: "Ship",
    items: [
      {
        lead: "Releases as routine.",
        detail: "CI/CD — an update is one push, not a project.",
      },
      {
        lead: "Secure by default.",
        detail: "Server-side AI proxies. No API keys ever ship in an app.",
      },
      {
        lead: "Range beyond screens.",
        detail: "Music production, content automation.",
      },
    ],
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kakhaber Sinauridze (s1nka) — Product Designer & iOS App Builder" },
      {
        name: "description",
        content:
          "Product Designer focused on UX/UI, product design, and design systems. I design, build, and ship native iOS apps with SwiftUI — Brain Snacks, MindWhisper AI, Annoto, Decision Engine AI — all live on the App Store.",
      },
      { property: "og:title", content: "Kakhaber Sinauridze (s1nka) — Product Designer" },
      {
        property: "og:description",
        content:
          "Product Designer focused on UX/UI, product design, and design systems — designs, builds, and ships native iOS apps.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/og.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kakhaber Sinauridze (s1nka) — Product Designer" },
      {
        name: "twitter:description",
        content:
          "Product Designer focused on UX/UI, product design, and design systems — designs, builds, and ships native iOS apps.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(profileJsonLd),
      },
    ],
  }),
});

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="text-lg font-semibold">
      {children}
    </h2>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 font-mono text-foreground">
      <article className="mx-auto w-full max-w-2xl">
        <p className="md-token text-sm">s1nka.com</p>

        <header>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">s1nka</h1>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Kakhaber Sinauridze <span className="md-token">·</span> Product Designer{" "}
            <span className="md-token">·</span> designs it, builds it, ships it
          </p>
        </header>

        <hr className="my-8 border-border" />

        <section aria-label="About">
          <p className="text-[15px] leading-7 text-muted-foreground">
            <strong className="font-semibold text-foreground">
              Product Designer specializing in UX/UI, product design, design systems, and native iOS
              applications.
            </strong>{" "}
            I combine strong visual design with user-centered thinking — and I don't stop at
            mockups: I <em>design, build, and ship</em> my own apps to the App Store. I also explore{" "}
            <em>programming</em>, <em>AI</em>, and <em>music production</em>, which gives me a
            broader perspective on building and shaping digital products.
          </p>
        </section>

        <section aria-labelledby="skills" className="mt-12">
          <SectionHeading id="skills">Skills</SectionHeading>
          <ul className="mt-4 space-y-6 text-[15px] leading-7 text-muted-foreground">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <p className="md-token text-[13px] uppercase tracking-wider">{group.label}</p>
                <ul className="mt-1 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.lead}>
                      <span className="font-semibold text-foreground">{item.lead}</span>{" "}
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="projects" className="mt-12">
          <SectionHeading id="projects">Selected Projects</SectionHeading>
          <p className="mt-3 text-[13px] text-muted-foreground/80">
            Every project here is mine from scratch — idea, design, code, release. All live.{" "}
            <Link
              to="/projects"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              Full case studies →
            </Link>
          </p>
          <ul className="mt-5 space-y-6 text-[15px] leading-7">
            {projects.map((project) => (
              <li key={project.slug} className="flex items-start gap-4">
                <img
                  src={`/images/${project.slug}-icon.webp`}
                  alt={`${project.name} app icon`}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="mt-1 h-11 w-11 shrink-0 rounded-[10px] border border-border"
                />
                <div className="min-w-0">
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: project.slug }}
                    className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {project.name}
                  </Link>
                  <span className="block text-muted-foreground">
                    {project.tagline}.{" "}
                    {(project.overview.split(". ")[0] ?? project.overview).replace(/\.$/, "")}.
                  </span>
                  <span className="block text-[13px] text-muted-foreground/80">
                    <span className="md-token">role:</span> {project.role}{" "}
                    <span className="md-token">· stack:</span> {project.stack}
                    {project.appStoreUrl && (
                      <>
                        {" "}
                        <span className="md-token">·</span>{" "}
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                        >
                          App Store
                        </a>
                      </>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact" className="mt-12">
          <SectionHeading id="contact">Contact</SectionHeading>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-muted-foreground">
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/kakhasinauridze"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                linkedin.com/in/kakhasinauridze
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/s1nka"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                @s1nka
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:kakh.sinauridze@gmail.com"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                kakh.sinauridze@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <footer className="mt-14 text-xs text-muted-foreground/60">
          <p>© 2026 Kakhaber Sinauridze (s1nka) · built &amp; shipped from this repo</p>
        </footer>
      </article>
    </main>
  );
}
