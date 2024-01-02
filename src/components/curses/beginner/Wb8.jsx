import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { CssProperty } from "./Css";

export default function Wb1() {
    let [html1, setHtml1] =
        useState(`<h1 class="colorname">Lorem ipsum dolor sit amet.</h1>
    <h1 class="rgba">Lorem ipsum dolor sit amet.</h1>
    <h1 class="hex">Lorem ipsum dolor sit amet.</h1>
    <h1 class="hsl">Lorem ipsum dolor sit amet.</h1>
    <h1 class="gradient">Lorem ipsum dolor sit amet.</h1>`);
    let [css1, setCss1] = useState(`.colorname {
        background-color: red;
    }
    .rgba {
        background-color: rgba(0, 0, 0, 0.5);
    }
    .hex {
        background-color: #0005;
    }
    .hsl {
        background-color: rgb(192, 66, 44);
    }
    .gradient {
        background-image: linear-gradient(45deg, red 20%, blue);
    }`);
    return (
        <Wrapper>
            <Title>8. CSS: Кольори, шрифти</Title>
            <Start>
                <img src="/images/colors.gif" alt="web structure" />
                <div>
                    Кольори в CSS можуть бути визначені різними способами, що
                    дозволяє створювати різноманітні палітри та ефективно
                    керувати відображенням кольорів на веб-сторінках.
                    <br />
                    Основні властивості де можна застосувати кольори це колр
                    тексту <CssProperty Key={"color"} value={"red"} /> або колір
                    фону <CssProperty Key={"background-color"} value={"red"} />
                    <br />Є кілька способів задати колір:
                </div>
            </Start>
            <h2>Ключові слова</h2>
            <div>
                У CSS є кілька ключових слів, що визначають базові кольори:
                <ul>
                    <li>
                        <Code>black, white</Code>: Чорний та білий.
                    </li>
                    <li>
                        <Code>red, green, blue, yellow, purple,</Code> тощо:
                        Назви основних кольорів.
                    </li>
                    <li>
                        <Code>transparent</Code>: Прозорий колір.
                    </li>
                </ul>
            </div>
            <h2>Шістнадцятковий (Hex) колір</h2>
            <div>
                У шістнадцятковому форматі кольори визначаються через комбінацію
                шістнадцяткових цифр (0-9 та A-F) для червоного, зеленого та
                синього каналів, де 0 це колір відсутній, а F це максимальна
                інтенсивність. (це як змішувати гуаш, суміш кольорів в
                правельній пропорції дасть бажаний вам колір). Ось так
                <CssProperty Key={"color"} value={"#000"} /> можна задавати
                одним числом на колір, або парами чисел для точнішого кольору{" "}
                <CssProperty Key={"color"} value={"#1f33ab"} />, а якщо додати
                ще 4 або 7 і 8 числа то вони відповідатимуть за прозорість
                <CssProperty Key={"color"} value={"#1f33ab55"} />
            </div>
            <h2>RGB та RGBA</h2>
            <div>
                Значення кольорів також можна задавати в форматі червоний,
                зелений, синій (RGB){" "}
                <CssProperty Key={"color"} value={"rgb(255, 0, 255)"} /> або RGB
                з прозорістю (RGBA){" "}
                <CssProperty Key={"color"} value={"rgba(255, 0, 255, 0.5)"} />,
                де числа від 0 до 255 вказують на інтенсивність кожного каналу
                кольору, а останнє це прозорість в діапазоні від 1 (повністю не
                прозорий) до 0 (повністю прозорий)
            </div>
            <h2>HSL та HSLA</h2>
            <div>
                Кольори можуть бути визначені за допомогою тону (Hue),
                насиченості (Saturation) та світлоти (Lightness) (HSL){" "}
                <CssProperty Key={"color"} value={"hsl(0, 100%, 50%)"} /> або
                HSL з прозорістю (HSLA){" "}
                <CssProperty
                    Key={"color"}
                    value={"hsla(120, 100%, 50%, 0.5)"}
                />
                . Значення тону від 0 до 360, насиченості та світлоти від 0% до
                100%.
            </div>
            <h2>Градієнти</h2>
            <div>
                Градієнти дозволяють створювати плавні переходи між кольорами
                або їх відтінками. Це може бути від лінійних{" "}
                <CssProperty
                    Key={"background-image"}
                    value={"linear-gradient(to right, red, yellow)"}
                />{" "}
                (<Code>to right</Code> може вказувати в якому напрямку будуть
                змінюватись кольори, також можуть бути вказаними в градусах{" "}
                <Code>45deg</Code>) до радіальних{" "}
                <CssProperty
                    Key={"background-image"}
                    value={"radial-gradient(circle, green, blue)"}
                />{" "}
                (<Code>circle</Code> може вказувати якої форми буде градієнт,
                також можуть бути не рівної форми <Code>ellipse</Code>)
                градієнтів. Також можна вказати скільки відсотків від градієнту
                займатиме колір{" "}
                <CssProperty
                    Key={"background-image"}
                    value={"linear-gradient(to right, red 80%, yellow 20%)"}
                />
            </div>
            <Hsr>
                <CodeEditor
                    value={html1}
                    language="html"
                    style={{ fontSize: "1rem" }}
                    onChange={(e) => setHtml1(e.target.value)}
                />
                <CodeEditor
                    value={css1}
                    language="css"
                    style={{ fontSize: "1rem" }}
                    onChange={(e) => setCss1(e.target.value)}
                />
                <Result
                    srcDoc={"<style>" + css1 + "</style>" + html1}
                    className="result"
                ></Result>
            </Hsr>
            <h2>Шрифти</h2>
            <div>
                Commind soon...
            </div>
        </Wrapper>
    );
}

let Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & input {
        background-color: transparent;
        padding: 0.3rem 1rem;
        border: 1px dashed ${(p) => p.theme.primary200};
        border-radius: 0.5rem;
        margin: 0.3rem;
        color: ${(p) => p.theme.text100};
        accent-color: ${(p) => p.theme.primary200};
    }
`;

let Title = styled.h1`
    text-align: center;
    font-family: "title", sans-serif;
    font-size: 3rem;
`;

let Start = styled.div`
    display: flex;
    gap: 1rem;
    & img {
        object-fit: contain;
        height: 5rem;
    }
`;

let Code = styled.span`
    color: ${(p) => p.theme.primary200};
`;

let Cr = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem 0;
`;

let Result = styled.iframe`
    padding: 1rem;
    border: 1px solid ${(p) => p.theme.primary100};
    background-color: white;
    height: 100%;
`;

let WrapTag = styled.div`
    margin-left: 2rem;
`;

let Hsr = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    & .result {
        grid-column: 1/-1;
        width: 100%;
    }
`;
