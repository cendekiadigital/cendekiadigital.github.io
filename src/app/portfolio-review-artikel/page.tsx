import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { FileText, Search, FileSpreadsheet, Lightbulb, ArrowRight, BookOpen, Award, Users } from "lucide-react";

export const metadata = {
  title: 'Portfolio Review Artikel Jurnal - Cendekia Link',
  description: 'Portfolio layanan review artikel jurnal profesional dengan matriks literature review dan identifikasi research gap.',
};

export default function PortfolioReviewPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Academic Process */}
      <section className="container pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proses Review <span className="text-gradient-academic">Akademik</span>
          </h2>
          <p className="text-text-muted">Metode sistematis untuk memastikan kualitas artikel jurnal Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <Search size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Identifikasi Artikel</h3>
            <p className="text-text-muted">Pencarian sistematis artikel relevan dengan topik penelitian Anda dari jurnal bereputasi</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <FileText size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">2. Analisis Mendalam</h3>
            <p className="text-text-muted">Review komprehensif metodologi, struktur, dan kualitas artikel dengan kriteria akademik</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <Lightbulb size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Sintesis Gap</h3>
            <p className="text-text-muted">Identifikasi research gap dan rekomendasi untuk pengembangan penelitian lebih lanjut</p>
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="container pb-20">
        <div className="glass rounded-[3rem] p-12 border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Layanan Review <span className="text-gradient-academic">Komprehensif</span></h3>
                  <p className="text-text-muted leading-relaxed">
                    Kami menyediakan layanan review artikel jurnal yang mendalam dengan fokus pada kualitas akademik dan kontribusi ilmiah.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-academic-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText size={20} className="text-academic-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Artikel Relevan dengan Penelitian</h4>
                      <p className="text-text-muted text-sm">Menemukan artikel yang sesuai dengan topik, metodologi, dan keywords spesifik penelitian Anda</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-academic-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-academic-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Jurnal Bereputasi Terindeks</h4>
                      <p className="text-text-muted text-sm">Akses jurnal-jurnal terpercaya yang terindeks SINTA dan Scopus untuk kualitas referensi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-academic-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet size={20} className="text-academic-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Matriks Literature Review</h4>
                      <p className="text-text-muted text-sm">Analisis terstruktur dalam format Excel/spreadsheet untuk review sistematis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-academic-primary/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={20} className="text-academic-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Sintesis Research Gap</h4>
                      <p className="text-text-muted text-sm">Identifikasi peluang penelitian baru dan rekomendasi pengembangan kajian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] glass border-white/5">
                <img
                  src="/images/portfolio-review/hero-1.jpg"
                  alt="Review Artikel Jurnal Process"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20">
                  <Users size={16} className="text-academic-primary" />
                  <span className="text-academic-primary text-sm font-semibold">100+ Peneliti Terbantu</span>
                </div>
                <p className="text-text-muted text-sm">Telah membantu peneliti dari berbagai universitas dalam mempublikasikan artikel jurnal berkualitas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Tools */}
      <section className="container pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools & <span className="text-gradient-academic">Metodologi</span>
          </h2>
          <p className="text-text-muted">Pendekatan berbasis bukti dengan tools analitik terkini</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] glass border-white/5">
              <img
                src="/images/portfolio-review/matrix-dashboard.jpg"
                alt="Matriks Literature Review"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Matriks Literature Review <span className="text-gradient-academic">Interaktif</span></h3>
              <p className="text-text-muted leading-relaxed">
                Sistem matriks komprehensif untuk analisis literature review dengan visualisasi data yang mendukung pengambilan keputusan penelitian.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl border-white/5">
                <h4 className="font-bold text-academic-primary mb-2">Output Format</h4>
                <ul className="text-text-muted text-sm space-y-1">
                  <li>• Excel Spreadsheet</li>
                  <li>• CSV Export</li>
                  <li>• PDF Report</li>
                </ul>
              </div>
              <div className="glass p-4 rounded-xl border-white/5">
                <h4 className="font-bold text-academic-primary mb-2">Analysis Tools</h4>
                <ul className="text-text-muted text-sm space-y-1">
                  <li>• R Studio</li>
                  <li>• Python</li>
                  <li>• VOSviewer</li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/6282245848191?text=Halo%20Cendekia%20Link,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20Review%20Artikel%20Jurnal.%20Bisa%20dibantu?"
                target="_blank"
                className="btn btn-academic w-full md:w-auto"
              >
                Konsultasi Review Jurnal <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
