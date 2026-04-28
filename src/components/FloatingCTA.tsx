'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingCTA() {
  return (
    <Link 
      href="https://wa.me/6285812115605" 
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
