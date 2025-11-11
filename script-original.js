// FILE: script.js (FINAL DENGAN FUNGSI STIMULUS)

function startExam() {
  const TOTAL_MINUTES = 60;
  let timeLeft = TOTAL_MINUTES * 60;
  let currentIndex = 0;
  const answers = JSON.parse(sessionStorage.getItem('sim_answers') || '[]');

  const nama = sessionStorage.getItem('sim_nama');
  const no = sessionStorage.getItem('sim_no');
  if (!nama || !no) {
    alert('Data siswa tidak ditemukan. Kembali ke halaman login.');
    window.location = 'index.php';
    return;
  }

  const countdownEl = document.getElementById('countdown');
  // === AMBIL ELEMENT BARU UNTUK STIMULUS ===
  const stimulusContainer = document.getElementById('stimulus-container'); 
  const soalText = document.getElementById('soal-text');
  const optionsEl = document.getElementById('options');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');
  const navGrid = document.getElementById('nav-grid');
  const raguBtn = document.getElementById('raguBtn');
  const raguStatus = JSON.parse(sessionStorage.getItem('sim_ragu') || '[]');

  function renderNav() {
  navGrid.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const b = document.createElement('div');
    b.className = 'nav-item';

    // Tandai soal yang sudah dijawab
    if (answers[i] !== undefined) b.classList.add('done');

    // Tandai soal aktif
    if (i === currentIndex) b.classList.add('current');

    // Tandai soal ragu-ragu
    if (raguStatus[i]) b.classList.add('ragu');

    b.textContent = (i + 1);
    b.addEventListener('click', () => {
      currentIndex = i;
      renderQuestion();
    });
    navGrid.appendChild(b);
  });
  }

  // =======================================================================
  // === FUNGSI INI YANG DIUBAH SECARA SIGNIFIKAN ===
  function renderQuestion() {
    if (typeof QUESTIONS === 'undefined' || !QUESTIONS[currentIndex]) {
        soalText.textContent = "Gagal memuat soal. Silakan coba muat ulang halaman.";
        return;
    }
      
    const q = QUESTIONS[currentIndex];

    // 1. KOSONGKAN AREA DARI SOAL SEBELUMNYA
    stimulusContainer.innerHTML = '';
    soalText.textContent = '';
    optionsEl.innerHTML = '';

    // 2. LOGIKA BARU: PERIKSA DAN TAMPILKAN STIMULUS
    if (q.stimulus && q.stimulus.length > 0) {
        q.stimulus.forEach(item => {
            if (item.type === 'text') {
                const p = document.createElement('p');
                p.className = 'stimulus-text';
                // Menggunakan innerHTML agar tag <br> berfungsi untuk baris baru
                p.innerHTML = item.content.replace(/\n/g, '<br>'); 
                stimulusContainer.appendChild(p);
            } else if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = 'Gambar Soal';
                img.className = 'stimulus-image';
                stimulusContainer.appendChild(img);
            }
        });
    }
    
    // 3. Tampilkan teks soal (seperti sebelumnya)
    // ===== UBAH .textContent MENJADI .innerHTML =====
    soalText.innerHTML = q.text || ''; // Ditambahkan '|| ""' agar tidak error jika teks soal kosong

    // 4. Tampilkan pilihan jawaban (seperti sebelumnya)
    q.choices.forEach((c, idx) => {
      const o = document.createElement('div');
      o.className = 'option' + (answers[currentIndex] === idx ? ' selected' : '');
      
      // ===== UBAH .textContent MENJADI .innerHTML =====
      o.innerHTML = c; // INI PERUBAHAN UTAMANYA

      o.addEventListener('click', () => {
        answers[currentIndex] = idx;
        sessionStorage.setItem('sim_answers', JSON.stringify(answers));
        renderQuestion();
        renderNav();
      });
      optionsEl.appendChild(o);
    });

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = currentIndex === QUESTIONS.length - 1 ? 'none' : 'inline-block';
    finishBtn.style.display = 'inline-block';

    renderNav(); // Panggil renderNav di akhir untuk update 'current'
  }
  // === AKHIR DARI FUNGSI YANG DIUBAH ===
  // =======================================================================


  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });
  nextBtn.addEventListener('click', () => {
    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  });
  raguBtn.addEventListener('click', () => {
      // Toggle status ragu-ragu untuk soal saat ini
      raguStatus[currentIndex] = !raguStatus[currentIndex];
      sessionStorage.setItem('sim_ragu', JSON.stringify(raguStatus));
    renderNav();
  });
  finishBtn.addEventListener('click', () => {
  if (confirm('Yakin ingin mengakhiri ujian?')) submitExam();
  });
  // gagal pakai sweet alert
  // finishBtn.addEventListener('click', () => {
  //   Swal.fire({
  //     icon: 'warning',
  //     title: 'Yakin ingin mengakhiri ujian?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Ya',
  //     cancelButtonText: 'Batal'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       submitExam();
  //     }
  //   });
  // });

  function tick() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    countdownEl.textContent = m + ':' + s;
    if (timeLeft <= 0) {
      submitExam(true);
      return;
    }
    timeLeft--;
  }

  const savedTime = sessionStorage.getItem('sim_timeleft');
  if (savedTime) timeLeft = parseInt(savedTime, 10);
  const timerInterval = setInterval(() => {
    tick();
    sessionStorage.setItem('sim_timeleft', timeLeft);
  }, 1000);

  function computeScore() {
    let score = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (answers[i] !== undefined && answers[i] === QUESTIONS[i].answer) score++;
    }
    return score;
  }

  function submitExam(isAuto = false) {
    clearInterval(timerInterval); // Hentikan timer saat submit
    const kelas = sessionStorage.getItem('sim_kelas');
    const mapel = sessionStorage.getItem('sim_mapel');

    const score = computeScore();
    sessionStorage.setItem('sim_questions', JSON.stringify(QUESTIONS));
    const payload = {
      nama: nama,
      no_absen: no,
      kelas: kelas,
      mata_pelajaran: mapel,
      score: score,
      jawaban: answers.map((a, i) => ({
        soal: QUESTIONS[i].text,
        pilihan: a === undefined ? null : QUESTIONS[i].choices[a]
      }))
    };

    fetch('save_score.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }).then(r => r.json()).then(data => {
      sessionStorage.clear();
      window.location = 'result.php?score=' + score;
    }).catch(err => {
      console.error(err);
      alert('Terjadi kesalahan saat mengirim nilai.');
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Terjadi Kesalahan',
      //   text: 'Mohon coba lagi nanti.',
      //   confirmButtonText: 'OK'
      // });
      window.location = 'result.php?score=' + score;
    });
  }

  // Inisialisasi render
  renderQuestion();
}