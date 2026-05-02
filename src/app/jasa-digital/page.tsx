import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalServices from "@/components/DigitalServices";
import DigitalWorkflow from "@/components/DigitalWorkflow";
import Contact from "@/components/Contact";

export const metadata = {
  title: 'Jasa Digital - Cendekia Link',
  description: 'Membangun ekosistem digital yang modern, estetik, dan berkinerja tinggi.',
};

export default function DigitalPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <DigitalServices />
      <DigitalWorkflow />
      <Contact />
      <Footer />
    </main>
  );
}
