// ghibli_movie.js
export function fetchGhibliMovies(searchInput, movieBoxSet, movieTitles, navigateToDetails) {
  fetch('https://ghibliapi.vercel.app/films')
    .then(response => response.json())
    .then(json => {
      movieBoxSet.innerHTML = '';
      movieTitles.innerHTML = '';

      json.forEach((v) => {
        const movieBox = document.createElement('a');
        const movieInfo = document.createElement('div');
        const title = document.createElement('h2');
        movieBox.classList.add('movieBox');
        movieInfo.classList.add('movieInfo');

        movieBoxSet.append(movieBox);
        movieBox.append(movieInfo, title);

        movieInfo.style.backgroundImage = `url(${v.image})`;
        title.textContent = `${v.title}`;

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

        const option = document.createElement('option');
        option.value = v.title;
        movieTitles.appendChild(option);

        movieBox.addEventListener('click', () => {
          console.log(`Navigating to movieDetails with ID: ${v.id}`);
          navigateToDetails(v.id);
        });
      });

      searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const movies = document.querySelectorAll('.movieBox');

        movies.forEach(movie => {
          const title = movie.querySelector('h2').textContent.toLowerCase();
          if (title.includes(query)) {
            movie.style.display = '';
          } else {
            movie.style.display = 'none';
          }
        });
      });
    })
    .catch(error => console.error('Error:', error));
}