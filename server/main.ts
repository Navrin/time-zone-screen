import handler from "serve-handler";
import http from "http";
import puppeteer from "puppeteer";
import cron from "node-cron";
// const ChromecastAPI = require("chromecast-api");
const ip = require("ip");

const IMAGE_PATH = "../build/now.png";
const makeScreenshot = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 720, height: 1280 });
    await page.goto("http://127.0.0.1:4000");
    await page.screenshot({ path: IMAGE_PATH });

    await browser.close();
};

const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response, {
        public: "../build",
    });
});

const updateScreen = (device: any) => async () => {
    await makeScreenshot();
    console.log("updating with ", `http://${ip.address()}:4000/now.png`);

    // device.play(
    //     {
    //         url: `http://${ip.address()}:4000/now.png`,
    //         contentType: "image/png",
    //         autoplay: true,
    //         playbackDuration: 60,
    //     },
    //     // `http://${ip.address()}:4000/now.png`,
    //     { autoPlay: true, repeat: true, playbackDuration: 1 },
    //     console.log
    // );
};

// const client = new ChromecastAPI();

server.listen(4000, () => {
    console.log("Running at http://localhost:4000");
    // client.on("device", function (device: any) {
    //     console.log(device);
    //     if (
    //         device.name.includes("Chromecast") &&
    //         device.friendlyName.includes("Navrin")
    //     ) {
    //         updateScreen(device)();
    //         cron.schedule("* * * * *", updateScreen(device), {});
    //     }
    // });
});
