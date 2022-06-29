$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#corp").addClass("nav-fixed");
    } else {
        $("#corp").removeClass("nav-fixed");
    }
});