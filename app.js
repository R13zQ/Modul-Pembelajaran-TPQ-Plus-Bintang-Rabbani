// =====================================================
// APP.JS — TPQ Plus Bintang Rabbani Controller
// =====================================================

const app = {
  // State
  bulanAktif: null,
  santriList: JSON.parse(localStorage.getItem('santriList') || '[]'),
  santriAktif: null,
  progress: JSON.parse(localStorage.getItem('progress') || '{}'),
  currentUser: null,
  
  // Init
  init() {
    this.initSparkles();
    this.initNavScroll();
    this.renderDownloadBulan();
    this.renderSantriList();
    this.initHamburger();
    this.initJinglePlayer();
    // Pilih bulan 1 by default
    setTimeout(() => this.pilihBulan(1), 500);
    
    // Check authentication on load
    this.checkAuth();

    // Autoplay gallery & hero videos
    this.initGalleryAutoplay();
  },

  initGalleryAutoplay() {
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
      v.muted = true;
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.muted = true;
            video.play().catch(() => {});
          }
        });
      }, { threshold: 0.25 });

      videos.forEach(video => observer.observe(video));
    }
  },

  checkAuth() {
    const session = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
    if (!session) {
      document.getElementById('login-overlay').style.display = 'flex';
      document.body.style.overflow = 'hidden'; // block scrolling
    } else {
      this.currentUser = JSON.parse(session);
      document.getElementById('login-overlay').style.display = 'none';
      document.body.style.overflow = 'auto'; // allow scrolling
      this.adjustUIForUser();
    }
  },

  handleLogin() {
    const uInput = document.getElementById('login-username');
    const pInput = document.getElementById('login-password');
    const err = document.getElementById('login-error-msg');
    if (!uInput || !pInput) return;

    const username = uInput.value.trim().toLowerCase();
    const password = pInput.value.trim();

    if (!username || !password) {
      if (err) {
        err.textContent = '❌ Username dan password tidak boleh kosong!';
        err.style.display = 'block';
      }
      return;
    }

    // 1. Check Super Admin
    if (username === 'zulkarnainr31' && password === '127388') {
      const user = { username: 'zulkarnainr31', role: 'superadmin' };
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = user;
      document.getElementById('login-overlay').style.display = 'none';
      document.body.style.overflow = 'auto';
      this.adjustUIForUser();
      this.showKonfeti();
      return;
    }

    // 2. Check Registered Users
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const found = users.find(u => u.username.toLowerCase() === username && u.password === password);
    if (found) {
      const user = { username: found.username, role: 'user' };
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser = user;
      document.getElementById('login-overlay').style.display = 'none';
      document.body.style.overflow = 'auto';
      this.adjustUIForUser();
      this.showKonfeti();
      return;
    }

    // Fail
    if (err) {
      err.textContent = '❌ Username atau Password salah!';
      err.style.display = 'block';
    }
  },

  logout() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    
    // Clear inputs
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-error-msg').style.display = 'none';
    
    // Show login screen
    document.getElementById('login-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Reset admin panel
    document.getElementById('admin-user-panel').style.display = 'none';
  },

  requireAuth(e) {
    const session = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
    if (!session) {
      if (e) e.preventDefault();
      this.checkAuth();
      return false;
    }
    return true;
  },

  adjustUIForUser() {
    const adminPanel = document.getElementById('admin-user-panel');
    if (adminPanel) {
      if (this.currentUser && this.currentUser.username === 'zulkarnainr31') {
        adminPanel.style.display = 'block';
        this.renderAdminUserList();
      } else {
        adminPanel.style.display = 'none';
      }
    }

    const tracingBadge = document.getElementById('tracing-user-badge');
    if (this.currentUser) {
      const name = this.currentUser.username || 'Santri';
      if (tracingBadge) tracingBadge.textContent = name;
    }
  },

  registerUser() {
    const uReg = document.getElementById('reg-username');
    const pReg = document.getElementById('reg-password');
    if (!uReg || !pReg) return;

    const username = uReg.value.trim();
    const password = pReg.value.trim();

    if (!username || !password) {
      alert('Username dan Password baru tidak boleh kosong!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (username.toLowerCase() === 'zulkarnainr31' || users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
      alert('Username tersebut sudah terdaftar!');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    uReg.value = '';
    pReg.value = '';
    
    this.renderAdminUserList();
    alert('User baru berhasil didaftarkan!');
  },

  renderAdminUserList() {
    const listBody = document.getElementById('admin-user-list');
    if (!listBody) return;

    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (users.length === 0) {
      listBody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:1rem; color:#78909c; font-style:italic">Belum ada pengguna terdaftar.</td></tr>`;
      return;
    }

    listBody.innerHTML = users.map((u, idx) => `
      <tr style="border-bottom:1px solid #ECEFF1">
        <td style="padding:.6rem 1rem; font-weight:700; color:#1A237E">${u.username}</td>
        <td style="padding:.6rem 1rem; color:#546e7a">${u.password}</td>
        <td style="padding:.6rem 1rem; text-align:center">
          <button onclick="app.deleteUser(${idx})" style="background:#FF8A80; color:#D50000; border:none; padding:.3rem .75rem; border-radius:8px; font-weight:800; font-size:.75rem; cursor:pointer">
            Hapus
          </button>
        </td>
      </tr>
    `).join('');
  },

  deleteUser(idx) {
    if (!confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) return;
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    users.splice(idx, 1);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    this.renderAdminUserList();
  },
  
  // === SPARKLES ===
  initSparkles() {
    const wrap = document.querySelector('.sparkle-wrap');
    if (!wrap) return;
    const emojis = ['⭐','✨','🌟','💫','🌈','🎵','🎉','❤️','🌸'];
    for (let i = 0; i < 15; i++) {
      const s = document.createElement('div');
      s.classList.add('sparkle');
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      s.style.left = `${Math.random() * 100}%`;
      s.style.animationDuration = `${8 + Math.random() * 12}s`;
      s.style.animationDelay = `${-Math.random() * 15}s`;
      wrap.appendChild(s);
    }
  },
  
  // === NAVBAR SCROLL ===
  initNavScroll() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.boxShadow = window.scrollY > 50 ? '0 6px 30px rgba(41,182,246,.3)' : '0 3px 20px rgba(41,182,246,.18)';
      }
    });
  },
  
  // === HAMBURGER ===
  initHamburger() {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        menu.classList.toggle('open');
      });
    }
  },
  
  // === NAVIGASI ===
  scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    document.querySelector('.hamburger')?.classList.remove('open');
    document.querySelector('.mobile-menu')?.classList.remove('open');
  },
  
  // === PILAR FLIP CARD ===
  flipCard(el) {
    el.classList.toggle('flipped');
  },
  
  // === PILIH BULAN ===
  pilihBulan(nomor) {
    this.bulanAktif = nomor;
    // Update active state pada cards
    document.querySelectorAll('.bulan-card').forEach((c, i) => {
      c.classList.toggle('active', i + 1 === nomor);
    });
    // Sembunyikan semua panel
    document.querySelectorAll('.bulan-panel').forEach(p => p.classList.remove('active'));
    // Tampilkan panel bulan terpilih
    const panel = document.getElementById(`panel-bulan-${nomor}`);
    if (panel) {
      panel.classList.add('active');
      // Render konten jika belum
      this.renderBulanContent(nomor);
    }
  },
  
  // === RENDER KONTEN BULAN ===
  renderBulanContent(nomor) {
    const bulan = KURIKULUM_DATA.bulan[nomor - 1];
    if (!bulan) return;
    // Render Hijaiyah tab
    const hijEl = document.getElementById(`hijaiyah-content-${nomor}`);
    if (hijEl && !hijEl.dataset.rendered) {
      hijEl.innerHTML = this.renderHijaiyahTab(bulan);
      hijEl.dataset.rendered = '1';
    }
    // Render Calistung tab
    const calEl = document.getElementById(`calistung-content-${nomor}`);
    if (calEl && !calEl.dataset.rendered) {
      calEl.innerHTML = this.renderCalistungTab(bulan);
      calEl.dataset.rendered = '1';
    }
    // Render Fiqih tab
    const fiqEl = document.getElementById(`fiqih-content-${nomor}`);
    if (fiqEl && !fiqEl.dataset.rendered) {
      fiqEl.innerHTML = this.renderFiqihTab(bulan);
      fiqEl.dataset.rendered = '1';
    }
    // Render Jadwal
    const jadEl = document.getElementById(`jadwal-standalone-content-${nomor}`);
    if (jadEl && !jadEl.dataset.rendered) {
      jadEl.innerHTML = this.renderJadwalTab(bulan);
      jadEl.dataset.rendered = '1';
    }
    // Render Hafalan
    const hafEl = document.getElementById(`hafalan-content-${nomor}`);
    if (hafEl && !hafEl.dataset.rendered) {
      hafEl.innerHTML = this.renderHafalanTab(bulan);
      hafEl.dataset.rendered = '1';
    }
  },
  
  renderHijaiyahTab(bulan) {
    let defaultIqra = (bulan.nomor >= 7) ? 2 : 1;
    
    let html = `
      <div class="iqra-board-container" data-bulan="${bulan.nomor}" data-current-iqra="${defaultIqra}" data-current-mode="halamanBuku">
        <h3 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;margin-bottom:1rem">
          📖 Metode Iqra Interaktif (Iqra 1 - 2)
        </h3>
        <p style="font-size:.85rem;color:#546e7a;margin-bottom:1.2rem">Klik kartu bacaan untuk mendengarkan pelafalan dan memicu respon maskot!</p>
        
        <!-- Iqra Level Selector -->
        <div class="iqra-level-selector" style="display:flex;gap:.5rem;margin-bottom:1.2rem;overflow-x:auto;padding-bottom:.5rem">
          <button class="iqra-lvl-btn" 
                  style="padding:.5rem 1rem;border-radius:20px;font-weight:800;font-size:.8rem;border:2px solid #E0E0E0;background:white;color:#546e7a;cursor:pointer"
                  onclick="app.switchIqraLevel(${bulan.nomor}, 'tabel', this)">
            Huruf Hijaiyah
          </button>
          ${[1, 2].map(lvl => `
            <button class="iqra-lvl-btn ${lvl === defaultIqra ? 'active' : ''}" 
                    style="padding:.5rem 1rem;border-radius:20px;font-weight:800;font-size:.8rem;border:2px solid ${lvl === defaultIqra ? 'var(--blue)' : '#E0E0E0'};background:${lvl === defaultIqra ? 'var(--blue)' : 'white'};color:${lvl === defaultIqra ? 'white' : '#546e7a'};cursor:pointer"
                    onclick="app.switchIqraLevel(${bulan.nomor}, ${lvl}, this)">
              Iqra ${lvl}
            </button>
          `).join('')}
        </div>
        
        <!-- Board Content Grid -->
        <div id="iqra-board-content-${bulan.nomor}" class="iqra-board-grid">
          ${this.getIqraContentHtml(defaultIqra, 'halamanBuku', 1)}
        </div>
      </div>
    `;
    return html;
  },

  getIqraContentHtml(level, mode, pageNum = 1) {
    if (level === 'tabel') {
      let html = `
        <div style="background:#FFF9C4; border-radius:20px; padding:1.5rem; border:2px solid #FFF59D; width:100%">
          <h4 style="margin:0 0 .5rem 0; font-family:'Poppins',sans-serif; font-weight:900; color:#F57F17; font-size:1.1rem; border-bottom:2px solid #FFF59D; padding-bottom:.5rem">
            ⭐ Tabel Huruf Hijaiyah (Alif - Ya)
          </h4>
          <p style="font-size:.8rem; color:#78909c; margin-bottom:1.5rem">Klik pada huruf untuk melihat detail makhraj, bunyi pelafalan, dan kata contoh!</p>
          
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(80px, 1fr)); gap:1rem">
            ${HIJAIYAH_DATA.huruf.map(h => `
              <div class="huruf-card" style="background:white; border:2px solid #FFF59D; border-radius:14px; padding:1.2rem .5rem; font-size:2.5rem; font-weight:bold; color:#1A237E; cursor:pointer; text-align:center; transition: transform 0.2s" onclick="app.showHurufDetail('${h.arab}')">
                ${h.arab}
                <div style="font-size:.75rem; color:#78909c; font-weight:800; margin-top:.4rem">${h.nama}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      return html;
    }

    const data = HIJAIYAH_DATA.iqra[`iqra${level}`];
    if (!data) return '<p>Data tidak ditemukan</p>';
    
    const pageData = data.pages.find(p => p.page === pageNum);
    if (!pageData) return '<p>Halaman tidak ditemukan</p>';
    
    let html = `
      <div class="iqra-page-wrapper" style="display:flex; flex-direction:column; gap:1.5rem; width:100%">
        
        <!-- Header Halaman -->
        <div style="display:flex; justify-content:space-between; align-items:center; background:#FFF9C4; padding:.75rem 1.2rem; border-radius:12px; border:1px solid #FFF59D; flex-wrap:wrap; gap:.5rem">
          <div style="font-weight:900; color:#1A237E; font-size:1.05rem">
            Halaman ${pageData.page}: ${pageData.title}
          </div>
          <div style="font-size:.8rem; color:#546e7a; font-weight:800; font-style:italic">
            ${pageData.intro}
          </div>
        </div>
        
        <!-- Konten Flex: Kiri (Bacaan), Kanan (Referensi) -->
        <div style="display:flex; gap:1.5rem; flex-wrap:wrap; width:100%">
          
          <!-- Kolom Kiri: Papan Bacaan (3 Baris) -->
          <div style="flex:2; min-width:300px; background:white; border-radius:20px; padding:1.5rem; border:2px solid #E0E0E0; display:flex; flex-direction:column; gap:1.2rem; align-items:stretch">
            ${pageData.rows.map(row => `
              <div style="display:flex; justify-content:space-around; align-items:center; padding:1rem .5rem; background:#F8FAFB; border-radius:14px; border:1px solid #ECEFF1; direction:rtl; gap:1rem; flex-wrap:wrap">
                ${row.map(word => `
                  <div class="huruf-card" style="background:#FFF; color:#1A237E; border:2px solid #CFD8DC; padding:.75rem 1.5rem; border-radius:12px; font-size:2.8rem; font-weight:bold; cursor:pointer; min-width:80px; text-align:center" onclick="app.playIqraWord('${word.replace(/'/g, "\\'")}', this)">
                    ${word}
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
          
          <!-- Kolom Kanan: Referensi Huruf -->
          <div style="flex:1.2; min-width:280px; background:#E3F2FD; border-radius:20px; padding:1.5rem; border:2px solid #BBDEFB; display:flex; flex-direction:column; gap:1rem">
            <h4 style="margin:0; font-family:'Poppins',sans-serif; font-weight:900; color:#0D47A1; font-size:.95rem; border-bottom:2px solid #BBDEFB; padding-bottom:.5rem">
              👉 Referensi Huruf Hijaiyah
            </h4>
            
            <div style="display:flex; flex-direction:column; gap:1.2rem; overflow-y:auto; max-height:400px">
              ${(pageData.lettersIntroduced || []).map(letterChar => {
                const letterInfo = HIJAIYAH_DATA.huruf.find(h => h.arab === letterChar) || { nama: letterChar, arab: letterChar };
                const fathahForm = letterChar + 'َ';
                const kasrahForm = letterChar + 'ِ';
                const dhammahForm = letterChar + 'ُ';
                const sukunForm = letterChar + 'ْ';
                const fathatainForm = letterChar + 'ً';
                const kasratainForm = letterChar + 'ٍ';
                const dhammatainForm = letterChar + 'ٌ';
                const tasydidForm = letterChar + 'ّ';
                
                return `
                  <div style="background:white; border-radius:14px; padding:1rem; border:1px solid #B3E5FC; display:flex; flex-direction:column; gap:.75rem">
                    <div style="display:flex; justify-content:space-between; align-items:center">
                      <span style="font-weight:900; color:#0D47A1; font-size:1.1rem">Huruf ${letterInfo.nama}</span>
                      <span style="font-size:2rem; font-weight:bold; color:#0D47A1">${letterInfo.arab}</span>
                    </div>
                    
                    <!-- Grid 8 Harakat -->
                    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:.4rem; text-align:center">
                      <div style="background:#FFF3E0; border:1px solid #FFE0B2; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${fathahForm}</div>
                        <div style="font-size:.65rem; color:#e65100; font-weight:800">Fathah</div>
                      </div>
                      <div style="background:#E8F5E9; border:1px solid #C8E6C9; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${kasrahForm}</div>
                        <div style="font-size:.65rem; color:#1b5e20; font-weight:800">Kasrah</div>
                      </div>
                      <div style="background:#E3F2FD; border:1px solid #BBDEFB; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${dhammahForm}</div>
                        <div style="font-size:.65rem; color:#0d47a1; font-weight:800">Dhammah</div>
                      </div>
                      <div style="background:#F3E5F5; border:1px solid #E1BEE7; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${sukunForm}</div>
                        <div style="font-size:.65rem; color:#4a148c; font-weight:800">Sukun</div>
                      </div>
                      <div style="background:#FFFDE7; border:1px solid #FFF9C4; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${fathatainForm}</div>
                        <div style="font-size:.65rem; color:#f57f17; font-weight:800">Fathatain</div>
                      </div>
                      <div style="background:#E0F7FA; border:1px solid #B2EBF2; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${kasratainForm}</div>
                        <div style="font-size:.65rem; color:#006064; font-weight:800">Kasratain</div>
                      </div>
                      <div style="background:#E8EAF6; border:1px solid #C5CAE9; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${dhammatainForm}</div>
                        <div style="font-size:.65rem; color:#1a237e; font-weight:800">Dhammatain</div>
                      </div>
                      <div style="background:#FFEBEE; border:1px solid #FFCDD2; border-radius:8px; padding:.3rem">
                        <div style="font-size:1.2rem; font-weight:bold">${tasydidForm}</div>
                        <div style="font-size:.65rem; color:#b71c1c; font-weight:800">Tasydid</div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
          
        </div>
        
        <!-- Navigasi Halaman -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.5rem; background:#ECEFF1; padding:.8rem 1.5rem; border-radius:14px; border:1px solid #CFD8DC">
          <button style="padding:.5rem 1.2rem; border-radius:20px; font-weight:800; font-size:.8rem; border:none; background:${pageNum > 1 ? 'var(--blue)' : '#CFD8DC'}; color:white; cursor:${pageNum > 1 ? 'pointer' : 'default'}" 
                  ${pageNum > 1 ? `onclick="app.navigateIqraPage('${level}', ${pageNum - 1}, this)"` : 'disabled'}>
            ⬅️ Halaman Sebelumnya
          </button>
          
          <span style="font-weight:900; color:#37474F; font-size:.9rem">
            Halaman ${pageNum} dari 32
          </span>
          
          <button style="padding:.5rem 1.2rem; border-radius:20px; font-weight:800; font-size:.8rem; border:none; background:${pageNum < 32 ? 'var(--blue)' : '#CFD8DC'}; color:white; cursor:${pageNum < 32 ? 'pointer' : 'default'}" 
                  ${pageNum < 32 ? `onclick="app.navigateIqraPage('${level}', ${pageNum + 1}, this)"` : 'disabled'}>
            Halaman Berikutnya ➡️
          </button>
        </div>
        
      </div>
    `;
    return html;
  },
  
  switchIqraLevel(bulanNomor, level, btn) {
    const container = btn.closest('.iqra-board-container');
    container.dataset.currentIqra = level;
    
    container.querySelectorAll('.iqra-lvl-btn').forEach(b => {
      b.style.background = 'white';
      b.style.color = '#546e7a';
      b.style.borderColor = '#E0E0E0';
    });
    btn.style.background = 'var(--blue)';
    btn.style.color = 'white';
    btn.style.borderColor = 'var(--blue)';
    
    const board = document.getElementById(`iqra-board-content-${bulanNomor}`);
    if (board) board.innerHTML = this.getIqraContentHtml(level, 'halamanBuku', 1);
  },
  
  switchIqraMode(bulanNomor, mode, btn) {
    // Mode selector is deprecated, so we do nothing or fallback
  },
  
  playIqraItem(el) {
    el.style.transform = 'scale(0.92)';
    setTimeout(() => el.style.transform = '', 150);
    this.showKonfeti();
    this.jumpMascot();
  },
  
  playIqraWord(word, el) {
    el.style.transform = 'scale(0.9)';
    el.style.borderColor = 'var(--orange)';
    el.style.background = '#FFF3E0';
    setTimeout(() => {
      el.style.transform = '';
      el.style.borderColor = '#CFD8DC';
      el.style.background = '#F8FAFB';
    }, 200);
    
    // Arabic text-to-speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // stop current audio first
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.65;
      window.speechSynthesis.speak(utterance);
    }
    
    this.showKonfeti();
    this.jumpMascot();
  },
  
  navigateIqraPage(level, pageNum, btn) {
    let container;
    if (btn) {
      container = btn.closest('.iqra-board-container');
    } else {
      container = document.querySelector(`.iqra-board-container[data-current-iqra="${level}"]`);
    }
    if (!container) return;
    
    const bulanNomor = container.dataset.bulan;
    const board = document.getElementById(`iqra-board-content-${bulanNomor}`);
    if (board) {
      board.innerHTML = this.getIqraContentHtml(level, 'halamanBuku', pageNum);
    }
  },
  
  showHurufDetail(arab) {
    const huruf = HIJAIYAH_DATA.huruf.find(h => h.arab === arab);
    if (!huruf) return;
    const modal = document.getElementById('modal-huruf');
    document.getElementById('modal-huruf-title').textContent = `Huruf ${huruf.nama}`;
    document.getElementById('modal-huruf-body').innerHTML = `
      <div style="text-align:center">
        <div style="font-size:6rem;direction:rtl;color:${huruf.warna};margin-bottom:1rem">${huruf.arab}</div>
        <div style="font-size:1.2rem;font-weight:800;color:#1A237E;margin-bottom:.5rem">${huruf.nama}</div>
        <div style="font-size:1rem;color:#546e7a;margin-bottom:1.5rem">Dibaca: "${huruf.bunyi}"</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem">
          ${huruf.contohKata ? `<div style="background:#F8FAFB;border-radius:14px;padding:1rem;text-align:center">
            <div style="font-size:2rem">${huruf.emoji}</div>
            <div style="font-size:1.1rem;direction:rtl;font-weight:700;margin:.3rem 0">${huruf.contohKata}</div>
            <div style="font-size:.78rem;color:#546e7a;font-weight:700">${huruf.artiKata}</div>
          </div>` : ''}
        </div>
        <div style="background:#F8FAFB;border-radius:14px;padding:1rem;margin-top:1rem">
          <div style="font-family:'Poppins',sans-serif;font-weight:800;margin-bottom:.75rem">Suku Kata</div>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center">
            ${(huruf.sukukata || []).map(s => `<span style="background:${huruf.warna};color:white;padding:.4rem .8rem;border-radius:20px;font-weight:800">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    modal.classList.add('open');
  },
  
  // === RENDER CALISTUNG TAB ===
  renderCalistungTab(bulan) {
    const num = bulan.nomor;
    let html = `<h3 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;margin-bottom:1rem">✏️ Calistung — ${bulan.targetCalistung}</h3>`;
    
    // Filter Huruf Indonesia
    let letters = [];
    if (num === 1) {
      letters = ['A','I','U','E','O'].map(v => CALISTUNG_DATA.hurufIndonesia.find(h => h.huruf === v)).filter(Boolean);
    } else if (num === 2) {
      letters = CALISTUNG_DATA.hurufIndonesia.filter(h => ['B','C','D'].includes(h.huruf));
    } else if (num === 3) {
      letters = CALISTUNG_DATA.hurufIndonesia.filter(h => ['F','G','H'].includes(h.huruf));
    } else if (num === 4) {
      letters = CALISTUNG_DATA.hurufIndonesia.filter(h => ['J','K','L','M'].includes(h.huruf));
    } else if (num === 5) {
      letters = CALISTUNG_DATA.hurufIndonesia.filter(h => ['N','P','Q','R'].includes(h.huruf));
    } else if (num === 6) {
      letters = CALISTUNG_DATA.hurufIndonesia.filter(h => ['S','T','U','V'].includes(h.huruf));
    } else if (num === 7) {
      letters = CALISTUNG_DATA.hurufIndonesia.filter(h => ['W','X','Y','Z'].includes(h.huruf));
    }
    
    if (letters.length > 0) {
      html += `<h4 style="font-weight:800;margin:1.5rem 0 .75rem;color:#546e7a">🔤 Huruf Indonesia Bulan Ini</h4>`;
      html += `<div class="huruf-indo-grid">`;
      letters.forEach(h => {
        html += `
          <div class="huruf-indo-card" style="border-top:3px solid ${h.warna}">
            <div class="huruf-besar" style="color:${h.warna}">${h.huruf}</div>
            <div class="huruf-kecil" style="color:${h.warna}">${h.hurufKecil}</div>
            <div class="huruf-contoh-grid">
              ${h.contoh.map(c => `<div class="huruf-contoh-item">${c.emoji}<div class="huruf-contoh-kata">${c.sukuKata}</div></div>`).join('')}
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }
    
    // Filter Angka
    let numbers = [];
    if (num === 1) numbers = CALISTUNG_DATA.angka.slice(0, 5);
    else if (num === 2) numbers = CALISTUNG_DATA.angka.slice(5, 10);
    else if (num === 3) numbers = CALISTUNG_DATA.angka.slice(10, 15);
    else if (num === 4) numbers = CALISTUNG_DATA.angka.slice(15, 20);
    else if (num === 5) numbers = CALISTUNG_DATA.angka.slice(20, 25);
    else if (num === 6) numbers = CALISTUNG_DATA.angka.slice(25, 30);
    
    if (numbers.length > 0) {
      html += `<h4 style="font-weight:800;margin:1.5rem 0 .75rem;color:#546e7a">🔢 Angka yang Dipelajari</h4>`;
      html += `<div class="angka-grid">`;
      numbers.forEach(a => {
        html += `
          <div class="angka-card" style="border-top:3px solid ${a.warna}">
            <div class="angka-besar" style="color:${a.warna}">${a.angka}</div>
            <div class="angka-kata">${a.latin}</div>
            <div class="angka-visual">${a.emoji.repeat(Math.min(a.angka, 8))}</div>
          </div>
        `;
      });
      html += `</div>`;
    }
    
    // Filter Suku Kata
    if (num >= 3 && num <= 6 && CALISTUNG_DATA.sukuKata) {
      let startSuku = (num - 3) * 2;
      let filteredSuku = CALISTUNG_DATA.sukuKata.slice(startSuku, startSuku + 2);
      if (filteredSuku.length > 0) {
        html += `<h4 style="font-weight:800;margin:1.5rem 0 .75rem;color:#546e7a">🗣️ Latihan Suku Kata</h4>`;
        filteredSuku.forEach(sk => {
          html += `<div class="suku-konsonan"><span style="font-size:1.5rem">${sk.konsonan}</span></div>`;
          html += `
            <div class="suku-kata-row">
              ${sk.suku.map((s,i) => `
                <div class="suku-kata-chip" style="background:${['#FF6B35','#FFD600','#00C896','#29B6F6','#9C27B0'][i % 5]};color:white">
                  ${s.suku}
                  <span class="sk-emoji">${s.emoji}</span>
                  <span class="sk-contoh">${s.contoh}</span>
                </div>
              `).join('')}
            </div>
          `;
        });
      }
    }
    
    // Reading Progression for Months 7 to 12
    if (num >= 7) {
      html += `<h4 style="font-weight:800;margin:1.5rem 0 .75rem;color:#546e7a">📖 Latihan Membaca</h4>`;
      let readingHtml = '';
      if (num === 7) {
        const kataList = CALISTUNG_DATA.kataGambar.slice(0, 8);
        readingHtml = `
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1rem">Belajar mengeja kata bergambar dengan 2 suku kata:</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:1rem">
            ${kataList.map(k => `
              <div style="background:#F8FAFB;border:1px solid #ECEFF1;border-radius:14px;padding:1rem;text-align:center">
                <span style="font-size:2.2rem">${k.emoji}</span>
                <div style="font-size:1.1rem;font-weight:800;color:#1A237E;margin-top:.3rem">${k.sukuKata}</div>
                <div style="font-size:.85rem;color:#546e7a;font-weight:700">${k.kata}</div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (num === 8) {
        readingHtml = `
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1rem">Mulai merangkai kalimat pendek sederhana:</p>
          <div style="display:flex;flex-direction:column;gap:.8rem;margin-bottom:1.5rem">
            <div style="background:#FFF3E0;border-left:5px solid var(--orange);padding:.8rem 1.2rem;border-radius:8px;font-size:1.1rem;font-weight:800;color:#1A237E">MAMA MAKAN ROTI 🍞</div>
            <div style="background:#E3F2FD;border-left:5px solid var(--blue);padding:.8rem 1.2rem;border-radius:8px;font-size:1.1rem;font-weight:800;color:#1A237E">SAPI BERLARI CEPAT 🐄</div>
            <div style="background:#E8F5E9;border-left:5px solid var(--green);padding:.8rem 1.2rem;border-radius:8px;font-size:1.1rem;font-weight:800;color:#1A237E">BUDI BELAJAR BUKU 📚</div>
          </div>
        `;
      } else if (num === 9) {
        readingHtml = `
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1rem">Membaca kalimat dengan huruf sengau (ng, ny):</p>
          <div style="display:flex;flex-direction:column;gap:.8rem">
            <div style="background:#F8FAFB;border:1px solid #ECEFF1;padding:1rem;border-radius:10px;font-size:1.1rem;font-weight:700;color:#1A237E">Kucing belang mengeong nyaring 🐱</div>
            <div style="background:#F8FAFB;border:1px solid #ECEFF1;padding:1rem;border-radius:10px;font-size:1.1rem;font-weight:700;color:#1A237E">Burung elang terbang tinggi di langit 🦅</div>
          </div>
        `;
      } else if (num === 10) {
        readingHtml = `
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1rem">Latihan membaca paragraf cerita pendek:</p>
          <div style="background:#F8FAFB;border:2px dashed #CFD8DC;padding:1.5rem;border-radius:16px;line-height:1.6;font-size:1rem;color:#1A237E">
            <b>Kisah Semut yang Rajin:</b><br>
            Ada seekor semut kecil berjalan mencari makan di bawah pohon. Semut itu rajin bekerja setiap hari. Ia selalu bersyukur atas rezeki dari Allah. Temannya, seekor belalang, suka bermain dan malas. Ketika musim hujan tiba, semut memiliki banyak makanan, sedangkan belalang kelaparan. Semut yang baik hati membagi makanannya kepada belalang.
          </div>
        `;
      } else if (num === 11) {
        readingHtml = `
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1rem">Membaca Kisah Keteladanan Islami:</p>
          <div style="background:#F8FAFB;border:2px dashed #CFD8DC;padding:1.5rem;border-radius:16px;line-height:1.6;font-size:1rem;color:#1A237E">
            <b>Zaid Anak Dermawan:</b><br>
            Zaid membeli buah kurma di pasar bersama ibunya. Di tengah jalan, Zaid melihat seorang kakek tua yang tampak lapar. Zaid merasa iba lalu memberikan sebagian buah kurmanya kepada kakek tersebut. Kakek tua itu tersenyum gembira dan mendoakan Zaid. Ibunya bangga karena Zaid suka menolong dan dermawan.
          </div>
        `;
      } else {
        readingHtml = `
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1rem">Evaluasi Kelancaran Membaca Mandiri (Persiapan Masuk SD):</p>
          <div style="background:#FFF3E0;border:2px solid var(--orange);padding:1.5rem;border-radius:16px;line-height:1.6;font-size:1.05rem;color:#1A237E;text-align:center;font-weight:700">
            "Membaca adalah kunci membuka jendela dunia. Saya anak sholeh, rajin belajar dan berbakti kepada kedua orang tua."
          </div>
        `;
      }
      html += readingHtml;
    }
    
    // Math / Arithmetic Progression for Months 6 to 12
    if (num >= 6) {
      html += `<h4 style="font-weight:800;margin:2rem 0 .75rem;color:#546e7a">➕ Latihan Berhitung</h4>`;
      let mathHtml = '';
      
      if (num === 6) {
        const mathList = CALISTUNG_DATA.penjumlahan.slice(0, 3);
        mathList.forEach((s, idx) => {
          mathHtml += this.renderSoalBerhitung(s, idx, num);
        });
      } else if (num === 7) {
        const mathList = CALISTUNG_DATA.pengurangan.slice(0, 3);
        mathList.forEach((s, idx) => {
          mathHtml += this.renderSoalBerhitung(s, idx, num);
        });
      } else if (num === 8) {
        const items = [
          { awal: 12, kurang: 4, emoji: '🌸', jawaban: 8, cerita: 'Ada 12 bunga mekar, 4 layu gugur. Berapa sisa bunga?' },
          { angka1: 10, angka2: 5, emoji: '🐟', jawaban: 15, cerita: 'Zaid menangkap 10 ikan, kakaknya menangkap 5 ikan. Berapa jumlahnya?' }
        ];
        items.forEach((s, idx) => {
          mathHtml += this.renderSoalBerhitung(s, idx, num);
        });
      } else if (num === 9) {
        const mathList = CALISTUNG_DATA.perkalian.slice(0, 2);
        mathList.forEach((s, idx) => {
          mathHtml += this.renderSoalBerhitung(s, idx, num);
        });
      } else {
        let startCerita = (num - 10) * 3;
        const mathList = CALISTUNG_DATA.soalCerita.slice(startCerita, startCerita + 2);
        mathList.forEach((s, idx) => {
          mathHtml += this.renderSoalBerhitung(s, idx, num);
        });
      }
      html += mathHtml;
    }
    
    return html;
  },
  
  renderSoalBerhitung(soal, idx, bulanNomor) {
    const jawabanPilihan = soal.pilihan || [
      soal.jawaban - 1, soal.jawaban,
      soal.jawaban + 1, soal.jawaban + 2
    ];
    // Remove duplicates and sort randomly
    const pilihan = [...new Set(jawabanPilihan)].sort(() => Math.random() - .5);
    const emoji1 = soal.emoji || '🍎';
    return `<div class="soal-berhitung">
      <div class="soal-cerita-text">${soal.cerita || soal.soal}</div>
      <div class="soal-visual">
        <div class="soal-emoji-group">${emoji1.repeat(soal.angka1 || soal.awal || 1)}</div>
        <div class="soal-operasi">${bulanNomor <= 7 ? '+' : (soal.operasi === 'pengurangan' ? '−' : '×')}</div>
        <div class="soal-emoji-group">${emoji1.repeat(soal.angka2 || soal.kurang || 1)}</div>
        <div class="soal-sama">=</div>
        <div class="soal-tanya">?</div>
      </div>
      <div class="soal-pilihan">${pilihan.map(p => `<button class="pilihan-btn" onclick="app.cekJawaban(this, ${p}, ${soal.jawaban}, '${soal.penjelasan || ''}')">${p}</button>`).join('')}</div>
    </div>`;
  },
  
  cekJawaban(btn, jawaban, benar, penjelasan) {
    const parent = btn.closest('.soal-pilihan');
    parent.querySelectorAll('.pilihan-btn').forEach(b => b.disabled = true);
    if (jawaban === benar) {
      btn.classList.add('benar');
      btn.style.animation = 'bounce-in .4s ease';
      this.showKonfeti();
      this.jumpMascot();
      // Tambah bintang pada santri aktif jika ada
      if (this.santriAktif !== null) {
        this.santriList[this.santriAktif].bintang += 1;
        localStorage.setItem('santriList', JSON.stringify(this.santriList));
        this.renderSantriList();
        
        // Update progress bulan ini
        const name = this.santriList[this.santriAktif].nama;
        if (!this.progress[name]) this.progress[name] = {};
        const currentProgress = this.progress[name][this.bulanAktif] || 0;
        this.progress[name][this.bulanAktif] = Math.min(100, currentProgress + 10);
        localStorage.setItem('progress', JSON.stringify(this.progress));
        this.renderProgressSantri(this.santriAktif);
      }
    } else {
      btn.classList.add('salah');
      btn.style.animation = 'shake .4s ease';
      parent.querySelectorAll('.pilihan-btn').forEach(b => {
        if (parseInt(b.textContent) === benar) b.classList.add('benar');
      });
    }
    if (penjelasan) {
      const msg = document.createElement('p');
      msg.style.cssText = 'margin-top:1rem;font-size:.85rem;color:#546e7a;font-style:italic;text-align:center';
      msg.textContent = penjelasan;
      parent.parentElement.appendChild(msg);
    }
  },
  
  // === RENDER FIQIH TAB ===
  renderFiqihTab(bulan) {
    const num = bulan.nomor;
    let html = `<h3 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;margin-bottom:1.5rem">🕌 Fiqih & Akidah — ${bulan.targetFiqih}</h3>`;
    const colors = ['#FF6B35','#FFD600','#00C896','#29B6F6','#9C27B0','#FF4081','#00BCD4','#FF6B35','#FFD600','#00C896','#29B6F6','#9C27B0'];

    if (num === 1) {
      // Month 1: Syahadat & Niat Ibadah
      const syahadat = FIQIH_DATA.rukunIslam[0];
      html += `
        <div style="background:#F8FAFB;border:2px dashed #CFD8DC;border-radius:18px;padding:2rem;text-align:center;max-width:500px;margin:0 auto">
          <div style="font-size:3rem;margin-bottom:1rem">${syahadat.emoji}</div>
          <h4 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;font-size:1.3rem;margin-bottom:.5rem">${syahadat.nama}</h4>
          <p style="font-size:.85rem;color:#78909c;margin-bottom:1.5rem">${syahadat.penjelasan}</p>
          <div style="font-size:1.8rem;direction:rtl;font-weight:bold;color:#1A237E;margin-bottom:1rem;line-height:1.4">${syahadat.teks}</div>
          <div style="font-size:.9rem;font-weight:800;color:var(--blue);font-style:italic">"Aku bersaksi bahwa tidak ada Tuhan selain Allah dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah"</div>
        </div>
      `;
    } else if (num === 2) {
      // Month 2: Rukun Islam + Wudhu Part 1
      html += `<div class="fiqih-section-title">☝️ Rukun Islam</div>`;
      html += `<div class="rukun-grid">`;
      FIQIH_DATA.rukunIslam.forEach(r => {
        html += `<div class="rukun-card" style="background:${r.warna};color:white">
          <div class="rukun-emoji">${r.emoji}</div>
          <div class="rukun-num">Rukun ${r.nomor}</div>
          <div class="rukun-nama" style="color:white">${r.nama}</div>
          <div class="rukun-penjelasan" style="color:rgba(255,255,255,.9)">${r.penjelasan}</div>
        </div>`;
      });
      html += `</div>`;
      
      html += `<div class="fiqih-section-title" style="margin-top:2rem">💧 Langkah Wudhu (Bagian 1: Langkah 1-4)</div>`;
      html += `<div class="wudhu-steps">`;
      FIQIH_DATA.wudhu.slice(0, 4).forEach((w, i) => {
        html += `<div class="wudhu-step" style="border-left-color:${colors[i]}">
          <div class="wudhu-step-num" style="color:${colors[i]}">Langkah ${i+1}</div>
          <span class="wudhu-step-emoji">${w.emoji}</span>
          <div class="wudhu-step-nama">${w.nama}</div>
          <div class="wudhu-step-arab" style="direction:rtl">${w.arab || ''}</div>
          <div class="wudhu-step-arti">${w.arti}</div>
          ${w.ulang ? `<span class="wudhu-step-ulang" style="background:${colors[i]}">${w.ulang}x diulang</span>` : ''}
        </div>`;
      });
      html += `</div>`;
    } else if (num === 3) {
      // Month 3: Rukun Iman + Wudhu Part 2
      html += `<div class="fiqih-section-title">✨ Rukun Iman</div>`;
      html += `<div class="rukun-grid">`;
      FIQIH_DATA.rukunIman.forEach(r => {
        html += `<div class="rukun-card" style="background:${r.warna};color:white">
          <div class="rukun-emoji">${r.emoji}</div>
          <div class="rukun-num">Rukun ${r.nomor}</div>
          <div class="rukun-nama" style="color:white">${r.nama}</div>
          <div class="rukun-penjelasan" style="color:rgba(255,255,255,.9)">${r.penjelasan}</div>
        </div>`;
      });
      html += `</div>`;
      
      html += `<div class="fiqih-section-title" style="margin-top:2rem">💧 Langkah Wudhu (Bagian 2: Langkah 5-8)</div>`;
      html += `<div class="wudhu-steps">`;
      FIQIH_DATA.wudhu.slice(4, 8).forEach((w, i) => {
        const cIdx = i + 4;
        html += `<div class="wudhu-step" style="border-left-color:${colors[cIdx]}">
          <div class="wudhu-step-num" style="color:${colors[cIdx]}">Langkah ${cIdx+1}</div>
          <span class="wudhu-step-emoji">${w.emoji}</span>
          <div class="wudhu-step-nama">${w.nama}</div>
          <div class="wudhu-step-arab" style="direction:rtl">${w.arab || ''}</div>
          <div class="wudhu-step-arti">${w.arti}</div>
          ${w.ulang ? `<span class="wudhu-step-ulang" style="background:${colors[cIdx]}">${w.ulang}x diulang</span>` : ''}
        </div>`;
      });
      html += `</div>`;
    } else if (num === 4) {
      // Month 4: Gerakan Sholat Part 1
      html += `<div class="fiqih-section-title">🙏 Gerakan Sholat (Bagian 1: Gerakan 1-6)</div>`;
      html += `<div class="sholat-grid">`;
      FIQIH_DATA.sholat.slice(0, 6).forEach((s, i) => {
        html += `<div class="sholat-step" style="background:${colors[i]};color:white">
          <span class="sholat-step-emoji">${s.emoji}</span>
          <div class="sholat-step-nama" style="color:white">${s.nama}</div>
          <div class="sholat-step-num" style="color:rgba(255,255,255,.8)">Gerakan ke-${i+1}</div>
        </div>`;
      });
      html += `</div>`;
    } else if (num === 5) {
      // Month 5: Gerakan Sholat Part 2
      html += `<div class="fiqih-section-title">🙏 Gerakan Sholat (Bagian 2: Gerakan 7-12)</div>`;
      html += `<div class="sholat-grid">`;
      FIQIH_DATA.sholat.slice(6, 12).forEach((s, i) => {
        const cIdx = i + 6;
        html += `<div class="sholat-step" style="background:${colors[cIdx]};color:white">
          <span class="sholat-step-emoji">${s.emoji}</span>
          <div class="sholat-step-nama" style="color:white">${s.nama}</div>
          <div class="sholat-step-num" style="color:rgba(255,255,255,.8)">Gerakan ke-${cIdx+1}</div>
        </div>`;
      });
      html += `</div>`;
    } else if (num >= 6 && num <= 10) {
      // Month 6-10: Doa Harian
      const startDoa = (num - 6) * 4;
      const slicedDoa = FIQIH_DATA.doaHarian.slice(startDoa, startDoa + 4);
      
      html += `<div class="fiqih-section-title">🤲 Target Hafalan Doa Bulan Ini</div>`;
      html += `<div class="doa-grid">`;
      slicedDoa.forEach((d, i) => {
        const origIdx = startDoa + i;
        html += `<div class="doa-card" onclick="app.showDoaDetail(${origIdx})">
          <div class="doa-header" style="background:${colors[origIdx % colors.length]};color:white">
            <span class="doa-emoji">${d.emoji}</span>
            <span class="doa-judul" style="color:white">${d.nama}</span>
          </div>
          <div class="doa-body">
            <div class="doa-arab" style="direction:rtl">${d.arab}</div>
            <div class="doa-latin">${d.latin}</div>
            <div class="doa-arti">${d.arti}</div>
          </div>
        </div>`;
      });
      html += `</div>`;
      
      if (num === 10) {
        // Month 10: Magic Words
        html += `<div class="fiqih-section-title" style="margin-top:2.5rem">✨ Magic Words Islam</div>`;
        html += `<div class="magic-grid">`;
        FIQIH_DATA.magicWords.forEach(m => {
          html += `<div class="magic-card" style="background:${m.warna};color:white">
            <div class="magic-emoji">${m.emoji}</div>
            <div class="magic-arab" style="direction:rtl;color:white">${m.arab}</div>
            <div class="magic-latin" style="color:white">${m.latin}</div>
            <div class="magic-arti" style="color:rgba(255,255,255,.9)">${m.arti}</div>
            <div class="magic-situasi" style="color:rgba(255,255,255,.7)">${m.situasi}</div>
          </div>`;
        });
        html += `</div>`;
      }
    } else if (num === 11) {
      // Month 11: Adab Harian
      html += `<div class="fiqih-section-title">🤝 Adab & Akhlak Islami</div>`;
      html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem">`;
      FIQIH_DATA.adab.forEach(a => {
        html += `
          <div style="background:white;border:1px solid #ECEFF1;border-radius:18px;padding:1.5rem;box-shadow:0 6px 18px rgba(0,0,0,.04);border-top:4px solid ${a.warna}">
            <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:1rem">
              <span style="font-size:2rem">${a.emoji}</span>
              <h4 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;margin:0">${a.nama}</h4>
            </div>
            <ul style="list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.6rem;font-size:.82rem;color:#546e7a">
              ${a.pointAdab.map(p => `
                <li style="display:flex;gap:.4rem;align-items:flex-start">
                  <span style="color:${a.warna}">✔</span> <span>${p}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      });
      html += `</div>`;
    } else {
      // Month 12: Murojaah Total
      html += `
        <div style="background:#FFF3E0;border:2px solid var(--orange);border-radius:18px;padding:1.5rem 2rem;margin-bottom:2rem;text-align:center">
          <div style="font-size:3rem;margin-bottom:.5rem">🎓</div>
          <h4 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;font-size:1.3rem;margin:0">Murojaah Akbar (Review Total)</h4>
          <p style="font-size:.85rem;color:#78909c;margin-top:.3rem">Mengevaluasi seluruh hafalan doa, gerakan sholat, dan wudhu sepanjang 1 tahun.</p>
        </div>
        
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
          <div style="background:#E3F2FD;border-radius:14px;padding:1.2rem;text-align:center;cursor:pointer;border:1px solid #CFD8DC" onclick="app.switchIqraLevel(12, 6, this)">
            <span style="font-size:2rem">📖</span>
            <div style="font-weight:800;color:#1A237E;margin-top:.5rem">Murojaah Iqra 6</div>
          </div>
          <div style="background:#E8F5E9;border-radius:14px;padding:1.2rem;text-align:center;cursor:pointer;border:1px solid #CFD8DC" onclick="app.pilihBulan(2)">
            <span style="font-size:2rem">💧</span>
            <div style="font-weight:800;color:#1A237E;margin-top:.5rem">Murojaah Wudhu</div>
          </div>
          <div style="background:#FFF3E0;border-radius:14px;padding:1.2rem;text-align:center;cursor:pointer;border:1px solid #CFD8DC" onclick="app.pilihBulan(4)">
            <span style="font-size:2rem">🙏</span>
            <div style="font-weight:800;color:#1A237E;margin-top:.5rem">Murojaah Sholat</div>
          </div>
        </div>
      `;
    }
    
    return html;
  },
  
  zoomMedia(src, title) {
    const modal = document.getElementById('modal-zoom-media');
    const img = document.getElementById('zoom-media-img');
    const t = document.getElementById('zoom-media-title');
    if (!modal || !img || !t) return;
    img.src = src;
    t.textContent = title;
    modal.classList.add('open');
  },
  
  showDoaDetail(idx) {
    const doa = FIQIH_DATA.doaHarian[idx];
    if (!doa) return;
    const modal = document.getElementById('modal-doa');
    document.getElementById('modal-doa-title').textContent = doa.nama;
    document.getElementById('modal-doa-body').innerHTML = `
      <div style="text-align:center;margin-bottom:1.5rem;font-size:3rem">${doa.emoji}</div>
      <div style="font-size:1.4rem;direction:rtl;text-align:right;line-height:2;color:#1A237E;font-weight:600;margin-bottom:1rem">${doa.arab}</div>
      <div style="font-size:.9rem;font-style:italic;color:#546e7a;margin-bottom:.75rem;line-height:1.7">${doa.latin}</div>
      <div style="font-size:.85rem;color:#78909c;line-height:1.6">${doa.arti}</div>
      <div style="background:#FFF9C4;border-radius:12px;padding:1rem;margin-top:1.5rem">
        <div style="font-weight:800;margin-bottom:.3rem">📍 Kapan dibaca?</div>
        <div style="font-size:.85rem;color:#546e7a">${doa.situasi || ''}</div>
      </div>
    `;
    modal.classList.add('open');
  },
  
  // === RENDER JADWAL TAB ===
  renderJadwalTab(bulan) {
    let html = `<h3 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;margin-bottom:1.5rem">📅 Jadwal Belajar Bulan ${bulan.nomor}</h3>`;
    bulan.minggu.forEach(m => {
      html += `<div class="jadwal-minggu" style="margin-bottom:2rem">`;
      html += `<div class="jadwal-minggu-title" style="font-weight:800">📅 Minggu ke-${m.nomor}</div>`;
      html += `<div class="jadwal-grid">`;
      // Senin
      html += `<div class="jadwal-hari">`;
      html += `<div class="jadwal-hari-header" style="background:#29B6F6;color:white">📖 Senin</div>`;
      html += `<div class="jadwal-hari-body"><h4>${m.senin.judul}</h4><p>${m.senin.aplikasi}</p><div class="jadwal-cetak">🖨️ ${m.senin.cetak}</div></div>`;
      html += `</div>`;
      // Rabu
      html += `<div class="jadwal-hari">`;
      html += `<div class="jadwal-hari-header" style="background:#9C27B0;color:white">HN Rabu</div>`;
      html += `<div class="jadwal-hari-body"><h4>${m.rabu.judul}</h4><p>${m.rabu.aplikasi}</p><div class="jadwal-cetak">🖨️ ${m.rabu.cetak}</div></div>`;
      html += `</div>`;
      // Jumat
      html += `<div class="jadwal-hari">`;
      html += `<div class="jadwal-hari-header" style="background:#FF6B35;color:white">⭐ Jumat</div>`;
      html += `<div class="jadwal-hari-body"><h4>${m.jumat.judul}</h4><p>${m.jumat.aplikasi}</p><div class="jadwal-cetak">🖨️ ${m.jumat.cetak}</div></div>`;
      html += `</div>`;
      html += `</div></div>`;
    });
    return html;
  },
  
  // === RENDER HAFALAN TAB ===
  renderHafalanTab(bulan) {
    const lagu = HIJAIYAH_DATA.suratPendek.find(s => s.bulanHafal === bulan.nomor);
    if (!lagu) return '<p>Belum ada materi hafalan bulan ini</p>';
    
    let html = `
      <h3 style="font-family:'Poppins',sans-serif;font-weight:800;color:#1A237E;margin-bottom:1rem">
        🎵 Hafalan: Lagu Anak Islami
      </h3>
      
      <div style="background:linear-gradient(135deg,#0D47A1,#1976D2);border-radius:20px;padding:2rem;margin-bottom:1.5rem;color:white;box-shadow:0 10px 20px rgba(13,71,161,0.2)">
        
        <!-- Header Lagu -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;border-bottom:1px solid rgba(255,255,255,0.2);padding-bottom:1rem;flex-wrap:wrap;gap:1rem">
          <div>
            <div style="font-family:'Poppins',sans-serif;font-size:1.6rem;font-weight:900;color:#FFF9C4">
              ${lagu.nama}
            </div>
            <div style="opacity:.85;font-size:.85rem;margin-top:.2rem;font-weight:600">
              ${lagu.arti}
            </div>
          </div>
          <div style="font-size:2.8rem">
            ${lagu.arab}
          </div>
        </div>
        
        <!-- Pemutar Audio Asli (Vokal & Musik) -->
        <div style="background:rgba(255,255,255,0.15);padding:1.2rem;border-radius:16px;margin-bottom:2rem;border:1px solid rgba(255,255,255,0.25)">
          <div style="font-weight:800;font-size:.85rem;margin-bottom:.6rem;color:#FFF9C4;display:flex;align-items:center;gap:.4rem">
            🔊 PUTAR AUDIO ASLI (Full Vokal & Musik)
          </div>
          <audio controls style="width:100%;outline:none;border-radius:8px">
            <source src="${lagu.audioUrl}" type="audio/mpeg">
            Browser Anda tidak mendukung pemutar audio.
          </audio>
        </div>
        
        <!-- Lirik Lagu -->
        <div style="font-family:'Poppins',sans-serif;font-weight:800;font-size:.95rem;margin-bottom:1rem;color:#FFF9C4">
          📝 Lirik Lagu:
        </div>
        
        <div style="display:flex;flex-direction:column;gap:1rem">
          ${lagu.teks.map(bait => `
            <div style="padding:1.2rem;background:rgba(255,255,255,0.1);border-radius:14px;border:1px solid rgba(255,255,255,0.05);text-align:center">
              <div style="font-size:1.1rem;font-weight:700;color:#FFF;line-height:1.6;white-space:pre-line">
                ${bait.lirik}
              </div>
              ${bait.keterangan ? `
                <div style="font-size:.8rem;color:#FFE082;margin-top:.5rem;font-style:italic;font-weight:normal">
                  ${bait.keterangan}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
        
      </div>
    `;
    return html;
  },
  
  // === SWITCH TAB ===
  switchTab(bulanNomor, tabName, btn) {
    const panel = document.getElementById(`panel-bulan-${bulanNomor}`);
    panel.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
    panel.querySelectorAll('.panel-tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${bulanNomor}-${tabName}`)?.classList.add('active');
  },
  
  // === KONFETI ===
  showKonfeti() {
    const wrap = document.getElementById('konfeti-wrap');
    if (!wrap) return;
    wrap.classList.add('show');
    wrap.innerHTML = '';
    const colors = ['#FFD600','#FF6B35','#00C896','#29B6F6','#9C27B0','#FF4081'];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.classList.add('konfeti-piece');
      p.style.left = `${Math.random() * 100}%`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = `${1 + Math.random() * 2}s`;
      p.style.animationDelay = `${Math.random() * .5}s`;
      p.style.width = p.style.height = `${8 + Math.random() * 10}px`;
      wrap.appendChild(p);
    }
    setTimeout(() => wrap.classList.remove('show'), 3000);
  },
  
  // === MASCOT JUMP ===
  jumpMascot() {
    const zaid = document.getElementById('maskot-zaid');
    const aisha = document.getElementById('maskot-aisha');
    [zaid, aisha].forEach(m => {
      if (!m) return;
      m.classList.add('jump');
      setTimeout(() => m.classList.remove('jump'), 1500);
    });
  },
  
  // === DOWNLOAD BULAN GRID ===
  renderDownloadBulan() {
    if (!window.KURIKULUM_DATA) return;
    const grid = document.getElementById('download-bulan-grid');
    if (!grid) return;
    grid.innerHTML = KURIKULUM_DATA.bulan.map(b => `
      <div class="download-bulan-card" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding:1.5rem; background:white; border-radius:20px; box-shadow:0 8px 24px rgba(41,182,246,0.12); border:1px solid #ECEFF1; min-height:280px">
        <div class="dbc-emoji" style="font-size:3rem; margin-bottom:.5rem">${b.emoji}</div>
        <div class="dbc-nama" style="font-weight:900; color:#1A237E; font-size:1.1rem; margin-bottom:.2rem">Bulan ${b.nomor}</div>
        <div class="dbc-tema" style="font-size:.8rem; color:#78909c; margin-bottom:1.5rem; line-height:1.4">${b.tema}</div>
        <div style="display:flex; flex-direction:column; gap:.5rem; width:100%; margin-top:auto">
          <button class="btn-download-bulan" style="width:100%; margin-bottom:0; font-weight:800; font-size:.82rem; padding:.6rem 1rem; border-radius:30px; border:none; background:var(--orange); color:white; cursor:pointer" onclick="pdfGenerator.downloadBulan(${b.nomor})">📥 Download PDF</button>
          <button class="btn-outline" style="width:100%; font-size:.8rem; padding:.5rem 1rem; border-width:2px; border-style:solid; border-color:var(--dark); color:var(--dark); background:transparent; display:inline-flex; justify-content:center; align-items:center; gap:.25rem; border-radius:30px; font-weight:800; cursor:pointer" onclick="app.previewModul(${b.nomor})">👁️ Pratinjau</button>
        </div>
      </div>`).join('');
  },
  
  // === PREVIEW MODUL STATE & METHODS ===
  previewBulan: null,
  previewPage: 1,
  
  previewModul(bulanNomor) {
    this.previewBulan = bulanNomor;
    this.previewPage = 1;
    document.getElementById('modal-preview-title').textContent = `Pratinjau Modul Bulan ${bulanNomor}`;
    document.getElementById('modal-preview-pdf').classList.add('open');
    this.renderPreviewPage();
  },
  
  prevPreviewPage() {
    if (this.previewPage > 1) {
      this.previewPage--;
      this.renderPreviewPage();
    }
  },
  
  nextPreviewPage() {
    if (this.previewPage < 8) {
      this.previewPage++;
      this.renderPreviewPage();
    }
  },
  
  renderPreviewPage() {
    const bNum = this.previewBulan;
    const pNum = this.previewPage;
    const container = document.getElementById('preview-page-container');
    const pageNumText = document.getElementById('txt-preview-page-num');
    const prevBtn = document.getElementById('btn-prev-preview');
    const nextBtn = document.getElementById('btn-next-preview');
    
    if (!container || !window.KURIKULUM_DATA) return;
    
    const bData = KURIKULUM_DATA.bulan[bNum - 1];
    pageNumText.textContent = `Halaman ${pNum} / 8`;
    
    prevBtn.disabled = (pNum === 1);
    nextBtn.disabled = (pNum === 8);
    prevBtn.style.opacity = (pNum === 1) ? '0.5' : '1';
    nextBtn.style.opacity = (pNum === 8) ? '0.5' : '1';
    
    let html = '';
    
    switch(pNum) {
      case 1: // Cover
        html = `
          <div style="text-align:center; padding:2rem 0">
            <div style="font-size:4.5rem; margin-bottom:1rem">⭐</div>
            <h1 style="font-family:'Poppins',sans-serif; font-weight:900; color:#1A237E; font-size:2.2rem; margin-bottom:.5rem">BINTANG RABBANI</h1>
            <p style="font-size:1.1rem; font-weight:700; color:#546e7a; margin-bottom:2.5rem">Modul Belajar Mandiri TPQ Plus</p>
            
            <div style="background:var(--orange); color:white; display:inline-block; padding:.6rem 2rem; border-radius:30px; font-weight:800; font-size:1.3rem; margin-bottom:1.5rem">
              MODUL BULAN ${bNum}
            </div>
            
            <h2 style="font-family:'Poppins',sans-serif; font-weight:800; color:#283593; font-size:1.6rem; margin-bottom:.5rem">${bData.tema}</h2>
            <p style="font-size:.9rem; color:#78909c">Tahsin Hijaiyah • Calistung • Fiqih & Ibadah • Tematik & Karakter</p>
          </div>
        `;
        break;
      case 2: // Hijaiyah (Iqra)
        let iqraLvl = (bNum >= 7) ? 2 : 1;
        
        const iqData = HIJAIYAH_DATA.iqra[`iqra${iqraLvl}`];
        const singleLetters = iqData ? iqData.satuHuruf.slice(0, 6).join('   ') : '';
        const compoundLetters = iqData ? (iqData.pages[0].rows[2].join('   ')) : '';
        
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Lembar Kerja Tahsin Hijaiyah (Iqra ${iqraLvl})</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Materi membaca per baris pendek-cepat sesuai tingkatan buku Iqra.</p>
            
            <div style="background:#F8FAFB; border-radius:12px; padding:1.5rem; text-align:center; border:2px dashed #CFD8DC; margin-bottom:1.5rem">
              <div style="font-size:.8rem; font-weight:800; color:#78909c; margin-bottom:.8rem">1. Latihan Bacaan Tunggal</div>
              <div style="font-size:2.8rem; direction:rtl; letter-spacing:15px; color:#29B6F6; font-weight:bold">${singleLetters}</div>
            </div>
            
            <div style="background:#F8FAFB; border-radius:12px; padding:1.5rem; text-align:center; border:2px dashed #CFD8DC; margin-bottom:1.5rem">
              <div style="font-size:.8rem; font-weight:800; color:#78909c; margin-bottom:.8rem">2. Latihan Bacaan Gabungan / Sambung</div>
              <div style="font-size:2.4rem; direction:rtl; letter-spacing:10px; color:#FF6B35; font-weight:bold">${compoundLetters}</div>
            </div>
            
            <div style="border-top:1px solid #ECEFF1; padding-top:1rem; font-size:.8rem; color:#90A4AE; text-align:center">
              [ Lembar Penilaian: Lancar / Cukup Lancar / Perlu Diulang ]
            </div>
          </div>
        `;
        break;
      case 3: // Lagu Anak Islami
        const lagu = HIJAIYAH_DATA.suratPendek.find(s => s.bulanHafal === bNum) || HIJAIYAH_DATA.suratPendek[0];
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Lembar Hafalan Lagu Islami</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Target hafalan lagu anak Islami untuk membangun karakter religius anak sejak dini.</p>
            
            <div style="background:#FFF9C4; border-radius:12px; padding:1.2rem; border:2px dashed #FFF59D; margin-bottom:1.5rem; text-align:center">
              <div style="font-size:1.5rem; font-weight:800; color:#F57F17">${lagu.arab} ${lagu.nama}</div>
              <div style="font-size:.82rem; color:#78909c; margin-top:.2rem">${lagu.arti}</div>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:.8rem; max-height:220px; overflow-y:auto">
              ${lagu.teks.map(b => `
                <div style="background:#F8FAFB; border:1px solid #ECEFF1; border-radius:8px; padding:.75rem; text-align:center">
                  <div style="font-size:.9rem; font-weight:bold; color:#1A237E; line-height:1.5; white-space:pre-line">${b.lirik}</div>
                  ${b.keterangan ? `<div style="font-size:.7rem; color:#78909c; margin-top:.3rem">${b.keterangan}</div>` : ''}
                </div>
              `).join('')}
            </div>
            
            <div style="border-top:1px solid #ECEFF1; padding-top:1rem; margin-top:1.5rem; font-size:.8rem; color:#90A4AE; text-align:center">
              [ Lembar Hafalan Lagu Mandiri - Dilengkapi Audio Online ]
            </div>
          </div>
        `;
        break;
      case 4: // Calistung Huruf & Tracing
        const letterData = CALISTUNG_DATA.hurufIndonesia[bNum - 1] || CALISTUNG_DATA.hurufIndonesia[0];
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Lembar Kerja Huruf & Tracing</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Latihan motorik menulis dan tracing huruf Indonesia alfabet.</p>
            
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom:2rem">
              <div style="background:#FFF3E0; width:100px; height:100px; border-radius:20px; border:2px solid var(--orange); display:flex; flex-direction:column; justify-content:center; align-items:center">
                <span style="font-size:3rem; font-weight:900; color:var(--orange); line-height:1">${letterData.huruf}</span>
                <span style="font-size:1.5rem; font-weight:700; color:var(--orange); line-height:1">${letterData.hurufKecil}</span>
              </div>
              <div>
                <div style="font-size:1.1rem; font-weight:800; color:#1A237E">Belajar Menulis Huruf "${letterData.huruf}"</div>
                <p style="font-size:.82rem; color:#546e7a">Contoh benda: ${letterData.contoh.map(c => `${c.kata} ${c.emoji}`).join(', ')}</p>
              </div>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem">
              <div style="font-size:.82rem; font-weight:800; color:#78909c">Hubungkan Titik-Titik di Bawah Ini:</div>
              <div style="font-size:2.8rem; font-family:'Courier New', monospace; letter-spacing:15px; color:#CFD8DC; font-style:italic; border-bottom:2px dashed #CFD8DC; padding-bottom:.5rem">
                ${(letterData.huruf + ' ').repeat(5)}
              </div>
              <div style="font-size:2rem; font-family:'Courier New', monospace; letter-spacing:15px; color:#CFD8DC; font-style:italic; border-bottom:2px dashed #CFD8DC; padding-bottom:.5rem">
                ${(letterData.hurufKecil + ' ').repeat(6)}
              </div>
            </div>
          </div>
        `;
        break;
      case 5: // Calistung Angka
        const numData = CALISTUNG_DATA.angka[bNum - 1] || CALISTUNG_DATA.angka[0];
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Lembar Belajar Berhitung & Angka</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Mengenal angka, ejaan latin, tulisan arab angka, dan visualisasi jumlah benda.</p>
            
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom:2rem">
              <div style="background:#E8F5E9; width:100px; height:100px; border-radius:20px; border:2px solid #00C896; display:flex; flex-direction:column; justify-content:center; align-items:center">
                <span style="font-size:3rem; font-weight:900; color:#00C896; line-height:1">${numData.angka}</span>
                <span style="font-size:1.3rem; font-weight:700; color:#00C896; line-height:1">${numData.arab}</span>
              </div>
              <div>
                <div style="font-size:1.1rem; font-weight:800; color:#1A237E">Angka ${numData.angka} (${numData.latin})</div>
                <p style="font-size:.82rem; color:#546e7a">Jumlah Benda:</p>
                <div style="font-size:1.8rem; margin-top:.2rem">${numData.emoji.repeat(numData.angka)}</div>
              </div>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem">
              <div style="font-size:.82rem; font-weight:800; color:#78909c">Tebalkan Garis Angka:</div>
              <div style="font-size:2.8rem; font-family:'Courier New', monospace; letter-spacing:15px; color:#CFD8DC; font-style:italic; border-bottom:2px dashed #CFD8DC; padding-bottom:.5rem">
                ${(numData.angka + ' ').repeat(6)}
              </div>
            </div>
          </div>
        `;
        break;
      case 6: // Fiqih
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Modul Fiqih & Ibadah</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Materi praktek tata cara beribadah lengkap dengan ilustrasi.</p>
            
            <div style="background:#E3F2FD; border-radius:12px; padding:1.2rem; margin-bottom:1.5rem; border-left:5px solid var(--blue)">
              <h4 style="font-weight:800; color:#1A237E; margin-bottom:.3rem">Pembelajaran Fiqih: ${bData.targetFiqih}</h4>
              <p style="font-size:.82rem; color:#546e7a">Santri diajarkan tata cara melakukan ibadah dengan baik dan tertib sesuai tuntunan Rasulullah SAW.</p>
            </div>
            
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:1rem">
              <div style="background:#F8FAFB; border-radius:10px; padding:1rem; text-align:center; border:1px solid #CFD8DC">
                <span style="font-size:2rem">🤲</span>
                <div style="font-size:.82rem; font-weight:800; color:#1A237E; margin-top:.5rem">Praktik Wudhu</div>
                <p style="font-size:.74rem; color:#78909c; margin-top:.2rem">Langkah demi langkah mencuci anggota badan dengan air suci bersih.</p>
              </div>
              <div style="background:#F8FAFB; border-radius:10px; padding:1rem; text-align:center; border:1px solid #CFD8DC">
                <span style="font-size:2rem">🧍</span>
                <div style="font-size:.82rem; font-weight:800; color:#1A237E; margin-top:.5rem">Praktik Gerakan Sholat</div>
                <p style="font-size:.74rem; color:#78909c; margin-top:.2rem">Melatih kedisiplinan rukun sholat mulai takbir hingga ucapan salam.</p>
              </div>
            </div>
          </div>
        `;
        break;
      case 7: // Doa Harian
        const doa = FIQIH_DATA.doaHarian[bNum - 1] || FIQIH_DATA.doaHarian[0];
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Poster Doa Harian</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Poster hafalan doa pendek harian lengkap dengan ilustrasi situasi.</p>
            
            <div style="background:#F8FAFB; border:1px solid #CFD8DC; border-radius:14px; padding:1.5rem; text-align:center">
              <div style="font-size:2.8rem; margin-bottom:.5rem">${doa.emoji}</div>
              <h4 style="font-weight:900; color:#1A237E; font-size:1.2rem; margin-bottom:.2rem">${doa.nama}</h4>
              <p style="font-size:.78rem; color:#78909c; margin-bottom:1.2rem">Situasi: ${doa.situasi}</p>
              
              <div style="font-size:1.8rem; direction:rtl; font-weight:bold; color:#1A237E; margin-bottom:.8rem; line-height:1.4">${doa.arab}</div>
              <div style="font-size:.82rem; font-weight:800; color:var(--blue); font-style:italic; margin-bottom:.5rem">${doa.latin}</div>
              <div style="font-size:.8rem; color:#546e7a; line-height:1.4; border-top:1px solid #ECEFF1; padding-top:.8rem">"${doa.arti}"</div>
            </div>
          </div>
        `;
        break;
      case 8: // Observasi & Raport
        html = `
          <div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:800; color:#1A237E; border-bottom:2px solid #ECEFF1; padding-bottom:.5rem; margin-bottom:1rem">Lembar Observasi & Raport Bulanan</h3>
            <p style="font-size:.85rem; color:#78909c; margin-bottom:1.5rem">Format pelaporan kemajuan belajar santri yang akan diisi oleh guru dan diserahkan kepada wali murid.</p>
            
            <div style="background:white; border:2px solid #CFD8DC; border-radius:12px; padding:1.2rem">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #ECEFF1; padding-bottom:.6rem; margin-bottom:1rem">
                <span style="font-weight:800; color:#1A237E; font-size:.85rem">E-RAPORT SANTRI</span>
                <span style="font-size:.78rem; color:#78909c">Bulan ke-${bNum}</span>
              </div>
              
              <div style="display:flex; flex-direction:column; gap:.6rem; font-size:.8rem">
                <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ECEFF1; padding-bottom:.3rem">
                  <span style="color:#546e7a">1. Tahsin Hijaiyah (Iqra)</span>
                  <span style="font-weight:800; color:#1A237E">[ Baik / Cukup / Kurang ]</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ECEFF1; padding-bottom:.3rem">
                  <span style="color:#546e7a">2. Calistung (Membaca-Menulis-Hitung)</span>
                  <span style="font-weight:800; color:#1A237E">[ Baik / Cukup / Kurang ]</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ECEFF1; padding-bottom:.3rem">
                  <span style="color:#546e7a">3. Fiqih Ibadah & Doa</span>
                  <span style="font-weight:800; color:#1A237E">[ Baik / Cukup / Kurang ]</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ECEFF1; padding-bottom:.3rem">
                  <span style="color:#546e7a">4. Karakter & Adab Mingguan</span>
                  <span style="font-weight:800; color:#1A237E">[ Baik / Cukup / Kurang ]</span>
                </div>
              </div>
              
              <div style="margin-top:1.5rem; display:flex; justify-content:space-between; font-size:.75rem; color:#78909c">
                <span>Tanda Tangan Guru TPA: ________________</span>
                <span>Tanda Tangan Wali: ________________</span>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    container.innerHTML = html;
  },
  
  // === SANTRI MANAGEMENT ===
  tambahSantri() {
    const input = document.getElementById('input-nama-santri');
    const nama = input.value.trim();
    if (!nama) return;
    const colors = ['#FF6B35','#FFD600','#00C896','#29B6F6','#9C27B0','#FF4081','#00BCD4'];
    this.santriList.push({ nama, id: Date.now(), color: colors[this.santriList.length % colors.length], bintang: 0 });
    this.progress[nama] = {};
    localStorage.setItem('santriList', JSON.stringify(this.santriList));
    localStorage.setItem('progress', JSON.stringify(this.progress));
    input.value = '';
    this.renderSantriList();
  },
  
  renderSantriList() {
    const list = document.getElementById('santri-list');
    if (!list) return;
    list.innerHTML = this.santriList.map((s, i) => `
      <li class="santri-item ${this.santriAktif === i ? 'active' : ''}" onclick="app.pilihSantri(${i})">
        <div class="santri-avatar" style="background:${s.color}">${s.nama.charAt(0).toUpperCase()}</div>
        <div class="santri-info">
          <h4>${s.nama}</h4>
          <span>Santri ${i+1}</span>
        </div>
        <div class="santri-bintang">⭐ ${s.bintang}</div>
      </li>`).join('');
  },
  
  pilihSantri(idx) {
    this.santriAktif = idx;
    this.renderSantriList();
    this.renderProgressSantri(idx);
  },
  
  renderProgressSantri(idx) {
    const santri = this.santriList[idx];
    if (!santri) return;
    document.getElementById('progress-santri-nama').textContent = `📊 Progress ${santri.nama}`;
    const progressContent = document.getElementById('progress-content');
    const prog = this.progress[santri.nama] || {};
    if (!window.KURIKULUM_DATA) return;
    progressContent.innerHTML = KURIKULUM_DATA.bulan.map(b => {
      const persen = prog[b.nomor] || 0;
      return `<div class="progress-bulan-row">
        <div class="pb-nama">${b.emoji} Bulan ${b.nomor}</div>
        <div class="pb-bar"><div class="pb-fill" style="width:${persen}%;background:${b.warnaGradient.includes(',') ? b.warnaGradient : 'var(--blue)'}">&nbsp;</div></div>
        <div class="pb-persen" style="color:${persen >= 80 ? '#00C896' : persen >= 50 ? '#FFD600' : '#FF6B35'}">${persen}%</div>
      </div>`;
    }).join('');
    // Tombol raport
    progressContent.innerHTML += `<button style="margin-top:1.5rem;background:linear-gradient(135deg,#FF6B35,#FF4081);color:white;border:none;padding:.8rem 2rem;border-radius:20px;font-weight:800;cursor:pointer;font-size:.88rem" onclick="pdfGenerator.cetakRaport('${santri.nama}')">📄 Cetak E-Raport</button>`;
  },

  // === JINGLE AUDIO PLAYER & LYRICS ===
  initJinglePlayer() {
    const audio = document.getElementById('jingle-audio');
    if (!audio) return;

    audio.addEventListener('timeupdate', () => this.updateJingleProgress());
    audio.addEventListener('loadedmetadata', () => this.updateJingleProgress());
    audio.addEventListener('ended', () => {
      this.updateJinglePlayState(false);
    });

    // Clone lyrics to modal content
    const lyricsBody = document.querySelector('.jingle-lyrics-body');
    const modalContent = document.getElementById('modal-lyrics-content');
    if (lyricsBody && modalContent) {
      modalContent.innerHTML = lyricsBody.innerHTML;
    }
  },

  toggleJingleAudio() {
    const audio = document.getElementById('jingle-audio');
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => {
        this.updateJinglePlayState(true);
      }).catch(err => {
        console.log("Audio play error:", err);
      });
    } else {
      audio.pause();
      this.updateJinglePlayState(false);
    }
  },

  updateJinglePlayState(isPlaying) {
    const mainIcon = document.getElementById('icon-jingle-main-play');
    const mainText = document.getElementById('text-jingle-main-play');
    const mainBtn = document.getElementById('btn-jingle-main-play');

    const modalIcon = document.getElementById('icon-jingle-modal-play');
    const modalText = document.getElementById('text-jingle-modal-play');

    if (isPlaying) {
      if (mainIcon) mainIcon.className = 'fa-solid fa-pause';
      if (mainText) mainText.textContent = 'Jeda Jingle';
      if (mainBtn) mainBtn.style.background = 'linear-gradient(135deg, var(--orange), #E65100)';

      if (modalIcon) modalIcon.className = 'fa-solid fa-pause';
      if (modalText) modalText.textContent = 'Jeda Lagu';
    } else {
      if (mainIcon) mainIcon.className = 'fa-solid fa-play';
      if (mainText) mainText.textContent = 'Putar Jingle';
      if (mainBtn) mainBtn.style.background = 'linear-gradient(135deg, var(--green), #00A876)';

      if (modalIcon) modalIcon.className = 'fa-solid fa-play';
      if (modalText) modalText.textContent = 'Putar Lagu';
    }
  },

  updateJingleProgress() {
    const audio = document.getElementById('jingle-audio');
    if (!audio) return;

    const currTimeEl = document.getElementById('jingle-current-time');
    const durTimeEl = document.getElementById('jingle-duration-time');
    const fillEl = document.getElementById('jingle-progress-fill');

    const current = audio.currentTime || 0;
    const duration = audio.duration || 0;

    if (currTimeEl) currTimeEl.textContent = this.formatAudioTime(current);
    if (durTimeEl) durTimeEl.textContent = duration ? this.formatAudioTime(duration) : '0:00';

    if (fillEl && duration > 0) {
      const pct = (current / duration) * 100;
      fillEl.style.width = `${pct}%`;
    }
  },

  seekJingle(e) {
    const audio = document.getElementById('jingle-audio');
    const bar = document.getElementById('jingle-progress-bar-container');
    if (!audio || !bar || !audio.duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = pct * audio.duration;
  },

  formatAudioTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  },

  toggleJingleLyrics() {
    const box = document.getElementById('jingle-lyrics-container');
    const btnText = document.getElementById('text-toggle-lyrics');
    if (!box) return;

    if (box.style.display === 'none') {
      box.style.display = 'block';
      if (btnText) btnText.textContent = 'Sembunyikan Lirik';
    } else {
      box.style.display = 'none';
      if (btnText) btnText.textContent = 'Tampilkan Lirik';
    }
  },

  openJingleModal() {
    const modal = document.getElementById('modal-jingle');
    if (modal) modal.classList.add('open');
  },

  closeJingleModal() {
    const modal = document.getElementById('modal-jingle');
    if (modal) modal.classList.remove('open');
  }
};

// =====================================================
// INIT saat halaman siap
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  const checkDataReady = () => {
    if (typeof KURIKULUM_DATA !== 'undefined' && typeof HIJAIYAH_DATA !== 'undefined' && 
        typeof CALISTUNG_DATA !== 'undefined' && typeof FIQIH_DATA !== 'undefined') {
      app.init();
      if (typeof quizEngine !== 'undefined') quizEngine.init();
      if (typeof pdfGenerator !== 'undefined') pdfGenerator.init();
    } else {
      setTimeout(checkDataReady, 100);
    }
  };
  checkDataReady();
});
