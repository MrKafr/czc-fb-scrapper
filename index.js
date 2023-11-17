const SCRAP_FB = require("./scrap-fb.js");
//const open = (...args) => import('open').then(({ default: fetch }) => fetch(...args));
const INTERVAL = 30000;

(async function () {
    let current, previous;
    setInterval(async function () {
        current = await SCRAP_FB()
        console.count()
        if (current && previous && current !== previous) {
            console.log("https://www.facebook.com/czc.cz");
            console.log(current);
            console.log("NEW");
            //open('https://www.facebook.com/czc.cz');
            ///open(current);
        }
        if (current) {
            previous = current
        }
    }, INTERVAL);
})();