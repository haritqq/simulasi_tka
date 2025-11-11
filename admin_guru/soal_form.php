<?php
// admin/soal_form.php
include 'auth_check.php';
include 'db_config.php';

// Inisialisasi variabel
$is_edit = false;
$soal_data = [
    'id_soal' => null,
    'id_mapel_fk' => isset($_GET['mapel_id']) ? (int)$_GET['mapel_id'] : 0,
    'teks_soal' => '',
    'stimulus' => '', // Teks stimulus sederhana
    'choices' => ['', '', '', ''],
    'answer_index' => 0
];

// --- LOGIKA SAVING (Saat form disubmit) ---
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_mapel = (int)$_POST['id_mapel_fk'];
    $teks_soal = $_POST['teks_soal'];
    $stimulus_text = $_POST['stimulus_text'];
    $answer_index = (int)$_POST['answer_index'];
    $edit_id = isset($_POST['id_soal']) ? (int)$_POST['id_soal'] : 0;
    
    // 1. Format choices ke JSON
    $choices_array = [
        $_POST['choice_0'],
        $_POST['choice_1'],
        $_POST['choice_2'],
        $_POST['choice_3'],
    ];
    // Anda bisa menambah pilihan ke-5 di sini jika perlu
    if (isset($_POST['choice_4']) && !empty($_POST['choice_4'])) {
        $choices_array[] = $_POST['choice_4'];
    }
    $choices_json = json_encode($choices_array);

    // 2. Format stimulus ke JSON (hanya text untuk saat ini)
    $stimulus_data = [];
    if (!empty($stimulus_text)) {
        $stimulus_data[] = [
            'type' => 'text',
            'content' => $stimulus_text
        ];
    }
    $stimulus_json = json_encode($stimulus_data);

    // 3. Tentukan query (INSERT atau UPDATE)
    if ($edit_id > 0) {
        // UPDATE
        $stmt = $pdo->prepare(
            "UPDATE soal SET teks_soal = ?, stimulus_json = ?, choices_json = ?, answer_index = ? 
             WHERE id_soal = ?"
        );
        $stmt->execute([$teks_soal, $stimulus_json, $choices_json, $answer_index, $edit_id]);
        $message = "Soal berhasil diperbarui.";
    } else {
        // INSERT
        $stmt = $pdo->prepare(
            "INSERT INTO soal (id_mapel_fk, teks_soal, stimulus_json, choices_json, answer_index) 
             VALUES (?, ?, ?, ?, ?)"
        );
        $stmt->execute([$id_mapel, $teks_soal, $stimulus_json, $choices_json, $answer_index]);
        $message = "Soal berhasil ditambahkan.";
    }
    
    // Redirect kembali ke halaman list soal
    header('Location: manage_soal.php?mapel_id=' . $id_mapel . '&message=' . urlencode($message));
    exit;
}

// --- LOGIKA LOADING (Saat halaman dibuka untuk edit) ---
if (isset($_GET['edit_id'])) {
    $is_edit = true;
    $edit_id = (int)$_GET['edit_id'];
    
    $stmt = $pdo->prepare("SELECT * FROM soal WHERE id_soal = ?");
    $stmt->execute([$edit_id]);
    $data = $stmt->fetch();
    
    if ($data) {
        $soal_data['id_soal'] = $data['id_soal'];
        $soal_data['id_mapel_fk'] = $data['id_mapel_fk'];
        $soal_data['teks_soal'] = $data['teks_soal'];
        $soal_data['answer_index'] = $data['answer_index'];
        
        // Decode JSON
        $soal_data['choices'] = json_decode($data['choices_json'], true);
        
        $stimulus_arr = json_decode($data['stimulus_json'], true);
        if (!empty($stimulus_arr) && $stimulus_arr[0]['type'] == 'text') {
            $soal_data['stimulus'] = $stimulus_arr[0]['content'];
        }
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title><?php echo $is_edit ? 'Edit Soal' : 'Tambah Soal'; ?></title>
    <link rel="stylesheet" href="style_admin.css"> <style>
        body { font-family: sans-serif; margin: 0; }
        .nav { background: #333; padding: 10px; }
        .nav a { color: white; padding: 10px 15px; text-decoration: none; }
        .nav a:hover { background: #555; }
        .container { padding: 20px; max-width: 800px; margin: auto; }
        h1 { border-bottom: 2px solid #f4f4f4; padding-bottom: 10px; }
        .form-group { margin-bottom: 20px; }
        label { display: block; font-weight: bold; margin-bottom: 8px; }
        textarea, input[type="text"] { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
        textarea { min-height: 100px; }
        .choice-item { display: flex; align-items: center; margin-bottom: 10px; }
        .choice-item input[type="radio"] { width: auto; margin-right: 10px; }
        .btn-save { padding: 12px 20px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1.1em; }
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
        <h1><?php echo $is_edit ? 'Edit Soal' : 'Tambah Soal Baru'; ?></h1>
        
        <form action="soal_form.php" method="POST">
            <input type="hidden" name="id_mapel_fk" value="<?php echo $soal_data['id_mapel_fk']; ?>">
            <?php if ($is_edit): ?>
                <input type="hidden" name="id_soal" value="<?php echo $soal_data['id_soal']; ?>">
            <?php endif; ?>

            <div class="form-group">
                <label for="stimulus_text">Stimulus (Teks/Paragraf) - Opsional</label>
                <textarea id="stimulus_text" name="stimulus_text"><?php echo htmlspecialchars($soal_data['stimulus']); ?></textarea>
                <small>Stimulus gambar belum didukung di form ini.</small>
            </div>
            
            <div class="form-group">
                <label for="teks_soal">Teks Soal</label>
                <textarea id="teks_soal" name="teks_soal" required><?php echo htmlspecialchars($soal_data['teks_soal']); ?></textarea>
            </div>

            <div class="form-group">
                <label>Pilihan Jawaban (Pilih jawaban yang benar)</label>
                <?php for ($i = 0; $i < 4; $i++): // 4 pilihan default ?>
                <div class="choice-item">
                    <input type="radio" name="answer_index" value="<?php echo $i; ?>" 
                           id="radio_<?php echo $i; ?>" <?php echo ($soal_data['answer_index'] == $i) ? 'checked' : ''; ?> required>
                    <label for="radio_<?php echo $i; ?>" style="margin: 0; font-weight: normal; width: 10%;">Pilihan <?php echo chr(65 + $i); ?>:</label>
                    <input type="text" name="choice_<?php echo $i; ?>" 
                           value="<?php echo htmlspecialchars($soal_data['choices'][$i] ?? ''); ?>" 
                           placeholder="Teks jawaban <?php echo chr(65 + $i); ?>" required>
                </div>
                <?php endfor; ?>
                <div class="choice-item">
                    <input type="radio" name="answer_index" value="4" 
                           id="radio_4" <?php echo ($soal_data['answer_index'] == 4) ? 'checked' : ''; ?>>
                    <label for="radio_4" style="margin: 0; font-weight: normal; width: 10%;">Pilihan E:</label>
                    <input type="text" name="choice_4" 
                           value="<?php echo htmlspecialchars($soal_data['choices'][4] ?? ''); ?>" 
                           placeholder="Teks jawaban E (Opsional)">
                </div>
            </div>

            <button type="submit" class="btn-save">Simpan Soal</button>
        </form>
    </div>
</body>
</html>