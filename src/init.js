$(document).ready(function() {
  window.dancers = [];
  window.linedUp = false;
  window.partneredUp = false;
  window.velocities = [];
  window.dancerTypes = ['img/cat.gif', 'img/jef.gif', 'img/mrBean.gif', 'img/oldDancer.gif', 'img/tentacleGuitar.gif'];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * (.5 + Math.random() * .3),
      $('body').width() * (.1 + Math.random() * .7),
      Math.random() * 1000
    );
    //Create a random dancer
    var randIndex = Math.floor(Math.random() * dancerTypes.length);

    //Attach image to node
    dancer.$node.append('<img src = ' + dancerTypes[randIndex] + ' />');

    //Assign node zIndex so dancers stack properly
    dancer.$node.css('zIndex', Math.floor(dancer.top));
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  //Line up dancers
  $('.lineUpButton').on('click', function(event) {
    if (dancers.length) {
      window.linedUp = window.linedUp === false ? true : false;
      if (window.linedUp) {
        $(this).text('party on!');
        for (var i = 0; i < dancers.length; i++) {
          velocities.push([dancers[i].vx, dancers[i].vy]);
          $(dancers[i]).animate({
            top: dancers[i].height * .5,
            left: dancers[i].width * (i + 1) / (dancers.length + 1)
          }, 750);
          dancers[i].vx = 0;
          dancers[i].vy = 0;
        }
      //Return dancers to original velocities
      } else {
        $(this).text('line em up');
        $('.partnerUpButton').text('partner up');
        for (var i = 0; i < dancers.length; i++) {
          dancers[i].vx = velocities[i][0];
          dancers[i].vy = velocities[i][1];
        }
        window.velocities = [];
      }
    }
  });
  //Partner up dancers
  $('.partnerUpButton').on('click', function(event) {
    if (dancers.length) {
      console.log(dancers[dancers.length - 1]);
      window.partneredUp = window.partneredUp === false ? true : false;
      if (window.partneredUp) {
        $(this).text('party on!');
        //Lonely dancer code
        if (dancers.length % 2 === 1) {
          dancers[dancers.length - 1].vx = 0;
          dancers[dancers.length - 1].vy = 0;
          //Lonely dancer going to middle of screen
          $(dancers[dancers.length - 1]).animate({
            top: dancers[0].height / 2,
            left: dancers[0].width / 2
          }, 1000);
          //lonely dancer waits in middle
          $(dancers[dancers.length - 1]).animate({
            top: dancers[0].height / 2,
            left: dancers[0].width / 2
          }, 1000);
          $($(dancers)[dancers.length - 1].$node.children()[0]).animate({
            height: '200px' 
          }, 2000);
          //Lonely dancer shrinks and goes off screen
          $($(dancers)[dancers.length - 1].$node.children()[0]).animate({
            height: '0px' 
          }, 5000);
          $(dancers[dancers.length - 1]).animate({
            top: dancers[0].height * .55,
            left: dancers[0].width * .7
          }, 5000);
        }
        
        for (var i = 0; i < 2 * Math.floor(dancers.length / 2); i++) {
          velocities.push([dancers[i].vx, dancers[i].vy]);
          //Bring dancers to their partners
          if (i > dancers.length / 2 - 1) {
            $($(dancers)[i].$node.children()[0]).addClass('flipped');
            $(dancers[i]).animate({
              top: dancers[i - Math.floor(dancers.length / 2)].top,
              left: dancers[i - Math.floor(dancers.length / 2)].left + 100
            }, 750);
          }
          dancers[i].vx = 0;
          dancers[i].vy = 0;
        }
        //Return dancers to original velocities
      } else {
        $(this).text('partner up');
        $('.lineUpButton').text('line em up');
        for (var i = 0; i < dancers.length; i++) {
          dancers[i].vx = velocities[i][0];
          dancers[i].vy = velocities[i][1];
        }
        window.velocities = [];
      }
    }
  });
  //Enlarge dancer on mouseover
  $('body').on('mouseenter', '.dancer', function() {
    $($(this).children()[0]).animate({
      height: '300px',
      width: 'auto'
    }, 750);
  });
  //Return dancer to normal on mouseleave
  $('body').on('mouseleave', '.dancer', function() {
    $($(this).children()[0]).animate({
      height: '200px',
      width: 'auto'
    }, 750);
  });

});
