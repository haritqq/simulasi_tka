<?php
// FILE: save_score.php

// 1. Konfigurasi Database
$host = 'localhost';
$db   = 'simulasi_tka';
$user = 'root'; // Ganti jika username database Anda berbeda
$pass = '';     // Ganti jika password database Anda berbeda
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

// Header untuk menandakan response adalah JSON
header('Content-Type: application/json');

try {
    // 2. Buat koneksi ke database
    $pdo = new PDO($dsn, $user, $pass, $options);

    // 3. Ambil data JSON yang dikirim dari JavaScript
    $json_payload = file_get_contents('php://input');
    $data = json_decode($json_payload);

    // Validasi sederhana
    if (!$data || !isset($data->nama) || !isset($data->no_absen) || !isset($data->kelas)) {
        throw new Exception('Data tidak lengkap.');
    }

    // 4. Siapkan query SQL untuk menyimpan data
    $sql = "INSERT INTO siswa_score (nama, no_absen, kelas, mata_pelajaran, score, jawaban, submitted_at) 
            VALUES (?, ?, ?, ?, ?, ?, NOW())";
    
    $stmt = $pdo->prepare($sql);

    // 5. Bind parameter dan eksekusi
    $stmt->execute([
        $data->nama,
        $data->no_absen,
        $data->kelas,
        $data->mata_pelajaran,
        $data->score,
        json_encode($data->jawaban) // Simpan jawaban sebagai string JSON
    ]);

    // 6. Kirim response berhasil
    echo json_encode(['status' => 'success', 'message' => 'Nilai berhasil disimpan.']);

} catch (Exception $e) {
    // 7. Kirim response error jika terjadi masalah
    http_response_code(500); // Set status kode error
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}