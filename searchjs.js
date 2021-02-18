$(document).ready(function () {
            $('#search').keyup(function () {
                $('#result').html('');
                var searchField = $('#search').val();
                var expression = new RegExp(searchField, "i");
                $.getJSON('data.json', function (data) {
                    $.each(data, function (key, value) {
                        if (value.name.search(expression) != -1) {
                            $('#result').append('<li class="list-group-item link-class">' + value.name +'</li>');
                        }
                    });
                });
            });
        });
