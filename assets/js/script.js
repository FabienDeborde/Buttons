$( document ).ready(function() {
  // Get started!

  //Prevent the refresh of the page on click
  //(using it just to showcase the button styles)

  $("a").click(function(){
    event.preventDefault();
  });


  $("#button1").click(function(){

    //Ok Case
    $("#button1").addClass("bg_ok");
    $("#default1").addClass("hidden");
    $("#ok1").removeClass("hidden");
  });

  $("#button2").click(function(){

    //Error Case
    $("#button2").addClass("bg_error");
    $("#error2").removeClass("hidden");
    $("#default2").addClass("hidden");
  });
});
