window.onload = function() {
    var count = 0;
    var nextLink = document.getElementById('next');


    var change = function(dir) {
    console.log("change");
    var frontPath = document.getElementById('front-1').style.backgroundImage;
    var file = frontPath.substr(15);

    if (file.length == 6) {
      var number = file.substr(0, 1).valueOf();
    } else if (file.length == 5) {
      var number = file.charAt(0).valueOf();
    }

    if ((dir == 1) && (number != 16)) {
      //need next image
        number = number + 1;
        var newPathLeft = "url(sketches/sketch" + number + "-1.jpg)";
        var newPathRight = "url(sketches/sketch" + number + "-2.jpg)";
        document.getElementById('back').style.backgroundImage = newPathLeft;
      
        document.getElementById('top').style.backgroundImage = newPathRight;
      
      
    } else if ((dir == 0) && (number != 1)) {
      console.log("else");
      //need prev image
        //number = number - 1;
        //var newPath = "url(sketches/sketch" + number + ".jpg)";
        //document.getElementById('front').style.backgroundImage = newPath;
      console.log(document.getElementById('front').style.backgroundImage);
      document.getElementById('front').style.backgroundImage = document.getElementById('back').style.backgroundImage;
    }

    }
  
  nextLink.addEventListener('click', function() {

    if (count < 14) {
        //count = count + 1;
        console.log("next", count);



        var flip = document.getElementById('flip');

        var right = document.getElementById('right');
        var back = document.getElementById('back');

        right.setAttribute('class', 'right'+count);
        back.setAttribute('class', 'back'+count);

        /* FLIP THE PAGE */
        flip.setAttribute('class', 'flip-on-click');
        /*PAGE STAYS THERE*/

        /*replace in js so animation can rerun*/
        var elm = flip;
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);

        console.log(newone);
        count = count + 1;

        var newFlip = document.getElementById('flip');
        var left = document.getElementById('left');
        var front = document.getElementById('front');

        setTimeout(function(){
            left.setAttribute('class', 'left'+count);
            front.setAttribute('class', 'front'+count);

        }, 3000);


    }
    
    
  })
  

    var prevLink = document.getElementById('prev');
    prevLink.addEventListener('click', function() {

        if (count > 0) {
            console.log("prev", count);

            var flip = document.getElementById('flip'); //
            console.log('getFlip', flip);
            flip.id = 'flip-back';

            console.log(flip);

            var left = document.getElementById('left');
            var front = document.getElementById('front');
            var back = document.getElementById('back');
            var right = document.getElementById('right');


            /*replace in js so animation can rerun*/

            var elm = flip;
            var newone = elm.cloneNode(true);

            elm.parentNode.replaceChild(newone, elm);


            count = count-1;

            left.setAttribute('class', 'left'+count);
            front.setAttribute('class', 'back'+count);
            back.setAttribute('class', 'front'+count);
            right.setAttribute('class', 'right'+count);

            flip.setAttribute('class', 'flip-on-click');

        }
    })


}