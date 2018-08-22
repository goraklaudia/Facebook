import {Post} from '../modules/post.js';

export class Scroller {

    loadPost() {
            let post = new Post();
            post.get();

            $(window).scroll(function() {
            var subtraction = $(document).height() - $(window).height();
            var windowScroll = Math.floor($(window).scrollTop());

            if (subtraction == (windowScroll || (windowScroll +1)))
                post.get();
                
            });
    }

}