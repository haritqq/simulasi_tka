<?php
/*
 * GET_QUESTIONS.PHP
 * Lokasi: / (Folder utama)
 *
 * File ini mengambil nama mata pelajaran dari URL (query string '?mapel=...'),
 * mencari soal-soal terkait di database, dan mencetaknya
 * dalam format JavaScript (sebagai variabel const QUESTIONS).
 */

// 1. Sertakan file koneksi database
// Kita perlu '../' jika file config ada di dalam folder admin
// Jika Anda meletakkan db_config.php di folder utama, ubah ini
require_once 'admin/db.php'; 

// 2. Atur header agar browser membaca ini sebagai file JavaScript
header('Content-Type: application/javascript; charset=utf-8');

// 3. Siapkan array output untuk soal
$questions_output = [];

// 4. Ambil nama mapel dari parameter URL
// (Ini dikirim oleh script di exam.php)
$nama_mapel = isset($_GET['mapel']) ? trim($_GET['mapel']) : '';

if (empty($nama_mapel)) {
    // Jika tidak ada parameter mapel, kirim array kosong
    // untuk mencegah error di script.js
    echo "const QUESTIONS = [];";
    exit;
}

try {
    // 5. Query database untuk mengambil soal
    // Kita JOIN tabel 'soal' dengan tabel 'mapel'
    // untuk mencari soal berdasarkan 'nama_mapel'
    $stmt = $pdo->prepare(
        "SELECT s.id_soal, s.teks_soal, s.stimulus_json, s.choices_json, s.answer_index 
         FROM soal s
         JOIN mapel m ON s.id_mapel_fk = m.id_mapel
         WHERE m.nama_mapel = ?
         ORDER BY s.id_soal ASC" // Urutkan berdasarkan ID
    );
    
    // Eksekusi query dengan aman
    $stmt->execute([$nama_mapel]);

    // 6. Looping hasil database dan format ke struktur array
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        
        // Decode string JSON dari database kembali menjadi array/objek PHP
        $choices = json_decode($row['choices_json'], true);
        $stimulus = json_decode($row['stimulus_json'], true);

        // Jika stimulus kosong (null atau '[]'), jadikan array kosong
        if (is_null($stimulus) || empty($stimulus)) {
            $stimulus = [];
        }

        // Tambahkan ke array output dengan format yang
        // SAMA PERSIS seperti file questions-ori.js Anda
        $questions_output[] = [
            'id'       => (int)$row['id_soal'],
            'text'     => $row['teks_soal'],
            'choices'  => $choices,
            'answer'   => (int)$row['answer_index'],
            'stimulus' => $stimulus
        ];
    }

} catch (PDOException $e) {
    // Jika terjadi error database, catat error
    // dan kirim array kosong agar ujian tidak crash
    error_log("Error get_questions.php: " . $e->getMessage());
    echo "const QUESTIONS = []; // Terjadi error saat mengambil soal dari DB";
    exit;
}

// 7. Cetak output akhir sebagai variabel JavaScript
// json_encode() akan mengubah array PHP $questions_output
// menjadi format array/objek JSON yang bisa dibaca JavaScript.
echo "const QUESTIONS = " . json_encode($questions_output, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . ";";

?>