import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: JSON.parse(localStorage.getItem("watchlist")) || [],
};

const watchlistSlice = createSlice({
  name: "watchlist",

  initialState,

  reducers: {
    addMovie: (state, action) => {
      const exists = state.movies.find(
        (movie) => movie.id === action.payload.id,
      );

      if (!exists) {
        state.movies.push(action.payload);

        localStorage.setItem("watchlist", JSON.stringify(state.movies));
      }
    },

    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );

      localStorage.setItem("watchlist", JSON.stringify(state.movies));
    },

    clearWatchlist: (state) => {
      state.movies = [];

      localStorage.removeItem("watchlist");
    },
  },
});

export const { addMovie, removeMovie, clearWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
