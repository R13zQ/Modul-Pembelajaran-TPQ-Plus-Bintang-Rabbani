// =====================================================
// QUIZ-ENGINE.JS — Motor Quiz Interaktif Multi-Format
// =====================================================

const quizEngine = {
  currentType: 'huruf-arab',
  questions: [],
  currentIndex: 0,
  score: 0,
  
  init() {
    this.loadQuiz();
  },
  
  setType(type, btn) {
    this.currentType = type;
    document.querySelectorAll('.quiz-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.loadQuiz();
  },
  
  loadQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    
    if (this.currentType === 'evaluasi-mingguan') {
      const content = document.getElementById('quiz-content');
      if (content) {
        content.innerHTML = `
          <div style="text-align:center; padding:1.5rem 0">
            <div style="font-size:3.5rem; margin-bottom:1rem">✍️</div>
            <h3 style="font-family:'Poppins',sans-serif; font-weight:900; color:#1A237E; font-size:1.4rem; margin-bottom:.5rem">Kuis Evaluasi Pekan</h3>
            <p style="font-size:.85rem; color:#546e7a; margin-bottom:2rem">Pilih Bulan dan Pekan untuk memulai tes evaluasi mandiri santri.</p>
            
            <div style="display:flex; gap:1rem; justify-content:center; margin-bottom:2rem; flex-wrap:wrap">
              <div style="text-align:left">
                <label style="font-weight:800; font-size:.8rem; color:#78909c; display:block; margin-bottom:.3rem">Pilih Bulan:</label>
                <select id="eval-sel-bulan" style="padding:.6rem 1.2rem; border-radius:12px; border:2px solid #CFD8DC; font-weight:800; color:#1A237E; outline:none">
                  ${Array.from({length:12}, (_,i) => `<option value="${i+1}">Bulan ${i+1}</option>`).join('')}
                </select>
              </div>
              <div style="text-align:left">
                <label style="font-weight:800; font-size:.8rem; color:#78909c; display:block; margin-bottom:.3rem">Pilih Pekan:</label>
                <select id="eval-sel-pekan" style="padding:.6rem 1.2rem; border-radius:12px; border:2px solid #CFD8DC; font-weight:800; color:#1A237E; outline:none">
                  <option value="1">Pekan 1 (Jumat)</option>
                  <option value="2">Pekan 2 (Jumat)</option>
                  <option value="3">Pekan 3 (Jumat)</option>
                  <option value="4">Pekan 4 (Jumat)</option>
                </select>
              </div>
            </div>
            
            <button class="btn-primary" style="padding:.75rem 2rem; border-radius:30px; border:none; background:var(--orange); color:white; font-weight:800; font-size:.95rem; cursor:pointer" onclick="quizEngine.startWeeklyEvaluation()">Mulai Kuis →</button>
          </div>
        `;
      }
      return;
    }
    
    this.generateQuestions();
    this.renderQuestion();
  },
  
  startWeeklyEvaluation() {
    const selBulan = document.getElementById('eval-sel-bulan');
    const selPekan = document.getElementById('eval-sel-pekan');
    if (!selBulan || !selPekan) return;
    this.evalBulan = parseInt(selBulan.value);
    this.evalPekan = parseInt(selPekan.value);
    
    this.currentIndex = 0;
    this.score = 0;
    this.generateWeeklyQuestions(this.evalBulan, this.evalPekan);
    this.renderQuestion();
  },
  
  transcribeArabic(word) {
    if (!word) return "";
    let res = "";
    const chars = Array.from(word);
    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      const next = chars[i+1];
      if (c === 'ا') {
        if (next === 'َ') { res += 'a'; i++; }
        else if (next === 'ِ') { res += 'i'; i++; }
        else if (next === 'ُ') { res += 'u'; i++; }
        else { res += 'a'; }
      } else if (c === 'ب') { res += 'b'; }
      else if (c === 'ت') { res += 't'; }
      else if (c === 'ث') { res += 'ts'; }
      else if (c === 'ج') { res += 'j'; }
      else if (c === 'ح') { res += 'h'; }
      else if (c === 'خ') { res += 'kh'; }
      else if (c === 'د') { res += 'd'; }
      else if (c === 'ذ') { res += 'dz'; }
      else if (c === 'ر') { res += 'r'; }
      else if (c === 'ز') { res += 'z'; }
      else if (c === 'س') { res += 's'; }
      else if (c === 'ش') { res += 'sy'; }
      else if (c === 'ص') { res += 'sh'; }
      else if (c === 'ض') { res += 'dh'; }
      else if (c === 'ط') { res += 'th'; }
      else if (c === 'ظ') { res += 'zh'; }
      else if (c === 'ع') { res += 'a\''; }
      else if (c === 'غ') { res += 'gh'; }
      else if (c === 'ف') { res += 'f'; }
      else if (c === 'ق') { res += 'q'; }
      else if (c === 'ك') { res += 'k'; }
      else if (c === 'ل') { res += 'l'; }
      else if (c === 'م') { res += 'm'; }
      else if (c === 'ن') { res += 'n'; }
      else if (c === 'و') { res += 'w'; }
      else if (c === 'ه') { res += 'h'; }
      else if (c === 'ء') { res += 'a'; }
      else if (c === 'ي') { res += 'y'; }
      else if (c === 'َ') {
        if (next === 'ا') { res += 'aa'; i++; }
        else { res += 'a'; }
      }
      else if (c === 'ِ') { res += 'i'; }
      else if (c === 'ُ') { res += 'u'; }
      else if (c === 'ً') { res += 'an'; }
      else if (c === 'ٍ') { res += 'in'; }
      else if (c === 'ٌ') { res += 'un'; }
      else if (c === 'ّ') {
        if (res.length > 0) {
          const last = res[res.length - 1];
          if (!['a','i','u'].includes(last)) res += last;
        }
      }
      else if (c === ' ') { res += ' '; }
      else if (c === '=') { res += ' = '; }
    }
    return res.replace(/\s+/g, ' ').trim();
  },

  generateWeeklyQuestions(b, w) {
    this.questions = [];
    
    const bData = KURIKULUM_DATA.bulan[b - 1];
    if (!bData) return;
    
    // Soal 1: Tahsin (Iqra)
    let iqraLvl = (b >= 7) ? 2 : 1;
    
    const iqData = HIJAIYAH_DATA.iqra[`iqra${iqraLvl}`];
    let wordItem = 'اَ';
    let wordLatin = 'a';
    if (iqData) {
      if (w <= 2) {
        wordItem = iqData.satuHuruf[Math.floor(Math.random() * iqData.satuHuruf.length)];
        wordLatin = this.transcribeArabic(wordItem); 
      } else {
        const compounds = [];
        iqData.pages.forEach(p => {
          p.rows.forEach(r => {
            r.forEach(wd => {
              if (wd.length > 2 || wd.includes(' ') || wd.includes('=')) {
                compounds.push(wd);
              }
            });
          });
        });
        const finalCompounds = compounds.length > 0 ? compounds : ['اَ بَ'];
        wordItem = finalCompounds[Math.floor(Math.random() * finalCompounds.length)];
        wordLatin = this.transcribeArabic(wordItem);
      }
    }
    
    const choice1 = wordLatin;
    const choices1 = [choice1];
    while (choices1.length < 4) {
      let rand = 'ba';
      if (iqData) {
        if (w <= 2) {
          const randWord = iqData.satuHuruf[Math.floor(Math.random() * iqData.satuHuruf.length)];
          rand = this.transcribeArabic(randWord);
        } else {
          const compounds = [];
          iqData.pages.forEach(p => {
            p.rows.forEach(r => {
              r.forEach(wd => {
                if (wd.length > 2 || wd.includes(' ') || wd.includes('=')) {
                  compounds.push(wd);
                }
              });
            });
          });
          const finalCompounds = compounds.length > 0 ? compounds : ['اَ بَ'];
          const randWord = finalCompounds[Math.floor(Math.random() * finalCompounds.length)];
          rand = this.transcribeArabic(randWord);
        }
      }
      if (!choices1.includes(rand) && rand) choices1.push(rand);
    }
    choices1.sort(() => Math.random() - .5);
    this.questions.push({
      type: 'choice',
      question: `<b>Evaluasi Tahsin Pekan ${w}</b>:<br>Bagaimana cara melafalkan kata Iqra berikut?<br><div style="font-size:4.5rem; color:#1A237E; direction:rtl; margin:.8rem 0; text-align:center">${wordItem}</div>`,
      correct: choice1,
      pilihan: choices1,
      emoji: '📖'
    });
    
    // Soal 2: Calistung Huruf
    let letters = [];
    if (b === 1) letters = ['A','I','U','E','O'];
    else if (b === 2) letters = ['B','C','D'];
    else if (b === 3) letters = ['F','G','H'];
    else if (b === 4) letters = ['J','K','L','M'];
    else if (b === 5) letters = ['N','P','Q','R'];
    else if (b === 6) letters = ['S','T','U','V'];
    else if (b === 7) letters = ['W','X','Y','Z'];
    
    if (letters.length > 0) {
      const targetL = letters[Math.floor(Math.random() * letters.length)];
      const hData = CALISTUNG_DATA.hurufIndonesia.find(h => h.huruf === targetL) || CALISTUNG_DATA.hurufIndonesia[0];
      const correctChoice = hData.huruf;
      const choices2 = [correctChoice];
      while (choices2.length < 4) {
        const rand = CALISTUNG_DATA.hurufIndonesia[Math.floor(Math.random() * CALISTUNG_DATA.hurufIndonesia.length)].huruf;
        if (!choices2.includes(rand)) choices2.push(rand);
      }
      choices2.sort(() => Math.random() - .5);
      this.questions.push({
        type: 'choice',
        question: `<b>Evaluasi Huruf Pekan ${w}</b>:<br>Huruf apakah yang berbunyi seperti awalan kata "${hData.contoh[0].kata}" ${hData.contoh[0].emoji}?`,
        correct: correctChoice,
        pilihan: choices2,
        emoji: hData.contoh[0].emoji
      });
    } else {
      const correctSpelling = (b === 8) ? "MAMA" : (b === 9) ? "KUCING" : (b === 10) ? "SEMUT" : "ZAID";
      const wordEmoji = (b === 8) ? "👩" : (b === 9) ? "🐱" : (b === 10) ? "🐜" : "👦";
      const questionText = (b === 8) ? "MA-MA" : (b === 9) ? "KU-CING" : (b === 10) ? "SE-MUT" : "ZA-ID";
      this.questions.push({
        type: 'choice',
        question: `<b>Evaluasi Membaca Pekan ${w}</b>:<br>Gabungan suku kata <b>"${questionText}"</b> membentuk kata apa?`,
        correct: correctSpelling,
        pilihan: [correctSpelling, "PAPA", "SAPI", "BUKU"].sort(() => Math.random() - .5),
        emoji: wordEmoji
      });
    }
    
    // Soal 3: Calistung Angka / Matematika
    let numbers = [];
    if (b === 1) numbers = CALISTUNG_DATA.angka.slice(0, 5);
    else if (b === 2) numbers = CALISTUNG_DATA.angka.slice(5, 10);
    else if (b === 3) numbers = CALISTUNG_DATA.angka.slice(10, 15);
    else if (b === 4) numbers = CALISTUNG_DATA.angka.slice(15, 20);
    else if (b === 5) numbers = CALISTUNG_DATA.angka.slice(20, 25);
    else if (b === 6) numbers = CALISTUNG_DATA.angka.slice(25, 30);
    
    if (numbers.length > 0) {
      const aData = numbers[Math.floor(Math.random() * numbers.length)];
      const choices3 = [aData.angka.toString()];
      while (choices3.length < 4) {
        const rand = (Math.floor(Math.random() * 30) + 1).toString();
        if (!choices3.includes(rand)) choices3.push(rand);
      }
      choices3.sort(() => Math.random() - .5);
      this.questions.push({
        type: 'choice',
        question: `<b>Evaluasi Angka Pekan ${w}</b>:<br>Berapakah jumlah buah ${aData.emoji} berikut?<br><div style="font-size:2.2rem; margin-top:.5rem">${aData.emoji.repeat(aData.angka)}</div>`,
        correct: aData.angka.toString(),
        pilihan: choices3,
        emoji: aData.emoji
      });
    } else {
      let mathQ = { cerita: 'Berapakah 2 + 3?', jawaban: 5, emoji: '🍎', visual: '2 + 3' };
      if (b === 6) {
        const q = CALISTUNG_DATA.penjumlahan[Math.floor(Math.random() * 3)];
        mathQ = { cerita: q.cerita, jawaban: q.jawaban, emoji: q.emoji, visual: `${q.angka1} + ${q.angka2}` };
      } else if (b === 7) {
        const q = CALISTUNG_DATA.pengurangan[Math.floor(Math.random() * 3)];
        mathQ = { cerita: q.cerita, jawaban: q.jawaban, emoji: q.emoji, visual: `${q.awal} - ${q.kurang}` };
      } else if (b === 8) {
        mathQ = { cerita: 'Ada 12 bunga mekar, 4 layu. Berapa sisa bunga?', jawaban: 8, emoji: '🌸', visual: '12 - 4' };
      } else if (b === 9) {
        const q = CALISTUNG_DATA.perkalian[Math.floor(Math.random() * 2)];
        mathQ = { cerita: q.cerita, jawaban: q.jawaban, emoji: q.emoji, visual: `${q.angka1} * ${q.angka2}` };
      } else {
        let startCerita = (b - 10) * 3;
        const q = CALISTUNG_DATA.soalCerita[startCerita + Math.floor(Math.random() * 2)];
        mathQ = { cerita: q.soal, jawaban: q.jawaban, emoji: q.emoji, visual: q.nilai ? `Nilai Karakter: ${q.nilai}` : '' };
      }
      
      const correctChoice = mathQ.jawaban.toString();
      const choices3 = [correctChoice];
      while (choices3.length < 4) {
        const rand = (Math.floor(Math.random() * 20) + 1).toString();
        if (!choices3.includes(rand)) choices3.push(rand);
      }
      choices3.sort(() => Math.random() - .5);
      
      this.questions.push({
        type: 'choice',
        question: `<b>Evaluasi Berhitung Pekan ${w}</b>:<br>${mathQ.cerita}<br><div style="font-weight:bold; font-size:1.8rem; margin-top:.5rem">${mathQ.visual} = ?</div>`,
        correct: correctChoice,
        pilihan: choices3,
        emoji: mathQ.emoji
      });
    }
    
    // Soal 4: Fiqih (Ibadah / Doa)
    let fiqihQ = { question: 'Apakah rukun islam yang pertama?', correct: 'Syahadat', pilihan: ['Syahadat', 'Sholat', 'Zakat', 'Puasa'], emoji: '☝️' };
    if (b === 1) {
      fiqihQ = {
        question: 'Apakah arti dari bacaan Syahadat Rasul?',
        correct: 'Nabi Muhammad utusan Allah',
        pilihan: ['Nabi Muhammad utusan Allah', 'Tiada Tuhan selain Allah', 'Niat Sholat karena Allah', 'Allah Maha Besar'].sort(() => Math.random() - .5),
        emoji: '☝️'
      };
    } else if (b === 2) {
      const step = FIQIH_DATA.wudhu[Math.floor(Math.random() * 4)];
      fiqihQ = {
        question: `Pada wudhu bagian 1, langkah apakah yang dilakukan setelah Niat?<br><i>Clue: "${step.arti}"</i>`,
        correct: step.nama,
        pilihan: [step.nama, 'Cuci Tangan', 'Kumur-kumur', 'Basuh Muka'].sort(() => Math.random() - .5),
        emoji: '💧'
      };
    } else if (b === 3) {
      const step = FIQIH_DATA.wudhu[4 + Math.floor(Math.random() * 4)];
      fiqihQ = {
        question: `Pada wudhu bagian 2, langkah apakah yang dilakukan untuk: <b>"${step.arti}"</b>?`,
        correct: step.nama,
        pilihan: [step.nama, 'Basuh Muka', 'Usap Kepala', 'Cuci Kaki'].sort(() => Math.random() - .5),
        emoji: '💧'
      };
    } else if (b === 4) {
      const step = FIQIH_DATA.sholat[Math.floor(Math.random() * 6)];
      fiqihQ = {
        question: `Pada gerakan sholat awal, gerakan apakah yang memiliki nama: <b>"${step.nama}"</b>?`,
        correct: step.nama,
        pilihan: [step.nama, 'Takbiratul Ihram', 'Ruku\'', 'I\'tidal'].sort(() => Math.random() - .5),
        emoji: step.emoji
      };
    } else if (b === 5) {
      const step = FIQIH_DATA.sholat[6 + Math.floor(Math.random() * 6)];
      fiqihQ = {
        question: `Pada gerakan sholat akhir, gerakan apakah setelah Sujud Kedua?`,
        correct: step.nama,
        pilihan: [step.nama, 'Sujud Kedua', 'Tasyahhud Akhir', 'Salam'].sort(() => Math.random() - .5),
        emoji: step.emoji
      };
    } else if (b >= 6 && b <= 10) {
      const startDoa = (b - 6) * 4;
      const d = FIQIH_DATA.doaHarian[startDoa + Math.floor(Math.random() * 4)];
      fiqihQ = {
        question: `Bagaimanakah bunyi doa saat: <b>"${d.situasi}"</b>?`,
        correct: d.nama,
        pilihan: [d.nama, 'Doa Belajar', 'Doa Makan', 'Doa Tidur'].sort(() => Math.random() - .5),
        emoji: d.emoji
      };
    } else if (b === 11) {
      const a = FIQIH_DATA.adab[Math.floor(Math.random() * FIQIH_DATA.adab.length)];
      fiqihQ = {
        question: `Manakah yang merupakan salah satu adab dalam tema: <b>"${a.nama}"</b>?`,
        correct: a.pointAdab[0],
        pilihan: [a.pointAdab[0], 'Makan terburu-buru', 'Berbicara dengan keras', 'Bermain gadget seharian'].sort(() => Math.random() - .5),
        emoji: a.emoji
      };
    } else {
      fiqihQ = {
        question: 'Apakah rukun islam yang kedua?',
        correct: 'Sholat',
        pilihan: ['Syahadat', 'Sholat', 'Zakat', 'Puasa'],
        emoji: '🙏'
      };
    }
    this.questions.push({
      type: 'choice',
      question: `<b>Evaluasi Fiqih Pekan ${w}</b>:<br>${fiqihQ.question}`,
      correct: fiqihQ.correct,
      pilihan: fiqihQ.pilihan,
      emoji: fiqihQ.emoji
    });
    
    // Soal 5: Hafalan Lagu Anak Islami
    const randomLagu = bData.targetSurat ? (HIJAIYAH_DATA.suratPendek.find(s => s.nama === bData.targetSurat) || HIJAIYAH_DATA.suratPendek[0]) : HIJAIYAH_DATA.suratPendek[0];
    const targetBait = randomLagu.teks[Math.floor(Math.random() * randomLagu.teks.length)];
    const lines = targetBait.lirik.split('\n');
    const promptLine = lines[0];
    const correctLine = lines[1] || promptLine;
    
    const fakeChoices = [];
    while (fakeChoices.length < 3) {
      const otherLagu = HIJAIYAH_DATA.suratPendek[Math.floor(Math.random() * HIJAIYAH_DATA.suratPendek.length)];
      if (otherLagu.nama !== randomLagu.nama) {
        const otherBait = otherLagu.teks[Math.floor(Math.random() * otherLagu.teks.length)];
        const otherLine = otherBait.lirik.split('\n')[0];
        if (!fakeChoices.includes(otherLine) && otherLine !== correctLine) {
          fakeChoices.push(otherLine);
        }
      }
    }
    const choices = [correctLine, ...fakeChoices].sort(() => Math.random() - .5);
    
    this.questions.push({
      type: 'choice',
      question: `<b>Evaluasi Lagu Pekan ${w}</b>:<br>Lanjutkan potongan lirik dari lagu <b>"${randomLagu.nama}"</b> berikut:<br><div style="font-size:1.1rem; font-weight:bold; color:#1A237E; margin:.8rem 0; text-align:center">"${promptLine} ..."</div>`,
      correct: correctLine,
      pilihan: choices,
      emoji: '🎵'
    });
  },
  
  generateQuestions() {
    this.questions = [];
    const count = 5; // 5 soal per kuis
    
    if (this.currentType === 'huruf-arab') {
      const list = [...HIJAIYAH_DATA.huruf].sort(() => Math.random() - .5);
      for (let i = 0; i < count; i++) {
        const item = list[i % list.length];
        const correct = item.nama;
        const choices = [correct];
        while (choices.length < 4) {
          const rand = HIJAIYAH_DATA.huruf[Math.floor(Math.random() * HIJAIYAH_DATA.huruf.length)].nama;
          if (!choices.includes(rand)) choices.push(rand);
        }
        choices.sort(() => Math.random() - .5);
        this.questions.push({
          type: 'choice',
          question: `Huruf apakah ini? <div style="font-size: 5rem; line-height:1.2; direction:rtl; margin-top:.5rem">${item.arab}</div>`,
          correct: correct,
          pilihan: choices,
          emoji: item.emoji
        });
      }
    } else if (this.currentType === 'huruf-indo') {
      const list = [...CALISTUNG_DATA.hurufIndonesia].sort(() => Math.random() - .5);
      for (let i = 0; i < count; i++) {
        const item = list[i % list.length];
        const correct = item.huruf;
        const choices = [correct];
        while (choices.length < 4) {
          const rand = CALISTUNG_DATA.hurufIndonesia[Math.floor(Math.random() * CALISTUNG_DATA.hurufIndonesia.length)].huruf;
          if (!choices.includes(rand)) choices.push(rand);
        }
        choices.sort(() => Math.random() - .5);
        const contoh1 = item.contoh[0];
        this.questions.push({
          type: 'choice',
          question: `Huruf apa yang berbunyi seperti awalan kata "${contoh1.kata}" ${contoh1.emoji}?`,
          correct: correct,
          pilihan: choices,
          emoji: contoh1.emoji
        });
      }
    } else if (this.currentType === 'berhitung') {
      const list = [...CALISTUNG_DATA.penjumlahan, ...CALISTUNG_DATA.pengurangan].sort(() => Math.random() - .5);
      for (let i = 0; i < count; i++) {
        const item = list[i % list.length];
        const correct = item.jawaban.toString();
        const choices = [correct];
        while (choices.length < 4) {
          const rand = (Math.floor(Math.random() * 10) + 1).toString();
          if (!choices.includes(rand)) choices.push(rand);
        }
        choices.sort(() => Math.random() - .5);
        this.questions.push({
          type: 'choice',
          question: `${item.cerita || item.soal}<br><div style="font-size:2rem; margin-top:.5rem">${item.emoji.repeat(item.angka1 || item.awal || 1)} ${item.angka2 ? '+' : '−'} ${item.emoji.repeat(item.angka2 || item.kurang || 1)} = ?</div>`,
          correct: correct,
          pilihan: choices,
          emoji: item.emoji
        });
      }
    } else if (this.currentType === 'doa') {
      const list = [...FIQIH_DATA.doaHarian].sort(() => Math.random() - .5);
      for (let i = 0; i < count; i++) {
        const item = list[i % list.length];
        const correct = item.nama;
        const choices = [correct];
        while (choices.length < 4) {
          const rand = FIQIH_DATA.doaHarian[Math.floor(Math.random() * FIQIH_DATA.doaHarian.length)].nama;
          if (!choices.includes(rand)) choices.push(rand);
        }
        choices.sort(() => Math.random() - .5);
        this.questions.push({
          type: 'choice',
          question: `Bagaimana doa saat berada dalam situasi: <b>"${item.situasi}"</b>?`,
          correct: correct,
          pilihan: choices,
          emoji: item.emoji
        });
      }
    } else if (this.currentType === 'drag-drop') {
      // Urutan Wudhu
      const wudhuList = FIQIH_DATA.wudhu.slice(0, 4).map((w, idx) => ({ name: w.nama, step: idx + 1, emoji: w.emoji }));
      this.questions.push({
        type: 'dnd',
        question: 'Urutkan 4 langkah wudhu pertama dari kiri ke kanan!',
        items: [...wudhuList].sort(() => Math.random() - .5),
        correct: wudhuList
      });
      // Urutan Angka 1-5
      const numList = [1,2,3,4,5].map(n => ({ name: n.toString(), step: n, emoji: '🔢' }));
      this.questions.push({
        type: 'dnd',
        question: 'Urutkan angka dari yang terkecil!',
        items: [...numList].sort(() => Math.random() - .5),
        correct: numList
      });
    } else { // lagu anak islami
      const list = [...HIJAIYAH_DATA.suratPendek].sort(() => Math.random() - .5);
      for (let i = 0; i < count; i++) {
        const item = list[i % list.length];
        const correct = item.nama;
        const choices = [correct];
        while (choices.length < 4) {
          const rand = HIJAIYAH_DATA.suratPendek[Math.floor(Math.random() * HIJAIYAH_DATA.suratPendek.length)].nama;
          if (!choices.includes(rand)) choices.push(rand);
        }
        choices.sort(() => Math.random() - .5);
        const randomBait = item.teks[Math.floor(Math.random() * item.teks.length)];
        const snippet = randomBait.lirik.split('\n')[0];
        this.questions.push({
          type: 'choice',
          question: `Potongan lirik ini: <div style="font-size:1.1rem; font-weight:bold; color:#1A237E; margin:.5rem 0; text-align:center">"${snippet}..."</div> merupakan bagian dari lagu anak Islami apakah?`,
          correct: correct,
          pilihan: choices,
          emoji: '🎵'
        });
      }
    }
  },
  
  renderQuestion() {
    const progress = document.getElementById('quiz-progress');
    const content = document.getElementById('quiz-content');
    if (!progress || !content) return;
    
    if (this.currentIndex >= this.questions.length) {
      progress.style.width = '100%';
      this.renderResult();
      return;
    }
    
    const pct = (this.currentIndex / this.questions.length) * 100;
    progress.style.width = `${pct}%`;
    
    const q = this.questions[this.currentIndex];
    
    let html = `
      <div class="quiz-nomor">Pertanyaan ${this.currentIndex + 1} dari ${this.questions.length}</div>
      <div class="quiz-pertanyaan">${q.question}</div>
    `;
    
    if (q.type === 'choice') {
      html += `<div class="quiz-pilihan-grid">`;
      q.pilihan.forEach(p => {
        html += `
          <button class="quiz-pilihan" onclick="quizEngine.submitAnswer(this, '${p}')">
            <span class="quiz-pilihan-emoji">${q.emoji || '⭐'}</span>
            <span>${p}</span>
          </button>
        `;
      });
      html += `</div>`;
    } else if (q.type === 'dnd') {
      html += `
        <div class="dnd-items">
          ${q.items.map((it, idx) => `<div class="dnd-item" draggable="true" ondragstart="quizEngine.drag(event)" id="dnd-item-${idx}" data-step="${it.step}"><span>${it.emoji}</span> ${it.name}</div>`).join('')}
        </div>
        <div class="dnd-slots" style="margin-top:2rem">
          ${q.correct.map((c, idx) => `<div class="dnd-slot" ondragover="quizEngine.allowDrop(event)" ondragleave="quizEngine.dragLeave(event)" ondrop="quizEngine.drop(event)" data-slot-step="${idx+1}"><span>Kotak ${idx+1}</span></div>`).join('')}
        </div>
        <div style="text-align:center; margin-top:2.5rem">
          <button class="btn-primary" onclick="quizEngine.submitDnd(this)">Kirim Jawaban <i class="fa-solid fa-check"></i></button>
        </div>
      `;
    }
    
    content.innerHTML = html;
  },
  
  submitAnswer(btn, value) {
    const q = this.questions[this.currentIndex];
    const choices = btn.parentElement.querySelectorAll('.quiz-pilihan');
    choices.forEach(c => c.disabled = true);
    
    if (value === q.correct) {
      btn.classList.add('benar');
      this.score += 20;
      app.showKonfeti();
      app.jumpMascot();
    } else {
      btn.classList.add('salah');
      choices.forEach(c => {
        if (c.textContent.trim().includes(q.correct)) c.classList.add('benar');
      });
    }
    
    setTimeout(() => {
      this.currentIndex += 1;
      this.renderQuestion();
    }, 2000);
  },
  
  // Drag Drop Handlers
  drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.target.classList.add('dragging');
  },
  
  allowDrop(ev) {
    ev.preventDefault();
    ev.target.closest('.dnd-slot')?.classList.add('drag-over');
  },
  
  dragLeave(ev) {
    ev.target.closest('.dnd-slot')?.classList.remove('drag-over');
  },
  
  drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id);
    dragged.classList.remove('dragging');
    const slot = ev.target.closest('.dnd-slot');
    if (slot && !slot.classList.contains('filled')) {
      slot.classList.remove('drag-over');
      slot.classList.add('filled');
      slot.innerHTML = '';
      slot.appendChild(dragged);
    }
  },
  
  submitDnd(btn) {
    const slots = document.querySelectorAll('.dnd-slot');
    let correctCount = 0;
    slots.forEach(slot => {
      const slotStep = parseInt(slot.dataset.slotStep);
      const item = slot.querySelector('.dnd-item');
      if (item && parseInt(item.dataset.step) === slotStep) {
        correctCount += 1;
      }
    });
    
    btn.disabled = true;
    
    if (correctCount === slots.length) {
      slots.forEach(s => s.style.borderColor = 'var(--green)');
      this.score += 20;
      app.showKonfeti();
      app.jumpMascot();
    } else {
      slots.forEach(s => s.style.borderColor = 'var(--pink)');
    }
    
    setTimeout(() => {
      this.currentIndex += 1;
      this.renderQuestion();
    }, 2500);
  },
  
  renderResult() {
    const content = document.getElementById('quiz-content');
    if (!content) return;
    
    let emoji = '😐';
    let msg = 'Ayo belajar lagi biar makin pintar!';
    if (this.score >= 80) {
      emoji = '🎉';
      msg = 'Luar biasa! Kamu pintar sekali! Sholih & Pintar!';
    } else if (this.score >= 50) {
      emoji = '👍';
      msg = 'Bagus! Teruskan belajarnya ya!';
    }
    
    content.innerHTML = `
      <div class="quiz-result show">
        <div class="result-emoji">${emoji}</div>
        <div class="result-skor">Skor: ${this.score}</div>
        <div class="result-pesan">${msg}</div>
        <button class="btn-primary" onclick="quizEngine.loadQuiz()"><i class="fa-solid fa-arrows-rotate"></i> Main Lagi</button>
      </div>
    `;
  }
};
