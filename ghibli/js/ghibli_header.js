//스크롤시 헤더 색상, 투명도 변경
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 250) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

// 햄버거 버튼 딸깍이
const $header = document.querySelector('header');
const $navSet = document.querySelector('.navSet');
const $loginBt = document.querySelector('.loginBt');
const $navIco = document.querySelector('.navIco');

let toggle = function () {
  $header.classList.toggle("on");
  $navSet.classList.toggle("on");
  $loginBt.classList.toggle("on");

  this.textContent = this.textContent === 'close' ? 'menu' : 'close';
};

$navIco.addEventListener('click', toggle);