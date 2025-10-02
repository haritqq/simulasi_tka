// Daftar 20 soal pilihan ganda Matematika FIX

const QUESTIONS = [
  {
    id: 1,
    stimulus: [
      {
        type: 'text',
        content: 'Bentuk sederhana dari <img src="images/soal-mtk/soal 1.png" style="vertical-align: middle;"> '
      }
    ],
    choices: [
      '<img src="images/soal-mtk/1a.png" style="vertical-align: middle;">',
      '<img src="images/soal-mtk/1b.png" style="vertical-align: middle;">',
      '<img src="images/soal-mtk/1c.png" style="vertical-align: middle;">',
      '<img src="images/soal-mtk/1d.png" style="vertical-align: middle;">',
      '<img src="images/soal-mtk/1e.png" style="vertical-align: middle;">'],
    answer: 0
  },
  {
    id: 2,
    stimulus: [
      {
        type: 'text',
        content: 'Sistem air di pedesaan sering terkontaminasi oleh bakteri E. Coli. Karena bakteri mula-mula dalam sebuah tangki air adalah 100.000 dan populasi bakteri menjadi dua kali lipat setelah 4 hari, maka jumlah populasi bakteri setelah t hari dinyatakan oleh fungsi f(t) = 100.000 \cdot 2^{t/4}.'
      }
    ],
    text: 'Jumlah populasi bakteri akan mencapai 800.000 setelah … hari.',
    choices: ['30', '24', '18', '12', '4'],
    answer: 3
  },
  {
    id: 3,
    stimulus: [],
    text: 'Sherin membeli 5 buku, 2 pensil, dan 3 pena seharga Rp. 50.000,00. Doni membeli 4 buku, 3 pensil, dan 2 pena seharga Rp. 42.500,00. Harry membeli 3 buku, 1 pensil, dan 2 pena seharga Rp. 30.500,00. Jika Budi membeli 4 buku, 2 pensil, dan 2 pena di toko yang sama, Budi harus membayar sebesar ....',
    choices: ['Rp. 52.000,00', 'Rp. 45.000,00', 'Rp. 42.000,00', 'Rp. 40.000,00', 'Rp. 39.000,00'],
    answer: 3
  },
  {
    id: 4,
    stimulus: [
      {
        type: 'text',
        content: 'Husein berkeinginan menjual sepeda motor lamanya yang 100 cc dan menggantikannya dengan sepeda motor 150 cc. Harga sepeda motor 150 cc yang baru adalah 30 juta sedangkan yang bekas 28 juta. Uang tunai Husein pada tahun 2023 adalah 10 juta. Harga jual motor lama Husein pada tahun 2023 adalah 10 juta. Penyusutan harga motor bekas 150 cc dan 100 cc masing-masing adalah 20% dan 10% per tahun.'
      }
    ],
    text: 'Berdasarkan kondisi di atas, yang mungkin Husein lakukan adalah ....',
    choices: ['Membeli sepeda motor baru 150 cc pada tahun 2025', 'Membeli sepeda motor bekas 150 cc pada tahun 2023', 'Membeli sepeda motor bekas 150 cc pada tahun 2024', 'Membeli sepeda motor bekas 150 cc pada tahun 2025', 'Mengurungkan keinginannya membeli sepeda motor 150 cc karena sampai kapanpun uangnya tidak mencukupi'],
    answer: 2
  },
  {
    id: 5,
    stimulus: [
      {
        type: 'text',
        content: 'Diketahui data: 1, 1, 2, 2, 2, 2, 3, 3, x, y, dengan x dan y adalah dua bilangan bulat yang berbeda.'
      }
    ],
    text: 'Jika modus dari data tunggal tersebut adalah 2. Pernyataan berikut yang pasti benar adalah ....',
    choices: ['Jika x = 1 atau 3, maka haruslah y = 2', 'Nilai x dan y keduanya harus lebih dari 3', 'x atau y ada yang bernilai 2', 'Berapapun nilai x dan y tidak berpengaruh pada modus', 'x atau y harus sama dengan 3 dan yang lainnya adalah 1'],
    answer: 2
  },
  {
    id: 6,
    stimulus: [
      {
        type: 'text',
        content: 'Data: 4, 3, 5, x, 5, 6, 5, 4, 4, 3'
      }
    ],
    text: 'Jika modus dari data tersebut adalah 4 maka median dari data tersebut adalah ....',
    choices: ['3', '3,5', '4', '4,5', '5,5'],
    answer: 3
  },
  {
    id: 7,
    stimulus: [
      {
        type: 'text',
        content: 'Sudut elevasi 45°, Jarak horizontal = 16 marmer, Jarak mata ke lantai = 0,8 m, Panjang satu marmer = 1,2 m.'
      }
    ],
    text: 'Hasan memandang payung elektrik Mesjid Raya Baiturrahman dalam keadaan duduk bersila dengan sudut elevasi 45°. Jarak antara Hasan dan pangkal payung adalah 16 buah marmer. Jika jarak mata Hasan ke lantai 0,8 m dan ukuran panjang satu marmer adalah 1,2 m, maka tinggi payung elektrik tersebut adalah ....',
    choices: ['19,2 m', '19,8 m', '20,0 m', '20,2 m', '20,4 m'],
    answer: 2
  },
  {
    id: 8,
    stimulus: [
      {
        type: 'text',
        content: 'Matriks A = \begin{pmatrix} 3 & 0 \\ 2 & 5 \end{pmatrix}, B = \begin{pmatrix} m & -1 \\ n & 1 \end{pmatrix}, C = \begin{pmatrix} 0 & -1 \\ -15 & 5 \end{pmatrix}. A^T adalah transpose dari A.'
      }
    ],
    text: 'Jika A^T \cdot B = C, maka nilai 2m + n = \dots',
    choices: ['– 4', '– 1', '1', '5', '7'],
    answer: 0
  },
  {
    id: 9,
    stimulus: [],
    text: 'Seutas tali dipotong menjadi 8 bagian. Panjang masing-masing potongan tersebut mengikuti barisan geometri. Potongan tali yang paling pendek 4 cm dan potongan tali yang paling panjang 512 cm. Panjang tali semua adalah ....',
    choices: ['508 cm', '1.020 cm', '1.024 cm', '2.032 cm', '2.048 cm'],
    answer: 2
  },
  {
    id: 10,
    stimulus: [],
    text: 'Diketahui segitiga ABC siku-siku di B. Jika \cos A = \frac{10}{26}, nilai dari \csc A adalah ....',
    choices: ['\\frac{10}{26}', '\\frac{10}{24}', '\\frac{24}{26}', '\\frac{26}{24}', '\\frac{24}{10}'],
    answer: 3
  },
  {
    id: 11,
    stimulus: [],
    text: 'Seorang petugas perpustakaan akan membuat label buku-buku koleksi baru perpustakaan itu. Ia menggunakan kode N, dilanjutkan empat angka berbeda dari angka-angka 2, 3, 4, 5, 6, dan 7. Banyak label yang dapat disusun petugas perpustakaan tersebut adalah ....',
    choices: ['120', '180', '240', '250', '360'],
    answer: 3
  },
  {
    id: 12,
    stimulus: [],
    text: 'Dari 8 siswa putra dan 4 siswa putri akan diambil secara acak 3 orang siswa yang menjadi delegasi sekolah dalam suatu acara. Peluang terbentuknya delegasi yang ketiga anggotanya putra semua adalah ....',
    choices: ['\\frac{2}{55}', '\\frac{17}{55}', '\\frac{14}{55}', '\\frac{11}{55}', '\\frac{9}{55}'],
    answer: 2
  },
  {
    id: 13,
    stimulus: [],
    text: 'Di sebuah toko tersedia 1 lusin (12) lampu, 2 di antaranya rusak. Ada 3 orang akan membeli masing-masing 1 lampu. Peluang pembeli ketiga mendapatkan lampu rusak adalah ....',
    choices: ['\\frac{1}{6}', '\\frac{1}{3}', '\\frac{1}{2}', '\\frac{2}{3}', '1'],
    answer: 0
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'table',
        content: {
          headers: ['Berat badan (kg)', 'Frekuensi'],
          rows: [
            ['48', '12'],
            ['49', '5'],
            ['50', '8'],
            ['51', '15'],
            ['52', '9'],
            ['53', '15'],
            ['54', '7'],
            ['55', '9']
          ]
        }
      },
      {
        type: 'text',
        content: 'Pernyataan: (1) Jumlah siswa yang berat badannya kurang dari 50 kg adalah 17 siswa (2) Median data tersebut adalah 52 kg (3) Modus data tersebut adalah 51 kg dan 53 kg (4) Jangkauan (range) data tersebut adalah 5 kg'
      }
    ],
    text: 'Berdasarkan informasi di atas, pernyataan berikut yang bernilai **benar** adalah ....',
    choices: ['(1), (2) dan (3) saja benar', '(1) dan (3) saja benar', '(2) dan (4) saja benar', 'Hanya (4) saja yang benar', 'Semuanya benar'],
    answer: 1
  },
  {
    id: 15,
    stimulus: [],
    text: 'Perjalanan dari kota A ke kota B dilayani oleh 4 bus dan dari kota B ke kota C oleh 3 bus. Seseorang berangkat dari kota A ke kota C melalui B kemudian kembali lagi ke A juga melalui B. Jika saat kembali dari C ke A, ia **tidak mau menggunakan bus yang sama** dengan bus saat berangkat, maka perjalanan orang tersebut dapat dilakukan dalam … cara berbeda. ',
    choices: ['12', '36', '72', '96', '144'],
    answer: 3
  },
  {
    id: 16,
    stimulus: [
      {
        type: 'text',
        content: 'Diketahui matriks A = \begin{pmatrix} 2x & x+3 \\ 4 & 2x \end{pmatrix}'
      }
    ],
    text: 'Apabila \det A = 20, maka nilai x yang memenuhi adalah ....',
    choices: ['40', '20', '0', '– 20', '– 40'],
    answer: 2
  },
  {
    id: 17,
    stimulus: [],
    text: 'Susi menabung uang hasil kerja sambilannya sebesar Rp. 2.000.000 pada sebuah bank dengan bunga tunggal 8% per tahun. Saldo yang dimiliki Susi pada akhir tahun ke 4 adalah ....',
    choices: ['Rp. 2.064.000', 'Rp. 2.640.000', 'Rp. 3.000.000', '3.640.000', '3.750.000'],
    answer: 1
  },
  {
    id: 18,
    stimulus: [],
    text: 'Pak Ali menyimpan uang di koperasi sekolah sebesar Rp 10.000.000 dengan bunga majemuk 3% per tahun. Jumlah tabungan Pak Ali di akhir tahun ke 3 adalah ....',
    choices: ['Rp. 10.927.270', 'Rp. 10.270.927', 'Rp. 10.927.000', 'Rp. 10.270.000', 'Rp. 10.720.000'],
    answer: 2
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'text',
        content: 'Grafik fungsi kuadrat memotong sumbu X di (1,0) dan (3,0), serta memotong sumbu Y di (0,6).'
      }
    ],
    text: 'Persamaan grafik fungsi kuadrat tersebut adalah ....',
    choices: ['y = -2x^2 + 4x + 3', 'y = 2x^2 - 4x - 3', 'y = 2x^2 + 8x - 6', 'y = 2x^2 - 8x + 6', 'y = -2x^2 - 4x + 6'],
    answer: 3
  },
  {
    id: 20,
    stimulus: [],
    text: 'Diketahui f(x) = 2x^2 + 3x – 5. Koordinat titik potong terhadap sumbu X adalah ....',
    choices: ['(1,0) dan (2,5, 0)', '(1,0) dan (-2,5, 0)', '(-5,0) dan (0,5, 0)', '(5,0) dan (-0,5, 0)', '(-1,0) dan (2,5, 0)'],
    answer: 1
  }
];