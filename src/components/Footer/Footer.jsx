import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <Wrapper>
            <div>&copy; Bohdan Senychak</div>
            <Links>
                <A target="_blank" href="http://t.me/badyasik">
                    <FaTelegramPlane />
                </A>
                <A target="_blank" href="https://github.com/BSenichak">
                    <FaGithub />
                </A>
                <A target="_blank" href="https://www.linkedin.com/in/bohdan-senichak-4a7340275">
                    <FaLinkedin />
                </A>
            </Links>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background: linear-gradient(
        to right,
        ${(p) => p.theme.primary100},
        ${(p) => p.theme.primary200}
    );
    border-radius: 1rem 1rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    font-family: "title", cursive;
    font-weight: 900;
`;

const Links = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
`;

const A = styled.a`
    color: ${(p) => p.theme.primary300};
    transition: all 0.5s;
    &:hover {
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
        color: ${(p) => p.theme.text100};
    }
`;
