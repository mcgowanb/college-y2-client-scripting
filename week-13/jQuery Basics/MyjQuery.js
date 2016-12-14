$(document).ready(function(){
   $('div').mouseenter(function (){
       $(this).css({"background-color" : "red", "opacity":"1"}).html("Hello there");
   });

    $('#useid').on("click", function(){
        $(this).css({"background-color" : "283fc5", "opacity":".6"}).html("this is a basic div");
    });
    $('.basic').on("click", function(){
    	$(this).css({"background-color": "#a81517", "opacity": ".6"}).html("this is another basic div");
    });
    $('body').keydown(function(){
        $('div').hide();
    });

    $("#button").on("click", function () {
        $('div').show("slow");
    })
});

// $(document).ready(function () {
//
// });
