// libraries
import type { Metadata, Viewport } from "next"

// fonts
import { Inter, JetBrains_Mono } from 'next/font/google'

// css
import "./globals.css"

export const metadata: Metadata = {
	title: "Figma Extractify — From Figma to Code, Automatically",
	description: "Extract design tokens, build components, and link back to Figma Dev Mode. Fully typed, props-driven React components with visual review and accessibility auditing — all automated.",
	keywords: ["Figma", "React", "Code generation", "Design tokens", "Components", "Design systems", "AI", "Automation", "Visual review", "Accessibility"],
	authors: [{ name: "99x" }],
	creator: "99x",
	manifest: '/manifest.json',
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://figma-extractify-website.vercel.app",
		title: "Figma Extractify — From Figma to Code, Automatically",
		description: "Extract design tokens, build components, and link back to Figma Dev Mode with fully typed React components.",
		siteName: "Figma Extractify",
		images: [
			{
				url: "https://figma-extractify-website.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Figma Extractify",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Figma Extractify — From Figma to Code, Automatically",
		description: "Extract design tokens and build components from Figma with full TypeScript support.",
		images: ["https://figma-extractify-website.vercel.app/og-image.jpg"],
		creator: "@99x",
	},
	alternates: {
		canonical: "https://figma-extractify-website.vercel.app",
	},
	icons: {
		icon: [
			{ url: '/icon.svg', type: 'image/svg+xml' },
			{ url: '/icon.png', type: 'image/png', sizes: '32x32' },
			{ url: '/icon.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicon.ico', sizes: 'any' }
		],
		apple: [
			{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
		]
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
	},
	category: "Technology",
}

const inter = Inter({
	weight: ['400', '500', '600', '700', '800', '900'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap'
})

const jetbrains_mono = JetBrains_Mono({
	weight: ['400', '500', '600'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap'
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${jetbrains_mono.variable} dark`}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="theme-color" content="#0F1729" />

				<meta
					name='apple-mobile-web-app-title'
					content='Figma Extractify'
				/>

				<link
					rel='icon'
					type='image/svg+xml'
					href='/icon.svg'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icon.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/icon.png'
				/>

				<link
					rel='shortcut icon'
					href='/favicon.ico'
				/>

				<link
					rel='apple-touch-icon'
					href='/apple-icon.png'
					sizes='180x180'
				/>

				<link
					rel='manifest'
					href='/manifest.json'
				/>

			</head>

			<body className="min-h-screen antialiased">
				{children}
			</body>

		</html>
	)
}
