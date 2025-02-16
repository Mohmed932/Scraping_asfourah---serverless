import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const OpenBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    return browser;
  } catch (error) {
    throw error;
  }
};
