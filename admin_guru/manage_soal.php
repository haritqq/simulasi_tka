<?php
// admin/manage_soal.php
include 'auth_check.php';
include 'db_config.php';

// Ambil semua mapel untuk dropdown
$all_mapel = $pdo->query("SELECT * FROM mapel ORDER BY nama_mapel")->fetchAll();

$selected_mapel_id = isset($_GET['mapel_id']) ? (int)$_GET['mapel_id'] : 0;
$soal_list = [];
$nama_mapel_terpilih = '';

if ($selected_mapel_id > 0) {
    // Ambil daftar soal untuk mapel yang dipilih
    $stmt = $pdo->prepare("SELECT * FROM soal WHERE id_mapel_fk = ? ORDER BY id_soal");
    $stmt->execute([$selected_mapel_id]);
    $soal_list = $stmt->fetchAll();
    
    // Ambil nama mapel
    $stmt_nama = $pdo->prepare("SELECT nama_mapel FROM mapel WHERE id_mapel = ?");
    $stmt_nama->execute([$selected_mapel_id]);
    $nama_mapel_terpilih = $stmt_nama->fetchColumn();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Kelola Soal</title>
    <link rel="stylesheet" href="style_admin.css"> <style>
        body { font-family: sans-serif; margin: 0; }
        .nav { background: #333; padding: 10px; }
        .nav a { color: white; padding: 10px 15px; text-decoration: none; }
        .nav a:hover { background: #555; }
        .container { padding: 20px; max-width: 900px; margin: auto; }
        h1 { border-bottom: 2px solid #f4f4f4; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background: #f4f4f4; }
        .btn { padding: 5px 10px; text-decoration: none; border-radius: 4px; color: white; }
        .btn-add { background: #007bff; }
        .btn-edit { background: #28a745; }
        .btn-delete { background: #dc3545; }
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
        <h1>Kelola Soal</h1>
        
        <?php if (isset($_GET['message'])) echo '<div class="message">' . htmlspecialchars($_GET['message']) . '</div>'; ?>

        <form action="manage_soal.php" method="GET">
            <label for="mapel_id" style="font-weight: bold; font-size: 1.1em;">Pilih Mata Pelajaran:</label>
            <select name="mapel_id" id="mapel_id" onchange="this.form.submit()" style="padding: 8px; font-size: 1em;">
                <option value="0">-- Pilih Mapel --</option>
                <?php foreach ($all_mapel as $mapel): ?>
                    <option value="<?php echo $mapel['id_mapel']; ?>" <?php echo ($selected_mapel_id == $mapel['id_mapel']) ? 'selected' : ''; ?>>
                        <?php echo htmlspecialchars($mapel['nama_mapel']); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </form>

        <?php if ($selected_mapel_id > 0): ?>
            <hr style="margin: 20px 0;">
            <h2>Daftar Soal: <?php echo htmlspecialchars($nama_mapel_terpilih); ?></h2>
            <a href="soal_form.php?mapel_id=<?php echo $selected_mapel_id; ?>" class="btn btn-add">+ Tambah Soal Baru</a>
            
            <table>
                <thead>
                    <tr>
                        <th style="width: 5%;">ID</th>
                        <th>Teks Soal (potongan)</th>
                        <th style="width: 25%;">Tindakan</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($soal_list as $soal): ?>
                    <tr>
                        <td><?php echo $soal['id_soal']; ?></td>
                        <td><?php echo htmlspecialchars(substr($soal['teks_soal'], 0, 100)); ?>...</td>
                        <td>
                            <a href="soal_form.php?edit_id=<?php echo $soal['id_soal']; ?>" class="btn btn-edit">Edit</a>
                            <a href="soal_delete.php?id=<?php echo $soal['id_soal']; ?>" 
                               onclick="return confirm('YAKIN ingin menghapus soal ini?');" 
                               class="btn btn-delete">Hapus</a>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                    <?php if (empty($soal_list)): ?>
                    <tr>
                        <td colspan="3">Belum ada soal untuk mapel ini.</td>
                    </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        <?php endif; ?>
    </div>
</body>
</html>