import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Syarat & Ketentuan - CendikiaLink',
    description: 'Syarat dan ketentuan penggunaan layanan CendikiaLink',
};

export default function SyaratKetentuanPage() {
    return (
        <div className="container py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    <span className="text-gradient-tech">Syarat</span>{' '}
                    <span className="text-gradient-academic">& Ketentuan</span>
                </h1>

                <p className="text-text-muted text-sm mb-8">
                    Terakhir diperbarui: Januari 2026
                </p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Penerimaan Ketentuan</h2>
                        <p className="text-text-muted leading-relaxed">
                            Dengan mengakses dan menggunakan layanan CendikiaLink, Anda menyetujui untuk terikat oleh
                            syarat dan ketentuan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak
                            menggunakan layanan kami.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Layanan Kami</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            CendikiaLink menyediakan layanan dalam dua kategori utama:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="glass p-4 rounded-xl">
                                <h3 className="font-bold text-tech-primary mb-2">IT Services</h3>
                                <ul className="text-text-muted text-sm space-y-1">
                                    <li>• Web Development</li>
                                    <li>• Mobile Apps</li>
                                    <li>• UI/UX Design</li>
                                    <li>• Cloud Solutions</li>
                                </ul>
                            </div>
                            <div className="glass p-4 rounded-xl">
                                <h3 className="font-bold text-academic-primary mb-2">Academic Services</h3>
                                <ul className="text-text-muted text-sm space-y-1">
                                    <li>• Parafrase & Humanize</li>
                                    <li>• Jurnal Scopus</li>
                                    <li>• Penulisan Ilmiah</li>
                                    <li>• Olah Data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Kewajiban Pengguna</h2>
                        <p className="text-text-muted leading-relaxed mb-4">
                            Sebagai pengguna layanan kami, Anda setuju untuk:
                        </p>
                        <ul className="text-text-muted space-y-2">
                            <li>Memberikan informasi yang akurat dan lengkap</li>
                            <li>Menggunakan layanan sesuai dengan hukum yang berlaku</li>
                            <li>Tidak menyalahgunakan atau merusak layanan kami</li>
                            <li>Menjaga kerahasiaan akun dan informasi login</li>
                            <li>Membayar biaya layanan sesuai ketentuan yang disepakati</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Pembayaran dan Refund</h2>
                        <p className="text-text-muted leading-relaxed">
                            Pembayaran harus dilakukan sesuai dengan metode yang disediakan. Kebijakan refund
                            akan mengikuti ketentuan yang disepakati dalam kontrak proyek masing-masing.
                            Untuk layanan akademik, refund dapat diajukan dalam waktu 7 hari setelah pembayaran
                            jika layanan belum dimulai.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Hak Kekayaan Intelektual</h2>
                        <p className="text-text-muted leading-relaxed">
                            Semua konten, desain, dan kode yang dihasilkan oleh CendikiaLink untuk klien menjadi
                            milik klien setelah pembayaran penuh diselesaikan, kecuali disepakati lain secara tertulis.
                            CendikiaLink berhak menampilkan proyek dalam portofolio dengan izin klien.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">6. Batasan Tanggung Jawab</h2>
                        <p className="text-text-muted leading-relaxed">
                            CendikiaLink tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau
                            konsekuensial yang timbul dari penggunaan layanan kami. Tanggung jawab maksimal kami
                            terbatas pada jumlah yang dibayarkan untuk layanan terkait.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">7. Perubahan Ketentuan</h2>
                        <p className="text-text-muted leading-relaxed">
                            Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diumumkan
                            melalui website kami. Penggunaan berkelanjutan setelah perubahan dianggap sebagai
                            penerimaan ketentuan baru.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">8. Kontak</h2>
                        <p className="text-text-muted leading-relaxed">
                            Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
                        </p>
                        <div className="glass p-6 rounded-xl mt-4">
                            <p className="text-text-muted">
                                Email: <span className="text-white">legal@cendikia.link</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
