    <?php
// admin/auth_check.php
session_start();

// Jika sesi login tidak ada, lempar kembali ke halaman login
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: index.php?error=Anda harus login terlebih dahulu.');
    exit;
}
?>