(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Language selector
    var savedLanguage = localStorage.getItem('labcongo_language') || 'en';
    var supportedLanguages = ['en', 'fr'];

    if (supportedLanguages.indexOf(savedLanguage) === -1) {
        savedLanguage = 'en';
    }

    document.documentElement.setAttribute('lang', savedLanguage);
    $('#languageSelect').val(savedLanguage);
    $('#languageSelect').on('change', function () {
        var selectedLanguage = $(this).val();

        if (supportedLanguages.indexOf(selectedLanguage) === -1) {
            selectedLanguage = 'en';
        }

        localStorage.setItem('labcongo_language', selectedLanguage);
        document.documentElement.setAttribute('lang', selectedLanguage);
    });


    // Form feedback
    var formStatus = new URLSearchParams(window.location.search).get('form');
    var formMessages = {
        success: {
            type: 'success',
            text: 'Thank you. Your message has been sent successfully.'
        },
        logged: {
            type: 'warning',
            text: 'Thank you. Your message was received locally for testing. Local PHP may not deliver email; use the hosted server for the final email test.'
        },
        config: {
            type: 'warning',
            text: 'The form is connected, but SMTP is not configured yet. Add the email password in mail-config.php to send real messages.'
        },
        error: {
            type: 'danger',
            text: 'Sorry, your message could not be sent by SMTP. Please verify the email password and server settings.'
        },
        invalid: {
            type: 'danger',
            text: 'Invalid form request. Please submit the form again.'
        }
    };

    if (formStatus && formMessages[formStatus]) {
        var feedback = formMessages[formStatus];
        var alert = $(
            '<div class="form-feedback" role="status" aria-live="polite">' +
                '<div class="alert alert-' + feedback.type + ' shadow mb-0" role="alert">' +
                    '<span>' + feedback.text + '</span>' +
                    '<button type="button" class="btn-close form-feedback-close" aria-label="Close"></button>' +
                '</div>' +
            '</div>'
        );

        var dismissFeedback = function () {
            alert.removeClass('is-visible');
            setTimeout(function () {
                alert.remove();
            }, 400);
        };

        $('body').append(alert);

        setTimeout(function () {
            alert.addClass('is-visible');
        }, 300);

        setTimeout(dismissFeedback, 6500);
        alert.find('.form-feedback-close').on('click', dismissFeedback);

        if (window.history.replaceState) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Experience
    $('.experience').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 900,
        loop: true,
        margin: 24,
        dots: false,
        nav: true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });
    
})(jQuery);

