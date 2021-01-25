const Discord = require('discord.js')

module.exports = {
  name: "embedc",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['embed'],
  memberPermissions: [""],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You are not allowed to send a embed');

    let channe = message.mentions.channels.first();

    if (!channe) return message.channel.send('Please provide a channel');


    let giveawayDuration = args[1];

    if (!giveawayDuration) return message.channel.send('Pleae provide a valid title');

   

    let giveawayWinners = args.slice(2).join(" ");

    if (!giveawayWinners) return message.channel.send('Please provide a valid discription');



    const e = new Discord.MessageEmbed()

    .setTitle(giveawayDuration)
    .setDescription(giveawayWinners)
    .setColor("#9b6dff")
    .setFooter('Akemi', client.user.displayAvatarURL())
    .setTimestamp()
channe.send(e)


message.channel.send(`<a:offpurple:793861369354780682>| New Embed Made in ${channe} by ${message.author}`)









  }}