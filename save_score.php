<!-- FILE: save_score.php -->
<?php



require 'db.php';
// menerima POST JSON
$data = json_decode(file_get_contents('php://input'), true);
if(!$data){ http_response_code(400); echo json_encode(['error'=>'Invalid payload']); exit; }
$nama = $data['nama'] ?? '';
$no = $data['no_absen'] ?? '';
$score = intval($data['score'] ?? 0);
$jawaban = json_encode($data['jawaban'] ?? []);

try{
    $stmt = $pdo->prepare("INSERT INTO siswa_scores (nama,no_absen,mata_pelajaran,score,jawaban) VALUES (?,?,?,?,?)");
    $stmt->execute([$nama,$no_absen,$mata_pelajaran,$score,json_encode($jawaban)]);
    echo json_encode(['ok'=>true]);
}catch(Exception $e){
    http_response_code(500);
    echo json_encode(['error'=>$e->getMessage()]);
}
?>