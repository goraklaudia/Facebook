$(document).ready(function(){
    var postTemplate = $('#post').html();
    var output = $('.container');

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType:'json',
        type: 'get',
        success: function(data) {
            $(data).each(function (index, value) {
                var result = Mustache.render(postTemplate, value);
                output.append(result);
            });
        }
    })
});