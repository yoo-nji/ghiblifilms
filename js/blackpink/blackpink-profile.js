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