const Command = require("./../classes/command.js");

module.exports = new Command("czydzwonili", (msg, args) => {
  let msgg = `Niestety, z londynu dalej nie dzwonili`;
  return msg.channel.send(msgg, {
    files: [
      "https://cdn.discordapp.com/attachments/253659464857681930/512782187033001986/ale_napierdala.gif"
    ]
  });
});
