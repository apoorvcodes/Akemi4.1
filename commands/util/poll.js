
const Discord = require('discord.js');

module.exports = {
  name: "poll",
    description: "",
    usage: "",
    enabled: true,
    aliases: [''],
    memberPermissions: [" ADMINISTRATOR"],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
 
     async execute(client, message, args, data) {






if (!message.member.permissions.has("ADMINISTRATOR"))
  return message.channel.send(
    `You do not have admin, ${message.author.username}`
  );
  const chan =
  message.mentions.channels.first() ||
  message.guild.channels.cache.get(args[0]);
  if (!chan) {
    return message.channel.send(
      `You did not mention / give the id of your channel!`
    );
  }

const qw = args.slice(1).join(" ");
  if(!qw) return message.channel.send("Bruh Tell what is poll about smh.")
  




const mbed = new Discord.MessageEmbed()
  .setTitle(`<a:r_arrow:784101918070669312>New Poll<a:l_arrow:784101782133276792>`)
  .setDescription(`<a:trcc_pink:783934495140478976>${qw}`)
  .setFooter(`This Poll Created by${message.author.username}`)
  .setColor(`#9b6dff`);
let msg = await  client.channels.cache.get(chan.id).send(mbed);
await msg.react("<a:offpurple:793861369354780682>");
await msg.react("<a:cross1:794114246995869738>");
    }}
