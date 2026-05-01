'use client';

import { motion } from 'framer-motion';
import { 
  Search, Palette, Code2, ShieldCheck, Rocket, 
  Cpu, Layout, Zap, Database, Server
} from 'lucide-react';

const workflow = [
  { 
    icon: <Search className="text-tech-primary" />, 
    title: 'Discovery & Research', 
    desc: 'Kami menganalisis kebutuhan bisnis Anda dan riset kompetitor untuk solusi yang tepat sasaran.' 
  },
  { 
    icon: <Palette className="text-tech-primary" />, 
    title: 'UI/UX Design', 
    desc: 'Menciptakan desain yang estetik, modern, dan intuitif untuk pengalaman pengguna terbaik.' 
  },
  { 
    icon: <Code2 className="text-tech-primary" />, 
    title: 'Clean Development', 
    desc: 'Penulisan kode yang rapi, skalabel, dan menggunakan teknologi terbaru (Next.js, Tailwind).' 
  },
  { 
    icon: <ShieldCheck className="text-tech-primary" />, 
    title: 'Quality Assurance', 
    desc: 'Pengujian menyeluruh untuk memastikan performa maksimal dan bebas dari bug.' 
  },
  { 
    icon: <Rocket className="text-tech-primary" />, 
    title: 'Deployment', 
    desc: 'Peluncuran ke production dengan optimasi SEO dan kecepatan akses yang kilat.' 
  },
];

const techStack = [
  { 
    category: 'Frontend',
    items: [
      { name: 'Next.js', icon: <Layout size={16} /> },
      { name: 'Tailwind', icon: <Palette size={16} /> },
    ]
  },
  { 
    category: 'Backend',
    items: [
      { name: 'Laravel', icon: <Server size={16} /> },
      { name: 'Filament', icon: <Cpu size={16} /> },
      { name: 'Node.js', icon: <Zap size={16} /> },
    ]
  },
  { 
    category: 'Database',
    items: [
      { name: 'PostgreSQL', icon: <Database size={16} /> },
      {name: 'MySQL', icon: <Database size={16}/>}
    ]
  },
];

export default function DigitalWorkflow() {
  return (
    <section className="section-padding container">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left: Workflow */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Bagaimana Kami <span className="text-gradient-tech">Bekerja</span>
          </h2>
          
          <div className="space-y-8">
            {workflow.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Tech Stack & Why Us */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-[2rem] border-white/5">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Cpu className="text-tech-primary" size={20} /> Modern Tech Stack
            </h4>
            <div className="space-y-6">
              {techStack.map((group, index) => (
                <div key={index}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium flex items-center gap-2 hover:border-tech-primary/30 transition-colors">
                        {item.icon} {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-[2rem] border-white/5 bg-tech-gradient/5">
             <h4 className="text-xl font-bold mb-4">Mengapa Memilih Kami?</h4>
             <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-tech-primary"></div>
                   Performa High-Speed (Core Web Vitals)
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-tech-primary"></div>
                   Desain Mobile-First & Responsif
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-tech-primary"></div>
                   SEO Optimized & Metadata Ready
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted">
                   <div className="w-1.5 h-1.5 rounded-full bg-tech-primary"></div>
                   Dukungan Pemeliharaan 24/7
                </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
