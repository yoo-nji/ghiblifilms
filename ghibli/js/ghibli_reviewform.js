const $reviewInput = document.querySelector('input[name="review"]');

//200자 제한 입력 이벤트 처리
{
  $reviewInput.addEventListener('input', function () {
    const $charCount = document.getElementById('charCount');
    //글자수 세서 표시해 주기
    const currentLength = $reviewInput.value.length;
    $charCount.textContent = `${currentLength}/200`;
    //200자 이상 넘어가면 경고창
    if (currentLength >= 200) {
      alert('최대 200자까지 입력 가능합니다.');
    }
  });
}

//리뷰 추가삭제
const $reviewFormBt = document.querySelector
  ('#reviewForm button');

$reviewFormBt.addEventListener("click", (e) => {
  e.preventDefault();

  const $userId = document.querySelector('.userId');
  const userIdText = $userId.textContent;

  const $reviewBoxSet = document.querySelector('.reviewBoxSet');
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
  const $newreportButton = document.createElement('button');
  $newreportButton.textContent = '신고';

  const $btnBox = document.createElement('button');
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

  $reviewInput.value = '';
  $reviewInput.focus();

  $btnDelete.addEventListener("click", function () {
    if (confirm('정말 지우시겠습니까?'))
      this.parentNode.parentNode.remove(this);
  });
});
