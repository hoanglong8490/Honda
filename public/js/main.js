new WOW().init();
const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

$("#vehicles-list").mCustomScrollbar({
    theme: "dark"
});
function move(value) {
    $("#vehicles-list").mCustomScrollbar("scrollTo", value, {
        scrollEasing: "easeOut"
    });
}
$(".vehicles-nav ul li a").click(function () {
    if ($(this).attr("id") === "cars-nav") {
        move("#Sedan")
    }
    if ($(this).attr("id") === "suvs-nav") {
        move("#Suvs")
    }
    if ($(this).attr("id") === "minivan-nav") {
        move("#minivan")
    }
    if ($(this).attr("id") === "envirromental-nav") {
        move("#envirromental")
    }
    if ($(this).attr("id") === "future-nav") {
        move("#future")
    }
});

var count = "";
$("#navbar > a").click(function () {
    if (count === "") {
        count = $(this).attr("id");
        $(this).addClass("active");
        if ($(this).attr("id") === "vehicles-link") {
            $("#vehicles").removeClass("hide-vehicles");
            $(".vehicles-nav").addClass(" fadeInDown");
            $("#vehicles-list").addClass("fadeInUp")
        }
    }
    else {
        if (count === $(this).attr("id")) {
            $(this).removeClass("active");
            count = "";
            $(".vehicles-nav").addClass(" fadeOutUp");
            $("#vehicles-list").addClass("fadeOutDown");
            setTimeout(function () {
                $("#vehicles").addClass("hide-vehicles");
                $(".vehicles-nav").removeClass(" fadeOutUp");
                $("#vehicles-list").removeClass("fadeOutDown");
            }, 300);
        } else {
            $("#navbar > a").removeClass("active");
            $(this).addClass("active");
            count = $(this).attr("id");
            if (count != "vehicles-link") {
                $(".vehicles-nav").addClass("fadeOutUp");
                setTimeout(function () {
                    $("#vehicles").addClass("hide-vehicles");
                    $(".vehicles-nav").removeClass(" fadeOutUp");
                    $("#vehicles-list").removeClass("fadeOutDown");
                }, 300);
            } else {
                $("#vehicles").removeClass("hide-vehicles");
                $(".vehicles-nav").addClass("fadeInDown");
                $("#vehicles-list").addClass("fadeInUp");
            }
        }
    }
})
$("#vehicles-close").click(function () {
    $(".vehicles-nav").addClass("fadeOutUp");
    $("#vehicles-list").addClass("fadeOutDown");
    setTimeout(function () {
        $("#vehicles").addClass("hide-vehicles");
        $(".vehicles-nav").removeClass("fadeOutUp");
        $("#vehicles-list").removeClass("fadeOutDown");
    }, 300)
    $('#navbar a').removeClass('active');
    count = "";
})
$('.vehicle-product').addClass('animated fadeInUp');
$('.carousel-indicators-config li').click(function () {
    $('.carousel-indicators-config li').removeClass('active');
    $(this).addClass('active');
})
$('.indicators-xs-header').click(function () {
    $('.carousel-indicators-xs ol').slideToggle();
    if ($('.indicators-xs-header i').hasClass('transform-rotare')) {
        $('.indicators-xs-header i').removeClass('transform-rotare');
    } else {
        $('.indicators-xs-header i').addClass('transform-rotare');
    }

});
$('.carousel-indicators-xs ol li').click(function () {
    $('.indicators-title span').html($(this).html());
    $('.carousel-indicators-xs ol').slideUp();
})


var count = 0;
$('.carousel-control-prev').click(function () {
    $('.carousel-indicators-config li').removeClass('active');
    if (count == 0) {
        count = 4;
    } else {
        count--;
    }
    $('.carousel-indicators-config li').each(function (i) {
        if (i == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html());
        }
    });
});
$('.carousel-control-next').click(function () {
    $('.carousel-indicators-config li').removeClass('active');
    if (count == 4) {
        count = 0;
    } else {
        count++;
    }
    $('.carousel-indicators-config li').each(function (i) {
        if (i == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html());
        }
    });
});
$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
});

function collapse() {
    var width = $(window).width();
    console.log(width)
    if (width >= 750) {
        $('.collapse-ul').removeClass('collapse');
    }
    if (width < 750) {
        $('.collapse-ul').addClass('collapse');
    }
}
$(window).resize(function () {
    collapse();
})
$(document).ready(function(){
    collapse();
})