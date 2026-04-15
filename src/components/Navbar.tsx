"use client"

import { useState } from "react"
import { Github, Menu, X, MessageSquareCode } from "lucide-react"

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Demo", href: "#demo" },
	{ label: "Install", href: "#install" },
	{ label: "Contribute", href: "#contribute" },
]

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<nav className="w-full bg-background border-b border-border">
			<div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
				<a href="#" className="flex items-center gap-2 group">
					<div className="size-8 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30 group-hover:bg-accent/30 transition-colors">
						<span className="text-accent p-0.5">
							<MessageSquareCode strokeWidth={1} className="w-full h-full" />
						</span>
					</div>
					<span className="font-semibold text-foreground text-sm hidden sm:block">
						Figma Extractify
					</span>
				</a>

				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-muted hover:text-foreground transition-colors"
						>
							{link.label}
						</a>
					))}
					<a
						href="https://github.com/99x/figma-extractify"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
					>
						<Github className="size-4" />
						GitHub
					</a>
				</div>

				<button
					className="md:hidden text-foreground"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					{mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
				</button>
			</div>

			{mobileOpen && (
				<div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setMobileOpen(false)}
							className="block py-3 text-sm text-muted hover:text-foreground transition-colors"
						>
							{link.label}
						</a>
					))}
					<a
						href="https://github.com/99x/figma-extractify"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-2 inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full"
					>
						<Github className="size-4" />
						GitHub
					</a>
				</div>
			)}
		</nav>
	)
}
