// Daftar 20 soal pilihan ganda KIMIA FIX
// 

const QUESTIONS = [
  {
    id: 1,
    stimulus: [],
    text: 'Suatu unsur memiliki notasi <img src="images/soal-kma/soal-1.png" style="vertical-align: middle;"> Konfigurasi elektron dan letak unsur tersebut dalam sistem periodik berturut-turut adalah ....',
    choices: [
      '<img src="images/soal-kma/1a.png" style="vertical-align: middle;">',
      '<img src="images/soal-kma/1b.png" style="vertical-align: middle;">',
      '<img src="images/soal-kma/1c.png" style="vertical-align: middle;">',
      '<img src="images/soal-kma/1d.png" style="vertical-align: middle;">',
      '<img src="images/soal-kma/1e.png" style="vertical-align: middle;">'
    ],
    answer: 0 // A
  },
  {
    id: 2,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan notasi unsur berikut! P, Q, R berturut-turut nomor atomnya 11, 12, 13.'
      },
      {
        type: 'image',
        url: 'images/soal-kma/grafik-energi-ionisasi-2.png'
      }
    ],
    text: 'Grafik yang menunjukkan hubungan nomor atom dan energi pengionan pertama yang benar adalah ....',
    choices: ['A', 'B', 'C', 'D', 'E'],
    answer: 2 // C (Berdasarkan gambar, titik P(11), Q(12) turun, R(13) naik sedikit dari Q)
  },
  {
    id: 3,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/tabel-natrium-neon-klor-3.png'
      }
    ],
    text: 'Berdasarkan data di atas tentukan Benar atau Salah untuk setiap pernyataan berikut tentang unsur Natrium, Neon, dan Klor!',
    choices: [
      'Pernyataan 1: Benar, Pernyataan 2: Benar, Pernyataan 3: Benar',
      'Pernyataan 1: Benar, Pernyataan 2: Benar, Pernyataan 3: Salah',
      'Pernyataan 1: Salah, Pernyataan 2: Benar, Pernyataan 3: Benar',
      'Pernyataan 1: Salah, Pernyataan 2: Salah, Pernyataan 3: Salah',
      'Pernyataan 1: Benar, Pernyataan 2: Salah, Pernyataan 3: Benar'
    ],
    answer: 2 // C (Na & Ne (P3) salah, Cl (7) Benar, Ne (2,8) Benar)
  },
  {
    id: 4,
    stimulus: [
      {
        type: 'text',
        content: 'Minyak bumi terdiri atas ribuan senyawa hidrokarbon yang sebagian besar bersifat nonpolar dan memiliki titik didih yang berbeda-beda. Proses distilasi fraksional digunakan untuk memisahkan hidrokarbon berdasarkan titik didihnya. Perbedaan titik didih ini tidak hanya ditentukan oleh massa molekul, tetapi juga bentuk molekul, karena bentuk molekul memengaruhi gaya Van der Waals antarmolekul.'
      },
      {
        type: 'image',
        url: 'images/soal-kma/tabel-hidrokarbon-4.png'
      }
    ],
    text: 'Berdasarkan informasi tersebut, tentukan **Tepat** atau **Tidak Tepat** untuk setiap pernyataan mengenai titik didih dari isomer-isomer hidrokarbon berikut!',
    choices: [
      'Pernyataan 1: Tepat, Pernyataan 2: Tidak Tepat, Pernyataan 3: Tepat',
      'Pernyataan 1: Tidak Tepat, Pernyataan 2: Tepat, Pernyataan 3: Tepat',
      'Pernyataan 1: Tepat, Pernyataan 2: Tepat, Pernyataan 3: Tidak Tepat',
      'Pernyataan 1: Tidak Tepat, Pernyataan 2: Tidak Tepat, Pernyataan 3: Tepat',
      'Pernyataan 1: Tepat, Pernyataan 2: Tidak Tepat, Pernyataan 3: Tidak Tepat'
    ],
    answer: 0 // A (n-butana > 2-metilpropana (Tepat); 2,2-dimetilpropana < 2-metilbutana (Tidak Tepat); n-heksana > 3-metilpentana (Tepat))
  },
  {
    id: 5,
    stimulus: [
      {
        type: 'text',
        content: 'Produksi <img src="images/soal-kma/rumus-h2so4-5.png" style="vertical-align: middle;"> dilakukan melalui proses kontak yang berlangsung melalui reaksi kesetimbangan berikut: <img src="images/soal-kma/reaksi-kesetimbangan-5.png" style="vertical-align: middle;">. Untuk meningkatkan produksi <img src="images/soal-kma/rumus-h2so4-5.png" style="vertical-align: middle;"> dapat dilakukan dengan memanfaatkan reaksi kesetimbangan yang terjadi.'
      }
    ],
    text: 'Pernyataan mana saja yang menunjukkan upaya yang dapat dilakukan untuk mendapatkan <img src="images/soal-kma/rumus-so3-5.png" style="vertical-align: middle;"> sebanyak-banyaknya? Pilihlah jawaban yang benar! (Jawaban benar lebih dari satu)',
    choices: [
      'Memperbesar volume wadah',
      'Menambah <img src="images/soal-kma/rumus-o2-5.png" style="vertical-align: middle;"> ke dalam campuran reaksi',
      'Menurunkan tekanan gas',
      'Menurunkan suhu reaksi',
      'Mengeluarkan <img src="images/soal-kma/rumus-so3-5.png" style="vertical-align: middle;"> dari wadah'
    ],
    answer: [1, 3, 4] // Menambah O2 (reaktan), Menurunkan Suhu (eksoterm bergeser ke produk), Mengeluarkan SO3 (produk) - Jika ini adalah soal multiple choice kompleks, kuncinya biasanya adalah Menambah O2, Menurunkan Suhu (sesuai hukum Le Chatelier)
  },
  {
    id: 6,
    stimulus: [],
    text: 'Ion kalsium yang bergabung dengan ion fosfat akan membentuk senyawa kalsium fosfat dengan rumus kimia ....',
    choices: ['CaPO4', 'CaPO4 (opsi duplikat)', 'Ca3(PO4)2', 'Ca2(PO4)3', 'Ca2(PO4)2'],
    answer: 2 // C. Ca3(PO4)2 (Ca2+ dan PO4 3-)
  },
  {
    id: 7,
    stimulus: [
      {
        type: 'text',
        content: 'Diketahui persamaan reaksi : MgO (s) + H2SO4 (aq) → MgSO4 (aq) + H2O (l)'
      }
    ],
    text: 'Nama zat-zat pereaksi (reaktan) dari reaksi diatas adalah ....',
    choices: [
      'Magnesium oksida dan asam sulfat',
      'Mangan oksida dan asam sulfat',
      'Mangan oksida dan hidrogen sulfida',
      'Magnesium oksida dan hidrogen sulfida',
      'Magnesium monoksida dan asam sulfat'
    ],
    answer: 0 // A. Magnesium oksida (MgO) dan asam sulfat (H2SO4)
  },
  {
    id: 8,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/perbedaan-co2-h2o-8.png'
      }
    ],
    text: 'Pilihlah **dua pernyataan yang benar** yang menjelaskan perbedaan sifat molekul karbondioksida (CO2) dan molekul air (H2O)!',
    choices: [
      'Ikatan kovalen dalam CO2 adalah ikatan tunggal, sedangkan dalam H2O adalah ikatan rangkap dua.',
      'H2O memiliki titik didih lebih tinggi dari CO2 karena memiliki ikatan hidrogen, sedangkan CO2 tidak.',
      'Ikatan kovalen yang terbentuk antara atom H dan O pada H2O lebih kuat daripada ikatan rangkap dua pada CO2.',
      'Senyawa H2O memiliki titik leleh lebih rendah dari CO2.',
      'Ikatan kovalen dalam CO2 adalah ikatan rangkap, sedangkan dalam H2O adalah ikatan tunggal.'
    ],
    answer: [1, 4] // Opsi B (H2O ada ikatan H, titik didih tinggi) dan Opsi E (CO2 rangkap, H2O tunggal)
  },
  {
    id: 9,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/struktur-lewis-h3po4-9.png'
      }
    ],
    text: 'Pasangan elektron yang terbentuk secara kovalen koordinasi ditunjukkan pada nomor .... (Nomor atom H=1; O=8; P=15)',
    choices: ['1', '2', '3', '4', '5'],
    answer: 4 // E. 5 (Pasangan elektron yang disumbangkan P ke O tanpa berbagi dari O)
  },
  {
    id: 10,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/tabel-sifat-fisik-10.png'
      }
    ],
    text: 'Berdasarkan data tersebut, jenis ikatan yang terdapat pada senyawa P dan Q berturut-turut adalah ....',
    choices: [
      'Ion dan kovalen nonpolar',
      'Kovalen polar dan kovalen nonpolar',
      'Kovalen polar dan ion',
      'Kovalen polar dan hidrogen',
      'Hidrogen dan ion'
    ],
    answer: 2 // C. Kovalen polar (P: Titik leleh rendah, lelehan non-konduktor, larutan konduktor) dan Ion (Q: Titik leleh tinggi, lelehan dan larutan konduktor)
  },
  {
    id: 11,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/reaksi-kimia-11.png'
      }
    ],
    text: 'Perhatikan persamaan reaksi berikut! Berdasarkan persamaan reaksi di atas, bilangan oksidasi (biloks) atom Mn pada senyawa MnO2 dan MnSO4 berturut-turut adalah ....',
    choices: ['+4 dan +7', '+7 dan +2', '+4 dan +2', '+2 dan +4', '+7 dan +4'],
    answer: 2 // C. +4 dan +2 (MnO2 -> Mn = +4; MnSO4 -> SO4 = -2, Mn = +2)
  },
  {
    id: 12,
    stimulus: [
      {
        type: 'text',
        content: 'Dalam sebuah percobaan membuat es krim, 150 gram gula tebu (C12H22O11, Mr=342 gr/mol) dilarutkan dalam 200 gram air. Jika volume larutan total menjadi 250 mL setelah gula larut sempurna.'
      }
    ],
    text: 'Konsentrasi molaritas (M) gula dalam larutan es krim tersebut adalah sekitar....',
    choices: ['1,00 M', '1,75 M', '2,19 M', '2,50 M', '3,00 M'],
    answer: 1 // B. 1,75 M (M = (150/342) / (250/1000) = 0,438 / 0,25 ≈ 1,75 M)
  },
  {
    id: 13,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/tabel-sifat-koligatif-13.png'
      }
    ],
    text: 'Data hasil eksperimen menunjukkan sifat koligatif larutan nonelektrolit. Berdasarkan data di atas, larutan yang memiliki titik didih tertinggi adalah ....',
    choices: [
      'Larutan K',
      'Larutan L',
      'Larutan M',
      'Larutan N',
      'Larutan O'
    ],
    answer: 4 // E. Larutan O (Memiliki konsentrasi molalitas paling besar (0,3 m) sehingga kenaikan titik didihnya paling besar)
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/tabel-ph-asam-basa-14.png'
      }
    ],
    text: 'Hasil pengujian terhadap lima larutan asam-basa disajikan dalam tabel. Pernyataan yang benar berdasarkan data pada tabel tersebut adalah ....',
    choices: [
      'Larutan 1 adalah larutan basa',
      'Larutan 3 dan 5 merupakan larutan penyangga',
      'Larutan 4 merupakan larutan asam kuat',
      'Larutan 2 merupakan larutan basa kuat',
      'Larutan 5 adalah larutan asam lemah'
    ],
    answer: 2 // C. Larutan 4 memiliki pH = 1, yang merupakan ciri larutan asam kuat.
  },
  {
    id: 15,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/grafik-titrasi-15.png'
      }
    ],
    text: 'Kurva titrasi di atas menunjukkan titrasi antara ....',
    choices: [
      'Basa kuat dengan asam kuat',
      'Basa lemah dengan asam kuat',
      'Asam kuat dengan basa kuat',
      'Asam lemah dengan basa kuat',
      'Asam kuat dengan basa lemah'
    ],
    answer: 4 // E. Asam kuat dengan basa lemah (Dimulai dari pH ~1-2 (asam kuat), titik ekivalen pada pH < 7, dan diakhiri dengan penambahan basa lemah)
  },
  {
    id: 16,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/reaksi-redoks-16.png'
      }
    ],
    text: 'Perhatikan persamaan reaksi redoks berikut! Zat yang mengalami oksidasi dan reduksi berturut-turut adalah ....',
    choices: [
      'Al dan FeO',
      'FeO dan Al',
      'Al dan Fe',
      'Fe dan FeO',
      'Al dan Al2O3'
    ],
    answer: 0 // A. Al dan FeO (Al: 0 -> +3 (Oksidasi); FeO: Fe +2 -> 0 (Reduksi))
  },
  {
    id: 17,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/sel-volta-17.png'
      }
    ],
    text: 'Gambar di atas merupakan contoh sel volta yang bekerja berdasarkan reaksi spontan. Jika elektroda Ag menjadi katoda dan elektroda Zn menjadi anoda. Pernyataan yang **tepat** mengenai reaksi yang terjadi adalah ....',
    choices: [
      'Potensial sel reaksi adalah Esel = -1,56 volt',
      'Notasi sel: Zn(s) | Zn2+(aq) || Ag+(aq) | Ag(s)',
      'Reaksi yang terjadi di katoda adalah Zn(s) → Zn2+(aq) + 2e-',
      'Elektroda Zn bertambah massa dan Ag berkurang massa',
      'Elektron mengalir dari Ag ke Zn'
    ],
    answer: 1 // B. Notasi sel sudah benar (Anoda || Katoda)
  },
  {
    id: 18,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/elektrolisis-18.png'
      }
    ],
    text: 'Perhatikan gambar sel elektrolisis lelehan KI dengan elektroda C berikut! Jika arus listrik 10 Ampere dialirkan melalui lelehan KI selama 1930 detik (Ar K = 39, I = 127). Massa endapan yang terbentuk di katoda adalah ....',
    choices: [
      '0,39 gram',
      '3,9 gram',
      '7,8 gram',
      '12,7 gram',
      '39 gram'
    ],
    answer: 1 // B. 3,9 gram (W = (Ar/n) * (I*t / 96500) = (39/1) * (10*1930 / 96500) ≈ 3.9 gram)
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/hidrokarbon-19.png'
      }
    ],
    text: 'Perhatikan struktur senyawa karbon berikut! Nama IUPAC dari senyawa tersebut adalah ....',
    choices: [
      '3,4-dimetil-3-propil-1-heksena',
      '3-metil-4-propil-1-heksena',
      '4-etil-3-metil-1-heptena',
      '3-etil-4-metil-1-heptena',
      '4-etil-3-metil-2-heptena'
    ],
    answer: 2 // C. 4-etil-3-metil-1-heptena (rantai terpanjang 7, rangkap 1 di C1, metil di C3, etil di C4)
  },
  {
    id: 20,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/senyawa-karbon-20.png'
      }
    ],
    text: 'Perhatikan beberapa reaksi senyawa karbon berikut! Pasangan reaksi adisi, substitusi, dan eliminasi berturut-turut ditunjukkan oleh nomor ....',
    choices: [
      '(1), (2), dan (3)',
      '(2), (3), dan (1)',
      '(3), (1), dan (2)',
      '(3), (2), dan (1)',
      '(1), (3), dan (2)'
    ],
    answer: 2 // C. (3) Adisi (rangkap 2 ke jenuh), (1) Substitusi (CnH2n+2 ganti H dengan X), (2) Eliminasi (CnH2n+2 ke rangkap 2)
  }
];