import React from "react";
import styled from "styled-components";

const Tag = ({ tag, utag, pair = true, attrs, children, ...props }) => {
    const Tag = tag || "span";
    return (
        <Tag {...props}>
            {pair ? (
                <>
                    <Wrapper>
                        &lt;{tag || utag}
                        {attrs ? " " : ""}
                        <Attr>{attrs}</Attr>&gt;
                    </Wrapper>
                    {children}
                    <Wrapper>&lt;/{tag || utag}&gt;</Wrapper>
                </>
            ) : (
                <Wrapper>
                    &lt;{tag || utag} <Attr>{attrs}</Attr>/&gt;
                </Wrapper>
            )}
        </Tag>
    );
};

export default styled(Tag)`
    padding: 0;
    margin: 0;
`;

const Wrapper = styled.span`
    color: #7fff2e;
`;

const Attr = styled.span`
    color: #85c7ff;
`;
