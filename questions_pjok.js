const QUESTIONS = [
  {
    id: 1,
    stimulus: [],
    text: 'Pola yang diterapkan dalam permainan sepak bola dengan tujuan untuk menghalau dan mempertahankan gawang dari serangan lawan, sehingga tidak terjadi gol disebut pola ….',
    choices: ['Penyerangan', 'Pertahanan', 'Gerakan Tersusun', 'Pertahanan rapat', 'Ruang Kosong'],
    answer: 1
  },
  {
    id: 2,
    stimulus: [],
    text: 'Sejak 500 tahun yang lalu sepak bola dikenal di negara Cina dengan nama ….',
    choices: ['Epyskiros', 'Choulle', 'Harpastrum', 'Tsu chu', 'Minonete'],
    answer: 3
  },
  {
    id: 3,
    stimulus: [],
    text: 'Pada permainan sepak bola pola pertahanan ini dilakukan dengan susunan pemain 5:3:2, berarti angka 5, yaitu ….',
    choices: ['Pemain Depan', 'Pemain tengah', 'Pemain gelandang', 'Pemain sayap', 'Pemain belakang'],
    answer: 4
  },
  {
    id: 4,
    stimulus: [],
    text: 'Peserta didik mampu memahami dan menguasai keterampilan gerak permainan Sepak Bola ....',
    choices: ['Pertahanan', 'Penyerangan', 'Campuran', 'Individu', 'Beregu'],
    answer: 3
  },
  {
    id: 5,
    stimulus: [],
    text: 'Teknik-teknik berikut adalah teknik dalam permainan bola voli, kecuali ….',
    choices: ['Service', 'Passing', 'Passing', 'Membuang Bola', 'Blok'],
    answer: 3
  },
  {
    id: 6,
    stimulus: [],
    text: 'Pada permainan bola basket penyerangan yang dilakukan tanpa menggunakan pola tertentu, penyerangan ini tergantung pada penguasaan teknik, kemampuan individu, dan kesempurnaan fisik setap anggota regu disebut pola penyerangan …. ',
    choices: ['Berpola', 'Cepat', 'Bebas', 'Bervariasi', 'Terprogram'],
    answer: 2
  },
  {
    id: 7,
    stimulus: [],
    text: 'Penyerangan pada permainan bola basket yang dilakukan syarat-syarat tertentu, merupakan penyerangan ….',
    choices: ['Ault Man', 'Diamond', 'Berpola', 'Cepat', 'Bebas'],
    answer: 2
  },
  {
    id: 8,
    stimulus: [],
    text: 'Sistem ini dalam permainan bola basket sangat baik untuk penyerangan terhadap pertahanan daerah maupun pertahanan satu lawan satu. Hal ini dilakukan jika regu tersebut memiliki dua orang pemain jangkung, yaitu sistem ….',
    choices: ['Ault Man', 'Diamond', 'Berpola', 'Cepat', 'Bebas'],
    answer: 0
  },
  {
    id: 9,
    stimulus: [],
    text: 'Berikut latihan yang cocok untuk meningkatkan kelincahan ....',
    choices: ['Sit up', 'Shuttle run', 'Push up', 'Pull up', 'Hand stand'],
    answer: 1
  },
  {
    id: 10,
    stimulus: [],
    text: 'Istilah lain untuk tingkat kebugaran jasmani adalah ....',
    choices: ['Fitness', 'Physiological fitness', 'Physical', 'Physical endurance', 'Physical fitness'],
    answer: 4
  },
  {
    id: 11,
    stimulus: [],
    text: 'Latihan push up dalam kebugaran jasmani bertujuan untuk meningkatkan ....',
    choices: ['Kekuatan', 'Kelenturan', 'Kelentukan', 'Coordination', 'Speed'],
    answer: 0
  },
  {
    id: 12,
    stimulus: [],
    text: 'Latihan dengan menaiki bukit untuk mengembangkan otot-otot gerak kaki dinamakan ....',
    choices: ['Shuttle up', 'Down hill training', 'Up hill Training', 'Interval training', 'Lari akselerasi'],
    answer: 2
  },
  {
    id: 13,
    stimulus: [],
    text: 'Bentuk test kebugaran jasmani yang dilakukan oleh angkatan laut adalah ....',
    choices: ['Physical fitness test', 'Test aerobik', 'Test 2,4 km', 'Navy standard physical fitness test', 'Interval training'],
    answer: 3
  },
  {
    id: 14,
    stimulus: [],
    text: 'Untuk menjaga terjadi kesalahan otot sebelum latihan diperlukan ….',
    choices: ['Pemanasan', 'Pendinginan', 'Pelepasan', 'Pelenturan', 'Istirahat'],
    answer: 0
  },
  {
    id: 15,
    stimulus: [],
    text: 'Panjang tongkat yang digunakan untuk lari estafet adalah ….',
    choices: ['20 cm', '25 cm', '30 cm', '35 cm', '40 cm'],
    answer: 2
  },
  {
    id: 16,
    stimulus: [],
    text: 'Gerakan yang ada dalam digunakan untuk lari estafet adalah ….',
    choices: ['Berjingkat (Hop)', 'Melangkah (Step)', 'Melompat (Jump)', 'Mendarat', 'Terbaring'],
    answer: 1
  },
  {
    id: 17,
    stimulus: [],
    text: 'Agar dapat melakukan lompat jangkit dengan benar maka harus menguasai teknik dasar lompat jangkit berikut ini, kecuali ….',
    choices: ['Jangkit', 'Melangkah', 'Melompat', 'Melayang', 'Hop and Step'],
    answer: 3
  },
  {
    id: 18,
    stimulus: [],
    text: 'Pada olahraga pencak silat usaha untuk memasukkan pukulan atau tendangan ke bidang sasaran (anggota badan lawan) dengan menggunakan tangan atau kaki disebut ….',
    choices: ['Serangan', 'Tendangan', 'Pembelaan', 'Pukulan', 'Tangkisan'],
    answer: 0
  },
  {
    id: 19,
    stimulus: [],
    text: 'Suatu usaha pembelaan diri dari serangan lawan dengan cara mengadakan kontak langsung terhadap pukulan atau tendangan lawan, dalam olahraga pencak silat disebut ….',
    choices: ['Hindaran', 'Tangkisan', 'Tangkapan', 'Jatuhan', 'Kuncian'],
    answer: 1
  },
  {
    id: 20,
    stimulus: [],
    text: 'Berikut ini arah-arah serangan dengan menggunakan kaki, kecuali ….',
    choices: ['Atas', 'Busur sisi', 'Belakang', 'Samping', 'Depan'],
    answer: 2
  }
];