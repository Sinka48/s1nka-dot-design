import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { getProject } from "../../lib/projects";

const SITE_URL = "https://s1nka.com";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData: project }) => {
    if (!project) return {};
    const title = `${project.name} — ${project.tagline} · s1nka`;
    const description = `${project.overview} Role: ${project.role}. Stack: ${project.stack}. ${project.status}.`;
    const url = `${SITE_URL}/projects/${project.slug}`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      operatingSystem: "iOS",
      applicationCategory: "MobileApplication",
      description: `${project.tagline}. ${project.overview}`,
      url,
      ...(project.appStoreUrl ? { installUrl: project.appStoreUrl } : {}),
      author: {
        "@type": "Person",
        name: "Kakhaber Sinauridze",
        alternateName: "s1nka",
        url: SITE_URL,
      },
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  component: ProjectPage,
});

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <span className="font-semibold text-foreground">{label}:</span> {value}
    </li>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{children}</p>
    </section>
  );
}

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background px-6 py-20 font-mono text-foreground">
      <article className="w-full max-w-2xl">
        <p className="md-token text-sm">
          <Link to="/" className="hover:text-foreground">
            s1nka.com
          </Link>{" "}
          /{" "}
          <Link to="/projects" className="hover:text-foreground">
            projects
          </Link>{" "}
          / {project.slug}
        </p>

        <header>
          <h1 className="mt-6 flex items-center gap-4 text-3xl font-semibold tracking-tight">
            <img
              src={`/images/${project.slug}-icon.webp`}
              alt={`${project.name} app icon`}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-xl border border-border"
            />
            {project.name}
          </h1>
          <p className="mt-3 text-[15px] text-muted-foreground">{project.tagline}</p>
        </header>

        <hr className="my-8 border-border" />

        <ul className="space-y-2 text-[15px] leading-7 text-muted-foreground">
          <Meta label="Role" value={project.role} />
          <Meta label="Platform" value={project.platform} />
          <Meta label="Stack" value={project.stack} />
          <Meta label="Contribution" value={project.contribution} />
          <Meta label="Status" value={project.status} />
        </ul>

        <Section title="Overview">{project.overview}</Section>
        <Section title="Design">{project.design}</Section>
        <Section title="Build">{project.build}</Section>
        <Section title="Outcome">{project.outcome}</Section>

        {project.appStoreUrl && (
          <p className="mt-10 text-[15px]">
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              View on the App Store →
            </a>
          </p>
        )}

        <p className="mt-14 text-xs text-muted-foreground/60">
          <Link
            to="/projects"
            className="underline decoration-border underline-offset-4 hover:text-foreground"
          >
            ← more projects
          </Link>
        </p>
      </article>
    </main>
  );
}
