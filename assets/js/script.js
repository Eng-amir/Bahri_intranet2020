$(document).ready(function () {
    //main carousel
    let mainSlider = $('.main-carousel');
    mainSlider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        let carousel = e.relatedTarget;
    }).owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 800,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1,
        navText: [
            "<i class='icon icon-left-arrow'></i>",
            "<i class='icon icon-right-arrow'></i>"
        ]
    })

    $(".owl-item.active h1").addClass('animated fadeInUp delay-2');
    $(".owl-item.active .slide-caption").addClass('animated fadeInUp delay-3');
    $(".owl-item.active .btn-orange-animated").addClass('animated fadeInUp delay-4');


    $(".main-carousel").on('change.owl.carousel', function (event) {

        var item = event.item.index - 2;

        var owlItem = $('.owl-item');
        $('h1').removeClass('animated fadeInUp delay-2');
        $('.slide-caption').removeClass('animated fadeInUp delay-3');
        $('.btn-orange-animated').removeClass('animated fadeInUp delay-4');
        owlItem.not('.cloned').eq(item).find('h1').addClass('animated fadeInUp delay-2');
        owlItem.not('.cloned').eq(item).find('.slide-caption').addClass('animated fadeInUp delay-3');
        owlItem.not('.cloned').eq(item).find('.btn-orange-animated').addClass('animated fadeInUp delay-4');

    });

    //employee carousel
    $('.employee-carousel.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        // freeDrag:true,
        smartSpeed: 500,
        // autoWidth: true,
        slideBy:1,
        autoplaySpeed: 500,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1
    })

    //announcement carousel
    $('.announce-carousel.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        // freeDrag:true,
        smartSpeed: 500,
        // autoWidth: true,
        slideBy:1,
        autoplaySpeed: 500,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1
    })
//press carousel
    $('.press-carousel.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        // freeDrag:true,
        smartSpeed: 500,
        // autoWidth: true,
        slideBy:1,
        autoplaySpeed: 500,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1
    })

    //events carousel
    $('.events-carousel.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        // freeDrag:true,
        smartSpeed: 500,
        // autoWidth: true,
        slideBy:1,
        autoplaySpeed: 500,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1
    })

    //events carousel
    $('.media-carousel.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        // freeDrag:true,
        smartSpeed: 500,
        // autoWidth: true,
        slideBy:1,
        autoplaySpeed: 500,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1
    })
    $('.social-carousel.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        responsiveClass: true,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        autoplay: false,
        autoplayTimeout: 5000,
        touchDrag:true,
        pullDrag:true,
        mouseDrag:true,
        // freeDrag:true,
        smartSpeed: 500,
        // autoWidth: true,
        slideBy:1,
        autoplaySpeed: 500,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplayHoverPause: true,
        items: 1,
        dotsData: true,
        addClassActive:true,
       // afterAction: afterActionFunc
    })

    // function afterActionFunc(el){
    //     //remove class active
    //     this.$owlItems.removeClass('active')
    //
    //     //add class active //owl internal $ object containing items
    //     this.$owlItems.eq(this.currentItem + 1)
    //         .addClass('active')
    // }

    document.getElementById('next-slide').addEventListener('click', function(){
        $('.social-carousel').trigger('next.owl.carousel');
    });

    document.getElementById('prev-slide').addEventListener('click', function(){
        $('.social-carousel').trigger('prev.owl.carousel');
    });


    $(".panel-tab").click(function(event) {
        event.preventDefault();
        $("div.overlay").fadeToggle("fast");
    });

    //slide panel
    // $("div.overlay").hide();
    $('.panel-tab').click(function(){
        $('.menu-hide').toggleClass('show');
        $('.panel-tab .btn-secondary').addClass('hide-btn');
        $('.menu-tab').toggleClass('active');
    });
    $('.xclose').click(function(){
        $('.menu-hide').removeClass('show');
        $('.panel-tab .btn-secondary').removeClass('hide-btn');
        $("div.overlay").fadeOut(300, 'linear');
        $('.menu-tab').removeClass('active');
    });

    $(function(){
        $('body').mouseup(function(e){
            var container = $(".menu-hide");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.panel-tab .btn-secondary').removeClass('hide-btn');
                $('.menu-hide').removeClass('show');
                $("div.overlay").fadeOut(300, 'linear');
            }
        });
    });

    //search
    $(".search").click(function(){
        $(".input").toggleClass("active").focus;
        $(this).toggleClass("animate");
        $('.search-close').toggleClass('visible');
    });

    $("#clear").click(function(){
        $(".input").val("");
    });

    $(function(){
        $('body').mouseup(function(e){
            let topSearch = $(".input");
            let searchClose = $('.search-close')
            if (!topSearch.is(e.target) && topSearch.has(e.target).length === 0) {
                topSearch.removeClass("active");
                searchClose.removeClass('visible');
            }
        });
    });

    $(function() {
        App.init();
    });

    // $('.toast').toast('show');
});

var App = {
    init: function () {
        this.search.bar()
    },
    search: {
        bar: function () {
            $(".header .ion-ios-search").on("touchstart click", function () {
                var e = ($(".search input").hasClass("search-visible"), $(".search input").val());
                return "" != e && null != e ? (App.search.html($(".search input").val()), !1) : $(".search input").focus(), void $(".search input").toggleClass("search-visible")
            }), $(".search form").on("submit", function (e) {
                e.preventDefault(), App.search.html($(".search input").val())
            })
        },
        html: function (e) {
            $(".search input").removeClass("search-visible"),
                $(".html").removeClass("visible"),
                $(".html.search").addClass("visible"),
                $(".html.search").html($(".html.search").html()),
                $(".html.search .key").html(e),
                $(".header .search input").val("")
        }
    }
}

var myModalEl = document.getElementById('empModal')
var modal = bootstrap.Modal.getInstance(myModalEl)
var popover = new bootstrap.Popover(document.querySelector('.popo'), {
    container: 'body'
})
$(document).ready(function () {
    $('.toast').toast('show');
});

//Main Menu Link
jQuery(".wsmenu>.wsmenu-list>li.tohide").on('click', function () {
    jQuery(this).toggleClass("wsclickopen").siblings(this).removeClass("wsclickopen");
    jQuery(".wsmenu>.wsmenu-list>li.tohide>ul.extra").removeClass('wsclickopen-sub');
});

jQuery(document).on("click", function (event) {
    let $trigger = $(".wsmenu-list");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        jQuery(".wsmenu>.wsmenu-list>li.tohide").removeClass("wsclickopen");
    }
});

$(function() {
    $('.card').matchHeight();
});


