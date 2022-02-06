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

.addField('**Moderation**' , '`kick`,`ban`,`unban`,`nuke`,`ticket`,`close`,`tickethelp`,`lock on`,`lock off`')

.addField('**Utility**' , '`avatar`,`steal`,`deletemoji`,`dm`,`embedc`,`enlarge`,`poll`,`purge`, `urban`, `shorten`, `docs`,`yt`')

.addField('**Fun**' , '`8ball`,`challeger`,`howgay`,`gif`,`joke`,`kill`,`master`,`meme`,`mock`,`pepe`,`rate`,`respect`,`say`,`scary`,`wallpaper`,`wasted`, `random-urban`')

.addField('**Information and others**' , '`anime`,`movie`,`covid[all]`,`covid[country]`,`emojis`,`roleinfo`,`serverinfo`,`userinfo`,`channelinfo`,`github`,`instagram`,`weather`,`manga`')

.addField('**Bot and Config**' , '`prefix`,`language`,`botinfo`,`devsuggest`,`help`,`invite`,`ping`,`restart`,`eval`,`ping`,`supportserver`')

.addField('**Features**' , '`goodbye`, `welcome`, `anti-ghostping`, `auto-logs(soon)`')

.addField('**Help us!**' , `\nIf you want to help us please use the following links\n\n<a:R_Arrow:783934395698249801> [Support server](https://discord.gg/Bpr5qeYAQG) | [Invite](https://discord.com/api/oauth2/authorize?client_id=755985276873998486&permissions=8&scope=bot) | [Vote](https://top.gg/) <a:L_Arrow:783934419017662474>`)
.setAuthor('Akemi', client.user.displayAvatarURL() , 'https://discord.com/oauth2/authorize?client_id=755985276873998486&permissions=8&scope=bot')


.setFooter('Akemi', client.user.displayAvatarURL())
.setTimestamp()
.setColor('#9b6dff')









message.channel.send(help)

  }}