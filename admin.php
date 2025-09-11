<!-- FILE: admin.php -->
<?php
require 'db.php';
$stmt = $pdo->query('SELECT * FROM siswa_scores ORDER BY submitted_at DESC');
$scores = $stmt->fetchAll();
?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin - Daftar Nilai</title>
  <style>
    body{font-family:system-ui,Segoe UI,Roboto,Arial;background:#f3f7ff;margin:0;padding:20px}
    h1{margin-bottom:16px}
    table{border-collapse:collapse;width:100%;background:white;box-shadow:0 4px 12px rgba(0,0,0,0.08)}
    th,td{border:1px solid #ddd;padding:8px;text-align:left}
    th{background:#0b66ff;color:white}
    .btn{padding:8px 12px;border-radius:6px;border:none;cursor:pointer;font-size:14px}
    .btn.csv{background:#0b66ff;color:white;margin-right:8px}
    .btn.pdf{background:#ff3b30;color:white}
  </style>
</head>
<body>
  <h1>Daftar Nilai Siswa</h1>
  <div style="margin-bottom:12px">
    <button class="btn csv" onclick="exportCSV()">Export CSV</button>
    <button class="btn pdf" onclick="exportPDF()">Export PDF</button>
  </div>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>No. Absen</th>
        <th>Nilai</th>
        <th>Tanggal</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach($scores as $i=>$row): ?>
        <tr>
          <td><?= $i+1 ?></td>
          <td><?= htmlspecialchars($row['nama']) ?></td>
          <td><?= htmlspecialchars($row['no_absen']) ?></td>
          <td><?= $row['score'] ?></td>
          <td><?= $row['submitted_at'] ?></td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script>
    function exportCSV(){
      let csv = 'No,Nama,No Absen,Nilai,Tanggal\\n';
      const rows = document.querySelectorAll('table tbody tr');
      rows.forEach((tr,i)=>{
        const cols = tr.querySelectorAll('td');
        const line = Array.from(cols).map(td=> '"'+td.innerText+'"').join(',');
        csv += (i+1)+','+line+'\\n';
      });
      const blob = new Blob([csv],{type:'text/csv'});
      const url = URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;a.download='daftar_nilai.csv';a.click();
      URL.revokeObjectURL(url);
    }

    function exportPDF(){
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p','pt','a4');
      doc.setFontSize(14);
      doc.text('Daftar Nilai Siswa - Simulasi TKA',40,40);
      let y=70;
      const rows = document.querySelectorAll('table tbody tr');
      rows.forEach((tr,i)=>{
        const cols = tr.querySelectorAll('td');
        let text = `${i+1}. ${cols[1].innerText} (Absen ${cols[2].innerText}) - Nilai: ${cols[3].innerText} - ${cols[4].innerText}`;
        const lines = doc.splitTextToSize(text,500);
        doc.text(lines,40,y);
        y+=lines.length*16;
        if(y>750){doc.addPage();y=40;}
      });
      doc.save('daftar_nilai.pdf');
    }
  </script>
</body>
</html>