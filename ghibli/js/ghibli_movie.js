// 지브리 영화검색페이지

const movieBoxSet = document.querySelector('#movieBoxSet');
const movieTitles = document.querySelector('#movieTitles');

fetch('https://ghibliapi.vercel.app/films')
  .then(response => response.json())
  .then(json => {
    //호출시 로딩 텍스트 비우기
    movieBoxSet.innerHTML = '';
    movieTitles.innerHTML = ''; // datalist 비우기

    json.forEach((v) => {
      const movieBox = document.createElement('a');
      const movieInfo = document.createElement('div');
      const title = document.createElement('h2');
      movieBox.classList.add('movieBox');
      movieInfo.classList.add('movieInfo');

      //a 태그로 만들어진 movieBox에 href 추가하기
      movieBox.href = `#`;

      movieBoxSet.append(movieBox);
      movieBox.append(movieInfo, title);

      movieInfo.style.backgroundImage = `url(${v.image})`;
      title.textContent = `${v.title}`;

      //호버시 나올 박스
      const title2 = document.createElement('div');
      const div = document.createElement('div');
      const dateBox = document.createElement('div');
      const dateTitle = document.createElement('span');
      const date = document.createElement('span');
      const timeBox = document.createElement('div');
      const runningTime = document.createElement('span');
      const time = document.createElement('span');

      movieInfo.append(title2, div);
      div.append(dateBox, timeBox);
      dateBox.append(dateTitle, date);
      timeBox.append(runningTime, time);

      title2.textContent = `${v.title}`;
      dateTitle.textContent = `release date`;
      date.textContent = `${v.release_date}`;
      runningTime.textContent = `running time`;
      time.textContent = `${v.running_time} min`;

      // datalist에 옵션 추가
      const option = document.createElement('option');
      option.value = v.title;
      movieTitles.appendChild(option);

      //클릭시 이동
      movieBox.addEventListener('click', () =>
        location.href = `/portfolio/ghibli/html/movie_details.html`);
    });
  })
  .catch(error => console.error('Error:', error));
