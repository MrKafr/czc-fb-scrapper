const SCRAP_FB = require("./scrap-fb.js");
const OpenUrl = require("openurl")
//const open = (...args) => import('open').then(({ default: fetch }) => fetch(...args));
const INTERVAL = 15000;

(async function () {
    let current, previous;
    setInterval(async function () {
        current = await SCRAP_FB()
        console.count()
        if (current && previous && current !== previous) {
            console.log("NEW");
            OpenUrl.open("https://www.facebook.com/czc.cz")
            OpenUrl.open(current);
        }
        if (current) {
            previous = current
        }
    }, INTERVAL);
})();