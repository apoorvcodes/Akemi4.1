const Discord = require('discord.js')

module.exports = {
  name: "help",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["commands"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
const help = new Discord.MessageEmbed()
.setTitle('**Akemi Help and Command list**')
.setDescription(`Here you can see all **commands**.If you feel like bot is missing something or has a bug ,please join our [Support](https://discord.gg/Bpr5qeYAQG) server`)

.addField('**<a:Setting:784057539653271582> Moderation**' , '`kick`,`ban`,`unban`,`nuke`,`ticket`,`close`,`tickethelp`,`lock on`,`lock off`')

.addField('**<a:purple:784060300977897493> Utility**' , '`avatar`,`steal`,`deletemoji`,`dm`,`embedc`,`enlarge`,`poll`,`purge`, `urban`, `shorten`, `docs`,`yt`')

.addField('**<a:WhiteHeart:783934288126672897> Fun**' , '`8ball`,`challeger`,`howgay`,`gif`,`joke`,`kill`,`master`,`meme`,`mock`,`pepe`,`rate`,`respect`,`say`,`scary`,`wallpaper`,`wasted`, `random-urban`')

.addField('**<a:Insta:799278150106087464> Information and others**' , '`anime`,`movie`,`covid[all]`,`covid[country]`,`emojis`,`roleinfo`,`serverinfo`,`userinfo`,`channelinfo`,`github`,`instagram`,`weather`,`manga`')

.addField('**<a:yp_NitroBoostGold:791587647717507123> Bot and Config**' , '`prefix`,`language`,`botinfo`,`devsuggest`,`help`,`invite`,`ping`,`restart`,`eval`,`ping`,`server`')

.addField('**<a:Eagle_money:803279413549465620> Features**' , '`goodbye`, `welcome`, `anti-ghostping`, `auto-logs(soon)`')

.addField('**Help us!**' , `\nIf you want to help us please use the following links\n\n<a:R_Arrow:783934395698249801> <a:redBadge:792301502474879016>[Support server](https://discord.gg/Bpr5qeYAQG) | <a:redBadge:792301502474879016>[Invite](https://discord.com/api/oauth2/authorize?client_id=755985276873998486&permissions=8&scope=bot) | <a:redBadge:792301502474879016>[Vote](https://top.gg/) <a:L_Arrow:783934419017662474>`)
.setAuthor('Akemi', client.user.displayAvatarURL() , 'https://discord.com/oauth2/authorize?client_id=755985276873998486&permissions=8&scope=bot')


.setFooter('Akemi', client.user.displayAvatarURL())
.setTimestamp()
.setColor('#9b6dff')









message.channel.send(help)

  }}
