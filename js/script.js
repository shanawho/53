window.onload = function() {
    var count = 0;
    var nextLink = document.getElementById('next');
    var prevLink = document.getElementById('prev');
    var justFlippedRight = true;
  
  nextLink.addEventListener('click', function() {

    if (count < 14) {
        /* If it is one of the 15 pages available */

        if (justFlippedRight) {
            var flip = document.getElementById('flip');
        } else {
            /* If flip-back exists, replace with a flip id for forward flip animation */

            var flip = document.getElementById('flip-back');
            flip.id = 'flip';

            /*  Change image on front to match what used to be the image of the right 
                Applying the flip classes immediately places the div on the right 
                so we have to make it appear seamless */

            var front = document.getElementById('front');
            front.setAttribute('class', 'front'+count);
        }


        /*  Replace the back of the flip page and right book images so that when the flip starts, they contain the right images */

        var back = document.getElementById('back');
        var right = document.getElementById('right');
        back.setAttribute('class', 'back'+count);
        right.setAttribute('class', 'right'+count);

        /*  flip to the next page */
        flip.setAttribute('class', 'flip-on-click');
        /* animation will stay on last frame so page stays on the left */

        /*  add a shadow to the left book so that when the flip occurs, a shadow appears */
        var left = document.getElementById('left');
        left.className += ' shadow-left';

        /*  replace the DOM element so the animation can rerun in case flip is clicked again */
        var elm = flip;
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);

        /*  new next page yay! increment your count */
        count = count + 1;


        /*  We might not have initialized front in the above if/else conditional, 
            so initialize it here */
        var front = document.getElementById('front');

        setTimeout(function(){
            /*  Wait till flip occurs (2s), then replace the left and front images.
                Even though they are not visible right now, we are prepping for 
                another click on next, so that the correct images are already there */
            left.className = "";
            left.className += ' left'+count;
            front.setAttribute('class', 'front'+count);
        }, 2000);

        /* You just flipped to the next page! 
           Keep track of it in this boolean so we can check to see if #flip or #flip-back 
           is present when we click either next or previous */
        justFlippedRight = true;

    }
    
    
  })
  

    prevLink.addEventListener('click', function() {
        if (count > 0) {
            /* as long as we are not on the first page */

            if (justFlippedRight) {
                /* get the #flip element */

                var flip = document.getElementById('flip');
                var left = document.getElementById('left');
                left.setAttribute('class', 'left'+count);

            } else {
                var flip = document.getElementById('flip-back');
            }

            /* start the flip */
            flip.id = 'flip-back';
            flip.setAttribute('class', 'flip-on-click');

            /* start a shadow on the right */
            var right = document.getElementById('right');
            right.className = "";
            right.setAttribute('class', 'shadow-right');

            /* replace in js so animation can rerun */
            var elm = flip;
            var newone = elm.cloneNode(true);
            elm.parentNode.replaceChild(newone, elm);

            /* decrement for the previous page */
            count = count-1;

            var front = document.getElementById('front');
            var right = document.getElementById('right');
            var left = document.getElementById('left');
            var back = document.getElementById('back');

            /* replace with new images */

            front.setAttribute('class', 'back'+count);
            right.className += ' right'+count;
            left.setAttribute('class', 'left'+count);
            back.setAttribute('class', 'front'+count);

            justFlippedRight = false;
        }
    })


}