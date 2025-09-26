<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Ujian TKA - Soal</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <main class="main">
      <div class="header">
        <h2 id="exam-title">Ujian TKA</h2>
        <div class="timer">Sisa Waktu: <span id="countdown">60:00</span></div>
      </div>
      <div class="card soal-card">
    <div id="stimulus-container" class="stimulus"></div> <div id="soal-text" class="soal-text"></div>
    <div id="options" class="options"></div>
        <div class="nav-buttons">
          <button id="prevBtn" class="btn secondary">Sebelumnya</button>
          <button id="nextBtn" class="btn primary">Selanjutnya</button>
        </div>
      </div>
    </main>
    <aside class="sidebar">
      <div class="box">
        <h3>Navigasi Soal</h3>
        <div id="nav-grid" class="nav-grid"></div>
        <div style="margin-top:12px;text-align:center">
          <button id="finishBtn" class="btn danger">Selesaikan Ujian</button>
        </div>
      </div>
    </aside>
  </div>

  <script>
    // SCRIPT LOADER DINAMIS v3 (Paling Aman)
    const mapel = sessionStorage.getItem('sim_mapel');
    let questionFile = '';

    if (mapel) {
        document.getElementById('exam-title').innerText = 'Ujian TKA - ' + mapel;
    }

    switch(mapel) {
        case 'Matematika (Wajib)':
            questionFile = 'questions_mtk.js';
            break;
        case 'IPA (Wajib)':
            questionFile = 'questions_ipa.js';
            break;
        default:
            questionFile = 'questions.js';
            break;
    }

    if (questionFile) {
        const questionScript = document.createElement('script');
        questionScript.src = questionFile;
        
        // Langkah 1: Setelah file soal dimuat...
        questionScript.onload = function() {
            const mainScript = document.createElement('script');
            mainScript.src = 'script.js';

            // Langkah 2: ...muat file script utama. Setelah itu...
            mainScript.onload = function() {
                // Langkah 3: ...jalankan fungsi startExam() yang ada di dalamnya.
                startExam(); 
            };
            
            document.body.appendChild(mainScript);
        };
        
        document.body.appendChild(questionScript);
    } else {
        alert("Tidak bisa memuat soal, mata pelajaran tidak ditemukan.");
    }
  </script>
</body>
</html>