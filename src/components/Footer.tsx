import { Github } from "lucide-react"

export default function Footer() {
	return (
		<footer className="border-t border-border py-12 px-6 bg-footer">
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
				<div className="flex items-center gap-3">
					<div className="size-7 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
						<span className="text-accent font-bold text-xs">FE</span>
					</div>
					<p className="text-sm text-muted">
						&copy; {new Date().getFullYear()}{" "}
						<a
							href="https://99x.io"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground hover:text-accent transition-colors"
						>
							99x
						</a>
						. MIT License.
					</p>
				</div>

				<div className="flex items-center gap-6">
					<a
						href="https://github.com/99x/figma-extractify"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted hover:text-foreground transition-colors"
						aria-label="GitHub"
					>
						<Github className="size-5" />
					</a>
				</div>
			</div>
		</footer>
	)
}
