<?php

header('Content-Type: application/json');
header('Access-Content-Allow-Method: DELETE');
header('Access-Content-Allow-Origin: *');
header('Access-Content-Allow-Headers: Access-Content-Allow-Headers, Content-Type, Access-Content-Allow-Method, Authorization, X-Requested-With');

// Recive student id
$data = json_decode(file_get_contents("php://input"), true);
$student_id = $data['studentId'];

include '../config.php';

$sql = "DELETE FROM students WHERE id=$student_id";

if (mysqli_query($connDB, $sql)) {
    echo json_encode(array(
        "message" => "Delete Student Sucessfully.",
        "status" => true,
    ));
} else {
    echo json_encode(array(
        "message" => "Delete student unsucessfully.",
        "status" => false,
    ));
}
