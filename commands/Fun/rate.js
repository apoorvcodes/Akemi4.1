const Discord = require('discord.js');

module.exports = {
  name: "rate",
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






let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Tag someone to rate them!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", '69'];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10<a:qb_approves:782295742773460992>`);
} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10<a:qb_approves:782295742773460992>`);

}}