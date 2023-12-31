import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "./Tag";

export default function Wb1() {
    let [code1, setCode1] = useState(`<ul>
    <li>Перший пункт</li>
    <li>Другий пункт</li>
    <li>Третій пункт</li>
</ul>
`);
    let [code2, setCode2] = useState(`<ol>
    <li>Перший пункт</li>
    <li>Другий пункт</li>
    <li>Третій пункт</li>
</ol>
`);
    let [code3, setCode3] = useState(`<dl>
    <dt>HTML</dt>
    <dd>Мова розмітки для створення веб-сторінок</dd>
    <dt>CSS</dt>
    <dd>Мова стилізації для оформлення веб-сторінок</dd>
</dl>`);
    let [code4, setCode4] = useState(`<ul>
    <li>Перший пункт</li>
    <li>Другий пункт
        <ul>
            <li>Підпункт 1</li>
            <li>Підпункт 2</li>
        </ul>
    </li>
    <li>Третій пункт</li>
</ul>
`);
    let [code5, setCode5] = useState(`
<p>Попередній текст</p>
<hr>
<p>Після лінії</p>
`);
    let [code6, setCode6] = useState(`<p>Перший рядок<br>Другий рядок</p>`);
    return (
        <Wrapper>
            <Title>3. Списки</Title>
            <Start>
                <img src="/images/list.gif" alt="web structure" />
                <p>
                    Списки в HTML — це спосіб організувати і відображати
                    інформацію у вигляді переліку. Є кілька типів списків. Існує
                    3 типи списків <Tag utag={"ul"} />, <Tag utag={"ol"} />,{" "}
                    <Tag utag={"td"} />. Нижче розглянемо детальніше кожен з
                    них.
                </p>
            </Start>
            <h2>
                Список <Tag utag={"ul"} />
            </h2>
            <div>
                Маркований список <Tag utag={"ul"} /> (unordered list)у HTML є
                одним з основних способів створення списку, де кожен пункт не
                має порядкового номеру, а представлений маркером, який зазвичай
                є крапкою, коло чи іншим символом. <br />
                <Cr>
                    <CodeEditor
                        value={code1}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode1(e.target.value)}
                    />
                    <Result srcDoc={code1}></Result>
                </Cr>
                Елементами списку є тег <Tag utag={"li"} /> (list item). Також{" "}
                <Tag utag={"ul"} /> має не обов'язковий атрибут{" "}
                <Code>type</Code> який визначає яким буде його маркер:
                <ul type="disc">
                    <li>
                        {" "}
                        - <Tag utag={"ul"} attrs={`type="disc"`} /> (стандартне
                        значення)
                    </li>
                </ul>
                <ul type="circle">
                    <li>
                        {" "}
                        - <Tag utag={"ul"} attrs={`type="circle"`} />
                    </li>
                </ul>
                <ul type="square">
                    <li>
                        {" "}
                        - <Tag utag={"ul"} attrs={`type="square"`} />
                    </li>
                </ul>
                <ul type="none">
                    <li>
                        {" "}
                        - <Tag utag={"ul"} attrs={`type="none"`} /> (маркер
                        відсутній)
                    </li>
                </ul>
                <br />
            </div>
            <h2>
                Список <Tag utag={"ol"} />
            </h2>
            <div>
                Нумерований список <Tag utag={"ol"} /> (ordered list) у HTML є
                одним з основних способів створення списку, де кожен пункт має
                порядковий номер.
                <br />
                <Cr>
                    <CodeEditor
                        value={code2}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode2(e.target.value)}
                    />
                    <Result srcDoc={code2}></Result>
                </Cr>
                Тег <Tag utag={"ol"} /> має такі не обов'язкові атрибути: <br />
                - <Code>type</Code> визначає яким буде маркер:
                <ol type="1">
                    <li>
                        {" "}
                        - <Tag utag={"ol"} attrs={`type="1"`} /> (стандартне
                        значення) звичайні цифри
                    </li>
                </ol>
                <ol type="i">
                    <li>
                        {" "}
                        - <Tag utag={"ol"} attrs={`type="i"`} /> римські малі
                    </li>
                </ol>
                <ol type="I">
                    <li>
                        {" "}
                        - <Tag utag={"ol"} attrs={`type="I"`} /> римські великі
                    </li>
                </ol>
                <ol type="a">
                    <li>
                        {" "}
                        - <Tag utag={"ol"} attrs={`type="a"`} /> англійський
                        алфаівт, малі букви
                    </li>
                </ol>
                <ol type="A">
                    <li>
                        {" "}
                        - <Tag utag={"ol"} attrs={`type="A"`} /> англійський
                        алфаівт, великі букви
                    </li>
                </ol>
                <br />- <Code>start</Code> визначає з якого номеру почнеться
                нумерація: <br />
                <Tag utag={"ol"} attrs={`start="3"`}>
                    <ol start={3}>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ol>
                </Tag>
                <br />- <Code>reversed</Code> оберне нумерацію в звортньому
                порядку не змінюючи порядок елементів: <br />
                <Tag utag={"ol"} attrs={`reversed`}>
                    <ol reversed>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ol>
                </Tag>
                <br />
            </div>
            <h2>
                Список визначень <Tag utag={"tl"} />
            </h2>
            <div>
                Елемент <Tag utag={"tl"} /> у HTML використовується для
                створення списку з описом (description list), де кожен елемент
                містить термін (ключ або назва) та його опис (значення). Це
                дозволяє структурувати інформацію у вигляді пар ключ-значення.
                <br />
                <Cr>
                    <CodeEditor
                        value={code3}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode3(e.target.value)}
                    />
                    <Result srcDoc={code3}></Result>
                </Cr>
                <ul>
                    <li>
                        <Tag utag={"dt"} /> (термін): Цей тег використовується
                        для визначення терміну або ключового слова у списку з
                        описом (
                        <Tag utag={"dl"} /> ). Він зазвичай йде перед елементом{" "}
                        <Tag utag={"dd"} /> .
                    </li>
                    <li>
                        <Tag utag={"dd"} /> (опис): Цей тег використовується для
                        визначення опису або значення, що відповідає терміну у
                        списку з описом (<Tag utag={"dl"} /> ).
                    </li>
                </ul>
            </div>
            <h2>Вкладення списків</h2>
            <div>
                Будь який список можна вбудувати в інший список і вони матимуть
                такий вигляд:
                <Cr>
                    <CodeEditor
                        value={code4}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode4(e.target.value)}
                    />
                    <Result srcDoc={code4}></Result>
                </Cr>
            </div>
            <h2>
                Додаткові теги <Tag utag={"hr"} pair={false} /> і{" "}
                <Tag utag={"br"} pair={false} />
            </h2>
            <div>
                <Tag utag={"hr"} pair={false} /> (або "горизонтальна лінія")
                створює горизонтальну розділову лінію на веб-сторінці. Вона
                використовується для логічного розділення різних частин вмісту,
                наприклад, для виділення розділів у статті, або для розділення
                різних секцій веб-сторінки.
                <Tag utag={"hr"} pair={false} /> може мати атрибути, такі як{" "}
                <Code>color</Code>, <Code>size</Code> або <Code>width</Code>,
                які використовуються для зміни кольору, розміру та ширини лінії
                відповідно.
                <Cr>
                    <CodeEditor
                        value={code5}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode5(e.target.value)}
                    />
                    <Result srcDoc={code5}></Result>
                </Cr>
                <Tag utag={"br"} pair={false} /> (або "розрив рядка")
                використовується для створення переносу тексту на новий рядок
                всередині блока тексту. Цей тег не має закриваючого тегу,
                оскільки він є пустим елементом. Використовується для вставки
                переносу рядка всередині абзаців, заголовків або будь-якого
                іншого блоку тексту.
                <Cr>
                    <CodeEditor
                        value={code6}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode6(e.target.value)}
                    />
                    <Result srcDoc={code6}></Result>
                </Cr>
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
