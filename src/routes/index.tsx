import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "s1nka — Product Designer" },
      {
        name: "description",
        content:
          "s1nka — Product Designer working across UX/UI, with interests in programming, AI, and music production.",
      },
      { property: "og:title", content: "s1nka — Product Designer" },
      {
        property: "og:description",
        content:
          "Product Designer creating thoughtful, intuitive, and visually refined digital experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 font-mono text-foreground">
      <article className="mx-auto w-full max-w-2xl">
        <p className="md-token text-sm">README.md</p>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          <span className="md-token"># </span>s1nka
        </h1>

        <hr className="my-8 border-border" />

        <h2 className="text-lg font-semibold">
          <span className="md-token">## </span>About Me
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
          Product Designer focused on creating thoughtful, intuitive, and visually refined
          digital experiences. I work across <span className="md-em">*UX/UI*</span> and{" "}
          <span className="md-em">*product design*</span>, combining strong visual design
          with user-centered thinking and an interest in technology. I also explore{" "}
          <span className="md-strong">**programming**</span>,{" "}
          <span className="md-strong">**AI**</span>, and{" "}
          <span className="md-strong">**music production**</span>, which gives me a broader
          perspective on building and shaping digital products.
        </p>

        <p className="mt-14 text-xs text-muted-foreground/60">
          <span className="md-token">&lt;!-- </span>end of file
          <span className="md-token"> --&gt;</span>
        </p>
      </article>
    </main>
  );
}
