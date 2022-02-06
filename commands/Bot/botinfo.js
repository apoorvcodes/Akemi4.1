
const {
    version
} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")



const Discord = require("discord.js");

module.exports = {
    //Command Information
    name: "botinfo",
    description: "Get the link for the users Avatar",
    usage: "Get info about the bot",
    enabled: true,
    aliases: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
    

  
     async execute(client, message, args, data) {


    let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username)
                .setTitle("__**Stats:**__")
                .setColor("#9b6dff")
                .addField(" Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField(" Uptime ", `${duration}`, true)
                
                .addField(" Servers", `${message.client.guilds.cache.size}`, true)
                .addField(" Channels ", `${message.client.channels.cache.size}`, true)
                .addField(" Discord.js", `v${version}`, true)
                .addField(" Node", `${process.version}`, true)
                .addField(" CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField(" CPU usage", `\`${percent.toFixed(2)}%\``, true)
                .addField(" Arch", `\`${os.arch()}\``, true)
                .addField(" Platform", `\`\`${os.platform()}\`\``, true)
                .addField("API Latency", `${(message.client.ws.ping)}ms`)
                .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
         message.channel.send(botinfo)
        });

  }}