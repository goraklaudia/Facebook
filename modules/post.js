export class Post {

    constructor () {
        this.containerHeight = 0;
    }

    render(data) {
        return new Promise((res, rej)=> {
            new Promise((resolve, reject) => {
                fetch('/templates/postTemplate.mst')
                .then(response => {
                    resolve(response.text());
                });
            }).then((template) => {
                Mustache.parse(template);
                $(data).each((index, value) =>  {
                    let result = Mustache.render(template, value);
                    $('.container').append(result);
                });
                res($('.container').height());
            });
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
