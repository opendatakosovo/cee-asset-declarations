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

var sticker = $('#res-sect');
var stickerPos = sticker.position();
$(window).scroll(function(){
   var windowPos = $(window).scrollTop();
   if(windowPos >= stickerPos.top) {
      sticker.css({'position': 'sticky', 'top': '0px', 'z-index': '99'});
   } else {
      sticker.css({'height': '80px', 'position': 'relative', 'width': 'auto'});
   }
   if(windowPos >= stickerPos.top-180) {
      $('.scrollup').fadeIn();
   } else {
      $('.scrollup').fadeOut();
   }
});

$('.scrollup').on('click', function(e){
   $("html, body").animate({ scrollTop: 0 }, "slow");
   e.preventDefault();
});
