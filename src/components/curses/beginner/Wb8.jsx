import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Css, CssProperty } from "./Css";
import Tag from "./Tag";

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
    let [html2, setHtml2] =
        useState(`<p>Lorem ipsum dolor sit amet.</p>
<h2>Lorem ipsum dolor sit amet.</h2>`);
    let [css2, setCss2] = useState(`p {
    font-family: "main", cursive;
    font-size: 2rem;
    font-weight: bolder;
}
h2 {
    text-decoration: overline wavy pink;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
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
                <h3>
                    <Code>font</Code>
                </h3>
                CSS-властивість <Code>font</Code> є скороченням для{" "}
                <Code>
                    font-style, font-variant, font-weight, font-stretch,
                    font-size, line-height, і font-family.
                </Code>
                Крім того, дозволяє встановити системний шрифт для елементів
                інтерфейсу. <Code>font-style, font-variant</Code> і{" "}
                <Code>font-weight</Code> мають передувати <Code>font-size</Code>
                . Висота рядка має слідувати безпосередньо за розміром шрифту.{" "}
                <br />
                <Css
                    selector="p"
                    styles={[["font", `italic 1.2rem "Fira Sans", serif`]]}
                />
                <br />
                <h3>
                    <Code>font-family</Code>
                </h3>
                CSS-властивість <Code>font-family</Code> визначає пріоритетний
                список з однієї або декількох назв сімейства шрифтів та/або
                загальне ім'я шрифту для вибраного елемента.
                <br />
                <Css
                    selector="p"
                    styles={[["font-family", `Georgia, serif`]]}
                />
                Значення розділені комами, щоб вказати, що вони є
                альтернативами. Браузер вибере зі списку перший шрифт, який
                встановлений або може бути завантажений, використовуючи правило{" "}
                <Code>@font-face </Code>.
                <br />
                <Css
                    selector="@font-face"
                    styles={[
                        ["font-family", `"My custom name"`],
                        ["src", `url("/fonts/OpenSans-Regular-webfont.woff2")`],
                    ]}
                />
                Тут <Code>font-family</Code> встановлює і'мя завантаженого
                шрифту, а <Code>src</Code> встаноалює посилання на файл шрифту,
                який можна завантажити в проект або отримати з{" "}
                <Code>
                    <a href="https://fonts.google.com" target="_blank">
                        fonts.google.com
                    </a>
                </Code>
                <br />
                <br />
                <h3>
                    <Code>font-size</Code>
                </h3>
                CSS Властивість <Code>font-size</Code> визначає розмір шрифту.
                Ця властивість також використовується для обчислення розміру{" "}
                <Code>em, ex</Code> та інших відносних одиниць.
                <br />
                <Css selector="p" styles={[["font-size", `14px`]]} />
                Одиниці величин бувають такими:
                <ul>
                    <li>
                        <Code>px</Code> - Один піксель. Для пристроїв з екранів
                        зазвичай представляє одну точку.
                    </li>
                    <li>
                        <Code>cm, mm, in</Code> - Абсолютні одиниці виміру
                        становлять фізичні відстані, коли відомі фізичні
                        властивості пристрою виведення. Одна з одиниць
                        прив'язується до фізичної одиниці, проте інші до неї.
                    </li>
                    <li>
                        <Code>em</Code> - Представляє підрахований розмір
                        елемента шрифту, представляє успадкований розмір шрифту.
                        Тобто якщо батьківський елемент мав розмір шрифту{" "}
                        <Code>10px</Code>, а ви встановите розмір шрифту
                        дочірньому елементу <Code>1.5em</Code> то шрифт буде
                        розиіром в <Code>15px</Code>
                    </li>
                    <li>
                        <Code>rem</Code> - Представляє розмір шрифту кореневого
                        елемента (зазвичай <Tag utag={"html"} />) за{" "}
                        <Code>1rem</Code>. Коли використовується у властивості
                        розміру шрифту кореневого елемента, являє собою значення
                        за замовчуванням (у більшості браузерів 16px, але можна
                        встановити своє стандартне значення).
                    </li>
                    <li>
                        <Code>vh</Code> (viewport height)- відповідає 1% від
                        висоти вікна браузера
                    </li>
                    <li>
                        <Code>vw</Code> (viewport width)- відповідає 1% від
                        ширини вікна браузера
                    </li>
                    <li>
                        <Code>%</Code> (viewport width)- відповідає 1% від
                        ширини батьківського елемекнта (не працює з шрифтами 😒)
                    </li>
                </ul>
                <br />
                <h3>
                    <Code>font-weight</Code>
                </h3>
                Ця властивість жирність шрифту. Деякі шрифти доступні лише у
                нормальному або напівжирному контурі.
                <br />
                <Css selector="p" styles={[["font-weight", `bold`]]} />
                Може приймати такі значення
                <ul>
                    <li>
                        <Code>normal</Code> - звичайний шрифт
                    </li>
                    <li>
                        <Code>bold</Code> - жирний шрифт
                    </li>
                    <li>
                        <Code>lighter</Code> - надтоний шрифт
                    </li>
                    <li>
                        <Code>bolder</Code> - наджирний шрифт
                    </li>
                    <li>
                        <Code>100, 200, 300, 400, 500, 600, 700, 800, 900</Code>{" "}
                        - цифрові значення насиченості шрифтів, які дозволяють
                        задавати більше, ніж нормальний та напівжирий шрифт.
                    </li>
                </ul>
                <br />
                <h3>
                    <Code>text-align</Code>
                </h3>
                Ця властивість описує, як лінійний вміст, на кшталт тексту,
                вирівнюється у блоці його батьківського елемента.{" "}
                <Code>text-align</Code> не контролює вирівнювання елементів
                самого блоку, але лише їхній лінійний вміст, може приймати
                значення <Code>left, right</Code>, або <Code>center</Code>
                <br />
                <Css selector="p" styles={[["text-align", `center`]]} />
                <br />
                <h3>
                    <Code>text-decoration</Code>
                </h3>
                Це скорочена властивість яка визначає вигляд декоративних ліній
                у тексті. Це скорочення для{" "}
                <Code>
                    text-decoration-line, text-decoration-color,
                    text-decoration-style
                </Code>
                <br />
                <Css
                    selector="p"
                    styles={[["text-decoration", `underline dotted red`]]}
                />
                <br />
                Може приймати такі значення:
                <ul>
                    <li>
                        <Code>none, underline, overline, line-through</Code> -
                        відсутня лінія, підкреслення, надкруслення і
                        закреслення.
                    </li>
                    <li>
                        <Code>solid, double, dotted, dashed, wavy</Code> -
                        суцільна лінія, подвійна суцільна, крапками, шрихами і
                        хвильою.
                    </li>
                    <li>
                        Останній параметр колір може бути будь-яким крім
                        градієнту, вони розглянуті в попередньому уроці.
                    </li>
                </ul>
                <br />
                <h3>
                    <Code>text-shadow</Code>
                </h3>
                Ця властивість додає тіні до тексту. Він приймає список тіней,
                розділених комами, які застосовуються до тексту та будь-яких
                його прикрас. Кожна тінь описується деякою комбінацією зсувів X
                і Y від елемента, радіуса розмиття та кольору.
                <br />
                <Css
                    selector="p"
                    styles={[
                        [
                            "text-shadow",
                            `1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue`,
                        ],
                    ]}
                />
                <br />
                <h3>
                    <Code>text-transform</Code>
                </h3>
                Ця властивість визначає, як використовувати великі літери в
                тексті елемента. Його можна використовувати, щоб текст
                відображався тільки великими або малими літерами або кожне слово
                було написано з великої літери.
                <br />
                <Css selector="p" styles={[["text-transform", `capitalize`]]} />
                <br />
                Може приймати такі значення:
                <ul>
                    <li>
                        <Code>uppercase</Code> - всі буки великі.
                    </li>
                    <li>
                        <Code>lowercase</Code> - всі буки малі.
                    </li>
                    <li>
                        <Code>capitalize</Code> - Речення починається з великої
                        букви.
                    </li>
                </ul>
                <br />
            </div>
            <Hsr>
                <CodeEditor
                    value={html2}
                    language="html"
                    style={{ fontSize: "1rem" }}
                    onChange={(e) => setHtml2(e.target.value)}
                />
                <CodeEditor
                    value={css2}
                    language="css"
                    style={{ fontSize: "1rem" }}
                    onChange={(e) => setCss2(e.target.value)}
                />
                <Result
                    srcDoc={"<style>" + css2 + "</style>" + html2}
                    className="result"
                ></Result>
            </Hsr>
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
