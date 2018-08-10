$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType:'json',
        type: 'get',
        success: function(data) {
            $(data).each(function (i, v) {
                $('.container').append(
                    '<div class="post">'+
                        '<div class="postTitle" id= "title">'+ v.title +'</div>'+
                        '<div class="postBody" id= "body">'+ v.body +'</div>'+
                    '</div> ');
                console.log('Success ');
            });
            console.log('Success ');
        }
    })
});
