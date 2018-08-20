function successGet(data) {
        let output = $('.container');
        console.log(this);
            $.get('/templates/postTemplate.mst', function(template){
                $(data).each(function (index, value) {
                    var result = Mustache.render(template, value);
                    output.append(result);
                });
            }); 

};
   
function getPost() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType:'json',
            type: 'get',
            success: function (data){
                this.data1 = data;
                successGet(this.data1);
            }
        });
};

getPost();
