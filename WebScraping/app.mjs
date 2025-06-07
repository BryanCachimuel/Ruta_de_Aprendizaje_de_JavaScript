import { chromium } from "playwright";

const browser = await chromium.launch({channel:"chrome",headless:true});

const page = await browser.newPage();

await page.goto("https://uskokrum2010.com/public/index", {waitUntil:"domcontentloaded"});

await page.waitForSelector(".videoCard");

const exists = await page.$(".videoCard");

if(!exists) {
    console.log("No se encontro ningunha tarjeta");
} else {
    const cards = await page.$$eval(".videoCard", (results) =>
        results.map((element) => {
            const img = element.querySelector("img").getAttribute("src");
            const title = element.querySelector(".card-body .card-title").innerText;
            return { img, title }
        })
    );

    console.log(cards)

    await browser.close();
}

