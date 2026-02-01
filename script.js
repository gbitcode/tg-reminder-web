$(document).ready(function() {
    // Mobile menu toggle
    $('#nav-toggle').on('click', function() {
        $('#nav-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close mobile menu on link click
    $('.nav-link').on('click', function() {
        $('#nav-menu').removeClass('active');
        $('#nav-toggle').removeClass('active');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 600);
        }
    });

    // Navbar scroll effect
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // Active nav link on scroll
    var sections = $('section[id]');

    $(window).on('scroll', function() {
        var scrollPos = $(this).scrollTop() + 100;

        sections.each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr('id');

            if (scrollPos >= top && scrollPos < bottom) {
                $('.nav-link').removeClass('active');
                $('.nav-link[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Animate elements on scroll
    var animateElements = $('.feature-card, .step, .example-card, .command-item');

    function checkScroll() {
        var windowBottom = $(window).scrollTop() + $(window).height();

        animateElements.each(function() {
            var elementTop = $(this).offset().top;

            if (windowBottom > elementTop + 50) {
                $(this).addClass('visible');
            }
        });
    }

    // Add CSS for scroll animations
    $('<style>')
        .text('.feature-card, .step, .example-card, .command-item { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; } .feature-card.visible, .step.visible, .example-card.visible, .command-item.visible { opacity: 1; transform: translateY(0); }')
        .appendTo('head');

    $(window).on('scroll', checkScroll);
    checkScroll(); // Check on load
});