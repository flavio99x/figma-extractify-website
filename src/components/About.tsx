"use client";

import {
  Palette,
  Type,
  LayoutGrid,
  Eye,
  Accessibility,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design Tokens",
    description:
      "Extracts your colors, spacing, and variables straight from Figma into CSS custom properties.",
  },
  {
    icon: Type,
    title: "Typography System",
    description:
      "Pulls your font families, sizes, weights, and line heights into a scalable type scale.",
  },
  {
    icon: LayoutGrid,
    title: "Component Builder",
    description:
      "Run a single command and get a fully typed, props-driven React component from any Figma frame.",
  },
  {
    icon: Eye,
    title: "Visual Review",
    description:
      "Playwright screenshots your component and pixel-diffs it against the Figma design. 95%+ to pass.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Audit",
    description:
      "axe-core scans every component for WCAG violations. Zero critical issues allowed.",
  },
  {
    icon: Link2,
    title: "Code Connect",
    description:
      "Links finished components back to their Figma node so your team sees real code in Dev Mode.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            What is it
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Your Figma &rarr; Code pipeline
          </h2>
          <p className="text-muted text-lg max-w-4xl mx-auto leading-relaxed">
            Figma Extractify is an AI skill system. Point it at any Figma file
            and extract your design tokens, build components with automated
            visual review, and link everything back to Figma Dev Mode.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 glow"
            >
              <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="size-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* IDE support bar */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6">Works with</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted">
            {[
              "Claude Code",
              "Cowork",
              "Cursor",
              "Windsurf",
              "GitHub Copilot",
            ].map((tool) => (
              <div
                key={tool}
                className="px-5 py-2.5 rounded-full border border-border bg-card/30 hover:bg-card-hover hover:text-foreground transition-all"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
