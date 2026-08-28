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
  ]
};

if (typeof module !== 'undefined') module.exports = { CALISTUNG_DATA };
