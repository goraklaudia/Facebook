export class Post {

    constructor () {
        this.containerHeight = 0;
        // this.colors = ["blue", "deeppink"];
    }

    render(data) {
        return fetch('/templates/postTemplate.mst')                
        .then((response) => {
            return response.text();
        })
        .then((template) => {
            Mustache.parse(template);
            $(data).each(function(index, value)  {
                let result = Mustache.render(template, value);

                $('.container').append(result);
                
            });
            return $('.container').height();
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
            return this.render([data[0], data[1]]);
        });
    }
};
