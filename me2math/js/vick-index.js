$(function(){
    // $(".color-square").draggable({axis : "x" , containment : "parent" });
    $(".color-box").sortable({revert: true});
    // $("#color-row1").sortable({revert: true});
    // $("#color-row2").sortable({revert: true});
    $( ".color-box" ).draggable({ stack: ".color-box" });
    $(".color-box").draggable({containment : "parent" , axis : "x"});
    
    // $("#check").click(function() {
    //     $("#dialog-1").dialog("open");
    //  });
    // $("#dialog-1").dialog({
    //     autoOpen:false,
    //     buttons: {
    //         OK: function(){
    //             $(this).dialog("close");
    //         }
    //     }
    //  });
    $('#check').click(function() {
    if (!$("input[name='optradio']:checked").val()) {
       alert('Nothing is checked!');
        return false;
    }
    else {
      alert('that is not the correct answer');
    }
  });
});