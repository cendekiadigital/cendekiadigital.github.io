import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import TemplatingContent from '@/components/TemplatingContent';

export const metadata: Metadata = {
  title: 'Portfolio Templating Naskah | Cendekia Link',
  description: 'Layanan templating naskah profesional untuk format skripsi, tesis, disertasi, dan jurnal dengan pendekatan ala Cendekia.',
  keywords: ['templating naskah', 'formatting akademik', 'template skripsi', 'template jurnal', 'formatting karya ilmiah'],
};

export default function PortfolioFormatting() {
  return (
    <>
      <Navbar />
      <main>
        <TemplatingContent />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
