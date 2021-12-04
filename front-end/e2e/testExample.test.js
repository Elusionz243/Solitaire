const puppeteer = require("puppeteer");
const fs = require("fs");
const fsPromises = fs.promises;

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

const onPageConsole = (msg) => 
  Promise.all(msg.args().map((event) => event.jsonValue())).then((eventJson) =>
    console.log(`<LOG::page console ${msg.type()}>`, ...eventJson)
  );

describe("Main Test Name, example -> US-01 Return a list from the API", () => {

  let page;
  let browser;

  beforeAll(async () => {
    await fsPromises.mkdir("./.screenshots", { recursive: true });
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    page.on("console", onPageConsole);
    await page.setViewPort({ width: 1920, height: 1080 });
    await page.goto(`${baseUrl}/<route>`, {waitUntil: "load"});
  });

  afterAll(async () => {
    await browser.close();
  });

  describe("Test Sub-Title", () => {

    test("Test Title", async () => {

    });

  });

});
