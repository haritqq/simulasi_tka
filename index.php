<?php // Halaman login sederhana untuk siswa ?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Login - Simulasi TKA</title>
  <style>
    body{font-family:system-ui,Segoe UI,Roboto,Arial;margin:0;display:flex;min-height:100vh;align-items:center;justify-content:center;background:linear-gradient(120deg,#e6f0ff,#fff)}
    .card{background:white;padding:28px;border-radius:12px;box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;width:360px}
    h1{margin-top:0;font-size:20px;margin-bottom: 5px;}
    p{margin-top:5px;}
    label{display:block;margin-top:12px;font-size:13px;font-weight:650;color:#333}
    .select{text-align: center;}
    .select-head{font-weight: 700; text-align: center;}
    input,select{width:100%;padding:10px;margin-top:6px;border-radius:8px;border:1px solid #d0d7e6;box-sizing:border-box;}
    .btn{display:inline-block;margin-top:18px;padding:10px 14px;border-radius:10px;background:#0b66ff;color:white;border:none;width:100%;font-weight:600;cursor:pointer}
  </style>
  <link rel="stylesheet" href="vendor/header-footer.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> 
</head>

<body>
  <div class="card">
    <div class="icon-wrapper">
      <div class="icon">
        <span style="font-size: 30px; color: white ;">
          <i class="fa-solid fa-graduation-cap"></i>
        </span>
      </div>
    </div>

    <div style="text-align: center;">
    <h1>Tes Kemampuan Akademik</h1>
    <p>Masukkan data Anda, lalu klik <strong>Mulai Ujian</strong>.</p>
    </div>
    
    <label for="nama">
      <span style="font-size: 13px; color: Dodgerblue;">
      <i class="fa-solid fa-user"></i>
      </span>Nama Lengkap</label>
    <input id="nama" name="nama" type="text" placeholder="Nama lengkap" required>
    
    <label for="no_absen">
      <span style="font-size: 13px; color: Dodgerblue;">
      <i class="fa-solid fa-address-card"></i>
      </span> NISN</label>
    
    <input id="no_absen" name="no_absen" type="number" maxlength="10" placeholder="Contoh: 12345678" required>
    
    <label for="kelas"><span style="font-size: 13px; color: Dodgerblue;">
      <i class="fa-solid fa-house-user"></i>
      </span> Kelas</label>
    <select name="kelas" id="kelas" required>
        <option class="select" value="" style="color: grey;">Pilih Kelas</option>
        <option value="XII A1 1">XII A1 1</option> 
        <option value="XII A1 2">XII A1 2</option>
        <option value="XII A1 3">XII A1 3</option>
        <option value="XII A2 1">XII A2 1</option>
        <option value="XII A2 2">XII A2 2</option>
        <option value="XII A2 3">XII A2 3</option>
        <option value="XII A3 1">XII A3 1</option>
        <option value="XII A3 2">XII A3 2</option>
    </select>

    <label for="mata_pelajaran"><span style="font-size: 13px; color: Dodgerblue;">
      <i class="fa-solid fa-book"></i>
      </span> Mata Pelajaran</label>
    <select class="mapel" name="mata_pelajaran" id="mata_pelajaran" placeholder="Pilih Mata Pelajaran" required>
        <option class="select" value="" style="color: grey; position: text-align: center;">Pilih Mata Pelajaran</option>

        <option class="select-head" disabled>--- Mapel Pilihan WAJIB ---</option>
            <option value="Bahasa Indonesia (Wajib)">Bahasa Indonesia (Wajib)</option>
            <option value="Matematika (Wajib)">Matematika (Wajib)</option>
            <option value="Bahasa Inggris (Wajib)">Bahasa Inggris (Wajib)</option>

        <option class="select-head" disabled>--- Mapel Pilihan IPA ---</option>
            <option value="">Matematika Lanjutan (IPA) - blm ada soal</option>
            <option value="">Fisika (IPA) - blm ada soal</option>
            <option value="">Kimia (IPA) - blm ada soal</option>
            <option value="">Biologi (IPA) - blm ada soal</option>
            <option value="Bahasa Inggris Lanjutan (IPA)">Bahasa Inggris Lanjutan (IPA)</option>

        <option class="select-head" disabled>--- Mapel Pilihan IPS ---</option>
            <option value="Sosiologi (IPS)">Sosiologi (IPS)</option>
            <option value="Geografi (IPS)">Geografi (IPS)</option>
            <option value="Ekonomi (IPS)">Ekonomi (IPS)</option>
            <option value="">Sejarah (IPS) - blm ada soal</option>
            <option value="Bahasa Inggris Lanjutan (IPS)">Bahasa Inggris Lanjutan (IPS)</option>
    </select>

    <button id="mulai" class="btn">Mulai Ujian</button>
  </div>

  <script>
    document.getElementById('mulai').addEventListener('click', ()=>{
      const nama = document.getElementById('nama').value.trim();
      const no = document.getElementById('no_absen').value.trim();
      const kelas = document.getElementById('kelas').value; // Ambil nilai kelas
      const mapel = document.getElementById('mata_pelajaran').value; // Ambil nilai mapel

      if(!nama || !no || !kelas || !mapel){
        alert('Mohon lengkapi semua data terlebih dahulu (Nama, NISN, Kelas, dan Mata Pelajaran).');
        return;
      }
      
      // Simpan semua data di sessionStorage
      sessionStorage.setItem('sim_nama', nama);
      sessionStorage.setItem('sim_no', no);
      sessionStorage.setItem('sim_kelas', kelas); // Simpan kelas
      sessionStorage.setItem('sim_mapel', mapel); // Simpan mapel

      window.location = 'exam.php?soal=1';
    });
  </script>

    <!-- Footer -->
  <div class="footer">
    Copyright © 2025 SMA Negeri 8 Banda Aceh. All rights reserved.
  </div>
</body>
</html>