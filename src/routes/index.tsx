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
    sameAs: ["https://github.com/Sinka48"],
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
      "Product Design",
      "UX/UI",
      "Interaction Design",
      "Design Systems",
      "Prototyping",
      "Figma",
      "Visual Design",
    ],
  },
  {
    label: "Development",
    items: ["SwiftUI", "iOS", "React", "TypeScript", "AI-assisted development"],
  },
  {
    label: "Other",
    items: ["AI", "Music Production", "Content Automation"],
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
          "Product Designer focused on UX/UI, product design, and design systems. I design, build, and ship native iOS apps with SwiftUI — Annoto, MindWhisper AI, Decision Engine AI, Brain Snacks — all live on the App Store.",
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
      <span className="md-token" aria-hidden="true">
        ##{" "}
      </span>
      {children}
    </h2>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 font-mono text-foreground">
      <article className="mx-auto w-full max-w-2xl">
        <p className="md-token text-sm">README.md</p>

        <header>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">
            <span className="md-token" aria-hidden="true">
              #{" "}
            </span>
            s1nka
          </h1>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Kakhaber Sinauridze <span className="md-token">·</span> Product Designer{" "}
            <span className="md-token">·</span> designs it, builds it, ships it
          </p>
        </header>

        <hr className="my-8 border-border" />

        <section aria-labelledby="about">
          <SectionHeading id="about">About Me</SectionHeading>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            <span className="md-strong">
              **Product Designer specializing in UX/UI, product design, design systems, and native
              iOS applications.**
            </span>{" "}
            I combine strong visual design with user-centered thinking — and I don't stop at
            mockups: I <span className="md-em">*design, build, and ship*</span> my own apps to the
            App Store. I also explore <span className="md-em">*programming*</span>,{" "}
            <span className="md-em">*AI*</span>, and{" "}
            <span className="md-em">*music production*</span>, which gives me a broader perspective
            on building and shaping digital products.
          </p>
        </section>

        <section aria-labelledby="skills" className="mt-12">
          <SectionHeading id="skills">Skills</SectionHeading>
          <ul className="mt-4 space-y-3 text-[15px] leading-7 text-muted-foreground">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <p className="md-strong">
                  <span className="md-token" aria-hidden="true">
                    ###{" "}
                  </span>
                  {group.label}
                </p>
                <p>
                  {group.items.map((item, i) => (
                    <span key={item}>
                      {i > 0 && <span className="md-token"> · </span>}
                      {item}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="projects" className="mt-12">
          <SectionHeading id="projects">Selected Projects</SectionHeading>
          <p className="mt-3 text-[13px] text-muted-foreground/80">
            All designed, built, and shipped by me — live on the App Store.{" "}
            <Link
              to="/projects"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              Full case studies →
            </Link>
          </p>
          <ul className="mt-4 space-y-6 text-[15px] leading-7">
            {projects.map((project) => (
              <li key={project.slug}>
                <span className="md-token" aria-hidden="true">
                  -{" "}
                </span>
                <Link
                  to="/projects/$projectId"
                  params={{ projectId: project.slug }}
                  className="md-strong underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  [{project.name}]
                </Link>
                <span className="block pl-5 text-muted-foreground">
                  {project.tagline}. {project.overview.split(". ")[0]}.
                </span>
                <span className="block pl-5 text-[13px] text-muted-foreground/80">
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
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact" className="mt-12">
          <SectionHeading id="contact">Contact</SectionHeading>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-muted-foreground">
            <li>
              <span className="md-token" aria-hidden="true">
                -{" "}
              </span>
              GitHub:{" "}
              <a
                href="https://github.com/Sinka48"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                github.com/Sinka48
              </a>
            </li>
            <li>
              <span className="md-token" aria-hidden="true">
                -{" "}
              </span>
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
          <p>
            <span className="md-token">&lt;!-- </span>© 2026 Kakhaber Sinauridze (s1nka) · built
            &amp; shipped from this repo
            <span className="md-token"> --&gt;</span>
          </p>
        </footer>
      </article>
    </main>
  );
}
