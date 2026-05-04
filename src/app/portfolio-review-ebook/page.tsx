import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ReviewEbookContent from '@/components/ReviewEbookContent';

export const metadata: Metadata = {
  title: 'Portfolio Translate E-book | Cendekia Link',
  description: 'Layanan review e-book dan terjemahan profesional dengan pendekatan Cendekia untuk kemudahan pemahaman dan kutipan.',
  keywords: ['translate e-book', 'review e-book', 'terjemahan buku', 'review buku akademik', 'penerjemahan profesional'],
};

export default function PortfolioReviewEbook() {
  return (
    <>
      <Navbar />
      <main>
        <ReviewEbookContent />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
