// 새로고침시 랜덤 배경,텍스트
let ghibliSlogan = fetch('/portfolio/ghibli/js/ghibli_main_slogan.json');
// 파일 읽어와라
// console.log(test);

ghibliSlogan
  .then(response => response.json()) // 객체로 파싱해와라
  .then(json => {
    function setRandomBackground() {
      const $mainSec = document.getElementById('mainSec');
      const $sloganText = document.querySelector('.sloganText');
      const $sloganText2 = document.querySelector('.sloganText2');

      const randomIndex = Math.floor(Math.random() * json.length);
      const randomImage = json[randomIndex].image_url;
      const randomText1 = json[randomIndex].quote;
      const randomText2 = json[randomIndex].movie;

      // console.log(randomImage);
      // console.log(randomText1);

      $mainSec.style.background = `url(${randomImage}) no-repeat center/cover`;
      $sloganText.textContent = randomText1;
      $sloganText2.textContent = randomText2;
    }

    // 페이지 로드 시 랜덤 배경 이미지 설정
    window.onload = setRandomBackground;
  }).catch(에러 => console.log(에러)); // 오류나면 오류처리해라