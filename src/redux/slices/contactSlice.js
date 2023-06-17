import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "redux/initialState";
import { addContact } from "redux/operations/addContact";
import { deleteContact } from "redux/operations/deleteContact";
import { fetchContacts } from "redux/operations/fetchContacts";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending](state) {
            state.contacts.isLoading = true;
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = payload;
        },
        [fetchContacts.rejected](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = payload;
        },


        [addContact.pending](state) {
            state.contacts.isLoading = true;
        },
        [addContact.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(payload)
        },
        [addContact.rejected](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = payload;
        },


        [deleteContact.pending](state) {
            state.contacts.isLoading = true;
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            const index = state.contacts.items.findIndex(
                contact => contact.id === payload.id
            );
            state.contacts.items.splice(index, 1);
        },
        [deleteContact.rejected](state, { payload }) {
            state.contacts.isLoading = false;
            state.contacts.error = payload;
        },
    }


});

export const contactReducer = contactSlice.reducer; 