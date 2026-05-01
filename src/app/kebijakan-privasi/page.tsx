import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kebijakan Privasi - CendikiaLink',
    description: 'Kebijakan privasi dan perlindungan data pengguna CendikiaLink',
};

export default function KebijakanPrivasiPage() {
    return (
        <div className="container py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    <span className="text-gradient-tech">Kebijakan</span>{' '}
                    <span className="text-gradient-academic">Privasi</span>
                </h1>

                <p className="text-text-muted text-sm mb-8">
                    Terakhir diperbarui: Januari 2026
                </p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Pendahuluan</h2>
                        <p className="text-text-muted leading-relaxed">
                            CendikiaLink (&quot;kami&quot;) berkomitmen untuk melindungi privasi Anda. Kebijakan privasi ini
                            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda
                            ketika Anda menggunakan layanan kami.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Informasi yang Kami Kumpulkan</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Kami dapat mengumpulkan informasi berikut:
                        </p>
                        <ul className="text-text-muted space-y-2">
                            <li>Nama lengkap dan alamat email</li>
                            <li>Nomor telepon dan alamat</li>
                            <li>Informasi pembayaran (diproses oleh pihak ketiga yang aman)</li>
                            <li>Data penggunaan layanan dan preferensi</li>
                            <li>Informasi perangkat dan lokasi umum</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Penggunaan Informasi</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Informasi yang kami kumpulkan digunakan untuk:
                        </p>
                        <ul className="text-text-muted space-y-2">
                            <li>Menyediakan dan meningkatkan layanan kami</li>
                            <li>Memproses transaksi dan mengirim konfirmasi</li>
                            <li>Mengirim informasi penting terkait layanan</li>
                            <li>Merespon pertanyaan dan memberikan dukungan</li>
                            <li>Menganalisis penggunaan untuk pengembangan layanan</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Keamanan Data</h2>
                        <p className="text-text-muted leading-relaxed">
                            Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda
                            dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Ini termasuk enkripsi SSL,
                            firewall, dan akses terbatas ke informasi pribadi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Hak Pengguna</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Anda memiliki hak untuk:
                        </p>
                        <ul className="text-text-muted space-y-2">
                            <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                            <li>Meminta koreksi data yang tidak akurat</li>
                            <li>Meminta penghapusan data pribadi Anda</li>
                            <li>Menolak pemrosesan data untuk tujuan pemasaran</li>
                            <li>Menarik persetujuan yang telah diberikan</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">6. Kontak</h2>
                        <p className="text-text-muted leading-relaxed">
                            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di:
                        </p>
                        <div className="glass p-6 rounded-xl mt-4">
                            <p className="text-text-muted">
                                Email: <span className="text-white">privasi@cendikia.link</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
