import React from "react";
import styled from "styled-components";
import { device } from "../../themes";

export default function SearchPanel() {
    return (
        <Wrapper>
            <Input type="text" placeholder="flex-direction..." />
            <SearchList>sdfsdfsdf</SearchList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    @media ${device.mobileL} {
        flex-basis: 100%;
        order: 2;
    }
`

const Input = styled.input`
    padding: 0.5rem 2rem;
    border-radius: 5rem;
    border: none;
    margin-right: 1rem;
    width: 30vw;
    &:focus {
        outline: none;
    }
    @media ${device.mobileL} {
        width: 100%;
    }
    `;


const SearchList = styled.div`
    display: none;
    position: absolute;
    z-index: 1;
    background-color: ${props=>props.theme.primary100};
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    color: ${(props)=>props.theme.text100};
    width: 30vw;
    flex-direction: column;
    @media ${device.mobileL} {
        width: 100%;
    }
`