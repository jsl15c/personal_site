$(()=> {
  $('.btn').click(()=> {
    if ($('.btn').hasClass('active')) {
      $('.a').toggleClass('one-full-height');
      $('.b').toggleClass('two-full-width');
      $('.btn').toggleClass('active');
      setTimeout(()=> {
        $('.a').toggleClass('one-full-width');
        $('.b').toggleClass('two-full-height');
      }, 400);
    }
    else {
      $('.a').toggleClass('one-full-width');
      $('.b').toggleClass('two-full-height');
      $('.btn').toggleClass('active');
      setTimeout(()=> {
        $('.a').toggleClass('one-full-height');
        $('.b').toggleClass('two-full-width');
      }, 400);
    }
  });
});
