import React from "react";
import styled from "styled-components";

export function Css({
    selector = "div",
    styles = [["display", "flex"]],
    ...props
}) {
    return (
        <Wrapper>
            <Selector>{selector}</Selector> {"{"}
            {styles.map((s) => (
                <Row key={s[0]}>
                    <Property>{s[0]}</Property>: <Value>{s[1]}</Value>;
                </Row>
            ))}
            {"}"}
        </Wrapper>
    );
}
export function CssProperty({ Key, value, ...props }) {
    return (
        <OneRow>
            <Property>{Key}</Property>: <Value>{value}</Value>;
        </OneRow>
    );
}

let Wrapper = styled.div``;

let Row = styled.div`
    margin-left: 1.5rem;
`;
let OneRow = styled.span`
    margin: 0 0.5rem;
`;

let Selector = styled.span`
    color: orange;
`;

let Property = styled.span`
    color: #a8d9ff;
`;
let Value = styled.span`
    color: #ffbea5;
`;
