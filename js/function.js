// function => Load All student data
function loadData() {
    $('#data-table tbody').html('')
    $.ajax({
        url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/students-api.php',
        method: 'GET',
        success: function (data) {
            if (data.status == false) {
                $('#data-table tbody').append('No Data Found.')
            } else {
                $.each(data, function (key, value) {
                    $('#data-table tbody').append('<tr><th scope="row">' + value.id + '</th><td>' + value.name + '</td><td>' + value.age + '</td><td>' + value.city + '</td><td><a id="edit" data-id="' + value.id + '" href="#">Edit</a></td><td><a href="#" id="delete" data-id="' + value.id + '">Delete</a></td></tr>')
                })
            }
        }
    })
}



// Function => Form Data Convert To Json
function formToJson(formId) {
    var formData = $(formId).serializeArray();
    var obj = {}
    for (var i = 0; i < formData.length; i++) {
        if (formData[i].value == '') {
            return false
        } else {
            obj[formData[i].name] = formData[i].value;
        }
    }
    var jsonData = JSON.stringify(obj);
    return jsonData
}

// Function => Add new student
// function addStudent(formID) {
//     var jsonData = formToJson(formID)
//     $.ajax({
        
//     })
// }