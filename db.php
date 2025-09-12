<!-- FILE: db.php -->
<?php
$DB_HOST = 'localhost:3306';
$DB_NAME = 'smabnasc_simulasi_tka';
$DB_USER = 'smabnasc_admintka';
$DB_PASS = 'admintkasman8';

try {
    $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4", $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}
?>