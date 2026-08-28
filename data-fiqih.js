// ==========================================
// DATA FIQIH - TPQ Plus Bintang Rabbani
// ==========================================

const FIQIH_DATA = {
  rukunIslam: [
    { nomor: 1, nama: 'Syahadat', arab: 'الشَّهَادَة', emoji: '☝️', penjelasan: 'Mengucapkan dua kalimat syahadat dengan ikhlas dan keyakinan.', teks: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ', warna: '#FF6B35' },
    { nomor: 2, nama: 'Sholat', arab: 'الصَّلَاة', emoji: '🙏', penjelasan: 'Mendirikan sholat wajib 5 waktu dalam sehari semalam.', teks: 'أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ', warna: '#FFD600' },
    { nomor: 3, nama: 'Zakat', arab: 'الزَّكَاة', emoji: '💰', penjelasan: 'Mengeluarkan sebagian harta untuk fakir miskin dan yang berhak.', teks: 'وَآتُوا الزَّكَاةَ', warna: '#00C896' },
    { nomor: 4, nama: 'Puasa', arab: 'الصَّوْم', emoji: '🌙', penjelasan: 'Menahan lapar, haus, dan nafsu dari terbit fajar hingga terbenam matahari.', teks: 'كُتِبَ عَلَيْكُمُ الصِّيَامُ', warna: '#29B6F6' },
    { nomor: 5, nama: 'Haji', arab: 'الْحَجّ', emoji: '🕋', penjelasan: 'Menunaikan ibadah haji ke Baitullah bagi yang mampu secara fisik dan finansial.', teks: 'وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ', warna: '#9C27B0' }
  ],
  rukunIman: [
    { nomor: 1, nama: 'Iman kepada Allah', emoji: '☝️', penjelasan: 'Percaya dan yakin bahwa Allah itu Esa, Pencipta seluruh alam semesta.', warna: '#FF6B35' },
    { nomor: 2, nama: 'Iman kepada Malaikat', emoji: '👼', penjelasan: 'Percaya adanya malaikat utusan Allah yang taat menjalankan tugas-tugas-Nya.', warna: '#FFD600' },
    { nomor: 3, nama: 'Iman kepada Kitab-Kitab Allah', emoji: '📖', penjelasan: 'Percaya kitab suci seperti Taurat, Zabur, Injil, dan Al-Qur\'an.', warna: '#00C896' },
    { nomor: 4, nama: 'Iman kepada Rasul Allah', emoji: '🕌', penjelasan: 'Percaya nabi dan rasul utusan Allah yang menyampaikan wahyu.', warna: '#29B6F6' },
    { nomor: 5, nama: 'Iman kepada Hari Kiamat', emoji: '🌍', penjelasan: 'Percaya hari akhir seluruh alam semesta hancur dan manusia dibangkitkan.', warna: '#9C27B0' },
    { nomor: 6, nama: 'Iman kepada Qada & Qadar', emoji: '✨', penjelasan: 'Percaya semua takdir baik dan buruk berasal dari Allah.', warna: '#FF4081' }
  ],
  wudhu: [
    { nomor: 1, emoji: '🤲', nama: 'Membaca Niat & Basmalah', arab: 'نَوَيْتُ الْوُضُوءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى', arti: 'Niat berwudhu untuk menghilangkan hadas kecil fardhu karena Allah Ta\'ala.', ulang: 1 },
    { nomor: 2, emoji: '🙌', nama: 'Mencuci Telapak Tangan', arab: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ', arti: 'Membasuh kedua pergelangan tangan hingga sela-sela jari.', ulang: 3 },
    { nomor: 3, emoji: '💧', nama: 'Berkumur-kumur', arab: 'الْمَضْمَضَةُ', arti: 'Memasukkan air ke dalam mulut untuk dibersihkan.', ulang: 3 },
    { nomor: 4, emoji: '👃', nama: 'Membasuh Hidung', arab: 'الِاسْتِنْشَاقُ', arti: 'Memasukkan sedikit air ke lubang hidung lalu mengeluarkannya kembali.', ulang: 3 },
    { nomor: 5, emoji: '😊', nama: 'Membasuh Wajah', arab: 'غَسْلُ الْوَجْهِ', arti: 'Membasuh seluruh bagian wajah dari tumbuhnya rambut kepala hingga dagu.', ulang: 3 },
    { nomor: 6, emoji: '💪', nama: 'Membasuh Tangan sampai Siku', arab: 'غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ', arti: 'Membasuh tangan kanan terlebih dahulu lalu tangan kiri hingga ke siku.', ulang: 3 },
    { nomor: 7, emoji: '👆', nama: 'Mengusap Kepala & Telinga', arab: 'مَسْحُ الرَّأْسِ وَالْأُذُنَيْنِ', arti: 'Mengusap sebagian kepala dengan air dan membersihkan daun telinga luar dalam.', ulang: 1 },
    { nomor: 8, emoji: '🦶', nama: 'Mencuci Kaki', arab: 'غَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ', arti: 'Membasuh kaki kanan kemudian kaki kiri dari ujung jari hingga mata kaki.', ulang: 3 }
  ],
  sholat: [
    { nomor: 1, emoji: '🧍', nama: 'Berdiri Tegak & Niat', arab: 'الْقِيَامُ وَالنِّيَّةُ', arti: 'Menghadap kiblat dengan berdiri tegak bagi yang mampu disertai niat dalam hati.' },
    { nomor: 2, emoji: '🙌', nama: 'Takbiratul Ihram', arab: 'تَكْبِيرَةُ الْإِحْرَامِ', arti: 'Mengangkat kedua tangan sejajar telinga sambil mengucap "Allahu Akbar".' },
    { nomor: 3, emoji: '📖', nama: 'Bersedekap', arab: 'الْقِرَاءَةُ', arti: 'Meletakkan tangan kanan di atas tangan kiri di bawah dada sambil membaca Al-Fatihah.' },
    { nomor: 4, emoji: '🙇', nama: 'Ruku\'', arab: 'الرُّكُوعُ', arti: 'Membungkukkan badan membentuk sudut 90 derajat dengan kedua tangan di lutut.' },
    { nomor: 5, emoji: '🧍', nama: 'I\'tidal', arab: 'الِاعْتِدَالُ', arti: 'Berdiri tegak kembali setelah ruku\' dengan membaca doa i\'tidal.' },
    { nomor: 6, emoji: '🕌', nama: 'Sujud Pertama', arab: 'السُّجُودُ الْأَوَّلُ', arti: 'Menempelkan dahi, hidung, kedua telapak tangan, lutut, dan jari kaki pada sajadah.' },
    { nomor: 7, emoji: '🪑', nama: 'Duduk di Antara Dua Sujud', arab: 'الْجُلُوسُ بَيْنَ السَّجْدَتَيْنِ', arti: 'Bangun dari sujud pertama lalu duduk di atas telapak kaki kiri dengan kaki kanan tegak.' },
    { nomor: 8, emoji: '🕌', nama: 'Sujud Kedua', arab: 'السُّجُودُ الثَّانِي', arti: 'Melakukan sujud yang kedua kalinya persis seperti gerakan sujud pertama.' },
    { nomor: 9, emoji: '🧍', nama: 'Berdiri Rakaat Selanjutnya', arab: 'الْقِيَامُ لِلرَّكْعَةِ الثَّانِيَةِ', arti: 'Bangun dari sujud kedua untuk berdiri tegak memulai rakaat berikutnya.' },
    { nomor: 10, emoji: '🤲', nama: 'Duduk Tasyahhud Awal', arab: 'التَّشَهُّدُ الْأَوَّلُ', arti: 'Duduk pada rakaat kedua sholat yang lebih dari 2 rakaat sambil membaca doa tasyahhud.' },
    { nomor: 11, emoji: '🤲', nama: 'Duduk Tasyahhud Akhir', arab: 'التَّشَهُّدُ الْأَخِيرُ', arti: 'Duduk tasyahhud pada rakaat terakhir dengan memiringkan kaki kiri di bawah kaki kanan.' },
    { nomor: 12, emoji: '👋', nama: 'Salam', arab: 'التَّسْلِيمُ', arti: 'Memalingkan wajah ke kanan terlebih dahulu sambil mengucapkan salam, lalu ke kiri.' }
  ],
  doaHarian: [
    { nama: 'Doa Sebelum Tidur', arab: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', latin: 'Bismika allahumma amuutu wa ahyaa', arti: 'Dengan nama-Mu ya Allah aku mati dan aku hidup.', emoji: '😴', situasi: 'Dibaca ketika hendak tidur malam.' },
    { nama: 'Doa Bangun Tidur', arab: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', latin: 'Alhamdu lillahil ladzii ahyaanaa ba\'da maa amaatanaa wa ilaihin nusyuur', arti: 'Segala puji bagi Allah yang telah menghidupkan kami kembali setelah mematikan kami, dan hanya kepada-Nya kami kembali.', emoji: '🌞', situasi: 'Dibaca sesaat setelah membuka mata di pagi hari.' },
    { nama: 'Doa Sebelum Makan', arab: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ', latin: 'Allahumma baarik lanaa fiimaa rozaqtanaa waqinaa \'adzaaban naar', arti: 'Ya Allah berkahilah kami atas rezeki yang telah Engkau berikan dan peliharalah kami dari siksa api neraka.', emoji: '🍔', situasi: 'Dibaca sebelum menyantap makanan atau minuman.' },
    { nama: 'Doa Sesudah Makan', arab: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ', latin: 'Alhamdu lillahil ladzii ath\'amanaa wasaqoanaa waja\'alanaa muslimiin', arti: 'Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami orang-orang muslim.', emoji: '🤲', situasi: 'Dibaca sesudah makan dan minum.' },
    { nama: 'Doa Masuk Kamar Mandi', arab: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', latin: 'Allahumma innii a\'uudzu bika minal khubutsi wal khobaa-its', arti: 'Ya Allah sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.', emoji: '🚽', situasi: 'Dibaca saat melangkahkan kaki kiri masuk WC.' },
    { nama: 'Doa Keluar Kamar Mandi', arab: 'غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي', latin: 'Ghufroonakal hamdu lillahil ladzii adz-haba \'annil adzaa wa \'aafaanii', arti: 'Aku mohon ampunan-Mu, segala puji bagi Allah yang telah menghilangkan penyakit dari tubuhku dan menyehatkanku.', emoji: '🧼', situasi: 'Dibaca saat melangkah keluar WC dengan kaki kanan.' },
    { nama: 'Doa Masuk Rumah', arab: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا', latin: 'Allahumma innii as-aluka khoirol maulaji wakhoirol makhroji bismillahi walajnaa', arti: 'Ya Allah sesungguhnya aku memohon kebaikan tempat masuk dan tempat keluar, dengan nama Allah kami masuk.', emoji: '🏠', situasi: 'Dibaca saat memasuki rumah.' },
    { nama: 'Doa Keluar Rumah', arab: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', latin: 'Bismillahi tawakkaltu \'alallahi laa haula walaa quwwata illa billah', arti: 'Dengan nama Allah aku berserah diri kepada Allah, tiada daya dan upaya melainkan dengan pertolongan Allah.', emoji: '🚶', situasi: 'Dibaca ketika hendak bepergian keluar rumah.' },
    { nama: 'Doa Masuk Masjid', arab: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', latin: 'Allahummaftah li abwaaba rohmatik', arti: 'Ya Allah bukakanlah bagiku pintu-pintu rahmat-Mu.', emoji: '🕌', situasi: 'Dibaca ketika hendak masuk masjid dengan kaki kanan.' },
    { nama: 'Doa Keluar Masjid', arab: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', latin: 'Allahumma innii as-aluka min fadhlik', arti: 'Ya Allah sesungguhnya aku memohon keutamaan dan rezeki dari-Mu.', emoji: '🚶', situasi: 'Dibaca ketika melangkah keluar masjid dengan kaki kiri.' },
    { nama: 'Doa Naik Kendaraan', arab: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ', latin: 'Subhaanal ladzii sakh-khoro lanaa haadzaa wamaa kunnaa lahuu muqriniin wa innaa ilaa robbinaa lamunqolibuun', arti: 'Maha Suci Allah yang telah menundukkan kendaraan ini bagi kami padahal kami tiada mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.', emoji: '🚗', situasi: 'Dibaca ketika naik kendaraan darat, laut, maupun udara.' },
    { nama: 'Doa Belajar', arab: 'رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا', latin: 'Robbi zidnii \'ilman warzuqnii fahman', arti: 'Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan dan berilah aku karunia pemahaman.', emoji: '📖', situasi: 'Dibaca sebelum mulai belajar pelajaran apa saja.' },
    { nama: 'Doa Berpakaian', arab: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا هُوَ لَهُ', latin: 'Allahumma innii as-aluka min khoirihii wakhoiri maa huwa lah', arti: 'Ya Allah aku memohon kebaikan pakaian ini dan kebaikan yang ada padanya.', emoji: '👕', situasi: 'Dibaca saat menggunakan baju bersih.' },
    { nama: 'Doa Bercermin', arab: 'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي', latin: 'Allahumma kamaa hassanta kholqii fahassin khuluqii', arti: 'Ya Allah sebagaimana Engkau telah memperbagus penciptaan fisikku, maka perbaguslah pula akhlakku.', emoji: '🪞', situasi: 'Dibaca ketika bercermin melihat wajah.' },
    { nama: 'Doa untuk Orang Tua', arab: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', latin: 'Robbighfir lii waliwaalidayya warhamhumaa kamaa robbayaanii shoghiiroo', arti: 'Ya Tuhanku, ampunilah dosaku dan dosa kedua orang tuaku, dan sayangilah mereka sebagaimana mereka mendidikku sewaktu kecil.', emoji: '👨‍👩‍👧', situasi: 'Dibaca setiap selesai sholat wajib mendoakan ayah dan ibu.' },
    { nama: 'Doa Hujan', arab: 'اللَّهُمَّ صَيِّبًا نَافِعًا', latin: 'Allahumma shoyyiban naafi\'an', arti: 'Ya Allah turunkanlah hujan yang membawa manfaat.', emoji: '🌧️', situasi: 'Dibaca ketika hujan mulai turun.' },
    { nama: 'Doa Setelah Hujan', arab: 'مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ', latin: 'Muthirnaa bifadhlillahi warohmatih', arti: 'Kita diberi hujan karena karunia dan rahmat Allah.', emoji: '☀️', situasi: 'Dibaca ketika hujan sudah reda.' },
    { nama: 'Doa Bersin', arab: 'الْحَمْدُ لِلَّهِ', latin: 'Alhamdulillah', arti: 'Segala puji bagi Allah.', emoji: '🤧', situasi: 'Dibaca oleh orang yang bersin.' },
    { nama: 'Doa Qunut Subuh', arab: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ', latin: 'Allahummahdiinii fiiman hadait wa \'aafinii fiiman \'aafait', arti: 'Ya Allah tunjukilah aku di antara orang-orang yang Engkau beri petunjuk, dan sehatkanlah aku...', emoji: '🌅', situasi: 'Dibaca pada rakaat kedua sholat Subuh saat i\'tidal.' },
    { nama: 'Doa Setelah Sholat', arab: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ', latin: 'Astaghfirullahal \'adhiim alladzii laa ilaaha illa huwal hayyul qoyyuum wa atuubu ilaih', arti: 'Aku memohon ampun kepada Allah Yang Maha Agung, tiada Tuhan selain Dia Yang Hidup Kekal terus menerus mengurus makhluk-Nya...', emoji: '🤲', situasi: 'Dibaca sesudah selesai salam sholat fardhu.' }
  ],
  sholatWaktu: [
    { nama: 'Subuh', waktu: 'Fajar - Matahari Terbit', rakaat: 2, emoji: '🌅', warna: '#FF6B35' },
    { nama: 'Dzuhur', waktu: 'Siang Hari', rakaat: 4, emoji: '☀️', warna: '#FFD600' },
    { nama: 'Ashar', waktu: 'Sore Hari', rakaat: 4, emoji: '🌤️', warna: '#00C896' },
    { nama: 'Maghrib', waktu: 'Matahari Terbenam', rakaat: 3, emoji: '🌇', warna: '#29B6F6' },
    { nama: 'Isya', waktu: 'Malam Hari', rakaat: 4, emoji: '🌙', warna: '#9C27B0' }
  ],
  magicWords: [
    { arab: 'السَّلَامُ عَلَيْكُمْ', latin: 'Assalamualaikum', arti: 'Semoga keselamatan tercurah kepadamu.', situasi: 'Diucapkan ketika bertemu sesama muslim atau masuk rumah.', emoji: '🤝', warna: '#FF6B35' },
    { arab: 'بِسْمِ اللَّهِ', latin: 'Bismillah', arti: 'Dengan nama Allah.', situasi: 'Diucapkan setiap kali akan memulai kegiatan baik.', emoji: '📝', warna: '#FFD600' },
    { arab: 'الْحَمْدُ لِلَّهِ', latin: 'Alhamdulillah', arti: 'Segala puji bagi Allah.', situasi: 'Diucapkan sebagai rasa syukur atas nikmat atau bersin.', emoji: '🤲', warna: '#00C896' },
    { arab: 'سُبْحَانَ اللَّهِ', latin: 'Subhanallah', arti: 'Maha Suci Allah.', situasi: 'Diucapkan ketika melihat keindahan alam atau kebesaran Allah.', emoji: '🍃', warna: '#29B6F6' },
    { arab: 'مَا شَاءَ اللَّهُ', latin: 'Masya Allah', arti: 'Atas kehendak Allah.', situasi: 'Diucapkan ketika kagum melihat prestasi orang lain atau hal indah.', emoji: '❤️', warna: '#9C27B0' },
    { arab: 'أَسْتَغْفِرُ اللَّهِ', latin: 'Astaghfirullah', arti: 'Aku memohon ampun kepada Allah.', situasi: 'Diucapkan ketika melakukan kesalahan atau beristighfar.', emoji: '😢', warna: '#FF4081' },
    { arab: 'إِنْ شَاءَ اللَّهِ', latin: 'Insya Allah', arti: 'Jika Allah menghendaki.', situasi: 'Diucapkan ketika berjanji melakukan sesuatu di hari esok.', emoji: '📅', warna: '#00BCD4' },
    { arab: 'جَزَاكَ اللَّهُ خَيْرًا', latin: 'Jazakallah Khair', arti: 'Semoga Allah membalasmu dengan kebaikan.', situasi: 'Diucapkan ketika berterima kasih atas bantuan orang lain.', emoji: '🎁', warna: '#FF6B35' }
  ],
  adab: [
    { nama: 'Adab kepada Orang Tua', emoji: '👨‍👩‍👧', pointAdab: ['Patuh dan taat pada nasihat baik mereka.','Berbicara dengan tutur kata yang lemah lembut (tidak membentak).','Mendoakan kebaikan bagi dunia dan akhirat mereka setiap hari.','Membantu pekerjaan rumah tangga semampu kita.','Mencium tangan mereka ketika hendak pergi dan pulang sekolah.'], warna: '#FF6B35' },
    { nama: 'Adab kepada Guru', emoji: '👩‍🏫', pointAdab: ['Mendengarkan dengan tenang saat guru menjelaskan pelajaran.','Memberi salam dengan sopan ketika bertemu guru di mana saja.','Mengerjakan tugas atau PR yang diberikan dengan bersungguh-sungguh.','Berbicara santun dan tidak memotong penjelasan guru.','Menghargai ilmu yang diajarkan dan berterima kasih.'], warna: '#FFD600' },
    { nama: 'Adab di Masjid', emoji: '🕌', pointAdab: ['Melangkah masuk menggunakan kaki kanan sambil membaca doa masuk masjid.','Menjaga kebersihan dan ketenangan dengan tidak berlari-lari di dalam masjid.','Melakukan sholat tahiyyatul masjid terlebih dahulu jika sempat.','Mendengarkan khutbah atau ceramah dengan tenang tanpa mengobrol.','Keluar dari masjid dengan mendahulukan kaki kiri sambil membaca doa keluar.'], warna: '#00C896' },
    { nama: 'Adab Makan dan Minum', emoji: '🍽️', pointAdab: ['Mencuci tangan terlebih dahulu agar bersih dari kuman dan kotoran.','Membaca basmalah dan doa sebelum makan dan minum.','Menggunakan tangan kanan saat menyuap makanan dan memegang cangkir.','Makan sambil duduk dengan tenang dan rapi, tidak sambil berdiri.','Tidak meniup makanan/minuman panas serta menghabiskannya tanpa sisa.'], warna: '#29B6F6' },
    { nama: 'Adab Menggunakan Gadget', emoji: '📱', pointAdab: ['Meminta izin terlebih dahulu kepada orang tua sebelum menyalakan HP.','Menggunakan HP secukupnya sesuai waktu yang telah disepakati (misal 30 menit).','Membuka aplikasi edukasi, belajar hijaiyah/calistung yang bermanfaat.','Tidak bermain game di waktu belajar, ibadah sholat, atau istirahat malam.','Meletakkan HP ketika ada orang yang mengajak kita berbicara secara langsung.'], warna: '#9C27B0' },
    { nama: 'Adab di Jalan', emoji: '🚶', pointAdab: ['Berjalan dengan tenang di sisi kiri jalan atau trotoar yang aman.','Mengucapkan salam saat berpapasan dengan teman atau guru.','Menyingkirkan batu, duri, atau sampah di jalanan agar tidak membahayakan orang lain.','Menyeberang jalan di tempat yang aman sambil melihat kanan kiri.','Tidak bercanda berlebihan atau berlarian di jalan raya.'], warna: '#FF4081' },
    { nama: 'Adab Berbicara', emoji: '💬', pointAdab: ['Mengucapkan perkataan yang jujur, baik, dan sopan.','Menghindari perkataan kotor, mengejek, atau berbohong.','Berbicara dengan suara yang tidak terlalu keras namun jelas terdengar.','Menyimak dengan baik ketika orang lain sedang berbicara kepada kita.','Meminta maaf jika tanpa sengaja mengucapkan kalimat yang menyakiti hati.'], warna: '#00BCD4' }
  ]
};

if (typeof module !== 'undefined') module.exports = { FIQIH_DATA };
