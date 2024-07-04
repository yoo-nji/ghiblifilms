import { v4 as uuidv4 } from 'uuid';

export const defaultDiaries = [
  {
    id: uuidv4(),
    date: "2024-06-02",
    title: "제출물용 기록1",
    content: "조금 우울했지만 괜찮아요.",
    emotion: "🥲",
  },
  {
    id: uuidv4(),
    date: "2024-06-03",
    title: "제출물용 기록2",
    content: "정말 화가 나는 일이 있었어요.",
    emotion: "😡",
  },
  {
    id: uuidv4(),
    date: "2024-06-04",
    title: "제출물용 기록3",
    content: "평온한 하루였어요.",
    emotion: "🙂",
  },
  {
    id: uuidv4(),
    date: "2024-06-05",
    title: "제출물용 기록4",
    content: "스트레스 받는 일이 많았어요.",
    emotion: "😖",
  },
  {
    id: uuidv4(),
    date: "2024-06-06",
    title: "기록 추가 버튼을 눌러서 기록을 추가해 보세요",
    content: "수정, 삭제 버튼 제외한 리스트박스를 누르면 모달창이 열려요",
    emotion: "😍",
  },
  {
    id: uuidv4(),
    date: "2024-06-07",
    title: "감정 버튼을 누르면 필터링해서 볼 수 있어요",
    content: "다시 누르거나 전체보기를 누르면 초기화돼요",
    emotion: "🥲",
  },
  {
    id: uuidv4(),
    date: "2024-06-08",
    title: "제목과 내용으로 검색할 수 있어요",
    content: "내용으로 검색 기능 추가 고민",
    emotion: "😡",
  },
  {
    id: uuidv4(),
    date: "2024-06-09",
    title: "시연용으로 로컬스토리지 좀 빌리겠습니다",
    content:
      "이모지 필터링 옆 전체삭제 버튼을 누르면 로컬스토리지가 비워집니다 ⚠️ 로컬스토리지가 비워지면 새로고침시 다시 불러와집니다.",
    emotion: "😍",
  },
];