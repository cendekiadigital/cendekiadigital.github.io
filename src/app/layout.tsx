import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";


export const metadata: Metadata = {
  title: "Cendekia.link | Solusi Digital & Partner Akademik",
  description: "Layanan IT/Web Development Profesional dan Jasa Akademik Terpercaya. Bangun masa depan digital dan akademik Anda bersama kami.",
  keywords: "Web Development, Jasa IT, Jasa Akademik, Parafrase, Humanize AI, Landing Page, Scopus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <div className="bg-glow">
          <div className="glow-1"></div>
          <div className="glow-2"></div>
        </div>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
