<?php
// admin/index.php
session_start();
// Jika sudah login, lempar ke dashboard
if (isset($_SESSION['admin_logged_in'])) {
    header('Location: dashboard.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Login Admin</title>
    <style>
        body { font-family: sans-serif; display: grid; place-items: center; min-height: 90vh; background: #f4f4f4; }
        form { background: #fff; border: 1px solid #ccc; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        div { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { width: 300px; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .error { background: #ffe0e0; border: 1px solid #ffb0b0; padding: 10px; border-radius: 4px; color: #d00; margin-bottom: 15px; }
    </style>
</head>
<body>
    <form action="login_process.php" method="POST">
        <h2>Login Admin Ujian</h2>
        <?php
        // Tampilkan pesan error jika ada
        if (isset($_GET['error'])) {
            echo '<div class="error">' . htmlspecialchars($_GET['error']) . '</div>';
        }
        ?>
        <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
</body>
</html>