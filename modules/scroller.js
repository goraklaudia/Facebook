import {Post} from '../modules/post.js';

export class Scroller {

    loadPost() {
            let post = new Post();
            post.get();
        
            $(window).scroll(function() {
                if (($(document).height() - $(window).height() == Math.floor($(window).scrollTop())) || ($(document).height() - $(window).height() == ((Math.floor($(window).scrollTop())+1)))) {
                        post.get();
                }
            });
    }

}