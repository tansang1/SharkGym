$(document).ready(function () {
    $("#s_active").click(function () {
        $(".header .s-search-1").addClass("active")
    })
    $(".s_close").click(function () {
        $(".header .s-search-1").removeClass("active")
    })
    $("#s_slick").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    })
    $("#s_slick_card").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay:true
    })
    $(window).scroll(function () {
        var sticky = $(".header"),
            scroll = $(window).scrollTop()

        if (scroll >= 100) sticky.addClass("active")
        else sticky.removeClass("active")
    })

    //Hiệu ứng rê chuột
    $("#serialcursor").serialcursor();

    new WOW().init();

    //backtop
    $(window).scroll(function () {
        var wScroll = $(window).scrollTop();
        if (wScroll > 400) {
            $(".ft-backtop").addClass("is-show");
        } else {
            $(".ft-backtop").removeClass("is-show");
        }
    });
    $(".ft-backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
})

