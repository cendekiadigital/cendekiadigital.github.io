'use client';

import { useState } from 'react';
import { Send, Mail, MessageSquare, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'IT / Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'IT / Web Development', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Terjadi kesalahan saat mengirim pesan');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Terjadi kesalahan jaringan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Memulai Proyek <br /> <span className="text-gradient-tech">Digital</span> atau <span className="text-gradient-academic">Akademik</span>?</h2>
          <p className="text-text-muted text-lg mb-8">Konsultasikan kebutuhan Anda secara gratis. Tim ahli kami siap membantu Anda mencapai target terbaik.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-tech-primary">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-text-muted">Email Kami</div>
                <div className="font-bold">fatwawebdev@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-academic-primary">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-sm text-text-muted">WhatsApp</div>
                <div className="font-bold">+62 858 1211 5605</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-green-500">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-red-500">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-tech-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-tech-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Pilih Layanan</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-tech-primary transition-colors appearance-none"
              >
                <option value="IT / Web Development">IT / Web Development</option>
                <option value="Layanan Akademik">Layanan Akademik</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-tech-primary transition-colors"
                placeholder="Ceritakan kebutuhan Anda..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-tech w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  Kirim Pesan <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
