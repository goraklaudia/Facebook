export class Post {
    //  data:object;
    // var data1: object;

    successGet(data) {
        let output = $('.container');
        console.log(this);
            $.get('/templates/postTemplate.mst', function(template){
                $(data).each(function (index, value) {
                    let result = Mustache.render(template, value);
                    output.append(result);
                });
            }); 
            console.log(this.data1);

    };
   
    getPost() {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType:'json',
            type: 'get',
            success: function (data){
                this.data1 = data;
                this.successGet(this.data1);
            }

            // success: this.successGet
        });
        // console.log(Post.data);
    }
    
};
