import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ParafraseContent from "@/components/ParafraseContent";

export const metadata = {
  title: 'Portfolio Parafrase AI Text - Cendekia Link',
  description: 'Portfolio layanan parafrase AI text untuk menghilangkan kesan robotik dan menyesuaikan konteks penelitian.',
};

export default function ParafrasePage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ParafraseContent />
      <Contact />
      <Footer />
    </main>
  );
}
