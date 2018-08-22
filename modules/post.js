export class Post {

    render(data) {
        let output = $('.container');      

        $.get('/templates/postTemplate.mst', function(template){
            $(data).each(function (index, value) {
                let result = Mustache.render(template, value);
                output.append(result);
                
            });
        }); 
    
    };

    get() {
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType:'json',
            type: 'get',
            success: (data)=>{
                this.data1=data;
                this.render([this.data1[0], this.data1[1]]);
            }
        });
    }
    
};
