'use client';

import { motion } from 'framer-motion';

const portfolios = [
  { 
    id: 'portfolio-web',
    category: 'Web Development',
    title: 'E-Commerce Platform',
    desc: 'Platform belanja online modern dengan integrasi payment gateway.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  { 
    id: 'portfolio-branding',
    category: 'Branding',
    title: 'Visual Identity System',
    desc: 'Pengembangan brand identity untuk startup teknologi terkemuka.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
  },
];

export default function DigitalPortfolio() {
  return (
    <section id="portfolio" className="section-padding container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital <span className="text-gradient-tech">Portfolio</span></h2>
        <p className="text-text-muted">Proyek-proyek unggulan yang telah kami selesaikan dengan standar industri tertinggi.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {portfolios.map((item, index) => (
          <motion.div 
            key={index}
            id={item.id}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2.5rem] glass border-white/5 hover:border-tech-primary/30 transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 bg-tech-primary/20 text-tech-primary">
                {item.category}
              </span>
              <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
