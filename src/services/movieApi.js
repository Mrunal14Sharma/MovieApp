import movies from "../data/movies";

export const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies);
    }, 500);
  });
};
