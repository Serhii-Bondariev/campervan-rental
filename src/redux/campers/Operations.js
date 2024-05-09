import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
	baseURL: "https://6632bb43f7d50bbd9b473f15.mockapi.io/",
});

export const getCampers = createAsyncThunk(
	"campers/getAll",
	async ({ page = 1 }, thunkAPI) => {
		try {
			const { data } = await instance.get("/adverts", {
				params: { page, limit: 12 },
			});

			const randomCampers = getRandomItems(data, 12);

			return randomCampers;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

function getRandomItems(array, count) {
	const shuffled = array.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

export const getFilteredCampers = createAsyncThunk(
	"campers/getAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await instance.get("/adverts");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
