// Set cookies for welcoming modal
var manageCookie = {
    name: "disableWelcomingModal",
    set: function (cookieValue, days) {
        var d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        document.cookie = this.name + "=" + cookieValue + ";expires=" + d.toGMTString();
    },
    get: function (cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i]; 
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    check: function() {
        var disableModal = this.get(this.name);
        if (disableModal === "") {
           $('#myModal').modal('show');
           }
        }
};

manageCookie.check();

$('.btn-explore').click(function(){
    manageCookie.set(true,365);
});

$('.index-link-modal').click(function() {
   $('#myModal').modal('toggle');
});

// Showing the tooltip on hover of countries
$('g').mouseover(function(e) {
   var countryName = $(this).data('country');
   $(this).mousemove(function(e) {
      var left = e.clientX + 10 + "px";
      var top = e.clientY - 30 + "px";
      $('#tooltip').text(countryName);
      $('#tooltip').css({
         'left': left,
         'top': top,
         'display': 'block'
      });
   });
}).mouseout(function() {
   $('#tooltip').css({
      'display': 'none'
   });
});

// Handle click on countries
$('g').click(() => {
   $('#tooltip').fadeOut('slow');
});

// Tooltip for footnotes
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// Panel Collapse
$('.collapse').on('show.bs.collapse', function() {
   $(this).parent().find('a').css("color", "#4fb0c6");
   $(this).parent().fadeIn('slow').css('background-color', '#f1f1f1');
   $(this).parent().find('.panel-heading').fadeIn('slow').css('background-color', '#f1f1f1');
   $(this).parent().find(".glyphicon").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
}).on('hidden.bs.collapse', function() {
   $(this).parent().find('a').css("color", "#625fd5");
   $(this).parent().fadeIn('slow').css('background-color', '#fff');
   $(this).parent().find('.panel-heading').fadeIn('slow').css('background-color', '#fff');
   $(this).parent().find(".glyphicon").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
});
$(".collapse").each(function() {
   if ($(this).hasClass("in")) {
      $(this).parent().find('a').css("color", "#4fb0c6");
      $(this).parent().fadeIn('slow').css('background-color', '#f1f1f1');
      $(this).parent().find('.panel-heading').fadeIn('slow').css('background-color', '#f1f1f1');
      $(this).parent().find(".glyphicon").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
   }
});

// Height of footer based on pages
if(window.location.pathname == '/cee-asset-declarations/' || window.location.pathname == '/cee-asset-declarations/the-report' || window.location.pathname == '/cee-asset-declarations/compare' || window.location.pathname == '/cee-asset-declarations/about' || window.location.pathname == '/cee-asset-declarations/infographics') {
  // Footer
  $('.footer').css({'height': '28px'});
}

// Showing the "Go to map" button in index page
if (window.location.pathname == '/cee-asset-declarations/') {
   var sticker = $('#res-sect');
   var stickerPos = sticker.position();
   $(window).scroll(function() {
      var windowPos = $(window).scrollTop();
      if (windowPos >= stickerPos.top) {
         sticker.css({
            'position': 'sticky',
            'top': '0px',
            'z-index': '99'
         });
      } else {
         sticker.css({
            'height': 'auto',
            'position': 'relative',
            'width': 'auto'
         });
      }
      if (windowPos >= stickerPos.top - 180) {
         $('.scrollup').fadeIn();
      } else {
         $('.scrollup').fadeOut();
      }
   });
}
$('.scrollup').on('click', function(e) {
   $("html, body").animate({
      scrollTop: 0
   }, "slow");
   e.preventDefault();
});

// Fixing headers of tables only in medium and big screen sizes
if ($(window).width() > 480) {
  $(".table.with-responsive-wrapper").floatThead({
     responsiveContainer: function($table) {
        return $table.closest(".table-responsive");
     }
  });
}

// Compare tables responsiveness for mobile sizes
if ($(window).width() <= 480) {
  $('.table-title').remove();
  $('.table-sm-title').show();

  $('.vertical-center').css({'flex-flow': 'column'});
}

// Fixing index tables for tablets
if ($(window).width() <= 800 && $(window).width() > 480) {
   $('#index_scope_asset_disclosure, #index_content_asset_declarations, #index_verification_and_control_of_asset_information').wrap('<div class="table-responsive"><div>');
}

// Showing the message in smaller screen sizes
if ($(window).height() <= 657) {
   // $('#res-sect').hide();
   $('.info-message').show();
   $(window).scroll(function() {
      if ($(window).scrollTop() <= 40) {
         $('.info-message').fadeIn();
      } else {
         $('.info-message').fadeOut();
      }
   });
} else {
   $('.info-message').hide();
}

// Hovering on next and previous countries
$('.next').mouseover(function() {
   $('.next-arrow').attr('src', 'assets/hover-next-arrow.png');
}).mouseout(function() {
   $('.next-arrow').attr('src', 'assets/next-arrow.png');
});
$('.previous').mouseover(function() {
   $('.previous-arrow').attr('src', 'assets/hover-previous-arrow.png');
}).mouseout(function() {
   $('.previous-arrow').attr('src', 'assets/previous-arrow.png');
});
// Adding responsiveness for logo images
(function($) {
    var $window = $(window);
    function resize() {
        if ($window.width() < 992) {
            return $('.logo-container img').addClass('img-responsive');
        }
        $('.logo-container img').removeClass('img-responsive');
    }
    $window.resize(resize).trigger('resize');
})(jQuery);

// Resources page: read more/less

  var moreText = "READ MORE";
  var lessText = "READ LESS";

  $(".more-link").click(function () {
    if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).parent().siblings(".post-excerpt").hide();
      $(this).parent().siblings(".post-content").show();
      $(this).html(lessText);
    } else {
      $(this).parent().siblings(".post-excerpt").show();
      $(this).parent().siblings(".post-content").hide();
      $(this).addClass("less");
      $(this).html(moreText);
    }
    return false;
 });