const { Client } = require("discord.js");
const config = require("./config.json");

const SCRAP_FB = require("./scrap-fb.js");
const INTERVAL = 120000

// Create a new client instance
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  partials: ["CHANNEL"],
});

// When the client is ready, this only runs once
client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(async function () {
    await SCRAP_FB()
  }, INTERVAL);
});


client.login(config.discordToken);

module.exports = { client };
