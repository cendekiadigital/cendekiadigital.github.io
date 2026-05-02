'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingCTA() {
  const pathname = usePathname();
  
  const getMessage = () => {
    if (pathname === '/jasa-digital') {
      return "Hai, Kak, saya tertarik untuk konsultasi mengenai Jasa Digital. [Silakan tulis apa yang ingin Anda order atau konsultasikan]";
    }
    if (pathname === '/layanan-akademik') {
      return "Hai, Kak, saya tertarik untuk konsultasi mengenai Layanan Akademik. [Silakan tulis apa yang ingin Anda order atau konsultasikan]";
    }
    if (pathname === '/portfolio/web-development') {
      return "Hai, Kak, saya sedang melihat portofolio web Anda dan ingin bertanya lebih lanjut. [Silakan tulis apa yang ingin Anda order atau konsultasikan]";
    }
    return "Hai, Kak, saya ingin konsultasi mengenai layanan Anda. [Silakan tulis apa yang ingin Anda order atau konsultasikan]";
  };

  const whatsappUrl = `https://wa.me/6282245848191?text=${encodeURIComponent(getMessage())}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 glass p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
    >
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/40">
        <MessageCircle size={24} />
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pr-4">
        Konsultasi WhatsApp
      </span>
    </Link>
  );
}
