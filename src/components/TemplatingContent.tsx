'use client';

import { useState } from 'react';
import { Search, RefreshCw, ArrowRight, ArrowDown, BookOpen, Maximize2, X, FileText, CheckCircle2, Files } from 'lucide-react';

export default function TemplatingContent() {
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
            <Files size={16} className="text-academic-primary" />
            <span className="text-academic-primary text-sm font-semibold">Layanan Akademik Premium</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfolio <span className="text-gradient-academic">Templating Naskah</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Sesuaikan naskah kamu ke dalam format skripsi, tesis, disertasi, jurnal dengan pendekatan templating ala Cendekia untuk memperbesar peluang diterima.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
            <span className="text-academic-primary font-bold">Templating Ala Cendekia 👇🏻</span>
          </div>
        </div>
      </section>

      {/* Section 1: Sesuaikan Format */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sesuaikan <span className="text-gradient-academic">Format Naskah</span>
            </h2>
            <p className="text-text-muted">Penyesuaian format skripsi, tesis, disertasi, sesuai template jurnal</p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Templating 1 & 2 - Persamaan */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Sesuaikan naskah kamu ke dalam format skripsi, tesis, disertasi, jurnal</h3>
              <p className="text-text-muted">Berbagai contoh format standar untuk karya ilmiah</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Templating 1 */}
              <div className="flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH</span>
                  </div>
             
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/templating/templating-1.jpg"
                    alt="Contoh format skripsi"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/templating/templating-1.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Templating 2 */}
              <div className="flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/templating/templating-2.jpg"
                    alt="Contoh format jurnal"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/templating/templating-2.jpg")}
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

      {/* Section 2: Templating Ala Cendekia */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Templating <span className="text-gradient-academic">Ala Cendekia</span>
            </h2>
            <p className="text-text-muted">Pendekatan khusus untuk memperbesar peluang diterima jurnal</p>
          </div>

          <div className="space-y-8 mb-20">
            {/* Templating 3 & 4 - Persamaan */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Templating Ala Cendekia</h3>
              <p className="text-text-muted">Berbagai contoh pendekatan templating profesional</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Templating 3 */}
              <div className="flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH</span>
                  </div>
                 
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/templating/templating-3.jpg"
                    alt="Sekadar tempel ke format"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/templating/templating-3.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Templating 4 */}
              <div className="flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
                    <span className="text-academic-primary text-sm font-semibold">CONTOH</span>
                  </div>
                 
                </div>
                
                <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5">
                  <img
                    src="/images/templating/templating-4.jpg"
                    alt="Templating ala Cendekia"
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => openImage("/images/templating/templating-4.jpg")}
                    className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="glass rounded-[3rem] p-12 border-white/5">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Perbedaan <span className="text-gradient-academic">Templating</span></h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <span className="text-red-400 font-bold text-sm">❌</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Tempel ke Format</h4>
                      <p className="text-text-muted text-sm">Tidak sekadar tempel ke format tanpa analisis mendalam</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <span className="text-green-400 font-bold text-sm">✅</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Ala Cendekia</h4>
                      <p className="text-text-muted text-sm">Disesuaikan dengan alur penulisan paper terdahulu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <span className="text-green-400 font-bold text-sm">✅</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Peluang Diterima</h4>
                      <p className="text-text-muted text-sm">Memperbesar peluang diterima jurnal dengan pendekatan strategis</p>
                    </div>
                  </div>
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
            Proses <span className="text-gradient-academic">Templating</span>
          </h2>
          <p className="text-text-muted">Metode sistematis untuk templating naskah akademik yang profesional</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <Search size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Analisis Template</h3>
            <p className="text-text-muted">Identifikasi format yang diperlukan dan standar jurnal target</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <RefreshCw size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">2. Templating Ala Cendekia</h3>
            <p className="text-text-muted">Penyesuaian konten dengan alur penulisan dan strategi jurnal</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Finalisasi Format</h3>
            <p className="text-text-muted">Quality check untuk memastikan format sempurna dan siap submit</p>
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
