<?php // Halaman login sederhana untuk siswa ?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Login - Simulasi TKA</title>
  <style>
    body{font-family:system-ui,Segoe UI,Roboto,Arial;margin:0;display:flex;min-height:100vh;align-items:center;justify-content:center;background:linear-gradient(120deg,#e6f0ff,#fff)}
    .card{background:white;padding:28px;border-radius:12px;box-shadow:0 8px 30px rgba(20,20,60,0.08);width:360px}
    h1{margin-top:0;font-size:20px}
    label,select{display:block;margin-top:12px;font-size:14px}
    input,select{width:100%;padding:10px;margin-top:6px;border-radius:8px;border:1px solid #d0d7e6;box-sizing:border-box;}
    .btn{display:inline-block;margin-top:18px;padding:10px 14px;border-radius:10px;background:#0b66ff;color:white;border:none;width:100%;font-weight:600;cursor:pointer}
  </style>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> 
</head>
<body>
  <div class="card">
    <div style="text-align: center;">
    <h1>Ujian TKA - Login Siswa</h1>
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
        <option value="" style="color: grey;">-- Pilih Kelas --</option>
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
        <option value="" style="color: grey;">-- Mata Pelajaran --</option>
        <option value="Bahasa Indonesia (Wajib)">Bahasa Indonesia (Wajib)</option>
        <option value="Matematika (Wajib)">Matematika (Wajib)</option>
        <option value="IPA (Wajib)">IPA (Wajib)</option>
              <option style="color: grey;" disabled>──────────────────────────────</option>
        <option value="">Matematika Lanjutan (IPA)</option>
        <option value="">Fisika (IPA)</option>
        <option value="">Kimia (IPA)</option>
        <option value="">Biologi (IPA)</option>
        <option value="">B. Inggris Lanjutan (IPA)</option>
              <option style="color: grey;" disabled>──────────────────────────────</option>
        <option value="">Sosiologi (IPS)</option>
        <option value="">Geografi (IPS)</option>
        <option value="">Ekonomi (IPS)</option>
        <option value="">Sejarah (IPS)</option>
        <option value="">B. Inggris Lanjutan (IPS)</option>
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
</body>
</html>