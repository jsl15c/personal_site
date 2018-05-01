$(()=> {
  $('.btn').click(()=> {
    if ($('.btn').hasClass('active')) {
      $('.a').toggleClass('one-full-height');
      $('.b').toggleClass('two-full-width');
      $('.btn').toggleClass('active');
      $('.btn>span').toggleClass('active-color');
      $('.menu').toggleClass('open');
      $('.btn span')[0].innerHTML = 'menu';
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
});
