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
                    $('#data-table tbody').append('<tr><th scope="row">' + value.id + '</th><td>' + value.name + '</td><td>' + value.age + '</td><td>' + value.city + '</td><td><a href="#">Edit</a></td><td><a href="#">Delete</a></td></tr>')
                })
            }
        }
    })
}