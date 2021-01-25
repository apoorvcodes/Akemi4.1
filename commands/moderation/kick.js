const Discord = require('discord.js')

module.exports = {
  name: "kick",
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

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.kickable) return message.channel.send('This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t kick yourself!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('<a:redBadge:792301502474879016>Member Kicked')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('<a:redBadge:792301502474879016>User Kicked', member)
        .addField('<a:redBadge:792301502474879016>Kicked by', message.author)
        .addField('<a:redBadge:792301502474879016>Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setColor('#9b6dff')
        .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);

        let chan = message.guild.channels.cache.find((x) => (x.name === "akemi-ban-logs"))
        if(!chan) return;
        const log = new Discord.MessageEmbed()
        .setTitle('kick-logs')
        .setDescription(`A member was kicked from ${message.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL())
        .addField('<a:redBadge:792301502474879016>User Kicked', member)
        .addField('<a:redBadge:792301502474879016>Kicked by', message.author)
        .addField('<a:redBadge:792301502474879016>Reason', reason)
        .setFooter('Time Kicked', client.user.displayAvatarURL())
        .setTimestamp()

     chan.send(log)
     console.log(log)

  }}