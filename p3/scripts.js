$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('mainNav').addClass('changeColor')
      }
      if ($(this).scrollTop() < 50) {
         $('mainNav').removeClass('changeColor')
      }
   });
});