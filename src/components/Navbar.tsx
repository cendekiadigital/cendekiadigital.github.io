'use client';

import React, { useState, useEffect } from 'react';
import { Layout, GraduationCap, Code2, Menu, X } from 'lucide-react';
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
          <Link href="#tech" className="text-sm font-medium hover:text-tech-primary transition-colors flex items-center gap-2">
            <Code2 size={18} /> IT Services
          </Link>
          <Link href="#academic" className="text-sm font-medium hover:text-academic-primary transition-colors flex items-center gap-2">
            <GraduationCap size={18} /> Academic
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-white transition-colors">Showcase</Link>
          <Link href="#contact" className="btn btn-tech text-sm">Konsultasi Gratis</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="#tech" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Code2 size={18} /> IT Services
          </Link>
          <Link href="#academic" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <GraduationCap size={18} /> Academic
          </Link>
          <Link href="#contact" className="btn btn-tech" onClick={() => setIsMobileMenuOpen(false)}>Konsultasi Gratis</Link>
        </div>
      )}
    </nav>
  );
}
