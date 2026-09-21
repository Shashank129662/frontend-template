import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: { default: "Next.js Design-to-Code Template", template: "%s | Next.js Template" },
  description: "A reusable Next.js, TypeScript, and Tailwind template for design-to-code implementation.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: { type: "website", title: "Next.js Design-to-Code Template", description: "Replace this generic metadata before production." },
  twitter: { card: "summary", title: "Next.js Design-to-Code Template", description: "Replace this generic metadata before production." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body className="min-w-80 bg-white font-sans text-neutral-900 antialiased">{children}</body></html>;
}
