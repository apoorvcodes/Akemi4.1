const shorten = require("isgd");
const Discord = require('discord.js')
module.exports = {
  name: "shorten",
  description: "",
  usage: "",
  enabled: true,
  aliases: [''],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
    if (!args[0]) return message.channel.send("**Proper Usage: shorten <URL> [title]**")

    if (!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith("Error:")) return message.channel.send("**Please enter a valid URL**");
           
              const o = new Discord.MessageEmbed()
              .setTitle(`<a:bilgi:799891819705401364>Your shorten URL :**<${res}>** `)
              .setColor("9b6dff")
            message.channel.send(o);

        })

    } else { // If the second argument IS defined, run this

        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith("Error:")) return message.channel.send(`**${res}**`);

            const o1 = new Discord.MessageEmbed()
            .setTitle(`<a:bilgi:799891819705401364>Your shorten URL :**<${res}>** `)
            .setColor("9b6dff")
          message.channel.send(o1);


        })

    }

  }}