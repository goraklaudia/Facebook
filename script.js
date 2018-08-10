$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType:'json',
        type: 'get',
        success: function(data) {
            $(data).each(function (i, v) {
                $('#title').text(v.title);
                $('#body').text(v.body);
            })
            console.log('Success ');
        }
    })
});