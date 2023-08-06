<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Method, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);
$student_data = $data['student_id'];


include '../config.php';

$sql = "SELECT * FROM students WHERE id=$student_data";
$query = mysqli_query($connDB, $sql) or die(mysqli_error($connDB));

if (mysqli_num_rows($query) > 0) {
    $output = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($output);
} else {
    echo json_encode(array(
        "message" => "No Data Found.",
        "status" => false
    ));
}
