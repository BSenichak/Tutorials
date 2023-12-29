import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../themes";
import { useDispatch, useSelector } from "react-redux";
import { addComment, firstLoadComments, loadPage } from "../../store/Comments";
import { FaComment } from "react-icons/fa";

export default function StartPage() {
    const [render, setRender] = useState(true);
    const d = useDispatch();
    const pages = useSelector((store) => store.comments.pages);
    const comments = useSelector((store) => store.comments.comments);
    const status = useSelector((store) => store.comments.loading);
    const [page, setPage] = useState(0);
    const [author, setAuthor] = useState("");
    const [commentText, setCommentText] = useState("");
    if (render) {
        d(firstLoadComments());
        setRender(false);
    }
    let pageElements = [];
    for (let i = 1; i <= pages; i++) {
        pageElements.push(
            <PageBtn
                className={page == i ? "active" : ""}
                key={i}
                onClick={() => {
                    d(loadPage(i - 1));
                    setPage(i);
                }}
            >
                {i}
            </PageBtn>
        );
    }

    const addNewComment = () => {
        if (author && commentText) {
            d(addComment({ author, commentText }));
            d(firstLoadComments());
        }
    };
    return (
        <Wrapper>
            <Poster>
                <Img src="images/web_programing.png" alt="poster" />
                <Text>
                    <h1>
                        Ця сторінка є допоміжним проєктом для напрямку Web в
                        ROBOCODE
                    </h1>
                    <p>
                        В даному проекті я хочу візуалізувати уроки на прикладах
                        по всіх уроках і всіх курсах для спрощення пояснення
                        матеріалу. Це проєкт не претендує на авторські права
                        ніяких компаній і не є методичкою для професійних веб
                        розробників. Це просто пет-проект який я розробляю від
                        нудьги 😊 (Я знаю що на фоткі криво написаний текст, ШІ
                        не дружить з буквами)
                    </p>
                </Text>
            </Poster>
            <Curses>
                <Curse
                    to={"/beginer"}
                    style={{
                        background:
                            "linear-gradient(to right, blue, rgb(119, 119, 248))",
                    }}
                >
                    <Letter>B</Letter>
                    <div>Web Beginner</div>
                </Curse>
                <Curse
                    to={"/junior"}
                    style={{
                        background:
                            "linear-gradient(to right, yellow, rgb(245, 245, 117)",
                    }}
                >
                    <Letter>J</Letter>
                    <div>Web Junior</div>
                </Curse>
                <Curse
                    to={"/middle"}
                    style={{
                        background:
                            "linear-gradient(to right, red, rgb(247, 111, 111))",
                    }}
                >
                    <Letter>M</Letter>
                    <div>Web Middle</div>
                </Curse>
            </Curses>
            <div>
                <h2>Коментарі</h2>
                <CommentList>
                    {status == "idle" ? (
                        comments.map((el) => {
                            return (
                                <Post key={el.id}>
                                    <Author>
                                        <span>{el.author}</span>
                                        <span>{el.data}</span>
                                    </Author>
                                    <div>{el.text}</div>
                                </Post>
                            );
                        })
                    ) : (
                        <>
                            <Post className="sceleton"></Post>
                            <Post className="sceleton"></Post>
                            <Post className="sceleton"></Post>
                        </>
                    )}
                    <Pages>
                        <PageBtn
                            className={page == 1 ? "disactive" : ""}
                            onClick={() => {
                                if (page > 1) {
                                    setPage(page - 1);
                                    d(loadPage(page - 2));
                                }
                            }}
                        >
                            Previous
                        </PageBtn>
                        {pageElements}
                        <PageBtn
                            className={page == pages ? "disactive" : ""}
                            onClick={() => {
                                if (page < pages) {
                                    setPage(page + 1);
                                    d(loadPage(page));
                                }
                            }}
                        >
                            Next
                        </PageBtn>
                    </Pages>
                </CommentList>
                <Form>
                    <Input
                        type="text"
                        placeholder="Назвись хто ти..."
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <Textarea
                        placeholder="Напиши щось погане про автора..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></Textarea>
                    <Button
                        onClick={() => {
                            setAuthor("");
                            setCommentText("");
                            addNewComment();
                        }}
                    >
                        <FaComment />
                        Залишити коментар
                    </Button>
                </Form>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const Poster = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 1rem;
    @media ${device.mobileL} {
        flex-direction: column;
    }
`;

const Img = styled.img`
    height: 50vh;
    object-fit: cover;
    border-radius: 1rem;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 2rem;
`;
const Letter = styled.div`
    font-size: 20vh;
    line-height: 9rem;
    transition: all 0.5s;
`;

const Curses = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @media ${device.mobileL} {
        flex-direction: column;
        padding: 0 1rem;
    }
`;

const Curse = styled(Link)`
    margin-top: 2rem;
    flex-grow: 1;
    height: 30vh;
    background-color: ${(p) => p.theme.bg300};
    border-radius: 1rem;
    padding: 1rem;
    text-decoration: none;
    text-align: center;
    font-size: 1.5rem;
    color: ${(p) => p.theme.text100};
    text-shadow: 0 0 10px ${(p) => p.theme.bg300}55;
    &:hover ${Letter} {
        transform: rotate(-10deg);
    }
    @media ${device.mobileL} {
        padding: 2rem 0;
        height: auto;
    }
`;

const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: all 0.3s;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(p) => p.theme.bg300};
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    @keyframes skeleton-loading {
        100% {
            background-position: -100% 0;
        }
    }
    &.sceleton {
        height: 4.3rem;
        background-image: linear-gradient(
            to right,
            ${(p) => p.theme.bg300} 50%,
            ${(p) => p.theme.bg200} 55%,
            ${(p) => p.theme.bg300} 60%
        );
        background-size: 200%;
        background-position: 100% 0;
        animation: skeleton-loading 1s linear infinite;
    }
`;

const Author = styled.div`
    display: flex;
    justify-content: space-between;
    & span:first-child {
        font-family: "title", sans-serif;
        font-weight: 900;
        font-size: 1.2rem;
    }
`;

const Pages = styled.div`
    display: flex;
    gap: 0.3rem;
    justify-content: flex-end;
    margin: 1rem 0;
`;

const PageBtn = styled.div`
    padding: 0.3rem 1rem;
    background-color: ${(p) => p.theme.primary200};
    border-radius: 0.3rem;
    cursor: pointer;
    &.active {
        background-color: ${(p) => p.theme.primary100};
    }
    &.disactive {
        background-color: ${(p) => p.theme.primary100};
        cursor: not-allowed;
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

const Input = styled.input`
    background-color: ${(p) => p.theme.bg200};
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    resize: none;
    color: ${(p) => p.theme.text100};
    &:focus {
        outline: none;
        caret-color: ${(p) => p.theme.text100};
    }
`;

const Textarea = styled.textarea`
    background-color: ${(p) => p.theme.bg200};
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    resize: none;
    color: ${(p) => p.theme.text100};
    &:focus {
        outline: none;
        caret-color: ${(p) => p.theme.text100};
    }
`;

const Button = styled.button`
    background-color: ${(p) => p.theme.primary100};
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    color: ${(p) => p.theme.text100};
    width: fit-content;
    align-self: flex-end;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
