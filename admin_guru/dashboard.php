<?php
// admin/dashboard.php
include 'auth_check.php'; // Cek apakah sudah login
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dashboard Admin</title>
    <style>
        body { font-family: sans-serif; margin: 20px; }
        .nav { background: #333; padding: 10px; }
        .nav a { color: white; padding: 10px 15px; text-decoration: none; }
        .nav a:hover { background: #555; }
        .container { padding: 20px; }
        h1 { border-bottom: 2px solid #f4f4f4; padding-bottom: 10px; }
        .card-container { display: flex; gap: 20px; margin-top: 20px; }
        .card { background: #fff; border: 1px solid #ccc; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); flex: 1; }
        .card h2 { margin-top: 0; }
        .card a { display: block; padding: 10px 15px; background: #007bff; color: white; text-align: center; border-radius: 4px; text-decoration: none; margin-top: 15px; }
    </style>
</head>
<body>
    <div class="nav">
        <a href="dashboard.php">Dashboard</a>
        <a href="manage_mapel.php">Kelola Mapel</a>
        <a href="manage_soal.php">Kelola Soal</a>
        <a href="logout.php" style="float: right;">Logout</a>
    </div>

    <div class="container">
        <h1>Selamat Datang, <?php echo htmlspecialchars($_SESSION['admin_username']); ?>!</h1>
        <p>Gunakan menu navigasi di atas atau tombol di bawah untuk mengelola sistem ujian.</p>
        
        <div class="card-container">
            <div class="card">
                <h2>Kelola Mata Pelajaran</h2>
                <p>Tambah, edit, atau hapus mata pelajaran yang akan diujikan.</p>
                <a href="manage_mapel.php">Buka Kelola Mapel</a>
            </div>
            <div class="card">
                <h2>Kelola Soal</h2>
                <p>Tambah, edit, atau hapus soal untuk setiap mata pelajaran.</p>
                <a href="manage_soal.php">Buka Kelola Soal</a>
            </div>
        </div>
    </div>
</body>
</html>