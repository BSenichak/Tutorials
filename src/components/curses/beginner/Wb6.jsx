import React, { useState } from "react";
import styled from "styled-components";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "./Tag";
import { motion } from "framer-motion";

export default function Wb1() {
    let [code1, setCode1] = useState(
        `<form action="">
        <h1>Реєстрація</h1>
        <label for="firstName">Ім'я</label><br>
        <input type="text" placeholder="ім'я..." name="firstName" id="firstName"><br>
        <label for="secondName">Фамілія</label><br>
        <input type="text" placeholder="Фамілія..."  name="secondName" id="firstName"><br>
        <label for="dob">Дата народження</label><br>
        <input type="date" name="dob" id="dob"><br>
        <h3>Стать</h3>
        <input type="radio" name="sex" id="sexM">
        <label for="sexM">Чоловіча</label><br>
        <input type="radio" name="sex" id="sexW">
        <label for="sexW">Жіноча</label><br>
        <h3>Про себе</h3>
        <textarea placeholder="Про себе..."  name="about" id="about"></textarea><br>
        <input type="reset">
        <input type="submit">
</form>
      `
    );
    let [code2, setCode2] = useState(
        `<form action="">
<h1>Випадаючий список</h1>
<select>
    <optgroup label="European Cars">
        <option value="volvo">Volvo</option>
        <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
    </optgroup>
        <optgroup label="American Cars">
        <option value="ford">Ford</option>
        <option value="chevrolet">Chevrolet</option>
        <option value="dodge">Dodge</option>
    </optgroup>
</select>
<h1>Скрол список</h1>
<select size="2">
    <option value="volvo">Volvo</option>
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
</select>
</form>
      `
    );
    let [code3, setCode3] = useState(
        `<form action="">
    <input list="options" name="cars">
    <datalist id="options">
        <option value="Volvo">
        <option value="BMW">
        <option value="Audi">
        <option value="Ford">
        <option value="Chevrolet">
    </datalist>        
</form>
      `
    );
    return (
        <Wrapper
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5 }}
        >
            <Title>6. Форми</Title>
            <Start>
                <img src="/images/form.gif" alt="web structure" />
                <p>
                    Форма в HTML - це спосіб, яким користувачі можуть
                    взаємодіяти з веб-сторінками, надсилаючи дані на сервер для
                    обробки. Форма на веб-сторінці - це як аркуш паперу, де є
                    місце для тебе, щоб написати своє ім'я, вік або навіть
                    намалювати малюнок. Та форма в Інтернеті працює схоже,
                    тільки ти заповнюєш ці поля не олівцем, а вводиш текст або
                    вибираєш опції на екрані. <br />
                    Форми - це спосіб спілкування з веб-сторінками, який
                    дозволяє тобі відправляти дані та отримувати результати з
                    Інтернету.
                </p>
            </Start>
            <h2>
                <Tag utag={"form"} attrs={`action=""`} /> обгортка форми
            </h2>
            <div>
                Тег форми обгортає елементи взаємодії клієнта з сервером і може
                містити поля для введення інформації і кнопки для відправки
                форми за допомогою атрибуту <Code>action</Code>. В середину тегу
                форми не можнв вписувати ще одну форму.
            </div>
            <h2>
                <Tag utag={"input"} pair={false} /> Головний елемент форми
            </h2>
            <div>
                Тег <Tag utag={"input"} pair={false} /> має обов'язковий атрибут
                <Code>type</Code>, від значення якого залежить який буде вид
                форми:
                <Inputs>
                    <Tag utag={"input"} pair={false} attrs={`type="text"`} />
                    <input type="text" />
                    <span>
                        Звичайне поле тексту (можна
                        <Code>type</Code> не встановлювати)
                    </span>
                    <Tag
                        utag={"input"}
                        pair={false}
                        attrs={`type="password"`}
                    />
                    <input type="password" value={"sdfsdfsdf"} />{" "}
                    <span>Поле для паролю</span>
                    <Tag utag={"input"} pair={false} attrs={`type="email"`} />
                    <input type="email" value={"example@example.com"} />
                    <span>Поле для електроної пошти</span>
                    <Tag utag={"input"} pair={false} attrs={`type="date"`} />
                    <input type="date" />
                    <span>Поле для дати</span>
                    <Tag
                        utag={"input"}
                        pair={false}
                        attrs={`type="datetime-local"`}
                    />
                    <input type="datetime-local" />
                    <span>Поле для дати і часу</span>
                    <Tag utag={"input"} pair={false} attrs={`type="time"`} />
                    <input type="time" />
                    <span>Поле для часу</span>
                    <Tag utag={"input"} pair={false} attrs={`type="week"`} />
                    <input type="week" />
                    <span>Поле для тижня</span>
                    <Tag utag={"input"} pair={false} attrs={`type="number"`} />
                    <input type="number" value={10} />
                    <span>Поле для чисел</span>
                    <Tag utag={"input"} pair={false} attrs={`type="tel"`} />
                    <input type="tel" value={"09595793636"} />
                    <span>Поле для номеру телефону</span>
                    <Tag utag={"input"} pair={false} attrs={`type="url"`} />
                    <input type="url" value={"http://google.com"} />
                    <span>Поле для посилання</span>
                    <Tag utag={"input"} pair={false} attrs={`type="search"`} />
                    <input type="search" value={"як створити форму"} />
                    <span>Поле для пошукових запитів</span>
                    <Tag utag={"input"} pair={false} attrs={`type="color"`} />
                    <input type="color" value={"#f40f0f"} />
                    <span>Поле для вибору кольлору</span>
                    <Tag
                        utag={"input"}
                        pair={false}
                        attrs={`type="range" min="10" max="100"`}
                    />
                    <input type="range" min="10" max="100" />
                    <span>Поле для додавання повзунка</span>
                    <Tag
                        utag={"input"}
                        pair={false}
                        attrs={`type="checkbox" id="something"`}
                    />
                    <span>
                        <input type="checkbox" id="something" />
                        <label htmlFor="something">chek box</label>
                    </span>
                    <span>Поле для клітинки з прапорцем</span>
                    <Tag
                        utag={"input"}
                        pair={false}
                        attrs={`type="radio" name="something" id="radio"`}
                    />
                    <span>
                        <input type="radio" name="something" id="radio1" />
                        <label htmlFor="radio1">radio 1</label>
                        <br />
                        <input type="radio" name="something" id="radio2" />
                        <label htmlFor="radio2">radio 2</label>
                    </span>
                    <span>
                        Поле для оберання одного з варіантів, обовязково мають
                        мати однакове значення в атрибуту <Code>name</Code>
                    </span>
                    <Tag utag={"input"} pair={false} attrs={`type="file"`} />
                    <span>
                        <input type="file" />
                    </span>
                    <span>Поле для завантаження файлу</span>
                    <Tag
                        utag={"input"}
                        pair={false}
                        attrs={`type="button" value="клікай"`}
                    />
                    <span>
                        <input type="button" value={"клікай"} />
                    </span>
                    <span>Кнопка без функціоналу</span>
                    <Tag utag={"input"} pair={false} attrs={`type="reset"`} />
                    <span>
                        <input type="reset" />
                    </span>
                    <span>Кнопка скидання полів форми до стандартних</span>
                    <Tag utag={"input"} pair={false} attrs={`type="submit"`} />
                    <span>
                        <input type="submit" />
                    </span>
                    <span>Кнопка відправлення форми</span>
                </Inputs>
                <br />
                <h3>Атрибути</h3>
                <ul>
                    <li>
                        <Code>value</Code> - встановлює стандартне значення в
                        полі форми
                    </li>
                    <li>
                        <Code>placeholder</Code> - встановлює текст підказку
                        який зникає коли користувач починає вводити інформацію
                    </li>
                    <li>
                        <Code>name</Code> - для розпізнавання формою полів
                    </li>
                    <li>
                        <Code>disable</Code> - Вимикає можливість взаємодії з
                        елементом введення, роблячи його недоступним для
                        введення даних.
                    </li>
                    <li>
                        <Code>required</Code> - Вказує, що це поле обов'язкове
                        для заповнення перед відправленням форми.
                    </li>
                    <li>
                        <Code>readonly</Code> - Робить елемент введення
                        доступним для перегляду, але не для зміни.
                    </li>
                    <li>
                        <Code>multiple</Code> - Дозволяє вибрати кілька файлів
                        для елемента введення типу <Code>file</Code>.
                    </li>
                    <li>
                        <Code>min, max, step</Code> - Встановлюють мінімальне
                        значення, максимальне значення та крок зміни для
                        елементів введення числа.
                    </li>
                </ul>
                <h3>
                    Підказки до елементів:{" "}
                    <Tag utag={"label"} attrs={`htmlFor="idOfElement"`} />
                </h3>
                <div>
                    Елемент <Tag utag={"label"} /> у HTML використовується для
                    створення підпису для елементів вводу. Він дозволяє
                    пов'язати текстовий опис з конкретним елементом форми, таким
                    як поле введення або перемикач. <br />
                    Використання <Tag utag={"label"} /> дозволяє зв'язати
                    текстовий опис з певним елементом вводу за допомогою
                    атрибута <Code>for</Code> і <Code>id</Code>. <br />
                    <br />
                    <Tag utag={"label"} attrs={`htmlFor="elem"`}>
                        Ім'я
                    </Tag>{" "}
                    <br />
                    <Tag utag={"input"} attrs={`id="elem"`} pair={false} />
                    <br />
                    <br />
                    Використання <Tag utag={"label"} /> поліпшує доступність
                    веб-сторінок для користувачів, особливо для людей з
                    обмеженими можливостями. Вони можуть краще розуміти, який
                    елемент вводу відповідає текстовому опису, що поліпшує їхній
                    користувацький досвід.
                </div>
                <h2>
                    <Tag utag={"textarea"} /> - багаторядкове введення
                    інформації
                </h2>
                <div>
                    Мультістроковий ввід: <Tag utag={"textarea"} /> створює
                    область для введення тексту, яка дозволяє користувачеві
                    вводити декілька рядків тексту. <br />
                    Атрибути <Code>rows</Code> та <Code>cols</Code> вказують
                    кількість видимих рядків та стовпців текстової області
                    відповідно. Вони визначають початковий розмір області вводу.
                    <br />
                    Текст, що знаходиться між тегами <Tag utag={"textarea"} />,
                    вважається значенням за замовчуванням. Це може бути
                    використано для початкового вмісту текстового поля. <br />
                    Використання його особливо корисне, коли вам потрібно
                    збирати від користувачів більший обсяг текстової інформації
                    або коли необхідно вводити вільний текст без обмежень по
                    кількості символів.
                </div>
                <h2>
                    <Tag utag={"select"} />, <Tag utag={"option"} />
                </h2>
                <div>
                    Тег <Tag utag={"select"} /> у HTML використовується для
                    створення розкривного списку, де користувач може обирати
                    один або кілька варіантів з доступних опцій. Ось деякі
                    важливі речі про тег <Tag utag={"select"} />:
                    <ul>
                        <li>
                            Варіанти вибору: Елемент <Tag utag={"select"} />{" "}
                            містить один або більше елементів{" "}
                            <Tag utag={"option"} />, які представляють собою
                            окремі варіанти вибору у списку.
                        </li>
                        <li>
                            Атрибут <Code>multiple</Code>: Якщо ви хочете, щоб
                            користувач міг обирати кілька варіантів одночасно,
                            ви можете встановити атрибут <Code>multiple</Code>
                        </li>
                        <li>
                            Групування опцій: Тег <Tag utag={"optgroup"} /> може
                            використовуватися для групування варіантів вибору у
                            відповідні категорії в <Tag utag={"select"} />
                        </li>
                        <li>
                            Атрибут <Code>size</Code>: перетворить випадаючий
                            список на скрол спиок з кількома видимими варіантами
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
                </div>
                <h2>
                    Підказки до <Tag utag={"input"} pair={false} />
                </h2>
                <div>
                    Для створення списку підказок до поля введення можна
                    використовувати елемент <Tag utag={"datalist"} />. Ось
                    приклад:
                    <Cr>
                        <CodeEditor
                            value={code3}
                            language="html"
                            style={{ fontSize: "1rem" }}
                            onChange={(e) => setCode3(e.target.value)}
                        />
                        <Result srcDoc={code3}></Result>
                    </Cr>
                    У цьому прикладі <Tag utag={"input"} pair={false} /> має
                    атрибут list зі значенням, яке відповідає id елемента{" "}
                    <Tag utag={"datalist"} />. Коли користувач починає вводити
                    текст у поле введення, відображається випадаючий список із
                    варіантами, які ви вказали у <Tag utag={"datalist"} />.
                    Користувач може обрати один із варіантів зі списку або
                    продовжити вводити власний текст. Це корисний спосіб
                    надавати користувачеві варіанти для швидкого вибору,
                    використовуючи вже існуючі опції, які ви надаєте.
                </div>
                <h2>Загальний вигляд форми</h2>
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

let Inputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 0.5rem 1rem;
    align-items: center;
`;
