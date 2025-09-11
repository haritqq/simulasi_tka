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
    body{font-family:system-ui,Segoe UI,Roboto,Arial;margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:linear-gradient(120deg,#fff,#e8fbff)}
    .card{background:white;padding:24px;border-radius:12px;box-shadow:0 12px 30px rgba(20,20,60,0.08);max-width:760px;width:90%}
    h1{margin:0 0 12px}
    .score{font-size:48px;color:#0b66ff;font-weight:700}
    .actions{margin-top:18px;display:flex;gap:12px}
    .btn{padding:10px 14px;border-radius:10px;border:none;cursor:pointer}
    .btn.primary{background:#0b66ff;color:white}
    .btn.secondary{background:#eef3ff;color:#0b66ff}
    .anim{width:120px;height:120px}
  </style>
</head>
<body>
  <div class="card">
    <h1>Terima Kasih</h1>
    <p>Berikut nilai Anda.</p>
    <div style="display:flex;align-items:center;gap:18px">
      <div>
        <div class="score" id="scoreValue">0</div>
        <div id="meta"></div>
      </div>
      <div>
        <!-- animasi sederhana: GIF atau SVG -->
        <img src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif" alt="anim" class="anim">
      </div>
    </div>

    <div class="actions">
      <button id="exportPdf" class="btn primary">Export PDF</button>
      <button id="back" class="btn secondary" onclick="location.href='index.php'">Kembali ke Login</button>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script>
    const params = new URLSearchParams(location.search);
    const score = params.get('score') || 0;
    document.getElementById('scoreValue').textContent = score + ' / ' + ${QUESTIONS.length};
    const nama = sessionStorage.getItem('sim_nama') || '---';
    const no = sessionStorage.getItem('sim_no') || '---';
    document.getElementById('meta').textContent = nama + ' — Absen: ' + no;

    document.getElementById('exportPdf').addEventListener('click', async ()=>{
      // ambil jawaban dari server? Kita ambil dari sessionStorage
      const answers = JSON.parse(sessionStorage.getItem('sim_answers') || '[]');
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const title = 'Simulasi TKA - ' + nama.replace(/\s+/g,'_');
      doc.setFontSize(16);
      doc.text('Simulasi TKA - Bahasa Indonesia',14,18);
      doc.setFontSize(11);
      doc.text('Nama: '+nama,14,28);
      doc.text('No. Absen: '+no,14,34);
      doc.text('Nilai: '+score+' / '+${QUESTIONS.length},14,40);
      doc.text('Tanggal: '+(new Date()).toLocaleString('id-ID'),14,46);

      let y = 56;
      ${'/*'} masukkan soal dan jawaban */
      const Q = ${JSON.stringify(QUESTIONS)};
      for(let i=0;i<Q.length;i++){
        const q = Q[i];
        const jaw = answers[i]===undefined?'-':q.choices[answers[i]];
        const lines = doc.splitTextToSize((i+1)+'. '+q.text, 180);
        doc.text(lines,14,y); y+= lines.length*6;
        doc.text('Jawaban Siswa: '+jaw,18,y); y+=8;
        if(y>270){ doc.addPage(); y=20; }
      }

      doc.save('simulasi_tka_'+nama.replace(/\s+/g,'_')+'.pdf');
    });
  </script>
</body>
</html>