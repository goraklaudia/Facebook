$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType:'json',
        type: 'get',
        success: function(data) {
            $(data).each(function (i, v) {
                $('.container').append('<li><div class="postTitle">'+ v.title +'</div>'+ v.body +'</li> </br></br>');
                console.log('Success ');
            });
            console.log('Success ');
        }
    })
});