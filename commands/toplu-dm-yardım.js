const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
const dmyardım = db.fetch(`${message.guild.id}.dmyardım`) 

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply("Lütfen **aç** veya **kapat** Kullanınız.");

  if(args[0].toLowerCase() === "aç") {
    if(dmyardım) return message.reply("Zaten Toplu DM Yardım Açık");
      db.set(`${message.guild.id}.topludmyardım`, true)
    message.channel.send("Başarıyla Toplu DM Yardımı Açtın.")
  }

  if(args[0] === "kapat") {
    if (dmyardım === false) return message.reply("Zaten Toplu DM Yardım Kapalı")
      db.set(`${message.guild.id}.topludmyardım`, false)
    message.channel.send("Başarıyla Toplu DM Yardımı Kapattın.")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['topludmyardım', 'topluyardımdm',' toplu dm yardım'],
  permLevel: 0,
};

exports.help = {
  name: ' toplu-dm-yardım',
  description: "Toplu DM'den Yardım açıp kapatırsın",
  usage: 'toplu-dm-yardım <aç/kapat>'
};
