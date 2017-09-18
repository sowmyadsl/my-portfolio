$(function() {
  // $('#profile-pic').fadeIn(200);
  // $("#profile-pic").animate({ direction: "top" }, 100);
  //  $('.about-card').fadeIn(500);
  //  $('.about-card').show();
  //  $('.about-card').animate({left: '40%'}, 1000);
   //
  //  $('.prof-picture').show();
  //  $('.prof-picture').animate({left: '30%' }, 1000 );

    let offset = 250;
    let duration = 250;

    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
        $('.back-to-top').fadeOut(duration);
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
    });


      $('.type-it').typeIt({
      speed: 120,
      deleteSpeed: 80,
      lifeLike: false,
      autoStart: false,
      loop: true,
      loopDelay: 750,
      breakLines: true,
      breakDelay: 750
    })
      .tiDelete(18)
     .tiType('a Web Developer')
     .tiSettings({speed: 140})
});
