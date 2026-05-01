import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Karir - CendikiaLink',
    description: 'Bergabung dengan tim CendikiaLink dan kembangkan karirmu bersama kami',
};

export default function KarirPage() {
    return (
        <div className="container py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    <span className="text-gradient-tech">Karir</span>{' '}
                    <span className="text-gradient-academic">di CendikiaLink</span>
                </h1>

                <p className="text-text-muted text-lg leading-relaxed mb-12">
                    Bergabung dengan tim kami dan kembangkan karirmu bersama CendikiaLink.
                    Kami mencari individu yang bersemangat, kreatif, dan berkomitmen untuk memberikan yang terbaik.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-white">Posisi yang Tersedia</h2>

                <div className="space-y-6">
                    <div className="glass p-6 rounded-xl">
                        <h3 className="font-bold text-white text-xl mb-2">Web Developer</h3>
                        <p className="text-tech-primary text-sm mb-4">Full-time • Remote</p>
                        <p className="text-text-muted mb-4">
                            Membangun dan mengembangkan aplikasi web modern menggunakan teknologi terkini.
                        </p>
                        <button className="px-6 py-2 bg-tech-primary text-white rounded-lg hover:bg-tech-primary/80 transition-colors">
                            Lamar Sekarang
                        </button>
                    </div>

                    <div className="glass p-6 rounded-xl">
                        <h3 className="font-bold text-white text-xl mb-2">UI/UX Designer</h3>
                        <p className="text-tech-primary text-sm mb-4">Full-time • Remote</p>
                        <p className="text-text-muted mb-4">
                            Merancang antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal.
                        </p>
                        <button className="px-6 py-2 bg-tech-primary text-white rounded-lg hover:bg-tech-primary/80 transition-colors">
                            Lamar Sekarang
                        </button>
                    </div>

                    <div className="glass p-6 rounded-xl">
                        <h3 className="font-bold text-white text-xl mb-2">Content Writer</h3>
                        <p className="text-academic-primary text-sm mb-4">Part-time • Remote</p>
                        <p className="text-text-muted mb-4">
                            Menulis konten akademik dan artikel berkualitas tinggi untuk berbagai kebutuhan klien.
                        </p>
                        <button className="px-6 py-2 bg-academic-primary text-white rounded-lg hover:bg-academic-primary/80 transition-colors">
                            Lamar Sekarang
                        </button>
                    </div>
                </div>

                <div className="mt-12 glass p-8 rounded-xl text-center">
                    <h3 className="font-bold text-white text-xl mb-4">Tidak menemukan posisi yang sesuai?</h3>
                    <p className="text-text-muted mb-6">
                        Kirimkan CV dan portofolio Anda ke karir@cendikia.link. Kami akan menghubungi Anda
                        jika ada posisi yang cocok.
                    </p>
                    <a
                        href="mailto:karir@cendikia.link"
                        className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors inline-block"
                    >
                        Kirim CV Anda
                    </a>
                </div>
            </div>
        </div>
    );
}
