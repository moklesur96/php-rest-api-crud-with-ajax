$(document).ready(function () {
    // load student data function
    loadData();

    // Add Student function
    $('#add-student-btn').on('click', function (e) {
        e.preventDefault()
        var jsonData = formToJson("#add-student-form")
        $.ajax({
            url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/add-student-api.php',
            method: 'POST',
            data: jsonData,
            success: function (data) {
                var data = JSON.parse(data)
                if (data.status == true) {
                    loadData();
                    console.log(data.message)
                    $("#add-student-form").trigger('reset')
                }
            }
        })
    })
})