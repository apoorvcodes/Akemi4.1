const Discord = require('discord.js')

module.exports = {
  name: "eval",
  description: "",
  usage: "",
  enabled: true,
  aliases: ["evl"],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: true,
     async execute(client, message, args, data) {
    var result = message.content.split(" ").slice(1).join(" ")
    let evaled = eval(result);
    console.log(result)
message.channel.send(evaled)

  }}