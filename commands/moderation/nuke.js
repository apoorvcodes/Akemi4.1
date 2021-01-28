const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    description: "",
    usage: "",
    enabled: true,
    aliases: [''],
    memberPermissions: ["MANAGE_CHANNELS"],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
 
     async execute(client, message, args, data) {
      
           
        
        message.channel.clone().then
        ((ch) => {
            ch.setParent(message.channel.parent);
            ch.setPosition(message.channel.position);
            message.channel.delete().then(() => {
                ch.send("**Channel Has Been Nuked** \n https://imgur.com/LIyGeCR").then(r => r.delete({ timeout: 5000}))
            })

        });
    }
}