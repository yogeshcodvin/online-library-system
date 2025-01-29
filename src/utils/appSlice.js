import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "./mockdata.js"; // Load mock books

const bookSlice = createSlice({
name: "books",
  initialState: initialBooks, // Store books in Redux
reducers: {
    addBook: (state, action) => {
        state.push(action.payload);
    },
},
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
