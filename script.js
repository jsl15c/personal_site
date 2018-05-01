$(()=> {
  $('.btn').click(()=> {
    if ($('.btn').hasClass('active')) {
      $('.a').toggleClass('one-full-height');
      $('.b').toggleClass('two-full-width');
      $('.btn').toggleClass('active');
      $('.btn>span').toggleClass('active-color');
      $('.menu').toggleClass('open');
      $('.btn span')[0].innerHTML = 'menu';
      $('.slide-info').removeClass('slide-active');
      $('.slide-info div').removeClass('block');
      setTimeout(()=> {
        $('.a').toggleClass('one-full-width');
        $('.b').toggleClass('two-full-height');
      }, 250);
    }
    else {
      $('.a').toggleClass('one-full-width');
      $('.b').toggleClass('two-full-height');
      $('.btn').toggleClass('active');
      $('.btn>span').toggleClass('active-color');
      $('.menu').toggleClass('open');
      $('.btn span')[0].innerHTML = 'close';
      setTimeout(()=> {
        $('.a').toggleClass('one-full-height');
        $('.b').toggleClass('two-full-width');
      }, 250);
    }
  });

  $('.about').click(()=> {
    $('.slide-info').addClass('slide-active');
    $('.slide-info .about-info').addClass('block');
  });

  $('.projects').click(()=> {
    $('.slide-info').addClass('slide-active');
    $('.slide-info .projects-info').addClass('block');
  });

  $('.skills').click(()=> {
    $('.slide-info').addClass('slide-active');
    $('.slide-info .skill-info').addClass('block');
  });

  $('.close-info').click(()=> {
    $('.slide-info').removeClass('slide-active');
    $('.slide-info div').removeClass('block');
  });
});
