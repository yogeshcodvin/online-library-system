
import {configureStore} from '@reduxjs/toolkit'
import bookReducer from "./appSlice";

export const appStore = configureStore({

    reducer: {
        books: bookReducer,
    },
})

