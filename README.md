````markdown
# Aplikasi Kurs Mata Uang

Ini adalah aplikasi web sederhana yang menampilkan kurs mata uang dalam USD dengan data yang diperoleh dari API CurrencyFreaks. Aplikasi ini menampilkan kurs pertukaran untuk mata uang yang dipilih, beserta nama negara, harga beli (we buy), dan harga jual (we sell).

## Tugas Ke-2 Program Studi Independent di Hacktiv8

Proyek ini merupakan Tugas Ke-2 dari Program Studi Independent di Hacktiv8.
````
## Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. Clone repositori ini ke mesin lokal Anda:

   ```bash
   git clone <repository-url>
   ```


2. Buka direktori proyek:

   ```bash
   cd aplikasi-kurs-mata-uang
   ```

3. Instal dependensi:

   ```bash
   npm install
   ```

4. Dapatkan kunci API dari [CurrencyFreaks](https://currencyfreaks.com/) dan gantilah nilai `API_KEY` di file `CurrencyExchange.js` dengan kunci API Anda.

5. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

6. Buka peramban web Anda dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## Fitur

- Menampilkan kurs pertukaran mata uang dalam USD.
- Menampilkan nama negara yang sesuai dengan setiap mata uang.
- Menghitung harga beli dan harga jual berdasarkan kurs pertukaran.

## Teknologi yang Digunakan

- React: Pustaka JavaScript untuk membangun antarmuka pengguna.
- Axios: Klien HTTP berbasis promise untuk melakukan permintaan API.
- Tailwind CSS: Kerangka kerja CSS yang berorientasi pada utilitas untuk penggayaan.

## Penyedia Data API

Aplikasi ini menggunakan data yang diperoleh dari API CurrencyFreaks. Pastikan untuk membaca [Syarat Layanan](https://currencyfreaks.com/terms) dan [Harga](https://currencyfreaks.com/pricing) mereka untuk penggunaan API.

## Tangkapan Layar

![image](https://github.com/AryaGunawann/Assignment2_Hacktiv8/assets/113499162/94f6cd8b-10a1-4d5d-96d7-4c40dd792431)

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](LICENSE) untuk detailnya.

## Penghargaan

Terima kasih kepada CurrencyFreaks yang telah menyediakan data kurs pertukaran mata uang.
