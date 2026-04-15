"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

const steps = [
	{
		step: "1",
		title: "Clone the repo",
		command: "git clone https://github.com/99x/figma-extractify.git",
	},
	{
		step: "2",
		title: "Open the boilerplate",
		command: "cd figma-extractify/boilerplate",
	},
	{
		step: "3",
		title: "Copy extractify into the project",
		command: "cp -r ../figma-extractify .",
	},
	{
		step: "4",
		title: "Run the installer",
		command: "bash figma-extractify/install.sh",
	},
	{
		step: "5",
		title: "Add your Figma URLs and start",
		command: "/extractify-setup",
	},
]

function CopyButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false)

	const copy = () => {
		navigator.clipboard.writeText(text)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<button
			onClick={copy}
			className="text-muted-foreground hover:text-accent transition-colors shrink-0"
			aria-label="Copy to clipboard"
		>
			{copied ? (
				<Check className="size-4 text-green-400" />
			) : (
				<Copy className="size-4" />
			)}
		</button>
	)
}

export default function Install() {
	return (
		<section id="install" className="relative py-32 px-6">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-16">
					<p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
						Get started
					</p>
					<h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
						Up and running in 5 steps
					</h2>
					<p className="text-muted text-lg max-w-xl mx-auto">
						Clone, install, paste your Figma URLs, and start extracting.
					</p>
				</div>

				<div className="space-y-4">
					{steps.map((s) => (
						<div
							key={s.step}
							className="group relative flex items-start gap-5 p-5 rounded-2xl border border-border bg-card/50 hover:bg-card-hover transition-all"
						>
							<div className="shrink-0 size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm">
								{s.step}
							</div>

							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium text-foreground mb-2">
									{s.title}
								</p>
								<div className="flex items-center gap-3 bg-background/50 rounded-lg px-4 py-2.5 border border-border/50">
									<Terminal className="size-3.5 text-muted-foreground shrink-0" />
									<code className="text-xs font-mono text-muted flex-1 overflow-x-auto whitespace-nowrap">
										{s.command}
									</code>
									<CopyButton text={s.command} />
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 p-5 rounded-2xl border border-accent/20 bg-accent/5">
					<p className="text-sm text-muted leading-relaxed">
						<strong className="text-foreground">Existing project?</strong> Just
						copy the <code className="text-accent">figma-extractify/</code>{" "}
						folder into your project root and run{" "}
						<code className="text-accent">bash figma-extractify/install.sh</code>.
						It copies everything it needs without touching your source code.
					</p>
				</div>
			</div>
		</section>
	)
}
