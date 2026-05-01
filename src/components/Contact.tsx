'use client';

import { useState, useRef } from 'react';
import { Send, Camera, MessageSquare, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
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
    
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', 
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'IT / Web Development', message: '' });
      } else {
        throw new Error('Gagal mengirim pesan');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.');
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
                <Camera size={24} />
              </div>
              <div>
                <div className="text-sm text-text-muted">Instagram Kami</div>
                <div className="font-bold">@cendekia.link</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-academic-primary">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-sm text-text-muted">WhatsApp</div>
                <div className="font-bold">+62 822-4584-8191</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 flex flex-col items-center text-center justify-center space-y-8">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-2">
            <MessageSquare size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Hubungi Kami via WhatsApp</h3>
            <p className="text-text-muted mb-8 max-w-sm mx-auto">
              Untuk respon lebih cepat dan konsultasi langsung, silakan hubungi tim kami melalui WhatsApp.
            </p>
            <a 
              href="https://wa.me/6282245848191?text=Halo%20Cendekia%20Link%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Anda.%20Bisa%20dibantu%3F" 
              target="_blank" 
              className="btn btn-tech w-full py-5 text-xl flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 border-none shadow-lg shadow-green-600/20"
            >
              <MessageSquare size={24} /> Chat Sekarang
            </a>
          </div>
          
    
        </div>
      </div>
    </section>
  );
}
