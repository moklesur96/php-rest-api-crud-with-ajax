<?php

// echo 'Yes';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$name = $data['name'];
$age = $data['age'];
$city = $data['city'];

include '../config.php';

$sql = "UPDATE students SET name='$name', age=$age, city='$city' WHERE id=$id";

if (mysqli_query($connDB, $sql)) {
    echo json_encode(array(
        "message" => "Update Student Data Successfully.",
        "status" => true
    ));
} else {
    echo json_encode(array(
        "message" => "Update Student Data Unsucessfullly.",
        "status" => false,
    ));
}
