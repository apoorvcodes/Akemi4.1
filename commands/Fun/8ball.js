const Discord = require('discord.js')


module.exports = {
  name: "8ball",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["fax"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    let question = args.join(' ')
if (!question)
  return message.channel.send(`You did not specify your question!`);
else {
  let responses = [
    "Yes",
    "No",
    "Definetly",
    "Absoloutely",
    "Not in a million years",
  ];
  let response =
    responses[Math.floor(Math.random() * responses.length - 1)];
  let Embed = new Discord.MessageEmbed()
    .setTitle(`Question`)
    .setDescription(`<a:redBadge:792301502474879016>My Ai Think answer is ${response}`)
    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
    .setColor(`#9b6dff`);
  message.channel.send(Embed);
}


  }}