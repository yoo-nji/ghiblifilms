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

  //1. 뜯어올 태그 변수 선택
  const $userId = document.querySelector('.userId');
  //2. 태그 안 텍스트 추출해서 변수 할당
  const userIdText = $userId.textContent;

  const reviewValue = $reviewInput.value;
  //3. 추가될 리뷰박스 선택
  const $reviewBoxSet = document.querySelector('.reviewBoxSet');
  //4. 리뷰박스 생성
  const $reviewBox = document.createElement('div');
  $reviewBox.id = 'reviewBox';
  //리뷰박스 텍스트박스 
  const $reviewText = document.createElement('div');
  $reviewText.classList.add('reviewText');
  const $newTextId = document.createElement('div');
  $newTextId.textContent = userIdText;
  const $newText = document.createElement('div');
  $newText.textContent = reviewValue;
  //날짜 신고 버튼
  const $div = document.createElement('div');
  const $newData = document.createElement('span');
  const $newreportButton = document.createElement('button');
  $newreportButton.textContent = '신고';

  //리뷰박스 버튼박스
  const $btnBox = document.createElement('button');
  $btnBox.classList.add('btnBox');
  const $btnEdit = document.createElement('button');
  $btnEdit.textContent = '수정';
  const $btnDelete = document.createElement('button');
  $btnDelete.textContent = '삭제';

  //5. 노드 이어주기
  $reviewBox.append($reviewText, $btnBox);
  $reviewText.append($newTextId, $newText, $div);
  $div.append($newData, $newreportButton);
  $btnBox.append($btnEdit, $btnDelete);

  //6.최종적으로 추가해 주기
  $reviewBoxSet.append($reviewBox);

  //7. input 비워주고 포커스 맞추기
  $reviewInput.value = '';
  $reviewInput.focus();

  //삭제 버튼 누르면 지우기
  $btnDelete.addEventListener("click", function () {
    if (confirm('정말 지우시겠습니까?'))
      this.parentNode.parentNode.remove(this);
  });
});
