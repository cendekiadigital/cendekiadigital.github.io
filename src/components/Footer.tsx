import Link from 'next/link';
import { Code2, MessageSquare, Camera, Briefcase } from 'lucide-react';



export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter block mb-6">
              <span className="text-gradient-tech">Cendekia</span>
              <span className="text-gradient-academic">Link</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Solusi digital profesional dan partner akademik terpercaya. Kami hadir untuk membantu Anda mencapai kesuksesan di dunia teknologi dan akademis.
            </p>
            <div className="flex gap-4">
              <Link href="https://wa.me/6282245848191" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-tech-primary transition-colors"><MessageSquare size={18} /></Link>
              <Link href="https://instagram.com/cendekia.link" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-tech-primary transition-colors"><Camera size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-tech-primary transition-colors"><Briefcase size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-tech-primary transition-colors"><Code2 size={18} /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Jasa Digital</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><Link href="/jasa-digital" className="hover:text-tech-primary transition-colors">Web Development</Link></li>
              <li><Link href="/jasa-digital" className="hover:text-tech-primary transition-colors">Mobile Apps</Link></li>
              <li><Link href="/jasa-digital" className="hover:text-tech-primary transition-colors">Branding Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-tech-primary transition-colors">Custom Solution</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Layanan Akademik</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><Link href="/layanan-akademik" className="hover:text-academic-primary transition-colors">Review Jurnal</Link></li>
              <li><Link href="#contact" className="hover:text-academic-primary transition-colors">Parafrase AI</Link></li>
              <li><Link href="#contact" className="hover:text-academic-primary transition-colors">Proofreading</Link></li>
              <li><Link href="#contact" className="hover:text-academic-primary transition-colors">Formatting</Link></li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">© 2026 Cendekia.link Digital & Academic. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/kebijakan-privasi" className="text-xs text-text-muted hover:text-white">Privacy Policy</Link>
            <Link href="/syarat-ketentuan" className="text-xs text-text-muted hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
