import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ProofreadingContent from '@/components/ProofreadingContent';

export const metadata: Metadata = {
  title: 'Portfolio Proofreading | Cendekia Link',
  description: 'Layanan proofreading profesional untuk koreksi ejaan, tata bahasa, dan format dokumen akademik.',
  keywords: ['proofreading', 'koreksi naskah', 'editing akademik', 'formatting dokumen'],
};

export default function PortfolioProofreading() {
  return (
    <>
      <Navbar />
      <main>
        <ProofreadingContent />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
