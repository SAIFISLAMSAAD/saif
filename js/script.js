$(document).ready(function () {
    $('.watch_video').venobox();



    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000

    });



    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



});
