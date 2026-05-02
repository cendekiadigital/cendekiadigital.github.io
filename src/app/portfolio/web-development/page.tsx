import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata = {
  title: 'Portfolio Web Development - Cendekia Link',
  description: 'Daftar proyek pembuatan website dan aplikasi custom oleh Cendekia Link.',
};

export default function WebPortfolioPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Header */}
      <section className="section-padding container">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Web & App <br />
            <span className="text-gradient-tech">Portfolio</span>
          </h1>
        </div>
      </section>

      <PortfolioContent />

      <Contact />
      <Footer />
    </main>
  );
}
