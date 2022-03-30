$('.picture').mousemove(function(a){
  
  var mouseX = (a.pageX * - 1/50);
  var mouseY = (a.pageY * - 1/60);
  $(this).css('background-position',mouseX + 'px ' + mouseY + 'px')
  
})
$(document).ready(function(){
  $('.background').click(function(){
    $('.picture').css('background','url(' + this.src + ')');
    $('.picture').css('background-size','contain');
  })
})