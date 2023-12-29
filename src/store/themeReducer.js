import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light",
    },
    reducers: {
        toggleTheme: (state) => {
            if (state.theme == "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
            window.localStorage.setItem("theme", state.theme)
        },
        loadTheme: (state)=>{
            state.theme = window.localStorage.getItem("theme") || "light"
        }
    },
});

export const { toggleTheme, loadTheme } = themeSlice.actions;

export default themeSlice.reducer;
