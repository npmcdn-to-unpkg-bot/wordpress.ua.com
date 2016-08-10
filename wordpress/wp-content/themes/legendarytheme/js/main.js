var $clients_item,
    $works_item,
    $works_item_w2h2;

$(function() {

    if ( $(window).width() <= 768) {
        $('video').remove();
        $('.bg-video-mobile').css({
            display: "block"
        });
    }

    $('.works-hidden').hide();
    $('#works-display').on('click', function(e) {
        e.preventDefault();
        $('.works-hidden').slideToggle();
        $('.works-wrap .grid').packery({
            itemSelector: '.grid-item',
            percentPosition: true
        });
    });

    //Animation
    $('#for-prom').on('mouseover', function() {

    });
    $('#for-prom').on('mouseout', function() {

    });

    //To top
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.to-top, .presentation').fadeIn();
        } else {
            $('.to-top, .presentation').fadeOut();
        }
    });

    //menu
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()/3) {
            $('header .head-top').addClass("mobile");
        } else {
            $('header .head-top').removeClass("mobile");
        }
    });

    //BG color
    var section_position = new Array();
    $(window).scroll(function() {
        int = $(window).scrollTop();
        section_register();
        $("section").each(function(index) {
            if (int >= section_position[index]) {
                $('nav li').removeClass('active');
                $('.'+$(this).attr('id')).addClass('active');
                $('body, .xcolor').removeClass().addClass('color-'+$(this).attr('id'));
            }
        });
    });
    function section_register() {
        $("section").each(function(index) {
            this_offset = $(this).offset();

            if ($(this).attr('id')=='work') {
                section_position[index] = this_offset.top-150;
            } else {
                section_position[index] = this_offset.top - ($(window).height()*0.4);
            };
        });
    }


    //Slider
    $('.carousel-services .slick').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 4,
        autoplaySpeed: 5000,
        infinite: false,
        prevArrow: '<i class="fa fa-angle-left prev-arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right next-arrow" aria-hidden="true"></i>',
        customPaging: function() {
            return "<i class='custom-dot'></i>"
        },
        responsive: [{
            breakpoint: 1201,
            settings: { slidesToShow: 3 }
        }, {

            breakpoint: 993,
            settings: { slidesToShow: 2 }
        }, {
            breakpoint: 481,
            settings: { slidesToShow: 1 }
        }]
    });
    $('.carousel-reviews .slick').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 5,
        autoplaySpeed: 5000,
        infinite: false,
        prevArrow: '<i class="fa fa-angle-left prev-arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right next-arrow" aria-hidden="true"></i>',
        customPaging: function() {
            return "<i class='custom-dot'></i>"
        },
        responsive: [{
            breakpoint: 1201,
            settings: { slidesToShow: 4 }
        }, {
            breakpoint: 993,
            settings: { slidesToShow: 3 }
        }, {
            breakpoint: 769,
            settings: { slidesToShow: 2 }
        }, {
            breakpoint: 481,
            settings: { slidesToShow: 1 }
        }]
    });
    $('.service-vnutr-items .slick').slick({
        autoplay: true,
        dots: false,
        slidesToShow: 7,
        autoplaySpeed: 5000,
        infinite: false,
        prevArrow: '<i class="fa fa-angle-left prev-arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right next-arrow" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1201,
            settings: { slidesToShow: 6 }
        }, {
            breakpoint: 993,
            settings: { slidesToShow: 5 }
        }, {
            breakpoint: 769,
            settings: { slidesToShow: 4 }
        }, {
            breakpoint: 481,
            settings: { slidesToShow: 2 }
        }]
    });

    //Smooth Scroll To Anchor
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //Packery
    $clients_item = $('.clients-wrap .grid-item');
    $works_item = $('.works-wrap .grid-item');
    $works_item_w2h2 = $('.works-wrap .grid-item--w2h2');
    if ( $(window).width() ){
        $works_item.css('height', $works_item.width()/2);
        $works_item_w2h2.css('height', $works_item_w2h2.width());
        $clients_item.css('height', $clients_item.width());
    }
    $('.works-wrap .grid').packery({
        itemSelector: '.grid-item',
        percentPosition: true
    });
    $('.clients-wrap .grid').packery({
        itemSelector: '.grid-item',
        percentPosition: true
    });

    //Custom inputs
    (function() {
        if (!String.prototype.trim) {
            (function() {
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'input--filled' );
            }
            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'input--filled' );
            }
        }
    })();

    $('.info-height').css( 'height', $('.photo-height').height() - 20 );

    $('.news-item').equalHeights();
    $('.news-item-no-date').equalHeights();

    //Count
    var windowsHeight = $(window).height();
    var windowsWidth = $(window).width();
    var lastScrollTop = 0;
    function startCounter() {
        $(function () {
            $({
                n: 0
            }).animate({
                n: 10
            }, {
                duration: 200E1,
                step: function (a) {
                    $("#n1").html(a | 0)
                }
            })
        });
        $(function () {
            $({
                n: 0
            }).animate({
                n: 3500
            }, {
                duration: 300E1,
                step: function (a) {
                    $("#n2").html(a | 0)
                }
            })
        });

        $(function () {
            $({
                n: 0
            }).animate({
                n: 7850
            }, {
                duration: 450E1,
                step: function (a) {
                    $("#n3").html(a | 0)
                }
            })
        });

        $(function () {
            $({
                n: 0
            }).animate({
                n: 46
            }, {
                duration: 450E1,
                step: function (a) {
                    $("#n4").html(a | 0)
                }
            })
        });

        $(function () {
            $({
                n: 0
            }).animate({
                n: 60
            }, {
                duration: 450E1,
                step: function (a) {
                    $("#n5").html(a | 0)
                }
            })
        });

    }
    var topPosition = windowsHeight;

    if (windowsWidth >= 768) {
        $(window).scroll(function() {
            if($(window).scrollTop() >= topPosition && $("#n1").html() == '0') {
                startCounter();
            }
        });
    } else {
        $("#n1").text(10);
        $("#n2").text(3500);
        $("#n3").text(7850);
        $("#n4").text(46);
        $("#n5").text(60);
    };

    $('.hidden-article').hide();
    $('#display-article').on('click', function(e) {
        e.preventDefault();
       $('.hidden-article').fadeToggle('slow');
    });

    $('#btn-menu').sidr({
        side: 'right',
        onOpen: function() {
            return (
                $('.head-top').addClass('menu-open'),
                $('#for-prom').css({
                    left: -120
                })
            );
        },
        onClose: function() {
            return (
                $('.head-top').removeClass('menu-open'),
                $('#for-prom').css({
                    left: 20
                })
            );
        }
    });

    $('.review-item .img-wrap').magnificPopup({type:'image'});

});

$(window).resize(function() {

        $works_item.css('height', $works_item.width()/2);
        $works_item_w2h2.css('height', $works_item_w2h2.width());
        $clients_item.css('height', $clients_item.width());

});
