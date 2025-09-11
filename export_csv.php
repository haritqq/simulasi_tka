<?php
// export_csv.php
require 'db.php';
$stmt = $pdo->query('SELECT * FROM siswa_scores ORDER BY submitted_at DESC');
$rows = $stmt->fetchAll();

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="simulasi_tka_all_scores.csv"');
$output = fopen('php://output','w');
fputcsv($output, ['Nama','No Absen','Nilai','Tanggal Kirim','Jawaban JSON']);
foreach($rows as $r){
    fputcsv($output, [$r['nama'],$r['no_absen'],$r['score'],$r['submitted_at'],$r['jawaban']]);
}
fclose($output);
exit;
?>
