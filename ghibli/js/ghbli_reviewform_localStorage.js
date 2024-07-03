document.addEventListener('DOMContentLoaded', () => {
  const $reviewFormBt = document.querySelector('#reviewForm button');
  const $reviewInput = document.querySelector('#reviewForm input[name="review"]');
  const $reviewBoxSet = document.querySelector('.reviewBoxSet');
  const $userId = document.querySelector('.userId');

  // 기존 리뷰 로컬 스토리지에서 로드
  loadReviews();

  //등록
  $reviewFormBt.addEventListener("click", (e) => {
    e.preventDefault();

    const userIdText = $userId.textContent;
    const reviewValue = $reviewInput.value;


    if (reviewValue.trim() === "") {
      alert("리뷰 내용을 입력해 주세요.");
      return;
      // console.log("리뷰 제출:", reviewValue);
    }

    // 리뷰 추가 함수 호출
    addReview(userIdText, reviewValue);

    // 입력 필드 초기화
    $reviewInput.value = '';
    $reviewInput.focus();
  });

  function addReview(userIdText, reviewValue) {
    const $reviewBox = document.createElement('div');
    $reviewBox.id = 'reviewBox';

    const $reviewText = document.createElement('div');
    $reviewText.classList.add('reviewText');
    const $newTextId = document.createElement('div');
    $newTextId.textContent = userIdText;
    const $newText = document.createElement('div');
    $newText.textContent = reviewValue;

    const $div = document.createElement('div');
    const $newData = document.createElement('span');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ko-KR');
    const formattedTime = currentDate.toLocaleTimeString('ko-KR');
    $newData.textContent = `${formattedDate} ${formattedTime}`;

    const $newreportButton = document.createElement('button');
    $newreportButton.textContent = '신고';

    const $btnBox = document.createElement('div');
    $btnBox.classList.add('btnBox');
    const $btnEdit = document.createElement('button');
    $btnEdit.textContent = '수정';
    const $btnDelete = document.createElement('button');
    $btnDelete.textContent = '삭제';

    $reviewBox.append($reviewText, $btnBox);
    $reviewText.append($newTextId, $newText, $div);
    $div.append($newData, $newreportButton);
    $btnBox.append($btnEdit, $btnDelete);
    $reviewBoxSet.append($reviewBox);

    // 리뷰 로컬 스토리지에 저장
    saveReview(userIdText, reviewValue, formattedDate, formattedTime);

    $btnDelete.addEventListener("click", function () {
      if (confirm('정말 지우시겠습니까?')) {
        $reviewBox.remove();
        deleteReview(formattedDate, formattedTime);
      }
    });
  }

  // 로컬 스토리지 저장 함수
  function saveReview(userId, review, date, time) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ userId, review, date, time });
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    // console.log(reviews);

    reviews.forEach(({ userId, review, date, time }) => {
      // console.log(userId);
      // console.log(review);
      // console.log(date);
      // console.log(time);

      const $reviewBox = document.createElement('div');
      $reviewBox.id = 'reviewBox';

      const $reviewText = document.createElement('div');
      $reviewText.classList.add('reviewText');
      const $newTextId = document.createElement('div');
      $newTextId.textContent = userId;
      const $newText = document.createElement('div');
      $newText.textContent = review;

      const $div = document.createElement('div');
      const $newData = document.createElement('span');
      $newData.textContent = `${date} ${time}`;

      const $newreportButton = document.createElement('button');
      $newreportButton.textContent = '신고';

      const $btnBox = document.createElement('div');
      $btnBox.classList.add('btnBox');
      const $btnEdit = document.createElement('button');
      $btnEdit.textContent = '수정';
      const $btnDelete = document.createElement('button');
      $btnDelete.textContent = '삭제';

      $reviewBox.append($reviewText, $btnBox);
      $reviewText.append($newTextId, $newText, $div);
      $div.append($newData, $newreportButton);
      $btnBox.append($btnEdit, $btnDelete);
      $reviewBoxSet.append($reviewBox);

      $btnDelete.addEventListener("click", function () {
        if (confirm('정말 지우시겠습니까?')) {
          $reviewBox.remove();
          deleteReview(date, time);
        }
      });
    });
  }

  function deleteReview(date, time) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews = reviews.filter(review => !(review.date === date && review.time === time));
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }
});