<?php
$host = 'localhost'; // Database host
$user = 'root';      // Database username
$pass = '';          // Database password
$db   = 'square'; // Database name

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
