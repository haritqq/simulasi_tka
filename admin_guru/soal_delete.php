<?php
// admin/soal_delete.php
include 'auth_check.php';
include 'db_config.php';

if (!isset($_GET['id'])) {
    header('Location: manage_soal.php');
    exit;
}

$id_soal = (int)$_GET['id'];

// 1. Ambil ID mapel dulu agar bisa redirect kembali
$id_mapel = 0;
$stmt_check = $pdo->prepare("SELECT id_mapel_fk FROM soal WHERE id_soal = ?");
$stmt_check->execute([$id_soal]);
$id_mapel = $stmt_check->fetchColumn();

if ($id_mapel) {
    // 2. Hapus soalnya
    $stmt_delete = $pdo->prepare("DELETE FROM soal WHERE id_soal = ?");
    $stmt_delete->execute([$id_soal]);
    $message = "Soal berhasil dihapus.";
} else {
    $message = "Error: Soal tidak ditemukan.";
}

header('Location: manage_soal.php?mapel_id=' . $id_mapel . '&message=' . urlencode($message));
exit;
?>