$('g').mouseover(function(e){
  var countryName = $(this).data('country');
  $(this).mousemove(function(e){
    var left = e.clientX + 10 + "px";
    var top = e.clientY - 30 + "px";
    $('#tooltip').text(countryName);
    $('#tooltip').css({'left': left, 'top': top, 'display': 'block'});
  });
  $(this).css({'fill': '#4fb0c6'});
}).mouseout(function(){
  $('#tooltip').css({'display': 'none'});
  $(this).css({'fill': '#625fd5'});
});
