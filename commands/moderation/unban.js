const Discord = require('discord.js')

module.exports = {
    name: "unban",
    description: "",
    usage: "",
    enabled: true,
    aliases: [''],
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then(m => m.delete({ timeout: 5000 }));

    if (!args[0]) return message.channel.send('please enter a users id to unban!').then(m => m.delete({ timeout: 5000 }));

    let member;

    try {
        member = await client.users.fetch(args[0])
    } catch (e) {
        console.log(e)
        return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
    }

    const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

    const embed = new MessageEmbed()
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

    message.guild.fetchBans().then( bans => {

        const user = bans.find(ban => ban.user.id === member.id );

        if (user) {
            embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
                .setColor('#9b6dff')
                .addField('<a:redBadge:792301502474879016>User ID', user.user.id, true)
                .addField('<a:redBadge:792301502474879016>user Tag', user.user.tag, true)
                .addField('<a:redBadge:792301502474879016>Banned Reason', user.reason != null ? user.reason : 'no reason')
                .addField('<a:redBadge:792301502474879016>Unbanned Reason', reason)
                .setColor("#9b6dff")
            message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
        } else {
            embed.setTitle(`User ${member.tag} isn't banned!`)
                .setColor('#ff0000')
            message.channel.send(embed)
        }

    }).catch(e => {
        console.log(e)
        message.channel.send('An error has occurred!')
    })



    let chan = message.guild.channels.cache.find((x) => (x.name === "akemi-ban-logs"))
    if(!chan) return;
    const log = new Discord.MessageEmbed()
    .setTitle('unBan-logs')
    .setDescription('A member was unbanned in this server')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('<a:redBadge:792301502474879016>User unBanned', member)
    .addField('<a:redBadge:792301502474879016>unBanned by', message.author)
    .addField('<a:redBadge:792301502474879016>Reason', reason)
    .setFooter('Time unBanned', client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#9b6dff")
 chan.send(log)
 console.log(log)


  }}