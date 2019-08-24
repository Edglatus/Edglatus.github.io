$(document).ready(function (id){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function(result)
        {
            for (let i of result)
                $('#usernames').append(`<option value="${i.id}">${i.name}</option>`);
        }
    });

    function showPosts(id)
    {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            data:{userId: id},
            success: function(result)
            {
                if(result.length > 0)
                {
                    $('#results').empty();
                    for (let i of result)
                        $('#results').append(`<div><p>ID: ${i.id}</p><p>${i.title}</p><p>${i.body}</p></div><br>`);
                }
                else
                    $('#results').append('<p>Id Não Encontrado</p>')
            }
        });
    }

    $('#search').click(function(e)
    {
        showPosts($('#userval').val());
    });

    $('#userval').keydown(function(e)
    {
        if (e.keyCode == 13)
            showPosts($('#userval').val());
    });

    $('#usernames').change(function(e)
    {
        showPosts($('#usernames').val());
    });
});
