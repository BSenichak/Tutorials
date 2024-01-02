import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "./Tag";
import { Css, CssProperty } from "./Css";

export default function Wb1() {
    let [code1, setCode1] = useState(
        `h1 {
            color: red;
            font-family: cursive;
        }
      `
    );
    let [code2, setCode2] = useState(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>Цей текст змінився</h1>
        </body>
        </html>
      `
    );
    return (
        <Wrapper>
            <Title>7. CSS: Вступ, селектори</Title>
            <Start>
                <img src="/images/css.gif" alt="web structure" />
                <div>
                    CSS це як чарівна палітра для веб-сторінок! Воно дозволяє
                    змінювати вигляд і відчуття веб-сторінок, роблячи їх
                    кольоровими, цікавими та привабливими. Ось кілька простих
                    речей про CSS:
                    <ul>
                        <li>
                            Кольори: CSS дозволяє встановлювати кольори для
                            тексту, фону, рамок і багато чого іншого. Можна
                            вибрати будь-який колір за допомогою назви кольору
                            або числового значення (наприклад, #FF0000 для
                            червоного).
                        </li>
                        <li>
                            Розміри і відступи: Ти можеш змінювати розміри
                            елементів, збільшуючи або зменшуючи їх ширину і
                            висоту. Також можна додавати відступи для
                            розташування елементів у бажаному місці.
                        </li>
                        <li>
                            Шрифти і розташування тексту: CSS дозволяє змінювати
                            стиль шрифту, його розмір та розташування. Ти можеш
                            робити текст жирним, курсивним або навіть змінювати
                            його колір.
                        </li>
                        <li>
                            Анімації і переходи: Це як магія! Ти можеш
                            створювати анімації, які роблять елементи
                            веб-сторінки рухливими та привабливими. Переходи
                            дозволяють елементам плавно змінювати свій вигляд
                            при наведенні миші або інших подіях.
                        </li>
                        <li>
                            Гнучкість і адаптивність: CSS допомагає сторінці
                            виглядати добре на будь-яких пристроях, від
                            комп'ютера до телефона. Це дозволяє створювати
                            адаптивні дизайни, які підлаштовуються під різні
                            розміри екранів.
                        </li>
                    </ul>
                    CSS - це як чарівна формула для творення красивих
                    веб-сторінок. Так що, якщо ти хочеш змінити колір, зробити
                    текст більшим чи додати трохи анімації на своїй сторінці,
                    CSS тобі у цьому допоможе!
                </div>
            </Start>
            <h2>Способи підключення CSS</h2>
            <div>
                <h3>
                    Атрибут <Code>style</Code>
                </h3>
                Спосіб налаштування окремого елемента на сторінці відбувається
                за допомогою атрибуту <Code>style</Code>, цей метод рідко
                використовується бо він засмічує html документ і є два інших,
                більш зручних методи.
                <br />
                <br />
                <Tag tag={"h1"} attrs={`style="color: red;"`}>
                    <span style={{ color: "red" }}>
                        тут я змінив колір на червоний
                    </span>
                </Tag>
                <h3>
                    Тег <Tag utag={"style"} />
                </h3>
                Спосіб налаштування стилю сторінки в html документ відбувається
                за допомогою тегу <Tag utag={"style"} />, який можна розмістити
                буть-де в html документі (але рекоментую в <Tag utag={"head"} />
                ), цей метод також рідко використовується бо він засмічує html
                документ бо зазвичай стилів дуже багато і документ стає дуже
                великим.
                <br />
                <br />
                <Tag utag={"head"}>
                    <WrapTag>
                        <Tag utag={"style"}>
                            <Css
                                selector="h1"
                                styles={[
                                    ["color", "red"],
                                    ["text-decoretion", "underline"],
                                ]}
                            />
                        </Tag>
                    </WrapTag>
                </Tag>
                <Tag tag={"h1"}>
                    <span style={{ color: "red", textDecoration: "underline" }}>
                        тут я змінив колір на червоний і підкреслив
                    </span>
                </Tag>
                <h3>Зовнішні таблиці стилів</h3>
                Спосіб налаштування стилю зовнішнім файлом є найліпшим варіантом
                для великого проекту і відбувається за допомогою тегу{" "}
                <Tag utag={"link"} attrs={`href="style.css rel="stylesheet"`} />
                , який варто розмістити в <Tag utag={"head"} />, в цьому випалку
                в папку з проектом створюється ще один файл з довільною назвою
                та з форматом <Code>.css</Code>.
                <br />
                <br />
                <Tag utag={"head"}>
                    <WrapTag>
                        <Tag
                            utag={"link"}
                            attrs={`href="style.css rel="stylesheet"`}
                        />
                    </WrapTag>
                </Tag>
                <br />
                <br />
                <Hsr>
                    <CodeEditor
                        value={code2}
                        language="html"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode2(e.target.value)}
                    />
                    <CodeEditor
                        value={code1}
                        language="css"
                        style={{ fontSize: "1rem" }}
                        onChange={(e) => setCode1(e.target.value)}
                    />
                    <Result
                        srcDoc={code2.replace(
                            `<link rel="stylesheet" href="style.css">`,
                            `<style>${code1}</style>`
                        )}
                        className="result"
                    ></Result>
                </Hsr>
            </div>
            <h2>Синтаксис CSS</h2>
            <div>
                Головними елементами є селектор, властивість і значення.
                <Css
                    selector="селектор"
                    styles={[["властивість", "значення"]]}
                />
                <ul>
                    <li>
                        Селектори (Selectors): Це частина правила, яка вибирає
                        HTML елементи, які ви хочете стилізувати. Наприклад, h1,
                        .class, #id, *.
                    </li>
                    <li>
                        Властивості (Properties): Це атрибути, які визначають
                        вигляд обраних елементів. Наприклад, color, font-size,
                        background.
                    </li>
                    <li>
                        Значення (Values): Це конкретні параметри, які
                        присвоюються властивостям. Наприклад, red, 14px,
                        #FFFFFF.
                    </li>
                </ul>
                Набір стилів для конкретного елемента виділяється фігурними
                дужками. Властивості і їх значення розділяються двокрапкою, а ця
                пара має завершуватися крапкою з комою.
            </div>
            <h2>Селектори</h2>
            <div>
                Селектори це ключі, за якими браузер розуміє якому елементу на
                сторінці застосувати стилі, вони застосовуються до всіх
                елементів які знайде. Якщо написати кілька однакових селекторів
                в результаті буде застосований стиль який написаний останнім.
                <h3>Cелектор назви тегу</h3>
                <div>
                    <Css selector="p" styles={[["color", "red"]]} />
                    Змінить колір всіх параграфів на червоний
                </div>
                <br />
                <h3>Cелектор класу</h3>
                <div>
                    <Css selector=".paragraph" styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут{" "}
                    <Code>class</Code> з значенням <Code>paragraph</Code> на
                    червоний. <br /> (найпоширеніший метод)
                    <Tag utag={"p"} attrs={`class="paragraph"`} /> <br />
                    Класів може бути в елемента кілька їх потрібно записувати
                    через пробіл. <br />
                    <Tag
                        utag={"p"}
                        attrs={`class="paragraph main title"`}
                    />{" "}
                    <br />
                </div>
                <br />
                <h3>Cелектор ідентифікатора</h3>
                <div>
                    <Css selector="#title" styles={[["color", "red"]]} />
                    Змінить колір елемента який має атрибут <Code>id</Code> з
                    значенням <Code>title</Code> на червоний (<Code>id</Code> з
                    таким значенням можу бути тільки в одного елемента на
                    сторінці) <br />
                    <Tag utag={"h1"} attrs={`class="paragraph"`} /> <br />
                </div>
                <br />
                <h3>Cелектор нащадків</h3>
                <div>
                    <Css selector="h1 a" styles={[["color", "red"]]} />
                    Змінить колір всіх поситлань в середині <Tag utag={"h1"} />
                    <br />
                    <Tag utag={"h1"}>
                        <WrapTag>
                            <Tag utag={"span"}>
                                <WrapTag>
                                    <Tag utag={"a"} />
                                </WrapTag>
                            </Tag>
                        </WrapTag>
                    </Tag>
                    <br />
                </div>
                <br />
                <h3>Cелектор дочірніх елементів</h3>
                <div>
                    <Css selector="h1 > a" styles={[["color", "red"]]} />
                    Змінить колір елемента який має атрибут <Tag
                        utag={"a"}
                    />{" "}
                    який знаходиться саме в середині <Tag utag={"h1"} />
                    <br />
                    <Tag utag={"h1"}>
                        <WrapTag>
                            <Tag utag={"a"} />
                        </WrapTag>
                    </Tag>
                    <br />
                </div>
                <br />
                <h3>Групування селекторів</h3>
                <div>
                    <Css selector="h1, p, a" styles={[["color", "red"]]} />
                    Змінить колір всіх перерахованих через кому елементів
                    <br />
                </div>
                <br />
                <h3>Селектор наступного елемента</h3>
                <div>
                    <Css selector="h1 + a" styles={[["color", "red"]]} />
                    Змінить колір <Tag utag={"a"} /> який знаходиться наступним
                    після <Tag utag={"h1"} />
                    <br />
                </div>
                <br />
                <h3>Селектор всіх наступних елементів</h3>
                <div>
                    <Css selector="h1 ~ a" styles={[["color", "red"]]} />
                    Змінить колір всіх <Tag utag={"a"} /> які знаходиться після{" "}
                    <Tag utag={"h1"} />
                    <br />
                    <Tag utag={"h1"} /> <br />
                    <Tag utag={"a"} /> <br />
                    <Tag utag={"a"} /> <br />
                    <Tag utag={"a"} /> <br />
                </div>
                <br />
                <h3>Селектор атрибутів</h3>
                <div>
                    <Css selector="[class]" styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут <Code>class</Code>
                    <Css selector={`[href="https://www.example.com"]`} styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут <Code>href</Code> з значенням <Code>https://www.example.com</Code>
                    <Css selector={`[src^="images/"]`} styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут <Code>src</Code> з значенням яке починається з <Code>images/</Code>
                    <Css selector={`[src$=".jpg"]`} styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут <Code>src</Code> з значенням яке закінчується на <Code>.jpg</Code>
                    <Css selector={`[src*="logo"]`} styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут <Code>src</Code> з значенням яке містить частину <Code>logo</Code>
                    <Css selector={`[lang="en" i]`} styles={[["color", "red"]]} />
                    Змінить колір всіх елементів які мають атрибут <Code>lang</Code> з значенням <Code>en</Code> або <Code>EN</Code> або <Code>En</Code>
                </div>
            </div>
            <h2>Плевдокласи</h2>
            <div>
                Comming soon...
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
