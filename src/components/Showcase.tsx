'use client';

import { motion } from 'framer-motion';
import { Award, Users, Files, Star } from 'lucide-react';

const stats = [
  { icon: <Award size={24} />, label: 'Scopus Indexed', value: '100+' },
  { icon: <Users size={24} />, label: 'Happy Clients', value: '500+' },
  { icon: <Files size={24} />, label: 'Projects Completed', value: '1.2k' },
  { icon: <Star size={24} />, label: 'Avg Rating', value: '4.9/5' },
];

const portfolios = [
  { 
    id: 'portfolio-web',
    category: 'Web Development',
    title: 'E-Commerce Platform',
    desc: 'Platform belanja online modern dengan integrasi payment gateway.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'tech'
  },
  { 
    id: 'portfolio-branding',
    category: 'Branding',
    title: 'Visual Identity System',
    desc: 'Pengembangan brand identity untuk startup teknologi terkemuka.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    color: 'tech'
  },
  { 
    id: 'portfolio-jurnal',
    category: 'Academic Journal',
    title: 'Scopus Q1 Review',
    desc: 'Pendampingan review artikel jurnal hingga publikasi di jurnal Q1.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    color: 'academic'
  },
];

export default function Showcase() {
  return (
    <section id="portfolio" className="section-padding container">
      <div className="glass rounded-[3rem] p-12 relative overflow-hidden border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tech-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-academic-primary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Track Record</h2>
            <p className="text-text-muted">Hasil nyata yang berbicara tentang kualitas dan komitmen kami.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolios.map((item, index) => (
              <motion.div 
                key={index}
                id={item.id}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl glass border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${
                    item.color === 'tech' ? 'bg-tech-primary/20 text-tech-primary' : 'bg-academic-primary/20 text-academic-primary'
                  }`}>
                    {item.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
