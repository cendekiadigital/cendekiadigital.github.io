'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, UserCheck, Bot } from 'lucide-react';
import Link from 'next/link';

export default function HumanizeShowcase() {
  return (
    <section className="section-padding container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Buktikan Kualitas <span className="text-gradient-academic">Humanize AI</span> Kami
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Jangan biarkan naskah Anda terasa seperti buatan mesin. Kami mengubah teks AI menjadi narasi yang personal, empatik, dan 100% lolos deteksi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Before */}
        <div className="glass p-8 rounded-[2.5rem] border-red-500/10">
          <div className="flex items-center gap-3 mb-6 text-red-400">
            <Bot size={20} />
            <span className="font-bold text-sm uppercase tracking-widest">AI Generated</span>
          </div>
          <div className="text-text-muted leading-relaxed text-sm italic">
            "The utilization of artificial intelligence in the contemporary era has significant implications for the educational landscape. It is observed that pedagogical methodologies are undergoing a transformation due to the integration of automated systems."
          </div>
          <div className="mt-6 flex items-center gap-2 text-red-400/60 text-xs font-semibold">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
            Detected by Turnitin & GPTZero (98% AI)
          </div>
        </div>

        {/* After */}
        <div className="glass p-8 rounded-[2.5rem] border-academic-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <Sparkles className="text-academic-primary animate-bounce" size={24} />
          </div>
          <div className="flex items-center gap-3 mb-6 text-academic-primary">
            <UserCheck size={20} />
            <span className="font-bold text-sm uppercase tracking-widest">Humanized by Cendekia.link</span>
          </div>
          <div className="text-white leading-relaxed text-sm font-medium">
            "Saat ini, AI bukan lagi sekadar alat tambahan dalam pendidikan; ia telah mengubah cara kita belajar dan mengajar. Kami percaya bahwa sentuhan manusia dalam narasi akademik tetaplah kunci untuk menyampaikan pesan yang autentik dan bermakna."
          </div>
          <div className="mt-6 flex items-center gap-2 text-academic-primary text-xs font-semibold">
            <div className="w-2 h-2 rounded-full bg-academic-primary"></div>
            Lolos Deteksi (100% Human)
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="https://wa.me/6282245848191" target="_blank" className="btn btn-academic">
          Coba Humanize Sekarang <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
