$(document).ready(function() {

  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      //var selectedEffect = $( "#effectTypes" ).val();
      var selectedEffect = "drop";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 2080, height: 585 } };
      }
 
      // Run the effect
      $(".backgrondpc").css("opacity", ".4");
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
        $(".backgrondpc").css("opacity", "1");
      }, 1000 );
      // $(".backgrondpc").css("opacity", "1");
    };
 
    // Set effect from select menu value
    $( "#btn13" ).on( "click", function() {
      runEffect();
    });
    $( "#effect" ).hide();
  } );



  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      //var selectedEffect = $( "#effectTypes" ).val();
      var selectedEffect = "drop";
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      
      // Run the effect
      $(".backgrondpc").css("opacity", ".4");
      $( "#effect2" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect2:visible" ).removeAttr( "style" ).fadeOut();
        $(".backgrondpc").css("opacity", "1");
      }, 1000);
      // $(".backgrondpc").css("opacity", "1");
    };
 
    // Set effect from select menu value
    $( "#btn1,#btn2,#btn4" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect2" ).hide();
  } );


}