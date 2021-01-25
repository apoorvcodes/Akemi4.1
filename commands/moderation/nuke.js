const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    description: "",
    usage: "",
    enabled: true,
    aliases: [''],
    memberPermissions: [""],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
 
     async execute(client, message, args, data) {
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I don\'t have the right permissions.')
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("You Don't Have Permission!")
           
        }
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