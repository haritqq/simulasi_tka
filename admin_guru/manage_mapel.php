<?php
// admin/manage_mapel.php
include 'auth_check.php';
include 'db_config.php';

$message = '';

// 1. Logika TAMBAH Mapel
if (isset($_POST['add_mapel'])) {
    $nama_mapel = trim($_POST['nama_mapel']);
    if (!empty($nama_mapel)) {
        try {
            $stmt = $pdo->prepare("INSERT INTO mapel (nama_mapel) VALUES (?)");
            $stmt->execute([$nama_mapel]);
            $message = "Sukses: Mapel '$nama_mapel' berhasil ditambahkan.";
        } catch (PDOException $e) {
            $message = "Error: Mapel mungkin sudah ada. (" . $e->getMessage() . ")";
        }
    }
}

// 2. Logika HAPUS Mapel
if (isset($_GET['delete_mapel'])) {
    $id_mapel = $_GET['delete_mapel'];
    // PENTING: Hapus juga semua soal yang terkait
    $pdo->prepare("DELETE FROM soal WHERE id_mapel_fk = ?")->execute([$id_mapel]);
    $pdo->prepare("DELETE FROM mapel WHERE id_mapel = ?")->execute([$id_mapel]);
    $message = "Sukses: Mapel dan semua soal di dalamnya berhasil dihapus.";
    header('Location: manage_mapel.php?message=' . urlencode($message));
    exit;
}

// 3. Ambil daftar mapel untuk ditampilkan
$all_mapel = $pdo->query("SELECT * FROM mapel ORDER BY nama_mapel")->fetchAll();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Kelola Mata Pelajaran</title>
    <link rel="stylesheet" href="style_admin.css"> <style>
        body { font-family: sans-serif; margin: 0; }
        .nav { background: #333; padding: 10px; }
        .nav a { color: white; padding: 10px 15px; text-decoration: none; }
        .nav a:hover { background: #555; }
        .container { padding: 20px; max-width: 800px; margin: auto; }
        h1 { border-bottom: 2px solid #f4f4f4; padding-bottom: 10px; }
        .form-card { background: #f9f9f9; border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background: #f4f4f4; }
        .btn-delete { color: #d00; text-decoration: none; font-weight: bold; }
        .message { padding: 10px; background: #e0ffe0; border: 1px solid #b0ffb0; border-radius: 4px; margin-bottom: 15px; }
    </style>
</head>
<body>
    <div class="nav">
        <a href="dashboard.php">Dashboard</a>
        <a href="manage_mapel.php">Kelola Mapel</a>
        <a href="manage_soal.php">Kelola Soal</a>
        <a href="logout.php" style="float: right;">Logout</a>
    </div>

    <div class="container">
        <h1>Kelola Mata Pelajaran</h1>
        
        <?php if (isset($_GET['message'])) echo '<div class="message">' . htmlspecialchars($_GET['message']) . '</div>'; ?>
        <?php if (!empty($message)) echo '<div class="message">' . $message . '</div>'; ?>

        <div class="form-card">
            <h2>Tambah Mapel Baru</h2>
            <form action="manage_mapel.php" method="POST">
                <label for="nama_mapel">Nama Mata Pelajaran:</label>
                <input type="text" id="nama_mapel" name="nama_mapel" required style="width: 300px; padding: 8px;">
                <button type="submit" name="add_mapel" style="padding: 8px 12px; background: #007bff; color: white; border: none; border-radius: 4px;">+ Tambah</button>
            </form>
            <small>Contoh: "Matematika (Wajib)", "Kimia (IPA)", dll.</small>
        </div>

        <h2>Daftar Mapel Saat Ini</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Mata Pelajaran</th>
                    <th>Tindakan</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($all_mapel as $mapel): ?>
                <tr>
                    <td><?php echo $mapel['id_mapel']; ?></td>
                    <td><?php echo htmlspecialchars($mapel['nama_mapel']); ?></td>
                    <td>
                        <a href="manage_mapel.php?delete_mapel=<?php echo $mapel['id_mapel']; ?>" 
                           onclick="return confirm('YAKIN ingin menghapus mapel ini? SEMUA soal di dalamnya akan terhapus!');" 
                           class="btn-delete">Hapus</a>
                    </td>
                </tr>
                <?php endforeach; ?>
                <?php if (empty($all_mapel)): ?>
                <tr>
                    <td colspan="3">Belum ada mata pelajaran. Silakan tambahkan.</td>
                </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>