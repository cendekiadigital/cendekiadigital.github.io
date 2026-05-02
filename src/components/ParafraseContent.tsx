'use client';

import { Search, RefreshCw, ArrowRight, ArrowDown, BookOpen, Maximize2, X } from "lucide-react";
import { useState } from "react";

export default function ParafraseContent() {
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
            <BookOpen size={16} className="text-academic-primary" />
            <span className="text-academic-primary text-sm font-semibold">Layanan Akademik Premium</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfolio <span className="text-gradient-academic">Parafrase AI</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            AI-generated kamu harus diparafrasa untuk menghilangkan kesan robotik. Parafrasa disesuaikan dengan konteks penelitian, termasuk menjaga tone tulisan agar tidak terlalu kaku.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-academic-primary/10 border border-academic-primary/20 mb-4">
            <span className="text-academic-primary font-bold">Check this out! 👇🏻</span>
          </div>
        </div>
      </section>

      {/* Before/After Demo */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* First Pair */}
          <div className="grid lg:grid-cols-3 gap-4 items-stretch">
            {/* Before 1 */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 mb-4">
                  <span className="text-red-400 text-sm font-semibold">BEFORE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">AI-Generated Text</h3>
                <p className="text-text-muted text-sm">Teks hasil AI dengan kesan robotik dan kaku</p>
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                <img
                  src="/images/parafrase/AI text 1.jpg"
                  alt="AI Generated Text Before Parafrase"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openImage("/images/parafrase/AI text 1.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Arrow Icon - Center */}
            <div className="flex items-center justify-center self-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-academic-primary/10 flex items-center justify-center">
                <ArrowDown size={24} className="text-academic-primary lg:hidden" />
                <ArrowRight size={32} className="text-academic-primary hidden lg:block" />
              </div>
            </div>

            {/* After 1 */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 mb-4">
                  <span className="text-green-400 text-sm font-semibold">AFTER</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Human-Parafrased Text</h3>
                <p className="text-text-muted text-sm">Teks yang sudah diparafrasa dengan natural dan akademis</p>
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                <img
                  src="/images/parafrase/AI refined 1.jpg"
                  alt="Text After Parafrase"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openImage("/images/parafrase/AI refined 1.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Second Pair */}
          <div className="grid lg:grid-cols-3 gap-4 items-stretch">
            {/* Before 2 */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 mb-4">
                  <span className="text-red-400 text-sm font-semibold">BEFORE</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                <img
                  src="/images/parafrase/AI text 2.jpg"
                  alt="AI Academic Writing Before Parafrase"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openImage("/images/parafrase/AI text 2.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Arrow Icon - Center */}
            <div className="flex items-center justify-center self-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-academic-primary/10 flex items-center justify-center">
                <ArrowDown size={24} className="text-academic-primary lg:hidden" />
                <ArrowRight size={32} className="text-academic-primary hidden lg:block" />
              </div>
            </div>

            {/* After 2 */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 mb-4">
                  <span className="text-green-400 text-sm font-semibold">AFTER</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                <img
                  src="/images/parafrase/AI refined 2.jpg"
                  alt="Natural Academic Text After Parafrase"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openImage("/images/parafrase/AI refined 2.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Third Pair */}
          <div className="grid lg:grid-cols-3 gap-4 items-stretch">
            {/* Before 3 */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 mb-4">
                  <span className="text-red-400 text-sm font-semibold">BEFORE</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                <img
                  src="/images/parafrase/AI text 3.jpg"
                  alt="AI Research Content Before Parafrase"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openImage("/images/parafrase/AI text 3.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Arrow Icon - Center */}
            <div className="flex items-center justify-center self-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-academic-primary/10 flex items-center justify-center">
                <ArrowDown size={24} className="text-academic-primary lg:hidden" />
                <ArrowRight size={32} className="text-academic-primary hidden lg:block" />
              </div>
            </div>

            {/* After 3 */}
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 mb-4">
                  <span className="text-green-400 text-sm font-semibold">AFTER</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] glass border-white/5 flex-1">
                <img
                  src="/images/parafrase/AI refined 3.jpg"
                  alt="Contextual Research Text After Parafrase"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openImage("/images/parafrase/AI refined 3.jpg")}
                  className="absolute top-4 right-4 p-3 rounded-lg glass border-white/5 bg-black/50 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proses <span className="text-gradient-academic">Parafrase</span>
          </h2>
          <p className="text-text-muted">Metode sistematis untuk mengubah AI text menjadi natural dan akademis</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <Search size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Analisis Konteks</h3>
            <p className="text-text-muted">Identifikasi topik, tone, dan audience yang tepat untuk penelitian Anda</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <RefreshCw size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">2. Parafrase Bertahap</h3>
            <p className="text-text-muted">Ubah struktur kalimat dan pilihan kata secara bertahap dengan tetap menjaga makna</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-academic-primary/10 flex items-center justify-center mx-auto">
              <BookOpen size={32} className="text-academic-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Finalisasi Akademik</h3>
            <p className="text-text-muted">Penyesuaian tone dan style agar sesuai dengan standar penulisan ilmiah</p>
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
