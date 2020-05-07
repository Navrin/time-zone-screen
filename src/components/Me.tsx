import { h } from "preact";
import styled from "styled-components";
import moment from "moment-timezone/moment-timezone";
const MeInfoBase = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;

    text-align: center;
    font-family: "sofia-pro";
    margin-top: 50px;
    color: ${(props) => props.theme.white};
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 300;
`;

//
const betweenRange = (n1: number, val: number, n2: number) =>
    Math.min(n1, n2) <= val && val < Math.max(n1, n2);

const hourInfo = (hour: number): string => {
    if (betweenRange(0, hour, 1)) return "It's getting late.";
    if (betweenRange(1, hour, 3)) return "It's rather late, you should sleep.";
    if (betweenRange(3, hour, 5)) return ":(";
    if (betweenRange(5, hour, 7)) return "Good early morning!";
    if (betweenRange(7, hour, 10)) return "Good morning.";
    if (betweenRange(10, hour, 13)) return "Hello.";
    if (betweenRange(13, hour, 15)) return "Have you had lunch yet?";
    if (betweenRange(15, hour, 18)) return "Good afternoon.";
    if (betweenRange(18, hour, 23)) return ":)";
    if (betweenRange(23, hour, 24)) return "Don't forget melatonin.";
    return "You fucked up some code :P";
};

const MeInfo = (props: {}) => {
    const now = moment();
    const day = now.format("dddd");

    const moth = hourInfo(now.hours());

    return (
        <MeInfoBase>
            It's {day} for you. <br />
            {moth}
        </MeInfoBase>
    );
};

export default MeInfo;
