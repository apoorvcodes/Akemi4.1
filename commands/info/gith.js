const fetch = require('node-fetch')
const moment = require('moment')
const Discord = require('discord.js')

module.exports = {
  name: "github",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['git'],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    if (!args[0]) return message.channel.send({
      embed:{
          description: `**Please Give Me A Github Username!**`
      }
  })
// Made by Zukii
  fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {
      if(body.message) return message.channel.send({
          embed:{
              description: ` **User Not Found | Please Give Me A Valid Username!**`
          }
      });
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${login} Information!`, avatar_url)
            .setColor(`#9b6dff`)
            .setThumbnail(`${avatar_url}`)
            .addField(`<a:redBadge:792301502474879016>Username`, `${login}`)
            .addField(`<a:redBadge:792301502474879016>ID`, `${id}`)
            .addField(`<a:redBadge:792301502474879016>Bio`, `${bio || "No Bio"}`)
            .addField(`<a:redBadge:792301502474879016>Public Repositories`, `${public_repos || "None"}`, true)
            .addField(`<a:redBadge:792301502474879016>Followers`, `${followers}`, true)
            .addField(`<a:redBadge:792301502474879016>Following`, `${following}`, true)
            .addField(`<a:redBadge:792301502474879016>Location`, `${location || "No Location"}`)
            .addField(`<a:redBadge:792301502474879016>Account Created`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
            .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed)
    
          })




  }}