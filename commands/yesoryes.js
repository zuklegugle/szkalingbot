const Command = require("./../classes/command.js");

module.exports = new Command("yesoryes", (msg, args) => {

  let slowa = [
    'YES',
    'Jeszcze Jak!',
    'Zdecydowanie',
    "Oczywiście",
    "Tak.",
    "Jasne że tak"
  ]

  let rand = Math.floor(Math.random() * slowa.length);
  let msgg = `${msg.author} ${slowa[rand]}`;

  return msg.channel.send(msgg);
});
