# Cendekia Link - Landing Page

Cendekia Link adalah platform profesional yang menyediakan solusi ekosistem digital (Web & App Development) dan pendampingan layanan akademik terpercaya. Website ini dirancang dengan estetika modern, performa tinggi, dan pengalaman pengguna yang intuitif.

## 🚀 Fitur Utama

- **Multi-Service Landing Page**: Halaman terpisah untuk Jasa Digital dan Layanan Akademik.
- **Smart WhatsApp Integration**: Integrasi template pesan otomatis yang sadar konteks (berubah sesuai halaman/proyek yang sedang dilihat).
- **Dedicated Portfolios**: Halaman khusus untuk menampilkan detail proyek web development dengan narasi fitur unggulan.
- **Modern UI/UX**: Dibangun dengan Tailwind CSS 4 dan Framer Motion untuk animasi yang halus dan profesional.
- **EmailJS Integration**: Form kontak siap pakai yang terintegrasi dengan EmailJS (saat ini disembunyikan untuk memprioritaskan WhatsApp).
- **Automated Deployment**: Terkonfigurasi dengan GitHub Actions untuk deployment otomatis ke GitHub Pages.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: GitHub Actions & GitHub Pages

## 📦 Instalasi Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/cendekiadigital/cendekiadigital.github.io.git
   cd landingpage
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variables:**
   Buat file `.env.local` di root folder dan tambahkan kredensial berikut:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🚀 Deployment (GitHub Pages)

Website ini dikonfigurasi untuk dideploy secara otomatis menggunakan GitHub Actions.

1. Pastikan `next.config.ts` memiliki pengaturan `output: 'export'`.
2. Push perubahan ke branch `main`.
3. Di GitHub: Pergi ke **Settings > Pages**.
4. Di bagian **Build and deployment > Source**, pilih **GitHub Actions**.
5. Cek tab **Actions** untuk melihat proses build.

## 📁 Struktur Folder Utama

- `src/app/`: Routing utama (Home, Jasa Digital, Layanan Akademik, Portfolio).
- `src/components/`: Komponen UI modular (Navbar, Hero, Services, Workflow, dll).
- `public/`: Aset statis (Gambar portofolio, logo, dll).
- `.github/workflows/`: Konfigurasi otomatisasi deployment.

---

Dikelola oleh **Cendekia Digital Team**.  
Untuk pertanyaan lebih lanjut, hubungi kami melalui [WhatsApp](https://wa.me/6285806326833).
