import React from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "./Tag";

export default function Wb1() {
    return (
        <Wrapper>
            <Title>2. Гіперпосилання</Title>
            <Start>
                <img src="/images/giphy.gif" alt="web structure" />
                <p>
                    Тег <Tag utag={"a"} attrs={`href=""`} /> у HTML - це
                    особливий тег, який допомагає створювати посилання на інші
                    веб-сторінки. Він допомагає зробити слова або картинки на
                    веб-сторінці клікабельними, тобто, коли на них натискають,
                    то можна перейти на іншу сторінку в Інтернеті. Так, як у
                    книжці можна перейти з однієї сторінки на іншу за допомогою
                    зазначеного номеру сторінки. Його назва означає "anchor" (як
                    якір), бо він дозволяє "прикріплювати" посилання до різних
                    елементів на веб-сторінці. Так само, як якір закріплює щось
                    у воді, тег дозволяє "прикріплювати" посилання до тексту,
                    зображень або інших елементів, щоб можна було переходити з
                    одного місця на веб-сторінці до іншого або на інші
                    веб-сторінки.
                </p>
            </Start>
            <h2>
                Атрибут <Code>href</Code>
            </h2>
            <div>
                Атрибут <Code>href</Code> (hypertext reference) використовується
                в тезі <Tag utag={"a"} /> в HTML для вказання адреси, на яку
                потрібно перейти, коли користувач клікає на посилання. Цей
                атрибут вказує браузеру, куди потрібно перенаправити
                користувача. Наприклад, якщо ви хочете створити посилання на
                іншу веб-сторінку, ви вказуєте URL цієї сторінки в атрибуті
                href. Він може виглядати приблизно так:
                <CodeEditor
                    value={`<a href="https://www.example.com">Текст посилання</a>`}
                    language="html"
                    style={{ fontSize: "1rem" }}
                />
                У цьому прикладі <Code>"https://www.example.com"</Code> - це
                адреса сторінки, на яку ви хочете перейти, і текст всередині
                тегу <Tag utag={"a"} /> ("Текст посилання") буде відображено як
                клікабельне посилання на цю сторінку.
            </div>
            <h2>
                Атрибут <Code>target</Code>
            </h2>
            <div>
                Атрибут target використовується для вказання, де потрібно
                відкривати посилання після кліку користувача. Наприклад, основні
                значення атрибуту target: <br />
                <ol>
                    <li>
                        <Code>_blank</Code>: Це значення відкриває посилання в
                        новому вікні чи в новій вкладці браузера.
                        <CodeEditor
                            value={`<a href="https://www.example.com" target="_blank">Текст посилання</a>`}
                            language="html"
                            style={{ fontSize: "1rem" }}
                        />
                    </li>
                    <li>
                        <Code>_self</Code>: Це значення вказує відкрити
                        посилання в поточному вікні або вкладці (це значення за
                        замовчуванням, тому його можна опускати).
                        <CodeEditor
                            value={`<a href="https://www.example.com" target="_self">Текст посилання</a>`}
                            language="html"
                            style={{ fontSize: "1rem" }}
                        />
                    </li>
                    <li>
                        <Code>_parent</Code>: Це значення використовується, коли
                        ви хочете, щоб посилання відкривалося в батьківському
                        фреймі (якщо сторінка має фрейми).
                        <CodeEditor
                            value={`<a href="https://www.example.com" target="_parent">Текст посилання</a>`}
                            language="html"
                            style={{ fontSize: "1rem" }}
                        />
                    </li>
                    <li>
                        <Code>_top</Code>: Це значення використовується, коли
                        вам потрібно відкрити посилання в найвищому рівні
                        поточного вікна.
                        <CodeEditor
                            value={`<a href="https://www.example.com" target="_top">Текст посилання</a>`}
                            language="html"
                            style={{ fontSize: "1rem" }}
                        />
                    </li>
                </ol>
            </div>
            <h2>Внутрішні, зовнішні, ID-якоря</h2>
            <ul>
                <li>
                    <Tag utag={"a"} attrs={`href="http://example.com"`} /> - Це
                    посилання на інші веб-сторінки чи джерела, які знаходяться
                    на іншій веб сторінці, якщо посилання починаєьбся з
                    протоколів <Code>http://</Code> або <Code>http://</Code> то
                    сторінка шукатиметься в інтернеті а не в папці проекту.
                </li>
                <li>
                    <Tag utag={"a"} attrs={`href="index.html"`} /> - Це
                    посилання на інші веб-сторінки чи джерела, які знаходяться
                    на данному компютері чи сервері. Якщо файл знаходиться в папці з цим файлом то просто пишеться просто назва, якщо в папці є ще одна папка а в ній вже файл то посилання пишеться так <Tag utag={"a"} attrs={`href="folder/index.html"`} />. Якщо файл знаходиться в папці яка знаходиться на одну папку раніше потрібно додати <Code>../</Code>, наприклад так <Tag utag={"a"} attrs={`href="../index.html"`} />
                </li>
                <li>
                    <Tag utag={"a"} attrs={`#text"`} /> - Це якір який посилається на тег який знаходиться на сторінці і має атрибут <Code>id</Code>, наприклад якір: <Tag utag={"h2"} attrs={`id="anchor"`}>Якийсь заголовок</Tag> і посилання на нього <Tag utag={"a"} attrs={`href="#anchor"`}>посилання на заголовок</Tag>, можна навіть якір на іншу сторінку і певний тег ось так <Tag utag={"a"} attrs={`href="about.html#anchor"`}></Tag>
                </li>
            </ul>
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
