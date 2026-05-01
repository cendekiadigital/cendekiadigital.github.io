'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Search, ShieldCheck,
  CheckCircle2, GraduationCap, Files
} from 'lucide-react';
import Link from 'next/link';

const academicServices = [
  { icon: <FileText size={24} />, title: 'Review Artikel Jurnal', desc: 'Review mendalam untuk jurnal nasional & internasional agar siap publikasi.', link: '#portfolio-jurnal' },
  { icon: <BookOpen size={24} />, title: 'Review E-book & Translation', desc: 'Layanan review konten buku elektronik dan penerjemahan profesional.', link: 'https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Layanan%20Akademik.%20Bisa%20dibantu%3F' },
  { icon: <Search size={24} />, title: 'Parafrase AI Text', desc: 'Ubah teks AI menjadi natural, mengalir, dan lolos deteksi plagiasi.', link: 'https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Layanan%20Akademik.%20Bisa%20dibantu%3F' },
  { icon: <ShieldCheck size={24} />, title: 'Proofreading', desc: 'Pengecekan ejaan, tata bahasa, dan koherensi naskah secara teliti.', link: 'https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Layanan%20Akademik.%20Bisa%20dibantu%3F' },
  { icon: <Files size={24} />, title: 'Formatting Karya Ilmiah', desc: 'Penyesuaian format skripsi, tesis, disertasi, sesuai template jurnal.', link: 'https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Layanan%20Akademik.%20Bisa%20dibantu%3F' },
  { icon: <GraduationCap size={24} />, title: 'Layanan Akademik Lainnya', desc: 'Bantuan pendampingan riset dan kebutuhan akademik lainnya.', link: 'https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Layanan%20Akademik.%20Bisa%20dibantu%3F' },
];

export default function AcademicServices() {
  return (
    <section id="academic" className="container section-padding">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solusi <span className="text-gradient-academic">Layanan Akademik</span>
          </h2>
          <p className="text-text-muted">Pendampingan akademik profesional untuk memastikan kualitas karya ilmiah Anda tetap terjaga.</p>
        </div>
        <div className="flex flex-col gap-3">
           <div className="glass px-6 py-3 rounded-2xl flex items-center gap-2 border-red-500/20 bg-red-500/5">
              <span className="text-sm font-semibold text-red-400">❌ Bukan joki tugas palugada</span>
           </div>
           <div className="glass px-6 py-3 rounded-2xl flex items-center gap-2 border-green-500/20 bg-green-500/5">
              <CheckCircle2 className="text-green-400" size={20} />
              <span className="text-sm font-semibold text-green-400">✅ Kami mementingkan kualitas dan menjaga reputasi klien</span>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {academicServices.map((service, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-academic-primary/30 transition-colors"
          >
            <div className="text-academic-primary mb-4">{service.icon}</div>
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
            <Link href={service.link} className="text-xs font-bold text-academic-primary hover:underline">
              {service.title.includes('Jurnal') ? 'Lihat Portofolio' : 'Konsultasi Sekarang'}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
