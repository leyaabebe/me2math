$(document).ready(function(){



  $("#sortable").sortable();
    // $("#sortable").disableSelection();
    $("#sortable1").sortable();
    // $("#sortable1").disableSelection();
    $("#sortable2").sortable();
    // $("#sortable2").disableSelection();
    $('#check').click(function() {
        if ($("input[name='optradio_correct']:checked").val()) {
                $("#dialog-1").dialog("open");
                 $("#dialog-1").dialog({
                        modal: true,
                        autoOpen:false,
                        buttons: 
                            {
                              OK: function()
                                {
                                  $(this).dialog("close");
                                },
                              // text: "SAS",
                              Playagain: function() 
                                {
                                  // alert('ajhdsaskjh');
                                  if(localStorage.hits) {
                                      localStorage.hits = Number(localStorage.hits) + 5;
                                   }
                                  else {
                                      localStorage.hits = 0;
                                  }
                                  localStorage.setItem("x",localStorage.hits);
                                  window.location.reload();

                                }
                            }
                          
                     });                ;
        } else if (!$("input[name='optradio']:checked").val()) {
           alert('Nothing is checked!');
            return false;
        }
        else {
          alert('that is not the correct answer');
        }
    });

    $("#score").on("click", function() {
      alert("This is your score: " + localStorage.getItem("x"));
    })

     $("#launcher").click(function() {
        $("#dialog-1").dialog("open");
     });
     $("#dialog-1").dialog({
        autoOpen:false,
        buttons: {
            OK: function(){
                $(this).dialog("close");
            }
        }
     });

    
})