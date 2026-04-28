'use client';

import { motion } from 'framer-motion';
import { Code2, GraduationCap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-academic-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase glass rounded-full border-white/10">
            One-Stop Solution for Digital & Academic Success
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Solusi Digital <span className="text-gradient-tech">Profesional</span> <br />
            & Partner <span className="text-gradient-academic">Akademik</span> Terpercaya
          </h1>
          <p className="max-w-2xl mx-auto text-text-muted text-lg md:text-xl mb-10 leading-relaxed">
            Kami membantu bisnis Anda berkembang melalui teknologi web mutakhir dan mendukung perjalanan akademik Anda dengan layanan penulisan & riset berkualitas.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Tech Funnel */}
          <Link href="#tech" className="group relative glass p-8 rounded-3xl text-left glass-hover border-tech-primary/20 z-20">
            <div className="w-14 h-14 rounded-2xl bg-tech-gradient flex items-center justify-center mb-6 shadow-lg shadow-tech-glow">
              <Code2 className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-tech-primary transition-colors">IT & Web Dev</h3>
            <p className="text-text-muted mb-6">Membangun ekosistem digital yang responsif, cepat, dan berorientasi pada konversi.</p>
            <div className="flex items-center text-tech-primary font-semibold gap-1 group-hover:gap-2 transition-all">
              Eksplor Layanan <ChevronRight size={18} />
            </div>
          </Link>

          {/* Academic Funnel */}
          <Link href="#academic" className="group relative glass p-8 rounded-3xl text-left glass-hover border-academic-primary/20 z-20">
            <div className="w-14 h-14 rounded-2xl bg-academic-gradient flex items-center justify-center mb-6 shadow-lg shadow-academic-glow">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-academic-primary transition-colors">Layanan Akademik</h3>
            <p className="text-text-muted mb-6">Bantuan riset, penulisan artikel jurnal, dan optimasi naskah akademik profesional.</p>
            <div className="flex items-center text-academic-primary font-semibold gap-1 group-hover:gap-2 transition-all">
              Mulai Konsultasi <ChevronRight size={18} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
