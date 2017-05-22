$(document).ready(function(){
    
  var grid = 12;
  drawGrid(grid);

  function drawGrid(x){
      var size = 50;
      var i = 1;

      var ctWidth = size * x;
      $('.container').css("width", ctWidth+"px");
      for (i; i <= (x * x); i++) {
        $('.container').append("<div class='grid'></div>");
      }

      $(".grid").on('mouseenter', function(){
      $(this).css("background-color", "red");
       });

  }

  $("button").click(function(){
    console.log('button was just clicked')
    $(".grid").remove();
    newval = prompt('Enter number of squares for new grid. Max 30');
    console.log(newval);
    if (newval > 30){
      newval = 30;
    }
    drawGrid(newval);
  });

});

