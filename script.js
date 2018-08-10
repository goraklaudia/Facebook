$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType:'json',
        type: 'get',
        success: function(data) {
            $(data).each(function (index, value) {
                $('.container').append('<li><div class="postTitle">'+ value.title +'</div>'+ value.body +'</li> </br></br>');
            });
        }
    })
});