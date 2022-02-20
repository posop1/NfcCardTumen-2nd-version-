$(document).ready(function () {

  /* Menu nav toggle */
  $(".menu-btn").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });

  /*	const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }*/

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });

  /* Smooth scroll */
  $("[data-scroll1]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId1 = $this.data('scroll'),
      blockOffset1 = $(blockId1).offset().top;

    $(".btns a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  //let menuBtn = document.querySelector('.menu-btn');
  //let menu = document.querySelector('.menu');

  //menuBtn.addEventListener('click', function(){
  //menuBtn.classList.toggle('active');
  //menu.classList.toggle('active');

});