<?php
$nama = $_POST['nama'];
$no_absen = $_POST['no_absen'];
$mata_pelajaran = $_POST['mata_pelajaran'];
?>
<script>
  const siswaInfo = {
    nama: "<?= htmlspecialchars($nama) ?>",
    no_absen: "<?= htmlspecialchars($no_absen) ?>",
    mata_pelajaran: "<?= htmlspecialchars($mata_pelajaran) ?>"
  };
</script>
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
        <h2>Ujian TKA - Bahasa Indonesia</h2>
        <div class="timer">Sisa Waktu: <span id="countdown">60:00</span></div>
      </div>

      <div class="card soal-card">
        <div id="soal-text" class="soal-text">Memuat soal...</div>
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

  <script src="questions.js"></script>
  <script src="script.js"></script>
</body>
</html>

<?php if ($mata_pelajaran === 'Matematika'): ?>
  <script src="questions_mtk.js"></script>
<?php elseif ($mata_pelajaran === 'IPA'): ?>
  <script src="questions_ipa.js"></script>
<?php else: ?>
  <script src="questions_bi.js"></script>
<?php endif; ?>
