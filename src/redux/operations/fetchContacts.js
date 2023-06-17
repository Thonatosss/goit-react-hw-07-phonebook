import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "constants";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}contacts`);
        return response.data;
        

    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})