'use client';

import { useState } from 'react';
import { Search, RefreshCw, ArrowRight, ArrowDown, BookOpen, Maximize2, X, FileText, CheckCircle2, Library } from 'lucide-react';

export default function ReviewEbookContent() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setExpandedImage(src);
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  return (
    <>
      {/* Academic Header */}
      <section className="section-padding container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-academic-primary/10 border border-academic-primary/20 mb-6">
            <Library size={16} className="text-academic-primary" />
            <span className="text-academic-primary text-sm font-semibold">Layanan Akademik Premium</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfolio <span className="text-gradient-academic">Translate E-book</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Review e-book dan terjemahan profesional dengan pendekatan Cendekia. Temukan chapter yang pas untuk kamu kutip tanpa harus baca seluruh isi buku.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
            <span className="text-academic-primary font-bold">Cendekia Bisa Bantu Kamu 👇🏻</span>
          </div>
        </div>
      </section>

      {/* Section 1: Sumber Buku Babon */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sumber <span className="text-gradient-academic">Buku Babon</span>
            </h2>
            <p className="text-text-muted">Kamu harus cari sumber dari buku babon kayak gini?</p>
          </div>

          <div className="text-center mb-20">
            {/* Review 5 */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <span className="text-red-400 text-sm font-semibold">CHALLENGE</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Buku Babon Kompleks</h3>
              <p className="text-text-muted mb-8">Contoh buku referensi utama yang sulit dipahami dan dikutip</p>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                <img
                  src="/images/review-ebook/review-5.jpg"
                  alt="Buku babon kompleks"
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => openImage("/images/review-ebook/review-5.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Cendekia Bisa Bantu Kamu */}
          <div className="glass rounded-[3rem] p-8 border-white/5">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Cendekia bisa bantu kamu:</h3>
              <h1 className="text-1xl font-semibold mb-2">Temukan chapter yang pas untuk  <span className="text-gradient-academic">kamu kutip</span></h1>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-bold">❌</span>
                  </div>
                  <span className="text-text-muted">Gak pusing baca seluruh isi buku</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <span className="text-green-400 font-bold">✅</span>
                  </div>
                  <span className="text-text-muted">Bukan translate mentah-mentah; kalimat terjemahan mudah dipahami</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Review E-book dan Terjemahan */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Review <span className="text-gradient-academic">E-book & Terjemahan</span>
            </h2>
            <p className="text-text-muted">Bukan translate mentah-mentah; kalimat terjemahan mudah dipahami</p>
          </div>

          <div className="space-y-16">
            
            {/* Review 1 - Susun ke Bawah */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20">
                    <span className="text-academic-primary text-sm font-semibold">REVIEW 1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Analisis Konten E-book</h3>
                <p className="text-text-muted mb-8">Review mendalam untuk memahami struktur dan konten buku</p>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/review-ebook/review-1.jpg"
                    alt="Analisis konten e-book"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/review-ebook/review-1.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Review 3 - Susun ke Bawah */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20">
                    <span className="text-academic-primary text-sm font-semibold">REVIEW 3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Struktur dan Organisasi</h3>
                <p className="text-text-muted mb-8">Identifikasi struktur buku dan organisasi chapter</p>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/review-ebook/review-3.jpg"
                    alt="Struktur dan organisasi buku"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/review-ebook/review-3.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Review 4 - Susun ke Bawah */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20">
                    <span className="text-academic-primary text-sm font-semibold">REVIEW 4</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Kutipan dan Referensi</h3>
                <p className="text-text-muted mb-8">Ekstraksi kutipan relevan dan format referensi</p>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/review-ebook/review-4.jpg"
                    alt="Kutipan dan referensi"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/review-ebook/review-4.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proses <span className="text-gradient-academic">Review E-book</span>
          </h2>
          <p className="text-text-muted">Metode sistematis untuk review dan terjemahan e-book profesional</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <Search size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Identifikasi Chapter</h3>
            <p className="text-text-muted">Temukan chapter yang relevan untuk penelitian kamu</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <RefreshCw size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">2. Review & Terjemahan</h3>
            <p className="text-text-muted">Review konten dan terjemahan natural yang mudah dipahami</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Kutipan Relevan</h3>
            <p className="text-text-muted">Ekstraksi kutipan penting untuk referensi penelitian</p>
          </div>
        </div>
      </section>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 p-2 rounded-lg glass border-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            <img
              src={expandedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
