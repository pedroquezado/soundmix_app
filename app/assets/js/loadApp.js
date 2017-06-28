function verapp(){
	var rest = 'https://raw.githubusercontent.com/pedroquezado/soundmix_app/master/rate_server.txt';
	$('.load_pref').html('<div class="rad_load"><img src="./image/loade/FFFFFF-svg.svg"></div>');
	setTimeout(function() {
		var rate = parseInt($('.vers').text());
		$.ajax({
			url:  rest,
			success: function(html){
				if(html == rate) {
					$("#introApp").fadeOut("slow", function() {
						$("#stramingApp").fadeIn("slow");
					});
				} else {
					$(".load_pref").html('Favor atuzalizar aplicativo.');
				}
			},
			error: function() {
				$('.load_pref').html("<div class='rad_load'><img src='./image/loade/FFFFFF-svg.svg'></div>");
				setTimeout(function() {
					verapp();
				}, 3000);
			}
		});
	}, 3000);
}

var count = 0;
function conect() {
	$('.load_pref').html("<div class='rad_load'><img src='./image/loade/FFFFFF-svg.svg'></div>");
	setTimeout(function() {
		var online = navigator.onLine;
		if(online==true) {
			verapp();
		} else {
			if(count < 4) {
				$('.load_pref').html("Verifique sua conecção com a internet");
			} else {
				count++;
				conect();
			}
		}
	}, 1000);
}

$(document).ready(function(){
	var altura_tela = $(window).height();
	$("body").height(altura_tela); 
	$( window ).resize(function() {
		var altura_tela = $(window).height();
		$("body").height(altura_tela);
	});
});



$(document).ready(function(){
	setTimeout(function(){ 

		$("#introApp").fadeIn("slow", function() {
			conect();
		});

	}, 2000);
});


$(function() {
	$('.butNews').click(function (e) {
		e.preventDefault();
		
		if($('#news').hasClass('news_open')){
			$("#news").toggleClass('news_closer');

			$(".butNews_icon img").toggleClass("norotate_news");
		} else {
			$('#news').removeAttr('class');
			$('#news').addClass('news_open');

			$(".butNews_icon img").addClass("rotate_news");
		}
		
	});

	$('.icon-menu img').click(function (e) {
		e.preventDefault();
		$('#menuApp').removeAttr('class');
		
		if($('#menuApp').hasClass('menu_open')){
			$('#menuApp').toggleClass('menu_closer');
			$('.layher_menu').fadeOut('menu_open');
		} else {
			$('#menuApp').addClass('menu_open');
			$('.layher_menu').fadeIn('menu_open');
		}
	});

	$('.barMenuCloser img').click(function (e) {
		e.preventDefault();

		$('#menuApp').removeAttr('class');
		$('#menuApp').toggleClass('menu_closer');
		$('.layher_menu').fadeOut('menu_open');
	});

});