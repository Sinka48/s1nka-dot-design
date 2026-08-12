import { Link, createFileRoute } from "@tanstack/react-router";

import { projects } from "../../lib/projects";

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

function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 font-mono text-foreground">
      <article className="mx-auto w-full max-w-2xl">
        <p className="md-token text-sm">
          <Link to="/" className="hover:text-foreground">
            s1nka.com
          </Link>{" "}
          / projects
        </p>

        <header>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">
            <span className="md-token" aria-hidden="true">
              #{" "}
            </span>
            Projects
          </h1>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Designed, built, and shipped — all live on the App Store.
          </p>
        </header>

        <hr className="my-8 border-border" />

        <ul className="space-y-10">
          {projects.map((project) => (
            <li key={project.slug}>
              <h2 className="flex items-center gap-3 text-lg font-semibold">
                <span className="md-token" aria-hidden="true">
                  ##{" "}
                </span>
                <img
                  src={`/images/${project.slug}-icon.webp`}
                  alt={`${project.name} app icon`}
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
              </h2>
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

        <p className="mt-14 text-xs text-muted-foreground/60">
          <span className="md-token">&lt;!-- </span>
          <Link to="/" className="hover:text-foreground">
            back to README.md
          </Link>
          <span className="md-token"> --&gt;</span>
        </p>
      </article>
    </main>
  );
}
