<?php // Halaman login sederhana untuk siswa ?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Login - Simulasi TKA</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> 
  
  <style>
    html, body {
      height: 100%; /* Penting: Atur tinggi html dan body menjadi 100% */
      margin: 0;
      font-family: system-ui, Segoe UI, Roboto, Arial;
    }
    body {
      background: linear-gradient(120deg, #e6f0ff, #fff);
      position: relative;
    }
    .background-pattern {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('data:image/svg+xml;utf8,<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="1" fill="rgba(0, 0, 0, 0.1)"/></svg>');
        background-repeat: repeat;
        z-index: -1;
    }
    .main-container {
        min-height: calc(100vh - 58px); /* Tinggi viewport dikurangi tinggi footer */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .card {
      box-shadow: 0 8px 30px rgba(20, 20, 60, 0.08);
      width: 360px;
      z-index: 1;
    }
    .header {
      background-color: #0b66ff;
    }
    .footer {
      background: #f8f9fa;
      color: #6c757d;
      flex-shrink: 0; /* Mencegah footer menyusut */
      padding: 15px; /* Tetapkan padding footer untuk menghitung tinggi yang akurat */
    }
    
    /* --- Custom Styles for Graduation Cap Icon & Animation --- */
    .icon-circle {
      width: 70px;
      height: 70px;
      background-color: #0d6efd;
      border-radius: 50%;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      animation: pulse 2s infinite ease-in-out;
    }
    .icon-circle i {
      color: white;
      font-size: 2.5rem;
    }
    @keyframes pulse {
      0% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
      50% { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); }
      100% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
    }
  </style>
</head>
<body class="d-flex flex-column">
  <div class="background-pattern"></div>
  
  <div class="header text-center text-white py-4 w-100 d-flex flex-column align-items-center">
    <img src="https://via.placeholder.com/50/ffffff/000000?text=LOGO" alt="Logo" class="rounded-circle mb-2">
    <h2 class="fs-5 fw-bold mb-0">PUSMENDIK</h2>
    <p class="fs-6 mb-0">APLIKASI ANBK - Simulasi TKA</p>
  </div>

  <div class="main-container flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100">
    <div class="card p-4 rounded-3 mt-4 mb-4">
      <div class="text-center mb-4">
        <div class="icon-circle d-flex align-items-center justify-content-center mx-auto">
          <i class="fas fa-graduation-cap"></i>
        </div>
      </div>

      <h1 class="h5 fw-bold text-center mb-3">Ujian TKA - Login Siswa</h1>
      <p class="text-center text-muted">Masukkan data Anda, lalu klik <strong>Mulai Ujian</strong>.</p>
      
      <div class="mb-3">
        <label for="nama" class="form-label">Nama Siswa</label>
        <input id="nama" name="nama" type="text" class="form-control" placeholder="Nama lengkap" required>
      </div>
      
      <div class="mb-3">
        <label for="no_absen" class="form-label">NISN</label>
        <input id="no_absen" name="no_absen" type="number" maxlength="10" class="form-control" placeholder="Contoh: 12345678" required>
      </div>
      
      <div class="mb-3">
        <label for="kelas" class="form-label">Kelas</label>
        <select name="kelas" id="kelas" class="form-select" required>
            <option value="">-- Pilih Kelas --</option>
            <option value="X IPA 1">X IPA 1</option>
            <option value="X IPA 2">X IPA 2</option>
            <option value="XI IPA 1">XI IPA 1</option>
            <option value="XI IPA 2">XI IPA 2</option>
            <option value="XII IPA 1">XII IPA 1</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="mata_pelajaran" class="form-label">Mata Pelajaran</label>
        <select name="mata_pelajaran" id="mata_pelajaran" class="form-select" required>
            <option value="">-- Pilih Mata Pelajaran --</option>
            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            <option value="Matematika">Matematika</option>
            <option value="IPA">IPA</option>
        </select>
      </div>

      <button id="mulai" class="btn btn-primary w-100 fw-bold">Mulai Ujian</button>
    </div>
  </div>

  <div class="footer text-center py-3 w-100">
      <small>Copyright © 2025 Pusmendik. All rights reserved.</small>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

  <script>
    document.getElementById('mulai').addEventListener('click', ()=>{
      const nama = document.getElementById('nama').value.trim();
      const no = document.getElementById('no_absen').value.trim();
      const kelas = document.getElementById('kelas').value;
      const mapel = document.getElementById('mata_pelajaran').value;

      if(!nama || !no || !kelas || !mapel){
        alert('Mohon lengkapi semua data terlebih dahulu (Nama, NISN, Kelas, dan Mata Pelajaran).');
        return;
      }
      
      sessionStorage.setItem('sim_nama', nama);
      sessionStorage.setItem('sim_no', no);
      sessionStorage.setItem('sim_kelas', kelas);
      sessionStorage.setItem('sim_mapel', mapel);

      window.location = 'exam.php?soal=1';
    });
  </script>
</body>
</html>