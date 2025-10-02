// Daftar 20 soal pilihan ganda sejarah

const QUESTIONS = [
  {
    id: 1,
    stimulus: [
      {
        type: 'text',
        content: 'Istilah <i>pra sejarah</i> diganti dengan istilah <i>pra aksara</i>, karena istilah <i>pra aksara</i> lebih tepat yaitu di mulai ....... sampai .......'
      }
    ],

    choices: ['Bumi ada - tulisan di temukan', 'Bumi ada - bumi berakhir', 'Fosil ada - tulisan di temukan', 'Manusia ada-tulisan di temukan', 'Manusia ada-manusia berakhir'],
    answer: 0
  },
  {
    id: 2,
    stimulus: [
      {
        type: 'text',
        content: 'Kerajaan Majapahit adalah kerajaan Hindu-Buddha terakhir di nusantara yang berdiri antara abad ke-13 hingga abad ke-16. Dalam sejarahnya, Majapahit dianggap sebagai salah satu kerajaan terbesar dengan wilayah kekuasaan hampir mencakup seluruh nusantara. Majapahit mencapai zaman keemasannya pada masa pemerintahan ....'
      }
    ],
    choices: ['Raden Wijaya', 'Jayanegara', 'Hayam Wuruk', 'Tribhuwana', 'Wikra-mawardhana'],
    answer: 2
  },
  {
    id: 3,
    stimulus: [
      {
        type: 'text',
        content: 'Nama Mahapatih atau perdana menteri terkenal dari kerajaan Majapahit adalah ....'
      }
    ],
    choices: ['Palapa', 'Hayam Wuruk', 'Raden Wijaya', 'Gajah Mada', 'Kertajaya'],
    answer: 3
  },
  {
    id: 4,
    stimulus: [
      {
        type: 'text',
        content: 'Nama sumpah yang terkenal dari Mahapatih Gajah Mada adalah ....'
      }
    ],
    choices: ['Sumpah Tan muji Rahayu', 'Sumpah Resko Ing Ambimanyu', 'Sumpah Tan Sadana Panisu', 'Sumpah Tan Kertajaya', 'Sumpah Tan Amukti Palapa'],
    answer: 4
  },
  {
    id: 5,
    stimulus: [
      {
        type: 'text',
        content: 'Pada masa pemerintahan Hayam Wuruk, Majapahit berada di puncak kejayaannya. Hayam Wuruk disebut juga sebagai Rasasanagara. Ia memerintah Majapahit pada tahun ....'
      }
    ],
    choices: ['1355-1390', '1350-1389', '1351-1389', '1389-1395', '1350-1398'],
    answer: 1
  },
  {
    id: 6,
    stimulus: [
      {
        type: 'text',
        content: 'Berdasarkan bukti tulisan pada prasasti-prasasti yang ditemukan diketahui bahwa raja yang pernah memerintah di Tarumanegara adalah Raja Purnawarman. Raja Purnawarman merupakan raja besar dan terkenal yang telah berhasil meningkatkan kehidupan rakyatnya. Disebutkan bahwa kehidupan ekonomi kerajaan Tarumanegara telah teratur. Bukti dari penjelasan tersebut adalah ....'
      }
    ],
    choices: ['Kehidupan masyarakatnya mengalami perubahan kearah Sejahtera sehingga terwujudnya kemakmuran', 'Banyak ditemukannya peninggalan yang berupa candi-candi dan berbagai barang purbakala', 'Dibangunnya terusan sepanjang 6122 tombak sebagai sarana mencegah banjir dan pelayaran', 'Raja Purnawarman telah menggalang Kerjasama dengan Kerajaan-kerajaan lain diluar Nusantara', 'Wilayah kekuasaan Kerajaan Tarumanegara meliputi seluruh Jawa bagian barat dan Pantai utara Jawa'],
    answer: 0
  },
  {
    id: 7,
    stimulus: [
      {
        type: 'text',
        content: '<i>Perhatikan informasi berikut!</i> <br><br>> Adanya peringatan 10 Muharam atas meninggalnya cucu nabi Muhamad, <br>> Adanya kesamaan ajaran Syeh Siti Jenar dengan Al – Hallaj, <br>> Adanya penggunaan tanda- tanda bunyi harakat dalam sistem mengeja huruf Arab, <br>> Ditemukannya makam Maulana Malik Ibrahim di Gresik, <br>> Adanya perkampungan Leran di Gresik.'
      }
    ],
    text: 'Berdasarkan informasi diatas agama Islam yang berkembang di Indonesia berasal dari ....',
    choices: ['Arab', 'Mekkah', 'Mesir', 'Gujarat', 'Persia'],
    answer: 4
  },
  {
    id: 8,
    stimulus: [
      {
        type: 'text',
        content: 'Berdasarkan sudut pandang alkulturasi budaya, masuknya pengaruh budaya dan agama hindu Buddha di Indonesia dibagi menjadi 3 periode yaitu periode awal, tengah dan akhir. Periode awal terjadi pada abad ….'
      }
    ],
    choices: ['5 sampai abad ke 11 M', '11 sampai abad ke 16 M', '16 sampai abad ke sekarang', '4  sampai abad ke 10 M', '6 sampai abad ke 10 M'],
    answer: 0
  },
  {
    id: 9,
    stimulus: [
      {
        type: 'text',
        content: 'Agama Hindu muncul di Indonesia pada tahun ....'
      }
    ],
    choices: ['	± 1500 SM', '± 500 SM', '± 3500 SM', '± 2000 SM', '± 1000 SM'],
    answer: 0
  },
  {
    id: 10,
    stimulus: [
      {
        type: 'text',
        content: 'VOC sempat memberikan keuntungan yang besar bagi Belanda, akan tetapi kongsi ini akhirnya bangkrut dan dibubarkan oleh pemerintah kerajaan Belanda. Salah satu sebab VOC dibubarkan karena ....'
      }
    ],
    choices: ['Permintaan rempah-rempah di Eropa menurun drastis akibat perang', 'Banyak uang dikeluarkan untuk membangun benteng – benteng pertahanan', 'Organisasinya tidak memiliki struktur yang jelas', 'Banyak pegawainya menerapkan kebijakan sendiri – sendiri', 'Pegawai pegawainya melakukan korupsi'],
    answer: 4
  },
  {
    id: 11,
    stimulus: [],
    text: 'Sejak tahun 1901, bentuk penjajahan yang dikembangkan di Indonesia oleh kaum sosialis Belanda adalah Politik Etika atau politik Balas Budi. Namun pelaksanaan politik Etika juga memberikan dampak positif bagibangsa Indonesia di bidang pendidikan, yakni ....',
    choices: ['Jumlah sekolah di Indonesia bertambah banyak', 'Lahirnya golongan  terpelajar di Indonesia yang menjadi pemimpin pergerakan Indonesia', 'Rakyat Indonesia dapat menikmati pendidikan', 'Lahirnya organisasi modern di Indonesia', 'Masih terdapat  diskriminasi dalam pelaksanaan pendidikan'],
    answer: 1
  },
  {
    id: 12,
    stimulus: [
      {
        type: 'text',
        content: 'VOC resmi dibubarkan pada tahun 1799. Berapa tahun VOC beroperasi jika didirikan pada tahun 1602?'
      }
    ],
    choices: ['198 Tahun', '190 Tahun', '197 Tahun', '189 Tahun', '179 Tahun'],
    answer: 2
  },
  {
    id: 13,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan informasi di bawah ini !<br><br> 1.	Wilayah Indonesia hanya sebagian wilayah Jawa Tengah dan Jawa Timur.<br>2.	Terisolasinya Indonesia dari dunia luar dan blokade ekonomi oleh Belanda.<br>3.	Munculnya pemberontakan di Jawa Barat dan Jawa Timur.<br>4.	Hijrahnya Divisi Siliwangi dari Jawa Barat ke Jawa Tengah.'
      }
    ],
    text: 'Informasi di atas menunjukan akibat langsung dari penandatangan perjanjian ....',
    choices: ['Linggarjati', 'Roem Royen', 'Renville', 'Hoge Veluwe', 'KBM'],
    answer: 2
  },
  {
    id: 14,
    stimulus: [
      {
        type: 'text',
        content: 'Pada masa pemerintahan RIS muncul pemberontakan yang mengguncang stabilitas politik dalam negeri antara lain pemberontakan APRA di Jawa Barat tahun 1950. Latar belakang terjadinya pemberontakan APRA adalah .…'
      }
    ],
    choices: ['Ingin mendirikan Negara Islam', 'Ketidakpuasan terhadap pemerintah pusat', 'Ingin mempertahankan Negara Pasundan', 'Adanya hubungan yang tidak harmonis antara pemerintah pusat dan daerah', 'Mengakui keberadaan DI/TII'],
    answer: 2
  },
  {
    id: 15,
    stimulus: [
      {
        type: 'text',
        content: 'Siapakah pemimpin gerakan APRA yang dikenal karena kekejamannya yang menimbulkan korban jiwa ribuan orang adalah ....'
      }
    ],
    choices: ['Sultan Hamid II', 'Soumakil', 'Raymond Westering', 'Andi Aziz', 'Simbolon'],
    answer: 2
  },
  {
    id: 16,
    stimulus: [
      {
        type: 'text',
        content: 'Upaya apa yang dilakukan untuk menumpas pemberontakan APRA?'
      }
    ],
    choices: ['Melancarkan operasi militer dibawah APRIS dibantu oleh masyarakat Bandung', 'Memunculkan tokoh Ratu adil yang asli agar rakyat sadar telah ditipu oleh APRA', 'Menyelamatkan aset-aset pemerintah yang berada di Negara Pasundan','Menyerang markas Divisi Siliwangi karena posisinya strategis','Meminta bantuan prajurit KNIL dan Koninklijk Leger (KL)'],
    answer: 0
  },
  {
    id: 17,
    stimulus: [
      {
        type: 'text',
        content: 'Peristiwa Bom Hiroshima dan Nagasaki terjadi pada tanggal ....'
      }
    ],
    choices: ['6 dan 9 Agustus 1945', '7 dan 10 Agustus 1945', '6 dan 7 Agustus 1945', '7 dan 8 Agustus 1945', '6 dan 8 Agustus 1945'],
    answer: 0
  },
  {
    id: 18,
    stimulus: [
      {
        type: 'text',
        content: 'Perjanjian KMB telah membawa persoalan ekonomi baru antara Indonesia dengan belanda. Perundingan mengenai persoalan finansial ekonomi kedua negara dirundingkan di jenewa, swiss, dan menghasilkan keputusan pembatalan persetujuan finec KMB pada tanggal ....'
      }
    ],
    choices: ['5 Januari 1956', '6 Januari 1956', '7 januari 1956', '5 Februari 1956', '6 Februari 1956'],
    answer: 2
  },
  {
    id: 19,
    stimulus: [
      {
        type: 'text',
        content: 'Pada masa Demokrasi Terpimpin, Presiden Soekarno menerapkan sistem ekonomi terpimpin. Dalam hal ini presiden langsung terjun dan mengatur perekonomian. Presiden menyampaikan Deklarasi ekonomi (Dekon). Tujuan Dekon adalah menciptakan ekonomi yang bersifat demokrasi bebas dari imperialisme.'
      }
    ],
    text: 'Program ini dianggap gagal, karena ....',
    choices: ['Kehidupan masyarakat pada umumnya masih di bawah taraf hidup', 'Pendapatan perkapita masyarakat masih belum sesuai standar', 'Tidak ada campur tangan pihak asing yang ingin mengusai perekonomian', 'Masih ada campur tangan pihak asing yang ingin mengusai perekonomian', 'Tidak'],
    answer: 3
  },
  {
    id: 20,
    stimulus: [
      {
        type: 'text',
        content: 'Perhatikan gambar berikut! <br><br><img src="images/soal-sejarah-20.jpg" alt="soal sejarah 20"><br><br>Pada waktu berita Proklamasi Kemerdekaan Indonesia, tokoh tersebut segera mengirim surat kepada Soekarno-Hatta dan menyatakan kesetiaan dan dukungan terhadap pemerintah Republik Indonesia, serta menyerahkan 13 juta gulden untuk membantu perjuangan Republik Indonesia. '
      }
    ],
    text: 'Tokoh tersebut adalah ….',
    choices: ['Sultan Iskandar Muda', 'Sultan Hasanuddin', 'Pangeran Nuku', 'Sultan Hamid II', 'Sultan Agung'],
    answer: 3
  }
];