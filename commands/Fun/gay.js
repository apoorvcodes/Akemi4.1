const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["gay","gayrate"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
    let gayrate = Math.floor(Math.random() * 101)


    if(!User){
        let gayrateEmbed = new Discord.MessageEmbed()
            .setTitle("Gayrate Machine")
            .setColor("#9b6dff")
            .setDescription("<a:redBadge:792301502474879016>You are `" + gayrate + "%` gay! <a:Gay:792050648513249300>")
            .setFooter(message.client.user.username, message.client.user.avatarURL())
        message.channel.send(gayrateEmbed).catch(e => {
            console.log(e)
        })
    } else {
        let argsEmbed = new Discord.MessageEmbed()
            .setTitle("Gayrate Machine")
            .setColor("RANDOM")
            .setDescription(`<a:redBadge:792301502474879016>${User.user.username} is \`${gayrate}%\` gay! <a:Gay:792050648513249300>`)
            .setFooter(message.client.user.username, message.client.user.avatarURL())
        message.channel.send(argsEmbed).catch(e => {
            console.log(e)
        })
    }

  }}