<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Method, Access-Control-Allow-Headers, Authorization, X-Requented-With');

$data = json_decode(file_get_contents("php://input"), true);
$student_id = $data['student_id'];
$name = $data['name'];
$age = $data['age'];
$city = $data['city'];

include '../config.php';

$sql = "UPDATE students SET name='$name', age=$age, city='$city' WHERE id=$student_id";
$result = mysqli_query($connDB, $sql) or die($connDB);

if (mysqli_num_rows($result) > 0) {
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
