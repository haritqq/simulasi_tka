// Daftar 20 soal pilihan ganda Ekonomi lanjutan FIX

const QUESTIONS= [
  {
    id: 1,
    stimulus: [
      {
        type: 'text',
        content: 'Ilmu ekonomi adalah ilmu yang mempelajari ....'
      }
    ],
    choices: ['Kegagalan bidang pertanian dalam menghasilkan barang dan jasa.', 'Kedidak mampuan usaha industri untuk memproduksi barang dan jasa.', 'Cara masyarakat mengelola sumber-sumber daya yang langka.', 'Usaha-usaha manusia untuk mempelajari bagaimana mencukupkan sumber daya yang tersedia untuk memenuhi kebutuhan', 'Bagaiman manusia mendapatkan barang dan jasa dalam memenuhi kebutuhan tertentu'],
    answer: 3
  },
  {
    id: 2,
      stimulus: [
        {
          type: 'text',
          content: 'Seorang pelaku ekonomi memilih menggunakan uang yang ia miliki untuk memperluas usahanya dibandingkan menabung dibank, biaya yang terjadi karena Keputusan disebut biaya ....'
        }
      ],
    choices: ['Total', 'Tetap', 'Variabel', 'Rugi', 'Peluang'],
    answer: 4
  },
  {
    id: 3,
    stimulus: [
        {
          type: 'text',
          content: 'Sebuah pabrik batu bata menggunakan tanah sebagai bahan bakunya. Berdasarkan faktor produksinya, bahan baku tersebut termasuk contoh faktor produksi ....'
        }
      ],
    choices: ['Alam', 'Modal', 'Keahlian', 'Tenaga kerja', 'Nonekonomi'],
    answer: 0
  },
  {
    id: 4,
    stimulus: [
        {
          type: 'text',
          content: 'Salah satu jenis factor produksi adalah tenaga kerja. Pemilik faktor produksi tenaga kerja mendapatkan balas jasa dalam bentuk ....'
        }
      ],
    choices: ['Upah', 'Sewa', 'Bunga', 'Modal', 'Keuntungan'],
    answer: 0
  },
  {
    id: 5,
    stimulus: [
        {
          type: 'text',
          content: 'Terdapat kegiatan produksi yang dilakukan dengan langsung mengambil hasil dari alam. Kegiatan produksi ini disebut kegiatan ....'
        }
      ],
    choices: ['Jasa', 'Agraris', 'Semijasa', 'Ekstraktif', 'Konsumtif'],
    answer: 3
  },
  {
    id: 6,
    stimulus: [
        {
          type: 'text',
          content: 'Berbagai hal yang dapat memengaruhi tingkah laku dan kinerja Perusahaan dalam pasar. Pernyataan tersebut merupakan pengertian dari ....'
        }
      ],
    choices: ['Pasar', 'Struktur pasar', 'Pengaruh pasar', 'Mekanisme pasar', 'Aturan pemerintah'],
    answer: 1
  },
  {
    id: 7,
    stimulus: [
        {
          type: 'text',
          content: 'Fungsi dari permintaan tas adalah QD=890-2P. Jika barang yang diminta 450, maka tas dihargai ....'
        }
      ],
    choices: ['280', '260', '230', '225', '220'],
    answer: 4
  },
  {
    id: 8,
    stimulus: [
        {
          type: 'text',
          content: 'Seorang ahli menyatakan pendapatannya mengenai pengertian uang. Menurutnya, uang adalah sesuatu yang bisa diterima dalam pembayaran untuk mendapatkan barang. Ahli yang dimaksud adalah ....'
        }
      ],
    choices: ['Adam Smith', 'Paul Samuelson', 'Edward Shapiro', 'John Maynard Keynes', 'Dennis Holme Robertson'],
    answer: 1
  },
  {
    id: 9,
    stimulus: [
        {
          type: 'text',
          content: 'Perdagangan saham di bursa efek dapat mendapatkan keuntungan atau kerugian. Keuntungan atas jual-beli saham disebut ....'
        }
      ],
    choices: ['Coupon', 'Dividen', 'Capital gain', 'Capital loss', 'Bad debt loss'],
    answer: 2
  },
  {
    id: 10,
    stimulus: [
        {
          type: 'text',
          content: 'OJK memiliki tugas-tugas tertentu. Berikut ini yang tidak termasuk tugas OJK adalah mengatur dan mengawasi kegiatan .…'
        }
      ],
    choices: ['Jasa keuangan disektor perbankan', 'Jasa keuangan disektor pasar modal', 'Jasa keuangan disektor perasuransian', 'Jasa keuangan disektor dana pensiun', 'Keegiatan bank agar tidak membiayai kegiatan terorisme'],
    answer: 4
  },
  {
    id: 11,
    stimulus: [
        {
          type: 'text',
          content: 'Berikut yang termasuk peran BUMN dalam perekonomian Indonesia antara lain sebagai ....'
        }
      ],
    choices: ['Mitra koperasi', 'Penanaman modal', 'Pelaksanaa pelayanan publik', 'Penambah produksi nasional', 'Pemacu pendapatan nasional'],
    answer: 2
  },
  {
    id: 12,
        stimulus: [
      {
        type: 'text',
        content: 'Berikut yang <b>bukan</b> pernyataan yang tepat mengenai peran badan usaha milik daerah dalam perekonomian adalah ....'
      }
    ],
    choices: ['Salah satu sumber pendapatan asli daerah', 'Membantu pengembangan usaha kecil dan koperasi', 'Memberikan kesempatan berusaha bagi masyarakat', 'Ikut berpastisipasi dalam membangun perekonomian daerah', 'Melaksanakan Pembangunan daerah ataupun pemabngunan nasional'],
    answer: 4
  },
  {
    id: 13,
    stimulus: [
        {
          type: 'text',
          content: 'Berikut yang merupakan komponen pendapatan nasional yang siap dibelanjakan untuk melakukan kegiatan konsumsi adalah pendapatan ....'
        }
      ],
    choices: ['Regional', 'Per kapita', 'Disposable', 'Nasional bruto', 'Domestik bruto'],
    answer: 2
  },
  {
    id: 14,
    stimulus: [
        {
          type: 'text',
          content: 'Bunga yang dikategorikan sebagai bunga atas komponen pendapatan nasional atas dasar pendekatan pendapatan adalah bunga yang dibayar oleh ....'
        }
      ],
    choices: ['Pemerintah', 'Kementerian', 'Pemerintah daerah', 'Perusahaan dikurangi bunga yang diterima perusahaan', 'Konsumen karena menggunakan uang untuk menutup konsumsinya'],
    answer: 3
  },
  {
    id: 15,
    stimulus: [
        {
          type: 'text',
          content: 'Penduduk dalam usia kerja, baik yang bekerja maupun yang tidak bekerja, biasa disebut sebagai kelompok usia produktif. Kelompok dalam ketenagakerjaan ini disebut kelompok ....'
        }
      ],
    choices: ['Pekerja', 'Tenaga kerja', 'Pencari kerja', 'Angkatan kerja', 'Bukan angkatan kerja'],
    answer: 3
  },
  {
    id: 16,
    stimulus: [
        {
          type: 'text',
          content: 'Ketika akan mencari pekerjaan dan telah menjadi seorang pekerja, yang perlu ditingkatkan oleh seorang pekerja dalam persaingan kerja adalah ….'
        }
      ],
    choices: ['Kejujuran', 'Ikut kursus', 'Kerja keras', 'Keterampilan', 'Mencari perhatian atasan'],
    answer: 3
  },
  {
    id: 17,
    stimulus: [
        {
          type: 'text',
          content: 'Jika pendapatan konsumen naik, sementara harga barang yang dibeli  tetap akan terjadi ....'
        }
      ],
    choices: ['Penurunan permintaan', 'Kenaikan surplus', 'Penurunan jumlah barang yang diminta', 'Kenaikan jumlah barang yang diminta', 'Semua jawaban hampir salah'],
    answer: 1
  },
  {
    id: 18,
    stimulus: [
        {
          type: 'text',
          content: 'Terdapat beberapa jenis inflasi jika dilihat dari tingkat keparahanya. Salah satunya adalah inflasi yang berkisar anatara 10-30 persen per tahun. Inflasi ini termasuk kategori inflasi ….'
        }
      ],
    choices: ['Ringan', 'Sedang', 'Berat', 'Sangat berat', 'Darurat'],
    answer: 3
  },
  {
    id: 19,
    stimulus: [
        {
          type: 'text',
          content: 'Kebijakan fiscal merupakan suatu langkah yang dapat dilakukan pemerintah guna mengatasi masalah-masalah perekonomian. Berikut yang merupakan contoh kebijakan fiscal adalah ….'
        }
      ],
    choices: ['Menjual surat berharga', 'Menaikan tarif pemungutan pajak', 'Membeli surat berharga', 'Melonggarkan pemberian kredit', 'Menaikan Cadangan tunai bank umum'],
    answer: 3
  },
  {
    id: 20,
    stimulus: [
        {
          type: 'text',
          content: 'Salah satu tujuan kebijakan moneter adalah memperbaiki neraca perdagangan dan neraca pemabayaran. Hal tersebut dapat dilakukan otoritas moneter dengan cara ….'
        }
      ],
    choices: ['Mendevaluasi mata uang rupiah kemata uang asing sehingga meningkatkan kegiatan impor','Mendevaluasi mata uang rupiah kemata uang asing sehingga meningkatkan kegiatan ekspor', 'Medevaluasi mata uang rupiah ke mata uang asing sehingga barang-barang impor menjadi lebih murah', 'Mendevaluasi mata uang rupiah ke mata uang asing sehingga barang-barang ekspor menjadi lebih mahal', 'Mendevaluasi mata uang rupiah ke mata uang asing sehingga nilai mata uang dalam negri terus menguat dan meningkat'],
    answer: 1
  }
];