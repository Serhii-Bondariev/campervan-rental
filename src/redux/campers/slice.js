import { createSlice } from "@reduxjs/toolkit";
import { CAMP_LIMIT_PAGE, getCampers } from "./Operations";

// Ініціальний стан
const initialState = {
  campersData: [],
  totalPages: null,
  favorites: [],
  isLoading: false,
  error: null,
};

// Функція для обчислення загальної кількості сторінок
const calcTotalPages = (totalPages) => Math.ceil(totalPages / CAMP_LIMIT_PAGE);

const camperSlice = createSlice({
  name: "campers",
  initialState,
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
