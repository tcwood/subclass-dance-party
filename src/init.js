$(document).ready(function() {
  window.dancers = [];
  window.linedUp = false;
  window.partneredUp = false;
  window.velocities = [];
  window.dancerTypes = ['cat.gif', 'jef.gif', 'mrBean.gif', 'oldDancer.gif', 'tentacleGuitar.gif'];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * (.05 + Math.random() * .9),
      $('body').width() * (.05 + Math.random() * .9),
      Math.random() * 1000
    );
    console.log(dancer.$node);
    var randIndex = Math.floor(Math.random() * dancerTypes.length);
    dancer.$node.append('<img src = ' + dancerTypes[1] + ' />');
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
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

  $('.partnerUpButton').on('click', function(event) {
    if (dancers.length) {
      window.partneredUp = window.partneredUp === false ? true : false;
      if (window.partneredUp) {
        $(this).text('party on!');
        for (var i = 0; i < dancers.length; i++) {
          velocities.push([dancers[i].vx, dancers[i].vy]);
          dancers[i].vx = 0;
          dancers[i].vy = 0;
          if (i > dancers.length / 2 - 1) {
            $(dancers[i]).animate({
              top: dancers[i - Math.floor(dancers.length / 2)].top,
              left: dancers[i - Math.floor(dancers.length / 2)].left + 100
            }, 750);
          }
        }
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

  $('.dancer').mouseenter(function() {
    // console.log('mouseOver');
    $(this).animate({ borderColor: 'blue' }, 500);
  });

  $(document).on('mouseenter', '.dancer', function() {
    console.log(this);
    $(this).animate({ borderWidth: '20px' }, 500);
  });


});
