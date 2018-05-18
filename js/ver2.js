$(window).on("scroll touchmove", function() {
      if ($(this).scrollTop() > 300) {
         $('body').addClass('white-display');
         $('header').addClass('white-display');
         $(".nav").addClass("grey-links");
         $("#main-page .container").fadeOut();
         // $('.nav-link').css("color", "grey");

      }
      if ($(this).scrollTop() < 300) {
         $('body').removeClass('white-display');
         $('header').removeClass('white-display');
         $(".nav").removeClass("grey-links");
         $("#main-page .container").fadeIn();
      }
   });
