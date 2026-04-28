'use client';

import { motion } from 'framer-motion';
import { Award, Users, Files, Star } from 'lucide-react';

const stats = [
  { icon: <Award size={24} />, label: 'Scopus Indexed', value: '100+' },
  { icon: <Users size={24} />, label: 'Happy Clients', value: '500+' },
  { icon: <Files size={24} />, label: 'Projects Completed', value: '1.2k' },
  { icon: <Star size={24} />, label: 'Avg Rating', value: '4.9/5' },
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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

          
        </div>
      </div>
    </section>
  );
}
