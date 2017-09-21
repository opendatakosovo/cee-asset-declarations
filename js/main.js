// Showing the tooltip
$('g').mouseover(function(e){
  var countryName = $(this).data('country');
  $(this).mousemove(function(e){
    var left = e.clientX + 10 + "px";
    var top = e.clientY - 30 + "px";
    $('#tooltip').text(countryName);
    $('#tooltip').css({'left': left, 'top': top, 'display': 'block'});
  });
}).mouseout(function(){
  $('#tooltip').css({'display': 'none'});
});

$('g').on('click', function(e){
   jump('res-sect');
   $('.country-name').text($(this).data('country'));
});

// Panel Collapse
$('.collapse').on('show.bs.collapse', function(){
      $(this).parent().find('a').css("color", "#4fb0c6");
      $(this).parent().fadeIn('slow').css('background-color', '#f1f1f1');
      $(this).parent().find('.panel-heading').fadeIn('slow').css('background-color', '#f1f1f1');
      $(this).parent().find(".glyphicon").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
   }).on('hidden.bs.collapse', function(){
      $(this).parent().find('a').css("color", "#625fd5");
      $(this).parent().fadeIn('slow').css('background-color', '#fff');
      $(this).parent().find('.panel-heading').fadeIn('slow').css('background-color', '#fff');
      $(this).parent().find(".glyphicon").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});

$(".collapse").each(function(){
   if($(this).hasClass("in")) {
      $(this).parent().find('a').css("color", "#4fb0c6");
      $(this).parent().fadeIn('slow').css('background-color', '#f1f1f1');
      $(this).parent().find('.panel-heading').fadeIn('slow').css('background-color', '#f1f1f1');
      $(this).parent().find(".glyphicon").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
   }
});

function jump(h) {
    var top = document.getElementById(h).offsetTop,
        left = document.getElementById(h).offsetLeft;
   $("html, body").animate({ scrollTop: top });
}
