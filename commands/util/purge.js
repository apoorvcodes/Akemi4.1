const Discord = require('discord.js')

module.exports = {
  name: "clear",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['purge'],
  memberPermissions: ["MANAGE_MESSAGES"],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {


    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!')
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.')
      const amount = args.join(' ');
      const amount2 = amount;
  if (!amount2) return message.reply(`You haven't given an amount of messages which should be deleted!`), message.react('🚫');
  if (isNaN(amount2)) return message.reply('The amount parameter isn`t a number!'), message.react('🚫');
  if (amount2 > 100) return message.reply('You can`t delete more than 100 messages at once!'), message.react('🚫');
  if (amount2 < 1) return message.reply('You have to delete at least 1 message!'), message.react('🚫');
  try {
    await message.channel.messages.fetch({ limit: amount2 }).then(messages => {
      message.channel.bulkDelete(messages)
     
      
      
    });
    
    message.channel.send(`Deleted ${amount} messages from the channel`)
  }
  catch {
    message.channel.send("I'm sorry, but I wasn't able to purge those messages."), message.react('🚫');
  }




  }}
