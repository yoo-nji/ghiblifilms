var swiper = new Swiper(".landing-mv", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 자동 슬라이드 설정
  autoplay: {
    // 자동 슬라이드 간격(ms 단위). 30초로 설정
    delay: 30000,
    // 사용자가 슬라이드를 조작한 후에도 자동 재생을 계속할지 설정 (true: 계속 재생)
    disableOnInteraction: false
  }
});

const hed = document.querySelector('.hed');
const gnb = document.querySelector('.menu');
const openButton = document.querySelector('.ico-open');
const closeButton = document.querySelector('.ico-close');

openButton.addEventListener('click', function () {
  hed.classList.add("on");
  gnb.classList.add("on");
  openButton.classList.add("on");
  closeButton.classList.add("on");
});

closeButton.addEventListener('click', function () {
  hed.classList.remove("on");
  gnb.classList.remove("on");
  openButton.classList.remove("on");
  closeButton.classList.remove("on");
});
//버튼 클릭시 메뉴바 나오게 하는 거

