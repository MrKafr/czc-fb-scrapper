const puppeteer = require("puppeteer");

async function SCRAP_FB() {
  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: "./user_data_dir/",
  });

  try {
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com/czc.cz");
    await page.waitForTimeout(30000);
    await page.screenshot({ path: `./scrapingbee_homepage.jpg` });

    let returnedElement = await page.evaluate(() => {
      let propertyList = document.getElementsByClassName("x1ey2m1c xds687c x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3 xl1xv1r");
      for (let property of propertyList) {
        return property.getAttribute("src");
      }
    });
    await browser.close();
    return returnedElement
  } catch (e) {
    console.log("pupeteer failed");
    console.log(e);
    await browser.close();
  }
}

//Rework this, dont save only bazos.cz, save full url and find it by regex
/*  ["bazos.cz"]: async function (offer, incialization, client) {
    try {
      const $ = await _createCherioObject(offer.url);
      let returnArray = [];
      $(".inzeraty").each(function () {
        let href = $(this).find("a").attr("href");
        href = href.includes("bazos")
          ? href
          : `https://reality.bazos.cz${$(this).find("a").attr("href")}`;
        href && offer.offerList.indexOf(href) < 0 && returnArray.push(href);
      });
      offer.offerList = [...offer.offerList, ...returnArray];
      await offer.save();
      if (!incialization) {
        _sendNewOffers(returnArray, offer, client);
      }
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  },

  ["bezrealitky.cz"]: async function (offer, incialization, client) {
    try {
      const $ = await _createCherioObject(offer.url);
      let returnArray = [];
      $("article").each(function () {
        let href = $(this).find("a").attr("href");
        href && offer.offerList.indexOf(href) < 0 && returnArray.push(href);
      });
      offer.offerList = [...offer.offerList, ...returnArray];
      await offer.save();
      if (!incialization) {
        _sendNewOffers(returnArray, offer, client);
      }
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  },

  ["reality.idnes.cz"]: async function (offer, incialization, client) {
    try {
      const $ = await _createCherioObject(offer.url);
      let returnArray = [];
      $(".c-products__item").each(function () {
        let href = $(this).find("a").attr("href");
        href && offer.offerList.indexOf(href) < 0 && returnArray.push(href);
      });
      offer.offerList = [...offer.offerList, ...returnArray];
      await offer.save();
      if (!incialization) {
        _sendNewOffers(returnArray, offer, client);
      }
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  },

  ["sreality.cz"]: async function (offer, incialization, client) {
    const browser = await puppeteer.launch({
      headless: true,
      userDataDir: "./user_data_dir/",
    });
    try {
      const page = await browser.newPage();
      await page.goto(offer.url);
      await page.waitForTimeout(5000);

      let returnArray = await page.evaluate(() => {
        let returnArrayEvaluate = [];
        let propertyList = document.getElementsByClassName("property");
        for (let property of propertyList) {
          let href = property
            .getElementsByClassName("title")[0]
            .getAttribute("href");
          href && returnArrayEvaluate.push(`https://www.sreality.cz${href}`);
        }
        return returnArrayEvaluate;
      });

      await browser.close();

      returnArray = returnArray.filter((x) => !offer.offerList.includes(x));

      offer.offerList = [...offer.offerList, ...returnArray];
      await offer.save();
      if (!incialization) {
        _sendNewOffers(returnArray, offer, client);
      }
    } catch (e) {
      console.log("pupeteer failed");
      console.log(e);
      await browser.close();
    }
  },

  ["sbazar.cz"]: async function (offer, incialization, client) {
    try {
      const $ = await _createCherioObject(offer.url);
      let returnArray = [];
      $(".c-item").each(function () {
        let href = $(this).find("a").attr("href");
        href && offer.offerList.indexOf(href) < 0 && returnArray.push(href);
      });
      offer.offerList = [...offer.offerList, ...returnArray];
      await offer.save();
      if (!incialization) {
        _sendNewOffers(returnArray, offer, client);
      }
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  },
};

async function _createCherioObject(url) {
  let res = await fetch(url);
  let html = await res.text();
  if (!html) throw "HTML is not a string";
  return cheerio.load(html);
}

async function _sendNewOffers(newOffers, offer, client) {
  for (let newOffer of newOffers) {
    console.log(newOffer);
    const channel = await client.channels.fetch(offer.channel);
    channel.send(newOffer);
  }
}*/

module.exports = SCRAP_FB;
