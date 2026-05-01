'use client';

import React, { useState, useEffect } from 'react';
import { Home, GraduationCap, Code2, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <span className="text-gradient-tech">Cendekia</span>
          <span className="text-gradient-academic">Link</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            <Home size={18} /> Home
          </Link>
          <Link href="/jasa-digital" className="text-sm font-medium hover:text-tech-primary transition-colors flex items-center gap-2">
            <Code2 size={18} /> Jasa Digital
          </Link>
          <Link href="/layanan-akademik" className="text-sm font-medium hover:text-academic-primary transition-colors flex items-center gap-2">
            <GraduationCap size={18} /> Layanan Akademik
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium hover:text-white transition-colors">Showcase</Link>
          <Link href="https://wa.me/6282245848191" target="_blank" className="btn btn-tech text-sm">Konsultasi Gratis</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Home size={18} /> Home
          </Link>
          <Link href="/jasa-digital" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Code2 size={18} /> Jasa Digital
          </Link>
          <Link href="/layanan-akademik" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <GraduationCap size={18} /> Layanan Akademik
          </Link>
          <Link href="https://wa.me/6282245848191" target="_blank" className="btn btn-tech" onClick={() => setIsMobileMenuOpen(false)}>Konsultasi Gratis</Link>
        </div>
      )}
    </nav>
  );
}
