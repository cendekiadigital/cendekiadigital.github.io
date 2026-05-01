import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tentang Kami - CendikiaLink',
    description: 'Tentang CendikiaLink - Solusi digital profesional dan partner akademik terpercaya',
};

export default function TentangKamiPage() {
    return (
        <div className="container py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    <span className="text-gradient-tech">Tentang</span>{' '}
                    <span className="text-gradient-academic">Kami</span>
                </h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                        CendikiaLink adalah solusi digital profesional dan partner akademik terpercaya.
                        Kami hadir untuk membantu Anda mencapai kesuksesan di dunia teknologi dan akademis.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 text-white">Visi Kami</h2>
                    <p className="text-text-muted leading-relaxed mb-8">
                        Menjadi mitra terpercaya dalam transformasi digital dan pengembangan akademik
                        untuk individu dan bisnis di Indonesia.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 text-white">Misi Kami</h2>
                    <ul className="text-text-muted space-y-3 mb-8">
                        <li>Menyediakan layanan IT berkualitas tinggi dengan standar profesional</li>
                        <li>Membantu klien mengembangkan solusi digital yang inovatif</li>
                        <li>Mendukung kemajuan akademik melalui layanan penelitian dan penulisan ilmiah</li>
                        <li>Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4 text-white">Mengapa Memilih Kami?</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="glass p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-2">Profesional</h3>
                            <p className="text-text-muted text-sm">Tim ahli dengan pengalaman bertahun-tahun di bidangnya</p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-2">Terpercaya</h3>
                            <p className="text-text-muted text-sm">Komitmen penuh terhadap kualitas dan kepuasan klien</p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-2">Inovatif</h3>
                            <p className="text-text-muted text-sm">Selalu mengikuti perkembangan teknologi terbaru</p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-2">Responsif</h3>
                            <p className="text-text-muted text-sm">Dukungan cepat dan komunikasi yang baik</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
