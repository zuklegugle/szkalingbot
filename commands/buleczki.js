const Command = require('./../classes/command.js');

var losujBuleczki = function(max) {
  return Math.floor(Math.random() * max);
}
var sprawdzBuleczki = function(rand) {
    if(rand === 0) {return 'żadnej bułeczki :('}
    if(rand === 1) {return "jedna bułeczkę"}
    if(rand >= 2 && rand < 5) {return rand + " bułeczki"}
    if(rand >= 5) {return rand + " bułeczek"}
  }

module.exports = new Command('buleczki', (msg, args, db) => {
  let result = '';
  let buleczkiCol = db.getCollection('buleczki');
  if (args.length === 1) {
    if (args[0] === "ilosc") {
      let usr = buleczkiCol.findOne({ userId: msg.author.id });
      if (usr !== null) {
        result = `${msg.author} ma ${sprawdzBuleczki(usr.quantity)}`;
      } else {
        result =`${msg.author} nie byl jeszcze u bandziucha w piekarni`;
      }
    }
    if (args[0] === "ranking") {
      result = 'Ranking posiadaczy bułeczek: \n';
      let a = buleczkiCol.chain().find().simplesort('quantity', true).data().forEach( (item, index) => {
          let username = msg.guild.members.get(item.userId);
          let bul = item.quantity;
          result += ` --${username}: ${sprawdzBuleczki(bul)} \n`
      });
    }
}
  if (args.length === 0) {
    let buleczki = losujBuleczki(10);
    let usr = buleczkiCol.findOne({ userId: msg.author.id });
    if (usr !== null) {
      let q = usr.quantity;
      usr.quantity = q + buleczki;
      buleczkiCol.update(usr);
    } else {
      buleczkiCol.insert({
        userId: msg.author.id,
        quantity: buleczki
      });
    }
    result = ` Bandziuch wypiekł dla ${msg.author} ${sprawdzBuleczki(buleczki)}`;
  }
  return msg.channel.send(result);
});
