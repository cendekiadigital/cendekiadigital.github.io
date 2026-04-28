'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Server, Smartphone, Cpu, 
  BookOpen, FileText, Search, ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const techServices = [
  { icon: <Globe size={24} />, title: 'Custom Web Development', desc: 'Website Landing Page, Company Profile, hingga E-commerce.' },
  { icon: <Server size={24} />, title: 'System Integration', desc: 'Integrasi API dan pengembangan sistem backend yang skalabel.' },
  { icon: <Smartphone size={24} />, title: 'Mobile Solutions', desc: 'Aplikasi mobile responsif untuk kebutuhan bisnis modern.' },
  { icon: <Cpu size={24} />, title: 'Tech Consultation', desc: 'Konsultasi arsitektur teknologi untuk efisiensi operasional.' },
];

const academicServices = [
  { icon: <FileText size={24} />, title: 'Parafrase & Humanize AI', desc: 'Ubah teks AI menjadi natural dan lolos deteksi plagiasi (Turnitin).' },
  { icon: <BookOpen size={24} />, title: 'Jurnal Scopus/Sinta', desc: 'Pendampingan penulisan dan publikasi artikel di jurnal bereputasi.' },
  { icon: <Search size={24} />, title: 'Bantuan Riset', desc: 'Olah data statistik dan analisis literatur yang mendalam.' },
  { icon: <ShieldCheck size={24} />, title: 'Privacy Guaranteed', desc: 'Kerahasiaan data dan naskah Anda adalah prioritas utama kami.' },
];

export default function Services() {
  return (
    <div className="section-padding space-y-32">
      {/* Tech Section */}
      <section id="tech" className="container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering Your <span className="text-gradient-tech">Digital Presence</span>
            </h2>
            <p className="text-text-muted">Kami membawa ide Anda ke dunia digital dengan teknologi terbaru dan performa yang tak tertandingi.</p>
          </div>
          <div className="flex gap-4">
             <div className="glass px-6 py-3 rounded-2xl flex items-center gap-2">
                <CheckCircle2 className="text-tech-primary" size={20} />
                <span className="text-sm font-semibold">Fast Performance</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {techServices.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-tech-primary/30 transition-colors"
            >
              <div className="text-tech-primary mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academic Section */}
      <section id="academic" className="container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Reliable <span className="text-gradient-academic">Academic Partner</span>
            </h2>
            <p className="text-text-muted">Solusi cerdas untuk tantangan akademik Anda. Penulisan yang personal, manusiawi, dan berkualitas tinggi.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {academicServices.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-academic-primary/30 transition-colors"
            >
              <div className="text-academic-primary mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
