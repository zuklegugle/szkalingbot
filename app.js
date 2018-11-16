const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.js");
const http = require("http");
const express = require("express");
const app = express();

const database = require("./database.js");
database.init();

console.log(database.db.listCollections());

const command_siema = require("./commands/siema.js");
const command_szkaluj = require("./commands/szkaluj.js");
const command_buleczki = require("./commands/buleczki.js");
const command_ktorympiotrem = require("./commands/ktorympiotrem.js");
const command_czydzwonili = require("./commands/czydzwonili.js")
const command_yesoryes = require("./commands/yesoryes.js")
const command_pomoc = require("./commands/pomoc.js")

const commands = {
  siema: command_siema,
  szkaluj: command_szkaluj,
  buleczki: command_buleczki,
  ktorympiotrem: command_ktorympiotrem,
  pomoc: command_pomoc,
  yesoryes: command_yesoryes,
  czydzwonili: command_czydzwonili
};

// Set the prefix
let prefix = "?";
client.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (commands.hasOwnProperty(command)) {
    commands[command].process(message, args, database.db);
  }
});

client.login(auth.token);

app.listen(8080);
setInterval(() => {
  http.get(`http://szkalingbot.ct8.pl`);
}, 100000);
