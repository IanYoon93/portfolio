$(function () {
  // 헤더
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 100) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    })
    .trigger('scroll');

  // 전체메뉴 열기
  $('#header .btn_open').on('click', function (e) {
    e.preventDefault();
    $('#header .full_menu_area').fadeIn().addClass('on');
    $('body').addClass('on');
  });

  // 전체메뉴 닫기
  $('#header .full_menu_area .btn_close').on('click', function (e) {
    e.preventDefault();
    $('#header .full_menu_area').fadeOut().removeClass('on');
    $('body').removeClass('on');
  });

  // 메뉴 클릭시 섹션 이동
  $('.full_menu .scroll_move').on('click', function (e) {
    e.preventDefault();
    $('.full_menu_area').hide();
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 70},1000);
  });

  // 메인 어바웃 버튼 클릭시 섹션 이동
  $('.main_about .about_experience .btn_more').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.main_education').offset().top});
  });

  $('.main_about .about_skill .btn_more').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.main_skill').offset().top});
  });

  // 메인 스킬
  $(window).on('scroll', function () {
    var skillBar = $('.main_skill .skill_wrap .skill .skill_bar').offset().top;
    var st = $(window).scrollTop();

    if (st > skillBar - $(window).outerHeight()) {
      $('.skill_bar').each(function (i, v) {
        $(v).width($(v).data('skill') + '%');
        $(v)
          .next('.bg_skill')
          .width($(v).data('skill') + 2 + '%');
      });
    }
  });

  // 푸터 탑버튼
  $(window).on('scroll', function() {
    var st = $(this).scrollTop();

    if (st >= 150) {
      $('#footer .btn_top').fadeIn();
    } else {
      $('#footer .btn_top').fadeOut();
    }
  }).trigger('scroll');

  $('#footer .btn_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0},500);
  });
});
