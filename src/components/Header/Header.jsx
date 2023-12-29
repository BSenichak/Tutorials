import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleThemeButton from "./ToggleThemeButton";
import SearchPanel from "./SearchPanel";
import { device } from "../../themes";

export default function Header() {
    return (
        <Wrapper>
            <StyledLink to={"/"}>
                <img src="assets/react.svg" alt="" /> Web Tutorials
            </StyledLink>
            <SearchPanel />
            <ToggleThemeButton />
        </Wrapper>
    );
}

const Wrapper = styled.header`
    background: linear-gradient(
        to right,
        ${(p) => p.theme.primary100},
        ${(p) => p.theme.primary200}
    );
    border-radius: 0 0 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    @media ${device.mobileL} {
        flex-wrap: wrap;
        gap: 0.3rem;
    }
`;

const StyledLink = styled(Link)`
    font-family: "title", sans-serif;
    font-size: 2rem;
    font-weight: 1000;
    text-decoration: none;
    color: var(--primary-300);
    @media ${device.mobileL} {
        flex-basis: 80%;
        order: 0;
    }
    @media ${device.mobileS} {
        font-size: 1.5rem;
    }
`;
