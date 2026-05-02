import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademicServices from "@/components/AcademicServices";
import HumanizeShowcase from "@/components/HumanizeShowcase";
import Contact from "@/components/Contact";

export const metadata = {
  title: 'Layanan Akademik - Cendekia Link',
  description: 'Pendampingan akademik profesional untuk memastikan kualitas karya ilmiah Anda tetap terjaga.',
};

export default function AcademicPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <AcademicServices />
      <HumanizeShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
