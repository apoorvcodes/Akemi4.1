const Discord = require('discord.js');
const ser = "https://discord.gg/xVjvK8zTTk"

module.exports = {
  name: "server",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["devhelp"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {

        const server1 = new Discord.MessageEmbed()
        .setColor('#9b6dff')
        .setTitle('Support Server')
        
        .setDescription('Official Support server of Akemiツ bot **CLICK ON SUPPORT SERVER**')
        .setURL(ser)
        .setThumbnail('https://cdn.discordapp.com/attachments/783903981134020628/784045011276136478/1607001287124.png')
        .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
message.channel.send(server1)

    }
}