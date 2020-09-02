const Discord = require('discord.js');
const db = require('quick.db');

exports.run = function(client, message, args) {
const dmyardım = db.fetch(`${message.guild.id}.dmyardım`) 
const topludmyardım = db.fetch(`${message.guild.id}.dmyardım`) 

if(!args[0]) {
const yardim = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("**RMC Team** - Yardım")
.addField("**`rmc!yardım Moderasyon`** | ile __Moderasyon__ Komutlarını Gösterir\n\n", "\n\n**`rmc!yardım Eğlence`** | İle __Eğlence__ Komutlarını Gösterir")
.addField("Bağlantılar", `| - [Sitemiz](https://rmc-team-bot-site.glitch.me/) - | - [Botu Sunucuna Davet et](https://bit.ly/RMCTeamBot) - | - [Destek Sunucumuz](https://discord.gg/xP47Q47) - |`)
.setDescription("Yardım Komutları")
.setThumbnail(message.guild.iconURL)
if(topludmyardım == false){
if (dmyardım == false){
message.channel.send(yardim);
};
};
if(topludmyardım == true){
if(dmyardım == true){
message.author.send(yardim);
};
};
}
  
 else if(args[0].toLowerCase() === "eğlence") {
  const eglence = new Discord.RichEmbed()                        
  .setColor("RANDOM")
  .setTitle("**RMC Team** - ***Yardım***")
  .addField("**`rmc!ara155`** | Polis Çağırısın(Gerçek Deildir!)\n\n**`rmc!aşçı`** | Yazdığınız Yazıyı ascii Olarak Tekrar Yazar\n\n**`rmc!avatar`** | Avatar Fotorafını Gösterir\n\n**`rmc!banner`** | Yazdığınız Yazıyı Banner Olarak Tekrar Atar", "**__  __** \n**`rmc!slots`** | Slots Oynarsın\n\n ** **")
  .addField("**`rmc!emojyazı`** | Sunucunuza 20+ Emoji Ekler\n\n**`rmc!espri`** | Espri Yapar\n\n**`rmc!havadurumu`** | Havadurumunu Gösterir\n\n**`rmc!herkesebendençay`** | Herkese çay Ismarlarsın\n\n", "**__  __** \n**`rmc!mca`** | Minecraft Başarımı Kazanırsın\n\n ** **")
  .addField("**`rmc!mesajdöndür`** | Yazdığınız Yazını Ters Çevirir\n\n**`rmc!rolbilgi`** | Rol Hakkında Bilgi Verir\n\n**`rmc!çekiç`** | Seçtiğiniz Kişiye Çekiç Atar", "**__  __** \n**`rmc!servericon`** | Sunucunun Resmini Gösterir\n\n ** **")
  .addField("**`rmc!simit`** | Simit Yersin\n\n**`rmc!slots`** | Slots Oynarsın\n\n**`rmc!stresçarkı`** | Stresçarkı Verir", "**__  __** \nDaha Fazla Bilgi İçin **Destek Sunucumuza** Gelebilirsin.")
  .addField('Bağlantılar', `| - [Sitemiz](https://rmc-team-bot-site.glitch.me/) - | - [Botu Sunucuna Davet et](https://bit.ly/RMCTeamBot) - | - [Destek Sunucumuz](https://discord.gg/xP47Q47) - |`)
  .setFooter(message.author.username+" Yardım İstedi", message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
if(topludmyardım == false){
if (dmyardım == false){
message.channel.send(eglence);
};
};
if(topludmyardım == true){
if(dmyardım == true){
message.author.send(eglence);
};
};
  }
 else if(args[0].toLowerCase() === "moderasyon") {
  const mod = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("**RMC Team** - ***Yardım***")
  .addField("**`rmc!clone`** | Seçtiğiniz Kanalı Klonlar Ve Eski Kanalı Siler\n\n**`rmc!emojikur`** | Sunucya 20+ Emoji Kurar\n\n**`rmc!davet-kur`** | Sunucunun Davet Linki Verir (Sınırsız Deildir !)\n\n**`rmc!gç-ayarla`** | Seçtiğiniz Kanalı Resimli Giriş Çıkış Ekler", "**__  __** \n**`rmc!gç-kapat`** | Resimli Giriş Çıkışı Kapatır")
  .addField("**`rmc!hesapla`** | Yazdığınız Matematik İşleminı Hesaplar\n\n**`rmc!istatistik`** | Bot İstatistiklerini Gösterir\n\n**`rmc!kick`** | Seçtiğiniz Kişiyi Sunucudan Atar\n\n**`rmc!mute`** | Bir Kişiyi Susturur\n\n", "**__  __** \n**`rmc!mute-log`** | Seçtiğin Kanala Mute Attığında Mute Bilgilerini Gösterir\n\n ** **")
  .addField("**`rmc!oylama`** | Bir Oylama Başlatır\n\n**`rmc!reklamtara`** | Oyuncuların Reklam Yapıp Yapmadığını Tara\n\n**`rmc!rolbilgi`** | Yazdığınız Rolün Bilgilerini Gösterir", "**__  __** \n**`rmc!slowmode`** | Chati Yavaş Moda Alır\n\n ** **")
  .addField("**`rmc!küfür`** | Küfür Korumasını Açarsın\n\n**`rmc!afk`** | AFk Olursun", "**__  __** \nDaha Fazla Bilgi İçin **Destek Sunucumuza** Gelebilirsin.")
  .addField('Bağlantılar', `| - [Sitemiz](https://rmc-team-bot-site.glitch.me/) - | - [Botu Sunucuna Davet et](https://bit.ly/RMCTeamBot) - | - [Destek Sunucumuz](https://discord.gg/xP47Q47) - |`)
  .setFooter(message.author.username+" Yardım İstedi", message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
if(topludmyardım == false){
if (dmyardım == false){
message.channel.send(mod);
};
};
if(topludmyardım == true){
if(dmyardım == true){
message.author.send(mod);
};
};
  }
}

  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['Yardım', 'Help', 'help'],
  permLevel: 0 
};

exports.help = {
  name: 'yardım', 
  description: 'Test.',
  usage: 'yardım'
};
