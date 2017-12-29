$(document).ready(function () {

    $('.slider').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        prevArrow: false,
        nextArrow: false
    });

    var video = document.getElementById("solarVideo");

    video.currentTime = 12;

    function videoPlay() {
        var button = $('#play');
        var mainVideo = $('.main-video');
        var layer = $('.layer .intro');


        video.currentTime = 0;
        video.muted = false;

        button.removeClass('pause');
        button.addClass('play');

        mainVideo.removeClass('pause');
        mainVideo.addClass('play');

        layer.css('opacity', 0);

    }
    
    function videoPause() {
        var mainVideo = $('.main-video');
        var layer = $('.layer .intro');
        var button = $('#play');

        if (video.paused) {
            video.muted = false;

            video.play();
            button.removeClass('pause');
            button.addClass('play');

            mainVideo.removeClass('pause');
            mainVideo.addClass('play');

            layer.css('opacity', 0);
        } else {
        video.pause();
            video.muted = true;

            button.removeClass('play');
            button.addClass('pause');

            mainVideo.removeClass('play');
            mainVideo.addClass('pause');

            layer.css('opacity', 1);
        }
    }

    $('#play').click(function () {

        if (!$(this).hasClass('play') && !$(this).hasClass('pause') ) {
            videoPlay();
        } else {
            videoPause();
        }

    });


    function createFullpage() {
        $('#solar-page').fullpage({
            scrollOverflow: true,
            onLeave: function(index, nextIndex, direction){
                if (nextIndex === 1) {


                }
            }
        });
    }

    var windowWidth = $(window).width();

    if (windowWidth > 992) {
        createFullpage();
    }

    $(window).resize(function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 992) {
            console.log("not fullpage");
            $.fn.fullpage.destroy('all');
        }
        if (windowWidth > 992) {
            console.log("fullpage");
            createFullpage();
        }
    });


    setTimeout(function run() {
        $(".nav").click()
        setTimeout(run, 4000);
    }, 4000);


    $('.nav').click(function () {
        var types = $('.typed');
        var childs = types.children('.item');
        var $oldActive = types.children('.active');

        $oldActive.removeClass('active');

        if ($oldActive.index() === childs.length - 1) {
            childs.first().addClass('active');
        } else {
            $oldActive.next().addClass('active');
        }

    });



});
