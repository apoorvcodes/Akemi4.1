const Discord = require('discord.js')

module.exports = {
  name: "dm",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['message'],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
return message.channel.send("You do not have enough permissions!");
let user =
message.mentions.members.first() ||
message.guild.members.cache.get(args[0]);
if (!user)
return message.channel.send(
  `You did not mention a user, or you gave an invalid id`
);
const embed = new Discord.MessageEmbed()
.setTitle(`${args.slice(1).join(" ")}`)
.setDescription('***If you wanna opt out of this feature please use -command <disable> dm***')
.setFooter(`Dm by ${message.author.username}`)
.setTimestamp()
      
.setColor("9b6dff")
if (!args.slice(1).join(" "))
return message.channel.send("You did not specify your message");
user.user
.send(embed)
.catch(() => message.channel.send("That user could not be DMed!"))
.then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    


  }}