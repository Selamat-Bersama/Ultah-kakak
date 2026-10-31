# 🎂 Website Ulang Tahun — Novi Yulia Anggraini (29)

Kado digital dari Ayah, Mama, dan dua adik untuk Novi.

## Isi website
Website berbentuk rangkaian slide layar penuh yang **berjalan otomatis**:
1. **Sampul** — ketuk "Buka", musik mulai diputar.
2. **Pembuka** — nama, umur 29, foto utama Novi.
3. **Permohonan** — lilin; ketuk untuk meniup (atau tertiup sendiri setelah waktunya).
4. **Bab I – Dari Ayah**, **Bab II – Dari Mama**, **Bab III – Dari Adik-adik** — foto lalu surat, satu paragraf per slide.
5. **Bab IV – Kenangan** — galeri foto satu per satu.
6. **Penutup** — tombol "Putar dari awal".

### Slide otomatis
- Lama tiap slide dihitung dari **jumlah kata** di slide itu (kecepatan baca `kecepatanBaca`, bawaan 150 kata/menit), ditambah waktu animasi teks, waktu melihat foto, dan jeda singkat.
- Bisa tetap digeser/di-scroll manual, atau pakai tombol ↑ ↓. Setelah pindah manual, hitungan waktu dimulai lagi untuk slide yang sedang dibuka.
- Tombol ⏸ untuk menjeda, atau **tahan layar** untuk berhenti sejenak.

### Musik
Musik latar diambil dari YouTube (`youtube` di CONFIG, berisi ID video). Ketika sampul diketuk, musik mulai dengan volume naik perlahan. Bila browser memblokir suara, tombol musik di kanan bawah akan berkedip — ketuk untuk memutar.

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
- `youtube` → ganti ID video untuk lagu lain; `musikMulaiDetik` untuk mulai dari detik tertentu; `musik: 'musik/lagu.mp3'` sebagai cadangan bila video tak bisa diputar.
- `kecepatanBaca` → kecilkan angkanya bila slide terasa terlalu cepat.
- Foto & caption bisa ditambah/dikurangi di daftar `foto` dan `galeri`.

## Online gratis dengan GitHub Pages
1. Upload semua file ini ke repo `Ultah-kakak`.
2. Buka **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
3. Tunggu 1–2 menit, website tampil di `https://selamat-bersama.github.io/Ultah-kakak/`.
