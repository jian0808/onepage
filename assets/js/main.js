AOS.init();

// header
$('.xi-bars').click(function(){
    $('.gnb').slideToggle();
});

// swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2.7,
    centeredSlides: false,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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

// 오시는길 카카오맵
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
    center: new kakao.maps.LatLng(37.63922200298304, 126.62867304924596), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var imageSrc = 'assets/images/placeholder.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.63922200298304, 126.62867304924596); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);  

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var content = '<div class="customoverlay">' +
      ' <a href="http://kko.to/62GiLynfj" target="_blank">' +
      ' <span class="title">알베로 목공교실</span>' +
      ' </a>' +
      ' </div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(37.63922200298304, 126.62867304924596);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1       
  });