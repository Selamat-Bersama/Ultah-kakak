/* =========================================================
   PENGATURAN — ubah bagian ini saja untuk mengganti isi
   ========================================================= */
const CONFIG = {
  nama: 'Novi Yulia Anggraini',
  panggilan: 'Novi',
  umur: 29,
  // Tanggal ulang tahun (opsional), contoh: '12 November 2026'. Kosongkan bila tidak ingin ditampilkan.
  tanggal: '',

  // ---------- MUSIK LATAR ----------
  // ID video YouTube (bagian setelah youtu.be/ ...). Contoh link: https://youtu.be/pVfo6JPYmFY
  youtube: 'pVfo6JPYmFY',
  musikMulaiDetik: 0,   // mulai lagu dari detik ke-berapa
  volume: 70,           // 0–100
  // Cadangan bila video YouTube tidak bisa diputar: taruh mp3 di folder "musik/", contoh: 'musik/lagu.mp3'
  musik: '',

  // ---------- SLIDE OTOMATIS ----------
  // Kecepatan membaca (kata per menit). Makin kecil = slide makin lama.
  kecepatanBaca: 150,

  // ---------- UCAPAN DARI AYAH ----------
  ayah: {
    label: 'Dari Ayah',
    judul: 'Untuk Putri Kecil Ayah',
    sapaan: 'Novi, anakku sayang,',
    pesan: [
      'Rasanya baru kemarin Ayah menggendongmu untuk pertama kali, tangan mungilmu menggenggam jari Ayah erat sekali. Hari ini kamu sudah 29 tahun, tumbuh menjadi perempuan yang kuat, baik hati, dan membuat Ayah bangga setiap harinya.',
      'Maafkan Ayah kalau dulu sering terlalu keras atau kurang bisa mengungkapkan sayang dengan kata-kata. Tapi ketahuilah, tidak ada satu hari pun Ayah berhenti mendoakanmu.',
      'Semoga Allah selalu menjagamu, memberimu kesehatan, rezeki yang berkah, dan kebahagiaan yang tidak pernah habis. Apa pun yang kamu hadapi, ingat: Ayah selalu ada di belakangmu.',
    ],
    tandaTangan: 'Ayah',
    foto: [
      { src: 'foto/ayah-1.jpg', caption: 'Bersama Ayah', pos: '50% 30%' },
      { src: 'foto/ayah-2.jpg', caption: 'Putri kecil Ayah', pos: '50% 40%' },
    ],
  },

  // ---------- UCAPAN DARI MAMA ----------
  mama: {
    label: 'Dari Mama',
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
      { src: 'foto/mama-2.jpg', caption: 'Ulang tahun ke-4', pos: '50% 35%' },
    ],
  },

  // ---------- UCAPAN DARI ADIK-ADIK ----------
  adik: {
    label: 'Dari Adik-adik',
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
        foto: [{ src: 'foto/adik1-1.jpg', caption: 'Dirangkul Kakak', pos: '50% 62%' }],
      },
      {
        nama: 'Adik Kedua', // ← ganti dengan nama adik kedua
        sapaan: 'Kakakku yang paling cantik,',
        pesan: [
          'Happy birthday, Kak! Dari aku masih kecil sampai sekarang, Kakak selalu jagain aku, kadang galak juga sih, tapi aku tahu itu karena sayang.',
          'Semoga di umur 29 ini Kakak selalu sehat, rezekinya lancar, dikelilingi orang-orang baik, dan selalu bahagia. Jangan lupa traktirannya ya, Kak!',
        ],
        tandaTangan: 'Adik bungsumu',
        foto: [{ src: 'foto/adik2-2.jpg', caption: 'Kakak & Adik', pos: '50% 45%' }],
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
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

/* ---------- Pembuat slide ---------- */
const img = (f, cls = '') =>
  `<img class="${cls}" src="${esc(f.src)}" alt="${esc(f.caption || '')}" style="object-position:${esc(f.pos || '50% 30%')}" onerror="this.closest('figure')?.classList.add('missing')">`;

const words = (text) => String(text).trim().split(/\s+/).map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(' ');

function slideHero() {
  return `
  <section class="slide s-hero" data-chapter="Pembuka" data-photos="1">
    <figure class="hero-photo rv" style="--d:.1s">${img({ src: 'foto/novi-utama.jpg', caption: CONFIG.panggilan, pos: '50% 25%' })}</figure>
    <div class="hero-copy">
      <p class="eyebrow rv" style="--d:.5s" data-read>${esc(CONFIG.tanggal || 'Hari istimewamu')}</p>
      <h1 class="display rv" style="--d:.7s" data-read><em>Selamat</em> Ulang Tahun</h1>
      <p class="hero-name rv" style="--d:1s" data-read>${esc(CONFIG.nama)}</p>
      <div class="age rv" style="--d:1.25s">
        <span class="age-num" data-count="${CONFIG.umur}">${CONFIG.umur}</span>
        <span class="age-cap">tahun</span>
      </div>
      <p class="hero-sub rv" style="--d:1.6s" data-read>Sebuah kado kecil, dari keluarga yang selalu menyayangimu.</p>
    </div>
  </section>`;
}

function slideWish() {
  return `
  <section class="slide s-wish" data-chapter="Permohonan" data-kind="wish">
    <div class="wish-glow"></div>
    <p class="eyebrow rv" style="--d:.2s">Sebelum kita mulai</p>
    <div class="wish-text">
      <h2 class="title rv wish-before" style="--d:.4s" data-read>Buat satu permohonan</h2>
      <p class="lead rv wish-before" style="--d:.7s" data-read>Pejamkan mata sejenak, ucapkan doamu dalam hati, lalu tiup lilinnya.</p>
      <h2 class="title wish-after">Aamiin.</h2>
      <p class="lead wish-after">Semoga semua doamu dikabulkan Allah SWT, di waktu terbaik-Nya.</p>
    </div>
    <button class="candle-wrap rv" style="--d:1s" id="candleBtn" aria-label="Tiup lilin">
      <span class="halo"></span>
      <span class="flame"><i></i></span>
      <span class="wick"></span>
      <span class="candle"></span>
      <span class="holder"></span>
      <span class="smoke"></span>
    </button>
    <p class="tap-hint rv" style="--d:1.4s">Ketuk lilin untuk meniup</p>
  </section>`;
}

function slideChapter(n, d, intro) {
  const photos = d.foto || [];
  return `
  <section class="slide s-chapter" data-chapter="${esc(d.label)}" data-photos="${photos.length}">
    <p class="eyebrow rv" style="--d:.2s" data-read>Bab ${ROMAN[n]} · ${esc(d.label)}</p>
    <h2 class="title rv" style="--d:.45s" data-read>${esc(d.judul)}</h2>
    ${intro ? `<p class="lead rv" style="--d:.7s" data-read>${esc(intro)}</p>` : ''}
    <div class="frames frames-${photos.length}">
      ${photos.map((f, i) => `
        <figure class="frame rv" style="--d:${0.9 + i * 0.25}s">${img(f)}<figcaption>${esc(f.caption)}</figcaption></figure>`).join('')}
    </div>
  </section>`;
}

function slidePerson(s, chapter) {
  return `
  <section class="slide s-person" data-chapter="${esc(chapter)}" data-photos="${s.foto.length}">
    <figure class="frame tall rv" style="--d:.2s">${img(s.foto[0])}<figcaption>${esc(s.foto[0].caption)}</figcaption></figure>
    <p class="eyebrow rv" style="--d:.6s">Dari</p>
    <h2 class="title rv" style="--d:.8s" data-read>${esc(s.nama)}</h2>
  </section>`;
}

function slidesLetter(d, chapter, bg) {
  const n = d.pesan.length;
  return d.pesan.map((p, i) => `
  <section class="slide s-letter" data-chapter="${esc(chapter)}">
    ${bg ? `<div class="bg" style="background-image:url('${esc(bg)}')"></div>` : ''}
    <div class="letter">
      ${i === 0 ? `<p class="greeting rv" style="--d:.15s" data-read>${esc(d.sapaan)}</p>` : '<span class="quote rv" style="--d:.1s">&ldquo;</span>'}
      <p class="para" data-read data-words>${words(p)}</p>
      ${i === n - 1 ? `<p class="sign rv" data-late>— ${esc(d.tandaTangan)}</p>` : ''}
      <p class="pager rv" style="--d:.3s">${i + 1} / ${n}</p>
    </div>
  </section>`).join('');
}

function slidesGallery() {
  const g = CONFIG.galeri;
  return `
  <section class="slide s-chapter s-gallery-intro" data-chapter="Kenangan">
    <p class="eyebrow rv" style="--d:.2s" data-read>Bab ${ROMAN[3]} · Kenangan</p>
    <h2 class="title rv" style="--d:.45s" data-read>Potret Perjalananmu</h2>
    <p class="lead rv" style="--d:.75s" data-read>Setiap foto menyimpan cerita, dan setiap cerita ada kamu di dalamnya.</p>
  </section>` + g.map((f, i) => `
  <section class="slide s-photo" data-chapter="Kenangan" data-photos="1">
    <div class="bg blur" style="background-image:url('${esc(f.src)}')"></div>
    <figure class="photo-main">${img(f, 'kb')}</figure>
    <div class="photo-cap">
      <span class="idx rv" style="--d:.5s">${String(i + 1).padStart(2, '0')} — ${String(g.length).padStart(2, '0')}</span>
      <p class="rv" style="--d:.7s" data-read>${esc(f.caption)}</p>
    </div>
  </section>`).join('');
}

function slideClosing() {
  return `
  <section class="slide s-closing" data-chapter="Penutup" data-kind="closing">
    <span class="rule rv" style="--d:.2s"></span>
    <h2 class="display rv" style="--d:.4s" data-read>Kami sayang kamu, <em>${esc(CONFIG.panggilan)}</em></h2>
    <p class="lead rv" style="--d:.8s" data-read>Apa pun yang terjadi, sejauh apa pun langkahmu, rumah ini selalu menunggumu pulang. Selamat ulang tahun yang ke-${CONFIG.umur}.</p>
    <p class="sign rv" style="--d:1.2s" data-read>Ayah, Mama &amp; Adik-adik</p>
    <button class="ghost-btn rv" style="--d:1.6s" id="replayBtn">Putar dari awal</button>
    <p class="foot rv" style="--d:1.8s">Dibuat dengan cinta · ${new Date().getFullYear()}</p>
  </section>`;
}

function buildDeck() {
  const { ayah, mama, adik } = CONFIG;
  let html = slideHero() + slideWish();
  html += slideChapter(0, ayah) + slidesLetter(ayah, ayah.label, ayah.foto[0]?.src);
  html += slideChapter(1, mama) + slidesLetter(mama, mama.label, mama.foto[0]?.src);
  html += slideChapter(2, { ...adik, foto: adik.daftar.map((s) => s.foto[0]) }, adik.pengantar);
  adik.daftar.forEach((s) => {
    html += slidePerson(s, adik.label) + slidesLetter(s, adik.label, s.foto[0]?.src);
  });
  html += slidesGallery() + slideClosing();
  $('#deck').innerHTML = html;

  // Atur kecepatan munculnya kata, supaya paragraf panjang tetap muncul ≤ 2 detik
  $$('.para[data-words]').forEach((p) => {
    const n = p.querySelectorAll('.w').length;
    const step = Math.min(45, 2000 / n);
    p.style.setProperty('--step', step + 'ms');
    p.dataset.reveal = Math.round(400 + n * step + 700);
    const sign = p.parentElement.querySelector('[data-late]');
    if (sign) sign.style.setProperty('--d', (+p.dataset.reveal + 200) / 1000 + 's');
  });
}

/* ---------- Hitung lama tampil tiap slide (berdasarkan waktu baca) ---------- */
function slideDuration(slide) {
  const text = $$('[data-read]', slide).map((e) => e.textContent).join(' ');
  const n = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readMs = (n / CONFIG.kecepatanBaca) * 60000;           // waktu membaca
  const para = $('.para', slide);
  const revealMs = para ? +para.dataset.reveal : 1600;          // waktu animasi muncul
  const photoMs = (+slide.dataset.photos || 0) * 1400;          // waktu menikmati foto
  const breathe = 1800;                                          // jeda napas sebelum pindah
  let ms = revealMs + readMs + photoMs + breathe;
  if (slide.classList.contains('s-photo')) ms = Math.max(ms, 6000);
  return Math.round(Math.max(ms, 4500));
}

/* ---------- Partikel emas di latar ---------- */
const dust = (() => {
  const c = $('#dust'), ctx = c.getContext('2d');
  let W, H, parts = [], sparks = [];
  const resize = () => {
    W = innerWidth; H = innerHeight;
    c.width = W * devicePixelRatio; c.height = H * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  };
  addEventListener('resize', resize); resize();
  const count = reduced ? 0 : Math.min(60, Math.round((W * H) / 16000));
  for (let i = 0; i < count; i++) parts.push(mk(true));
  function mk(initial) {
    return { x: Math.random() * W, y: initial ? Math.random() * H : H + 10, r: Math.random() * 1.4 + .3,
      vy: -(Math.random() * .25 + .06), vx: (Math.random() - .5) * .12, a: Math.random() * .5 + .15, t: Math.random() * 6 };
  }
  function burst(x = W / 2, y = H / 2, n = 90) {
    if (reduced) return;
    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2, v = Math.random() * 4.5 + 1;
      sparks.push({ x, y, vx: Math.cos(ang) * v, vy: Math.sin(ang) * v - 1.5, life: 0, max: 70 + Math.random() * 70, r: Math.random() * 1.8 + .5 });
    }
  }
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.t += .02;
      if (p.y < -10) Object.assign(p, mk(false));
      ctx.globalAlpha = p.a * (.6 + .4 * Math.sin(p.t));
      ctx.fillStyle = '#d9bb83';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
    }
    sparks = sparks.filter((s) => s.life < s.max);
    for (const s of sparks) {
      s.vx *= .97; s.vy = s.vy * .97 + .045; s.x += s.vx; s.y += s.vy; s.life++;
      ctx.globalAlpha = 1 - s.life / s.max;
      ctx.fillStyle = s.life % 9 < 5 ? '#f3dca8' : '#c9a35f';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  })();
  return { burst };
})();

/* ---------- Musik (YouTube, cadangan mp3) ---------- */
const music = (() => {
  const btn = $('#musicBtn');
  let yt = null, ready = false, want = false, playing = false, failed = false, fadeT;
  const sync = () => {
    btn.classList.toggle('on', playing);
    if (playing) btn.classList.remove('nudge');
  };

  // mp3 cadangan
  const audio = $('#bgm');
  const useMp3 = () => {
    failed = true;
    if (!CONFIG.musik) { btn.hidden = true; return; }
    audio.src = CONFIG.musik; audio.volume = CONFIG.volume / 100;
    audio.onplay = () => { playing = true; sync(); };
    audio.onpause = () => { playing = false; sync(); };
    if (want) audio.play().catch(() => btn.classList.add('nudge'));
  };

  if (CONFIG.youtube) {
    window.onYouTubeIframeAPIReady = () => {
      yt = new YT.Player('yt', {
        width: 200, height: 200, videoId: CONFIG.youtube,
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, loop: 1, playlist: CONFIG.youtube,
          playsinline: 1, rel: 0, start: CONFIG.musikMulaiDetik || 0, iv_load_policy: 3 },
        events: {
          onReady: () => { ready = true; if (want) start(); },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) playing = true;
            else if (e.data === YT.PlayerState.PAUSED) playing = false;
            else if (e.data === YT.PlayerState.ENDED) { yt.seekTo(CONFIG.musikMulaiDetik || 0); yt.playVideo(); }
            sync();
          },
          onError: () => { yt?.destroy?.(); useMp3(); },
        },
      });
    };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = useMp3;
    document.head.appendChild(s);
  } else useMp3();

  function fadeIn() {
    clearInterval(fadeT);
    let v = 0;
    yt.setVolume(0);
    fadeT = setInterval(() => { v += 4; yt.setVolume(Math.min(v, CONFIG.volume)); if (v >= CONFIG.volume) clearInterval(fadeT); }, 120);
  }
  function start() {
    if (failed) { audio.play().catch(() => btn.classList.add('nudge')); return; }
    if (!ready) return;
    yt.unMute(); fadeIn(); yt.playVideo();
  }
  // Dipanggil dari ketukan pertama (agar browser mengizinkan suara)
  function begin() {
    want = true; start();
    setTimeout(() => { if (!playing && !btn.hidden) btn.classList.add('nudge'); }, 3500);
  }
  btn.addEventListener('click', () => {
    want = true;
    if (playing) { failed ? audio.pause() : yt.pauseVideo(); }
    else start();
  });
  return { begin };
})();

/* ---------- Mesin slide otomatis ---------- */
const deck = (() => {
  let slides = [], cur = -1, dur = 5000, elapsed = 0, last = 0;
  let userPaused = false, held = false, autoTarget = -1;
  const bar = $('#bar'), el = $('#deck');

  function init() {
    slides = $$('.slide', el);
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) enter(slides.indexOf(e.target)); });
    }, { root: el, threshold: 0.6 });
    slides.forEach((s) => io.observe(s));
    requestAnimationFrame(tick);
  }

  function enter(i) {
    if (i === cur || i < 0) return;
    slides[cur]?.classList.remove('is-active');
    cur = i; autoTarget = -1;
    const s = slides[i];
    s.classList.add('is-active', 'seen');
    dur = slideDuration(s); elapsed = 0;
    if (s.dataset.kind === 'wish') wish.reset();
    if (s.dataset.kind === 'closing') setTimeout(() => dust.burst(innerWidth / 2, innerHeight * .35, 140), 600);
    const num = $('.age-num', s);
    if (num && !num.dataset.done) countUp(num);
    $('#hudChapter').textContent = s.dataset.chapter || '';
    $('#hudCount').textContent = `${String(i + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    $('#prevBtn').disabled = i === 0;
    $('#nextBtn').disabled = i === slides.length - 1;
  }

  function go(i) {
    if (i < 0 || i >= slides.length) return;
    autoTarget = i;
    el.scrollTo({ top: slides[i].offsetTop, behavior: reduced ? 'auto' : 'smooth' });
  }

  function onComplete() {
    const s = slides[cur];
    if (s.dataset.kind === 'wish' && !wish.done) { wish.blow(); return; }
    if (cur < slides.length - 1) go(cur + 1);
  }

  function tick(t) {
    const dt = last ? Math.min(t - last, 100) : 0; last = t;
    const running = !userPaused && !held && !document.hidden && autoTarget === -1 && cur >= 0 && cur < slides.length - 1;
    if (running) {
      elapsed += dt;
      if (elapsed >= dur) { elapsed = dur; onComplete(); }
    }
    bar.style.transform = `scaleX(${cur === slides.length - 1 ? 1 : Math.min(elapsed / dur, 1)})`;
    requestAnimationFrame(tick);
  }

  function setDuration(ms) { dur = ms; elapsed = 0; }
  function togglePause() {
    userPaused = !userPaused;
    document.body.classList.toggle('paused', userPaused);
  }

  // Tahan layar = jeda sementara (seperti story)
  let holdT;
  el.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    holdT = setTimeout(() => { held = true; document.body.classList.add('holding'); }, 280);
  });
  const release = () => { clearTimeout(holdT); held = false; document.body.classList.remove('holding'); };
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((ev) => el.addEventListener(ev, release));
  // Bila animasi gulir otomatis selesai tanpa memicu pergantian (mis. tergeser), lepaskan kunci
  el.addEventListener('scrollend', () => { if (autoTarget !== -1 && autoTarget !== cur) autoTarget = -1; });
  setInterval(() => { if (autoTarget !== -1 && autoTarget === cur) autoTarget = -1; }, 1500);

  return { init, go, togglePause, setDuration, get cur() { return cur; }, get count() { return slides.length; } };
})();

/* ---------- Angka umur berjalan ---------- */
function countUp(el) {
  el.dataset.done = '1';
  if (reduced) return;
  const to = +el.dataset.count, t0 = performance.now() + 1300, D = 1600;
  el.textContent = '0';
  (function f(t) {
    const p = Math.max(0, Math.min((t - t0) / D, 1));
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(f);
  })(performance.now());
}

/* ---------- Lilin ---------- */
const wish = {
  done: false,
  get el() { return $('.s-wish'); },
  reset() {
    this.done = false;
    this.el.classList.remove('blown');
  },
  blow() {
    if (this.done) return;
    this.done = true;
    this.el.classList.add('blown');
    const r = $('#candleBtn').getBoundingClientRect();
    setTimeout(() => dust.burst(r.left + r.width / 2, r.top + r.height * .25, 120), 350);
    // waktu membaca doa setelah lilin ditiup
    const after = $$('.wish-after', this.el).map((e) => e.textContent).join(' ').split(/\s+/).length;
    deck.setDuration(2200 + (after / CONFIG.kecepatanBaca) * 60000 + 2500);
  },
};

/* ---------- Mulai ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.title = `Selamat Ulang Tahun, ${CONFIG.panggilan}`;
  $('#coverName').textContent = CONFIG.nama;
  $('#monogram').textContent = CONFIG.panggilan[0];
  buildDeck();

  $('#beginBtn').addEventListener('click', () => {
    music.begin();
    document.body.classList.add('started');
    $('#deck').hidden = false;
    $('#hud').hidden = false;
    setTimeout(() => $('#cover').classList.add('gone'), 50);
    setTimeout(() => { deck.init(); dust.burst(innerWidth / 2, innerHeight * .4, 110); }, 700);
  }, { once: true });

  $('#candleBtn').addEventListener('click', () => wish.blow());
  $('#replayBtn').addEventListener('click', () => deck.go(0));
  $('#prevBtn').addEventListener('click', () => deck.go(deck.cur - 1));
  $('#nextBtn').addEventListener('click', () => deck.go(deck.cur + 1));
  $('#playBtn').addEventListener('click', () => deck.togglePause());

  addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('started')) return;
    if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); deck.go(deck.cur + 1); }
    if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); deck.go(deck.cur - 1); }
    if (e.key.toLowerCase() === 'p') deck.togglePause();
  });
});
