function Post() {

    function getPost() {
        let output = $('.container');
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType:'json',
            type: 'get',
            success: function(data) {
                $.get('/templates/postTemplate.mst', function(template){
                    $(data).each(function (index, value) {
                        let result = Mustache.render(template, value);
                        output.append(result);
                    });
                }); 
            }
        })
    }

    return {
        getPost: getPost
    }

};