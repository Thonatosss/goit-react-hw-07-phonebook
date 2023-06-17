import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "redux/initialState";
import { addContact } from "redux/operations/addContact";
import { deleteContact } from "redux/operations/deleteContact";
import { fetchContacts } from "redux/operations/fetchContacts";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.fulfilled](state, { payload }) {
         state.contacts.items = payload
        },
        [addContact.fulfilled](state, { payload }) {
            state.contacts.items.push(payload)
        },
        [deleteContact.fulfilled](state, { payload }) {
            const index = state.contacts.items.findIndex(
                contact => contact.id === payload
            );
            state.contacts.items.splice(index, 1);
        }
    }


});

export const contactReducer = contactSlice.reducer; 