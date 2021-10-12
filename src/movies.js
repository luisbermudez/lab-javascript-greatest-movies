// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(!movies.length) {return 0}

  const average = movies.reduce(function (accumulator, currentValue) {
    if(!currentValue.score) {return accumulator}
    return accumulator += currentValue.score
  }, 0) / movies.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return scoresAverage(movies.filter(movie => movie.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
const arrCopy = movies.map(movie => movie);
const byYear = arrCopy.sort((a, b) => a.year - b.year);
const byYearAndTitle = byYear.sort(function(a, b) {
  if(a.year === b.year) {
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    if(a.title === b.title) return 0;
  }
});
return byYearAndTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const arrCopy = movies.map(movie => movie.title);

  const byTitle = arrCopy.sort(function(a, b) {
    if(a < b) return -1;
    if(a > b) return 1;
    if(a === b) return 0;
  });

  let title20 = [];
  if(byTitle.length > 20) {
    title20 = byTitle.slice(0, 20)
    return title20;
  } else {
    title20 = byTitle;
  }

  return byTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const arrCopy = movies.map(function (movie) {
    const duration = movie.duration;
    let time;

    if(duration.includes(' ')) {
      const splitted = duration.split(' ');
      const hour = (splitted[0].slice(0, splitted[0].indexOf('h'))) * 60;
      const min = (splitted[1].slice(0, splitted[1].indexOf('min'))) * 1;
      time = hour + min; 
    } else {
      time = (duration.slice(0, duration.indexOf('h'))) * 60;
    }

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: time,
      genre: movie.genre,
      score: movie.score,
    }
  })
  return arrCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if(!movies.length) return null;

  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
