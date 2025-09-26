// Daftar 20 soal pilihan ganda Bahasa Indonesia
// dengan struktur baru yang mendukung teks bacaan dan gambar

const QUESTIONS = [
  {
    id: 1,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah teks berikut untuk menjawab soal nomor 1 dan 2!\n\nSelain memilih kandang, Anda juga perlu memahami tingkat kepadatan populasi ayam. Dalam hal ini, anda bisa menentukannya berdasarkan umur ayam dari satu minggu, dua minggu, hingga di atas dua minggu. Cara ini dilakukan agar kepadatan populasi ayam di dalam kandang bisa diatur dan mencegah suhu di dalam kandang cepat panas.'
      }
    ],
    text: 'Jika dilihat dari isinya, kutipan tersebut dalam struktur teks prosedur kompleks termasuk bagian...',
    choices: ['Judul', 'Tujuan', 'Bahan-bahan', 'Syarat', 'Langkah-langkah'],
    answer: 4
  },
  {
    id: 2,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah teks berikut untuk menjawab soal nomor 1 dan 2!\n\nSelain memilih kandang, Anda juga perlu memahami tingkat kepadatan populasi ayam. Dalam hal ini, anda bisa menentukannya berdasarkan umur ayam dari satu minggu, dua minggu, hingga di atas dua minggu. Cara ini dilakukan agar kepadatan populasi ayam di dalam kandang bisa diatur dan mencegah suhu di dalam kandang cepat panas.'
      }
    ],
    text: 'Interpretasi yang tepat berdasarkan isi kutipan teks tersebut adalah…',
    choices: [
      'Kita dapat mengetahui kepadatan kandang ayam dari umur ayam',
      'Menjaga kepadatan kandang ayam dengan cara mengatur suhu kandang tersebut',
      'Memilih kandang ayam berdasarkan umur ayam',
      'Membedakan kandang ayam berdasarkan umurnya dapat menjaga kepadatan ayam',
      'Ayam yang berumur lebih dari dua minggu memiliki kepadatan kandang yang tinggi'
    ],
    answer: 0
  },
  {
    id: 3,
    stimulus: [
      {
        type: 'text',
        content: 'Cermatilah teks berikut!\n\nBatang pisang di kerap cukup dalam, kemudian batang pisang dirobohkan pelan-pelan. Caranya, salah satu pelepah daunnya ditarik sampai hamper roboh. Tandannya pisang jangan sampai membentur tanah agar tidak rusak. Sebelum tandan dekat ke tanah, ujung tandan dipegang dengan tangan atau disangga dengan alat yang telah disediakan.'
      }
    ],
    text: 'Judul teks tersebut merupakan cara…',
    choices: ['Menanam pohon pisang', 'Memanfaatkan buah pisang', 'Memanen buah pisang', 'Buah pisang siap dipanen', 'Membuat keripik pisang'],
    answer: 2
  },
  {
    id: 4,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah teks editorial berikut untuk menjawab soal nomor 4-5!\n\nBeberapa waktu yang lalu banjir besar melanda Jakarta. Ribuan rumah tenggelam. Kerugian mencapai 39,5 miliar rupiah dan menelan korban 10 orang meninggal. Seorang penduduk di luar Jakarta menyurati redaksi sebuah surat kabar. Surat tersebut berisi pernyataan terhadap kondisi Jakarta. Menurutnya, Jakarta ternyata tidak seperti kota metropolitan yang selama ini terlihat megah dalam sinetron.\n\nOrang Jakarta mengatakan bahwa banjir yang melanda Jakarta kiriman dari Bogor. Orang Bogor membantahnya. Mereka menyatakan bahwa yang membuat kerusakan adalah orang Jakarta sendiri dengan menggusur petani dan membuat villa dan hotel di puncak.'
      }
    ],
    text: 'Masalah yang diungkapkan dalam teks editorial tersebut adalah…',
    choices: [
      'Banjir melanda Jakarta sehingga menimbulkan banyak kerugian',
      'Jakarta selama ini terlihat megah dalam sinetron',
      'Banjir yang melanda Jakarta adalah kiriman dari Bogor',
      'Masyarakat Jakarta-lah yang membuat kerusakan',
      'Orang Jakarta menggusur petani membuat vila dan hotel di puncak'
    ],
    answer: 0
  },
  {
    id: 5,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah teks editorial berikut untuk menjawab soal nomor 4-5!\n\nBeberapa waktu yang lalu banjir besar melanda Jakarta. Ribuan rumah tenggelam. Kerugian mencapai 39,5 miliar rupiah dan menelan korban 10 orang meninggal. Seorang penduduk di luar Jakarta menyurati redaksi sebuah surat kabar. Surat tersebut berisi pernyataan terhadap kondisi Jakarta. Menurutnya, Jakarta ternyata tidak seperti kota metropolitan yang selama ini terlihat megah dalam sinetron.\n\nOrang Jakarta mengatakan bahwa banjir yang melanda Jakarta kiriman dari Bogor. Orang Bogor membantahnya. Mereka menyatakan bahwa yang membuat kerusakan adalah orang Jakarta sendiri dengan menggusur petani dan membuat villa dan hotel di puncak.'
      }
    ],
    text: 'Opini pada teks editorial tersebut terdapat pada kalimat…',
    choices: [
      'Sepuluh orang meninggal dalam banjir tersebut',
      'Seorang penduduk luar Jakarta menyurati redaksi sebuah surat kabar',
      'Orang Jakarta mengatakan bahwa banjir yang melanda Jakarta adalah kiriman dari Bogor',
      'Kerugian mencapai 39,5 miliar rupiah dan sepuluh orang meninggal',
      'Beberapa waktu yang lalu banjir besar melanda Jakarta'
    ],
    answer: 2
  },
  {
    id: 6,
    stimulus: [],
    text: 'Kalimat yang mengandung perintah dalam teks prosedur adalah kalimat…',
    choices: ['Impratif', 'Introgratif', 'Baku', 'Tanya', 'Baku dan Tanya'],
    answer: 0
  },
  {
    id: 7,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah kutpan teks berikut!\n\nMasak kacang dengan direbus'
      }
    ],
    text: 'Kalimat tersebut menggunakan jenis kata keterangan...',
    choices: ['Cara', 'Alat', 'Kuantitas', 'Tujuan', 'Tempat'],
    answer: 0
  },
  {
    id: 8,
    stimulus: [],
    text: 'Tujuan dari teks prosedur kompleks adalah…',
    choices: [
      'Mengelompokkan berbagai hal kedalam ciri-ciri setiap jenis pada umumnya',
      'Memberi petunjuk tentang cara-cara melakukan sesuatu',
      'Mengungkap kebenaran yang lebih umum',
      'Mengurangi perbedaan posisi setiap pihak',
      'Memaparkan sesuatu agar pengetahuan pembaca bertambah'
    ],
    answer: 1
  },
  {
    id: 9,
    stimulus: [],
    text: 'Kalimat yang berfungsi untuk memberikan informasi atau berita tentang sesuatu disebut kalimat…',
    choices: ['Jamak', 'Impratif', 'Introgratif', 'Deklaratif', 'Tunggal'],
    answer: 3
  },
  {
    id: 10,
    stimulus: [],
    text: 'Berikut ini kalimat yang menggunakan kalimat keterangan cara…',
    choices: [
      'Setelah digoreng setengah matang, angkat dan tuangkan secepatnya kedalam adonan kuah.',
      'Buat isi kue dengan cara mencampur potongan buah dengan selai.',
      'Bentuk adonan kue dengan cetakan daun.',
      'Kukuslah adonan kue lapis dengan api yang tidak terlalu besar agar matang dengan merata.',
      'Menggoreng tempe menggunakan minyak'
    ],
    answer: 3
  },
  {
    id: 11,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah penggalan teks eksplanasi berikut!\n\nKita dapat memahami bahwa kelompok teman sebaya sangat berperan dalam proses sosialisasi individu terutama kelompok teman sebaya tidak hanya berdampak negatif, tetapi juga berdampak positif. Oleh karena itu, pembentengan diri melalui keluarga masih sangat diperlukan.'
      }
    ],
    text: 'Penggalan teks eksplanasi di atas merupakan bagian struktur…',
    choices: ['Pengertian', 'Penjelasan', 'Judul', 'Interprestasi', 'Sebab-akibat'],
    answer: 3
  },
  {
    id: 12,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah penggalan kutipan teks berikut!\n\nSikap egois dapat kita lihat dari seseorang yang tidak peduli akan lingkungan sekitarnya. Ia tidak akan memperdulikan kejadian yang berlangsung di sekitarnya selagi hal tersebut tidak mengganggu kenyamanannya. Seseorang yang egois awalnya akan merasa dirinya yang paling benar. Kemudian perasaan tidak percaya kepada orang lain akan tumbuh. Ketika orang tersebut sudah mulai tidak percaya, maka secara tidak langsung ia akan mengabaikan toleransinya.'
      }
    ],
    text: 'Cuplikan teks di atas termasuk ke dalam teks…',
    choices: ['Eksposisi', 'Persuasif', 'Prosedur', 'Eksplanasi', 'Infografiks'],
    answer: 3
  },
  {
    id: 13,
    stimulus: [],
    text: 'Di bawah ini yang termasuk kedalam struktur teks eksplanasi adalah…',
    choices: ['Tesis', 'Argumentasi', 'Abstraksi', 'Pernyataan umum', 'Koda'],
    answer: 3
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah pengalan teks berikut ini!\n\nBerbicara mengenai bahan kimia maka tidak akan terlepas dari bahayanya. Sekarang ini banyak sekali penggunaan bahan kimia untuk mengawetkan seseuatu makanan dan salah satunya adalah bakso yang termasuk kedalam makanan tidak tahan lama. Boraks dan formalin adalah dua jenis jenis kimia yang dapat mengawetkan suatu makanan dalam waktu yang cukup lama.'
      }
    ],
    text: 'Ide pokok paragraph di atas yaitu…',
    choices: [
      'Bahan kimia pengawet makanan',
      'Boraks dan formalin adalah bahan kimia',
      'Bahaya bahan kimia',
      'Bakso termasuk makanan tidak tahan lama',
      'Manfaat bahan kimia'
    ],
    answer: 0
  },
  {
    id: 15,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah penggalan kalimat berikut!\n\n"Kami tidak menerima anda, karena posisi yang Anda mau."'
      }
    ],
    text: 'Perbaikan kalimat surat balasan lamaran kerja di atas yang tepat adalah…',
    choices: [
      'Maaf, kami tidak bisa menerima surat Anda',
      'Maaf, saat ini kami tidak bisa menerima Anda, karena posisi yang Anda inginkan sudah penuh',
      'Maaf, posisi yang Anda inginkan sudah penuh',
      'Maaf, untuk saat ini kami tidak bisa menerima Anda karena posisi yang anda harapkan penuh',
      'Maaf, untuk saat ini kami belum bisa menerima Anda karena posisi tersebut sudah terisi'
    ],
    answer: 4
  },
  {
    id: 16,
    stimulus: [
      {
        type: 'text',
        content: 'Cermati paragraf berikut!\n\nHamparan sawah membentang ... padi di sawah merunduk berayun-ayun meliuk-liuk ditiup angin lembah. Bangau-bangau berpencaran. Bocah-bocah bertepuk sorak ... mengusir kawanan burung pipit yang hendak berpesta pora memakan padi. Gemercik air yang jernih di sela saluran air terdengar ... di telinga.'
      }
    ],
    text: 'Frasa adjektiva yang tepat untuk melengkapi paragraf tersebut adalah...',
    choices: [
      'Sangat indah, berteriak-teriak, merdu sekali',
      'Sangat luas, dengan nyaring, merdu sekali',
      'Sangat hijau, gembira sekali, sangat merdu',
      'Kekuning-kuningan, sangat nyaring, sayup-sayup',
      'Kekuning-kuningan, riang gembira, sayup-sayup'
    ],
    answer: 4
  },
  {
    id: 17,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah penggalan teks berikaut!\n\nGempa yang terjadi dalam perut bumi akan mengakibatkan munculnya tekanan kearah vertical sehingga dasar lautan akan naik dan turun dalam rentang waktu yang singkat. Hal ini kemudian akan memicu letak seimbang pada air lautan yang kemudian terdorong menjadi gelombang besar yang tergerak mencapai wilayah daratan. Sampah plastic sulit terurai di tanah. Apabila dibakara dapat menimbulkan pencemaran dan gangguan pernapasan. Selain itu sampah plastic dapat mencemari lingkungan.itulah beberapa berbahaya yang disebabkan dari sampah plastik.'
      }
    ],
    text: 'Kalimat "sampah plastik sulit terurai di tanah". Pada paragraf tersebut merupakan…',
    choices: ['Ide pokok', 'Gagasan utama', 'Kalimat utama', 'Kalimat penjelas', 'Ide pokok dan kalimat penjelas'],
    answer: 2
  },
  {
    id: 18,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah dengan seksama paragraf berikut!\n\nAdanya mata pelajaran teknologi informasi dan komunikasi (TIK) di sekolah sangat membantu masyarakat melek teknologi. Terbukti anak-anak usia sekolah dasar sudah banyak yang mampu mengoperasikan komputer. Sayangnya mata pelajaran ini dianggap tidak penting oleh sebagian besar orang tua murid. Akibatnya, anak-anak tidak memahami penjelasan guru di sekolah dan selalu mendapat nilai rendah.'
      }
    ],
    text: 'Ide pokok yang dapat ditemukan dari paragraph tersebut adalah…',
    choices: [
      'Pelajaran TIK membantu mendukung masyarakat yang lebih melek teknologi',
      'Pelajaran TIK tidak penting karena membuat anak-anak mendapat nialai rendah',
      'Masyarakat menjadi melek teknologi karena di sekolah wajib belajar TIK',
      'Orang tua menganggap pelajaran TIK tidak terlalu penting bagi anak-anak',
      'Akibatnya anak-anak tidak memahami penjelasan guru'
    ],
    answer: 0
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'text',
        content: 'Bacalah paragraf berikut!\n\nKecanduan terhadap pornografi dapat menyebabkan kerusakan otak. Otak para pecandu pornografi akan terus menerus terangsang yang mengakibatkan produksi endorphin dan dopamin secara berlebihan. Kedua zat tersebut dalam keadaan normal. Dapat bermanfaat bagi oarng-orang yang beraktivitas. Namun, berbeda halnya dengan kasus para pecandu pornografi. Otak mereka akan mengalami rangsangan yang berlebihan, yang dalam jangka panjang dapat menyebabkan otak menjadi mengecil dan akhirnya rusak.'
      }
    ],
    text: 'Ide pokok paragraf tersebut adalah…',
    choices: [
      'Otak menjadi besar dan rusak',
      'Kecanduan pornografi dapat merusak otak',
      'Otak mengalami penurunan zat endorfin',
      'Otak mengalami penurunan zat dopamin',
      'Otak mengalami peningkatan zat dopamin'
    ],
    answer: 1
  },
  {
    id: 20,
    stimulus: [
      {
        type: 'image',
        url: 'images/infografis_ki_hajar_dewantara.png'
      }
    ],
    text: 'Judul infografik pada gambar tersebut adalah...',
    choices: [
      'Wafat di Yokyakarta',
      'Lahir dengan nama Soewardi Soeryaningrat',
      'Ditangkap dan di asingkan ke Belanda',
      'Kihajar Dewantara, menghajar Belanda mendidik bumi putra',
      'Tanggal 2 Mai diperingati sebagai hari pendidikan nasional'
    ],
    answer: 3
  }
];