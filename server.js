import express from "express";
import next from "next";
import puppeteer from "puppeteer";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

export const PdfService = {
  async create(html, data) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-dev-shm-usage"],
    });
    const page = await browser.newPage();
    await page.emulateMediaType("screen");
    await page.goto(html, { waitUntil: "networkidle2" });

    await page.evaluate((data) => {
      localStorage.setItem("data", JSON.stringify(data));
    }, data);
    await page.goto(html, { waitUntil: "networkidle2" });
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();
    return pdf;
  },
};

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.post("/pdf-generator", async (req, res, next) => {
      const pdf = await PdfService.create(
        "http://localhost:3000/report",
        req.body
      );
      res.contentType("application/pdf");
      res.send(pdf);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
