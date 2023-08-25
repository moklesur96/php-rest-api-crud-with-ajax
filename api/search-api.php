<?php
header('Content-Type: application/json');
header('Access-Allow-Origin: *');

$search_key = isset($_GET['search']) ? $_GET['search'] : die();

include '../config.php';

$sql = "SELECT * FROM students WHERE name LIKE '%$search_key%'";
$result = mysqli_query($connDB, $sql);

if (mysqli_num_rows($result) > 0) {
    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($output);
} else {
    echo json_encode(array(
        "message" => "No Data Found.",
        "status" => false,
    ));
}
