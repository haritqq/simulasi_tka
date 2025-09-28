// Daftar 20 soal pilihan ganda Geografi FIX

const QUESTIONS = [
  {
    id: 1,
    // stimulus: [],
    text: 'Ruang lingkup geografi yang mempelajari fenomena alam terutama yang terkait dengan segala proses fisik yang mempengaruhi kehidupan manusia termasuk ke dalam kajian geografi …',
    choices: ['Umum', 'Fisik', 'Sosial', 'Regional', 'Teknik'],
    answer: 1
  },
  {
    id: 2,
    stimulus: [
      {
        type: 'text',
        content: 'Rencana pemindahan ibukota Negara Indonesia masih terus dikaji, walaupun lokasi sudah ditentukan tatapi masih banyak aspek yang perlu dipertimbangkan seperti: aspek politik, ekonomi, social dan budaya, serta dampaknya bagi masyarakat secara umum.'
      }
    ],
    text: 'Pendekatan geografi yang digunakan untuk mengkaji fenomena tersebut adalah pendekatan …',
    choices: ['Kompleks Wilayah', 'Keruangan', 'Korologi', 'Ekologi', 'Sejarah'],
    answer: 0
  },
  {
    id: 3,
    stimulus: [
      {
        type: 'text',
        content: 'Fenomena geosfer: <br>1. Tingginya tingkat kematian bayi <br>2. Pengembangan wilayah permukiman <br>3. Pergerakan lempeng tektonik <br>4. Evakuasi korban bencana alam <br>5. Terjadinya tanah longsor di pegunungan.'
      }
    ],
    text: 'Aspek nonfisik geografi terdapat pada angka ....',
    choices: ['(1), (2), dan (3)', '(1), (2), dan (4)', '(1), (3), dan (5)', '(2), (4), dan (5)', '(3), (4), dan (5)'],
    answer: 1
  },
  {
    id: 4,
    // stimulus: [
    //   {
    //     type: 'text',
    //     content: ''
    //   }
    // ],
    text: 'Hewan kangguru banyak terdapat di wilayah Indonesia bagian timur, sedangkan orang utan banyak terdapat di wilayah Indonesia bagian barat. [cite_start]Fenomena tersebut dapat dikaji menggunakan prinsip ….',
    choices: ['Deskripsi', 'Distribusi', 'Interelasi', 'Korologi', 'Interaksi'],
    answer: 1
  },
  {
    id: 5,
    // stimulus: [],
    text: 'Jarak indonesia dengan thailand pada peta yang berskala 1: 2.000.000 adalah 4cm, jarak sebenarnya dilapangan adalah .... ',
    choices: ['90 km', '84 km', '80 km', '85 km', '82 km'],
    answer: 2
  },
  {
    id: 6,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan berikut! <br>1. Memantau luas wilayah bencana alam <br>2. Memantau perubahan pemanfaatan lahan <br>3. Memantau lahan potensial dan lahan kritis <br>4. Memantau tingkat kemiringan lereng <br>5. Memantau potensi dan persebaran penduduk.'
      }
    ],
    text: 'Berdasarkan pernyataan diatas yang termasuk sebagai manfaat SIG dibidang mtigasi bencana adalah .... ',
    choices: ['(1) dan (2)', '(1) dan (4)', '(2) dan (4)', '(3) dan (5)', '(4) dan (5)'],
    answer: 1
  },
  {
    id: 7,
    // stimulus: [],
    text: 'Seorang peneliti melakukan pengumpulan data dengan mendatangi langsung subjek penelitian atau responden. Tujuan peneliti mengunjungi responden adalah untuk melengkapi data hasil observasi. Peneliti tersebut menggunakan teknik pengumpulan data ….',
    choices: ['Pengajuan angket', 'Studi pustaka', 'Wawancara', 'Observasi', 'Pemetaan'],
    answer: 2
  },
  {
    id: 8,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan berikut! <br> 1) Penentuan jalur transportasi yang efektif, <br> 2) Analisis rawan macet serta bahaya kemacetan, <br> 3) Memantau tingkat kemiringan jalur transportasi, <br> 4) Memantau jaringan jalan.'
      }
    ],
    text: 'Berdasarkan pernyataan diatas yang termasuk sebagai manfaat SIG dibidang transportasi adalah .... ',
    choices: ['(1) dan (2)', '(1) dan (3)', '(2) dan (4)', '(3) dan (4)', '(1) dan (4)'],
    answer: 0
  },
  {
    id: 9,
    // stimulus: [],
    text: 'Kota Jayapura memiliki suhu rata-rata 25˚C sedangkan kota Wonosobo memiliki ketinggian rata-rata 1.700 mdpl. Berapakah suhu rata-rata kota Wonosobo jika dihitung menggunakan rumus gradien thermis? ',
    choices: ['14,8 ˚C', '12,8 ˚C', '10 ˚C', '9,8 ˚C', '15 ˚C'],
    answer: 0
  },
  {
    id: 10,
    // stimulus: [],
    text: 'Iklim subtropis berada pada kisaran lintang astronomis .... ',
    choices: ['0° -23,5° LU/LS', '23,5° -40° LU/LS', '40° -66,5° LU/LS', '66,5° -90° LU/LS', '23,5° -23,5° LU/LS'],
    answer: 1
  },
  {
    id: 11,
    stimulus: [
      {
        type: 'text',
        content: 'DKI Jakarta berpenduduk padat dengan tata ruang kurang memadai menyebabkan terjadinya degradasi lingkungan. Kepadatan penduduk tersebut akan mengimbas ke wilayah-wilayah penyangga disekitar DKI Jakarta, yang memiliki tata ruang kurang memadai. sehingga pemerintah daerah dan wilayah sekitarnya menghadapi masalah yang sama yakni kependudukan dan lingkungan hidup.'
      }
    ],
    text: 'Prinsip geografi yang erat kaitannya dengan kasus tersebut adalah .... ',
    choices: ['Prinsip distribusi', 'Prinsip interelasi', 'Prinsip korologi', 'Prinsip deskripsi', 'Prinsip integrasi'],
    answer: 2
  },
  {
    id: 12,
    stimulus: [
      {
        type: 'text',
        content: 'Ciri-ciri planet: <br>(1) Merupakan planet terbesar, <br>(2) Memiliki cincin, <br>(3) Memiliki satelit terbanyak, <br>(4) Revolusi 30 tahun, <br>(5) Rotasi 10 jam.'
      }
    ],
    text: 'Ciri-ciri planet Jupiter adalah ….',
    choices: ['(1), (2) dan (3)', '(1), (3) dan (5)', '(2),(3) dan (4)', '(2), (4) dan (5)', '(3), (4) dan (5)'],
    answer: 1
  },
  {
    id: 13,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-geografi-13.png'
      }
    ],
    text: 'Tanda ”y” pada gambar lapisan atmosfer diatas mempunyai fungsi sebagai .... ',
    choices: ['Melindungi dari sinar UV', 'Membakar batu-batu angkasa yang masuk ke atmosfer', 'Memantulkan gelombang radio', 'Tempat terjadinya fenomena cuaca', 'Tempat terjadinya hujan'],
    answer: 0
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan pernyataan berikut! <br> (1) Terjadinya Perbedaan lama siang dan malam, <br> (2) Terjadinya Perubahan musim, Terjadinya pergantian siang dan malam, <br> (3) Terjadinya perubahan arah angin, <br> (4) Terjadinya gerak semu tahunan matahari.'
      }
    ],
    text: 'Dari pernyataan diatas yang merupakan akibat dari revolusi matahari adalah .... ',
    choices: ['(1),(2) dan (3)', '(1), (2) dan (4)', '(2), (3), dan (4)', '(1), (2) dan (5)', '(3), (4) dan (5)'],
    answer: 3
  },
  {
    id: 15,
    // stimulus: [],
    text: 'Alam semesta tidak ada awalnya dan tidak akan berakhir. Alam semesta selalu terlihat tetap dan terus mengembang seperti sekarang. Menurut penjelasan tersebut merupakan isi dari teori .... ',
    choices: ['Big bang', 'Keadaan tetap', 'Planetesimal', 'Kabut', 'Nebula'],
    answer: 1
  },
  {
    id: 16,
    // stimulus: [],
    text: 'Citra penginderaan jauh dapat menjadi bahan pengambilan kebijiakan setelah bencana. Interpretasi citra mampu menunjukkan kondisi bangunan yang rusak akibat bencana. Salah satu contoh kebijakan berdasarkan analisis tersebut adalah .... ',
    choices: ['Pengosongan lahan kritis', 'Penganggaran biaya rekonstruksi', 'Pemetaan kawasan rawan bencana', 'Pembangunan barak pengungsian permanen', 'Penghitungan jumlah korban akibat bencana'],
    answer: 1
  },
  {
    id: 17,
    // stimulus: [],
    text: 'Sistem Informasi Geografi (SIG) mampu menganalisis data dari berbagai sudut pandang. Karakteristik SIG tersebut merupakan bukti bahwa .... ',
    choices: ['Data dari metode SIG dapat direkayasa sesuai tujuan', 'SIG dijalankan orang-orang yang kompeten di bidangnya', 'Software SIG selalu mengalami perubahan', 'Sumber data SIG berasal dari perekaman kamera terbaik', 'SIG berupa data digital dan temporal'],
    answer: 0
  },
  {
    id: 18,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan ciri wilayah berikut! <br><br> 1). Ketinggian 700-1500, <br>2). Suhu berkisar antara 22 – 17 derajat C, <br>3). Jenis vegetasi budidaya kopi, kakao, teh.'
      }
    ],
    text: 'Menurut klasifikasi Junghun, wilayah di atas masuk tipe iklim .... ',
    choices: ['Panas', 'Sedang', 'Sejuk', 'Dingin', 'Sangat dingin'],
    answer: 1
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-geografi-19.jpg'
      }
    ],
    text: 'Proses presipitasi dan infiltrasi pada gambar siklus hidrologi ditunjukkan oleh huruf .... ',
    choices: ['A dan B', 'B dan C', 'B dan D', 'C dan E', 'A dan D'],
    answer: 3
  },
  {
    id: 20,
    stimulus: [
      {
        type: 'image',
        url: 'images/soal-geografi-20.jpg'
      }
    ],
    text: 'Bentuk muka bumi seperti gambar merupakan bentukan yang disebabkan oleh gerakan lempeng .... ',
    choices: ['Transform', 'Divergensi', 'Konvergensi', 'Horst', 'Graben'],
    answer: 2
  }
];