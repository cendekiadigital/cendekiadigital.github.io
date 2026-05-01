'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Cpu, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const techServices = [
  { icon: <Globe size={24} />, title: 'Pembuatan Web & App Custom', desc: 'Website Landing Page, Company Profile, hingga E-commerce yang responsif dan cepat.', link: '/portfolio/web-development' },
  { icon: <Smartphone size={24} />, title: 'Portofolio Branding', desc: 'Membangun identitas visual yang kuat untuk brand atau personal Anda.', link: '#portfolio-branding' },
  { icon: <Cpu size={24} />, title: 'Custom Layanan Digital', desc: 'Konsultasikan kebutuhan digital spesifik Anda kepada tim ahli kami.', link: 'https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Jasa%20Digital.%20Bisa%20dibantu%3F' },
];

export default function DigitalServices() {
  return (
    <section id="tech" className="container section-padding">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pilihan <span className="text-gradient-tech">Jasa Digital</span>
          </h2>
          <p className="text-text-muted">Membangun ekosistem digital yang modern, estetik, dan berkinerja tinggi untuk kesuksesan Anda.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {techServices.map((service, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-tech-primary/30 transition-colors"
          >
            <div className="text-tech-primary mb-4">{service.icon}</div>
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
            <Link href={service.link} className="text-xs font-bold text-tech-primary hover:underline">
              {service.title.includes('Portofolio') || service.title.includes('Web') ? 'Lihat Portofolio' : 'Konsultasi Sekarang'}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
