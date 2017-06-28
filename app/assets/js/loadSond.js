$(function() {
	var song;

	song = new Audio("http://104.247.209.218:31580/;");

	song.addEventListener('timeupdate',function (){
		var curtime = parseInt(song.currentTime, 10);
	});

    function playAudio() {
        song.play();
        $('.play').addClass('hidden');
        $('.pause').addClass('visible');

        $(".hover_first").fadeIn("fast");
        $(".hover_lasr").fadeIn("fast");
    }
    function stopAudio() {
        song.pause();
        $('.play').removeClass('hidden');
        $('.pause').removeClass('visible');

        $(".hover_first").fadeOut("fast");
        $(".hover_lasr").fadeOut("fast");
    }

    // play click
    $('.play').click(function (e) {
        e.preventDefault();

        $('.flax_bot').fadeIn("fast");
        playAudio();
    });

    // pause click
    $('.pause').click(function (e) {
        e.preventDefault();

        $('.flax_bot').fadeOut("fast");
        stopAudio();
    });

    // pause click
    $('.mute').click(function (e) {
        e.preventDefault();

        $('#slider div.ui-slider-range').css("width", "0%");
        $('#slider a').css("left", "0%");
        song.volume = 0;
    });


	//Store frequently elements in variables
	var slider  = $('#slider');
	// initialize the volume slider
    slider.slider({
        range: 'min',
        min: 0,
        max: 100,
        value: 80,
        start: function(event,ui) {},
        slide: function(event, ui) {
        	song.volume = ui.value / 100;
        },
        stop: function(event,ui) {},
    });
});