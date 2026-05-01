import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Globe, Code2, Cpu, Zap, Layout, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Sistem Manajemen Karyawan Outsourcing",
    category: "Web Application",
    image: "/images/portfolio/os.png",
    description: "Sistem ini adalah manajemen khusus pengelolaan pekerja outsourcing (Pekerja Harian Lepas maupun Borongan) lengkap dengan terintegrasinya fitur rekap tagihan (Faktur/Invoice) ke perusahaan pemberi kerja",
    features: ["Manajemen Karyawan", "Manajemen Tagihan", "Rekap Tagihan", "Akurasi Tinggi", "User Friendly", "Slip Gaji Digital"],
    tech: ["Next.js", "node.js", "Laravel", "MySQL"]
  },
  {
    title: "Manajemen Klinik Berbasis Web",
    category: "Web Application",
    image: "/images/portfolio/klinik.png",
    description: "Sistem Manajemen Klinik berbasis web yang dibangun menggunakan Laravel framework dan Filament untuk admin panel. Aplikasi ini dirancang untuk mengelola operasional klinik termasuk manajemen pasien, dokter, janji temu, rekam medis, dan obat-obatan.",
    features: ["Manajemen Pasien", "Manajemen Dokter", "Manajemen Janji Temu", "Manajemen Rekam Medis", "Manajemen Obat-obatan", "Rekap Tagihan", "User Friendly"],
    tech: ["Tailwind CSS", "Alpine.js", "Laravel", "Filament", "Laravel Sanctum", "MySQL"]
  },
  {
    title: "TaskFlow - Project Management",
    category: "Web Application",
    image: "/images/portfolio/todolist.png",
    description: "TaskFlow adalah aplikasi manajemen tugas dan proyek modern yang terinspirasi dari ClickUp dan Linear. Aplikasi ini memungkinkan tim untuk berkolaborasi, mengelola tugas, dan melacak progress proyek dengan interface yang intuitif dan modern.",
    features: ["Authentication & Authorization", "Task Management", "Project Management", "Team Collaboration", "Responsive Design", "User Friendly"],
    tech: ["Next.js", "Laravel", "SQLite", "Tailwind CSS", "Laravel Sanctum"]
  }
];

export const metadata = {
  title: 'Portfolio Web Development - Cendekia Link',
  description: 'Daftar proyek pembuatan website dan aplikasi custom oleh Cendekia Link.',
};

export default function WebPortfolioPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Header */}
      <section className="section-padding container">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Web & App <br />
            <span className="text-gradient-tech">Portfolio</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Eksplorasi karya-karya digital kami. Dari landing page sederhana hingga aplikasi web kompleks, kami membangun solusi yang menggabungkan estetika dan performa.
          </p>
        </div>
      </section>

      {/* Project List */}
      <section className="container pb-32">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`overflow-hidden rounded-[2.5rem] glass border-white/5 group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-tech-primary font-bold text-sm uppercase tracking-widest mb-4 inline-block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                  <p className="text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Zap size={18} className="text-tech-primary" /> Fitur Unggulan
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
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
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-text-muted uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a href="https://wa.me/6282245848191" target="_blank" className="btn btn-tech">
                    Konsultasi Proyek Serupa <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
