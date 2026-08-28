// ==========================================
// DATA HIJAIYAH & IQRA - TPQ Plus Bintang Rabbani
// ==========================================

const HIJAIYAH_DATA = {
  huruf: [
    { arab: 'ا', nama: 'Alif', bunyi: 'a', emoji: '🦁', contohKata: 'أَسَد', artiKata: 'Singa', warna: '#FF6B35', sukukata: ['اَ', 'اِ', 'اُ'] },
    { arab: 'ب', nama: 'Ba', bunyi: 'ba', emoji: '🦆', contohKata: 'بَطَّة', artiKata: 'Bebek', warna: '#FFD600', sukukata: ['بَ', 'بِ', 'بُ'] },
    { arab: 'ت', nama: 'Ta', bunyi: 'ta', emoji: '🍎', contohKata: 'تُفَّاح', artiKata: 'Apel', warna: '#00C896', sukukata: ['تَ', 'تِ', 'تُ'] },
    { arab: 'ث', nama: 'Tsa', bunyi: 'tsa', emoji: '🦊', contohKata: 'ثَعْلَب', artiKata: 'Rubah', warna: '#29B6F6', sukukata: ['ثَ', 'ثِ', 'ثُ'] },
    { arab: 'ج', nama: 'Jim', bunyi: 'ja', emoji: '🐪', contohKata: 'جَمَل', artiKata: 'Unta', warna: '#9C27B0', sukukata: ['جَ', 'جِ', 'جُ'] },
    { arab: 'ح', nama: 'Ha', bunyi: 'ha', emoji: '🐴', contohKata: 'حِصَان', artiKata: 'Kuda', warna: '#FF4081', sukukata: ['حَ', 'حِ', 'حُ'] },
    { arab: 'خ', nama: 'Kha', bunyi: 'kha', emoji: '🐑', contohKata: 'خَرُوف', artiKata: 'Domba', warna: '#00BCD4', sukukata: ['خَ', 'خِ', 'خُ'] },
    { arab: 'د', nama: 'Dal', bunyi: 'da', emoji: '🐔', contohKata: 'دَجَاج', artiKata: 'Ayam', warna: '#FF6B35', sukukata: ['دَ', 'دِ', 'دُ'] },
    { arab: 'ذ', nama: 'Dzal', bunyi: 'dza', emoji: '🐺', contohKata: 'ذِئْب', artiKata: 'Serigala', warna: '#FFD600', sukukata: ['ذَ', 'ذِ', 'ذُ'] },
    { arab: 'ر', nama: 'Ra', bunyi: 'ra', emoji: '🍎', contohKata: 'رُمَّان', artiKata: 'Delima', warna: '#00C896', sukukata: ['رَ', 'رِ', 'رُ'] },
    { arab: 'ز', nama: 'Zai', bunyi: 'za', emoji: '🫒', contohKata: 'زَيْتُون', artiKata: 'Zaitun', warna: '#29B6F6', sukukata: ['زَ', 'زِ', 'زُ'] },
    { arab: 'س', nama: 'Sin', bunyi: 'sa', emoji: '🐟', contohKata: 'سَمَكَة', artiKata: 'Ikan', warna: '#9C27B0', sukukata: ['سَ', 'سِ', 'سُ'] },
    { arab: 'ش', nama: 'Syin', bunyi: 'sya', emoji: '🌳', contohKata: 'شَجَرَة', artiKata: 'Pohon', warna: '#FF4081', sukukata: ['شَ', 'شِ', 'شُ'] },
    { arab: 'ص', nama: 'Shod', bunyi: 'sho', emoji: '🦅', contohKata: 'صَقْر', artiKata: 'Elang', warna: '#00BCD4', sukukata: ['صَ', 'صِ', 'صُ'] },
    { arab: 'ض', nama: 'Dhod', bunyi: 'dho', emoji: '🦎', contohKata: 'ضَبّ', artiKata: 'Biawak', warna: '#FF6B35', sukukata: ['ضَ', 'ضِ', 'ضُ'] },
    { arab: 'ط', nama: 'Tha', bunyi: 'tho', emoji: '🦚', contohKata: 'طَاوُوس', artiKata: 'Merak', warna: '#FFD600', sukukata: ['طَ', 'طِ', 'طُ'] },
    { arab: 'ظ', nama: 'Dzha', bunyi: 'dzho', emoji: '🦌', contohKata: 'ظَبْي', artiKata: 'Rusa', warna: '#00C896', sukukata: ['ظَ', 'ظِ', 'ظُ'] },
    { arab: 'ع', nama: "'Ain", bunyi: "a'", emoji: '🍇', contohKata: 'عِنَب', artiKata: 'Anggur', warna: '#29B6F6', sukukata: ['عَ', 'عِ', 'عُ'] },
    { arab: 'غ', nama: 'Ghain', bunyi: 'gha', emoji: '🦌', contohKata: 'غَزَال', artiKata: 'Kijang', warna: '#9C27B0', sukukata: ['غَ', 'غِ', 'غُ'] },
    { arab: 'ف', nama: 'Fa', bunyi: 'fa', emoji: '🐘', contohKata: 'فِيل', artiKata: 'Gajah', warna: '#FF4081', sukukata: ['فَ', 'فِ', 'فُ'] },
    { arab: 'ق', nama: 'Qaf', bunyi: 'qa', emoji: '🐒', contohKata: 'قِرْد', artiKata: 'Monyet', warna: '#00BCD4', sukukata: ['قَ', 'قِ', 'قُ'] },
    { arab: 'ك', nama: 'Kaf', bunyi: 'ka', emoji: '📚', contohKata: 'كِتَاب', artiKata: 'Buku', warna: '#FF6B35', sukukata: ['كَ', 'كِ', 'كُ'] },
    { arab: 'ل', nama: 'Lam', bunyi: 'la', emoji: '🍋', contohKata: 'لَيْمُون', artiKata: 'Lemon', warna: '#FFD600', sukukata: ['لَ', 'لِ', 'لُ'] },
    { arab: 'م', nama: 'Mim', bunyi: 'ma', emoji: '🍌', contohKata: 'مَوْز', artiKata: 'Pisang', warna: '#00C896', sukukata: ['مَ', 'مِ', 'مُ'] },
    { arab: 'ن', nama: 'Nun', bunyi: 'na', emoji: '🌴', contohKata: 'نَخْل', artiKata: 'Kurma', warna: '#29B6F6', sukukata: ['نَ', 'نِ', 'نُ'] },
    { arab: 'و', nama: 'Wau', bunyi: 'wa', emoji: '🌹', contohKata: 'وَرْد', artiKata: 'Bunga Ros', warna: '#9C27B0', sukukata: ['وَ', 'وِ', 'وُ'] },
    { arab: 'ه', nama: 'Ha', bunyi: 'ha', emoji: '🐱', contohKata: 'هِرَّة', artiKata: 'Kucing', warna: '#FF4081', sukukata: ['هَ', 'هِ', 'هُ'] },
    { arab: 'ء', nama: 'Hamzah', bunyi: "'", emoji: '✨', contohKata: 'أَمَل', artiKata: 'Harapan', warna: '#00BCD4', sukukata: ['أَ', 'إِ', 'أُ'] },
    { arab: 'ي', nama: 'Ya', bunyi: 'ya', emoji: '✋', contohKata: 'يَدٌ', artiKata: 'Tangan', warna: '#FF6B35', sukukata: ['يَ', 'يِ', 'يُ'] }
  ],
  harakat: [
    { simbol: 'َ', nama: 'Fathah', bunyi: 'a', contoh: 'بَ', baca: 'ba', warna: '#FF6B35' },
    { simbol: 'ِ', nama: 'Kasrah', bunyi: 'i', contoh: 'بِ', baca: 'bi', warna: '#29B6F6' },
    { simbol: 'ُ', nama: 'Dhammah', bunyi: 'u', contoh: 'بُ', baca: 'bu', warna: '#00C896' },
    { simbol: 'ً', nama: 'Fathatain', bunyi: 'an', contoh: 'بً', baca: 'ban', warna: '#FFD600' },
    { simbol: 'ٍ', nama: 'Kasratain', bunyi: 'in', contoh: 'بٍ', baca: 'bin', warna: '#9C27B0' },
    { simbol: 'ٌ', nama: 'Dhammatain', bunyi: 'un', contoh: 'بٌ', baca: 'bun', warna: '#FF4081' },
    { simbol: 'ْ', nama: 'Sukun', bunyi: 'mati', contoh: 'بْ', baca: 'b', warna: '#00BCD4' },
    { simbol: 'ّ', nama: 'Tasydid', bunyi: 'dobel', contoh: 'بّ', baca: 'bb', warna: '#FF6B35' }
  ],
  suratPendek: [
    {
      nama: "Rukun Islam Ada 5",
      arab: "☝️",
      arti: "Lagu Edukasi Rukun Islam Anak",
      jumlahAyat: 4,
      bulanHafal: 1,
      audioUrl: "https://archive.org/download/rukun-islam-ada-5-lagu-anak-islami/Rukun Islam Ada 5 - Lagu Anak Islami.mp3",
      teks: [
        { lirik: "Katakan rukun Islam yang pertama (Syahadat!)\nKatakan rukun Islam yang kedua (Sholat!)", keterangan: "Bait 1" },
        { lirik: "Ketiganya bayar zakat, keempatnya berpuasa\nKelima pergi haji naik pesawat (Wuss!)", keterangan: "Bait 2" },
        { lirik: "Siapa belum sholat? (Dor!)\nSiapa belum zakat?", keterangan: "Bait 3" },
        { lirik: "Kan disayang Allah, di akhirat mendapat upah\nKan disayang Allah, di akhirat mendapat upah", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Bismillah - Alhamdulillah",
      arab: "📝",
      arti: "Lagu Pembuka & Syukur Aktivitas",
      jumlahAyat: 4,
      bulanHafal: 2,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Bismillah - Alhamdulillah.mp3",
      teks: [
        { lirik: "Bila ku mulai sesuatu kerja\nKuucapkan Bismillah", keterangan: "Bait 1" },
        { lirik: "Begitulah Nabi ajarkan kita\nMengingat nama Allah", keterangan: "Bait 2" },
        { lirik: "Bila ku selesai sesuatu kerja\nKuucapkan Alhamdulillah", keterangan: "Bait 3" },
        { lirik: "Sebagai tanda bersyukur kita\nAtas nikmat Allah yang Esa", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Alif Ba Ta",
      arab: "📖",
      arti: "Lagu Pengenalan Huruf Hijaiyah",
      jumlahAyat: 4,
      bulanHafal: 3,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Aliff Ba Ta - NurKasih [sholawat.my.id].mp3",
      teks: [
        { lirik: "Alif ba ta tsa jim ha kho\nDal dzal ro za sin syin shod", keterangan: "Bait 1" },
        { lirik: "Dhod tho dho 'ain ghoin fa qof\nKaf lam mim nun wawu ha lamalif hamzah ya", keterangan: "Bait 2" },
        { lirik: "Mari belajar huruf hijaiyah\nSupaya kita pandai membaca Quran", keterangan: "Bait 3" },
        { lirik: "Huruf mulia wahyu dari Allah\nSangat berguna bagi umat Islam", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "25 Nama Nabi & Rasul",
      arab: "🕌",
      arti: "Lagu Mengenal Para Utusan Allah",
      jumlahAyat: 4,
      bulanHafal: 4,
      audioUrl: "https://archive.org/download/lagu-anak-islami-25-nabi-annisa-cover/Lagu Anak Islami  25 Nabi Annisa Cover.mp3",
      teks: [
        { lirik: "Adam, Idris, Nuh, Hud, Sholeh\nIbrahim, Luth, Ismail, Ishaq, Ya'qub", keterangan: "Bait 1" },
        { lirik: "Yusuf, Ayyub, Syu'aib, Harun, Musa\nDaud, Sulaiman, Ilyas, Ilyasa'", keterangan: "Bait 2" },
        { lirik: "Yunus, Zakaria, Yahya, Isa\nDan yang terakhir Muhammad Al-Musthafa", keterangan: "Bait 3" },
        { lirik: "Itulah nama dua puluh lima nabi\nUtusan Allah yang wajib kita ketahui", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Ayo Sholat",
      arab: "🛐",
      arti: "Lagu Ajakan Mendirikan Sholat",
      jumlahAyat: 4,
      bulanHafal: 5,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Ayo Shalat.mp3",
      teks: [
        { lirik: "Sayang sayang adikku sayang\nMari kita sholat bersama", keterangan: "Bait 1" },
        { lirik: "Sholat subuh, dzuhur, ashar\nMaghrib dan isya jangan dilupa", keterangan: "Bait 2" },
        { lirik: "Barangsiapa mendirikan sholat\nBerarti menegakkan agamanya", keterangan: "Bait 3" },
        { lirik: "Barangsiapa meninggalkan sholat\nBerarti meruntuhkan agamanya", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Arti Puasa",
      arab: "🌙",
      arti: "Lagu Belajar Puasa di Bulan Ramadhan",
      jumlahAyat: 4,
      bulanHafal: 6,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Arti Puasa - Tasya [sholawat.my.id].mp3",
      teks: [
        { lirik: "Puasa... puasa... artinya menahan diri\nDari makan, dari minum, dari yang membatalkan", keterangan: "Bait 1" },
        { lirik: "Mulai terbit fajar shadiq hingga terbenam matahari\nDengan niat yang ikhlas karena Allah Ta'ala", keterangan: "Bait 2" },
        { lirik: "Menahan diri dari amarah, menahan diri dari dusta\nAgar puasa kita bernilai pahala", keterangan: "Bait 3" },
        { lirik: "Ramadhan bulan berkah, bulan penuh ampunan\nMari kita puasa dengan riang gembira", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Sepohon Kayu",
      arab: "🌳",
      arti: "Lagu Pentingnya Amal Sholat",
      jumlahAyat: 4,
      bulanHafal: 7,
      audioUrl: "https://archive.org/download/lagu-anak-muslim-1_201708/Religi Anak - Sepohon Kayu - Voc. Meilany.mp3",
      teks: [
        { lirik: "Sepohon kayu daunnya rimbun\nLebat bunganya serta buahnya", keterangan: "Bait 1" },
        { lirik: "Walaupun hidup seribu tahun\nKalau tak sholat apa gunanya", keterangan: "Bait 2" },
        { lirik: "Walaupun hidup seribu tahun\nKalau tak sholat apa gunanya", keterangan: "Bait 3" },
        { lirik: "Kami sholat fardhu dirikan\nZakat dan puasa kami jalankan", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Baju Baru Alhamdulillah",
      arab: "👕",
      arti: "Lagu Kesederhanaan & Syukur Hari Raya",
      jumlahAyat: 4,
      bulanHafal: 8,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Baju Baru Alhamdulilah.mp3",
      teks: [
        { lirik: "Baju baru alhamdulillah\nTuk dipakai di hari raya", keterangan: "Bait 1" },
        { lirik: "Tak punya pun tak apa-apa\nMasih ada baju yang lama", keterangan: "Bait 2" },
        { lirik: "Sepatu baru alhamdulillah\nTuk dipakai di hari raya", keterangan: "Bait 3" },
        { lirik: "Tak punya pun tak apa-apa\nMasih ada sepatu yang lama", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Sayang Ayah Ibu",
      arab: "👨‍👩‍👧",
      arti: "Lagu Kasih Sayang Kepada Orang Tua",
      jumlahAyat: 4,
      bulanHafal: 9,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Ayah Ibu.mp3",
      teks: [
        { lirik: "Satu-satu aku sayang Allah\nDua-dua sayang Rasulullah", keterangan: "Bait 1" },
        { lirik: "Tiga-tiga sayang Ibu Bapak\nSatu dua tiga sayang semuanya", keterangan: "Bait 2" },
        { lirik: "Sayangilah ayah ibumu selalu\nYang telah merawatmu sejak kecil", keterangan: "Bait 3" },
        { lirik: "Doakanlah mereka setiap waktu\nAgar Allah limpahkan rahmat-Nya selalu", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Allah Yang Esa",
      arab: "✨",
      arti: "Lagu Keimanan & Tauhid Anak",
      jumlahAyat: 4,
      bulanHafal: 10,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Allah Yang Esa - Sakha [sholawat.my.id].mp3",
      teks: [
        { lirik: "Hanya kepada Allah kita menyembah\nHanya kepada Allah kita meminta", keterangan: "Bait 1" },
        { lirik: "Tiada Tuhan selain Dia Yang Esa\nPencipta seluruh langit dan bumi", keterangan: "Bait 2" },
        { lirik: "Allah Maha Pengasih, Allah Maha Penyayang\nTak pernah tidur dan tak pernah lelah", keterangan: "Bait 3" },
        { lirik: "Mari puji nama-Nya setiap waktu\nTanda kita hamba yang bersyukur selalu", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Asmaul Husna",
      arab: "📿",
      arti: "Lagu Mengenal Nama-nama Baik Allah",
      jumlahAyat: 4,
      bulanHafal: 11,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Asmaul Husna.mp3",
      teks: [
        { lirik: "Ya Allah, ya Rahman, ya Rahim, ya Malik\nYa Quddus, ya Salam, ya Mu'min, ya Muhaimin", keterangan: "Bait 1" },
        { lirik: "Ya 'Aziz, ya Jabbar, ya Mutakabbir, ya Kholiq\nYa Bari', ya Mushawwir, ya Ghoffar, ya Qohhar", keterangan: "Bait 2" },
        { lirik: "Mari sebut nama-nama baik Allah\nSebagai dzikir penyejuk hati kita", keterangan: "Bait 3" },
        { lirik: "Barangsiapa menghafal Asmaul Husna\nNiscaya surga balasan baginya", keterangan: "Bait 4" }
      ]
    },
    {
      nama: "Istighfar (Astaghfirullah)",
      arab: "😢",
      arti: "Lagu Memohon Ampunan Allah",
      jumlahAyat: 4,
      bulanHafal: 12,
      audioUrl: "https://archive.org/download/LaguAnakIslam/Astaghfirullah.mp3",
      teks: [
        { lirik: "Astaghfirullahal 'adzim, minal khotoya\nMemohon ampunan Allah Yang Maha Agung", keterangan: "Bait 1" },
        { lirik: "Atas segala kesalahan dan dosa\nYang sengaja maupun yang tidak sengaja", keterangan: "Bait 2" },
        { lirik: "Kembalilah ke jalan yang diredhai-Nya\nSebelum ajal menjemput kita tiba", keterangan: "Bait 3" },
        { lirik: "Pintu taubat Allah senantiasa terbuka\nBagi hamba-Nya yang sungguh-sungguh bertaubat", keterangan: "Bait 4" }
      ]
    }
  ],
  iqra: {
    iqra1: {
      satuHuruf: ['اَ', 'بَ', 'تَ', 'ثَ', 'جَ', 'حَ', 'خَ', 'دَ', 'ذَ', 'رَ', 'زَ', 'سَ', 'شَ', 'صَ', 'ضَ', 'طَ', 'ظَ', 'عَ', 'غَ', 'فَ', 'قَ', 'كَ', 'لَ', 'مَ', 'نَ', 'وَ', 'هَ', 'ءَ', 'يَ'],
      pages: [
      {
            "page": 1,
            "title": "Pengenalan اَ dan بَ",
            "intro": "Membaca pendek dan cepat, tanpa mengeja!",
            "rows": [
                  [
                        "اَ",
                        "بَ"
                  ],
                  [
                        "اَ",
                        "اَ",
                        "بَ"
                  ],
                  [
                        "بَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ا",
                  "ب"
            ]
      },
      {
            "page": 2,
            "title": "Pengenalan Huruf تَ",
            "intro": "Membaca pendek-cepat, kenalkan huruf Ta.",
            "rows": [
                  [
                        "بَ",
                        "تَ"
                  ],
                  [
                        "اَ",
                        "بَ",
                        "تَ"
                  ],
                  [
                        "تَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ت"
            ]
      },
      {
            "page": 3,
            "title": "Pengenalan Huruf ثَ",
            "intro": "Bunyi tipis di ujung lidah.",
            "rows": [
                  [
                        "تَ",
                        "ثَ"
                  ],
                  [
                        "اَ",
                        "بَ",
                        "تَ",
                        "ثَ"
                  ],
                  [
                        "ثَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ث"
            ]
      },
      {
            "page": 4,
            "title": "Pengenalan Huruf جَ",
            "intro": "Bunyi bersih di tengah lidah.",
            "rows": [
                  [
                        "تَ",
                        "ثَ",
                        "جَ"
                  ],
                  [
                        "جَ",
                        "اَ",
                        "بَ"
                  ],
                  [
                        "ثَ",
                        "جَ",
                        "تَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ج"
            ]
      },
      {
            "page": 5,
            "title": "Pengenalan Huruf حَ",
            "intro": "Bunyi bersih keluar dari tenggorokan tengah.",
            "rows": [
                  [
                        "جَ",
                        "حَ"
                  ],
                  [
                        "جَ",
                        "اَ",
                        "حَ"
                  ],
                  [
                        "حَ",
                        "تَ",
                        "ثَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ح"
            ]
      },
      {
            "page": 6,
            "title": "Pengenalan Huruf خَ",
            "intro": "Bunyi serak dari tenggorokan atas.",
            "rows": [
                  [
                        "حَ",
                        "خَ"
                  ],
                  [
                        "جَ",
                        "حَ",
                        "خَ"
                  ],
                  [
                        "خَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "خ"
            ]
      },
      {
            "page": 7,
            "title": "Pengenalan Huruf دَ",
            "intro": "Bunyi di ujung lidah menyentuh pangkal gigi seri atas.",
            "rows": [
                  [
                        "خَ",
                        "دَ"
                  ],
                  [
                        "جَ",
                        "حَ",
                        "دَ"
                  ],
                  [
                        "دَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "د"
            ]
      },
      {
            "page": 8,
            "title": "Pengenalan Huruf ذَ",
            "intro": "Bunyi tipis ujung lidah keluar sedikit menyentuh gigi seri atas.",
            "rows": [
                  [
                        "دَ",
                        "ذَ"
                  ],
                  [
                        "خَ",
                        "دَ",
                        "ذَ"
                  ],
                  [
                        "ذَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ذ"
            ]
      },
      {
            "page": 9,
            "title": "Pengenalan Huruf رَ",
            "intro": "Bunyi getaran halus ujung lidah.",
            "rows": [
                  [
                        "ذَ",
                        "رَ"
                  ],
                  [
                        "دَ",
                        "ذَ",
                        "رَ"
                  ],
                  [
                        "رَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ر"
            ]
      },
      {
            "page": 10,
            "title": "Pengenalan Huruf زَ",
            "intro": "Bunyi desis tajam seperti lebah.",
            "rows": [
                  [
                        "رَ",
                        "زَ"
                  ],
                  [
                        "ذَ",
                        "رَ",
                        "زَ"
                  ],
                  [
                        "زَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ز"
            ]
      },
      {
            "page": 11,
            "title": "Pengenalan Huruf سَ",
            "intro": "Bunyi desis halus ujung lidah di gigi seri bawah.",
            "rows": [
                  [
                        "زَ",
                        "سَ"
                  ],
                  [
                        "رَ",
                        "زَ",
                        "سَ"
                  ],
                  [
                        "سَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "س"
            ]
      },
      {
            "page": 12,
            "title": "Pengenalan Huruf شَ",
            "intro": "Bunyi menyebar luas di dalam rongga mulut.",
            "rows": [
                  [
                        "سَ",
                        "شَ"
                  ],
                  [
                        "زَ",
                        "سَ",
                        "شَ"
                  ],
                  [
                        "شَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ش"
            ]
      },
      {
            "page": 13,
            "title": "Pengenalan Huruf صَ",
            "intro": "Bunyi tebal tertekan di ujung lidah.",
            "rows": [
                  [
                        "شَ",
                        "صَ"
                  ],
                  [
                        "سَ",
                        "شَ",
                        "صَ"
                  ],
                  [
                        "صَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ص"
            ]
      },
      {
            "page": 14,
            "title": "Pengenalan Huruf ضَ",
            "intro": "Bunyi tebal dari tepi lidah menyentuh geraham atas.",
            "rows": [
                  [
                        "صَ",
                        "ضَ"
                  ],
                  [
                        "شَ",
                        "صَ",
                        "ضَ"
                  ],
                  [
                        "ضَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ض"
            ]
      },
      {
            "page": 15,
            "title": "Pengenalan Huruf طَ",
            "intro": "Bunyi tebal memantul di ujung lidah.",
            "rows": [
                  [
                        "ضَ",
                        "طَ"
                  ],
                  [
                        "صَ",
                        "ضَ",
                        "طَ"
                  ],
                  [
                        "طَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ط"
            ]
      },
      {
            "page": 16,
            "title": "Pengenalan Huruf ظَ",
            "intro": "Bunyi tebal ujung lidah menyentuh ujung gigi seri atas.",
            "rows": [
                  [
                        "طَ",
                        "ظَ"
                  ],
                  [
                        "ضَ",
                        "طَ",
                        "ظَ"
                  ],
                  [
                        "ظَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ظ"
            ]
      },
      {
            "page": 17,
            "title": "Pengenalan Huruf عَ",
            "intro": "Bunyi serak dari tengah tenggorokan.",
            "rows": [
                  [
                        "ظَ",
                        "عَ"
                  ],
                  [
                        "طَ",
                        "ظَ",
                        "عَ"
                  ],
                  [
                        "عَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ع"
            ]
      },
      {
            "page": 18,
            "title": "Pengenalan Huruf غَ",
            "intro": "Bunyi dengung dari tenggorokan atas.",
            "rows": [
                  [
                        "عَ",
                        "غَ"
                  ],
                  [
                        "ظَ",
                        "عَ",
                        "غَ"
                  ],
                  [
                        "غَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "غ"
            ]
      },
      {
            "page": 19,
            "title": "Pengenalan Huruf فَ",
            "intro": "Bunyi bibir bawah menyentuh ujung gigi seri atas.",
            "rows": [
                  [
                        "غَ",
                        "فَ"
                  ],
                  [
                        "عَ",
                        "غَ",
                        "فَ"
                  ],
                  [
                        "فَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ف"
            ]
      },
      {
            "page": 20,
            "title": "Pengenalan Huruf قَ",
            "intro": "Bunyi dalam dari pangkal lidah menyentuh langit-langit lunak.",
            "rows": [
                  [
                        "فَ",
                        "قَ"
                  ],
                  [
                        "غَ",
                        "فَ",
                        "قَ"
                  ],
                  [
                        "قَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ق"
            ]
      },
      {
            "page": 21,
            "title": "Pengenalan Huruf كَ",
            "intro": "Bunyi tipis di bawah makhraj Qaf.",
            "rows": [
                  [
                        "قَ",
                        "كَ"
                  ],
                  [
                        "فَ",
                        "قَ",
                        "كَ"
                  ],
                  [
                        "كَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ك"
            ]
      },
      {
            "page": 22,
            "title": "Pengenalan Huruf لَ",
            "intro": "Bunyi ujung lidah menyentuh gusi atas.",
            "rows": [
                  [
                        "كَ",
                        "لَ"
                  ],
                  [
                        "قَ",
                        "كَ",
                        "لَ"
                  ],
                  [
                        "لَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ل"
            ]
      },
      {
            "page": 23,
            "title": "Pengenalan Huruf مَ",
            "intro": "Bunyi keluar dari pertemuan kedua bibir.",
            "rows": [
                  [
                        "لَ",
                        "مَ"
                  ],
                  [
                        "كَ",
                        "لَ",
                        "مَ"
                  ],
                  [
                        "مَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "م"
            ]
      },
      {
            "page": 24,
            "title": "Pengenalan Huruf نَ",
            "intro": "Bunyi ujung lidah di bawah makhraj Lam disertai dengung hidung.",
            "rows": [
                  [
                        "مَ",
                        "نَ"
                  ],
                  [
                        "لَ",
                        "مَ",
                        "نَ"
                  ],
                  [
                        "نَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ن"
            ]
      },
      {
            "page": 25,
            "title": "Pengenalan Huruf وَ",
            "intro": "Bunyi keluar dengan membulatkan kedua bibir.",
            "rows": [
                  [
                        "نَ",
                        "وَ"
                  ],
                  [
                        "مَ",
                        "نَ",
                        "وَ"
                  ],
                  [
                        "وَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "و"
            ]
      },
      {
            "page": 26,
            "title": "Pengenalan Huruf هَ",
            "intro": "Bunyi keluar dari pangkal tenggorokan paling dalam.",
            "rows": [
                  [
                        "وَ",
                        "هَ"
                  ],
                  [
                        "نَ",
                        "وَ",
                        "هَ"
                  ],
                  [
                        "هَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ه"
            ]
      },
      {
            "page": 27,
            "title": "Pengenalan Huruf ءَ",
            "intro": "Bunyi hamzah keluar dari pangkal tenggorokan.",
            "rows": [
                  [
                        "هَ",
                        "ءَ"
                  ],
                  [
                        "وَ",
                        "هَ",
                        "ءَ"
                  ],
                  [
                        "ءَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ء"
            ]
      },
      {
            "page": 28,
            "title": "Pengenalan Huruf يَ",
            "intro": "Bunyi dari tengah lidah tanpa tertekan.",
            "rows": [
                  [
                        "ءَ",
                        "يَ"
                  ],
                  [
                        "هَ",
                        "ءَ",
                        "يَ"
                  ],
                  [
                        "يَ",
                        "اَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ي"
            ]
      },
      {
            "page": 29,
            "title": "Latihan Evaluasi Huruf Fathah Bagian 1",
            "intro": "Membaca cepat huruf Fathah dari Alif sampai Dzal.",
            "rows": [
                  [
                        "اَ",
                        "بَ",
                        "تَ",
                        "ثَ",
                        "جَ",
                        "حَ",
                        "خَ",
                        "دَ",
                        "ذَ"
                  ],
                  [
                        "ذَ",
                        "دَ",
                        "خَ",
                        "حَ",
                        "جَ",
                        "ثَ",
                        "تَ",
                        "بَ",
                        "اَ"
                  ],
                  [
                        "اَ",
                        "خَ",
                        "دَ",
                        "جَ",
                        "بَ",
                        "ذَ",
                        "تَ",
                        "حَ",
                        "ثَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ا",
                  "ب",
                  "ت",
                  "ث",
                  "ج",
                  "ح",
                  "خ",
                  "د",
                  "ذ"
            ]
      },
      {
            "page": 30,
            "title": "Latihan Evaluasi Huruf Fathah Bagian 2",
            "intro": "Membaca cepat huruf Fathah dari Ra sampai Dhod.",
            "rows": [
                  [
                        "رَ",
                        "زَ",
                        "سَ",
                        "شَ",
                        "صَ",
                        "ضَ"
                  ],
                  [
                        "ضَ",
                        "صَ",
                        "شَ",
                        "سَ",
                        "زَ",
                        "رَ"
                  ],
                  [
                        "رَ",
                        "شَ",
                        "زَ",
                        "ضَ",
                        "سَ",
                        "صَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ر",
                  "ز",
                  "س",
                  "ش",
                  "ص",
                  "ض"
            ]
      },
      {
            "page": 31,
            "title": "Latihan Evaluasi Huruf Fathah Bagian 3",
            "intro": "Membaca cepat huruf Fathah dari Tho sampai Ya.",
            "rows": [
                  [
                        "طَ",
                        "ظَ",
                        "عَ",
                        "غَ",
                        "فَ",
                        "قَ",
                        "كَ",
                        "لَ",
                        "مَ",
                        "نَ",
                        "وَ",
                        "هَ",
                        "ءَ",
                        "يَ"
                  ],
                  [
                        "يَ",
                        "ءَ",
                        "هَ",
                        "وَ",
                        "نَ",
                        "مَ",
                        "لَ",
                        "كَ",
                        "قَ",
                        "فَ",
                        "غَ",
                        "عَ",
                        "ظَ",
                        "طَ"
                  ],
                  [
                        "طَ",
                        "غَ",
                        "ظَ",
                        "فَ",
                        "عَ",
                        "قَ",
                        "لَ",
                        "هَ",
                        "كَ",
                        "وَ",
                        "مَ",
                        "يَ",
                        "نَ",
                        "ءَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ط",
                  "ظ",
                  "ع",
                  "غ",
                  "ف",
                  "ق",
                  "ك",
                  "ل",
                  "م",
                  "ن",
                  "و",
                  "ه",
                  "ء",
                  "ي"
            ]
      },
      {
            "page": 32,
            "title": "Latihan Kalimat Pendek Fathah",
            "intro": "Membaca gabungan kata bermakna dengan harakat Fathah.",
            "rows": [
                  [
                        "خَ",
                        "لَ",
                        "قَ",
                        "كَ",
                        "تَ",
                        "بَ",
                        "صَ",
                        "دَ",
                        "قَ"
                  ],
                  [
                        "دَ",
                        "رَ",
                        "سَ",
                        "فَ",
                        "تَ",
                        "حَ",
                        "جَ",
                        "عَ",
                        "لَ"
                  ],
                  [
                        "زَ",
                        "كَ",
                        "رَ",
                        "نَ",
                        "صَ",
                        "رَ",
                        "وَ",
                        "هَ",
                        "بَ"
                  ]
            ],
            "lettersIntroduced": [
                  "خ",
                  "ل",
                  "ق",
                  "ك",
                  "ت",
                  "ب",
                  "ص",
                  "د",
                  "ر",
                  "س",
                  "ف",
                  "ح",
                  "ج",
                  "ع",
                  "ز",
                  "ن",
                  "و",
                  "ه"
            ]
      }
]
    },
    iqra2: {
      satuHuruf: ['بَا', 'تَا', 'ثَا', 'جَا', 'حَا', 'خَا', 'دَا', 'ذَا', 'رَا', 'زَا', 'سَا', 'شَا', 'صَا', 'ضَا', 'طَا', 'ظَا', 'عَا', 'غَا', 'فَا', 'قَا', 'كَاء', 'لَا', 'مَا', 'نَا', 'وَا', 'هَا', 'يَا'],
      pages: [
      {
            "page": 1,
            "title": "Pengenalan Huruf Sambung awal بَتَ",
            "intro": "Perhatikan perubahan bentuk huruf saat disambung di awal.",
            "rows": [
                  [
                        "بَ",
                        "تَ",
                        "بَتَ"
                  ],
                  [
                        "تَ",
                        "ثَ",
                        "تَثَ"
                  ],
                  [
                        "بَ",
                        "تَ",
                        "ثَ",
                        "بَتَثَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ب",
                  "ت",
                  "ث"
            ]
      },
      {
            "page": 2,
            "title": "Huruf Sambung dengan Nun (نـ)",
            "intro": "Perubahan bentuk huruf Nun di awal kata.",
            "rows": [
                  [
                        "نَ",
                        "بَ",
                        "تَ",
                        "نَبَتَ"
                  ],
                  [
                        "تَ",
                        "نَ",
                        "بَ",
                        "تَنَبَ"
                  ],
                  [
                        "بَ",
                        "تَ",
                        "نَ",
                        "بَتَنَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ن"
            ]
      },
      {
            "page": 3,
            "title": "Huruf Sambung dengan Ya (يـ)",
            "intro": "Perubahan bentuk huruf Ya di awal kata.",
            "rows": [
                  [
                        "يَ",
                        "بَ",
                        "تَ",
                        "يَبَتَ"
                  ],
                  [
                        "تَ",
                        "يَ",
                        "بَ",
                        "تَيَبَ"
                  ],
                  [
                        "بَ",
                        "تَ",
                        "يَ",
                        "بَتَيَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ي"
            ]
      },
      {
            "page": 4,
            "title": "Huruf Sambung dengan Ra (ر) dan Zai (ز)",
            "intro": "Huruf Ra dan Zai tidak bisa disambung setelahnya.",
            "rows": [
                  [
                        "بَ",
                        "رَ",
                        "بَرَ",
                        "نَ",
                        "رَ",
                        "نَرَ"
                  ],
                  [
                        "تَ",
                        "زَ",
                        "تَزَ",
                        "نَ",
                        "زَ",
                        "نَزَ"
                  ],
                  [
                        "بَ",
                        "رَ",
                        "زَ",
                        "بَرَزَ",
                        "نَ",
                        "زَ",
                        "رَ",
                        "نَزَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ر",
                  "ز"
            ]
      },
      {
            "page": 5,
            "title": "Huruf Sambung dengan Dal (د) dan Dzal (ذ)",
            "intro": "Huruf Dal dan Dzal tidak bisa disambung setelahnya.",
            "rows": [
                  [
                        "بَ",
                        "دَ",
                        "بَدَ",
                        "نَ",
                        "دَ",
                        "نَدَ"
                  ],
                  [
                        "بَ",
                        "ذَ",
                        "بَذَ",
                        "يَ",
                        "ذَ",
                        "يَذَ"
                  ],
                  [
                        "نَ",
                        "ذَ",
                        "رَ",
                        "نَذَرَ",
                        "بَ",
                        "دَ",
                        "رَ",
                        "بَدَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "د",
                  "ذ"
            ]
      },
      {
            "page": 6,
            "title": "Huruf Sambung dengan Jim (ج), Ha (ح), Kha (خ)",
            "intro": "Bentuk awal dan tengah dari Jim, Ha, dan Kha.",
            "rows": [
                  [
                        "بَ",
                        "جَ",
                        "بَجَ",
                        "تَ",
                        "حَ",
                        "تَحَ"
                  ],
                  [
                        "جَ",
                        "حَ",
                        "خَ",
                        "جَحَخَ",
                        "بَ",
                        "جَ",
                        "دَ",
                        "بَجَدَ"
                  ],
                  [
                        "تَ",
                        "حَ",
                        "تَ",
                        "تَحَتَ",
                        "يَ",
                        "خَ",
                        "ذَ",
                        "يَخَذَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ج",
                  "ح",
                  "خ"
            ]
      },
      {
            "page": 7,
            "title": "Huruf Sambung dengan Sin (س) dan Syin (ش)",
            "intro": "Menyambung gigi huruf Sin dan Syin.",
            "rows": [
                  [
                        "بَ",
                        "سَ",
                        "بَسَ",
                        "نَ",
                        "سَ",
                        "نَسَ"
                  ],
                  [
                        "بَ",
                        "شَ",
                        "بَشَ",
                        "يَ",
                        "شَ",
                        "يَشَ"
                  ],
                  [
                        "بَ",
                        "سَ",
                        "رَ",
                        "بَسَرَ",
                        "نَ",
                        "شَ",
                        "رَ",
                        "نَشَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "س",
                  "ش"
            ]
      },
      {
            "page": 8,
            "title": "Huruf Sambung dengan Shod (ص) dan Dhod (ض)",
            "intro": "Menyambung kepala huruf Shod dan Dhod.",
            "rows": [
                  [
                        "بَ",
                        "صَ",
                        "بَصَ",
                        "نَ",
                        "صَ",
                        "نَصَ"
                  ],
                  [
                        "بَ",
                        "ضَ",
                        "بَضَ",
                        "يَ",
                        "ضَ",
                        "يَضَ"
                  ],
                  [
                        "صَ",
                        "بَ",
                        "رَ",
                        "صَبَرَ",
                        "بَ",
                        "ضَ",
                        "رَ",
                        "بَضَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ص",
                  "ض"
            ]
      },
      {
            "page": 9,
            "title": "Huruf Sambung dengan Tha (ط) dan Dzha (ظ)",
            "intro": "Menyambung huruf Tha dan Dzha.",
            "rows": [
                  [
                        "بَ",
                        "طَ",
                        "بَطَ",
                        "نَ",
                        "طَ",
                        "نَطَ"
                  ],
                  [
                        "بَ",
                        "ظَ",
                        "بَظَ",
                        "يَ",
                        "ظَ",
                        "يَظَ"
                  ],
                  [
                        "طَ",
                        "بَ",
                        "قَ",
                        "طَبَقَ",
                        "ظَ",
                        "هَ",
                        "رَ",
                        "ظَهَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ط",
                  "ظ"
            ]
      },
      {
            "page": 10,
            "title": "Huruf Sambung dengan Ain (ع) dan Ghain (غ)",
            "intro": "Perhatikan bentuk tengah dan akhir dari Ain dan Ghain.",
            "rows": [
                  [
                        "بَ",
                        "عَ",
                        "بَعَ",
                        "نَ",
                        "عَ",
                        "نَعَ"
                  ],
                  [
                        "بَ",
                        "غَ",
                        "بَغَ",
                        "يَ",
                        "غَ",
                        "يَغَ"
                  ],
                  [
                        "جَ",
                        "عَ",
                        "لَ",
                        "جَعَلَ",
                        "شَ",
                        "غَ",
                        "لَ",
                        "شَغَلَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ع",
                  "غ"
            ]
      },
      {
            "page": 11,
            "title": "Huruf Sambung dengan Fa (ف) dan Qaf (ق)",
            "intro": "Bentuk kepala huruf Fa (satu titik) dan Qaf (dua titik).",
            "rows": [
                  [
                        "بَ",
                        "فَ",
                        "بَفَ",
                        "نَ",
                        "فَ",
                        "نَفَ"
                  ],
                  [
                        "بَ",
                        "قَ",
                        "بَقَ",
                        "يَ",
                        "قَ",
                        "يَقَ"
                  ],
                  [
                        "فَ",
                        "تَ",
                        "حَ",
                        "فَتَحَ",
                        "خَ",
                        "لَ",
                        "قَ",
                        "خَلَقَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ف",
                  "ق"
            ]
      },
      {
            "page": 12,
            "title": "Huruf Sambung dengan Kaf (ك)",
            "intro": "Perubahan bentuk Kaf di awal dan di tengah.",
            "rows": [
                  [
                        "بَ",
                        "كَ",
                        "بَكَ",
                        "نَ",
                        "كَ",
                        "نَكَ"
                  ],
                  [
                        "كَ",
                        "تَ",
                        "بَ",
                        "كَتَبَ",
                        "كَ",
                        "لَ",
                        "مَ",
                        "كَلَمَ"
                  ],
                  [
                        "بَ",
                        "كَ",
                        "رَ",
                        "بَكَرَ",
                        "نَ",
                        "كَ",
                        "حَ",
                        "نَكَحَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ك"
            ]
      },
      {
            "page": 13,
            "title": "Huruf Sambung dengan Lam (ل)",
            "intro": "Bentuk sambung Lam (tegak lurus dengan kaitan).",
            "rows": [
                  [
                        "بَ",
                        "لَ",
                        "بَلَ",
                        "نَ",
                        "لَ",
                        "نَلَ"
                  ],
                  [
                        "جَ",
                        "لَ",
                        "سَ",
                        "جَلَسَ",
                        "خَ",
                        "لَ",
                        "قَ",
                        "خَلَقَ"
                  ],
                  [
                        "بَ",
                        "لَ",
                        "غَ",
                        "بَلَغَ",
                        "يَ",
                        "لَ",
                        "جَ",
                        "يَلَجَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ل"
            ]
      },
      {
            "page": 14,
            "title": "Huruf Sambung dengan Mim (م)",
            "intro": "Bentuk sambung Mim di awal, tengah, dan akhir.",
            "rows": [
                  [
                        "بَ",
                        "مَ",
                        "بَمَ",
                        "نَ",
                        "مَ",
                        "نَمَ"
                  ],
                  [
                        "جَ",
                        "مَ",
                        "عَ",
                        "جَمَعَ",
                        "حَ",
                        "مَ",
                        "لَ",
                        "حَمَلَ"
                  ],
                  [
                        "بَ",
                        "مَ",
                        "رَ",
                        "بَمَرَ",
                        "نَ",
                        "مَ",
                        "لَ",
                        "نَمَلَ"
                  ]
            ],
            "lettersIntroduced": [
                  "م"
            ]
      },
      {
            "page": 15,
            "title": "Huruf Sambung dengan Wau (و) dan Ha (ه)",
            "intro": "Bentuk sambung Wau dan transisi bentuk huruf Ha (bunga/simpul).",
            "rows": [
                  [
                        "بَ",
                        "وَ",
                        "بَوَ",
                        "بَ",
                        "هَ",
                        "بَهَ"
                  ],
                  [
                        "وَ",
                        "جَ",
                        "دَ",
                        "وَجَدَ",
                        "هَ",
                        "لَ",
                        "كَ",
                        "هَلَكَ"
                  ],
                  [
                        "وَ",
                        "هَ",
                        "بَ",
                        "وَهَبَ",
                        "نَ",
                        "هَ",
                        "رَ",
                        "نَهَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "و",
                  "ه"
            ]
      },
      {
            "page": 16,
            "title": "Fathah Panjang (Mad Alif) 2 Harakat",
            "intro": "Membaca panjang 2 harakat dengan ayunan satu ketukan.",
            "rows": [
                  [
                        "بَا",
                        "تَا",
                        "ثَا"
                  ],
                  [
                        "بَ",
                        "بَا",
                        "تَ",
                        "تَا",
                        "ثَ",
                        "ثَا"
                  ],
                  [
                        "بَا",
                        "تَا",
                        "تَا",
                        "بَا",
                        "ثَا",
                        "تَا"
                  ]
            ],
            "lettersIntroduced": [
                  "ب",
                  "ت",
                  "ث"
            ]
      },
      {
            "page": 17,
            "title": "Mad Alif dengan جَا, حَا, خَا",
            "intro": "Latihan memanjangkan bacaan 2 harakat.",
            "rows": [
                  [
                        "جَا",
                        "حَا",
                        "خَا"
                  ],
                  [
                        "جَ",
                        "جَا",
                        "حَ",
                        "حَا",
                        "خَ",
                        "خَا"
                  ],
                  [
                        "جَا",
                        "حَا",
                        "حَا",
                        "خَا",
                        "خَا",
                        "جَا"
                  ]
            ],
            "lettersIntroduced": [
                  "ج",
                  "ح",
                  "خ"
            ]
      },
      {
            "page": 18,
            "title": "Mad Alif dengan دَا, ذَا, رَا, زَا",
            "intro": "Latihan memanjangkan bacaan 2 harakat.",
            "rows": [
                  [
                        "دَا",
                        "ذَا",
                        "رَا",
                        "زَا"
                  ],
                  [
                        "دَ",
                        "دَا",
                        "ذَ",
                        "ذَا",
                        "رَ",
                        "رَا"
                  ],
                  [
                        "دَا",
                        "رَا",
                        "ذَا",
                        "زَا",
                        "رَا",
                        "دَا"
                  ]
            ],
            "lettersIntroduced": [
                  "د",
                  "ذ",
                  "ر",
                  "ز"
            ]
      },
      {
            "page": 19,
            "title": "Mad Alif dengan سَا, شَا, صَا, ضَا",
            "intro": "Latihan memanjangkan bacaan 2 harakat.",
            "rows": [
                  [
                        "سَا",
                        "شَا",
                        "صَا",
                        "ضَا"
                  ],
                  [
                        "سَ",
                        "سَا",
                        "شَ",
                        "شَا",
                        "صَ",
                        "صَا"
                  ],
                  [
                        "سَا",
                        "شَا",
                        "صَا",
                        "ضَا",
                        "شَا",
                        "صَا"
                  ]
            ],
            "lettersIntroduced": [
                  "س",
                  "ش",
                  "ص",
                  "ض"
            ]
      },
      {
            "page": 20,
            "title": "Mad Alif dengan طَا, ظَا, عَا, غَا",
            "intro": "Latihan memanjangkan bacaan 2 harakat.",
            "rows": [
                  [
                        "طَا",
                        "ظَا",
                        "عَا",
                        "غَا"
                  ],
                  [
                        "طَ",
                        "طَا",
                        "ظَ",
                        "ظَا",
                        "عَ",
                        "عَا"
                  ],
                  [
                        "طَا",
                        "ظَا",
                        "عَا",
                        "غَا",
                        "ظَا",
                        "عَا"
                  ]
            ],
            "lettersIntroduced": [
                  "ط",
                  "ظ",
                  "ع",
                  "غ"
            ]
      },
      {
            "page": 21,
            "title": "Mad Alif dengan فَا, قَا, كَا, لَا",
            "intro": "Latihan memanjangkan bacaan 2 harakat.",
            "rows": [
                  [
                        "فَا",
                        "قَا",
                        "كَا",
                        "لَا"
                  ],
                  [
                        "فَ",
                        "فَا",
                        "قَ",
                        "قَا",
                        "كَ",
                        "كَا"
                  ],
                  [
                        "فَا",
                        "قَا",
                        "كَا",
                        "لَا",
                        "قَا",
                        "كَا"
                  ]
            ],
            "lettersIntroduced": [
                  "ف",
                  "ق",
                  "ك",
                  "ل"
            ]
      },
      {
            "page": 22,
            "title": "Mad Alif dengan مَا, نَا, وَا, هَا, يَا",
            "intro": "Latihan memanjangkan bacaan 2 harakat.",
            "rows": [
                  [
                        "مَا",
                        "نَا",
                        "وَا",
                        "هَا",
                        "يَا"
                  ],
                  [
                        "مَ",
                        "مَا",
                        "نَ",
                        "نَا",
                        "وَ",
                        "وَا"
                  ],
                  [
                        "مَا",
                        "نَا",
                        "وَا",
                        "هَا",
                        "نَا",
                        "يَا"
                  ]
            ],
            "lettersIntroduced": [
                  "م",
                  "ن",
                  "و",
                  "ه",
                  "ي"
            ]
      },
      {
            "page": 23,
            "title": "Latihan Campuran Mad Bagian 1",
            "intro": "Membedakan bacaan pendek dan panjang di dalam kata.",
            "rows": [
                  [
                        "جَاهَدَ",
                        "فَاعَلَ",
                        "ثَاقَبَ"
                  ],
                  [
                        "كَاتَبَ",
                        "نَاصَرَ",
                        "طَالَبَ"
                  ],
                  [
                        "غَازَلَ",
                        "عَالَمَ",
                        "حَاسَدَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ج",
                  "ف",
                  "ث",
                  "ك",
                  "ن",
                  "ط",
                  "غ",
                  "ع",
                  "ح"
            ]
      },
      {
            "page": 24,
            "title": "Latihan Campuran Mad Bagian 2",
            "intro": "Membedakan bacaan pendek dan panjang di dalam kata.",
            "rows": [
                  [
                        "نَاعِمَ",
                        "لَاهِبَ",
                        "خَاطَبَ"
                  ],
                  [
                        "كَاسِبَ",
                        "غَالِبَ",
                        "خَالِقَ"
                  ],
                  [
                        "صَاحِبَ",
                        "ذَاكِرَ",
                        "شَاكِرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ن",
                  "ل",
                  "خ",
                  "ك",
                  "غ",
                  "ص",
                  "ذ",
                  "ش"
            ]
      },
      {
            "page": 25,
            "title": "Latihan Campuran Mad Bagian 3",
            "intro": "Membedakan bacaan pendek dan panjang di dalam kata.",
            "rows": [
                  [
                        "سَاهِمَ",
                        "زَاهِقَ",
                        "طَاهِرَ"
                  ],
                  [
                        "عَاصِمَ",
                        "ضَابِطَ",
                        "حَافِظَ"
                  ],
                  [
                        "قَاتِلَ",
                        "وَاعِدَ",
                        "بَارِكَ"
                  ]
            ],
            "lettersIntroduced": [
                  "س",
                  "ز",
                  "ط",
                  "ع",
                  "ض",
                  "ح",
                  "ق",
                  "و",
                  "ب"
            ]
      },
      {
            "page": 26,
            "title": "Pengenalan Awalan Kata (كَمَا)",
            "intro": "Latihan kelancaran membaca kata depan.",
            "rows": [
                  [
                        "كَمَا",
                        "بَدَأَ",
                        "كَمَا",
                        "خَلَقَ"
                  ],
                  [
                        "كَمَا",
                        "كَتَبَ",
                        "كَمَا",
                        "نَصَرَ"
                  ],
                  [
                        "كَمَا",
                        "جَعَلَ",
                        "كَمَا",
                        "صَبَرَ"
                  ]
            ],
            "lettersIntroduced": [
                  "ك",
                  "م",
                  "ب",
                  "د",
                  "أ",
                  "خ",
                  "ل",
                  "ق",
                  "ت",
                  "ن",
                  "ص",
                  "ر",
                  "ج",
                  "ح"
            ]
      },
      {
            "page": 27,
            "title": "Latihan Kata Gabungan Akhiran Alif (ـَا)",
            "intro": "Latihan kelancaran akhir kata yang dipanjangkan.",
            "rows": [
                  [
                        "هَرَبَا",
                        "عَقَدَا",
                        "كَسَبَا"
                  ],
                  [
                        "خَتَمَا",
                        "جَبَلَا",
                        "غَفَلَا"
                  ],
                  [
                        "خَلَفَا",
                        "صَنَعَا",
                        "مَنَعَا"
                  ]
            ],
            "lettersIntroduced": [
                  "ه",
                  "ر",
                  "ب",
                  "ع",
                  "ق",
                  "د",
                  "ك",
                  "s",
                  "خ",
                  "ت",
                  "م",
                  "j",
                  "ل",
                  "غ",
                  "ف",
                  "ص",
                  "n"
            ]
      },
      {
            "page": 28,
            "title": "Latihan Kata Gabungan Bermad Tengah",
            "intro": "Latihan kelancaran kata bermad di tengah.",
            "rows": [
                  [
                        "مَقَامَهَا",
                        "طَعَامَهَا"
                  ],
                  [
                        "سَمَوَاتِ",
                        "صَلَوَاتِ"
                  ],
                  [
                        "كِتَابُهَا",
                        "عِقَابُهَا"
                  ]
            ],
            "lettersIntroduced": [
                  "م",
                  "ق",
                  "ه",
                  "ط",
                  "ع",
                  "س",
                  "و",
                  "ت",
                  "ص",
                  "ل",
                  "ك",
                  "ب"
            ]
      },
      {
            "page": 29,
            "title": "Evaluasi Perbedaan Bunyi Mad Alif",
            "intro": "Bedakan lafal panjang huruf-huruf berdekatan.",
            "rows": [
                  [
                        "ثَا",
                        "شَا",
                        "سَا",
                        "شَا",
                        "سَا",
                        "ثَا",
                        "صَا",
                        "ثَا"
                  ],
                  [
                        "شَا",
                        "عَا",
                        "هَا",
                        "عَا",
                        "قَا",
                        "خَا",
                        "خَا",
                        "غَا"
                  ],
                  [
                        "يَا",
                        "زَا",
                        "رَا",
                        "جَا",
                        "زَا",
                        "ذَا",
                        "ذَا",
                        "ظَا"
                  ]
            ],
            "lettersIntroduced": [
                  "ث",
                  "ش",
                  "س",
                  "ص",
                  "ع",
                  "ه",
                  "ق",
                  "خ",
                  "غ",
                  "ي",
                  "ز",
                  "ر",
                  "ج",
                  "ذ",
                  "ظ"
            ]
      },
      {
            "page": 30,
            "title": "Latihan Kalimat Panjang Bermad Bagian 1",
            "intro": "Latihan kata beruntun dengan harakat fathah dan mad.",
            "rows": [
                  [
                        "عَاذَاكَ",
                        "صَافَحَا",
                        "خَطَايَاكَ"
                  ],
                  [
                        "تَوَّابَ",
                        "هَمَّازَ",
                        "خَافِتَاً"
                  ],
                  [
                        "هَدَى",
                        "عَصَى",
                        "نَادَى"
                  ]
            ],
            "lettersIntroduced": [
                  "ع",
                  "ذ",
                  "ك",
                  "ص",
                  "ف",
                  "ح",
                  "خ",
                  "ط",
                  "ي",
                  "ت",
                  "و",
                  "ب",
                  "ه",
                  "م",
                  "ز",
                  "ن",
                  "د"
            ]
      },
      {
            "page": 31,
            "title": "Latihan Kalimat Panjang Bermad Bagian 2",
            "intro": "Latihan kalimat terpadu dengan tanda mad dan alif layyinah (ى).",
            "rows": [
                  [
                        "قَال",
                        "بَلَى",
                        "فَطَغَى",
                        "يَتَامَى"
                  ],
                  [
                        "لِمَكَّةَ",
                        "لَأَطَاعَ",
                        "مَعَاشَاً"
                  ],
                  [
                        "سَرَابَاً",
                        "ضَلَّ",
                        "صَوَابَاً"
                  ]
            ],
            "lettersIntroduced": [
                  "ق",
                  "ل",
                  "ب",
                  "ى",
                  "ف",
                  "ط",
                  "غ",
                  "ي",
                  "ت",
                  "م",
                  "ك",
                  "أ",
                  "ع",
                  "ش",
                  "ر",
                  "ص",
                  "و"
            ]
      },
      {
            "page": 32,
            "title": "Evaluasi Akhir Jilid Iqra 2",
            "intro": "Pastikan lancar dan benar makhraj serta panjang-pendeknya sebelum lanjut.",
            "rows": [
                  [
                        "اِذَانَ",
                        "صَافَحَا",
                        "خَطَايَايَ"
                  ],
                  [
                        "تَوَّابَ",
                        "هَمَّازَ",
                        "خَافِتَاً"
                  ],
                  [
                        "هَدَى",
                        "عَصَى",
                        "نَادَى"
                  ]
            ],
            "lettersIntroduced": [
                  "ا",
                  "ذ",
                  "ن",
                  "ص",
                  "ف",
                  "ح",
                  "خ",
                  "ط",
                  "ي",
                  "ت",
                  "و",
                  "ب",
                  "ه",
                  "م",
                  "ز",
                  "ع",
                  "د"
            ]
      }
]
    }
  }
};

if (typeof module !== 'undefined') module.exports = { HIJAIYAH_DATA };
