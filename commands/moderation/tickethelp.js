const Discord = require('discord.js');


module.exports = {
  name: "thelp",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['tickethelp'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {

       
            const jokembed = new Discord.MessageEmbed()
            .setColor('#9b6dff')
        .setTitle('Ticket')
        
        
        .setDescription(`Use -ticket to create ticket for support, after reacting a new channel will open open at the top of server, ping any @Moderator there.`)
        
      
      .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
            message.channel.send(jokembed)
        
        
    }}