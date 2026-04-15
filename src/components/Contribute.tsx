"use client";

import { Github, Star, GitFork, BookOpen } from "lucide-react";

const links = [
  {
    icon: Github,
    title: "Source Code",
    description: "Browse the codebase, open issues, and submit PRs.",
    href: "https://github.com/99x/figma-extractify",
    label: "View repository",
  },
  {
    icon: BookOpen,
    title: "Contributing Guide",
    description: "Read the guidelines before your first pull request.",
    href: "https://github.com/99x/figma-extractify/blob/main/CONTRIBUTING.md",
    label: "Read the guide",
  },
  {
    icon: Star,
    title: "Star the Repo",
    description: "Show your support and help others discover the project.",
    href: "https://github.com/99x/figma-extractify",
    label: "Leave a star",
  },
  {
    icon: GitFork,
    title: "Fork & Experiment",
    description: "Fork the repo and try your own ideas. We love experiments.",
    href: "https://github.com/99x/figma-extractify/fork",
    label: "Fork it",
  },
];

export default function Contribute() {
  return (
    <section id="contribute" className="relative pt-32 pb-64 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Open source
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Built by the community
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Figma Extractify is MIT licensed and open to contributions. Jump in.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 glow"
            >
              <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <link.icon className="size-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
              <p className="text-sm text-muted mb-4">{link.description}</p>
              <span className="text-sm font-medium text-accent group-hover:underline">
                {link.label} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
