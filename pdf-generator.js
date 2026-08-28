// =====================================================
// PDF-GENERATOR.JS — Generator Modul Cetak PDF 12 Bulan
// =====================================================

const pdfGenerator = {
  init() {
    console.log("PDF Generator initialized.");
  },
  
  // === DOWNLOAD SEMUA 12 BULAN (INSTANT DIRECT DOWNLOAD) ===
  async downloadSemua() {
    if (typeof app !== 'undefined' && app.requireAuth && !app.requireAuth()) return;
    const progress = document.getElementById('download-progress');
    const fill = document.getElementById('dp-fill');
    const subText = document.getElementById('dp-sub-text');
    if (progress) progress.classList.add('show');
    
    if (fill) fill.style.width = '50%';
    if (subText) subText.textContent = "Mengunduh Master Modul 12 Bulan...";
    await this.sleep(200);

    try {
      const link = document.createElement('a');
      link.href = 'Master_Modul_1Tahun_Bintang_Rabbani.pdf';
      link.download = 'Master_Modul_1Tahun_Bintang_Rabbani.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      if (fill) fill.style.width = '100%';
      if (subText) subText.textContent = "Berhasil mengunduh Master Modul 12 Bulan!";
      await this.sleep(300);
    } catch(e) {
      console.warn("Direct download fallback", e);
    }

    if (progress) progress.classList.remove('show');
    if (typeof app !== 'undefined' && app.showKonfeti) app.showKonfeti();
  },
  
  // === DOWNLOAD MODUL BULAN TERTENTU ===
  async downloadBulan(bulanNomor) {
    const progress = document.getElementById('download-progress');
    const fill = document.getElementById('dp-fill');
    const subText = document.getElementById('dp-sub-text');
    if (progress) progress.classList.add('show');
    
    const bulan = window.KURIKULUM_DATA.bulan[bulanNomor - 1];
    if (!bulan) return;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    
    if (fill) fill.style.width = '10%';
    if (subText) subText.textContent = `Menyiapkan Cover Modul Bulan ${bulanNomor}...`;
    await this.sleep(300);
    
    this.drawCover(doc, `MODUL BULAN ${bulanNomor}`, bulan.tema, `Hijaiyah: ${bulan.targetHijaiyah} · Calistung: ${bulan.targetCalistung}`);
    
    if (fill) fill.style.width = '30%';
    if (subText) subText.textContent = "Membuat Halaman Tahsin Hijaiyah...";
    await this.sleep(300);
    this.addHijaiyahPages(doc, bulanNomor);
    
    if (fill) fill.style.width = '55%';
    if (subText) subText.textContent = "Membuat Halaman Calistung...";
    await this.sleep(300);
    this.addCalistungPages(doc, bulanNomor);
    
    if (fill) fill.style.width = '75%';
    if (subText) subText.textContent = "Membuat Halaman Fiqih & Ibadah...";
    await this.sleep(300);
    this.addFiqihPages(doc, bulanNomor);
    
    if (fill) fill.style.width = '90%';
    if (subText) subText.textContent = "Membuat Lembar Mewarnai & Raport...";
    await this.sleep(300);
    this.addTematikPages(doc, bulanNomor);
    this.addRaportPage(doc, bulanNomor);
    
    if (fill) fill.style.width = '100%';
    if (subText) subText.textContent = "Menyimpan file PDF...";
    await this.sleep(500);
    
    doc.save(`Modul_Bulan_${bulanNomor}_Bintang_Rabbani.pdf`);
    
    if (progress) progress.classList.remove('show');
    if (typeof app !== 'undefined' && app.showKonfeti) app.showKonfeti();
  },



  // === DOWNLOAD 50 HALAMAN TRACING CALISTUNG & HIJAIYAH ===
  async downloadTracing50Halaman() {
    if (typeof app !== 'undefined' && app.requireAuth && !app.requireAuth()) return;
    const progress = document.getElementById('download-progress');
    const fill = document.getElementById('dp-fill');
    const subText = document.getElementById('dp-sub-text');
    if (progress) progress.classList.add('show');
    
    if (fill) fill.style.width = '30%';
    if (subText) subText.textContent = "Menyiapkan File Modul Tracing 50 Halaman...";
    await this.sleep(300);
    
    try {
      const link = document.createElement('a');
      link.href = 'Modul_Tracing_50_Halaman_CALISTUNG_Bintang_Rabbani.pdf';
      link.download = 'Modul_Tracing_50_Halaman_CALISTUNG_Bintang_Rabbani.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      if (fill) fill.style.width = '100%';
      if (subText) subText.textContent = "Berhasil mengunduh Modul Tracing 50 Halaman!";
      await this.sleep(500);
    } catch(err) {
      console.warn("Fallback to dynamic PDF build", err);
    }
    
    if (progress) progress.classList.remove('show');
    if (typeof app !== 'undefined' && app.showKonfeti) app.showKonfeti();
  },

  // === CETAK RAPORT SANTRI ===
  cetakRaport(namaSantri) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    
    doc.setDrawColor(26, 35, 126);
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 277);
    
    doc.setFont("Poppins", "bold");
    doc.setFontSize(22);
    doc.setTextColor(26, 35, 126);
    doc.text("LAPORAN HASIL BELAJAR (E-RAPORT)", 105, 30, { align: "center" });
    
    doc.setFontSize(14);
    doc.text("TPQ PLUS BINTANG RABBANI", 105, 40, { align: "center" });
    
    doc.setFont("Nunito", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Nama Santri:  ${namaSantri}`, 25, 60);
    doc.text(`Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}`, 25, 68);
    
    // Table Header
    doc.setFillColor(41, 182, 246);
    doc.rect(20, 80, 170, 10, "F");
    doc.setFont("Poppins", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("Bulan / Modul", 25, 87);
    doc.text("Progres Belajar", 140, 87);
    
    doc.setFont("Nunito", "normal");
    doc.setTextColor(0, 0, 0);
    
    const prog = app.progress[namaSantri] || {};
    let y = 98;
    for (let b = 1; b <= 12; b++) {
      const bulan = window.KURIKULUM_DATA.bulan[b - 1];
      const persen = prog[b] || 0;
      doc.text(`Bulan ${b}: ${bulan.tema.substring(0, 40)}...`, 25, y);
      doc.text(`${persen}% Selesai`, 140, y);
      
      doc.setDrawColor(200, 200, 200);
      doc.line(20, y + 3, 190, y + 3);
      y += 12;
    }
    
    // Tanda Tangan
    doc.setFont("Poppins", "bold");
    doc.text("Kepala TPQ Bintang Rabbani", 130, 250);
    doc.line(130, 270, 185, 270);
    
    doc.save(`Raport_${namaSantri}_Bintang_Rabbani.pdf`);
  },
  
  // === HELPERS UNTUK DRAWING VECTOR PDF ===
  drawCover(doc, title, subtitle, footer) {
    // Background light blue
    doc.setFillColor(232, 244, 253);
    doc.rect(0, 0, 210, 297, "F");
    
    // Border Navy
    doc.setDrawColor(26, 35, 126);
    doc.setLineWidth(1.5);
    doc.rect(8, 8, 194, 281);
    
    // Decorative circles
    doc.setFillColor(255, 214, 0);
    doc.circle(30, 40, 15, "F");
    
    doc.setFillColor(0, 200, 150);
    doc.circle(180, 250, 25, "F");
    
    // Text titles
    doc.setFont("Poppins", "bold");
    doc.setFontSize(28);
    doc.setTextColor(26, 35, 126);
    doc.text(title, 105, 100, { align: "center" });
    
    doc.setFontSize(16);
    doc.setTextColor(255, 107, 53);
    doc.text(subtitle, 105, 120, { align: "center" });
    
    // Decorative separator line
    doc.setDrawColor(255, 107, 53);
    doc.setLineWidth(1);
    doc.line(50, 140, 160, 140);
    
    // Description info
    doc.setFont("Nunito", "normal");
    doc.setFontSize(12);
    doc.setTextColor(55, 71, 79);
    doc.text(footer, 105, 160, { align: "center", maxWidth: 150 });
    
    // Logo text at bottom
    doc.setFont("Poppins", "bold");
    doc.setFontSize(14);
    doc.setTextColor(26, 35, 126);
    doc.text("Lembaga Pendidikan Islam Terpadu", 105, 245, { align: "center" });
    doc.setFontSize(11);
    doc.text("BINTANG RABBANI", 105, 253, { align: "center" });

    // Mandatory Footer Copyright Warning
    doc.setFont("Nunito", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(180, 0, 0);
    doc.text("dilarang mengcopy, memperbanyak dan menggunakan dokumen ini tanpa seizin dari TPQ Plus Bintang Rabbani.", 105, 282, { align: "center" });
  },
  
  addHijaiyahPages(doc, bulanNomor) {
    doc.addPage();
    
    let level = (bulanNomor >= 7) ? 2 : 1;
    
    this.drawPageHeader(doc, `Bulan ${bulanNomor}`, `LEMBAR BACAAN IQRA ${level}`);
    
    let y = 45;
    doc.setFont("Poppins", "bold");
    doc.setFontSize(14);
    doc.setTextColor(26, 35, 126);
    doc.text(`Materi Latihan Bacaan Iqra ${level}`, 20, y);
    
    y += 10;
    // Section 1: Bacaan Tunggal (1 Huruf)
    doc.setFontSize(11);
    doc.setTextColor(255, 107, 53);
    doc.text("A. Latihan Bacaan Tunggal (1 Huruf)", 20, y);
    
    const iqData = window.HIJAIYAH_DATA.iqra[`iqra${level}`];
    
    y += 8;
    if (iqData && iqData.satuHuruf) {
      // Draw a grid of 6 boxes for single letters
      let x = 20;
      for (let i = 0; i < Math.min(6, iqData.satuHuruf.length); i++) {
        doc.setFillColor(248, 250, 251);
        doc.rect(x, y, 25, 25, "F");
        doc.setDrawColor(200, 200, 200);
        doc.rect(x, y, 25, 25);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(22);
        doc.setTextColor(26, 35, 126);
        doc.text(iqData.satuHuruf[i], x + 12.5, y + 16, { align: "center" });
        x += 29;
      }
    }
    
    y += 35;
    // Section 2: Bacaan Dua Huruf / Bersambung
    doc.setFont("Poppins", "bold");
    doc.setFontSize(11);
    doc.setTextColor(255, 107, 53);
    doc.text("B. Latihan Bacaan Gabungan & Bersambung", 20, y);
    
    y += 8;
    if (iqData && iqData.pages) {
      const firstPage = iqData.pages[0];
      const secondPage = iqData.pages[1] || firstPage;
      const sampleRows = [
        firstPage.rows[0].join(' '),
        firstPage.rows[1].join(' '),
        secondPage.rows[0].join(' '),
        secondPage.rows[1].join(' ')
      ];
      for (let i = 0; i < Math.min(4, sampleRows.length); i++) {
        const textArab = sampleRows[i];
        doc.setFillColor(248, 250, 251);
        doc.rect(20, y, 170, 20, "F");
        doc.setDrawColor(220, 220, 220);
        doc.rect(20, y, 170, 20);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(18);
        doc.setTextColor(26, 35, 126);
        doc.text(textArab, 170, y + 13, { align: "right" });
        
        y += 25;
      }
    }
    
    // Section 3: Rubrik Penilaian
    y += 10;
    doc.setFont("Poppins", "bold");
    doc.setFontSize(11);
    doc.setTextColor(26, 35, 126);
    doc.text("C. Catatan Guru & Orang Tua", 20, y);
    
    y += 8;
    doc.rect(20, y, 170, 30);
    doc.setFont("Nunito", "normal");
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text("[  ] Lancar (Mumtaz)", 30, y + 10);
    doc.text("[  ] Cukup Lancar (Jayyid)", 30, y + 17);
    doc.text("[  ] Perlu Diulang (Murojaah)", 30, y + 24);
    
    doc.text("Tanda Tangan Pengajar:", 120, y + 10);
    doc.line(120, y + 25, 180, y + 25);
  },
  
  addCalistungPages(doc, bulanNomor) {
    doc.addPage();
    this.drawPageHeader(doc, `Bulan ${bulanNomor}`, "MODUL BELAJAR CALISTUNG");
    
    let y = 50;
    
    // 1. Filter Huruf Indonesia
    let letters = [];
    if (bulanNomor === 1) {
      letters = ['A','I','U','E','O'].map(v => window.CALISTUNG_DATA.hurufIndonesia.find(h => h.huruf === v)).filter(Boolean);
    } else if (bulanNomor === 2) {
      letters = window.CALISTUNG_DATA.hurufIndonesia.filter(h => ['B','C','D'].includes(h.huruf));
    } else if (bulanNomor === 3) {
      letters = window.CALISTUNG_DATA.hurufIndonesia.filter(h => ['F','G','H'].includes(h.huruf));
    } else if (bulanNomor === 4) {
      letters = window.CALISTUNG_DATA.hurufIndonesia.filter(h => ['J','K','L','M'].includes(h.huruf));
    } else if (bulanNomor === 5) {
      letters = window.CALISTUNG_DATA.hurufIndonesia.filter(h => ['N','P','Q','R'].includes(h.huruf));
    } else if (bulanNomor === 6) {
      letters = window.CALISTUNG_DATA.hurufIndonesia.filter(h => ['S','T','U','V'].includes(h.huruf));
    } else if (bulanNomor === 7) {
      letters = window.CALISTUNG_DATA.hurufIndonesia.filter(h => ['W','X','Y','Z'].includes(h.huruf));
    }
    
    if (letters.length > 0) {
      doc.setFont("Poppins", "bold");
      doc.setFontSize(13);
      doc.setTextColor(26, 35, 126);
      doc.text("A. Latihan Menulis Huruf (Tracing)", 20, y);
      y += 10;
      
      letters.forEach(h => {
        doc.setFillColor(250, 250, 250);
        doc.rect(20, y, 170, 28, "F");
        doc.setDrawColor(220, 220, 220);
        doc.rect(20, y, 170, 28);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(24);
        doc.setTextColor(255, 107, 53);
        doc.text(`${h.huruf} ${h.hurufKecil}`, 28, y + 20);
        
        doc.setFontSize(11);
        doc.setTextColor(180, 180, 180);
        doc.setLineDashPattern([2, 2], 0);
        doc.line(65, y + 14, 180, y + 14);
        doc.line(65, y + 22, 180, y + 22);
        doc.setLineDashPattern([], 0);
        doc.text(`${h.huruf}    ${h.huruf}    ${h.huruf}    ${h.huruf}    ${h.huruf}`, 70, y + 19);
        
        y += 33;
      });
    } else if (bulanNomor >= 8) {
      // Reading Exercise
      doc.setFont("Poppins", "bold");
      doc.setFontSize(13);
      doc.setTextColor(26, 35, 126);
      doc.text("A. Lembar Latihan Membaca Mandiri", 20, y);
      y += 10;
      
      doc.setFillColor(253, 248, 245);
      doc.rect(20, y, 170, 80, "F");
      doc.setDrawColor(255, 107, 53);
      doc.rect(20, y, 170, 80);
      
      doc.setFont("Poppins", "bold");
      doc.setFontSize(12);
      doc.setTextColor(26, 35, 126);
      doc.text("Bacalah dengan suara nyaring dan lancar:", 28, y + 15);
      
      doc.setFont("Nunito", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      
      let sampleReading = "";
      if (bulanNomor === 8) {
        sampleReading = "MAMA MAKAN ROTI MANIS\nSAPI BERLARI KENCANG\nBUDI MEMBACA BUKU CERITA BARU";
      } else if (bulanNomor === 9) {
        sampleReading = "Kucing belang itu mengeong sangat nyaring.\nBurung elang terbang tinggi sekali di atas awan.\nZaid sedang memotong kue ulang tahun.";
      } else if (bulanNomor === 10) {
        sampleReading = "Kisah Semut yang Rajin:\nAda seekor semut kecil berjalan mencari makan di bawah pohon.\nIa selalu bersyukur atas rezeki dari Allah. Temannya, seekor\nbelalang, malas dan suka tidur. Ketika musim hujan,\nsemut memiliki banyak kurma, sedangkan belalang kelaparan.";
      } else {
        sampleReading = "Zaid Anak Dermawan:\nZaid membeli kurma di pasar. Di jalan, ia melihat seorang\nkakek tua yang lapar. Zaid membagi kurmanya dengan ikhlas.\nKakek itu tersenyum dan mendoakan keselamatan Zaid.\nSungguh, menolong sesama adalah perbuatan yang terpuji.";
      }
      
      doc.text(sampleReading, 28, y + 28, { lineHeight: 1.5 });
      y += 95;
    }
    
    // 2. Filter Angka & Berhitung
    let numbers = [];
    if (bulanNomor === 1) numbers = window.CALISTUNG_DATA.angka.slice(0, 5);
    else if (bulanNomor === 2) numbers = window.CALISTUNG_DATA.angka.slice(5, 10);
    else if (bulanNomor === 3) numbers = window.CALISTUNG_DATA.angka.slice(10, 15);
    else if (bulanNomor === 4) numbers = window.CALISTUNG_DATA.angka.slice(15, 20);
    else if (bulanNomor === 5) numbers = window.CALISTUNG_DATA.angka.slice(20, 25);
    else if (bulanNomor === 6) numbers = window.CALISTUNG_DATA.angka.slice(25, 30);
    
    if (numbers.length > 0) {
      y += 5;
      doc.setFont("Poppins", "bold");
      doc.setFontSize(13);
      doc.setTextColor(26, 35, 126);
      doc.text("B. Belajar Mengenal Angka & Jumlah Benda", 20, y);
      y += 10;
      
      numbers.forEach(a => {
        doc.setFont("Poppins", "bold");
        doc.setFontSize(18);
        doc.setTextColor(0, 200, 150);
        doc.text(`${a.angka}`, 28, y + 8);
        
        doc.setFont("Nunito", "normal");
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text(`=  ${a.latin}  ( ${a.emoji.repeat(Math.min(a.angka, 8))} )`, 45, y + 8);
        
        doc.setDrawColor(230, 230, 230);
        doc.line(20, y + 14, 190, y + 14);
        y += 18;
      });
    } else if (bulanNomor >= 6) {
      // Arithmetic
      y += 5;
      doc.setFont("Poppins", "bold");
      doc.setFontSize(13);
      doc.setTextColor(26, 35, 126);
      doc.text("B. Lembar Kerja Matematika Dini", 20, y);
      y += 10;
      
      let mathQuestions = [];
      if (bulanNomor === 6) mathQuestions = window.CALISTUNG_DATA.penjumlahan.slice(0, 2);
      else if (bulanNomor === 7) mathQuestions = window.CALISTUNG_DATA.pengurangan.slice(0, 2);
      else if (bulanNomor === 8) {
        mathQuestions = [
          { cerita: 'Zaid punya 12 bunga mekar, 4 layu gugur. Berapa sisa bunga?', jawaban: 8 },
          { cerita: 'Aisha menangkap 10 ikan, kakaknya menangkap 5 ikan. Berapa totalnya?', jawaban: 15 }
        ];
      } else if (bulanNomor === 9) mathQuestions = window.CALISTUNG_DATA.perkalian.slice(0, 2);
      else {
        let startCerita = (bulanNomor - 10) * 3;
        mathQuestions = window.CALISTUNG_DATA.soalCerita.slice(startCerita, startCerita + 2);
      }
      
      mathQuestions.forEach((q, idx) => {
        doc.setFillColor(245, 252, 248);
        doc.rect(20, y, 170, 24, "F");
        doc.setDrawColor(200, 235, 215);
        doc.rect(20, y, 170, 24);
        
        doc.setFont("Nunito", "bold");
        doc.setFontSize(9);
        doc.setTextColor(0, 150, 100);
        doc.text(`Soal ${idx + 1}:`, 25, y + 7);
        
        doc.setFont("Nunito", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(50, 50, 50);
        doc.text(q.cerita || q.soal, 25, y + 14, { maxWidth: 120 });
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(12);
        doc.text("Jawaban: _____", 145, y + 13);
        
        y += 28;
      });
    }
  },
  
  addFiqihPages(doc, bulanNomor) {
    doc.addPage();
    this.drawPageHeader(doc, `Bulan ${bulanNomor}`, "MODUL FIQIH & ADAB ISLAMI");
    
    let y = 50;
    
    if (bulanNomor === 1) {
      // Syahadat & Niat Ibadah
      doc.setFont("Poppins", "bold");
      doc.setFontSize(14);
      doc.setTextColor(26, 35, 126);
      doc.text("A. Pembelajaran Syahadat & Akidah", 20, y);
      y += 12;
      
      const syahadat = window.FIQIH_DATA.rukunIslam[0];
      doc.setFillColor(248, 250, 252);
      doc.rect(20, y, 170, 65, "F");
      doc.setDrawColor(26, 35, 126);
      doc.rect(20, y, 170, 65);
      
      doc.setFont("Poppins", "bold");
      doc.setFontSize(12);
      doc.text(syahadat.nama, 28, y + 12);
      
      doc.setFont("Poppins", "bold");
      doc.setFontSize(16);
      doc.text(syahadat.teks, 180, y + 28, { align: "right" });
      
      doc.setFont("Nunito", "italic");
      doc.setFontSize(9);
      doc.text("Lafal Latin: Asyhadu an laa ilaaha illallaah wa asyhadu anna muhammadar rasuulullaah", 28, y + 42, { maxWidth: 155 });
      
      doc.setFont("Nunito", "normal");
      doc.text(`Arti: ${syahadat.penjelasan}`, 28, y + 54, { maxWidth: 155 });
      
    } else if (bulanNomor === 2 || bulanNomor === 3) {
      // Wudhu Steps
      doc.setFont("Poppins", "bold");
      doc.setFontSize(14);
      doc.setTextColor(26, 35, 126);
      doc.text(`A. Panduan Praktik Wudhu (Bagian ${bulanNomor - 1})`, 20, y);
      y += 12;
      
      const startIdx = (bulanNomor - 2) * 4;
      const wudhuList = window.FIQIH_DATA.wudhu.slice(startIdx, startIdx + 4);
      wudhuList.forEach((w, idx) => {
        const order = startIdx + idx + 1;
        doc.setFillColor(243, 249, 253);
        doc.rect(20, y, 170, 22, "F");
        doc.setDrawColor(200, 220, 240);
        doc.rect(20, y, 170, 22);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(10);
        doc.setTextColor(26, 35, 126);
        doc.text(`${order}. ${w.nama} ${w.emoji}`, 25, y + 7);
        
        doc.setFont("Nunito", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(80, 80, 80);
        doc.text(w.arti, 25, y + 13, { maxWidth: 160 });
        
        y += 28;
      });
    } else if (bulanNomor === 4 || bulanNomor === 5) {
      // Sholat Steps
      doc.setFont("Poppins", "bold");
      doc.setFontSize(14);
      doc.setTextColor(26, 35, 126);
      doc.text(`A. Panduan Praktik Sholat (Bagian ${bulanNomor - 3})`, 20, y);
      y += 12;
      
      const startIdx = (bulanNomor - 4) * 6;
      const sholatList = window.FIQIH_DATA.sholat.slice(startIdx, startIdx + 6);
      sholatList.forEach((s, idx) => {
        const order = startIdx + idx + 1;
        doc.setFillColor(254, 248, 248);
        doc.rect(20, y, 170, 18, "F");
        doc.setDrawColor(245, 200, 200);
        doc.rect(20, y, 170, 18);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(10);
        doc.setTextColor(194, 24, 91);
        doc.text(`Gerakan ${order}: ${s.nama} ${s.emoji}`, 25, y + 10);
        
        y += 23;
      });
    } else if (bulanNomor >= 6 && bulanNomor <= 10) {
      // Doa Harian
      doc.setFont("Poppins", "bold");
      doc.setFontSize(14);
      doc.setTextColor(26, 35, 126);
      doc.text("A. Hafalan Doa Harian Bulan Ini", 20, y);
      y += 12;
      
      const startDoa = (bulanNomor - 6) * 4;
      const slicedDoa = window.FIQIH_DATA.doaHarian.slice(startDoa, startDoa + 4);
      slicedDoa.forEach(d => {
        doc.setFillColor(250, 250, 250);
        doc.rect(20, y, 170, 26, "F");
        doc.setDrawColor(220, 220, 220);
        doc.rect(20, y, 170, 26);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(10);
        doc.setTextColor(26, 35, 126);
        doc.text(`${d.nama} ${d.emoji}`, 25, y + 7);
        
        doc.setFont("Nunito", "italic");
        doc.setFontSize(7.5);
        doc.setTextColor(80, 80, 80);
        doc.text(d.latin, 25, y + 14, { maxWidth: 160 });
        doc.setFont("Nunito", "normal");
        doc.text(d.arti, 25, y + 20, { maxWidth: 160 });
        
        y += 31;
      });
    } else if (bulanNomor === 11) {
      // Adab Islami
      doc.setFont("Poppins", "bold");
      doc.setFontSize(14);
      doc.setTextColor(26, 35, 126);
      doc.text("A. Pembelajaran Adab & Akhlak Islami", 20, y);
      y += 12;
      
      const slicedAdab = window.FIQIH_DATA.adab.slice(0, 3);
      slicedAdab.forEach(a => {
        doc.setFillColor(253, 253, 243);
        doc.rect(20, y, 170, 38, "F");
        doc.setDrawColor(230, 230, 180);
        doc.rect(20, y, 170, 38);
        
        doc.setFont("Poppins", "bold");
        doc.setFontSize(10);
        doc.setTextColor(156, 39, 176);
        doc.text(`${a.nama} ${a.emoji}`, 25, y + 7);
        
        doc.setFont("Nunito", "normal");
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        doc.text(`Poin Adab: ${a.pointAdab.slice(0, 3).join(', ')}`, 25, y + 14, { maxWidth: 160 });
        
        y += 44;
      });
    } else {
      // Murojaah total
      doc.setFont("Poppins", "bold");
      doc.setFontSize(14);
      doc.setTextColor(26, 35, 126);
      doc.text("A. Jurnal Murojaah Akbar (Evaluasi Akhir Tahun)", 20, y);
      y += 12;
      
      doc.setFillColor(243, 249, 253);
      doc.rect(20, y, 170, 70, "F");
      doc.setDrawColor(200, 220, 240);
      doc.rect(20, y, 170, 70);
      
      doc.setFont("Poppins", "bold");
      doc.setFontSize(11);
      doc.setTextColor(26, 35, 126);
      doc.text("Tabel Ceklis Murojaah:", 25, y + 12);
      
      doc.setFont("Nunito", "normal");
      doc.setFontSize(9);
      doc.text("[  ] Kelancaran Mengaji Iqra 2 (Huruf Sambung & Mad)", 25, y + 25);
      doc.text("[  ] Kemandirian Berwudhu (Langkah 1-8 Lengkap)", 25, y + 37);
      doc.text("[  ] Ketertiban Gerakan & Lafal Bacaan Sholat", 25, y + 49);
      doc.text("[  ] Hafalan 20 Doa Pendek Harian Anak", 25, y + 61);
    }
  },
  
  addTematikPages(doc, bulanNomor) {
    doc.addPage();
    this.drawPageHeader(doc, `Bulan ${bulanNomor}`, "LEMBAR KREASI & MEWARNAI TEMATIK");
    
    const bulan = window.KURIKULUM_DATA.bulan[bulanNomor - 1];
    
    // Draw big drawing box with decorative border
    doc.setDrawColor(255, 107, 53);
    doc.setLineWidth(1);
    doc.rect(20, 50, 170, 180);
    
    doc.setFont("Poppins", "bold");
    doc.setFontSize(12);
    doc.setTextColor(255, 107, 53);
    doc.text(`TEMA: ${bulan.tema.toUpperCase()}`, 105, 60, { align: "center" });
    
    doc.setFont("Nunito", "normal");
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text(`Adik-adik, mari gambarkan atau warnai gambar sesuai tema "${bulan.tema}" di kotak ini!`, 105, 140, { align: "center", maxWidth: 150 });
  },
  
  addRaportPage(doc, bulanNomor) {
    doc.addPage();
    this.drawPageHeader(doc, `Bulan ${bulanNomor}`, "LEMBAR PENILAIAN & RAPORT BULANAN");
    
    let y = 60;
    doc.setFont("Poppins", "bold");
    doc.setFontSize(14);
    doc.setTextColor(26, 35, 126);
    doc.text("Tabel Rubrik Capaian Pembelajaran", 20, y);
    
    // Draw clean table
    y += 12;
    doc.setFillColor(230, 245, 255);
    doc.rect(20, y, 170, 10, "F");
    doc.setDrawColor(150, 150, 150);
    doc.rect(20, y, 170, 10);
    
    doc.setFont("Poppins", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Pilar Aspek Penilaian", 25, y + 7);
    doc.text("Nilai (A/B/C)", 140, y + 7);
    
    const pilars = ["Pilar 1: Tahsin & Qur'an", "Pilar 2: Calistung & Kognitif", "Pilar 3: Fiqih & Ibadah Praktis", "Pilar 4: Akhlak & Karakter"];
    
    y += 10;
    doc.setFont("Nunito", "normal");
    pilars.forEach(p => {
      doc.rect(20, y, 170, 14);
      doc.text(p, 25, y + 9);
      doc.rect(138, y + 3, 20, 8); // box for grading
      y += 14;
    });
    
    y += 20;
    doc.setFont("Poppins", "bold");
    doc.text("Tanda Tangan Guru Pengajar", 125, y);
    doc.line(125, y + 25, 185, y + 25);
  },
  
  drawPageHeader(doc, leftText, centerText) {
    // Header border top
    doc.setDrawColor(26, 35, 126);
    doc.setLineWidth(0.8);
    doc.line(15, 25, 195, 25);
    
    doc.setFont("Poppins", "bold");
    doc.setFontSize(10);
    doc.setTextColor(26, 35, 126);
    doc.text(leftText, 15, 20);
    doc.text(centerText, 105, 20, { align: "center" });
    
    // Page footer line & mandatory copyright warning
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(15, 280, 195, 280);
    doc.setFont("Nunito", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(180, 0, 0);
    doc.text("dilarang mengcopy, memperbanyak dan menggunakan dokumen ini tanpa seizin dari TPQ Plus Bintang Rabbani.", 105, 286, { align: "center" });
  },
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};
