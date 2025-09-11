<!-- FILE: index.php -->
<?php // Halaman login sederhana untuk siswa
?>
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
    label{display:block;margin-top:12px;font-size:14px}
    input{width:100%;padding:10px;margin-top:6px;border-radius:8px;border:1px solid #d0d7e6}
    .btn{display:inline-block;margin-top:18px;padding:10px 14px;border-radius:10px;background:#0b66ff;color:white;border:none;width:100%;font-weight:600;cursor:pointer}
  </style>
</head>
<body>
  <div class="card">
    <h1>Ujian TKA - Login Siswa</h1>
    <p>Masukkan nama dan nomor absen, lalu klik <strong>Mulai Ujian</strong>.</p>
    <label>Nama Siswa
      <input id="nama" type="text" placeholder="Nama lengkap">
    </label>
    <label>Nomor Absen
      <input id="no_absen" type="text" placeholder="Contoh: 01">
    </label>

    <label for="mata_pelajaran">Mata Pelajaran:</label>
        <select name="mata_pelajaran" id="mata_pelajaran" required>
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
      
      if(!nama || !no){
        alert('Isi nama dan nomor absen terlebih dahulu.');
        return;
      }
      // simpan sementara di sessionStorage lalu pindah ke halaman ujian
      sessionStorage.setItem('sim_nama', nama);
      sessionStorage.setItem('sim_no', no);
      window.location = 'exam.php?soal=1';
    });
  </script>
</body>
</html>