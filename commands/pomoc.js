const Command = require('./../classes/command.js');

module.exports = new Command('pomoc', (msg, args) => {
  return msg.channel.send(`
        ?siema - szkalownik wita uzytkownika
        ?ktorympiotrem - sprawdz ktorympiotrem dzis jestes
        ?szkaluj - bot szkaluje losowa osobe
        ?szkaluj [nazwa/@uzytkownik] - bot szkaluje swoj cel
        ?buleczki - bandziuch piecze buleczki
        ?buleczki ranking - kto ile ma buleczek
        ?czydzwonili - sprawdz czy juz dzwonili do confa z londynu
        ?yesoryes - poznaj odpowiedz na swoje pytanie
    `);
});
