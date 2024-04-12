import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./controls/movieSlice";

const store = configureStore({
	reducer: {
		movies: movieReducer,
	},
});

export default store;
