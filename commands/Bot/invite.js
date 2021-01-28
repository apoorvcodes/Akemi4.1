const Discord = require('discord.js');

module.exports = {
  name: "invite",
  description: "",
  usage: "",
  enabled: true,
  aliases: ["akemi"],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {

        const invite2 = 'https://discord.com/api/oauth2/authorize?client_id=755985276873998486&permissions=8&scope=bot'
        const inv = new Discord.MessageEmbed()
        
        .setColor('#9b6dff')
        .setTitle('Invite Akemiツ')
        
        
        .setDescription('Add Akemiツ Bot to your server  **Click on Invite Akemi**')
        .setURL(invite2)
      .setThumbnail('https://media.discordapp.net/attachments/755177322730225705/784344150417211392/6520_devNew.png')
      .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
    
message.channel.send(inv)



    }
}