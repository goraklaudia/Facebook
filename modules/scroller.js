import {Post} from '../modules/post.js';

export class Scroller {

    loadPost() {
        $(document).ready(function() {
            let post = new Post();
            post.get();
        
            $(window).scroll(function() {
                if ($(document).height() - $(window).height() == $(window).scrollTop()) {
                        post.get();
                }
            });
        });
    }

}