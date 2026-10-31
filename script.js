/* =========================================================
   PENGATURAN — ubah bagian ini saja untuk mengganti isi
   ========================================================= */
const CONFIG = {
  nama: 'Novi Yulia Anggraini',
  panggilan: 'Novi',
  umur: 29,
  // Tanggal ulang tahun (opsional), contoh: '12 November 2026'. Kosongkan bila tidak ingin ditampilkan.
  tanggal: '',
  // Musik latar (opsional): taruh file mp3 di folder "musik/" lalu tulis namanya, contoh: 'musik/lagu.mp3'
  musik: '',

  // ---------- UCAPAN DARI AYAH ----------
  ayah: {
    label: 'Dari Ayah',
    icon: '👨🏻',
    judul: 'Untuk Putri Kecil Ayah',
    sapaan: 'Novi, anakku sayang,',
    pesan: [
      'Rasanya baru kemarin Ayah menggendongmu untuk pertama kali, tangan mungilmu menggenggam jari Ayah erat sekali. Hari ini kamu sudah 29 tahun, tumbuh menjadi perempuan yang kuat, baik hati, dan membuat Ayah bangga setiap harinya.',
      'Maafkan Ayah kalau dulu sering terlalu keras atau kurang bisa mengungkapkan sayang dengan kata-kata. Tapi ketahuilah, tidak ada satu hari pun Ayah berhenti mendoakanmu.',
      'Semoga Allah selalu menjagamu, memberimu kesehatan, rezeki yang berkah, dan kebahagiaan yang tidak pernah habis. Apa pun yang kamu hadapi, ingat: Ayah selalu ada di belakangmu.',
    ],
    tandaTangan: 'Ayah',
    foto: [
      { src: 'foto/ayah-1.jpg', caption: 'Joget bareng Ayah', pos: '50% 30%' },
      { src: 'foto/ayah-2.jpg', caption: 'Putri kecil Ayah' },
    ],
  },

  // ---------- UCAPAN DARI MAMA ----------
  mama: {
    label: 'Dari Mama',
    icon: '👩🏻',
    judul: 'Untuk Belahan Hati Mama',
    sapaan: 'Sayangku Novi,',
    pesan: [
      'Selamat ulang tahun, Nak. Dua puluh sembilan tahun lalu Allah menitipkan hadiah terindah dalam hidup Mama, yaitu kamu. Sejak hari itu, hidup Mama tidak pernah sama lagi, jauh lebih penuh warna dan penuh syukur.',
      'Mama melihatmu tumbuh, jatuh, bangkit lagi, dan terus berjalan dengan hati yang lembut. Kamu bukan hanya anak bagi Mama, kamu juga sahabat, tempat bercerita, dan kakak yang luar biasa untuk adik-adikmu.',
      'Doa Mama tidak pernah putus: semoga kamu selalu sehat, bahagia, dimudahkan segala urusanmu, dan dipertemukan dengan semua hal baik yang kamu impikan. Jangan lupa makan, jangan terlalu capek, dan pulanglah kapan saja kamu rindu. Pelukan Mama selalu menunggumu.',
    ],
    tandaTangan: 'Mama',
    foto: [
      { src: 'foto/mama-1.jpg', caption: 'Mama & Novi', pos: '50% 40%' },
      { src: 'foto/mama-2.jpg', caption: 'Ulang tahun ke-4' },
    ],
  },

  // ---------- UCAPAN DARI ADIK-ADIK ----------
  adik: {
    label: 'Dari Adik-adik',
    icon: '👦🏻👦🏻',
    judul: 'Untuk Kakak Terbaik Kami',
    pengantar: 'Dua adik laki-laki yang mungkin jarang bilang sayang, tapi kali ini mau jujur.',
    daftar: [
      {
        nama: 'Adik Pertama', // ← ganti dengan nama adik pertama
        sapaan: 'Kak Novi,',
        pesan: [
          'Selamat ulang tahun yang ke-29, Kak! Makasih ya sudah jadi kakak yang sabar banget ngadepin aku dari kecil, yang suka ngalah, suka nraktir, dan selalu jadi tempat curhat paling aman.',
          'Mungkin aku jarang ngomong begini, tapi aku bangga punya kakak kayak kamu. Semoga makin sukses, makin bahagia, dan semua yang Kakak doakan cepat terkabul. Love you, Kak!',
        ],
        tandaTangan: 'Adikmu',
        foto: [
          { src: 'foto/adik1-1.jpg', caption: 'Dirangkul Kakak', pos: '50% 62%' },
        ],
      },
      {
        nama: 'Adik Kedua', // ← ganti dengan nama adik kedua
        sapaan: 'Kakakku yang paling cantik,',
        pesan: [
          'Happy birthday, Kak! Dari aku masih kecil sampai sekarang, Kakak selalu jagain aku, kadang galak juga sih, tapi aku tahu itu karena sayang.',
          'Semoga di umur 29 ini Kakak selalu sehat, rezekinya lancar, dikelilingi orang-orang baik, dan selalu bahagia. Jangan lupa traktirannya ya, Kak!',
        ],
        tandaTangan: 'Adik bungsumu',
        foto: [
          { src: 'foto/adik2-2.jpg', caption: 'Kakak & Adik', pos: '50% 45%' },
        ],
      },
    ],
  },

  // ---------- GALERI FOTO ----------
  galeri: [
    { src: 'foto/galeri-1.jpg', caption: 'Si manis dan boneka kesayangan' },
    { src: 'foto/galeri-2.jpg', caption: 'Rapi dan anggun sejak kecil' },
    { src: 'foto/galeri-3.jpg', caption: 'Topi putih di antara bunga' },
    { src: 'foto/galeri-4.jpg', caption: 'Gaya andalan: topi & jeans' },
    { src: 'foto/galeri-5.jpg', caption: 'Kenangan yang tak terlupa' },
    { src: 'foto/galeri-6.jpg', caption: 'Keluarga kita, dulu sampai sekarang' },
    { src: 'foto/galeri-7.jpg', caption: 'Boncengan berdua' },
  ],
};

/* =========================================================
   KODE — tidak perlu diubah
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---- Foto dengan cadangan elegan bila file belum ada ---- */
function photoHTML(src, label, pos) {
  return `<img class="photo" loading="lazy"${pos ? ` style="object-position:${esc(pos)}"` : ''} src="${esc(src)}" alt="${esc(label || '')}" data-label="${esc(label || '')}">`;
}
function attachFallbacks(root = document) {
  root.querySelectorAll('img.photo').forEach((img) => {
    if (img.dataset.src && !img.src) img.src = img.dataset.src;
    const fail = () => {
      const fb = document.createElement('div');
      fb.className = 'photo-fallback';
      fb.innerHTML = `<div><b>${esc(CONFIG.panggilan[0])}</b>${esc(img.dataset.label || 'Foto')}<br><small style="opacity:.6">${esc(img.getAttribute('src') || '')}</small></div>`;
      img.replaceWith(fb);
    };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fail();
    else img.addEventListener('error', fail, { once: true });
  });
}

/* ---- Bangun bagian ucapan ---- */
function letterHTML({ sapaan, pesan, tandaTangan, sub }) {
  return `
    <article class="letter reveal" data-typing>
      <p class="greeting">${esc(sapaan)}</p>
      ${pesan.map((p) => `<p data-text="${esc(p)}">${esc(p)}</p>`).join('')}
      <p class="sign">${esc(tandaTangan)}<small>${esc(sub || 'dengan penuh cinta')}</small></p>
    </article>`;
}
function photosHTML(list) {
  return `<div class="msg-photos reveal">${list.map((f) => `
      <figure class="polaroid" data-full="${esc(f.src)}" data-cap="${esc(f.caption)}">
        <div class="ph">${photoHTML(f.src, f.caption, f.pos)}</div>
        <figcaption>${esc(f.caption)}</figcaption>
      </figure>`).join('')}</div>`;
}
function buildMessages() {
  const { ayah, mama, adik } = CONFIG;
  let html = '';
  [['ayah', ayah, 'Bab Satu'], ['mama', mama, 'Bab Dua']].forEach(([key, d, bab]) => {
    html += `
    <section class="message-section theme-${key}">
      <p class="chapter-label reveal">${bab} · ${esc(d.label)}</p>
      <div class="from-icon reveal">${d.icon}</div>
      <h3 class="section-title reveal">${esc(d.judul)}</h3>
      ${photosHTML(d.foto)}
      ${letterHTML({ ...d, sub: `${d.tandaTangan} yang selalu menyayangimu` })}
    </section>`;
  });
  html += `
    <section class="message-section theme-adik">
      <p class="chapter-label reveal">Bab Tiga · ${esc(adik.label)}</p>
      <div class="from-icon reveal">${adik.icon}</div>
      <h3 class="section-title reveal">${esc(adik.judul)}</h3>
      <p class="section-sub reveal">${esc(adik.pengantar)}</p>
      <div class="siblings">
        ${adik.daftar.map((s) => `
          <div class="sib-card">
            <h4 class="sib-name reveal">${esc(s.nama)}</h4>
            ${photosHTML(s.foto)}
            ${letterHTML({ ...s, sub: s.nama })}
          </div>`).join('')}
      </div>
    </section>`;
  $('#messages').innerHTML = html;
}
function buildGallery() {
  $('#gallery').innerHTML = CONFIG.galeri.map((f) => `
    <figure class="g-item reveal" data-full="${esc(f.src)}" data-cap="${esc(f.caption)}">
      ${photoHTML(f.src, f.caption)}
      <figcaption>${esc(f.caption)}</figcaption>
    </figure>`).join('');
}

/* ---- Efek mengetik pada surat ---- */
function typeLetter(letter) {
  if (letter.dataset.typed) return;
  letter.dataset.typed = '1';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const paras = [...letter.querySelectorAll('p[data-text]')];
  paras.forEach((p) => { p.style.minHeight = p.offsetHeight + 'px'; p.textContent = ''; });
  let i = 0;
  const next = () => {
    if (i >= paras.length) return;
    const p = paras[i], text = p.dataset.text;
    let n = 0;
    p.classList.add('typing');
    const t = setInterval(() => {
      n += 2;
      p.textContent = text.slice(0, n);
      if (n >= text.length) { clearInterval(t); p.classList.remove('typing'); p.style.minHeight = ''; i++; setTimeout(next, 250); }
    }, 22);
  };
  next();
}

/* ---- Muncul saat di-scroll ---- */
function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.matches('[data-typing]')) setTimeout(() => typeLetter(e.target), 500);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

/* ---- Confetti ---- */
const confetti = (() => {
  const c = $('#confetti'), ctx = c.getContext('2d');
  let parts = [], raf = null;
  const colors = ['#e8a0b4', '#e6c27a', '#f5dfa8', '#b98ad3', '#ffffff', '#f3b9c8', '#8fd3e8'];
  const resize = () => { c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio; };
  addEventListener('resize', resize); resize();
  function burst(count = 160, x = innerWidth / 2, y = innerHeight / 3) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, v = 4 + Math.random() * 9;
      parts.push({
        x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 5,
        w: 6 + Math.random() * 6, h: 4 + Math.random() * 8,
        r: Math.random() * 6, vr: (Math.random() - .5) * .3,
        color: colors[(Math.random() * colors.length) | 0], life: 0,
        shape: Math.random() < .25 ? 'circle' : 'rect',
      });
    }
    if (!raf) loop();
  }
  function rain(count = 120) {
    for (let i = 0; i < count; i++) {
      parts.push({
        x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * .6,
        vx: (Math.random() - .5) * 2, vy: 2 + Math.random() * 3,
        w: 6 + Math.random() * 6, h: 4 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - .5) * .2,
        color: colors[(Math.random() * colors.length) | 0], life: 0, shape: 'rect',
      });
    }
    if (!raf) loop();
  }
  function loop() {
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts.forEach((p) => {
      p.vy += .18; p.vx *= .99; p.vy *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.color;
      if (p.shape === 'circle') { ctx.beginPath(); ctx.arc(0, 0, p.w / 2.5, 0, 7); ctx.fill(); }
      else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.cos(p.life / 8));
      ctx.restore();
    });
    parts = parts.filter((p) => p.y < innerHeight + 40 && p.life < 600);
    raf = parts.length ? requestAnimationFrame(loop) : null;
    if (!raf) ctx.clearRect(0, 0, innerWidth, innerHeight);
  }
  return { burst, rain };
})();

/* ---- Balon & kilau ---- */
function launchBalloons(n = 14) {
  const box = $('#balloons');
  const colors = ['#e8a0b4', '#e6c27a', '#b98ad3', '#f3b9c8', '#9fd0e8', '#f7d6df'];
  for (let i = 0; i < n; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    const col = colors[i % colors.length];
    b.style.background = col; b.style.borderBottomColor = col; b.style.color = col;
    b.style.left = Math.random() * 92 + '%';
    const s = .7 + Math.random() * .6;
    b.style.width = 54 * s + 'px'; b.style.height = 68 * s + 'px';
    b.style.animationDuration = 9 + Math.random() * 7 + 's';
    b.style.animationDelay = Math.random() * 3 + 's';
    b.innerHTML = '<i></i>';
    box.appendChild(b);
    b.addEventListener('animationend', () => b.remove());
  }
}
function sparkles() {
  const box = $('#sparkles');
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle'; s.textContent = '✦';
    s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 3 + 's'; s.style.fontSize = 8 + Math.random() * 10 + 'px';
    box.appendChild(s);
  }
}

/* ---- Kue & lilin ---- */
function buildCake() {
  const box = $('#candles');
  box.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const c = document.createElement('div');
    c.className = 'candle';
    c.innerHTML = '<span class="flame"></span>';
    c.addEventListener('click', () => blow(c));
    box.appendChild(c);
  }
  $('#wishDone').hidden = true;
  $('#blowBtn').hidden = false;
}
function blow(candle) {
  if (candle.classList.contains('out')) return;
  candle.classList.add('out');
  const sm = document.createElement('span'); sm.className = 'smoke'; candle.appendChild(sm);
  if (document.querySelectorAll('.candle:not(.out)').length === 0) {
    $('#blowBtn').hidden = true;
    setTimeout(() => {
      $('#wishDone').hidden = false;
      const r = $('#cakeEl').getBoundingClientRect();
      confetti.burst(200, r.left + r.width / 2, r.top + 40);
      launchBalloons(10);
    }, 500);
  }
}

/* ---- Lightbox ---- */
function setupLightbox() {
  const lb = $('#lightbox');
  document.addEventListener('click', (e) => {
    const fig = e.target.closest('[data-full]');
    if (!fig || !fig.querySelector('img.photo')) return;
    $('#lbImg').src = fig.dataset.full;
    $('#lbCap').textContent = fig.dataset.cap || '';
    lb.hidden = false;
  });
  lb.addEventListener('click', (e) => { if (e.target !== $('#lbImg')) lb.hidden = true; });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.hidden = true; });
}

/* ---- Musik ---- */
function setupMusic() {
  if (!CONFIG.musik) return null;
  const a = $('#bgm'), btn = $('#musicBtn');
  a.src = CONFIG.musik; btn.hidden = false;
  btn.addEventListener('click', () => (a.paused ? a.play() : a.pause()));
  a.addEventListener('play', () => btn.classList.add('playing'));
  a.addEventListener('pause', () => btn.classList.remove('playing'));
  a.addEventListener('error', () => { btn.hidden = true; });
  return a;
}

/* ---- Angka umur berjalan ---- */
function countAge() {
  const el = $('#ageNum'); let n = 0;
  const t = setInterval(() => { el.textContent = ++n; if (n >= CONFIG.umur) clearInterval(t); }, 45);
}

/* ---- Mulai ---- */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('locked');
  document.title = `Selamat Ulang Tahun, ${CONFIG.panggilan} 🎂`;
  $('.opening-name').textContent = CONFIG.nama;
  $('#heroName').textContent = CONFIG.nama;
  $('#heroDate').textContent = CONFIG.tanggal || 'Hari Istimewamu';
  $('#yearNow').textContent = new Date().getFullYear();

  buildMessages(); buildGallery(); buildCake();
  attachFallbacks(); setupLightbox(); sparkles();
  const audio = setupMusic();

  $('#openBtn').addEventListener('click', function () {
    this.classList.add('open');
    if (audio) audio.play().catch(() => {});
    setTimeout(() => {
      $('#main').hidden = false;
      $('#opening').classList.add('gone');
      document.body.classList.remove('locked');
      setupReveal(); countAge();
      confetti.burst(220); setTimeout(() => confetti.rain(140), 600);
      launchBalloons(16);
    }, 1500);
  }, { once: true });

  $('#blowBtn').addEventListener('click', () => {
    document.querySelectorAll('.candle').forEach((c, i) => setTimeout(() => blow(c), i * 220));
  });

  $('#replayBtn').addEventListener('click', () => {
    confetti.burst(240); confetti.rain(160); launchBalloons(16);
    buildCake();
    $('#cake').scrollIntoView({ behavior: 'smooth' });
  });
});
