// Daftar 20 soal pilihan ganda Sosiologi FIX
// Stimulus pada soal nomor 9 masih belum rapi, gunakan unorderlist jika perlu, cari di google

const QUESTIONS = [
  {
    id: 1,
    stimulus: [
      {
        type: 'text',
        content: 'Di suatu daerah, masyarakatnya memiliki kebiasaan tidak baik. Sampah dibuang sembarangan, saluran air tersumbat, sering banjir, dan terkesan kumuh. Pemerintah daerah setempat meminta peneliti untuk melakukan kajian bagaimana strategi yang harus ditempuh agar masyarakat memiliki kesadaran dalam menjaga kebersihan lingkungan. Strategi ini akan dituangkan dalam prioritas program kerja pemerintah daerah.'
      }
    ],
    text: 'Fungsi sosiologi dalam menangani masalah tersebut adalah ....',
    choices: ['Membantu pemerintah melakukan pembangunan sosial', 'Mengevaluasi proses pembangunan sosial masyarakat', 'Membantu dalam perencanaan pembangunan sosial', 'Memberikan data orang yang berperilaku tidak baik', 'Menjaga kebersihan dan kenyamanan lingkungan'],
    answer: 2
  },
  {
    id: 2,
    stimulus: [],
    text: 'Dalam memenuhi kebutuhan hidupnya, manusia membutuhkan orang lain. Suatu bentuk interaksi sosial yang lebih luas, yang diatur oleh norma-norma sosial, antara dua orang atau lebih yang memiliki posisi dan peran sosial menunjukkan adanya ....',
    choices: ['Fakta sosial', 'Gejala sosial', 'Realitas sosial', 'Hubungan sosial', 'Fenomena sosial'],
    answer: 1
  },
  {
    id: 3,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan ilustrasi bacaan di bawah ini! <br><br>Anita gemar mengoleksi jam bermerek. Dia seringkali menunjukkan koleksi jam miliknya di akun sosial media. Berdasarkan cerita Anita, perilakunya memiliki motif agar dia diakui sebagai sebagai anak gaul yang selalu mengikuti mode.'
      }
    ],
    text: 'Berdasarkan bacaan di atas, analisislah perilaku Anita termasuk paradigma sosiologi yang ....',
    choices: ['Paradigma fakta sosial', 'Paradigma definisi sosial', 'Paradigma perilaku sosial', 'Paradigma konflik sosial', 'Paradigma penyimpangan sosial'],
    answer: 1
  },
  {
    id: 4,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah artikel di bawah ini dengan cermat! <br><br>Ani hendak berbelanja alat tulis. Sebelum dia memutuskan dimana akan membeli alat tulis, dia memilih toko mana yang menawarkan harga paling murah dengan kualitas barang yang setara. Dia mengecek harga alat tulis yang hendak dibeli melalui katalog daring sehingga dapat membantu dia untuk memutuskan pilihannya. Akhirnya dia memilih untuk membeli alat tulis di toko C, dengan pertimbangan toko tersebut telah menawarkan harga paling rendah dengan kualitas barang yang baik.',
      }
    ],
    text: 'Berdasarkan artikel tersebut, tipe tindakan sosial yang dilakukan Ani sesuai dengan teori Max Weber yaitu ....',
    choices: ['Tindakan Rasionalitas Instrumental', 'Tindakan Rasional Nilai', 'Tindakan Afektif', 'Tindakan Tradisional', 'Tindakan Sosial'],
    answer: 0
  },
  {
    id: 5,
    stimulus: [],
    text: 'Seorang mahasiswa melakukan penelitian mengenai evaluasi sebuah program beasiswa. Dari hasil penelitian tersebut diketahui bahwa implementasi beasiswa kurang efektif. Jenis penelitian tersebut tergolong penelitian ....',
    choices: ['Dasar', 'Terapan', 'Historik', 'Kualitatif', 'Kuantitatif'],
    answer: 1
  },
  {
    id: 6,
    stimulus: [],
    text: 'Seorang peneliti hendak melakukan penelitian mengenai kemiskinan di Jakarta. Namun, karena kesulitan mendapatkan data primer, peneliti tersebut memutuskan untuk menggunakan data sekunder. Data sekunder yang tepat untuk digunakan dalam contoh kasus tersebut adalah ....',
    choices: ['Survei', 'Observasi', 'Wawancara', 'Studi Pustaka', 'FGD (Focus Group Discussion)'],
    answer: 3
  },
  {
    id: 7,
    stimulus: [],
    text: 'Bentuk akomodasi bermacam-macam. Salah satu bentuk akomodasi berupa usaha untuk mempertemukan keinginan-keinginan dari pihak-pihak yang berselisih demi tercapainya persetujuan bersama disebut ....',
    choices: ['Kompromi', 'Arbitrase', 'Mediasi', 'Konsiliasi', 'Toleransi'],
    answer: 3
  },
  {
    id: 8,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan tabel berikut ini! <br><br><img src="images/soal-sosiologi-8.png" alt="soal sosiologi 8"><br><br>'
      }
    ],
    text: 'Lembaga sosial yang ada pada tabel tersebut termasuk jenis ....',
    choices: ['Lembaga keluarga dan Lembaga agama', 'Lembaga politik dan Lembaga pendidikan', 'Lembaga ekonomi dan Lembaga pendidikan', 'Lembaga keluarga dan Lembaga politik', 'Lembaga agama dan Lembaga pendidikan'],
    answer: 2
  },
  {
    id: 9,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan ilustrasi data berikut ini! <br>Komposisi Penduduk di Kota A <br>- Suku Batak: 20%; Suku Jawa: 30%, Suku Betawi: 20%, Suku Bugis: 20%, Suku Minangkabau: 10%. <br>- Jumlah penduduk laki-laki: 15.000 jiwa & Jumlah penduduk perempuan: 20.000 jiwa. <br>- Penduduk beragama Islam: 50%, Katolik: 15%, Protestan: 15%, Buddha: 10%, Hindu: 5%, Aliran kepercayaan: 5%" <br>-Berdasarkan mata pencaharian, Pegawai negeri: 5%, Pegawai swasta: 10%, Pedagang: 30%, Petani: 30%, Buruh: 10%, Peternak: 15%"'
      }
    ],
    text: 'Data di atas menginformasikan kondisi sosial masyarakat berdasarkan ....',
    choices: ['Pelapisan sosial', 'Mobilitas sosial', 'Diferensiasi sosial', 'Kompetisi sosial', 'Kecemburuan sosial'],
    answer: 2
  },
  {
    id: 10,
    stimulus: [],
    text: 'Seseorang yang dijatuhi sanksi adat akan dikenai pengucilan besar kemungkinan telah melanggar norma. Contohnya Edy sering memakai kemeja kotak-kotak, dipadukan dengan rok bermotif bunga. Dapat dikatakan bahwa Edy telah melakukan pelanggaran terhadap ....',
    choices: ['Cara (usage)', 'Kebiasaan (folkways)', 'Tata kelakuan (mores)', 'Adat istiadat (custom)', 'Norma agama'],
    answer: 3
  },
  {
    id: 11,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan norma-norma berikut! <br>1) Norma kepercayaan, <br>2) Norma kesopanan, <br>3) Norma kesusilaan, <br>4) Norma hukum.'
      }
    ],
    text: 'Yang termasuk norma hubungan antarpribadi ialah ....',
    choices: ['1 dan 2', '1 dan 3', '1 dan 4', '2 dan 3', '2 dan 4'],
    answer: 1
  },
  {
    id: 12,
    stimulus: [
      {
        type: 'text',
        content: 'Apabila seorang pria berjalan dengan seorang wanita hendaknya atau seharusnya pria berjalan sebelah luar, artinya berjalan pada bagian yang berdekatan dengan lalu lintas sedangkan yang wanita berjalan di samping kanan atau kirinya tergantung kepada arah lalu lintas.'
      }
    ],
    text: 'Peranan yang dilakukan tersebut berkaitan dengan norma ....',
    choices: ['Kesopanan', 'Hukum', 'Kesusilaan', 'Komunitas', 'Masyarakat'],
    answer: 0
  },
  {
    id: 13,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan-pernyataan berikut! <br> 1) Memiliki pola interaksi, <br> 2) Adanya kesadaran sebagai bagian dari kelompok yang bersangkutan, <br> 3) Pihak yang berinteraksi mendefinisikan dirinya sebagai anggota kelompok, <br> 4) Ada faktor pengikat yang dimiliki bersama oleh anggota-anggota kelompok, <br> 5) Pihak yang berinteraksi didefinisikan oleh orang lain sebagai anggota kelompok, <br> 6) Ada hubungan timbal balik antara anggota yang satu dengan anggota yang lainnya dalam kelompok itu. <br>'
      }
    ],
    text: 'Dari pernyataan-pernyataan tersebut di atas, yang menjadi syarat suatu kelompok sosial adalah nomor ....',
    choices: ['1), 2), dan 3)', '4), 5), dan 6)', '1), 3), dan 5)', '2), 4), dan 6)', '3), 5), dan 6)'],
    answer: 3
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan-pernyataan berikut! <br>1) Kesamaan keturunan, <br>2) Meneruskan keturunan, <br>3) Kesamaan kepentingan, <br>4) Mempertahankan hidup, <br>5) Kedekatan geografis tempat tinggal, <br>6) Meningkatkan efisien dan efektifitas kerja.'
      }
    ],
    text: 'Berdasarkan pernyataan-pernyataan tersebut di atas, yang menjadi faktor pembentuk suatu kelompok sosial adalah nomor ....',
    choices: ['1), 2) dan 3)', '4), 5) dan 6)', '1), 3) dan 5)', '2), 4) dan 6)', '1), 2) dan 4)'],
    answer: 2
  },
  {
    id: 15,
    stimulus: [
      {
        type: 'text',
        content: 'Gapensi atau Gabungan Pengusaha Seluruh Indonesia merupakan suatu kelompok sosial'
      }
    ],
    text: 'Berdasarkan faktor pembentuknya, kelompok sosial tersebut terbentuk atas dasar ....',
    choices: ['Kesamaan nasib', 'Kesamaan keturunan', 'Kesamaan kepentingan', 'Kedekatan geografis daerah asal', 'Kedekatan geografis tempat tinggal'],
    answer: 2
  },
  {
    id: 16,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan-pernyataan berikut! <br>1) Memiliki pola interaksi <br>2) Adanya kesadaran sebagai bagian dari kelompok yang bersangkutan<br>3) Pihak yang berinteraksi mendefinisikan dirinya sebagai anggota kelompok<br>4) Ada faktor pengikat yang dimiliki bersama oleh anggota-anggota kelompok<br>5) Pihak yang berinteraksi didefinisikan oleh orang lain sebagai anggota kelompok<br>6) Ada hubungan timbal balik antara anggota yang satu dengan anggota yang lainnya dalam kelompok itu<br>'
      }
    ],
    text: 'Hubungan yang dekat antara para anggota kelompok yang membentuk suatu ikatan batin secara murni dan alamiah sesuai dengan yang telah dikemukakan oleh Ferdinand Tonnies, hal ini merupakan pengertian dari ....',
    choices: ['1), 2), dan 3)', '4), 5), dan 6)', '1), 3), dan 5)', '2), 4), dan 6)', '3), 5), dan 6)'],
    answer: 3
  },
  {
    id: 17,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan ciri-ciri berikut! <br>1) Tiap individu memiliki kesadaran dan rasa memiliki kelompok<br>2) Tiap anggota kelompok memiliki kebebasan tidak menaati norma kelompok<br>3) Kelompok sosial hanya akan terbentuk akibat kesamaan ideologi antaranggota<br>4) Tiap anggota kelompok diikat oleh kesamaan kepentingan guna mencapai tujuan kelompok<br>5) Tiap anggota kelompok menjalin hubungan sosial sehingga terbentuk solidaritas kelompok.'
      }
    ],
    text: 'Perubahan sosial dapat terjadi karena adanya hal-hal berikut ini, kecuali ....',
    choices: ['1), 2), dan 3)', '1), 4), dan 5)', '2), 3), dan 4)', '2), 4), dan 5)', '3), 4), dan 5)'],
    answer: 1
  },
  {
    id: 18,
    stimulus: [      
      {
        type: 'text',
        content: 'Masyarakat Batak terdiri atas berbagai marga, seperti Panjaitan, Hutagalung, dan Simanjutak. Masyarakat Batak yang memiliki marga sama, biasanya akan membentuk kelompok.'
      }
    ],
    text: 'Latar belakang pembentukan kelompok sosial tersebut adalah ....',
    choices: ['Kesamaan keturunan', 'Keinginan mempertahankan hidup', 'Kesamaan daerah asal', 'Perasaan senasib dan sepenanggungan', 'Kesamaan kepentingan'],
    answer: 0
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan ciri-ciri berikut!<br>1) Keterlibatan anggota dalam kelompok masih kurang<br>2) Tiap anggota kelompok berupaya mengenal satu sama lain<br>3) Anggota kelompok cenderung merasa cemas dan mengalami kebingungan.'
      }
    ],
    text: 'Ciri-ciri tersebut menunjukkan perkembangan kelompok pada tahap ....',
    choices: ['Forming', 'Norming', 'Storming', 'Performing', 'Adjourning'],
    answer: 0
  },
  {
    id: 20,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan-pernyataan berikut! <br>(1) Pemberian beasiswa bagi siswa berprestasi.<br>(2) Fenomena ketidaksetaraan gender dalam dunia kerja.<br>(3) Peningkatan angka pengangguran akibat pandemi Covid-19.<br>(4) Demonstrasi penolakan kenaikan harga bahan bakar minyak.<br>(5) Seorang remaja yang lebih sering menghabiskan waktu di kamar.'
      }
    ],
    text: 'Berdasarkan pernyataan-pernyataan tersebut, kondisi sosial yang merupakan permasalahan sosial dalam masyarakat ditunjukkan oleh pernyataan nomor ....',
    choices: ['(1), (2), dan (3)', '(1), (3), dan (5)', '(2), (3), dan (4)', '(2), (4), dan (5)', '(3), (4), dan (5)'],
    answer: 2
  }
];