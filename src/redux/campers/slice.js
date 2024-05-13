import { createSlice } from "@reduxjs/toolkit";
import { CAMP_LIMIT , getCampers } from "./Operations";

const initialState = {
	campersData: [],
	totalPages: null,
	favorites: [],
	isLoading: false,
	error: null,
};

 const calcTotalPages = (totalPages) =>
  Math.ceil(totalPages / CAMP_LIMIT);

const camperSlice = createSlice({
	name: "campers",
	initialState: initState,
	reducers: {
		addFavorite: {
			reducer(state, action) {
				state.favorites.push(action.payload);
			},
		},
		deleteFavorite: {
			reducer(state, action) {
				state.favorites = state.favorites.filter(
					(item) => item !== action.payload
				);
			},
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCampers.fulfilled, (state, action) => {
				state.campersData = action.payload;
				state.isLoading = false;
			})
			.addCase(getCampers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCampers.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const { addFavorite, deleteFavorite } = camperSlice.actions;
export const camperReducer = camperSlice.reducer;