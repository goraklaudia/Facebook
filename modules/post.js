export class Post {

    successGet(data) {
        let output = $('.container');

            $.get('/templates/postTemplate.mst', function(template){
                $(data).each(function (index, value) {
                    let result = Mustache.render(template, value);
                    output.append(result);
                });
            }); 
    };

    getPost() {
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType:'json',
            type: 'get',
            success: this.successGet.bind(this)
        })
    }
};
