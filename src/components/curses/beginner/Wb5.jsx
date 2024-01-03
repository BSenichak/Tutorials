import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "./Tag";
import { motion } from "framer-motion";

export default function Wb1() {
    let [code1, setCode1] = useState(
        `<table border="1"> 
        <caption>Заголовок таблиці</caption>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
        </tr>
        <tr>
          <td>Комірка 1</td>
          <td>Комірка 2</td>
        </tr>
        <tr>
          <td>Комірка 3</td>
          <td>Комірка 4</td>
        </tr>
      </table>
      `
    );
    let [code2, setCode2] = useState(
        `<table border="1"> 
        <caption>Заголовок таблиці</caption>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
          <th>Заголовок 3</th>
        </tr>
        <tr>
          <td>Комірка 1</td>
          <td rowspan="2" colspan="2">Комірка 2</td>
        </tr>
        <tr>
          <td>Комірка 3</td>
        </tr>
      </table>
      `
    );
    let [code3, setCode3] = useState(
        `<table border="1"> 
        <caption>Заголовок таблиці</caption>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
        </tr>
        <tr>
          <td width="200">Комірка 1</td>
          <td height="50">Комірка 2</td>
        </tr>
        <tr>
          <td>Комірка 3</td>
          <td>Комірка 4</td>
        </tr>
      </table>
      `
    );
    return (
        <Wrapper
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5 }}
        >
            <Title>5. Таблиці</Title>
            <Start>
                <img src="/images/table.gif" alt="web structure" />
                <p>
                    Тег <Tag utag={"table"} /> в HTML використовується для
                    створення таблиць на веб-сторінках. Таблиці використовуються
                    для представлення даних у вигляді сітки. Вони можуть бути
                    корисними для відображення розкладів, списків з даними, або
                    будь-якої іншої інформації, яка потребує організації у
                    вигляді рядків і стовпців. Раніше таблиці використовувались
                    для структури сторінок через їхню здатність організовувати
                    контент у вигляді рядків і стовпців. Коли HTML створювався,
                    таблиці були єдиною можливістю створення складної структури
                    на веб-сторінках. Люди використовували таблиці для
                    розміщення не тільки табличних даних, але й для вирівнювання
                    різних елементів на сторінці.
                </p>
            </Start>
            <h2>Раніше корисний інструмент, зараз рудимент</h2>
            <div>
                За допомогою таблиць можна було:
                <ul>
                    <li>
                        Створювати макети сторінок: В таблицях рядки і стовпці
                        дозволяли вирівнювати блоки контенту на сторінці.
                        Елементи розміщувалися у різних комірках таблиці, що
                        дозволяло створювати складні макети.
                    </li>
                    <li>
                        Керувати відступами та розмірами: Таблиці дозволяли
                        контролювати відступи, ширину та висоту елементів на
                        сторінці.
                    </li>
                </ul>
                Однак використання таблиць для макетів сторінок стало
                проблематичним через наступні причини:
                <ul>
                    <li>
                        Семантична правильність: Таблиці мають семантику
                        таблиць, тобто вони призначені для відображення
                        табличних даних. Використання таблиць для структури
                        сторінок може порушити семантичність HTML, особливо коли
                        це не має відношення до табличних даних.
                    </li>
                    <li>
                        Адаптивність: Таблиці не завжди легко адаптувати для
                        різних розмірів екранів. Вони можуть викликати проблеми
                        з респонсивністю сторінок на мобільних пристроях.
                    </li>
                </ul>
                З часом були розроблені більш сучасні методи верстки, такі як
                використання CSS-фреймворків, гнучких контейнерів та
                грід-систем, що спрощують створення макетів сторінок та
                забезпечують кращу семантику і адаптивність без використання
                таблиць.
            </div>
            <h2>Структура таблиці</h2>
            <div>
                Таблиця починається з тегу <Tag utag={"table"} /> який має
                необовязковий атрибут <Code>boder</Code>, який встановлює
                товщину рамки в пікселях. Таблицю будується з рядків{" "}
                <Tag utag={"tr"} /> (table row), в яких знаходяться{" "}
                <Tag utag={"td"} /> (table data), а якщо потрібно заголовок
                стовпчика використовується тег <Tag utag={"th"} />. Заголовок
                таблиці встановлюється тегом <Tag utag={"caption"} />
                <Cr>
                    <CodeEditor
                        value={code1}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode1(e.target.value)}
                    />
                    <Result srcDoc={code1}></Result>
                </Cr>
            </div>
            <h2>Об'єднання рядків і колонок</h2>
            Інколи потрібно обєднати між собою кілька рядків або колонок. Для
            потрібно до тегу клітинки додати атрибути:
            <ul>
                <li>
                    <Code>rowspan</Code> - встановлює скільки клітинка займатиме
                    колонок <Tag utag={"td"} attrs={`rowspan="2"`} />
                </li>
                <li>
                    <Code>colspan</Code> - встановлює скільки клітинка займатиме
                    рядків <Tag utag={"td"} attrs={`colspan="2"`} />
                </li>
                <li>
                    <Code>colspan</Code> і <Code>rowspan</Code> можна
                    використовувати разом
                    <Tag utag={"td"} attrs={`colspan="2" rowspan="2"`} />
                </li>
            </ul>
            <Cr>
                <CodeEditor
                    value={code2}
                    language="html"
                    style={{ fontSize: "1rem" }}
                    onChange={(e) => setCode2(e.target.value)}
                />
                <Result srcDoc={code2}></Result>
            </Cr>
            <h2>Ширина і висота колонок і рядків</h2>
            <div>
                <ul>
                    <li>
                        Ширина колонок встановлюється додаванням до однієї
                        клітинки в колонці атрибуту <Code>width</Code>{" "}
                        (адаптується до найширої клітинки){" "}
                        <Tag utag={"td"} attrs={`width="100"`} />
                    </li>
                    <li>
                        Висота рядків встановлюється додаванням до однієї
                        клітинки в рядку атрибуту <Code>height</Code>{" "}
                        (адаптується до найвищої клітинки){" "}
                        <Tag utag={"td"} attrs={`height="50"`} />
                    </li>
                </ul>
                <Cr>
                    <CodeEditor
                        value={code3}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode3(e.target.value)}
                    />
                    <Result srcDoc={code3}></Result>
                </Cr>
            </div>
        </Wrapper>
    );
}

let Wrapper = styled(motion.div)`
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
