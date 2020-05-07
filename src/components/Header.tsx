import { h } from "preact";
import styled from "styled-components";

const HeaderBase = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 20px 40px;
    color: ${(props) => props.theme.white};
`;

const HeaderTitle = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
`;
const HeaderSubtitle = styled.h3`
    margin: 0;
    font-size: 2rem;
    font-weight: 100;
`;

const Header = (props: { title: string; subtitle: string }) => {
    return (
        <HeaderBase>
            <HeaderTitle>{props.title}</HeaderTitle>
            <HeaderSubtitle>{props.subtitle}</HeaderSubtitle>
        </HeaderBase>
    );
};

export default Header;
