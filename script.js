$(function() {
  	var $width =712; // 横幅
	var $height =720; // 高さ
	var $interval = 3000; // 切り替わりの間隔（ミリ秒）
	var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
	$("#slide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
	$("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
	$("#slide ul li:first").addClass("active").show();
	setInterval(function(){
	var $active = $("#slide ul li.active");
	var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
	$active.fadeOut($fade_speed).removeClass("active");
	$next.fadeIn($fade_speed).addClass("active");
	},$interval);

//ハンバーガーメニュー
  $('.menu_button').on('click',function(){
     $('.nav-item2').slideToggle();
  });


//Topスクロール
	$('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 500)
  });

	$('#top-btn2').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 500)
  });

	$('#top-btn3').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 500)
  });

	$('#top-btn4').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 500)
  });

  $('#top-btn5').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 500)
  });

//ナビゲーションスクロール
	$('header a').click(function(){
   	var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},500);
  });

	$('footer a').click(function(){
   	var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},500);
  });










});
