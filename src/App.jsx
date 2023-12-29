import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheme } from "./store/themeReducer";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import "./generalStyle.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";

const App = styled.div`
    background: ${(props) => props.theme.bg100};
    min-height: 100vh;
    color: ${(props) => props.theme.text100};
    transition: background, color 0.5s;
`;

export default (props) => {
    const d = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    const [render, setRender] = useState(true);
    if (render) {
        d(loadTheme());
        setRender(false);
    }
    return (
        <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
            <App>
                <Header />
                <Main>
                    <Routes>
                        <Route path="/" element={<StartPage />} />
                    </Routes>
                </Main>
                <Footer />
            </App>
        </ThemeProvider>
    );
};

const Main = styled.footer`
    min-height: 80vh;
    max-width: 1024px;
    margin: 1rem auto;
`;
