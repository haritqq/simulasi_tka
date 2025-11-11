// Daftar 20 soal pilihan ganda KIMIA FIX
// 

const QUESTIONS = [
  {
    id: 1,
    stimulus: [],
    text: 'Suatu unsur memiliki notasi <img src="images/soal-kma/soal-1.png" style="vertical-align: middle;"> Konfigurasi elektron dan letak unsur tersebut dalam sistem periodik berturut-turut adalah ....',
    choices: [
      '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>5</sup>, Golongan VIIA, periode 4',
      '[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup>, Golongan VIIB, periode 4',
      '[Ar] 3d<sup>10</sup> 4s2 4p<sup>5</sup>, Golongan VB, periode 4',
      '[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>6</sup>, Golongan VIIA, periode 4',
      '[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>3</sup>, Golongan VA, periode 4'
    ],
    answer: 0 // A
  },
  {
    id: 2,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan notasi unsur berikut! <br> P, Q, R berturut-turut nomor atomnya 11, 12, 13.'
      },
      {
        type: 'image',
        url: 'images/soal-kma/soal-2.png'
      }
    ],
    text: 'Grafik yang menunjukkan hubungan nomor atom dan energi pengionan pertama yang benar adalah ....',
    choices: ['A', 'B', 'C', 'D', 'E'],
    answer: 0 // A (Berdasarkan gambar, titik P(11), Q(12) turun, R(13) naik sedikit dari Q)
  },
  {
    id: 3,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/soal-3.png'
      }
    ],
    text: 'Berdasarkan data di atas tentukan Benar atau Salah untuk setiap pernyataan berikut tentang unsur Natrium, Neon, dan Klor!',
    choices: [
      'Pernyataan 1: Benar, <br>Pernyataan 2: Benar, <br>Pernyataan 3: Benar',
      'Pernyataan 1: Benar, <br>Pernyataan 2: Benar, <br>Pernyataan 3: Salah',
      'Pernyataan 1: Salah, <br>Pernyataan 2: Benar, <br>Pernyataan 3: Benar',
      'Pernyataan 1: Salah, <br>Pernyataan 2: Salah, <br>Pernyataan 3: Salah',
      'Pernyataan 1: Benar, <br>Pernyataan 2: Salah, <br>Pernyataan 3: Benar'
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
        url: 'images/soal-kma/soal-4.png'
      }
    ],
    text: 'Berdasarkan informasi tersebut, tentukan <b>Tepat</b> atau <b>Tidak Tepat</b> untuk setiap pernyataan mengenai titik didih dari isomer-isomer hidrokarbon berikut!',
    choices: [
      'Pernyataan 1: Tepat, <br>Pernyataan 2: Tidak Tepat, <br>Pernyataan 3: Tepat',
      'Pernyataan 1: Tidak Tepat, <br>Pernyataan 2: Tepat, <br>Pernyataan 3: Tepat',
      'Pernyataan 1: Tepat, <br>Pernyataan 2: Tepat, <br>Pernyataan 3: Tidak Tepat',
      'Pernyataan 1: Tidak Tepat, <br>Pernyataan 2: Tidak Tepat, <br>Pernyataan 3: Tepat',
      'Pernyataan 1: Tepat, <br>Pernyataan 2: Tidak Tepat, <br>Pernyataan 3: Tidak Tepat'
    ],
    answer: 0 // A (n-butana > 2-metilpropana (Tepat); 2,2-dimetilpropana < 2-metilbutana (Tidak Tepat); n-heksana > 3-metilpentana (Tepat))
  },
  {
    id: 5,
    stimulus: [
      {
        type: 'text',
        content: 'Produksi <img src="images/soal-kma/soal-5_1.png" style="vertical-align: middle;"> dilakukan melalui proses kontak yang berlangsung melalui reaksi kesetimbangan berikut: <img src="images/soal-kma/soal-5_2.png" style="vertical-align: middle;">. Untuk meningkatkan produksi <img src="images/soal-kma/soal-5_3.png" style="vertical-align: middle;"> dapat dilakukan dengan memanfaatkan reaksi kesetimbangan yang terjadi. <br><br> 1. Memperbesar volume wadah <br>2. Menambah O<sub>2</sub> ke dalam campuran reaksi <br>3. Menurunkan tekanan gas <br>4. Menurunkan suhu reaksi <br>5. Mengeluarkan SO<sub>3</sub> dari wadah</ol>'
      }
    ],
    text: 'Pernyataan mana saja yang menunjukkan upaya yang dapat dilakukan untuk mendapatkan <img src="images/soal-kma/soal-5_4.png" style="vertical-align: middle;"> sebanyak-banyaknya? Pilihlah jawaban yang benar! (Jawaban benar lebih dari satu)',
    choices: [
      '1,3,4',
      '1,2,4',
      '2,3,5',
      '2,4,5',
      '3,4,5'
    ],
    answer: 3 // D. 2,4,5 (Tambah O2, turunkan suhu (eksoterm), keluarkan SO3)
  },
  {
    id: 6,
    stimulus: [],
    text: 'Ion kalsium yang bergabung dengan ion fosfat akan membentuk senyawa kalsium fosfat dengan rumus kimia ....',
    choices: [
      'CaPO4', 
      'CaPO<sub>4</sub>', 
      'Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>', 
      'Ca<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub>', 
      'Ca<sub>2</sub>(PO<sub>4</sub>)<sub>2</sub>'],
    answer: 2 // C. Ca3(PO4)2 (Ca2+ dan PO4 3-)
  },
  {
    id: 7,
    stimulus: [
      {
        type: 'text',
        content: 'Diketahui persamaan reaksi : MgO <sub>(s)</sub> + H<sub>2</sub>SO<sub>4 (aq)</sub> → MgSO<sub>4</sub> (aq) + H<sub>2</sub>O <sub>(l)</sub>'
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
        type: 'text',
        content: 'Molekul karbondioksida (CO<sub>2</sub>) dan molekul air (H<sub>2</sub>O) sama-sama tersusun dari atom-atom yang berikatan kovalen. namun, kedua molekul ini memiliki sifat fisis yang berbeda secara signifikan. <br><br> 1.Ikatan kovalen dalam CO2 adalah ikatan tunggal, sedangkan dalam H2O adalah ikatan rangkap dua. <br> 2. H2O memiliki titik didih lebih tinggi dari CO2 karena memiliki ikatan hidrogen, sedangkan CO2 tidak.<br> 3. Ikatan kovalen yang terbentuk antara atom H dan O pada H2O lebih kuat daripada ikatan rangkap dua pada CO2.<br> 4. Senyawa H2O memiliki titik leleh lebih rendah dari CO2.<br> 5. Ikatan kovalen dalam CO2 adalah ikatan rangkap, sedangkan dalam H2O adalah ikatan tunggal.'
      }
    ],
    text: 'Pilihlah <b>pernyataan yang benar</b> yang menjelaskan perbedaan sifat molekul karbondioksida (CO2) dan molekul air (H2O)!',
    choices: [
      '1,2,3',
      '2,4,5',
      '1,3,4',
      '2,3,5',
      '1,4,5'
    ],
    answer: 3 // D = 2,3,5
  },
  {
    id: 9,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/soal-9.png'
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
        type: 'text',
        content: 'Perhatikan data sifat fisik dari dua buah zat berikut!<br> <img src="images/soal-kma/soal-10.png" style="vertical-align: middle;">',
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
        type: 'text',
        content: 'Suatu senyawa hidrokarbon mempunyai rumus struktur:<br> <img src="images/soal-kma/soal-11.png" style="vertical-align: middle;">'
      }
    ],
    text: 'Nama senyawa yang merupakan isomer posisi dari senyawa hidrokarbon tersebut adalah ....',
    choices: [
      '2 Metil - 2 pentena',
      '2 Metil - 3 pentena',
      '3 Metil - 1 pentena',
      '2,3 Metil - 2 butena',
      '2,3 Metil - 3 butena'
    ],
    answer: 3 //D
  },
  {
    id: 12,
    stimulus: [],
    text: 'Dalam sebuah percobaan membuat es krim, 150 gram gula tebu (C12H22O11, Mr=342 gr/mol) dilarutkan dalam 200 gram air. Jika volume larutan total menjadi 250 mL setelah gula larut sempurna, maka konsentrasi molaritas (M) gula dalam larutan es krim tersebut adalah sekitar....',
    choices: [
      '1,00 M',
      '1,75 M',
      '2,19 M',
      '2,50 M',
      '3,00 M'
    ],
    answer: 1 // B
  },
  {
    id: 13,
    stimulus: [
      {
        type: 'text',
        content: 'diketahui persamaan reaksi asam basa Bronsted-Lowry berikut: <br>(1) C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> ⇌ H<sub>3</sub>O<sup>+</sup> + C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup> <br>(2) CH<sub>3</sub>COOH + HNO<sub>3</sub> ⇌ CH<sub>3</sub>COOH<sub>2</sub><sub>+</sub> + NO<sub>3</sub><sup>-</sup>'
      }
    ],
    text: 'Dari persamaan reaksi di atas yang merupakan pasangan asam-basa Brosted-Lowry adalah',
    choices: [
      'CH<sub>3</sub>COOH<sub>2+</sub> dan NO<sub>3-</sub>',
      'CH<sub>3</sub>COOH dan NO<sub>3-</sub>',
      'C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> dan H<sub>2</sub>O',
      'CH<sub>3</sub>COOH dan HNO<sub>3</sub>',
      'C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> dan C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>'
    ],
    answer: 4 //E
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'text',
        content: 'Suatu larutan penyangga dibuat dengan mencampurkan 500ml larutan CH<sub>3</sub>COOH 0,1 M )ka=10<sup>-5</sup>) dan 500ml larutan NaOH 0,05 M. pilihlah dua pernyataan yang benar yang menggabmarkan sifat larutan yang dihasilkan!'
      }
    ],
    text: '1. pH larutan adalah 5<br>2. Rasio mol asam lemah terhadap basa konjugasinya adalah 1:1<br> 3. pH larutan adalah 5 - log 1,5<br>4. Larutan ini tidak dapat menahan perubahan pH karena asam lemahnya tidak bersisa<br>5. Larutan ini mengandung CH<sub>3</sub>COOH dan CH<sub>3</sub>COONa',
    choices: [
      '1, 2, 5',
      '1, 2, 3',
      '2, 3, 5',
      '3, 4, 5',
      '1, 4, 5'
    ],
    answer: 0 // 1,2,5
  },
  {
    id: 15,
    stimulus: [
      {
        type: 'text',
        content: 'Gambar berikut merupakan reaksi antar 2 gram pualam dengan 100 mL lauran HCl. <br> <img src="images/soal-kma/soal-15.png" style="vertical-align: middle;">'
      }
    ],
    text: 'Laju reaksi yang hanya dipengaruhi oleh konsentrasi adalah nomor ....',
    choices: [
      '1 terhadap 2',
      '1 terhadap 3',
      '2 terhadap 3',
      '2 terhadap 4',
      '4 terhadap 5'
    ],
    answer: 3 //D
  },
  {
    id: 16,
    stimulus: [
      {
        type: 'text',
        content: 'Reaksi pembakaran sempurna gas propana (C3H8) adalah: C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g) → 3CO<sub>2</sub>(g) + 4H<sub>2</sub>O(g) ; ΔH = -2220 kJ/mol. <br><br> Tentukan <b>Benar</b> atau <b>Salah</b> untuk setiap pernyataan berikut! <br><br> img src="images/soal-kma/soal-16.png" style="vertical-align: middle;">'
      }
    ],
    text: 'Perhatikan gambar percobaan korosi berikut! Korosi paling cepat terjadi pada kondisi tabung....',
    choices: [
      'benar, salah, benar',
      'benar, salah, salah',
      'salah, benar, salah',
      'salah, salah, benar',
      'benar, benar, benar'
    ],
    answer: 0 // A = benar,salah,benar
  },
  {
    id: 17,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/soal-17.png' 
      }
    ],
    text: '<br>',
    choices: [
      'benar, salah, benar',
      'benar, salah, salah',
      'salah, benar, salah',
      'salah, salah, benar',
      'benar, benar, benar'
    ],
    answer: 2 // salah,benar,benar
  },
  {
    id: 18,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/soal-18.png' 
      }
    ],
    text: '<br>',
    choices: [
      '1, 3, 1, 6',
      '3, 3, 2, 6',
      '2, 3, 2, 6',
      '2, 3, 2, 3',
      '6, 2, 3, 1'
    ],
    answer: 1 // B. 3,9 gram
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-kma/soal-19.png' 
      }
    ],
    text: 'Data yang berhubungan dengan tepat ditunjukan oleh pasangan nomor ....',
    choices: [
      '1 dan 2',
      '1 dan 3',
      '2 dan 4',
      '3 dan 5',
      '4 dan 5'
    ],
    answer: 1 // B
  },
  {
    id: 20,
    stimulus: [
      {
        type: 'text',
        content: 'Terdapat empat notol zat yang berisi dua jenis reaktan dengan dua variasi berkonsentrasi berbeda untuk masing masing reaktan. <br> <img src="images/soal-kma/soal-20.png" style="vertical-align: middle;"> <br><br> Murir tersebut melakukan perhitungan untuk menentukan larutan dari botol mana yang akan digunakan dan menentukan jumlah larutannya untuk menghasilkan jumlah zat yang diinginkan.'
      }
    ],
    text: 'Komposisi mana saya yang dapat menghasilkan tepat 1,435 gram padatan AgCI ? <br>Tentukan <b>Tepat</b> atau <b>Tidak Tepat</b> pada pilihan komposisi berikut! <br> (Ar Ag = 108;Ar N = 14; Ar O = 16; Ar Na = 23; Ar N = 14; Cl = 35,5) <br> img src="images/soal-kma/soal-20-2.png" style="vertical-align: middle;">',
    choices: [
      'tidak tepat semua',
      'tepat semua',
      'tidak tepat, tepat, tepat',
      'tidak tepat, tepat, tidak tepat',
      'tepat, tidak tepat, tepat'
    ],
    answer: 3 // tidak tepat, tepat, tidak tepat
  }
];