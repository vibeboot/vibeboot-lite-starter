import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProBanner } from "@/components/pro-banner";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh font-sans antialiased">
        <ProBanner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
