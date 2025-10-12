<!-- FILE: result.php -->
<?php // Halaman hasil sederhana dengan tombol export PDF dan animasi
?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Hasil Ujian - Simulasi TKA</title>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    overflow: hidden; /* Mengatur overflow agar efek tidak terpotong */
  }
  .card {
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 760px;
    width: 90%;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  h1 {
    font-size: 2.5em;
    color: #4CAF50; /* Hijau cerah untuk kesan "berhasil" */
    margin: 0 0 10px;
  }
  .score-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  .scorevalue {
    font-size: 2em;
    font-weight: 700;
    color: #777;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .scoretotal {
    font-size: 4em;
    font-weight: 700;
    color: #0b66ff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .meta-info {
    font-size: 1.2em;
    color: #555;
    margin-top: -10px;
  }
  .message {
    font-size: 1.2em;
    color: #777;
    margin: 0 0 20px;
  }
  .actions {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .btn {
    padding: 12px 24px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .btn.primary {
    background: #0b66ff;
    color: white;
    box-shadow: 0 8px 15px rgba(11, 102, 255, 0.3);
  }
  .btn.secondary {
    background: #eef3ff;
    color: #0b66ff;
    box-shadow: 0 4px 8px rgba(11, 102, 255, 0.1);
  }
</style>
  <script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"></script>
</head>
<body>
  <script>
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle", "square", "triangle", "polygon"],
        colors: ["#FFD700", "#FF4500", "#1E90FF", "#32CD32"],
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 80,
            scalar: 1.5,
            shapes: ["star"],
            angle: 90,
        });

        confetti({
            ...defaults,
            particleCount: 50,
            spread: 60,
        });
    }

    // Panggil efek kembang api saat halaman selesai dimuat
    window.addEventListener('load', () => {
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 300);
    });
</script>
  <div class="card">
    <h1>Selamat, Ujian Selesai! 🎉</h1>
    <p class="message">Kerja keras Anda membuahkan hasil. Berikut adalah nilai Anda.</p>
    <div class="score-container">
      <div class="scorevalue" id="scoreValue">0</div>
      <div class="scoretotal" id="scoreTotal">0</div>
      <div class="meta-info" id="meta"></div>
    </div>
    
    <div class="actions">
      <!-- <button id="exportPdf" class="btn primary">Export PDF</button> -->
      <button id="back" class="btn secondary" onclick="location.href='index.php'">Kembali ke Halaman Login</button>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script>
    // --- PERBAIKAN DIMULAI DI SINI ---

    // 1. Ambil data soal yang sudah disimpan dari sessionStorage
    const QUESTIONS = JSON.parse(sessionStorage.getItem('sim_questions') || '[]');
    const totalQuestions = QUESTIONS.length > 0 ? QUESTIONS.length : 20; // Default 20 jika gagal

    // 2. Ambil parameter lain dari URL dan sessionStorage
    const params = new URLSearchParams(location.search);
    const score = params.get('score') || 0;
    const nama = sessionStorage.getItem('sim_nama') || '---';
    const no = sessionStorage.getItem('sim_no') || '---';
    const mapel = sessionStorage.getItem('sim_mapel') || 'Bahasa Indonesia'; // jangan sentuh/hapus, gak tahu kenapa klo hilang error -- males ngecek

    // 3. Tampilkan skor dengan benar
    document.getElementById('scoreValue').textContent = 'Benar ' + score + ' dari ' + totalQuestions + ' Soal';
    document.getElementById('scoreTotal').innerHTML = 'Nilai : ' + score / totalQuestions * 100;
    // document.getElementById('meta').textContent = nama + ' — Absen: ' + no;
    // document.getElementById('meta').textContent = `${nama} — No. Absen: ${no}`;

    document.getElementById('exportPdf').addEventListener('click', async ()=>{
      if (QUESTIONS.length === 0) {
        alert('Data soal tidak ditemukan untuk membuat PDF.');
        return;
      }
      
      const answers = JSON.parse(sessionStorage.getItem('sim_answers') || '[]');
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      doc.setFontSize(16);
      doc.text('Simulasi TKA - ' + mapel, 14, 18);
      doc.setFontSize(11);
      doc.text('Nama: ' + nama, 14, 28);
      doc.text('No. Absen: ' + no, 14, 34);
      doc.text('Nilai: ' + score + ' / ' + totalQuestions, 14, 40);
      doc.text('Tanggal: ' + (new Date()).toLocaleString('id-ID'), 14, 46);

      let y = 56;
      for(let i = 0; i < QUESTIONS.length; i++) {
        const q = QUESTIONS[i];
        const userAnswerIndex = answers[i];
        const userAnswerText = userAnswerIndex !== undefined ? q.choices[userAnswerIndex] : '-';
        
        const lines = doc.splitTextToSize((i + 1) + '. ' + q.text, 180);
        doc.text(lines, 14, y); 
        y += lines.length * 6;
        
        doc.text('Jawaban Siswa: ' + userAnswerText, 18, y); 
        y += 8;
        
        if(y > 270) { 
          doc.addPage(); 
          y = 20; 
        }
      }

      doc.save('simulasi_tka_' + nama.replace(/\s+/g, '_') + '.pdf');
    });
  </script>
</body>
</html>