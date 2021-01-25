const { Color } = require('chalk');
const Discord = require('discord.js')
const avatarEmbed = require('discord.js-avatar');
module.exports = {
  name: "av",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['avatar'],
    memberPermissions: [""],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    avatarEmbed(message, language = 'english')
    

  }}