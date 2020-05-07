import { h } from "preact";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
const Helmet = require("preact-helmet");
import "moment/locale/en-au";
import moment from "moment-timezone/moment-timezone";
moment.tz.add(require("moment-timezone/data/packed/latest.json")["zones"]);
import { useState, useEffect } from "preact/hooks";
import Header from "./Header";
import Time from "./Time";
import USA from "./USA";
import TimeCard from "./TimeInfo";
import MeInfo from "./Me";
import cron from "node-cron";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const GlobalStyle = createGlobalStyle`
  body, html {
      margin: 0;
  }

  p,h1,h2,h3,h4,h5,h6 {
      font-family: 'sofia-pro';
  }

  * {
      box-sizing: border-box;
  }
`;

const AppBase = styled.div`
    margin: 0;
    width: 720px;
    height: 1280px;
    background: #221625;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DividerBase = styled.div`
    margin: 30px 0px;
    color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const DividerLine = styled.span`
    border-top: 1px dashed ${(props) => props.theme.white};
    flex-grow: 1;
    height: 1px;
`;
const DividerText = styled.span`
    font-family: "sofia-pro";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 200;
    width: 250px;
    padding: 0px 50px;
    align-self: center;
    text-align: center;
`;
const Divider = () => (
    <DividerBase>
        <DividerLine /> <DividerText>int. date line</DividerText>{" "}
        <DividerLine />
    </DividerBase>
);

const Row = styled.div`
    display: flex;
    flex-direction: row;
    & > div {
        margin: 0 20px;
    }
`;

const App = () => {
    const [id, setId] = useState("none");
    const cb = useEffect(() => {
        cron.schedule(
            "* * * * *",
            () => {
                setId((Math.random() * 20).toString());
            },
            {}
        );
    });

    return (
        <ThemeProvider
            theme={{
                white: "rgba(255, 255, 255, 0.65)",
            }}
        >
            <Helmet
                link={[
                    {
                        rel: "stylesheet",
                        href: "https://use.typekit.net/qgw3deq.css",
                    },
                ]}
            />
            <GlobalStyle />
            <AppBase id="#main">
                <Header
                    title="United States of America"
                    subtitle="(Behind date line)"
                />
                <USA />
                <TimeCard
                    timezone="HST"
                    src={require("../assets/svg/US-HI.svg")}
                />
                <Divider />
                <Row>
                    <TimeCard
                        timezone="GMT"
                        src={require("../assets/svg/North_south_UK.svg")}
                    />
                    <TimeCard
                        timezone="NZDT"
                        src={require("../assets/svg/nz.svg")}
                    />
                </Row>
                <MeInfo />
            </AppBase>
        </ThemeProvider>
    );
};

export default App;
