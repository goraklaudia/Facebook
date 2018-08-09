$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType:'json',
        type: 'get',
        success: function(data) {
            console.log('Success');
        }
    }).then(function(data) {
        $('#title').text(data.title);
        $('#body').text(data.body);
    })
});

/*
    success: function(data) {
        $(data).each(function(index, value) {
            
        });
    }
*/


