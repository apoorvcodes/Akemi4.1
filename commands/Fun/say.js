const Discord = require('discord.js');

module.exports = {
  name: "say",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['speak'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
   
     async execute(client, message, args, data) {



const sa = args.join(" ");

if(!sa) return message.channel.send("Bruh Tell me what to speak")
  const saye = new Discord.MessageEmbed()
  .setTitle(`Akemi`)
  .setDescription(sa)
  .setColor('#9b6dff')
  .setFooter(`Said By ${message.author.username}`)
  message.channel.send(saye);
  message.delete();  
    }}