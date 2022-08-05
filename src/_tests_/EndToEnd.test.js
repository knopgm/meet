import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms
    //   ignoreDefaultArgs: ["--disable-extensions"], // ignores default setting that causes timeout errors
    // });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .btn-showDetails");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeDefined();
  });

  test("User cancollapse an event to hide its details", async () => {
    await page.click(".event .btn-hideDetails");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });
});

describe("Filter events by city", () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    // browser = await puppeteer.launch();
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100, // slow down by 250ms
      ignoreDefaultArgs: ["--disable-extensions"], // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("Show upcoming events from all cities by default", async () => {
    const eventlist = await page.$("li.event");
    expect(eventlist).toBeDefined();
  });

  test("User search for a city", async () => {
    const keywordInput = await page.waitForSelector("input.city");
    await keywordInput.click();
    await page.keyboard.type("Berlin");

    const suggestions = await page.$$(".suggestions li");
    expect(suggestions).toHaveLength(2);

    const resultHandle = await page.evaluateHandle(
      (suggestionItem) => suggestionItem.innerText,
      suggestions[0]
    );

    expect(await resultHandle.jsonValue()).toBe("Berlin, Germany");
  });

  test("User can select a city from the suggested list", async () => {
    // It apears that the typed input from the last test is valid to this one too
    // So it is not necessary to ask puppeteer to type it again:

    // const keywordInput = await page.waitForSelector("input.city");
    // await keywordInput.click();
    // await page.keyboard.type("Berlin");

    const suggestions = await page.$$(".suggestions li");
    expect(suggestions).toHaveLength(2);
    await suggestions[0].click();

    const suggestionLocation = await page.$(".location");
    const suggestionLocationResult = await page.evaluateHandle(
      (suggestionItem) => suggestionItem.innerText,
      suggestionLocation
    );

    expect(await suggestionLocationResult.jsonValue()).toBe("Berlin, Germany");
  });
});
