export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  platform: string;
  stack: string;
  contribution: string;
  status: string;
  appStoreUrl: string | null;
  overview: string;
  design: string;
  build: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "brain-snacks",
    name: "Brain Snacks",
    tagline: "Bite-size learning feed for iOS",
    role: "Solo creator — idea, design, code, release",
    platform: "iOS",
    stack: "SwiftUI",
    contribution: "Product design, UX/UI, development, App Store release",
    status: "Live on the App Store (v1.0.6)",
    appStoreUrl: "https://apps.apple.com/app/id6773241217",
    overview:
      "Brain Snacks is a calm, scrollable feed of things worth knowing — short, well-written learning cards you can graze on in spare minutes.",
    design:
      "Deliberately distraction-free: a vertical scroll feed and nothing else. No gamification, no streaks — just good content, nicely typeset.",
    build:
      "Native SwiftUI with server-side content generation, so new snacks appear without app updates and no API keys ship in the client.",
    outcome: "Live on the App Store at v1.0.6.",
  },
  {
    slug: "mindwhisper",
    name: "MindWhisper AI",
    tagline: "Voice-journaling app for mental wellbeing",
    role: "Solo creator — idea, design, code, release",
    platform: "iOS",
    stack: "React Native (Expo), Supabase Edge Functions",
    contribution: "Product design, UX/UI, development, backend proxy, App Store release",
    status: "Live on the App Store (v1.1.3)",
    appStoreUrl: "https://apps.apple.com/app/id6755791263",
    overview:
      "MindWhisper lets you journal by talking. Recordings become transcribed entries with AI-powered reflections that help you notice patterns in how you feel.",
    design:
      "Calm, low-friction journaling: one tap to record, gentle visuals, and reflections presented as supportive notes rather than clinical analysis.",
    build:
      "React Native with Expo. All AI calls go through a server-side Supabase Edge Function proxy, so no API keys ship inside the app. Daily reminders use local notifications.",
    outcome:
      "Live on the App Store and iterating — v1.1.3 added Daily Reminders. Fully automated build and submission pipeline with EAS.",
  },
  {
    slug: "annoto",
    name: "Annoto",
    tagline: "iOS screenshot annotation app",
    role: "Solo creator — idea, design, code, release",
    platform: "iOS",
    stack: "SwiftUI, SwiftData",
    contribution: "Product design, UX/UI, development, App Store release",
    status: "Live on the App Store (v1.0.2)",
    appStoreUrl: "https://apps.apple.com/app/id6774044198",
    overview:
      "Annoto makes annotating screenshots fast. It includes a Share Extension, so you can mark up a screenshot straight from the iOS share sheet without opening the app first.",
    design:
      "A single-screen editor with a minimal tool palette — the screenshot stays the hero, tools stay out of the way. Version 1.0.1 shipped a full visual redesign of every screen.",
    build:
      "Built end-to-end in SwiftUI with SwiftData for persistence, plus a separate Share Extension target. Release signing and App Store submissions are automated through the App Store Connect API.",
    outcome:
      "Three releases shipped (1.0.0 → 1.0.2), each adding real functionality — most recently copying text out of screenshots. Live on the App Store.",
  },
  {
    slug: "decision-engine-ai",
    name: "Decision Engine AI",
    tagline: "AI-assisted decision making, native on iOS",
    role: "Solo creator — idea, design, code, release",
    platform: "iOS",
    stack: "SwiftUI, Supabase Edge Functions",
    contribution: "Product design, UX/UI, development, CI/CD pipeline, App Store release",
    status: "Live on the App Store (v1.0.5)",
    appStoreUrl: "https://apps.apple.com/app/id6760727264",
    overview:
      "Decision Engine AI helps people make better decisions: describe the choice you're facing and get a structured AI analysis of options, trade-offs, and a recommendation.",
    design:
      "Native SwiftUI interface that turns a fuzzy question into a structured decision — clear inputs, readable analysis, no chat noise.",
    build:
      "SwiftUI app backed by a Supabase Edge Function AI proxy. Shipped with a fully automated CI/CD pipeline — GitHub Actions on a self-hosted runner with Fastlane handling build, signing, and App Store submission.",
    outcome:
      "Live on the App Store at v1.0.5, with releases flowing through the automated pipeline.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
