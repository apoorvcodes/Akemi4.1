const Discord = require('discord.js')

const client = require('../../app.js')

const { parse } = require("twemoji-parser");

module.exports = {
    name: "large",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['url',"enlarge"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
        const emoji = args[0];
        if (!emoji) return message.channel.send("No emoji provided!");
    
        let custom = Discord.Util.parseEmoji(emoji);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Enlarged version of ${emoji}`)
        .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
        .setColor("#9b6dff");
    
        if (custom.id) {
            embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
            return message.channel.send(embed);
        }
        else {
            let parsed = parse(emoji, { assetType: "png" });
            if (!parsed[0]) return message.channel.send("Invalid emoji!");
    
            embed.setImage(parsed[0].url);
            return message.channel.send(embed);
        }
    }
}