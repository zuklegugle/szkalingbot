const Command = require("./../classes/command.js");

module.exports = new Command("ktorympiotrem", (msg, args) => {
  let rand = Math.floor(Math.random() * 9);
  let msgg = `${msg.author} jesteś dzisiaj piotrem numer ${rand}`;
  return msg.channel.send(msgg, {
    files: [
      "https://cdn.discordapp.com/attachments/253659464857681930/510868711113097256/KTORYMJESTESDZIS.jpg"
    ]
  });
});
