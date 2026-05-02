import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PortfolioReviewContent from "@/components/PortfolioReviewContent";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: 'Portfolio Review Artikel Jurnal - Cendekia Link',
  description: 'Portfolio layanan review artikel jurnal profesional dengan matriks literature review dan identifikasi research gap.',
};

export default function PortfolioReviewPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <PortfolioReviewContent />

      <Contact />
      <Footer />
    </main>
  );
}
