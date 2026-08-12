import { Link, createFileRoute } from "@tanstack/react-router";

import { projects, type Project } from "../../lib/projects";

const selectedProjects = projects.filter((p) => p.category === "selected");
const sideHustles = projects.filter((p) => p.category === "side-hustle");

const SITE_URL = "https://s1nka.com";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title: "Projects — s1nka" },
      {
        name: "description",
        content:
          "Selected projects by Kakhaber Sinauridze (s1nka) — native iOS apps designed, built, and shipped to the App Store: Annoto, MindWhisper AI, Decision Engine AI, Brain Snacks.",
      },
      { property: "og:title", content: "Projects — s1nka" },
      {
        property: "og:description",
        content: "Native iOS apps designed, built, and shipped to the App Store.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/projects` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
  }),
});

function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="mt-4 space-y-10">
      {items.map((project) => (
        <li key={project.slug}>
          <h3 className="flex items-center gap-3 text-[15px] font-semibold">
            <img
              src={`/images/${project.slug}-icon.webp`}
              alt={`${project.name} icon`}
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 shrink-0 rounded-lg border border-border"
            />
            <Link
              to="/projects/$projectId"
              params={{ projectId: project.slug }}
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {project.name}
            </Link>
            <span className="md-token text-[13px] font-normal">
              {project.kind === "app"
                ? "iOS app"
                : project.kind === "web"
                  ? "web app"
                  : "design system"}
            </span>
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
            {project.tagline}. {project.overview}
          </p>
          <p className="mt-2 text-[13px] text-muted-foreground/80">
            <span className="md-token">stack:</span> {project.stack}{" "}
            <span className="md-token">· status:</span> {project.status}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 font-mono text-foreground">
      <article className="w-full">
        <p className="md-token text-sm">
          <Link to="/" className="hover:text-foreground">
            s1nka.com
          </Link>{" "}
          / projects
        </p>

        <header>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Design systems, native iOS apps, and web products — all in production.
          </p>
        </header>

        <hr className="my-8 border-border" />

        <section aria-label="Selected projects">
          <h2 className="text-lg font-semibold">Selected</h2>
          <ProjectList items={selectedProjects} />
        </section>

        <section aria-label="Side hustles" className="mt-12">
          <h2 className="text-lg font-semibold">Side Hustles</h2>
          <ProjectList items={sideHustles} />
        </section>

        <p className="mt-14 text-xs text-muted-foreground/60">
          <Link
            to="/"
            className="underline decoration-border underline-offset-4 hover:text-foreground"
          >
            ← back to s1nka.com
          </Link>
        </p>
      </article>
    </main>
  );
}
