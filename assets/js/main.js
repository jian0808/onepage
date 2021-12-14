AOS.init();

// header
$('.xi-bars').click(function(){
    $('.gnb').slideToggle();
});

// swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2.7,
    // slidesPerGroup: 2,
    centeredSlides: false,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
        280: {
          slidesPerView: 1.5,
        },
        541: {
          slidesPerView: 2.7
        },
      }
  });

// 정규수업 taps
$('#tabs-1').click(function(){
    $('.tab01').css('display','block');
    $('.tab02').css('display','none');
    $('.tab03').css('display','none');
    $('#tabs-1').css('color','#fff');
    $('#tabs-2').css('color','rgba(255,255,255,.3)');
    $('#tabs-3').css('color','rgba(255,255,255,.3)');
});
$('#tabs-2').click(function(){
    $('.tab01').css('display','none');
    $('.tab02').css('display','block');
    $('.tab03').css('display','none'); 
    $('#tabs-2').css('color','#fff');  
    $('#tabs-1').css('color','rgba(255,255,255,.3)');
    $('#tabs-3').css('color','rgba(255,255,255,.3)');  
});
$('#tabs-3').click(function(){
    $('.tab01').css('display','none');
    $('.tab02').css('display','none');
    $('.tab03').css('display','block');  
    $('#tabs-3').css('color','#fff');
    $('#tabs-1').css('color','rgba(255,255,255,.3)');
    $('#tabs-2').css('color','rgba(255,255,255,.3)'); 
});
