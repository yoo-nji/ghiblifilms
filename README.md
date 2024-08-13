# 지브리 리뷰 공유 플랫폼: 나만의 감상문을 작성하고 공유하세요!
  
>기여도: 100% 개인프로젝트<br>
기간: 2024.06.10 ~ 2024.07.16<br>
배포: [yoo-nji.github.io/GhibliFilms/](https://yoo-nji.github.io/ghiblifilms/)

## 프로젝트 개요
>Ghibli Films는 Studio Ghibli API를 바탕으로 지브리 영화의 정보를 조회하고 지브리 영화 목록과 각 영화별 상세 페이지에서 댓글로 감상문을 공유할 수 있는 웹 애플리케이션입니다.

초기 CSS, HTML, JS를 사용하여 기본적인 기능을 구현하였으며, 태블릿과 모바일까지 대응 가능한 반응형 웹 디자인을 적용하여 **다양한 디바이스에서 최적의 사용자 경험을 제공**합니다.
동적라우트를 이용해 지브리 영화의 상세 정보를 볼 수 있게 하여 기능성을 강화했습니다.

## 주요 기능
- Studio Ghibli API를 이용한 영화 목록 보기
- GitHub를 이용한 간편 로그인
- 영화 상세 페이지에서 댓글 기능을 통해 사용자 간 감상문 공유
  * Supabase를 이용하여 댓글 기능을 구현
  * 로그인 상태에 따라 댓글 작성, 수정, 삭제 기능 활성화

## 구현 화면(반응형)
### 메인, 영화리스트
![시퀀스 04](https://github.com/user-attachments/assets/63a08728-4ba4-4f2f-ab09-d273693ce613)

* 지브리 영화 정보 조회: 영화 데이터를 API를 통해 동적으로 불러와 사용자에게 최신 정보를 제공
* 영화 검색 기능: 일부 스펠링만으로도 영화 검색이 가능하며, 예를 들어 ‘ki’를 입력하면 해당되는 모든 영화 리스트가 출력
* 댓글 배지 기능: 각 영화별 댓글 수를 배지로 표시하여, 사용자들이 쉽게 확인할 수 있도록 함

### 영화 상세
![지브리댓글](https://github.com/user-attachments/assets/8cb05d33-7598-4766-8a1e-1476785d913c)
![화면 기록 2024-08-05 오후 2 08 02](https://github.com/user-attachments/assets/51866a55-e621-4a51-8c7d-ad8a3d8b528e)


* **동적 라우트**: 영화의 고유한 ID로 API를 호출하여 상세 정보 출력
* **댓글 기능**: 사용자 간 감상문 공유 가능 (로그인 사용자에 한해 작성, 수정, 삭제 가능)


## 사용 기술
### Language
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Framework
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)

### Library
![Vue Router](https://img.shields.io/badge/vue--router-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white)
![Pinia](https://img.shields.io/badge/pinia-%2335495e.svg?style=for-the-badge&logo=pinia&logoColor=yellow)

### Tools
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Backend
![Supabase](https://img.shields.io/badge/supabase-%2300C7B7.svg?style=for-the-badge&logo=supabase&logoColor=white)

## 개발 과정
- **초기 구현**: 2024.06.10 ~ 2024.07.03 - CSS, HTML, JS로 기본 기능 구현
- **Vue.js로 마이그레이션**: 2024.07.03 ~ 2024.07.09 - Vue.js와 Vuetify를 이용해 기능성 강화
- **첫 배포**: 2024.07.13

## 향후 계획
- **React로의 마이그레이션**: 향후 React와 Next.js를 활용한 SSR 지원 계획
- **성능 최적화**: 성능 최적화 및 검색엔진 최적화를 통해 사용자 경험 개선 계획

