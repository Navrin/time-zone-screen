import { h } from "preact";
import styled from "styled-components";
import moment from "moment-timezone/moment-timezone";

const TimeBase = styled.div<{ align: string }>`
    display: flex;
    flex-direction: column;

    text-align: ${(props) => props.align};
    color: ${(props) => props.theme.white};
`;

const TimeName = styled.h4`
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 300;
`;
const TimeDisplay = styled.h3`
    padding: 0;
    margin: -10px 0px;
    font-size: 3rem;
    font-weight: 500;
`;
const Time12Hour = styled.h5`
    padding: 0;
    margin: 5px 0px -5px 0px;
    font-size: 1.5rem;
    font-weight: 200;
`;
const TimeDay = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 100;
`;

const TZ_NAMES = {
    MST: "Mnt.",
    PST: "Pacific",
    CST: "Central",
    EST: "Eastern",
    HST: "Hawaii",
    GMT: "UK",
    NZDT: "NZ",
};
const TZ_MAP: { [K in keyof typeof TZ_NAMES]: string } = {
    MST: "America/Denver",
    PST: "America/Los_Angeles",
    CST: "America/Chicago",
    EST: "America/New_York",
    HST: "Pacific/Honolulu",
    GMT: "Europe/London",
    NZDT: "Pacific/Auckland",
};
export type TZ_KEYS = keyof typeof TZ_NAMES;

const Time = (props: {
    timezone: TZ_KEYS;
    align: "right" | "left" | "center";
}) => {
    moment.locale("en-au");
    const time = moment.tz(moment(), TZ_MAP[props.timezone]);
    const display = time.format("HH:mm");
    const hourTime = time.format("hh:mm a");
    const day = time.format("dddd");

    return (
        <TimeBase align={props.align}>
            <TimeName>{TZ_NAMES[props.timezone]}</TimeName>
            <TimeDisplay>{display}</TimeDisplay>
            <Time12Hour>{hourTime}</Time12Hour>
            <TimeDay>{day}</TimeDay>
        </TimeBase>
    );
};

export default Time;
