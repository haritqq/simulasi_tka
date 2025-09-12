<?php
// admin.php
session_start();
require 'db.php';

// simple admin credentials - ganti dengan yang lebih aman di produksi
$ADMIN_USER = 'admin';
$ADMIN_PASS = 'admin123';

// proses login
if(isset($_POST['login_user'])){
  if($_POST['login_user'] === $ADMIN_USER && $_POST['login_pass'] === $ADMIN_PASS){
    $_SESSION['admin_logged'] = true;
  } else {
    $err = 'Credensial salah.';
  }
}

if(isset($_GET['logout'])){ session_destroy(); header('Location: admin.php'); exit; }

if(!isset($_SESSION['admin_logged'])){
  // tampilkan form login
  ?>
  <!doctype html>
  <html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Admin - Login</title>
    <style>
      body{font-family:system-ui,Segoe UI,Roboto,Arial;display:flex;align-items:center;justify-content:center;height:100vh;background:#f3f7ff}
      .card{background:white;padding:20px;border-radius:10px;box-shadow:0 8px 30px rgba(20,20,60,0.06)}
      input{display:block;margin:8px 0;padding:8px;width:260px}
      button{padding:8px 12px;border-radius:8px;border:none;background:#0b66ff;color:#fff;cursor:pointer}
    </style>
  </head>
  <body>
    <div class="card">
      <h3>Login Admin</h3>
      <?php if(!empty($err)) echo '<div style="color:red">'.htmlspecialchars($err).'</div>'; ?>
      <form method="post">
        <input name="login_user" placeholder="username" required>
        <input name="login_pass" placeholder="password" type="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </body>
  </html>
  <?php
  exit;
}

// jika sudah login, ambil data
$stmt = $pdo->query('SELECT * FROM siswa_scores ORDER BY submitted_at DESC');
$rows = $stmt->fetchAll();
?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin - Daftar Nilai</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
    .table{width:100%;border-collapse:collapse}
    .table th,.table td{padding:8px;border-bottom:1px solid #eee;text-align:left}
    .small{font-size:12px;color:#666}
    .btn{padding:8px 12px;border-radius:8px;border:none;cursor:pointer;margin-left:6px}
    .btn.primary{background:#0b66ff;color:#fff}
    .btn.secondary{background:#eef3ff;color:#0b66ff}
  </style>
</head>
<body>
  <div style="max-width:1100px;margin:20px auto">
    <div class="card">
      <div class="topbar">
        <h2>Daftar Nilai Siswa</h2>
        <div>
          <a class="btn secondary" href="admin.php?logout=1">Logout</a>
          <a class="btn primary" href="export_csv.php">Export CSV</a>
          <a class="btn primary" href="export_pdf.php" target="_blank">Export PDF</a>
        </div>
      </div>

      <div style="overflow:auto">
        <table class="table">
          <thead>
            <tr><th>No</th><th>Mata Pelajaran</th><th>Kelas</th><th>Nama</th><th>No. Absen</th><th>Nilai</th><th>Waktu Kirim</th><th>Jawaban (preview)</th></tr>
          </thead>
          <tbody>
            <?php foreach($rows as $i => $r): ?>
              <tr>
                <td><?php echo $i+1; ?></td>
                <td><?php echo htmlspecialchars($r['mata_pelajaran']); ?></td>
                <td><?php echo htmlspecialchars($r['mata_pelajaran']); ?></td>
                <td><?php echo htmlspecialchars($r['nama']); ?></td>
                <td><?php echo htmlspecialchars($r['no_absen']); ?></td>
                <td><?php echo htmlspecialchars($r['score']); ?></td>
                <td class="small"><?php echo htmlspecialchars($r['submitted_at']); ?></td>
                <td class="small"><button onclick='showDetail(<?php echo json_encode($r['jawaban']); ?>)'>Lihat</button></td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <script>
    function showDetail(j){
      let parsed = j;
      try{ parsed = JSON.parse(j); }catch(e){ /* already json string */ }
      let html = '<ol>' + (parsed.map(p=>'<li>'+ (p.soal || '') + '<br><b>Jawaban:</b> '+ (p.pilihan||'-') +'</li>').join('')) + '</ol>';
      const w = window.open('','_blank','width=600,height=600');
      w.document.write('<html><head><title>Detail Jawaban</title></head><body>'+html+'</body></html>');
    }
  </script>
</body>
</html>
