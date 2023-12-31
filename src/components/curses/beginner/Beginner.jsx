import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../NotFound";
import { motion } from "framer-motion";
import Wb1 from "./Wb1";
import Wb2 from "./Wb2";
import Wb3 from "./Wb3";
import Wb4 from "./Wb4";
import Wb5 from "./Wb5";
import Wb6 from "./Wb6";
import Wb7 from "./Wb7";
import Wb8 from "./Wb8";
import Wb9 from "./Wb9";

export default function Beginner() {
    let lessons = [
        {
            number: 1,
            name: "Вступ в HTML",
            element: <Wb1 />,
        },
        {
            number: 2,
            name: "Гіперпосилання",
            element: <Wb2 />,
        },
        {
            number: 3,
            name: "Списки",
            element: <Wb3 />,
        },
        {
            number: 4,
            name: "Графіка зображення",
            element: <Wb4 />,
        },
        {
            number: 5,
            name: "Таблиці",
            element: <Wb5 />,
        },
        {
            number: 6,
            name: "Форми",
            element: <Wb6 />,
        },
        {
            number: 7,
            name: "CSS: Вступ, селектори",
            element: <Wb7 />,
        },
        {
            number: 8,
            name: "CSS: Кольори, шрифти",
            element: <Wb8 />,
        },
        {
            number: 9,
            name: "Блочна модель",
            element: <Wb9 />,
        },
        {
            number: 10,
            name: "Позиціювання елементів",
        },
        {
            number: 11,
            name: "Семантичні елементи",
        },
        {
            number: 12,
            name: "Навігація",
        },
    ];

    return (
        <Wrapper
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5 }}
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Title>Web Beginner</Title>
                            <Tiles>
                                {lessons.map((el) => {
                                    return (
                                        <Tile
                                            key={el.number}
                                            to={`/beginner/wb${el.number}`}
                                        >
                                            <div className="number">
                                                {el.number}
                                            </div>
                                            <div className="name">
                                                {el.name}
                                            </div>
                                        </Tile>
                                    );
                                })}
                            </Tiles>
                        </>
                    }
                />
                {lessons.map((el) => (
                    <Route
                        key={el.number}
                        path={`wb${el.number}`}
                        element={el.element || <NotFound />}
                    />
                ))}
            </Routes>
        </Wrapper>
    );
}

let Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

let Title = styled.div`
    text-align: center;
    font-family: "title", sans-serif;
    font-weight: 900;
    font-size: 4rem;
`;

let Tiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10rem);
    /* grid-auto-rows: 10rem; */
    gap: 1rem;
    justify-content: center;
`;

let Tile = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, blue, rgb(119, 119, 248));
    border-radius: 1rem;
    text-decoration: none;
    color: white;
    font-family: "default", sans-serif;
    text-align: center;
    padding: 1rem;
    text-overflow: ellipsis;
    box-shadow: 0 0 1rem ${(p) => p.theme.text100}22;
    & .number {
        font-size: 5rem;
        line-height: 5rem;
        font-family: "title", sans-serif;
        font-weight: 900;
    }
`;
