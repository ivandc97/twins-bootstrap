$(document).ready(function() {
    $('body').on('click', '.categories-list', function() {
        $(".categories-list").toggleClass("categories-list-active");
    });
    $('body').on('click', '.categories-list', function() {
        $(".header-bottom").slideToggle("fast");
    });
    $('body').on('click', '.search-icon', function() {
        $(".header-top").addClass("header-top-search");
    });
    $('body').on('click', '.hide-search', function() {

        setTimeout(function() {
            $(".header-top").removeClass("header-top-search");
        }, 300)
    });
    $('body').on('click', '.search-icon', function() {
        $(".search-wrap").css({ "left": "2000px" }).animate({ "left": "0px" }, "0");
    });
    $('body').on('click', '.hide-search', function() {
        $(".search-wrap").css({ "left": "0px" }).animate({ "left": "2000px" }, "0");
    });
    $('.header-bottom-menu-item:nth-child(1)    ').on('click', '.categories-list', function() {
        $(".categories-list").toggleClass("categories-list-active");
    });
    $('body').on('click', '.mobile-menu', function() {
        $(".header-sidebar").addClass("header-sidebar-active");
        $(".overlay ").addClass("overlay-show");
    });
    $('body').on('click', '.sidebar-close', function() {
        $(".header-sidebar").removeClass("header-sidebar-active");
        $(".overlay ").removeClass("overlay-show");
    });

    $('body').on('click', '.footer-more-btn', function() {
        $(".mobile-footer-collapse").slideToggle("fast");
    });
    $(document).mouseup(function(e) {
        var div = $(".mobile-footer-wrap");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".mobile-footer-collapse").hide("fast");
            $(".footer-more-btn").removeClass("footer-more-btn-active");
            $(".panel-filter").removeClass("active");
        }
    });
    $('body').on('click', '.footer-more-btn', function() {
        $(".footer-more-btn").toggleClass("footer-more-btn-active");
        $(".mobile-footer-collapse").css({ "display": "flex" });
    });
    $('body').on('click', '.collapse-payment', function() {
        $(".collapse-payment").toggleClass("footer-mobile-links-title-active");
    });
    $('body').on('click', '.collapse-partners', function() {
        $(".collapse-partners").toggleClass("footer-mobile-links-title-active");
    });


    $('body').on('click', '.sidebar-category-drop', function() {
        $(this).parents('.sidebar-category').toggleClass('sidebar-category-active');
        $(this).parents('.sidebar-content-item').find('.sidebar-category-menu').toggleClass('sidebar-category-menu-active');
    });
    $('body').on('click', '.sidebar-category-menu-drop', function() {
        $(this).parents('.sidebar-category-menu-item').toggleClass('sidebar-category-menu-item-active');
        $(this).parents('.sidebar-category-menu-item-wrap').find('.sidebar-category-submenu').toggleClass('sidebar-category-submenu-active');
    });

    $(document).mouseup(function(e) {
        var div = $(".header-sidebar");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".overlay").removeClass("overlay-show");
            $(".header-sidebar").removeClass("header-sidebar-active");
        }
    });

    // $('body').on('click', '.article-img-btn', function() {
    //     $('.card-img').hide();
    //     var cardIndex = $('.article-img-btn').index(this);
    //     console.log(cardIndex);
    //     $('.card-img:eq(' + cardIndex + ')').show();
    //     $('.checks').removeClass('active-color');
    //     $('.checks:eq(' + cardIndex + ')').addClass('active-color');
    // });


    $('body').on('click', '.article-img-btn', function() {
        var data = $(this).data('attr');
        var id = $(this).data('var');

        $(this).parents('.article-card').find('.checks').removeClass('active-color');
        $(this).find('.checks').addClass('active-color');

        $(this).parents('.article-card').find('.article-img img').hide();
        $(this).parents('.article-card').find('.article-img img.variation-' + id).show();
    });


    $(".header-bottom-menu-item").mouseenter(function() {
        $('.header-submenu-wrap').hide();
        var menuIndex = $('.header-bottom-menu-item').index(this);
        $('.header-submenu-wrap:eq(' + menuIndex + ')').show();
        $('.header-bottom').addClass('header-bottom-shadow');
    });


    $(".header-submenu-wrap").mouseleave(function() {
        $('.header-submenu-wrap').hide();
        $('.header-bottom').removeClass('header-bottom-shadow');
    });

    $(".header-bottom-menu-item-nohover").mouseenter(function() {
        $('.header-submenu-wrap').hide();
        $('.header-bottom').removeClass('header-bottom-shadow');
    });


    $('.toggle_class').on('click', function() {
        $(this).parent().find('.toggle_class').removeClass('active');
        $(this).addClass('active');

        if ($(this).data('hide')) {
            $('[data-id^="' + $(this).data('hide') + '"]').hide();
        }

        $('[data-id="' + $(this).data('show') + '"]').show();
    });
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button class="main-slider-prev"><img src="img/main/main-chevron-left.png" alt=""></button>',
        nextArrow: '<button class="main-slider-next"><img src="img/main/main-chevron-right.png" alt=""></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });
    $('.main-slider-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
    $(window).resize(function() {
        var width = $(window).width();
        if (width < 567) {
            $('.main-cards-slider').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                responsive: [{
                    breakpoint: 385,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
        }
    });
    if ($(window).width() < 567) {
        //Active
        $('.main-cards-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 385,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }
    $('body').on('click', '.add-article-img-btn', function() {
        $(this).toggleClass('add-article-img-btn-active');
        $('.article-img-btn-additional').toggleClass('article-img-btn-additional-active');
    });
    $('body').on('click', '.panel-filter', function() {
        $(this).toggleClass('active');
    });
    $('.store-sort-select').select2({
        minimumResultsForSearch: Infinity
    });
});