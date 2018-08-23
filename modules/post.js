export class Post {

    constructor () {
        this.containerHeight = 0;
    }

    render(data) {
        return new Promise((resolve, reject) => {
            $.get('/templates/postTemplate.mst', function(template){
                $(data).each(function (index, value) {
                    let result = Mustache.render(template, value);
                    $('.container').append(result);
                });
                resolve($('.container').height());
            }); 
        }).then((value) => {
            return value;
        });
    };

    get() {
        
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                dataType:'json',
                type: 'get',
                success: (data)=>{
                    resolve(data);
                }
            });
        }).then((data) =>{
            return this.containerHeight = this.render([data[0], data[1]]);
        });
    }
};
