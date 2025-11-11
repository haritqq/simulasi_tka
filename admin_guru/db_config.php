<?php
$db_host = 'localhost';
$db_name = 'simulasi_tka';
$db_user = 'root';
$db_pass = '';
try {
    // Buat koneksi PDO
    $pdo = new PDO(
        "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", 
        $db_user, 
        $db_pass
    );
    
    // Set atribut error mode
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Set mode fetch default
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    // Tangani error koneksi
    die("KoneSI DATABASE GAGAL: " . $e->getMessage());
}
?>