import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { CssProperty } from "./Css";
import Tag from "./Tag";
import { motion } from "framer-motion";


export default function Wb1() {
    let [padding, setPadding] = useState(3);
    let [border, setBorder] = useState(2);
    let [margin, setMargin] = useState(5);
    let [html1, setHtml1] = useState(`<div>Content</div>`);
    let [css1, setCss1] = useState(`div{
    background-color: orange;
    min-width: 100px;
    max-width: 200px;
    padding: 1rem;
    margin: 0 auto;
    border: 5px dotted red;
    outline: 5px solid blue;
    box-shadow: 5px 10px 3px red;
}`);
    return (
        <Wrapper
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5 }}
        >
            <Title>9. Блочна модель</Title>
            <h2>
                <Tag utag={"div"} />
            </h2>
            <div>
                Тег <Code>div</Code> у веб-розробці - це як коробка для іграшок.
                Коли ти хочеш розмістити свої іграшки красиво і порядково, ти
                складаєш їх у коробку. Точно так само, тег div допомагає
                веб-розробникам створювати красивий вигляд сторінок у Інтернеті.
                Це як конструктор, де ти складаєш різні кольорові блоки (або
                елементи) разом, щоб зробити сторінку більш цікавою та
                організованою. Це найпоширеніший блок в веб розробці, деякі
                програмісти тільки його й використовують.
            </div>
            <h2>Блокова модель</h2>
            <div>
                Модель блоку можна керувати властивостями ширини, висоти,
                відступів зовнішніх і внутрішніх також рамки і зовнішньої лінії
                <Grid>
                    <Block>
                        <Margin val={margin}>
                            <SubText>Margin</SubText>
                            <Border val={border}>
                                <SubText>Border</SubText>
                                <Padding val={padding}>
                                    <SubText>Padding</SubText>
                                    <Content>Conntent</Content>
                                </Padding>
                            </Border>
                        </Margin>
                    </Block>
                    <div>
                        <label htmlFor="margin">Margin</label>
                        <br />
                        <input
                            type="range"
                            id="margin"
                            max={10}
                            min={1}
                            value={margin}
                            onChange={(e) => setMargin(e.target.value)}
                            step={0.1}
                        />
                        <br />
                        <br />
                        <label htmlFor="border">Border</label>
                        <br />
                        <input
                            type="range"
                            id="border"
                            max={5}
                            min={1}
                            value={border}
                            onChange={(e) => setBorder(e.target.value)}
                            step={0.1}
                        />
                        <br />
                        <br />
                        <label htmlFor="padding">Padding</label>
                        <br />
                        <input
                            type="range"
                            id="padding"
                            max={8}
                            min={1}
                            value={padding}
                            onChange={(e) => setPadding(e.target.value)}
                            step={0.1}
                        />
                        <br />
                        <br />
                    </div>
                </Grid>
            </div>
            <h2>
                <Code>Width</Code>
            </h2>
            <div>
                Ця властивість визначає ширину елемента. Це означає, наскільки
                широким буде елемент на веб-сторінці. Можна вказати ширину в
                пікселях, відсотках, або навіть в інших одиницях вимірювання,
                наприклад, у em або rem, всі вони розглянуті в попередньому
                уроці. Якщо не вказати ширину то блок буде шириною батьківського
                елементу
                <br />
                Схожим до цієї властивості є:
                <ul>
                    <li>
                        <Code>max-width</Code> - Ця властивість встановлює
                        максимальну можливу ширину елемента. Це означає, що
                        навіть якщо контент елемента або його батьківського
                        контейнера більший, ніж вказана ширина, елемент не буде
                        розтягуватися далі за встановлене значення.
                    </li>
                    <li>
                        <Code>min-width</Code> - Ця властивість встановлює
                        мінімальну ширину елемента. Якщо вміст елемента менший
                        за вказане значення, то елемент все одно матиме
                        мінімальну вказану ширину.
                    </li>
                </ul>
            </div>
            <h2>
                <Code>height</Code>
            </h2>
            <div>
                Ця властивість визначає висоту елемента. Це означає, наскільки
                високим буде елемент на веб-сторінці. Якщо не вказати висоту то
                блок буде висотою вмісту елементу
                <br />
                Схожим до цієї властивості є:
                <ul>
                    <li>
                        <Code>max-height</Code> - Ця властивість встановлює
                        максимальну можливу вимсоту елемента. Це означає, що
                        навіть якщо контент елемента або його батьківського
                        контейнера більший, ніж вказана висота, елемент не буде
                        розтягуватися далі за встановлене значення.
                    </li>
                    <li>
                        <Code>min-height</Code> - Ця властивість встановлює
                        мінімальну висоту елемента. Якщо вміст елемента менший
                        за вказане значення, то елемент все одно матиме
                        мінімальну вказану висоту.
                    </li>
                </ul>
            </div>
            <h2>
                Додаткові значення і функції для <Code>width</Code> i{" "}
                <Code>height</Code>
            </h2>
            <div>
                <ul>
                    <li>
                        <Code>fit-content(300px)</Code> - Це значення встановлює
                        ширину або висоту елемента так, щоб вона відповідала
                        його вмісту, але не перевищувала вказаного розміру.
                    </li>
                    <li>
                        <Code>max-content</Code> - Це значення встановлює
                        максимальний розмір елемента на основі його вмісту, але
                        може перевищувати розмір контейнера, якщо вміст дуже
                        великий.
                    </li>
                    <li>
                        <Code>min-content</Code> - Це значення встановлює
                        мінімальний можливий розмір елемента на основі його
                        вмісту, забезпечуючи, щоб вміст міг вміститися як
                        мінімум у вказаний контейнер.
                    </li>
                    <li>
                        <Code>auto</Code> - Це значення дозволяє браузеру
                        самостійно вирішити розмір елемента в залежності від
                        контексту. Для ширини (width) воно часто дозволяє
                        елементам розтягуватися на всю доступну ширину
                        батьківського контейнера.
                    </li>
                    <li>
                        <Code>inherit</Code> - Це значення успадковує розмір
                        елемента від його батьківського елемента.
                    </li>
                </ul>
            </div>
            <h2>
                <Code>margin</Code>
            </h2>
            <div>
                це простір між межею елемента та його сусідами на сторінці. Вона
                дозволяє встановлювати відступи з усіх сторін (верх, праворуч,
                низ, ліворуч) елемента.
                <ul>
                    <li>
                        <CssProperty Key={"margin"} value={"10px"} /> -
                        встановить зовнішній відступ з всіх боків на 10 пікселів
                    </li>
                    <li>
                        <CssProperty Key={"margin"} value={"10px 5px"} /> -
                        встановить зовнішній відступ з гори та низу на 10
                        пікселів а з боків на 5 пікселів
                    </li>
                    <li>
                        <CssProperty Key={"margin"} value={"10px 5px 15px"} /> -
                        встановить зовнішній відступ з гори на 10 пікселів а з
                        боків на 5 пікселів а знизу 15 пікселів
                    </li>
                    <li>
                        <CssProperty
                            Key={"margin"}
                            value={"10px 5px 15px 20px"}
                        />{" "}
                        - встановить зовнішній відступ з гори на 10 пікселів
                        зправа 5, внизу 15, а зліва 20 пікселів (за часовою
                        стрілкою)
                    </li>
                    <li>
                        <CssProperty Key={"margin"} value={"0 auto"} /> -
                        розташує елемент горизонтально по середині відносно
                        батьківського елемента. <Code>auto</Code> самостійно
                        розраховує відступ щоб він був з обох боків однаковим.
                    </li>
                </ul>
            </div>
            <h2>
                <Code>padding</Code>
            </h2>
            <div>
                Це простір між межею елемента та його вмістом. Вона дозволяє
                встановлювати відступи з усіх сторін (верх, праворуч, низ,
                ліворуч) елемента від вмісту самого елемета (разом з фоном).
                <ul>
                    <li>
                        <CssProperty Key={"padding"} value={"10px"} /> -
                        встановить внутрішній відступ з всіх боків на 10
                        пікселів
                    </li>
                    <li>
                        <CssProperty Key={"padding"} value={"10px 5px"} /> -
                        встановить внутрішній відступ з гори та низу на 10
                        пікселів а з боків на 5 пікселів
                    </li>
                    <li>
                        <CssProperty Key={"padding"} value={"10px 5px 15px"} />{" "}
                        - встановить внутрішній відступ з гори на 10 пікселів а
                        з боків на 5 пікселів а знизу 15 пікселів
                    </li>
                    <li>
                        <CssProperty
                            Key={"padding"}
                            value={"10px 5px 15px 20px"}
                        />{" "}
                        - встановить внутрішній відступ з гори на 10 пікселів
                        зправа 5, внизу 15, а зліва 20 пікселів (за часовою
                        стрілкою)
                    </li>
                </ul>
            </div>
            <h2>
                <Code>border</Code>
            </h2>
            <div>
                Це лінія або рамка навколо контуру елемента, вона встановлює
                товщину, тип та колір межі.
                <ul>
                    <li>
                        Перший параметр відповідає за товщину рамки, може окремо
                        бути налаштований за допомогою <Code>border-width</Code>
                    </li>
                    <li>
                        Другий параметр відповідає стиль лінії, може бути
                        <ul>
                            <li>
                                <Code>solid</Code>
                            </li>
                            <li>
                                <Code>dotted</Code>
                            </li>
                            <li>
                                <Code>dashed</Code>
                            </li>
                            <li>
                                <Code>double</Code>
                            </li>
                            <li>
                                <Code>groove</Code>
                            </li>
                        </ul>
                        може окремо бути налаштований за допомогою{" "}
                        <Code>border-style</Code>
                    </li>
                    <li>
                        Третій параметр відповідає колір лінії, може окремо бути
                        налаштований за допомогою <Code>border-color</Code>
                    </li>
                </ul>
            </div>
            <h2>
                <Code>border-radius</Code>
            </h2>
            <div>
                Ця властивість встановлює заокруглення кутків блоку, отримує
                радіус заокруглення
                <ul>
                    <li>
                        <CssProperty Key={"border-radius"} value={"5px"} /> -
                        заокруглить кутки на 5 пікселів
                    </li>
                    <li>
                        <CssProperty Key={"border-radius"} value={"50%"} /> -
                        зробить з блоку еліпс
                    </li>
                    <li>
                        <CssProperty
                            Key={"border-radius"}
                            value={"5000000000000px"}
                        />{" "}
                        - зробить круглі боки в блоку
                    </li>
                </ul>
            </div>
            <h2>
                <Code>outline</Code>
            </h2>
            <div>
                Це лінія, яка малюється навколо зовнішнього контуру елемента,
                але не впливає на розміри елемента. Вона часто використовується
                для підкреслення або виділення елемента. налаштовується як і{" "}
                <Code>border</Code>
                <CssProperty Key={"outline"} value={"2px dashed #00F"} />
            </div>
            <h2>
                <Code>box-shadow</Code>
            </h2>
            <div>
                Це властивість, яка дозволяє додавати тінь до області контенту
                блокових елементів. Це потужний інструмент для створення
                візуальних ефектів та підвищення глибини або виділення елементів
                на сторінці. <br />
                <CssProperty
                    Key={"box-shadow"}
                    value={
                        "горизонтальний_зсув вертикальний_зсув розм'якшення розмазування колір"
                    }
                />{" "}
                <br />
                <CssProperty
                    Key={"box-shadow"}
                    value={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
                />{" "}
                <br />
                Якщо потрібно щоб тінь падала в середину блока першим параметром
                ставиться <Code>inset</Code>
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
        </Wrapper>
    );
}

let Wrapper = styled(motion.div)`
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

let Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
`;
let Block = styled.div`
    width: 50vw;
    height: 50vw;
    margin: 0 auto;
    background-color: white;
    display: grid;
    place-items: center;
    position: relative;
`;
let Margin = styled.div`
    padding: ${(p) => p.val}vw;
    width: fit-content;
    background-color: #c1ff07;
    position: relative;
`;
let Border = styled.div`
    padding: ${(p) => p.val}vw;
    background-color: black;
    position: relative;
`;
let Padding = styled.div`
    padding: ${(p) => p.val}vw;
    background-color: orange;
    position: relative;
`;
let Content = styled.div`
    background-color: #f9c76c;
    position: relative;
`;

let SubText = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    color: red;
    z-index: 1;
    line-height: 0.9rem;
`;
