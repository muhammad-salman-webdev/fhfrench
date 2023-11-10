(function($) {
    'use strict';
	

    // // Preloader
    // window.onload=function(){
    //     document.getElementById('loader').style.display="none";
    // };

    
	// Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });	


    // Sticky
    var wind = $(window);
    var sticky = $('.header-manu-section');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });


    // animate
    new WOW().init();


     // Case Study Active
    $('.banner-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1500,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 

    // testimonial Active
    $('.testimonial-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: false,
        dots: true,
        nav: false,
        margin:30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })  
    
    
    // testimonial Active
    $('.choose-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: false,
        dots: false,
        nav: true,
        margin:30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })  

    // service Active
    $('.nagibrid-slider').owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        center:false,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
             1500: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })  

    // brand Active
    $('.hero-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
             1500: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })  
    
    
    // clinning Active
    $('.testimonial-inner-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
             1500: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 
    
    
    // clinning Active
    $('.image-slider').owlCarousel({
        loop: false,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
             1500: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 
    
    
    // clinning Active
    $('.fecilities-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            },
             1500: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })  


	/*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // table tabs
            
    $(document).ready(function() {

        const tabs= document.querySelectorAll('.tab_btn');
        const all_content= document.querySelectorAll('.tab_content')

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', ()=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active');

                all_content.forEach(content=>{content.classList.remove('active')});
                all_content[index].classList.add('active');
            });
        });   
    });   
    
    

    $(document).ready(function() {
        const tabs= document.querySelectorAll('.tab-btn');
        const all_content= document.querySelectorAll('.tab-content')

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', ()=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active');

                all_content.forEach(content=>{content.classList.remove('active')});
                all_content[index].classList.add('active');
            });
        });
    });

	
	 // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

    //curseer animation

    var curser = document.querySelector(".curser");
    var curser2 = document.querySelector(".curser2");

    document.addEventListener("mousemove", function(e){
        curser.style.cssText = curser2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });



	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })

    // accordion js
        jQuery(document).ready(function($) {
            "use strict";

            $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

            $(".accordion a").click(function (j) {
                var dropDown = $(this).closest("li").find("p");

                $(this).closest(".accordion").find("p").not(dropDown).slideUp();

                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                } else {
                    $(this).closest(".accordion").find("a.active").removeClass("active");
                    $(this).addClass("active");
                }

                dropDown.stop(false, true).slideToggle();

                j.preventDefault();
            });

        });



            // Get the modal
        $(document).ready(function() {

            var modal = document.getElementById('id01');
        
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
        });




            // active class & remove class
    

            $(document).ready(function() {
            let buttons = document.querySelectorAll('.blog-pagination ul li button');

            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    buttons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');        
                });
            });
            });            
            
            // active class & remove class

            $(document).ready(function() {
                let buttons = document.querySelectorAll('.pagination-btn ul li button');

                buttons.forEach(button => {
                    button.addEventListener('click', function () {
                        buttons.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');        
                    });
                });
            });




            /* tab header */
        



            //active JS
            $(document).ready(function() {
                var header = document.getElementById("product-list");
                var btns = header.getElementsByClassName("btn");
                for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function() {
                    var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
                });
                }
            });


            // scroll up

            $(window).on('scroll', function () {
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').addClass('active');
                if (scrolled < 300) $('.go-top').removeClass('active');
            });
    
            $('.go-top').on('click', function () {
                $("html, body").animate({
                    scrollTop: "0"
                }, 1200);
            });

        if($('.prgoress_indicator path').length){
            var progressPath = document.querySelector('.prgoress_indicator path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).on('scroll', updateProgress);
            var offset = 250;
            var duration = 550;
            jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.prgoress_indicator').addClass('active-progress');
            } else {
                jQuery('.prgoress_indicator').removeClass('active-progress');
            }
            });
            jQuery('.prgoress_indicator').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
            });
        }


        // Calender Jquery
        $(document).ready(function() {
            var curDate = (new Date()).getDate();
            var curMonth = (new Date()).getMonth();
            var curYear = (new Date()).getFullYear();
            var startDay = (new Date(curYear, curMonth, 1)).getDay();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
            var prevMonth = noofdays[curMonth - 1];
            if (curMonth == 11) {
            prevMonth = noofdays[0];
            } else if (curMonth == 0) {
            prevMonth = noofdays[11];
            }
            var totalDays = noofdays[curMonth];
            var counter = 0;
            var precounter = prevMonth - (startDay - 1);
            var rightbox = 6;
            var flag = true;

            jQuery('.curr-month b').text(months[curMonth]);
            for (var i = 0; i < 42; i++) {
            if (i >= startDay) {
                counter++;
                if (counter > totalDays) {
                counter = 1;
                flag = false;
                }
                if (flag == true) {
                jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
                } else {
                jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
                }
            } else {
                jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
                precounter++;
            }

            if (i == rightbox) {
                jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
                rightbox = rightbox + 7;
            }

            if (i > 34) {
                jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
            }

            if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
                jQuery(jQuery('.all-date ul li')[i]).css({
                "background-color": "#02548b",
                "color": "#fff"
                });
            }
            }
        });

    
})(jQuery);