# 🎂 Website Ulang Tahun — Novi Yulia Anggraini (29)

Kado digital dari Ayah, Mama, dan dua adik untuk Novi.

## Isi website
1. **Amplop pembuka** — diketuk untuk membuka, lalu confetti & balon.
2. **Hero** — nama, umur 29 (angka berjalan), foto utama Novi.
3. **Kue & lilin** — ketuk lilin / tombol untuk meniup, muncul doa & confetti.
4. **Bab Satu – Dari Ayah** — foto polaroid + surat dengan efek mengetik.
5. **Bab Dua – Dari Mama** — foto polaroid + surat.
6. **Bab Tiga – Dari Adik-adik** — dua surat dari masing-masing adik.
7. **Galeri kenangan** — foto bisa diketuk untuk diperbesar.
8. **Penutup** — tombol "Rayakan Lagi".

## Cara memasukkan foto
Taruh foto di folder `foto/` dengan nama persis seperti ini (format .jpg):

| File | Dipakai untuk |
|---|---|
| `novi-utama.jpg` | Foto utama Novi di bagian atas |
| `ayah-1.jpg`, `ayah-2.jpg` | Foto Ayah bersama Novi |
| `mama-1.jpg`, `mama-2.jpg` | Foto Mama bersama Novi |
| `adik1-1.jpg` | Foto adik pertama bersama Novi |
| `adik2-1.jpg` | Foto adik kedua bersama Novi |
| `galeri-1.jpg` … `galeri-6.jpg` | Galeri kenangan |

Selama fotonya belum ada, website menampilkan bingkai cantik berisi nama file yang harus diunggah.

## Mengubah kata-kata, nama adik, tanggal, musik
Semua ada di bagian **CONFIG** paling atas file `script.js`:
- `nama` di masing-masing adik (`'Adik Pertama'`, `'Adik Kedua'`) → ganti dengan nama asli.
- `pesan` → isi surat (satu baris = satu paragraf).
- `tanggal` → contoh `'12 November 2026'`.
- Musik: secara bawaan website memutar lagu "Happy Birthday" versi kotak musik (tanpa file). Kalau ingin lagu lain, taruh mp3 di folder `musik/`, lalu isi `musik: 'musik/lagu.mp3'`.
- Foto & caption bisa ditambah/dikurangi di daftar `foto` dan `galeri`.

## Online gratis dengan GitHub Pages
1. Upload semua file ini ke repo `Ultah-kakak`.
2. Buka **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
3. Tunggu 1–2 menit, website tampil di `https://selamat-bersama.github.io/Ultah-kakak/`.
