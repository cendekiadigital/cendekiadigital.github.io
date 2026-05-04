'use client';

import { useState } from 'react';
import { Search, RefreshCw, ArrowRight, ArrowDown, BookOpen, Maximize2, X, FileText, CheckCircle2 } from 'lucide-react';

export default function ProofreadingContent() {
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
            <FileText size={16} className="text-academic-primary" />
            <span className="text-academic-primary text-sm font-semibold">Layanan Akademik Premium</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfolio <span className="text-gradient-academic">Proofreading</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Koreksi ejaan, tata bahasa, dan logika kalimat secara profesional. Penyesuaian format dokumen akademik untuk hasil yang sempurna.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
            <span className="text-academic-primary font-bold">Layanan Proofreading Lengkap 👇🏻</span>
          </div>
        </div>
      </section>

      {/* Section 1: Koreksi Ejaan, Tata Bahasa, dan Logika Kalimat */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Koreksi <span className="text-gradient-academic">Ejaan & Tata Bahasa</span>
            </h2>
            <p className="text-text-muted">Perbaikan menyeluruh untuk ejaan, tata bahasa, dan logika kalimat</p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Proof Text 1 & 6 - Persamaan */}
            
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Proof Text 1 */}
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH </span>
                  </div>
                  
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                  <img
                    src="/images/proofreading/proof-text-1.jpg"
                    alt="Contoh koreksi ejaan dan tata bahasa"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/proofreading/proof-text-1.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Proof Text 6 */}
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH </span>
                  </div>
                 
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                  <img
                    src="/images/proofreading/proof-text-6.jpg"
                    alt="Contoh perbaikan logika kalimat"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/proofreading/proof-text-6.jpg")}
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

      {/* Section 2: Penyesuaian Format */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Penyesuaian <span className="text-gradient-academic">Format Dokumen</span>
            </h2>
            <p className="text-text-muted">Penyesuaian paragraf, nomor halaman, spasi, dan tabel</p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Proof Text 2 & 3 - Persamaan */}
            
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Proof Text 2 */}
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH </span>
                  </div>
                  
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                  <img
                    src="/images/proofreading/proof-text-2.jpg"
                    alt="Contoh penyesuaian paragraf dan spasi"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/proofreading/proof-text-2.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Proof Text 3 */}
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH </span>
                  </div>
                 
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                  <img
                    src="/images/proofreading/proof-text-3.jpg"
                    alt="Contoh penyesuaian nomor halaman dan tabel"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/proofreading/proof-text-3.jpg")}
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

      {/* Section 3: Daftar Pustaka Otomatis */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daftar Pustaka <span className="text-gradient-academic">Otomatis</span>
            </h2>
            <p className="text-text-muted">Pembuatan daftar pustaka otomatis dengan format standar</p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Proof Text 4 & 5 - Persamaan */}
            
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Proof Text 4 */}
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH </span>
                  </div>
                  
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                  <img
                    src="/images/proofreading/proof-text-4.jpg"
                    alt="Contoh format referensi APA"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/proofreading/proof-text-4.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Proof Text 5 */}
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH </span>
                  </div>
                 
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                  <img
                    src="/images/proofreading/proof-text-5.jpg"
                    alt="Contoh format referensi MLA"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/proofreading/proof-text-5.jpg")}
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
            Proses <span className="text-gradient-academic">Proofreading</span>
          </h2>
          <p className="text-text-muted">Metode sistematis untuk koreksi dokumen akademik yang profesional</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <Search size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Analisis Dokumen</h3>
            <p className="text-text-muted">Identifikasi jenis kesalahan, format yang diperlukan, dan standar akademik</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <RefreshCw size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">2. Koreksi Menyeluruh</h3>
            <p className="text-text-muted">Perbaikan ejaan, tata bahasa, format, dan struktur kalimat secara detail</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Quality Check</h3>
            <p className="text-text-muted">Review final untuk memastikan semua kesalahan telah diperbaiki dengan sempurna</p>
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
