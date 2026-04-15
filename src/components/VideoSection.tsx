"use client"

export default function VideoSection() {
	return (
		<section id="demo" className="relative py-32 px-6">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

			<div className="relative max-w-6xl mx-auto">
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

				<div className="relative rounded-sm overflow-hidden border border-border glow">
					<div className="aspect-video bg-card/80 flex items-center justify-center relative">
						<iframe
							className="absolute inset-0 w-full h-full"
							src="https://www.youtube.com/embed/aFh6Dj1f5pQ"
							title="Figma Extractify Walkthrough"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
