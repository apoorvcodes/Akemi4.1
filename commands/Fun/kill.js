const Discord = require('discord.js');

module.exports = {
  name: "kill",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['die'],
  memberPermissions: [""],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
        let killed = message.mentions.members.first();
        if(!killed) {
        
        let emb = new Discord.MessageEmbed()
        .setColor("#9b6dff'")
        .setDescription(`${message.author} decied to kill themself 💔 REST IN PEACE`)
        .setImage("https://cdn.discordapp.com/attachments/792319424005668876/794822246224756766/73326f604f549f89.gif")
        

        message.channel.send(emb)
        
        } else {
        
        let emb = new Discord.MessageEmbed()
        .setColor("#9b6dff'")
        .setDescription(`${killed} was killed by ${message.author} 💔 REST IN PEACE`)
        .setImage("https://cdn.discordapp.com/attachments/755177322730225705/784686868641480744/tenor.gif")
        message.channel.send(emb)
        
        
        }
        




    }
}