const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg) => {
  msg.channel.send("Merhaba Dünya! Ben Loz 'Bey")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komut"],
  kategori: "Kategori Adı",
  permLevel: 0
};
exports.help = {
  name: "Komut Adı",
  description: "Açıklama",
  usage: "Komut"
};
