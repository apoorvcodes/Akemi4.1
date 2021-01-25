
const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
module.exports = {
    name: "mock",
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



    if (args.length < 1) return message.channel.send("Please provide some text to Mock")

    let mockEmbed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setDescription(args.map(randomizeCase))
    .setImage("https://cdn.discordapp.com/attachments/424889733043191810/425242569325150208/mock.jpg")

    message.channel.send(mockEmbed)

    message.delete();
    }}
    