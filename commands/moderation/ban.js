const Discord = require('discord.js')

module.exports = {
  name: "ban",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['BAN_MEMBERS'],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","BAN_MEMBERS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
   
     async execute(client, message, args, data) {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Please specify a user');

    if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
    if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

    if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');

    let reason = args.slice(1).join(" ");

    if(!reason) reason = 'Unspecified';

    await member.ban()
    .catch(err => {
        if(err) return message.channel.send('Something went wrong')
    })

    const banembed = new Discord.MessageEmbed()
    .setTitle('<a:redBadge:792301502474879016>Member Banned')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('<a:redBadge:792301502474879016>User Banned', member)
    .addField('<a:redBadge:792301502474879016>Kicked by', message.author)
    .addField('<a:redBadge:792301502474879016>Reason', reason)
    .setFooter('Time kicked', client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#9b6dff")
    message.channel.send(banembed);

    let chan = message.guild.channels.cache.find((x) => (x.name === "akemi-ban-logs"))
    if(!chan) return;
    const log = new Discord.MessageEmbed()
    .setTitle('Ban-logs')
    .setDescription('A member was banned in this server')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('<a:redBadge:792301502474879016>User Banned', member)
    .addField('<a:redBadge:792301502474879016>Banned by', message.author)
    .addField('<a:redBadge:792301502474879016>Reason', reason)
    .setFooter('Time Banned', client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#9b6dff")
 chan.send(log)
 console.log(log)


  }}