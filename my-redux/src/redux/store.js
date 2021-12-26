import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer:{
        users: userSlice,
        theme: themeSlice
    }
})