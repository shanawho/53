window.onload = function() {
    var count = 0;
    var nextLink = document.getElementById('next');
    var prevLink = document.getElementById('prev');
    var justFlippedRight = true;
  
  nextLink.addEventListener('click', function() {

    if (count < 14) {

        if (justFlippedRight) {
            var flip = document.getElementById('flip');

        } else {
            var flip = document.getElementById('flip-back');
            flip.id = 'flip';

            var front = document.getElementById('front');
            front.setAttribute('class', 'front'+count);
        }

        var back = document.getElementById('back');
        var right = document.getElementById('right');

        back.setAttribute('class', 'back'+count);
        right.setAttribute('class', 'right'+count);

        /* FLIP THE PAGE */
        flip.setAttribute('class', 'flip-on-click');
        /*PAGE STAYS THERE*/

        /*replace in js so animation can rerun*/
        var elm = flip;
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);

        count = count + 1;

        var newFlip = document.getElementById('flip');
        var left = document.getElementById('left');
        var front = document.getElementById('front');

        setTimeout(function(){
            left.setAttribute('class', 'left'+count);
            front.setAttribute('class', 'front'+count);
        }, 2000);

        justFlippedRight = true;

    }
    
    
  })
  

    prevLink.addEventListener('click', function() {
        if (count > 0) {
            console.log("prev", count);

            if (justFlippedRight) {
                var flip = document.getElementById('flip');
                var left = document.getElementById('left');
                left.setAttribute('class', 'left'+count);

            } else {
                var flip = document.getElementById('flip-back');
            }

            flip.id = 'flip-back';
            flip.setAttribute('class', 'flip-on-click');

            var right = document.getElementById('right');
            right.setAttribute('class', 'shadow-right');


            /*replace in js so animation can rerun*/
            var elm = flip;
            var newone = elm.cloneNode(true);
            elm.parentNode.replaceChild(newone, elm);

            count = count-1;

            var front = document.getElementById('front');
            var right = document.getElementById('right');
            var left = document.getElementById('left');
            var back = document.getElementById('back');

            front.setAttribute('class', 'back'+count);
            right.className += ' right'+count;
            left.setAttribute('class', 'left'+count);
            back.setAttribute('class', 'front'+count);

            justFlippedRight = false;
        }
    })


}