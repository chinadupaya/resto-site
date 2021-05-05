$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-content");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    });
  });
  
ScrollReveal().reveal('.food-card', {interval:200});
ScrollReveal().reveal('.testimonial-block', {interval:300});
ScrollReveal().reveal('.hero-title', {duration: 500});
ScrollReveal().reveal('.hero-text', {duration: 2000});
ScrollReveal().reveal('.hero-button', {duration: 3000});
ScrollReveal().reveal('.well-block', {duration:1500});
ScrollReveal().reveal('.cta-section', {duration:1500});