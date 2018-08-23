import {Post} from '../modules/post.js';

export class Scroller {

    constructor () {
        this.post = new Post();
        this.containerHei = 0;
    }

    fillingContainerWithPosts(containerHeight) {
        this.post.get().then((data) => {
            if(data < $(window).height())
            {
                containerHeight = data;
                this.fillingContainerWithPosts(containerHeight);
            }   
        });
    }

    loadPost() {
        this.fillingContainerWithPosts(this.containerHei);

        $(window).scroll(() =>{
            var subtraction = $(document).height() - $(window).height();
            var windowScroll = Math.floor($(window).scrollTop());

            if([windowScroll, (windowScroll +1)].indexOf(subtraction) != -1)
                this.post.get();   
        });
    }
}