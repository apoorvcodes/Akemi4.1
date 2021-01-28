const Discord = require("discord.js");
module.exports = {
  name: "rinfo",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['roleinfo'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {




    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
    if (!role) return message.channel.send(`I couldn't find the role in this server.`);


    const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.roles.highest.hexColor)
        .setTitle('Role Info')
        .addField('<a:redBadge:792301502474879016>Name', `${role.name}`)
        .addField('<a:redBadge:792301502474879016>Role-ID', `${role.id}`)
        .addField('<a:redBadge:792301502474879016>Hex Color', `${role.hexColor.toUpperCase()}`)
        .addField('<a:redBadge:792301502474879016>Created at', `${role.createdAt.toDateString()}`)
        .addField('<a:redBadge:792301502474879016>Mentionable', `${role.mentionable ? 'Yes' : 'No'}`)
        
       
       
       
       
       
       
        .setColor("9b6dff")
        .setThumbnail(`https://cdn.discordapp.com/attachments/795524797164683274/796040716774146078/PessimisticGrimHerring-max-1mb.gif`)
        message.channel.send(embed);






















  }}