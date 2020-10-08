$(function(){

  $('.photo__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',

  });

  $('.header__burger').on('click', function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // $('.menu__btn').on('click', function() {
  //   $('.menu__list').slideToggle();
  // });

  $(function() { 
    $('.reason__text').readmore({ 
    moreLink: '<a href="#" style="color: #ECB84C; margin-left: 100px">Читати більше...</a>', 
    lessLink: '<a href="#" style="color: #ECB84C; margin-left: 100px">Менше</a>', 
    collapsedHeight: 110, 
    speed: 100, 
    afterToggle: function(trigger, element, expanded) { 
    if(! expanded) { // The "Close" link was clicked 
    $('html, body').animate({scrollTop: $(element).offset().top}, {duration: 100}); 
    } 
    } 
    }); 
    });

  });