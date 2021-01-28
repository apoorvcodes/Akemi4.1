const Discord = require('discord.js');

module.exports = {
  name: "whois",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['userinfo'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {






let inline = true
let resence = true
const status = {
    online: "Online",
    idle: "Idle",
    dnd: " Do Not Disturb",
    offline: " Offline/Invisible"
  }
    
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
bot = "Yes";
} else {
    bot = "No";
}

        let embed = new Discord.MessageEmbed()
            //.setAuthor(member.user.username)
            .setThumbnail((target.displayAvatarURL))
            .setColor("#9b6dff")
            .addField("<a:redBadge:792301502474879016>Full Username", `${member.user.tag}`, inline)
            .addField("<a:redBadge:792301502474879016>ID", member.user.id, inline)
            .addField("<a:redBadge:792301502474879016>Nickname", `${member.nickname !== null ? `<a:offpurple:793861369354780682> Nickname: ${member.nickname}` : " <a:cross1:794114246995869738> None"}`, true)
            .addField("<a:redBadge:792301502474879016>Bot", `${bot}`,inline, true)
            
            .addField("<a:redBadge:792301502474879016>Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<a:cross1:794114246995869738> Not playing"}`,inline, true)
            .addField("<a:redBadge:792301502474879016>Roles", `${message.member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<a:cross1:794114246995869738>No Roles"}`, true)
            .addField("<a:redBadge:792301502474879016>Joined Discord At", member.user.createdAt)
            .setFooter(`Information about ${member.user.username}`)
            .setTimestamp()

        message.channel.send(embed);

        message.delete();
}}