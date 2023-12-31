import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "./Tag";

export default function Wb1() {
    let [code1, setCode1] = useState(
        `<img src="https://cataas.com/cat?width=100">`
    );
    let [code2, setCode2] = useState(`<img src="" alt="тут мав бути кіт">`);
    let [code3, setCode3] = useState(
        `<img src="https://cataas.com/cat" width="100" height="100">`
    );
    let [code4, setCode4] = useState(
        `<img src="https://cataas.com/cat?width=100" title="так це кіт">`
    );
    let [img1, setImg1] = useState(100);
    let [img2, setImg2] = useState(100);
    return (
        <Wrapper>
            <Title>3. Списки</Title>
            <Start>
                <img src="/images/simpsom.gif" alt="web structure" />
                <p>
                    Елемент <Tag utag={"img"} pair={false} /> у HTML
                    використовується для вставки зображень на веб-сторінки. Це
                    один з основних тегів для відображення графічного вмісту.
                </p>
            </Start>
            <h2>
                Атрибути <Tag utag={"img"} pair={false} />
            </h2>
            <div>
                <h3>
                    <Code>src</Code>
                </h3>
                Цей атрибут вказує шлях до зображення (URL або шлях на сервері),
                яке потрібно відобразити. Він є обов'язковим.
                <Cr>
                    <CodeEditor
                        value={code1}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode1(e.target.value)}
                    />
                    <Result srcDoc={code1}></Result>
                </Cr>
                <h3>
                    <Code>alt</Code>
                </h3>
                Це альтернативний текст, який відображається у випадку, якщо
                зображення не може бути завантажене або якщо користувач
                використовує програми, які не підтримують зображення.
                <Cr>
                    <CodeEditor
                        value={code2}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode2(e.target.value)}
                    />
                    <Result srcDoc={code2}></Result>
                </Cr>
                <h3>
                    <Code>width</Code> i <Code>height</Code>
                </h3>
                Ці атрибути вказують ширину і висоту зображення в пікселях
                відповідно. Вони не є обов'язковими, але допомагають браузеру
                правильно відображати сторінку, навіть поки зображення
                завантажується.
                <Cr>
                    <CodeEditor
                        value={code3}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode3(e.target.value)}
                    />
                    <Result srcDoc={code3}></Result>
                </Cr>
                <h3>
                    <Code>title</Code>
                </h3>
                Цей атрибут відображає текстову підказку при наведенні курсора
                на зображення. Це не те ж саме, що і <Code>alt</Code>, але
                допомагає користувачеві отримати додаткову інформацію про
                зображення.
                <Cr>
                    <CodeEditor
                        value={code4}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode4(e.target.value)}
                    />
                    <Result srcDoc={code4}></Result>
                </Cr>
                <h3>
                    <Code>loading</Code>
                </h3>
                Цей новий атрибут визначає, яким чином браузер має завантажувати
                зображення. Наприклад, <Code>loading="lazy"</Code> робить
                завантаження зображення лінивим, що дозволяє прискорити
                завантаження сторінки. <br />
                <br />
            </div>
            <h2>Формати зображень</h2>
            <div>
                <p>
                    <Code>Векторні </Code>і <Code>растрові</Code> зображення —
                    це два основні типи графічних форматів, які використовуються
                    для представлення графічної інформації, але вони
                    використовують різні підходи до збереження та відображення
                    графічних даних.
                </p>
                <h3>Растрові зображення:</h3>
                <ul>
                    <li>
                        <Code>Формати:</Code> Найпоширеніші формати растрових
                        зображень включають JPEG, PNG, GIF, BMP, TIFF тощо.
                    </li>
                    <li>
                        <Code>Характеристики:</Code>Растрові зображення
                        складаються з мережі пікселів, де кожен піксель має свій
                        колір і розташування. Роздільна здатність (ширина x
                        висота) визначає якість зображення.
                    </li>
                    <li>
                        <Code>Властивості:</Code> Їх використовують для
                        фотографій, сканованих зображень, оскільки дозволяють
                        зберігати багато деталей та кольорів.
                    </li>
                    <li>
                        <Code>Масштабування:</Code> Растрові зображення можуть
                        втрачати якість при збільшенні, оскільки роздільна
                        здатність визначається кількістю пікселів.
                    </li>
                </ul>
                <h3>Векторні зображення:</h3>
                <ul>
                    <li>
                        <Code>Формати:</Code> Найпоширеніші формати векторних
                        зображень — SVG, AI, EPS, PDF.
                    </li>
                    <li>
                        <Code>Характеристики: </Code>Вони описуються математично
                        за допомогою формул та координат, а не пікселів.
                        Елементи таких зображень (лінії, криві, фігури)
                        описуються у вигляді векторів.
                    </li>
                    <li>
                        <Code>Властивості:</Code> Їх використовують для
                        логотипів, іконок, складних графіків, оскільки можуть
                        масштабуватись без втрати якості.
                    </li>
                    <li>
                        <Code>Масштабування:</Code> Векторні зображення можна
                        збільшувати без втрати чіткості, оскільки вони
                        зберігають формули та координати. Обираючи між
                        растровими та векторними форматами, важливо враховувати
                        тип графіки та його призначення.
                    </li>
                </ul>
                <p>
                    Растрові зображення надають деталізацію для фотографій та
                    сканованих зображень, тоді як векторні зображення корисні
                    для створення масштабованих графіків та іконок.
                </p>
                <Images>
                    <div>
                        <h3>Растрове</h3>
                        <img
                            src="/images/cat.jpg"
                            alt="cat"
                            style={{ width: img1 + "px" }}
                        />
                        <br />
                        <input
                            type="range"
                            min={100}
                            max={400}
                            value={img1}
                            onChange={(e) => setImg1(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3>Векторне</h3>
                        <img
                            src="/images/cat.svg"
                            alt="cat"
                            style={{ width: img2 + "px" }}
                        />
                        <br />
                        <input
                            type="range"
                            min={100}
                            max={400}
                            value={img2}
                            onChange={(e) => setImg2(e.target.value)}
                        />
                    </div>
                </Images>
                Тут явно помітно як спотворюється растрове зображення при
                збільшенні його розміру
            </div>
        </Wrapper>
    );
}

let Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

let Images = styled.div`
    display: flex;
    gap: 2rem;
    & div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        height: 500px;
        border: 1px dashed ${(p) => p.theme.primary200};
        padding: 0.5rem;
    }
    & input {
        accent-color: ${(p) => p.theme.primary200};
        width: 80%;
    }
`;
