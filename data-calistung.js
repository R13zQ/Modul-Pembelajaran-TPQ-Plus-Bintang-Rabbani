// ==========================================
// DATA CALISTUNG - TPQ Plus Bintang Rabbani
// ==========================================

const CALISTUNG_DATA = {
  hurufIndonesia: [
    { huruf: 'A', hurufKecil: 'a', bunyi: 'a', contoh: [{ kata: 'Apel', emoji: '🍎', sukuKata: 'A-pel' },{ kata: 'Ayam', emoji: '🐓', sukuKata: 'A-yam' },{ kata: 'Awan', emoji: '☁️', sukuKata: 'A-wan' }], warna: '#FF6B35', bulan: 1 },
    { huruf: 'B', hurufKecil: 'b', bunyi: 'be', contoh: [{ kata: 'Buku', emoji: '📚', sukuKata: 'Bu-ku' },{ kata: 'Bola', emoji: '⚽', sukuKata: 'Bo-la' },{ kata: 'Bebek', emoji: '🦆', sukuKata: 'Be-bek' }], warna: '#FF8C42', bulan: 1 },
    { huruf: 'C', hurufKecil: 'c', bunyi: 'ce', contoh: [{ kata: 'Ceri', emoji: '🍒', sukuKata: 'Ce-ri' },{ kata: 'Cicak', emoji: '🦎', sukuKata: 'Ci-cak' },{ kata: 'Cangkir', emoji: '☕', sukuKata: 'Cang-kir' }], warna: '#FFD600', bulan: 2 },
    { huruf: 'D', hurufKecil: 'd', bunyi: 'de', contoh: [{ kata: 'Domba', emoji: '🐑', sukuKata: 'Dom-ba' },{ kata: 'Daun', emoji: '🍃', sukuKata: 'Da-un' },{ kata: 'Donat', emoji: '🍩', sukuKata: 'Do-nat' }], warna: '#00C896', bulan: 2 },
    { huruf: 'E', hurufKecil: 'e', bunyi: 'e', contoh: [{ kata: 'Elang', emoji: '🦅', sukuKata: 'E-lang' },{ kata: 'Ekor', emoji: '🐈', sukuKata: 'E-kor' },{ kata: 'Emas', emoji: '💛', sukuKata: 'E-mas' }], warna: '#29B6F6', bulan: 2 },
    { huruf: 'F', hurufKecil: 'f', bunyi: 'ef', contoh: [{ kata: 'Foto', emoji: '📷', sukuKata: 'Fo-to' },{ kata: 'Film', emoji: '🎬', sukuKata: 'Film' },{ kata: 'Fanta', emoji: '🧃', sukuKata: 'Fan-ta' }], warna: '#9C27B0', bulan: 3 },
    { huruf: 'G', hurufKecil: 'g', bunyi: 'ge', contoh: [{ kata: 'Gajah', emoji: '🐘', sukuKata: 'Ga-jah' },{ kata: 'Gitar', emoji: '🎸', sukuKata: 'Gi-tar' },{ kata: 'Gunung', emoji: '⛰️', sukuKata: 'Gu-nung' }], warna: '#FF4081', bulan: 3 },
    { huruf: 'H', hurufKecil: 'h', bunyi: 'ha', contoh: [{ kata: 'Harimau', emoji: '🐯', sukuKata: 'Ha-ri-mau' },{ kata: 'Hati', emoji: '❤️', sukuKata: 'Ha-ti' },{ kata: 'Halaman', emoji: '🏡', sukuKata: 'Ha-la-man' }], warna: '#00BCD4', bulan: 3 },
    { huruf: 'I', hurufKecil: 'i', bunyi: 'i', contoh: [{ kata: 'Ikan', emoji: '🐟', sukuKata: 'I-kan' },{ kata: 'Itik', emoji: '🦆', sukuKata: 'I-tik' },{ kata: 'Ibu', emoji: '👩', sukuKata: 'I-bu' }], warna: '#FF6B35', bulan: 3 },
    { huruf: 'J', hurufKecil: 'j', bunyi: 'je', contoh: [{ kata: 'Jerapah', emoji: '🦒', sukuKata: 'Je-ra-pah' },{ kata: 'Jambu', emoji: '🍈', sukuKata: 'Jam-bu' },{ kata: 'Jarum', emoji: '🪱', sukuKata: 'Ja-rum' }], warna: '#FFD600', bulan: 4 },
    { huruf: 'K', hurufKecil: 'k', bunyi: 'ka', contoh: [{ kata: 'Kelinci', emoji: '🐰', sukuKata: 'Ke-lin-ci' },{ kata: 'Kacang', emoji: '🥜', sukuKata: 'Ka-cang' },{ kata: 'Kapal', emoji: '⛵', sukuKata: 'Ka-pal' }], warna: '#00C896', bulan: 4 },
    { huruf: 'L', hurufKecil: 'l', bunyi: 'el', contoh: [{ kata: 'Landak', emoji: '🦔', sukuKata: 'Lan-dak' },{ kata: 'Lemon', emoji: '🍋', sukuKata: 'Le-mon' },{ kata: 'Langit', emoji: '🌌', sukuKata: 'La-ngit' }], warna: '#29B6F6', bulan: 4 },
    { huruf: 'M', hurufKecil: 'm', bunyi: 'em', contoh: [{ kata: 'Monyet', emoji: '🐒', sukuKata: 'Mon-yet' },{ kata: 'Matahari', emoji: '☀️', sukuKata: 'Ma-ta-ha-ri' },{ kata: 'Mie', emoji: '🍜', sukuKata: 'Mi-e' }], warna: '#9C27B0', bulan: 4 },
    { huruf: 'N', hurufKecil: 'n', bunyi: 'en', contoh: [{ kata: 'Naga', emoji: '🐉', sukuKata: 'Na-ga' },{ kata: 'Nyiur', emoji: '🌴', sukuKata: 'Nyi-ur' },{ kata: 'Nanas', emoji: '🍍', sukuKata: 'Na-nas' }], warna: '#FF4081', bulan: 4 },
    { huruf: 'O', hurufKecil: 'o', bunyi: 'o', contoh: [{ kata: 'Orangutan', emoji: '🦧', sukuKata: 'O-rang-u-tan' },{ kata: 'Onde-onde', emoji: '🟤', sukuKata: 'On-de-on-de' },{ kata: 'Obat', emoji: '💊', sukuKata: 'O-bat' }], warna: '#00BCD4', bulan: 5 },
    { huruf: 'P', hurufKecil: 'p', bunyi: 'pe', contoh: [{ kata: 'Pinguin', emoji: '🐧', sukuKata: 'Ping-u-in' },{ kata: 'Pizza', emoji: '🍕', sukuKata: 'Piz-za' },{ kata: 'Pensil', emoji: '✏️', sukuKata: 'Pen-sil' }], warna: '#FF6B35', bulan: 5 },
    { huruf: 'Q', hurufKecil: 'q', bunyi: 'ki', contoh: [{ kata: 'Quran', emoji: '📖', sukuKata: 'Qu-ran' },{ kata: 'Qolbu', emoji: '💚', sukuKata: 'Qol-bu' },{ kata: 'Qodar', emoji: '✨', sukuKata: 'Qo-dar' }], warna: '#FFD600', bulan: 5 },
    { huruf: 'R', hurufKecil: 'r', bunyi: 'er', contoh: [{ kata: 'Rusa', emoji: '🦌', sukuKata: 'Ru-sa' },{ kata: 'Roti', emoji: '🍞', sukuKata: 'Ro-ti' },{ kata: 'Roket', emoji: '🚀', sukuKata: 'Ro-ket' }], warna: '#00C896', bulan: 5 },
    { huruf: 'S', hurufKecil: 's', bunyi: 'es', contoh: [{ kata: 'Sapi', emoji: '🐄', sukuKata: 'Sa-pi' },{ kata: 'Singa', emoji: '🦁', sukuKata: 'Si-nga' },{ kata: 'Semangka', emoji: '🍉', sukuKata: 'Se-mang-ka' }], warna: '#29B6F6', bulan: 5 },
    { huruf: 'T', hurufKecil: 't', bunyi: 'te', contoh: [{ kata: 'Tikus', emoji: '🐭', sukuKata: 'Ti-kus' },{ kata: 'Topi', emoji: '🎩', sukuKata: 'To-pi' },{ kata: 'Timun', emoji: '🥒', sukuKata: 'Ti-mun' }], warna: '#9C27B0', bulan: 5 },
    { huruf: 'U', hurufKecil: 'u', bunyi: 'u', contoh: [{ kata: 'Ulat', emoji: '🐛', sukuKata: 'U-lat' },{ kata: 'Udang', emoji: '🦐', sukuKata: 'U-dang' },{ kata: 'Ubin', emoji: '🟩', sukuKata: 'U-bin' }], warna: '#FF4081', bulan: 5 },
    { huruf: 'V', hurufKecil: 'v', bunyi: 've', contoh: [{ kata: 'Vas', emoji: '🏺', sukuKata: 'Vas' },{ kata: 'Violin', emoji: '🎻', sukuKata: 'Vi-o-lin' },{ kata: 'Voli', emoji: '🏐', sukuKata: 'Vo-li' }], warna: '#00BCD4', bulan: 5 },
    { huruf: 'W', hurufKecil: 'w', bunyi: 'we', contoh: [{ kata: 'Wortel', emoji: '🥕', sukuKata: 'Wor-tel' },{ kata: 'Warna', emoji: '🎨', sukuKata: 'War-na' },{ kata: 'Wayang', emoji: '🪶', sukuKata: 'Wa-yang' }], warna: '#FF6B35', bulan: 5 },
    { huruf: 'X', hurufKecil: 'x', bunyi: 'eks', contoh: [{ kata: 'Xylofon', emoji: '🎵', sukuKata: 'Xy-lo-fon' },{ kata: 'X-ray', emoji: '🩻', sukuKata: 'X-ray' },{ kata: 'Xenia', emoji: '🚗', sukuKata: 'Xe-ni-a' }], warna: '#FFD600', bulan: 5 },
    { huruf: 'Y', hurufKecil: 'y', bunyi: 'ye', contoh: [{ kata: 'Yak', emoji: '🐂', sukuKata: 'Yak' },{ kata: 'Yoga', emoji: '🧘', sukuKata: 'Yo-ga' },{ kata: 'Yacht', emoji: '⛵', sukuKata: 'Yacht' }], warna: '#00C896', bulan: 5 },
    { huruf: 'Z', hurufKecil: 'z', bunyi: 'zet', contoh: [{ kata: 'Zebra', emoji: '🦓', sukuKata: 'Ze-bra' },{ kata: 'Zaitun', emoji: '🫒', sukuKata: 'Za-i-tun' },{ kata: 'Zamrud', emoji: '💚', sukuKata: 'Zam-rud' }], warna: '#29B6F6', bulan: 5 }
  ],
  angka: [
    { angka: 1, latin: 'Satu', arab: '١', emoji: '🍎', emojiRepeat: 1, warna: '#FF6B35', bulan: 1 },
    { angka: 2, latin: 'Dua', arab: '٢', emoji: '🍎', emojiRepeat: 2, warna: '#FF8C42', bulan: 1 },
    { angka: 3, latin: 'Tiga', arab: '٣', emoji: '🍎', emojiRepeat: 3, warna: '#FFA055', bulan: 1 },
    { angka: 4, latin: 'Empat', arab: '٤', emoji: '🍎', emojiRepeat: 4, warna: '#FFB468', bulan: 1 },
    { angka: 5, latin: 'Lima', arab: '٥', emoji: '🍎', emojiRepeat: 5, warna: '#FFD600', bulan: 1 },
    { angka: 6, latin: 'Enam', arab: '٦', emoji: '⭐', emojiRepeat: 6, warna: '#FFD600', bulan: 2 },
    { angka: 7, latin: 'Tujuh', arab: '٧', emoji: '⭐', emojiRepeat: 7, warna: '#FFCC00', bulan: 2 },
    { angka: 8, latin: 'Delapan', arab: '٨', emoji: '⭐', emojiRepeat: 8, warna: '#00C896', bulan: 2 },
    { angka: 9, latin: 'Sembilan', arab: '٩', emoji: '⭐', emojiRepeat: 9, warna: '#00B584', bulan: 2 },
    { angka: 10, latin: 'Sepuluh', arab: '١٠', emoji: '⭐', emojiRepeat: 10, warna: '#29B6F6', bulan: 2 },
    { angka: 11, latin: 'Sebelas', arab: '١١', emoji: '🐟', emojiRepeat: 11, warna: '#29B6F6', bulan: 3 },
    { angka: 12, latin: 'Dua Belas', arab: '١٢', emoji: '🐟', emojiRepeat: 12, warna: '#1E9ED9', bulan: 3 },
    { angka: 13, latin: 'Tiga Belas', arab: '١٣', emoji: '🐟', emojiRepeat: 13, warna: '#9C27B0', bulan: 3 },
    { angka: 14, latin: 'Empat Belas', arab: '١٤', emoji: '🐟', emojiRepeat: 14, warna: '#8E24AA', bulan: 3 },
    { angka: 15, latin: 'Lima Belas', arab: '١٥', emoji: '🐟', emojiRepeat: 15, warna: '#FF4081', bulan: 3 },
    { angka: 16, latin: 'Enam Belas', arab: '١٦', emoji: '🌸', emojiRepeat: 16, warna: '#FF4081', bulan: 4 },
    { angka: 17, latin: 'Tujuh Belas', arab: '١٧', emoji: '🌸', emojiRepeat: 17, warna: '#F06292', bulan: 4 },
    { angka: 18, latin: 'Delapan Belas', arab: '١٨', emoji: '🌸', emojiRepeat: 18, warna: '#00BCD4', bulan: 4 },
    { angka: 19, latin: 'Sembilan Belas', arab: '١٩', emoji: '🌸', emojiRepeat: 19, warna: '#00ACC1', bulan: 4 },
    { angka: 20, latin: 'Dua Puluh', arab: '٢٠', emoji: '🌸', emojiRepeat: 20, warna: '#FF6B35', bulan: 4 },
    { angka: 21, latin: 'Dua Puluh Satu', arab: '٢١', emoji: '🍌', emojiRepeat: 21, warna: '#FF6B35', bulan: 5 },
    { angka: 22, latin: 'Dua Puluh Dua', arab: '٢٢', emoji: '🍌', emojiRepeat: 22, warna: '#FFD600', bulan: 5 },
    { angka: 23, latin: 'Dua Puluh Tiga', arab: '٢٣', emoji: '🍌', emojiRepeat: 23, warna: '#00C896', bulan: 5 },
    { angka: 24, latin: 'Dua Puluh Empat', arab: '٢٤', emoji: '🍌', emojiRepeat: 24, warna: '#29B6F6', bulan: 5 },
    { angka: 25, latin: 'Dua Puluh Lima', arab: '٢٥', emoji: '🍌', emojiRepeat: 25, warna: '#9C27B0', bulan: 5 },
    { angka: 26, latin: 'Dua Puluh Enam', arab: '٢٦', emoji: '🌴', emojiRepeat: 26, warna: '#9C27B0', bulan: 6 },
    { angka: 27, latin: 'Dua Puluh Tujuh', arab: '٢٧', emoji: '🌴', emojiRepeat: 27, warna: '#FF4081', wins: 27, bulan: 6 },
    { angka: 28, latin: 'Dua Puluh Delapan', arab: '٢٨', emoji: '🌴', emojiRepeat: 28, warna: '#00BCD4', bulan: 6 },
    { angka: 29, latin: 'Dua Puluh Sembilan', arab: '٢٩', emoji: '🌴', emojiRepeat: 29, warna: '#FF6B35', bulan: 6 },
    { angka: 30, latin: 'Tiga Puluh', arab: '٣٠', emoji: '🌴', emojiRepeat: 30, warna: '#FFD600', bulan: 6 }
  ],
  sukuKata: [
    {
      konsonan: 'B',
      suku: [
        { suku: 'BA', contoh: 'Baju', emoji: '👕' },
        { suku: 'BI', contoh: 'Biru', emoji: '🔵' },
        { suku: 'BU', contoh: 'Buku', emoji: '📚' },
        { suku: 'BE', contoh: 'Bebek', emoji: '🦆' },
        { suku: 'BO', contoh: 'Bola', emoji: '⚽' }
      ]
    },
    {
      konsonan: 'C',
      suku: [
        { suku: 'CA', contoh: 'Cabe', emoji: '🌶️' },
        { suku: 'CI', contoh: 'Cicak', emoji: '🦎' },
        { suku: 'CU', contoh: 'Cumi', emoji: '🦑' },
        { suku: 'CE', contoh: 'Celana', emoji: '👖' },
        { suku: 'CO', contoh: 'Cokelat', emoji: '🍫' }
      ]
    },
    {
      konsonan: 'D',
      suku: [
        { suku: 'DA', contoh: 'Dasi', emoji: '👔' },
        { suku: 'DI', contoh: 'Dinding', emoji: '🧱' },
        { suku: 'DU', contoh: 'Durian', emoji: '🍈' },
        { suku: 'DE', contoh: 'Delman', emoji: '🐎' },
        { suku: 'DO', // corrected
          contoh: 'Donat', emoji: '🍩' }
      ]
    },
    {
      konsonan: 'M',
      suku: [
        { suku: 'MA', contoh: 'Mata', emoji: '👁️' },
        { suku: 'MI', contoh: 'Mie', emoji: '🍜' },
        { suku: 'MU', contoh: 'Mulut', emoji: '👄' },
        { suku: 'ME', contoh: 'Meja', emoji: '🪵' },
        { suku: 'MO', contoh: 'Mobil', emoji: '🚗' }
      ]
    }
  ],
  kataGambar: [
    { kata: 'MAMA', sukuKata: 'MA-MA', emoji: '👩', arti: 'Ibu/Mama', warna: '#FF6B35' },
    { kata: 'PAPA', sukuKata: 'PA-PA', emoji: '👨', arti: 'Ayah/Papa', warna: '#FFD600' },
    { kata: 'SAPI', sukuKata: 'SA-PI', emoji: '🐄', arti: 'Hewan Sapi', warna: '#00C896' },
    { kata: 'BAJU', sukuKata: 'BA-JU', emoji: '👕', arti: 'Pakaian Baju', warna: '#29B6F6' },
    { kata: 'KUDA', sukuKata: 'KU-DA', emoji: '🐴', arti: 'Hewan Kuda', warna: '#9C27B0' },
    { kata: 'BUKU', sukuKata: 'BU-KU', emoji: '📚', arti: 'Buku Bacaan', warna: '#FF4081' },
    { kata: 'BOLA', sukuKata: 'BO-LA', emoji: '⚽', arti: 'Bola Mainan', warna: '#00BCD4' },
    { kata: 'ROTI', sukuKata: 'RO-TI', emoji: '🍞', arti: 'Roti Bakar', warna: '#FF6B35' },
    { kata: 'IKAN', sukuKata: 'I-KAN', emoji: '🐟', arti: 'Ikan Berenang', warna: '#00C896' },
    { kata: 'KUCING', sukuKata: 'KU-CING', emoji: '🐱', arti: 'Kucing Imut', warna: '#9C27B0' }
  ],
  kalimat: [
    { teks: 'Ini sapi mama.', arti: 'Kalimat menerangkan kepemilikan sapi oleh ibu.', emoji: '🐄' },
    { teks: 'Budi suka baca buku.', arti: 'Kalimat menerangkan kegemaran Budi membaca.', emoji: '📚' },
    { teks: 'Kucing tidur siang.', arti: 'Kalimat menerangkan kucing yang sedang tidur.', emoji: '🐱' },
    { teks: 'Aisha makan buah apel.', arti: 'Kalimat menerangkan Aisha sedang makan buah.', emoji: '🍎' }
  ],
  penjumlahan: [
    { angka1: 1, angka2: 2, emoji: '🍎', jawaban: 3, cerita: 'Zaid mempunyai 1 apel merah. Aisha memberinya 2 apel merah lagi. Berapa jumlah seluruh apel Zaid?' },
    { angka1: 3, angka2: 2, emoji: '⭐', jawaban: 5, cerita: 'Ada 3 bintang bersinar di langit sebelah kiri dan 2 bintang bersinar di sebelah kanan. Berapa total bintang?' },
    { angka1: 5, angka2: 4, emoji: '🐟', jawaban: 9, cerita: 'Di kolam pertama ada 5 ikan mas koki, di kolam kedua ada 4 ikan mas koki. Berapa ekor ikan mas koki seluruhnya?' }
  ],
  pengurangan: [
    { awal: 5, kurang: 2, emoji: '🍎', jawaban: 3, cerita: 'Ada 5 apel di piring makan, Zaid memakan 2 buah apel. Berapa sisa buah apel di piring?' },
    { awal: 10, kurang: 4, emoji: '🎈', jawaban: 6, cerita: 'Aisha membawa 10 balon warna-warni, tiba-tiba 4 balon pecah. Berapa balon yang tersisa?' },
    { awal: 8, kurang: 3, emoji: '🚗', jawaban: 5, cerita: 'Ada 8 mobil terparkir di halaman. 3 mobil keluar dari parkiran. Berapa mobil yang masih parkir?' }
  ],
  perkalian: [
    { angka1: 2, angka2: 3, emoji: '🍌', jawaban: 6, cerita: 'Zaid menyiapkan 2 piring pisang. Setiap piring berisi 3 buah pisang. Berapa total pisang seluruhnya?' },
    { angka1: 3, angka2: 3, emoji: '🍭', jawaban: 9, cerita: 'Ada 3 anak membeli permen. Masing-masing anak membawa 3 buah permen lollipop. Berapa total lollipop?' }
  ],
  soalCerita: [
    {
      soal: 'Zaid membeli 5 buah kurma di pasar. Di tengah jalan ia bersedekah 2 kurma kepada anak yatim. Berapa sisa kurma Zaid sekarang?',
      emoji: '🌴',
      operasi: 'pengurangan',
      jawaban: 3,
      pilihan: [2, 3, 4, 5],
      penjelasan: '5 kurma - 2 kurma = 3 kurma. Memberi sedekah kepada anak yatim adalah sifat terpuji!',
      nilai: 'Dermawan'
    },
    {
      soal: 'Aisha membantu Ibu memetik 6 tangkai bunga melati di kebun. Esok harinya, Aisha memetik lagi 4 tangkai. Berapa tangkai bunga melati Aisha sekarang?',
      emoji: '🌸',
      operasi: 'penjumlahan',
      jawaban: 10,
      pilihan: [8, 9, 10, 11],
      penjelasan: '6 bunga + 4 bunga = 10 bunga. Berbakti membantu orang tua memanen berkah!',
      nilai: 'Rajin membantu'
    }
  ],
  metodeMembaca: [
    {
      id: 'metode-1',
      nama: '1. Fondasi Suku Kata Terbuka Mandiri & Gabungan',
      deskripsi: '20 Contoh: Vokal Mandiri [V], Konsonan-Vokal [KV], KV-KV (2 segmen), & KV-KV-KV (3 segmen)',
      warna: '#FF6B35',
      emoji: '🔤',
      contoh: [
        // 1. Vokal Mandiri [V] (5 contoh)
        { id: 1, pola: 'Vokal Mandiri [V]', kata: 'Aku', sukuKata: 'A - ku', emoji: '🧑', arti: 'Diri sendiri', warna: '#FF6B35' },
        { id: 2, pola: 'Vokal Mandiri [V]', kata: 'Ubi', sukuKata: 'U - bi', emoji: '🍠', arti: 'Tanaman umbi manis', warna: '#FF8C42' },
        { id: 3, pola: 'Vokal Mandiri [V]', kata: 'Ibu', sukuKata: 'I - bu', emoji: '👩', arti: 'Orang tua perempuan', warna: '#FFA055' },
        { id: 4, pola: 'Vokal Mandiri [V]', kata: 'Ada', sukuKata: 'A - da', emoji: '📍', arti: 'Berada di tempat', warna: '#FFB468' },
        { id: 5, pola: 'Vokal Mandiri [V]', kata: 'Apa', sukuKata: 'A - pa', emoji: '❓', arti: 'Kata tanya hal/benda', warna: '#FFC107' },

        // 2. Konsonan-Vokal [KV] (5 contoh)
        { id: 6, pola: 'Konsonan-Vokal [KV]', kata: 'Batu', sukuKata: 'Ba - tu', emoji: '🪨', arti: 'Benda keras alam', warna: '#FFD600' },
        { id: 7, pola: 'Konsonan-Vokal [KV]', kata: 'Kuda', sukuKata: 'Ku - da', emoji: '🐴', arti: 'Hewan berlari kencang', warna: '#00C896' },
        { id: 8, pola: 'Konsonan-Vokal [KV]', kata: 'Buku', sukuKata: 'Bu - ku', emoji: '📚', arti: 'Lembar kertas bacaan', warna: '#00B584' },
        { id: 9, pola: 'Konsonan-Vokal [KV]', kata: 'Bola', sukuKata: 'Bo - la', emoji: '⚽', arti: 'Benda bulat mainan', warna: '#29B6F6' },
        { id: 10, pola: 'Konsonan-Vokal [KV]', kata: 'Sapi', sukuKata: 'Sa - pi', emoji: '🐄', arti: 'Hewan ternak penghasil susu', warna: '#1E9ED9' },

        // 3. Pola Gabungan KV-KV (2 segmen) (5 contoh)
        { id: 11, pola: 'Gabungan KV-KV 2 Segmen', kata: 'Pena', sukuKata: 'Pe - na', emoji: '🖊️', arti: 'Alat untuk menulis', warna: '#9C27B0' },
        { id: 12, pola: 'Gabungan KV-KV 2 Segmen', kata: 'Pipi', sukuKata: 'Pi - pi', emoji: '😊', arti: 'Bagian wajah di samping hidung', warna: '#8E24AA' },
        { id: 13, pola: 'Gabungan KV-KV 2 Segmen', kata: 'Roti', sukuKata: 'Ro - ti', emoji: '🍞', arti: 'Makanan olahan gandum', warna: '#FF4081' },
        { id: 14, pola: 'Gabungan KV-KV 2 Segmen', kata: 'Kaki', sukuKata: 'Ka - ki', emoji: '🦶', arti: 'Anggota tubuh penopang berdiri', warna: '#FF6B35' },
        { id: 15, pola: 'Gabungan KV-KV 2 Segmen', kata: 'Mata', sukuKata: 'Ma - ta', emoji: '👁️', arti: 'Indra penglihatan manusia', warna: '#FFD600' },

        // 4. Pola Gabungan KV-KV-KV (3 segmen) (5 contoh)
        { id: 16, pola: 'Gabungan KV-KV-KV 3 Segmen', kata: 'Sepeda', sukuKata: 'Se - pe - da', emoji: '🚲', arti: 'Kendaraan roda dua', warna: '#00BCD4' },
        { id: 17, pola: 'Gabungan KV-KV-KV 3 Segmen', kata: 'Kemeja', sukuKata: 'Ke - me - ja', emoji: '👔', arti: 'Pakaian berkerah', warna: '#00C896' },
        { id: 18, pola: 'Gabungan KV-KV-KV 3 Segmen', kata: 'Melati', sukuKata: 'Me - la - ti', emoji: '🌸', arti: 'Bunga putih harum', warna: '#29B6F6' },
        { id: 19, pola: 'Gabungan KV-KV-KV 3 Segmen', kata: 'Kereta', sukuKata: 'Ke - re - ta', emoji: '🚆', arti: 'Kendaraan rel panjang', warna: '#9C27B0' },
        { id: 20, pola: 'Gabungan KV-KV-KV 3 Segmen', kata: 'Sepatu', sukuKata: 'Se - pa - tu', emoji: '👟', arti: 'Alas kaki pelindung', warna: '#FF4081' }
      ]
    },

    {
      id: 'metode-2',
      nama: '2. Struktur Suku Kata Tertutup / Koda',
      deskripsi: '20 Contoh: Pola VK, Nasal [-n, -m], Likuida [-r, -l], Desis [-s], & Plosif [-k, -t, -p]',
      warna: '#00C896',
      emoji: '🧱',
      contoh: [
        // 1. Pola VK (Vokal + Koda) (5 contoh)
        { id: 21, pola: 'Pola VK (Vokal + Koda)', kata: 'Air', sukuKata: 'A - ir', emoji: '💧', arti: 'Cairan kehidupan', warna: '#00C896' },
        { id: 22, pola: 'Pola VK (Vokal + Koda)', kata: 'Ekor', sukuKata: 'E - kor', emoji: '🐈', arti: 'Bagian belakang tubuh hewan', warna: '#00B584' },
        { id: 23, pola: 'Pola VK (Vokal + Koda)', kata: 'Ular', sukuKata: 'U - lar', emoji: '🐍', arti: 'Hewan melata tanpa kaki', warna: '#29B6F6' },
        { id: 24, pola: 'Pola VK (Vokal + Koda)', kata: 'Obat', sukuKata: 'O - bat', emoji: '💊', arti: 'Penyembuh penyakit', warna: '#1E9ED9' },
        { id: 25, pola: 'Pola VK (Vokal + Koda)', kata: 'Ikan', sukuKata: 'I - kan', emoji: '🐟', arti: 'Hewan bernapas insang', warna: '#9C27B0' },

        // 2. Konsonan Penutup Nasal [-n, -m] (5 contoh)
        { id: 26, pola: 'Konsonan Nasal [-n]', kata: 'Dan', sukuKata: 'Dan', emoji: '🔗', arti: 'Kata hubung gabungan', warna: '#FF4081' },
        { id: 27, pola: 'Konsonan Nasal [-m]', kata: 'Jam', sukuKata: 'Jam', emoji: '⏰', arti: 'Penunjuk waktu', warna: '#FF6B35' },
        { id: 28, pola: 'Konsonan Nasal [-n]', kata: 'Daun', sukuKata: 'Da - un', emoji: '🍃', arti: 'Bagian tumbuhan hijau', warna: '#FFD600' },
        { id: 29, pola: 'Konsonan Nasal [-m]', kata: 'Malam', sukuKata: 'Ma - lam', emoji: '🌙', arti: 'Waktu gelap terbenam matahari', warna: '#00BCD4' },
        { id: 30, pola: 'Konsonan Nasal [-m]', kata: 'Kolam', sukuKata: 'Ko - lam', emoji: '🏊', arti: 'Tempat penampung air', warna: '#00C896' },

        // 3. Likuida [-r, -l] & Desis [-s] (5 contoh)
        { id: 31, pola: 'Likuida / Getar [-r]', kata: 'Pagar', sukuKata: 'Pa - gar', emoji: '🧱', arti: 'Pembatas halaman', warna: '#29B6F6' },
        { id: 32, pola: 'Likuida / Getar [-l]', kata: 'Kapal', sukuKata: 'Ka - pal', emoji: '🚢', arti: 'Kendaraan laut besar', warna: '#9C27B0' },
        { id: 33, pola: 'Desis [-s]', kata: 'Kipas', sukuKata: 'Ki - pas', emoji: '🪭', arti: 'Alat penyejuk udara', warna: '#FF4081' },
        { id: 34, pola: 'Likuida / Getar [-r]', kata: 'Pasar', sukuKata: 'Pa - sar', emoji: '🛒', arti: 'Tempat jual beli barang', warna: '#FF6B35' },
        { id: 35, pola: 'Desis [-s]', kata: 'Beras', sukuKata: 'Be - ras', emoji: '🌾', arti: 'Biji padi bahan nasi', warna: '#FFD600' },

        // 4. Plosif Keras [-k, -t, -p] (VK, KVK, KV-KVK, KVK-KVK) (5 contoh)
        { id: 36, pola: 'Plosif Keras [-k]', kata: 'Cicak', sukuKata: 'Ci - cak', emoji: '🦎', arti: 'Hewan merayap di dinding', warna: '#00BCD4' },
        { id: 37, pola: 'Plosif Keras [-t]', kata: 'Murni', sukuKata: 'Mur - ni', emoji: '✨', arti: 'Bersih tanpa campuran', warna: '#00C896' },
        { id: 38, pola: 'Plosif Keras [-p]', kata: 'Dompet', sukuKata: 'Dom - pet', emoji: '👛', arti: 'Wadah menyimpan uang', warna: '#29B6F6' },
        { id: 39, pola: 'Plosif Keras [-k]', kata: 'Bebek', sukuKata: 'Be - bek', emoji: '🦆', arti: 'Unggas berenang di air', warna: '#9C27B0' },
        { id: 40, pola: 'Plosif Keras [-p]', kata: 'Sampai', sukuKata: 'Sam - pai', emoji: '🏁', arti: 'Tiba di tempat tujuan', warna: '#FF4081' }
      ]
    },

    {
      id: 'metode-3',
      nama: '3. Kompleksitas Digraf & Diftong',
      deskripsi: '20 Contoh: Digraf Sengau [ng, ny], Diftong [ai, au, oi], Hiatus Vokal, & Multisilabel 4 Suku Kata',
      warna: '#29B6F6',
      emoji: '🌀',
      contoh: [
        // 1. Digraf Sengau [ng, ny] (5 contoh)
        { id: 41, pola: 'Digraf Sengau [ng]', kata: 'Bunga', sukuKata: 'Bu - nga', emoji: '🌺', arti: 'Tumbuhan berbunga indah', warna: '#29B6F6' },
        { id: 42, pola: 'Digraf Sengau [ny]', kata: 'Nyanyi', sukuKata: 'Nya - nyi', emoji: '🎤', arti: 'Melantunkan nada lagu', warna: '#1E9ED9' },
        { id: 43, pola: 'Digraf Sengau [ng]', kata: 'Langit', sukuKata: 'La - ngit', emoji: '🌌', arti: 'Angkasa di atas bumi', warna: '#9C27B0' },
        { id: 44, pola: 'Digraf Sengau [ny]', kata: 'Penyu', sukuKata: 'Pe - nyu', emoji: '🐢', arti: 'Kura-kura habitat laut', warna: '#FF4081' },
        { id: 45, pola: 'Digraf Sengau [ng]', kata: 'Mengeong', sukuKata: 'Me - ngeo - ng', emoji: '🐱', arti: 'Suara khas kucing', warna: '#FF6B35' },

        // 2. Diftong [ai, au, oi] (5 contoh)
        { id: 46, pola: 'Diftong [ai]', kata: 'Pandai', sukuKata: 'Pan - dai', emoji: '🎓', arti: 'Cerdas dan bijaksana', warna: '#FFD600' },
        { id: 47, pola: 'Diftong [au]', kata: 'Harimau', sukuKata: 'Ha - ri - mau', emoji: '🐯', arti: 'Hewan pemangsa gagah', warna: '#00BCD4' },
        { id: 48, pola: 'Diftong [oi]', kata: 'Amboy', sukuKata: 'Am - boy', emoji: '🤩', arti: 'Ungkapan kekaguman', warna: '#00C896' },
        { id: 49, pola: 'Diftong [ai]', kata: 'Tupai', sukuKata: 'Tu - pai', emoji: '🐿️', arti: 'Hewan lincah pemanjat pohon', warna: '#29B6F6' },
        { id: 50, pola: 'Diftong [ai]', kata: 'Santai', sukuKata: 'San - tai', emoji: '🛋️', arti: 'Keadaan rileks tenang', warna: '#9C27B0' },

        // 3. Hiatus Vokal Berurutan (5 contoh)
        { id: 51, pola: 'Hiatus Vokal Berurutan', kata: 'Daun', sukuKata: 'Da - un', emoji: '🍃', arti: 'Bagian tumbuhan hijau', warna: '#FF4081' },
        { id: 52, pola: 'Hiatus Vokal Berurutan', kata: 'Mulai', sukuKata: 'Mu - la - i', emoji: '🚀', arti: 'Mengawali pekerjaan', warna: '#FF6B35' },
        { id: 53, pola: 'Hiatus Vokal Berurutan', kata: 'Kain', sukuKata: 'Ka - in', emoji: '🧵', arti: 'Bahan pembuat pakaian', warna: '#FFD600' },
        { id: 54, pola: 'Hiatus Vokal Berurutan', kata: 'Laut', sukuKata: 'La - ut', emoji: '🌊', arti: 'Perairan asin luas', warna: '#00BCD4' },
        { id: 55, pola: 'Hiatus Vokal Berurutan', kata: 'Saat', sukuKata: 'Sa - at', emoji: '⏱️', arti: 'Waktu kejadian berlangsung', warna: '#00C896' },

        // 4. Multisilabel 4 Suku Kata (5 contoh)
        { id: 56, pola: 'Multisilabel 4 Suku Kata', kata: 'Matahari', sukuKata: 'Ma - ta - ha - ri', emoji: '☀️', arti: 'Bintang penerang bumi', warna: '#29B6F6' },
        { id: 57, pola: 'Multisilabel 4 Suku Kata', kata: 'Cendrawasih', sukuKata: 'Cen - dra - wa - sih', emoji: '🦜', arti: 'Burung surga langka', warna: '#9C27B0' },
        { id: 58, pola: 'Multisilabel 4 Suku Kata', kata: 'Orangutan', sukuKata: 'O - rang - u - tan', emoji: '🦧', arti: 'Kera besar khas Indonesia', warna: '#FF4081' },
        { id: 59, pola: 'Multisilabel 4 Suku Kata', kata: 'Pramuwisma', sukuKata: 'Pra - mu - wis - ma', emoji: '🏡', arti: 'Petugas kebersihan rumah', warna: '#FF6B35' },
        { id: 60, pola: 'Multisilabel 4 Suku Kata', kata: 'Keluarga', sukuKata: 'Ke - lu - ar - ga', emoji: '👨‍👩‍👧‍👦', arti: 'Ayah, ibu, dan anak-anak', warna: '#FFD600' }
      ]
    },

    {
      id: 'metode-4',
      nama: '4. Gugus Konsonan & Afiksasi Dasar',
      deskripsi: '20 Contoh: Klaster KKV, KKVK, Prefiks [Ber-, Men-], Sufiks [-an, -kan], & Kombinasi Imbuhan',
      warna: '#9C27B0',
      emoji: '🧩',
      contoh: [
        // 1. Klaster Awal/Tengah KKV & KKVK (5 contoh)
        { id: 61, pola: 'Klaster KKV [tr]', kata: 'Trompet', sukuKata: 'Trom - pet', emoji: '🎺', arti: 'Alat musik tiup', warna: '#9C27B0' },
        { id: 62, pola: 'Klaster KKV [kr]', kata: 'Krayon', sukuKata: 'Kra - yon', emoji: '🖍️', arti: 'Pensil warna gambar', warna: '#8E24AA' },
        { id: 63, pola: 'Klaster KKV [pr]', kata: 'Pramuka', sukuKata: 'Pra - mu - ka', emoji: '⛺', arti: 'Praja Muda Karana', warna: '#FF4081' },
        { id: 64, pola: 'Klaster KKVK [str]', kata: 'Struktur', sukuKata: 'Struk - tur', emoji: '🏗️', arti: 'Susunan bagan bangunan', warna: '#FF6B35' },
        { id: 65, pola: 'Klaster KKV [pl]', kata: 'Plastik', sukuKata: 'Plas - tik', emoji: '🛍️', arti: 'Bahan elastis ringan', warna: '#FFD600' },

        // 2. Prefiks Dasar Bahasa Indonesia [Ber-, Men-] (5 contoh)
        { id: 66, pola: 'Prefiks (Ber-)', kata: 'Berjalan', sukuKata: 'Ber - ja - lan', emoji: '🚶', arti: 'Melangkahkan kaki', warna: '#00BCD4' },
        { id: 67, pola: 'Prefiks (Men-)', kata: 'Menulis', sukuKata: 'Me - nu - lis', emoji: '✍️', arti: 'Menggoreskan pensil/pena', warna: '#00C896' },
        { id: 68, pola: 'Prefiks (Ber-)', kata: 'Berlari', sukuKata: 'Ber - la - ri', emoji: '🏃', arti: 'Melangkah kencang cepat', warna: '#29B6F6' },
        { id: 69, pola: 'Prefiks (Men-)', kata: 'Membaca', sukuKata: 'Mem - ba - ca', emoji: '📖', arti: 'Memahami isi bacaan', warna: '#9C27B0' },
        { id: 70, pola: 'Prefiks (Men-)', kata: 'Mendengar', sukuKata: 'Men - de - ngar', emoji: '👂', arti: 'Menangkap suara telinga', warna: '#FF4081' },

        // 3. Sufiks Dasar Bahasa Indonesia [-an, -kan, -i] (5 contoh)
        { id: 71, pola: 'Sufiks (-an)', kata: 'Makanan', sukuKata: 'Ma - kan - an', emoji: '🍲', arti: 'Sesuatu yang dimakan', warna: '#FF6B35' },
        { id: 72, pola: 'Sufiks (-kan)', kata: 'Bawakan', sukuKata: 'Ba - wa - kan', emoji: '📦', arti: 'Membawa untuk seseorang', warna: '#FFD600' },
        { id: 73, pola: 'Sufiks (-an)', kata: 'Minuman', sukuKata: 'Mi - num - an', emoji: '🧃', arti: 'Sesuatu yang diminum', warna: '#00BCD4' },
        { id: 74, pola: 'Sufiks (-an)', kata: 'Bukaan', sukuKata: 'Bu - ka - an', emoji: '🔓', arti: 'Hasil membuka sesuatu', warna: '#00C896' },
        { id: 75, pola: 'Sufiks (-i)', kata: 'Awali', sukuKata: 'A - wal - i', emoji: '🏁', arti: 'Mulai terlebih dahulu', warna: '#29B6F6' },

        // 4. Kombinasi Prefiks & Sufiks (5 contoh)
        { id: 76, pola: 'Prefiks + Sufiks', kata: 'Pakaian', sukuKata: 'Pa - kai - an', emoji: '👔', arti: 'Busana penutup tubuh', warna: '#9C27B0' },
        { id: 77, pola: 'Prefiks + Sufiks', kata: 'Mainan', sukuKata: 'Ma - in - an', emoji: '🧸', arti: 'Alat hiburan anak-anak', warna: '#FF4081' },
        { id: 78, pola: 'Prefiks + Sufiks', kata: 'Pekerjaan', sukuKata: 'Pe - ker - ja - an', emoji: '💼', arti: 'Aktivitas mata pencaharian', warna: '#FF6B35' },
        { id: 79, pola: 'Prefiks + Sufiks', kata: 'Pelajaran', sukuKata: 'Pe - la - jar - an', emoji: '📚', arti: 'Ilmu materi sekolah', warna: '#FFD600' },
        { id: 80, pola: 'Prefiks + Sufiks', kata: 'Perjalanan', sukuKata: 'Per - ja - lan - an', emoji: '🛣️', arti: 'Aktivitas bepergian jauh', warna: '#00BCD4' }
      ]
    },

    {
      id: 'metode-5',
      nama: '5. Otomasi Morfologis Kompleks & Resegmentasi',
      deskripsi: '20 Contoh: Konfiks Ganda, Peluluhan Morfem, & Pembacaan Kata Jadian Panjang (5-6 Suku Kata)',
      warna: '#FF4081',
      emoji: '⚡',
      contoh: [
        // 1. Konfiks Ganda (5 contoh)
        { id: 81, pola: 'Konfiks Ganda (Peng-...-an)', kata: 'Pencegahan', sukuKata: 'Pen - ce - gah - an', emoji: '🛡️', arti: 'Tindakan menolak bahaya', warna: '#FF4081' },
        { id: 82, pola: 'Konfiks Ganda (Pember-...-an)', kata: 'Pemberdayaan', sukuKata: 'Pem - ber - da - ya - an', emoji: '💪', arti: 'Upaya membuat berdaya', warna: '#FF6B35' },
        { id: 83, pola: 'Konfiks Ganda (Peng-...-an)', kata: 'Pengembangan', sukuKata: 'Peng - em - bang - an', emoji: '🌱', arti: 'Proses memajukan sesuatu', warna: '#FFD600' },
        { id: 84, pola: 'Konfiks Ganda (Pem-...-an)', kata: 'Pemberian', sukuKata: 'Pem - be - ri - an', emoji: '🎁', arti: 'Sesuatu yang diberikan', warna: '#00BCD4' },
        { id: 85, pola: 'Konfiks Ganda (Peng-...-an)', kata: 'Penglihatan', sukuKata: 'Peng - li - hat - an', emoji: '👁️', arti: 'Kemampuan mata melihat', warna: '#00C896' },

        // 2. Peluluhan Morfem (Me- + K/T/S/P) (5 contoh)
        { id: 86, pola: 'Peluluhan Morfem (Me- + Sapu)', kata: 'Menyapu', sukuKata: 'Me - nya - pu', emoji: '🧹', arti: 'Membersihkan lantai dengan sapu', warna: '#29B6F6' },
        { id: 87, pola: 'Peluluhan Morfem (Me- + Tulis)', kata: 'Menuliskan', sukuKata: 'Me - nu - lis - kan', emoji: '📝', arti: 'Mencatat teks untuk dibaca', warna: '#9C27B0' },
        { id: 88, pola: 'Peluluhan Morfem (Me- + Potong)', kata: 'Memotong', sukuKata: 'Me - mo - tong', emoji: '✂️', arti: 'Membagi benda tajam', warna: '#FF4081' },
        { id: 89, pola: 'Peluluhan Morfem (Me- + Iris)', kata: 'Mengiris', sukuKata: 'Meng - i - ris', emoji: '🔪', arti: 'Memotong tipis-tipis', warna: '#FF6B35' },
        { id: 90, pola: 'Peluluhan Morfem (Me- + Siram)', kata: 'Menyiram', sukuKata: 'Me - nyi - ram', emoji: '🚿', arti: 'Menyiramkan air tanaman', warna: '#FFD600' },

        // 3. Kata Jadian Panjang 5 Suku Kata (5 contoh)
        { id: 91, pola: 'Kata Panjang 5 Suku Kata', kata: 'Keberhasilan', sukuKata: 'Ke - ber - ha - sil - an', emoji: '🏆', arti: 'Pencapaian hasil terbaik', warna: '#00BCD4' },
        { id: 92, pola: 'Kata Panjang 5 Suku Kata', kata: 'Keterampilan', sukuKata: 'Ke - te - ram - pil - an', emoji: '🎨', arti: 'Keahlian dalam berkarya', warna: '#00C896' },
        { id: 93, pola: 'Kata Panjang 5 Suku Kata', kata: 'Persaudaraan', sukuKata: 'Per - sau - da - ra - an', emoji: '🤝', arti: 'Ikatan kekeluargaan erat', warna: '#29B6F6' },
        { id: 94, pola: 'Kata Panjang 5 Suku Kata', kata: 'Kemerdekaan', sukuKata: 'Ke - mer - de - ka - an', emoji: '🇮🇩', arti: 'Kebebasan suatu bangsa', warna: '#9C27B0' },
        { id: 95, pola: 'Kata Panjang 5 Suku Kata', kata: 'Kesejahteraan', sukuKata: 'Ke - se - jah - te - ra - an', emoji: '🌟', arti: 'Kondisi hidup makmur', warna: '#FF4081' },

        // 4. Kata Jadian Panjang 6 Suku Kata (5 contoh)
        { id: 96, pola: 'Kata Panjang 6 Suku Kata', kata: 'Tanggungjawaban', sukuKata: 'Tang - gung - ja - wab - an', emoji: '⚖️', arti: 'Kewajiban atas tindakan', warna: '#FF6B35' },
        { id: 97, pola: 'Kata Panjang 6 Suku Kata', kata: 'Ketidakpastian', sukuKata: 'Ke - ti - dak - pas - ti - an', emoji: '❓', arti: 'Kondisi belum pasti', warna: '#FFD600' },
        { id: 98, pola: 'Kata Panjang 6 Suku Kata', kata: 'Perkembangbiakan', sukuKata: 'Per - kem - bang - bi - ak - an', emoji: '🌱', arti: 'Proses bertambah banyak', warna: '#00BCD4' },
        { id: 99, pola: 'Kata Panjang 6 Suku Kata', kata: 'Ketidakseragaman', sukuKata: 'Ke - ti - dak - se - ra - gam - an', emoji: '🎨', arti: 'Perbedaan corak wujud', warna: '#00C896' },
        { id: 100, pola: 'Kata Panjang 6 Suku Kata', kata: 'Penyalahgunaan', sukuKata: 'Pe - nya - lah - gu - na - an', emoji: '⚠️', arti: 'Pemakaian secara salah', warna: '#29B6F6' }
      ]
    },

    {
      id: 'metode-6',
      nama: '6. Kelancaran Prosodi & Akses Makna Literal',
      deskripsi: '20 Contoh: Pembacaan Frasa Utuh, Intonasi Tanda Baca (?, !), Teks Pendek, & Kelancaran Prosodi',
      warna: '#00BCD4',
      emoji: '🎯',
      contoh: [
        // 1. Frasa Utuh 2-3 Kata (5 contoh)
        { id: 101, pola: 'Frasa 2 Kata Utuh', kata: 'Membaca Buku', sukuKata: 'Mem-ba-ca Bu-ku', emoji: '📚', arti: 'Aktivitas membuka dan memahami isi buku.', warna: '#00BCD4' },
        { id: 102, pola: 'Frasa 2 Kata Utuh', kata: 'Bermain Bersama', sukuKata: 'Ber-ma-in Ber-sa-ma', emoji: '🤝', arti: 'Beraktivitas gembira dengan teman.', warna: '#00C896' },
        { id: 103, pola: 'Frasa 2 Kata Utuh', kata: 'Menuntut Ilmu', sukuKata: 'Me-nun-tut Il-mu', emoji: '🎓', arti: 'Kewajiban mulia setiap muslim.', warna: '#29B6F6' },
        { id: 104, pola: 'Frasa 2 Kata Utuh', kata: 'Air Jernih', sukuKata: 'A-ir Jer-nih', emoji: '💧', arti: 'Sumber kesegaran badan.', warna: '#9C27B0' },
        { id: 105, pola: 'Frasa 2 Kata Utuh', kata: 'Pemandangan Indah', sukuKata: 'Pe-man-da-ngan In-dah', emoji: '🌄', arti: 'Keindahan alam ciptaan Allah.', warna: '#FF4081' },

        // 2. Intonasi Tanda Baca (?, !) (5 contoh)
        { id: 106, pola: 'Frasa Tanda Tanya (?)', kata: 'Siapa nama kamu?', sukuKata: 'Si-a-pa na-ma ka-mu?', emoji: '❓', arti: 'Intonasi menaik di akhir pertanyaan.', warna: '#FF6B35' },
        { id: 107, pola: 'Frasa Tanda Seru (!)', kata: 'Jagalah kebersihan!', sukuKata: 'Ja-ga-lah ke-ber-si-han!', emoji: '🧹', arti: 'Intonasi tegas mengimbau kebaikan.', warna: '#FFD600' },
        { id: 108, pola: 'Frasa Tanda Tanya (?)', kata: 'Di mana rumahmu?', sukuKata: 'Di ma-na ru-mah-mu?', emoji: '🏡', arti: 'Pertanyaan lokasi tempat tinggal.', warna: '#00BCD4' },
        { id: 109, pola: 'Frasa Tanda Seru (!)', kata: 'Mari sholat berjamaah!', sukuKata: 'Ma-ri sho-lat ber-ja-ma-ah!', emoji: '🕌', arti: 'Seruan kebaikan ibadah bersama.', warna: '#00C896' },
        { id: 110, pola: 'Frasa Tanda Tanya (?)', kata: 'Berapa jumlah buku ini?', sukuKata: 'Be-ra-pa jum-lah bu-ku i-ni?', emoji: '🔢', arti: 'Pertanyaan hitungan jumlah benda.', warna: '#29B6F6' },

        // 3. Teks Pendek (Pesan Moral & Islam) (5 contoh)
        { id: 111, pola: 'Teks Pendek (Pesan Moral)', kata: 'Rajin belajar membuat kita pintar.', sukuKata: 'Ra-jin be-la-jar mem-bu-at ki-ta pin-tar.', emoji: '🌟', arti: 'Kesungguhan belajar membuahkan kecerdasan.', warna: '#9C27B0' },
        { id: 112, pola: 'Teks Pendek (Pesan Islam)', kata: 'Membaca Al-Qur\'an menenangkan hati.', sukuKata: 'Mem-ba-ca Al-Qur-\'an me-ne-nang-kan ha-ti.', emoji: '📖', arti: 'Membaca wahyu Allah mendatangkan kedamaian.', warna: '#FF4081' },
        { id: 113, pola: 'Teks Pendek (Pesan Moral)', kata: 'Jujur adalah cermin anak sholeh.', sukuKata: 'Ju-jur a-da-lah cer-min a-nak sho-leh.', emoji: '✨', arti: 'Perilaku terpuji yang disukai Allah.', warna: '#FF6B35' },
        { id: 114, pola: 'Teks Pendek (Pesan Islam)', kata: 'Senyum adalah sedekah termudah.', sukuKata: 'Se-nyum a-da-lah se-de-kah ter-mu-dah.', emoji: '😊', arti: 'Kebaikan kecil bernilai pahala.', warna: '#FFD600' },
        { id: 115, pola: 'Teks Pendek (Pesan Islam)', kata: 'Kebersihan bagian dari iman.', sukuKata: 'Ke-ber-si-han ba-gi-an da-ri i-man.', emoji: '🧼', arti: 'Menjaga kesucian diri dan lingkungan.', warna: '#00BCD4' },

        // 4. Target Kecepatan Membaca Tanpa Jeda Mekanik (5 contoh)
        { id: 116, pola: 'Frasa Prosodi Beruntun', kata: 'Mentari pagi bersinar terang.', sukuKata: 'Men-ta-ri pa-gi ber-si-nar te-rang.', emoji: '🌅', arti: 'Suasana pagi hari yang segar dan hangat.', warna: '#00C896' },
        { id: 117, pola: 'Pesan Singkat Mandiri', kata: 'Hormati guru dan sayangi teman.', sukuKata: 'Hor-ma-ti gu-ru dan sa-yang-i te-man.', emoji: '🤝', arti: 'Akhlak terpuji dalam berinteraksi sehari-hari.', warna: '#29B6F6' },
        { id: 118, pola: 'Prosodi Intonasi Lengkap', kata: 'Apakah kamu sudah salat Dhuha?', sukuKata: 'A-pa-kah ka-mu su-dah sa-lat Dhu-ha?', emoji: '🕌', arti: 'Pertanyaan penuh perhatian tentang amalan sunnah.', warna: '#9C27B0' },
        { id: 119, pola: 'Latihan Kecepatan Tanpa Jeda', kata: 'Anak sholeh selalu berdoa sebelum makan.', sukuKata: 'A-nak sho-leh se-la-lu ber-do-a se-be-lum ma-kan.', emoji: '🤲', arti: 'Membaca lancar mengalir dengan kebiasaan baik.', warna: '#FF4081' },
        { id: 120, pola: 'Kelancaran Penuh Persiapan SD', kata: 'Belajar dengan gembira di TPQ Bintang Rabbani.', sukuKata: 'Be-la-jar deng-an gem-bi-ra di TPQ Bin-tang Rab-ba-ni.', emoji: '⭐', arti: 'Semangat menuntut ilmu di madrasah kesayangan.', warna: '#FF6B35' }
      ]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = { CALISTUNG_DATA };
