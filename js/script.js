$(document).ready(function () {
    // load student data function
    loadData();

    // Add Student function
    $('#add-student-btn').on('click', function (e) {
        e.preventDefault()
        var jsonData = formToJson("#add-student-form")
        $.ajax({
            url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/add-student-api.php',
            type: 'POST',
            data: jsonData,
            success: function (data) {
                var data = JSON.parse(data)
                if (data.status == true) {
                    loadData();
                    $("#add-student-form").trigger('reset')
                }
            }
        })
    })


    // Load Update form with Data
    $(document).on('click', '#edit', function (e) {
        e.preventDefault()
        var studentId = $(this).data('id');
        var obj = { student_id: studentId }
        var studentJsonID = JSON.stringify(obj);

        // Fill input box with data
        $.ajax({
            url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/single-student-api.php',
            type: 'POST',
            data: studentJsonID,
            success: function (data) {
                $('#id').val(data[0].id)
                $('#edit-name').val(data[0].name)
                $('#edit-city').val(data[0].city)
                $('#edit-age').val(data[0].age)
            }
        })



        // open model
        $('#edit-model').attr('open', true);


    })

    // Update Student Data
    $('#update').on('click', function (e) {
        e.preventDefault()
        var myJson = formToJson('#edit-data');

        $.ajax({
            url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/update-student-api.php',
            type: 'PUT',
            data: myJson,
            success: function (data) {
                if (data.status == true) {
                    loadData()
                    $('#edit-model').attr('open', false);
                }
            }
        })
    })

    // Delete Student Data
    $(document).on('click', '#delete', function (e) {
        e.preventDefault()
        var deleteId = $(this).data('id')
        var obj = { studentId: deleteId }
        var id = JSON.stringify(obj);

        if (confirm('Would You like to Delete?')) {
            $.ajax({
                url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/delete-student-api.php',
                type: 'POST',
                data: id,
                success: function (data) {
                    if (data.status == true) {
                        loadData()
                    }
                }
            })
        }


    })

    // Search Data
    $('#search').on('keyup', function (e) {
        $('#data-table tbody').html('')
        var keyword = $(this).val()

        $.ajax({
            url: 'http://localhost/php/php-rest-api-crud-with-ajax/api/search-api.php?search=' + keyword,
            type: 'GET',
            success: function (data) {
                if (data.status == false) {
                    $('#data-table tbody').append(data.message);
                } else {
                    $.each(data, function (key, value) {
                        $('#data-table tbody').append(
                            '<tr><th scope="row">' + value.id + '</th><td>' + value.name + '</td><td>' + value.age + '</td><td>' + value.city + '</td><td><a href="#" class="edit" data-id = ' + value.id + ' data-target="edit-model" onClick="toggleModal(event)">Edit</a></td><td><a href="#" class="delete" data-id=' + value.id + '>Delete</a></td></tr>'
                        )
                    })
                }
            }
        })
    })
})
