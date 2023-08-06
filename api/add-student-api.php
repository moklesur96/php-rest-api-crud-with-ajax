<?php

header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Method, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$age = $data['age'];
$city = $data['city'];

include '../config.php';

$sql = "INSERT INTO students(name,age,city) VALUES('$name', $age, '$city')";

if (mysqli_query($connDB, $sql)) {
    echo json_encode(array(
        "message" => "New Student Added Sucessfully.",
        "status" => true
    ));
} else {
    echo json_encode(array(
        "message" => "New Student Not Added Sucessfully.",
        "status" => false
    ));
}
