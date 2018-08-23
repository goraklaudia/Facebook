import {Post} from '../modules/post.js';

export class Scroller {

    loadPost() {
        let post = new Post();
        let containerHei = 0;
        console.log($(window).height());

        let promise = post.get().then((data) => {
           
            post.get().then((data1)=> {
                containerHei = data1;
                for(let i=0; i<10; i++)
                {
                    console.log("i - " +i);
                }
                console.log("con war - " + containerHei);
            })
            console.log("ble - " + data);
        })
        

        $(window).scroll(function() {
            var subtraction = $(document).height() - $(window).height();
            var windowScroll = Math.floor($(window).scrollTop());

            if([windowScroll, (windowScroll +1)].indexOf(subtraction) != -1)
                post.get();
        });
    }
}