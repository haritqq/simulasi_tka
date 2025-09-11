<?php
// export_pdf.php
// Pastikan composer require dompdf/dompdf sudah dijalankan di folder project
require 'db.php';
require 'vendor/autoload.php';
use Dompdf\Dompdf;

$stmt = $pdo->query('SELECT * FROM siswa_scores ORDER BY submitted_at DESC');
$rows = $stmt->fetchAll();

$html = '<html><head><meta charset="utf-8"><style>body{font-family:DejaVu Sans, sans-serif} table{width:100%;border-collapse:collapse} th,td{border:1px solid #ccc;padding:6px;font-size:12px}</style></head><body>';
$html .= '<h2>Rekap Nilai - Simulasi TKA</h2>';
$html .= '<table><thead><tr><th>No</th><th>Nama</th><th>No Absen</th><th>Nilai</th><th>Tanggal</th><th>Jawaban</th></tr></thead><tbody>';
foreach($rows as $i=>$r){
  $jaw = htmlspecialchars($r['jawaban']);
  $html .= '<tr><td>'.($i+1).'</td><td>'.htmlspecialchars($r['nama']).'</td><td>'.htmlspecialchars($r['no_absen']).'</td><td>'.htmlspecialchars($r['score']).'</td><td>'.htmlspecialchars($r['submitted_at']).'</td><td style="font-size:10px">'.nl2br($jaw).'</td></tr>';
}
$html .= '</tbody></table></body></html>';

$dompdf = new Dompdf();
$dompdf->loadHtml($html);
$dompdf->setPaper('A4','landscape');
$dompdf->render();
$dompdf->stream('rekap_nilai_simulasi_tka.pdf', ['Attachment'=>true]);
exit;
?>
