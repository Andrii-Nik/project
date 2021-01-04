"use strict"; 

const numberOfFilms = +prompt('cколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

const a = prompt('один из просмотренных ранее фильмов', ''),
      b = prompt('насколько оцените его?', ''),
      c = prompt('один из просмотренных ранее фильмов', ''),
      d = prompt('насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);