import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://s1nka.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "s1nka",
  jobTitle: "Product Designer",
  url: SITE_URL,
  sameAs: ["https://github.com/Sinka48"],
  knowsAbout: [
    "Product Design",
    "UX Design",
    "UI Design",
    "Design Systems",
    "Prototyping",
    "SwiftUI",
    "React",
    "AI-assisted Development",
    "Music Production",
  ],
};

const projects = [
  {
    name: "Annoto",
    href: "https://apps.apple.com/app/id6774044198",
    description:
      "iOS screenshot annotation app with a share extension. Designed and built end-to-end in SwiftUI; live on the App Store.",
  },
  {
    name: "MindWhisper",
    href: "https://apps.apple.com/app/id6755791263",
    description:
      "Voice-journaling app for mental wellbeing with AI-powered reflections. Live on the App Store.",
  },
  {
    name: "Decision Engine AI",
    href: "https://apps.apple.com/app/id6760727264",
    description:
      "Native SwiftUI app that helps people make better decisions with structured AI analysis. Live on the App Store.",
  },
  {
    name: "Brain Snacks",
    href: null,
    description:
      "Bite-size learning feed for iOS — a calm, scrollable stream of things worth knowing.",
  },
];

const skillGroups = [
  {
    label: "Design",
    items: ["Product design", "UX/UI", "Design systems", "Prototyping", "Figma"],
  },
  {
    label: "Build",
    items: ["SwiftUI", "React + TypeScript", "AI-assisted development"],
  },
  {
    label: "Beyond",
    items: ["Music production", "Content automation"],
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "s1nka — Product Designer" },
      {
        name: "description",
        content:
          "s1nka is a Product Designer who designs and ships real products — UX/UI, design systems, and native iOS apps live on the App Store.",
      },
      { property: "og:title", content: "s1nka — Product Designer" },
      {
        property: "og:description",
        content:
          "Product Designer who designs and ships real products — UX/UI, design systems, and native iOS apps live on the App Store.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "s1nka — Product Designer" },
      {
        name: "twitter:description",
        content:
          "Product Designer who designs and ships real products — UX/UI, design systems, and native iOS apps.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
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
            Product Designer <span className="md-token">·</span> designs it, builds it, ships it
          </p>
        </header>

        <hr className="my-8 border-border" />

        <section aria-labelledby="about">
          <SectionHeading id="about">About Me</SectionHeading>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            Product Designer focused on creating thoughtful, intuitive, and visually refined digital
            experiences. I work across <span className="md-em">*UX/UI*</span> and{" "}
            <span className="md-em">*product design*</span>, combining strong visual design with
            user-centered thinking — and I don't stop at mockups: I{" "}
            <span className="md-strong">**design, build, and ship**</span> my own native iOS apps to
            the App Store. I also explore <span className="md-strong">**programming**</span>,{" "}
            <span className="md-strong">**AI**</span>, and{" "}
            <span className="md-strong">**music production**</span>, which gives me a broader
            perspective on building and shaping digital products.
          </p>
        </section>

        <section aria-labelledby="skills" className="mt-12">
          <SectionHeading id="skills">Skills</SectionHeading>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-muted-foreground">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <span className="md-token" aria-hidden="true">
                  -{" "}
                </span>
                <span className="md-strong">**{group.label}:**</span> {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="projects" className="mt-12">
          <SectionHeading id="projects">Selected Projects</SectionHeading>
          <ul className="mt-4 space-y-5 text-[15px] leading-7">
            {projects.map((project) => (
              <li key={project.name}>
                <span className="md-token" aria-hidden="true">
                  -{" "}
                </span>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md-strong underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    [{project.name}]
                  </a>
                ) : (
                  <span className="md-strong">{project.name}</span>
                )}
                <span className="block pl-5 text-muted-foreground">{project.description}</span>
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

        <p className="mt-14 text-xs text-muted-foreground/60">
          <span className="md-token">&lt;!-- </span>end of file
          <span className="md-token"> --&gt;</span>
        </p>
      </article>
    </main>
  );
}
