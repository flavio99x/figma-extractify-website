"use client";

import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="demo" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            See it in action
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Watch the walkthrough
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From Figma file to production-ready components in minutes.
          </p>
        </div>

        {/* Video embed container */}
        <div className="relative rounded-2xl overflow-hidden border border-border glow">
          <div className="aspect-video bg-card/80 flex items-center justify-center relative">
            {/* Replace the YouTube video ID below with your actual video ID */}
            {/* Example: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Figma Extractify Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Uncomment this block and remove the iframe above if you want a placeholder instead */}
            {/*
            <div className="text-center">
              <div className="size-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4 hover:bg-accent/30 transition-colors cursor-pointer">
                <Play className="size-8 text-accent ml-1" />
              </div>
              <p className="text-muted text-sm">Video coming soon</p>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
