import React from "react";
import styled from "styled-components";
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeReducer";

export default function ToggleThemeButton() {
    const d = useDispatch()
    const theme = useSelector((s) => s.theme.theme);
    return <Wrapper onClick={()=>d(toggleTheme())}>{theme == "light" ? <LuSunMedium /> : <LuMoon />}</Wrapper>;
}

const Wrapper = styled.div`
    font-size: 1.5rem;
`;
