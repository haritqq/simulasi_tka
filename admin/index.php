<?php
// admin.php
session_start();

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "simulasi_tka";

// Buat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// ---- KODE LOGIN ADMIN ----
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
      h1{font-size:24px;margin:0 0 10px;text-align:center}
      label,input{display:block}
      input{width:100%;box-sizing:border-box;margin:5px 0 15px;padding:8px;border:1px solid #ddd;border-radius:4px}
      button{width:100%;padding:10px;border:none;border-radius:4px;background:#007bff;color:white;cursor:pointer}
      .err{color:red;font-size:12px;text-align:center;margin-bottom:10px}
    </style>
  </head>
  <body>
    <div class="card">
      <form method="post">
        <h1>Admin Login</h1>
        <?php if(isset($err)): ?><div class="err"><?php echo $err; ?></div><?php endif; ?>
        <label>Username</label>
        <input type="text" name="login_user" required>
        <label>Password</label>
        <input type="password" name="login_pass" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </body>
  </html>
  <?php
  exit;
}

// ---- KODE GRAFIK DIMULAI DI SINI ----

// ambil data dari db
$rows = $conn->query("SELECT * FROM siswa_scores ORDER BY submitted_at DESC")->fetch_all(MYSQLI_ASSOC);

// Ambil data rata-rata skor per kelas
$sql_kelas = "SELECT kelas, AVG(score) as avg_score FROM siswa_scores GROUP BY kelas ORDER BY kelas";
$result_kelas = $conn->query($sql_kelas);
$labels_kelas = [];
$data_kelas = [];
while($row = $result_kelas->fetch_assoc()) {
    $labels_kelas[] = $row['kelas'];
    $data_kelas[] = round($row['avg_score'], 2);
}
$chartDataKelas = json_encode(['labels' => $labels_kelas, 'data' => $data_kelas]);

// Ambil data rata-rata skor per mata pelajaran
$sql_mapel = "SELECT mata_pelajaran, AVG(score) as avg_score FROM siswa_scores GROUP BY mata_pelajaran ORDER BY mata_pelajaran";
$result_mapel = $conn->query($sql_mapel);
$labels_mapel = [];
$data_mapel = [];
while($row = $result_mapel->fetch_assoc()) {
    $labels_mapel[] = $row['mata_pelajaran'];
    $data_mapel[] = round($row['avg_score'], 2);
}
$chartDataMapel = json_encode(['labels' => $labels_mapel, 'data' => $data_mapel]);

?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin - Dashboard</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2mJzKq6pX36F2e7J+3Wj6f0n5Q4G8wM34zR4D65F3fG+42B3c5F6A8F6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <style>
    body{font-family:system-ui,Segoe UI,Roboto,Arial}
    .main-content{padding:20px;max-width:1200px;margin:auto}
    .chart-container{padding:20px;border-radius:10px;background:white;box-shadow:0 8px 30px rgba(20,20,60,0.06);margin-bottom:20px}
    .chart-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
    @media(max-width:768px){.chart-grid{grid-template-columns:1fr}}
  </style>
</head>
<body>
  <div class="main-content">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h3">Dashboard Admin</h1>
      <a href="?logout" class="btn btn-danger btn-sm"><i class="fas fa-sign-out-alt"></i> Logout</a>
    </div>

    <div class="chart-grid">
      <div class="chart-container">
        <h5 class="text-center">Rata-rata Skor per Kelas</h5>
        <canvas id="rataRataSkorKelas"></canvas>
      </div>
      <div class="chart-container">
        <h5 class="text-center">Rata-rata Skor per Mata Pelajaran</h5>
        <canvas id="rataRataSkorMapel"></canvas>
      </div>
    </div>
    
    <hr class="my-4">

    <div class="card mb-4">
      <div class="card-header">
        <h5 class="mb-0">Daftar Nilai Siswa</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped table-hover table-sm">
            <thead>
              <tr><th>No</th><th>Mata Pelajaran</th><th>Kelas</th><th>Nama</th><th>NISN</th><th>Nilai</th><th>Waktu Kirim</th><th>Jawaban (preview)</th></tr>
            </thead>
            <tbody>
              <?php foreach($rows as $i => $r): ?>
                <tr>
                  <td><?php echo $i+1; ?></td>
                  <td><?php echo htmlspecialchars($r['mata_pelajaran']); ?></td>
                  <td><?php echo htmlspecialchars($r['kelas']); ?></td>
                  <td><?php echo htmlspecialchars($r['nama']); ?></td>
                  <td><?php echo htmlspecialchars($r['no_absen']); ?></td>
                  <td><?php echo htmlspecialchars($r['score']); ?></td>
                  <td class="small"><?php echo htmlspecialchars($r['submitted_at']); ?></td>
                  <td class="small"><button class="btn btn-info btn-sm" onclick='showDetail(<?php echo json_encode($r['jawaban']); ?>)'>Lihat</button></td>
                </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    // Data untuk Rata-rata Skor per Kelas
    const chartDataKelas = <?php echo $chartDataKelas; ?>;
    const ctxKelas = document.getElementById('rataRataSkorKelas').getContext('2d');
    new Chart(ctxKelas, {
        type: 'bar',
        data: {
            labels: chartDataKelas.labels,
            datasets: [{
                label: 'Rata-rata Skor',
                data: chartDataKelas.data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { 
                  beginAtZero: true, 
                  ticks : {values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]},
                  max: 20
                }
            }
        }
    });

    // Data untuk Rata-rata Skor per Mata Pelajaran
    const chartDataMapel = <?php echo $chartDataMapel; ?>;
    const ctxMapel = document.getElementById('rataRataSkorMapel').getContext('2d');
    new Chart(ctxMapel, {
        type: 'bar',
        data: {
            labels: chartDataMapel.labels,
            datasets: [{
                label: 'Rata-rata Skor',
                data: chartDataMapel.data,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { 
                  beginAtZero: true, 
                  ticks : {values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]},
                  max: 20
                }
                // x: {
                //     ticks: {
                //         callback: function(value, index, values) {
                //             const label = this.getLabelForValue(value);
                //             const maxLength = 10; // Tentukan batas karakter per baris (misal: 10 karakter)

                //             // Jika panjang label melebihi batas, bagi menjadi baris baru
                //             if (label.length > maxLength) {
                //                 // Cari spasi terdekat untuk membagi kata
                //                 let firstHalf = label.substring(0, maxLength);
                //                 let secondHalf = label.substring(maxLength);

                //                 // Cek apakah pemisahan jatuh di tengah kata
                //                 const lastSpace = firstHalf.lastIndexOf(' ');
                //                 if (lastSpace !== -1) {
                //                     // Pindahkan kata yang terpotong ke baris kedua
                //                     secondHalf = firstHalf.substring(lastSpace) + secondHalf;
                //                     firstHalf = firstHalf.substring(0, lastSpace);
                //                 }
                                
                //                 // Gabungkan dengan karakter newline
                //                 return [firstHalf, secondHalf];
                                
                //                 // anjing puyeng makin ngaco, cari label x di documentasi
                //             }
                //             return label;
                //         }
                //     }
                // }
            }
        }
    });

    function showDetail(j){
      let parsed = j;
      try{ parsed = JSON.parse(j); }catch(e){ /* already json string */ }
      let html = '<ol>' + (parsed.map(p=>'<li>'+ (p.soal || '') + '<br><b>Jawaban:</b> '+ (p.pilihan||'-') +'</li>').join('')) + '</ol>';
      const w = window.open('','_blank','width=600,height=600,scrollbars=yes');
      w.document.body.innerHTML = html;
      w.document.title = 'Detail Jawaban';
    }
  </script>

</body>
</html>