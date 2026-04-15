"use client";

import { ArrowDown, Github, Sparkles } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      <div className="absolute inset-0">

        <div className='absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-background to-transparent z-5' />

        <FloatingPaths position={1} />
        <FloatingPaths position={-5} />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <Sparkles className="size-3.5 text-accent" />
          <span className="text-xs font-medium text-muted">
            Open source &middot; MIT licensed
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
          <span className="block">From Figma</span>
          <span className="block gradient-text">to code</span>
          <span className="block text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
            Automatically
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          Point it at your Figma file and get fully typed, props-driven React
          components with your own design tokens, visual review, and
          accessibility auditing.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#install"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-background font-semibold rounded-full hover:bg-accent-foreground transition-all duration-200 text-sm shadow-lg shadow-accent/25"
          >
            Get started
          </a>
          <a
            href="https://github.com/99x/figma-extractify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-card border border-border text-foreground font-medium rounded-full hover:bg-card-hover transition-all duration-200 text-sm"
          >
            <Github className="size-4" />
            View on GitHub
          </a>
        </div>

        {/* Terminal preview */}
        <div className="code-block text-left max-w-3xl mx-auto overflow-hidden mb-12">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="size-3 rounded-full bg-red-500/60" />
            <div className="size-3 rounded-full bg-yellow-500/60" />
            <div className="size-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              terminal
            </span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-accent">$</span> /extractify-setup
            </p>
            <p className="mt-3 text-muted-foreground text-xs">
              Reading _docs/figma-paths.yaml...
            </p>
            <div className="mt-3 space-y-1.5 text-xs">
              <p>
                <span className="text-green-400">&#10003;</span>{" "}
                <span className="text-foreground">Colors</span>{" "}
                <span className="text-muted-foreground">
                  &mdash; your palette &rarr; --color-* variables
                </span>
              </p>
              <p>
                <span className="text-green-400">&#10003;</span>{" "}
                <span className="text-foreground">Typography</span>{" "}
                <span className="text-muted-foreground">
                  &mdash; font families + text scale utilities
                </span>
              </p>
              <p>
                <span className="text-green-400">&#10003;</span>{" "}
                <span className="text-foreground">Grid</span>{" "}
                <span className="text-muted-foreground">
                  &mdash; breakpoints + container &rarr; CSS layout tokens
                </span>
              </p>
              <p>
                <span className="text-green-400">&#10003;</span>{" "}
                <span className="text-foreground">Icons</span>{" "}
                <span className="text-muted-foreground">
                  &mdash; your icon set &rarr; public/svg/ux/
                </span>
              </p>
              <p>
                <span className="text-green-400">&#10003;</span>{" "}
                <span className="text-foreground">Buttons</span>{" "}
                <span className="text-muted-foreground">
                  &mdash; variants &rarr; .button-* classes
                </span>
              </p>
              <p>
                <span className="text-green-400">&#10003;</span>{" "}
                <span className="text-foreground">Forms</span>{" "}
                <span className="text-muted-foreground">
                  &mdash; inputs, selects &rarr; form components
                </span>
              </p>
            </div>
            <p className="mt-4 text-xs text-green-400">
              Your design system is now in code.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-xs">Scroll to learn more</span>
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
