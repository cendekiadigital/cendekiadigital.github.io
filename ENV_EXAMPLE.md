# Konfigurasi Email untuk Form Kontak

Buat file `.env.local` di root project dengan konfigurasi berikut:

```env
# Email Configuration
EMAIL_USER=email_anda@gmail.com
EMAIL_PASS=password_atau_app_password_gmail
```

## Cara Mendapatkan App Password Gmail:

### Langkah 1: Aktifkan 2-Step Verification
1. Buka Google Account: https://myaccount.google.com/
2. Login dengan akun Gmail yang akan digunakan
3. Klik menu "Security" di sebelah kiri
4. Scroll ke bagian "Signing in to Google"
5. Klik "2-Step Verification" (jika belum aktif)
6. Ikuti proses aktivasi (butuh nomor HP untuk verifikasi)

### Langkah 2: Generate App Password
1. Setelah 2-Step Verification aktif, kembali ke halaman Security
2. Scroll ke bawah cari bagian "How you sign in to Google"
3. Klik "App passwords" (jika tidak ada, coba: https://myaccount.google.com/apppasswords)
4. **Jika muncul pesan "This setting is not available for your account":**
   - Gunakan akun Gmail pribadi, bukan akun Google Workspace/Google Apps for Business
   - Pastikan 2-Step Verification sudah benar-benar aktif
   - Coba refresh halaman dan login ulang
5. Di dropdown "Select app", pilih "Mail"
6. Di dropdown "Select device", pilih "Other (Custom name)"
7. Ketik nama: "Cendekia Website" 
8. Klik tombol "Generate"
9. Akan muncul password 16 karakter (contoh: `abcd efgh ijkl mnop`)
10. Copy password ini tanpa spasi

### Alternatif Jika App Password Tidak Tersedia:
**Opsi 1: Gunakan Email Service Lain**
- Gunakan Outlook/Hotmail (tidak perlu App Password)
- Setup dengan konfigurasi SMTP Outlook

**Opsi 2: Gunakan Third-Party Service**
- Gunakan SendGrid, Mailgun, atau Resend
- Lebih mudah setup dan lebih reliable

**Opsi 3: Gunakan Form Forwarding**
- Form mengirim ke database atau Google Sheets
- Dapat notifikasi via email lain

### Langkah 3: Setup Environment
1. Buat file `.env.local` di root project
2. Isi dengan konfigurasi:
   ```env
   EMAIL_USER=email_anda@gmail.com
   EMAIL_PASS=password16karaktertanpaspati
   ```

### Catatan Penting:
- App Password hanya muncul sekali, simpan baik-baik
- Gunakan email Gmail yang sudah aktif 2-Step Verification
- Password tidak boleh menggunakan spasi, hanya 16 karakter
- Jika lupa password, ulangi langkah generate ulang

## Penggunaan:

Form kontak akan mengirim email langsung ke `hello@Cendekia.link.id` dengan format HTML yang sudah disiapkan.
