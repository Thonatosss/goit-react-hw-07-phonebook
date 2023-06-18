
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "constants";


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}contacts`, {
                ...data
             });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);