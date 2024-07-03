// src/utils/ghibli_movie.js
export function fetchGhibliMovies() {
  return fetch('https://ghibliapi.vercel.app/films')
    .then(response => response.json())
    .then(json => {
      return json.map(v => ({
        id: v.id,
        title: v.title,
        image: v.image,
        release_date: v.release_date,
        running_time: v.running_time,
      }));
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}