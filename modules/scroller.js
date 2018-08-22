import {Post} from '../modules/post.js';

export class Scroller {

    loadPost() {
            let post = new Post();
            let containerHeight = 0;
            
            do {
                post.get();
                containerHeight += $('.container').innerHeight();
            }while(containerHeight < $(window).height());

            $(window).scroll(function() {
                var subtraction = $(document).height() - $(window).height();
                var windowScroll = Math.floor($(window).scrollTop());

                if([windowScroll, (windowScroll +1)].indexOf(subtraction) != -1)
                    post.get();
            });
    }
}