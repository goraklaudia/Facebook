import {Post} from '../modules/post.js';

export class Scroller {

    loadPost() {
        let post = new Post();
        let containerHei = 0;
        console.log($(window).height());

        new Promise((resolve, reject) => {
            resolve(post.get());
        }).then((data)=> {
            console.log("dddd - " + data);
            containerHei = data;
            console.log("dd - " + containerHei);

            // do{
            for(let i=0; i<5; i++)
                new Promise((resolve, reject) => {
                    resolve(post.get());
                }).then((data)=> {
                    containerHei = data;
                    console.log("dd - " + containerHei);
                });
            // }while(containerHei< $(window).height());

            
        });

        $(window).scroll(function() {
            var subtraction = $(document).height() - $(window).height();
            var windowScroll = Math.floor($(window).scrollTop());

            if([windowScroll, (windowScroll +1)].indexOf(subtraction) != -1)
                post.get();
        });
    }
}