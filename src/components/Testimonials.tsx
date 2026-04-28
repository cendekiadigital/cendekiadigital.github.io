'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'CEO Startup Tech',
    content: 'Landing page yang dibuat sangat cepat dan desainnya sangat premium. Konversi kami naik 40% sejak migrasi ke Cendekia.link.',
    rating: 5
  },
  {
    name: 'Sari Wijaya',
    role: 'Mahasiswa S3',
    content: 'Layanan humanize AI-nya luar biasa. Jurnal saya lolos Turnitin dengan hasil yang sangat natural. Sangat direkomendasikan!',
    rating: 5
  },
  {
    name: 'Budi Santoso',
    role: 'Product Manager',
    content: 'Tim yang sangat profesional. Mereka tidak hanya membangun web, tapi juga memberikan solusi arsitektur yang tepat.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-text-muted">Kepercayaan pelanggan adalah prioritas utama kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-tech-primary text-tech-primary" />
                ))}
              </div>
              <p className="text-text-muted mb-6 italic">"{t.content}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-text-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
