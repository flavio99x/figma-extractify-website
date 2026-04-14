import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma Extractify — From Figma to code, automatically",
  description:
    "Point it at your Figma file and get fully typed, props-driven React components with your own design tokens, visual review, and accessibility auditing — automatically.",
  openGraph: {
    title: "Figma Extractify",
    description:
      "From Figma to code, automatically. Extract design tokens, build components, link back to Dev Mode.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
