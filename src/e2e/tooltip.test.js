import puppeteer from 'puppeteer';

describe('start', () => {
  let browser;
  let page;

  jest.setTimeout(30000);

  beforeAll(async () => {
    // открыть браузер
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    // просим браузер открыть новую страницу
    page = await browser.newPage();
  });

  // тесты
  test('page test', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('body');
  });

  test('popover', async () => {
    await page.goto('http://localhost:8080');
    const popover = await page.$('.btn');
    await popover.click();
    await page.waitForSelector('.tooltip-wrapper');
  }, 30000);

  // закрыть браузер
  afterAll(async () => {
    await browser.close();
  });
});
