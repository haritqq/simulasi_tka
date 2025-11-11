<?php
// admin/login_process.php
session_start();

// GANTI USERNAME DAN PASSWORD INI
$admin_user = 'admin';
$admin_pass = 'admin123';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $admin_user && $password === $admin_pass) {
        // Login berhasil
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_username'] = $username;
        header('Location: dashboard.php');
        exit;
    } else {
        // Login gagal
        header('Location: index.php?error=Username atau password salah.');
        exit;
    }
} 
?>