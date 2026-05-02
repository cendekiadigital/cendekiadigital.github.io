'use client';

import { ChevronDown, Eye } from "lucide-react";
import { useState } from "react";
import { Cpu, Zap, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Sistem Manajemen Karyawan",
    category: "Web Application",
    image: "/images/portfolio/os.png",
    description: "Sistem ini adalah manajemen khusus pengelolaan pekerja outsourcing lengkap dengan terintegrasinya fitur rekap tagihan ke perusahaan pemberi kerja",
    features: ["Manajemen Karyawan", "Manajemen Tagihan", "Rekap Tagihan", "Akurasi Tinggi", "User Friendly", "Slip Gaji Digital"],
    tech: ["Next.js", "node.js", "Laravel", "MySQL"]
  },
  {
    title: "Manajemen Klinik Berbasis Web",
    category: "Web Application",
    image: "/images/portfolio/klinik.png",
    description: "Sistem Manajemen Klinik berbasis web. Aplikasi ini dirancang untuk mengelola operasional klinik.",
    features: ["Manajemen Pasien", "Manajemen Dokter", "Manajemen Janji Temu", "Manajemen Rekam Medis", "Manajemen Obat-obatan", "Rekap Tagihan"],
    tech: ["Tailwind CSS", "Alpine.js", "Laravel", "Filament", "MySQL"]
  },
  {
    title: "Website Media Berita",
    category: "Website", 
    image: "/images/portfolio/web.png",
    description: "Maos adalah website media berita. Platform ini menyediakan cara yang menarik bagi pengguna untuk menemukan, membaca, dan menjelajahi artikel berita di berbagai kategori.",
    features: ["News Management", "Category Filtering", "Search Functionality", "User Comments"],
    tech: ["Swiper.js", "Laravel", "MySQL"]
  },
];

const additionalProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    image: "/images/portfolio/ecommerce.png",
    description: "Sistem E-Commerce ini menyediakan platform lengkap untuk mengelola toko online dengan fitur-fitur seperti manajemen produk, pesanan, pelanggan, dan pengiriman.",
    features: ["Product Management", "Payment Gateway", "Order Tracking", "User Dashboard"],
    tech: ["Vue.js", "Node.js", "Laravel", "Stripe API"]
  },
  {
    title: "TaskFlow - Project Management",
    category: "Web Application",
    image: "/images/portfolio/todolist.png",
    description: "TaskFlow adalah aplikasi manajemen tugas. Aplikasi ini memungkinkan tim untuk berkolaborasi, mengelola tugas, dan melacak progress proyek.",
    features: ["Task Management", "Project Management", "Team Collaboration", "Responsive Design"],
    tech: ["Next.js", "Laravel", "SQLite", "Tailwind CSS"]
  },
  {
    title: "Systematic Literature Review",
    category: "Web Application",
    image: "/images/portfolio/slr.png", 
    description: "Platform web berbasis AI untuk mempercepat proses Systematic Literature Review (SLR).",
    features: ["Analisis Artikel dengan AI", "Snowballing Referensi", "Peta Sitasi Interaktif", "SLR Synthesis"],
    tech: ["Vanilla HTML", "Node.js", "Python", "Groq API", "SQLite"]
  }
];

export default function PortfolioContent() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleProjectDetail = (projectTitle: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isExpanded = expandedProjects[project.title];
    const isMainProject = index < projects.length;

    return (
      <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`overflow-hidden rounded-[2.5rem] glass border-white/5 group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-tech-primary font-bold text-sm uppercase tracking-widest mb-4 inline-block">
              {project.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
            
            {/* Mobile: Short description */}
            <p className="md:hidden text-text-muted leading-relaxed line-clamp-3 mb-4">
              {project.description}
            </p>
            
            {/* Mobile: View Detail Button */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => toggleProjectDetail(project.title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 hover:border-tech-primary transition-colors text-sm font-semibold"
              >
                {isExpanded ? 'Hide' : 'View Detail'}
                <Eye size={14} />
              </button>
            </div>
            
            {/* Desktop: Full description */}
            <p className="hidden md:block text-text-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Mobile: Expandable details */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-6 pt-4 border-t border-white/5">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Zap size={18} className="text-tech-primary" /> Fitur Unggulan
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i} className="text-text-muted text-sm flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-tech-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Cpu size={18} className="text-tech-primary" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string, i: number) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-text-muted uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Always visible details */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Zap size={18} className="text-tech-primary" /> Fitur Unggulan
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="text-text-muted text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-tech-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-tech-primary" /> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string, i: number) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-text-muted uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={`https://wa.me/6282245848191?text=${encodeURIComponent(`Halo Cendekia Link, saya tertarik untuk konsultasi mengenai proyek ${project.title}. Bisa dibantu?`)}`}
              target="_blank"
              className="btn btn-tech"
            >
              Konsultasi Proyek Serupa <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Project List */}
      <section className="container pb-32">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}

          {/* View All Button untuk TaskFlow */}
          <div className="text-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border border-white/10 hover:border-tech-primary transition-colors text-sm font-semibold"
            >
              {showAllProjects ? 'Sembunyikan' : 'View All'}
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Additional Projects - Hidden by default */}
          {showAllProjects && (
            <div className="space-y-32 pt-8">
              {additionalProjects.map((project, index) => (
                <ProjectCard key={index + projects.length} project={project} index={index + projects.length} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
