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
</head>
<body>
  <div class="card">
    <h1>Ujian TKA - Login Siswa</h1>
    <p>Masukkan data Anda, lalu klik <strong>Mulai Ujian</strong>.</p>
    
    <label for="nama">Nama Siswa</label>
    <input id="nama" name="nama" type="text" placeholder="Nama lengkap" required>
    
    <label for="no_absen">NISN</label>
    <input id="no_absen" name="no_absen" type="text" placeholder="Contoh: 12345678" required>
    
    <label for="kelas">Kelas</label>
    <select name="kelas" id="kelas" required>
        <option value="">-- Pilih Kelas --</option>
        <option value="X IPA 1">X IPA 1</option>
        <option value="X IPA 2">X IPA 2</option>
        <option value="XI IPA 1">XI IPA 1</option>
        <option value="XI IPA 2">XI IPA 2</option>
        <option value="XII IPA 1">XII IPA 1</option>
    </select>

    <label for="mata_pelajaran">Mata Pelajaran</label>
    <select name="mata_pelajaran" id="mata_pelajaran" required>
        <option value="">-- Pilih Mata Pelajaran --</option>
        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
        <option value="Matematika">Matematika</option>
        <option value="IPA">IPA</option>
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