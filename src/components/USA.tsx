import { h } from "preact";
import styled from "styled-components";
import Time from "./Time";

const USABase = styled.div`
    display: grid;
    grid-template:
        "PS MS CS ES" 350px
        "PT MT CT ET" auto / 1fr 1fr 1fr 1fr;
    width: 100%;
    gap: 10px;
    padding: 0 20px;
    margin-bottom: 30px;
`;

const MapSlice = styled.img<{ top?: number; align?: string }>`
    display: flex;
    align-self: flex-start;
    justify-self: ${(props) => props.align || "center"};
    max-height: 300px;
    margin-top: ${(props) => props.top || "0"}px;
`;
const USA = (props: {}) => {
    return (
        <USABase>
            <MapSlice
                align="flex-end"
                src={require("../assets/svg/WEST COAST.svg")}
            />
            <MapSlice top={52} src={require("../assets/svg/MOUNTAIN.svg")} />
            <MapSlice top={45} src={require("../assets/svg/CENTER.svg")} />
            <MapSlice
                align="flex-start"
                top={50}
                src={require("../assets/svg/EAST COAST.svg")}
            />
            <Time timezone="PST" align="right" />
            <Time timezone="MST" align="center" />
            <Time timezone="CST" align="center" />
            <Time timezone="EST" align="left" />
        </USABase>
    );
};

export default USA;
