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
        new Promise((resolve, reject) => {
            // when success, resolve
            let value = 'success';
            resolve(value);
           
            // when an error occurred, reject
            reject(new Error('Something happened!'));
          });
          
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType:'json',
            type: 'get',
            success: this.successGet
        })
    }
};
