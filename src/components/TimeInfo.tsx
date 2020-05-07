import { h } from "preact";
import styled from "styled-components";
import Time, { TZ_KEYS } from "./Time";

const TimeCardBase = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const TimeCardImage = styled.img`
    height: auto;
    width: auto;
    margin-right: 30px;
`;

const TimeCard = (props: { timezone: TZ_KEYS; src: string }) => {
    return (
        <TimeCardBase>
            <TimeCardImage src={props.src} />
            <Time align="left" timezone={props.timezone} />
        </TimeCardBase>
    );
};

export default TimeCard;
