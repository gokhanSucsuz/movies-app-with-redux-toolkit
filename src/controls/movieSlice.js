import { createSlice } from "@reduxjs/toolkit";
import movies from "../movies";

const initialState = {
	movies,
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		movieList: (state) => {
			console.log(state.movies.map((movie) => movie));
		},
	},
});

export default movieSlice.reducer;
