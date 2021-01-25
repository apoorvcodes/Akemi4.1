const axios = require('axios')
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "ig",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['instagram'],
    memberPermissions: [""],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {

    if (!args[0]) {
      return message.channel.send(`Please Enter a Instagram user Name`)
  }
  let url, response, account, details;
  try {
      url = `https://instagram.com/${args[0]}/?__a=1`;
      response = await axios.get(url)
      account = response.data
      details = account.graphql.user
  } catch (error) {
      return message.channel.send(`Not A Account`)
  }
  
  const embed = new MessageEmbed()
      .setTitle(`<a:redBadge:792301502474879016>${details.is_verified ? `${details.username} <a:green_tick:756545075592429618>` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
      .setDescription(`${details.biography
      }`)
      .setThumbnail(details.profile_pic_url)
      .setColor('#9b6dff')
      .addFields(
          {
              name: "Total Posts:",
              value: details.edge_owner_to_timeline_media.count.toLocaleString(),
              inline: true
          },
          {
              name: "Followers:",
              value: details.edge_followed_by.count.toLocaleString(),
              inline: true
          },
          {
              name: "Following:",
              value: details.edge_follow.count.toLocaleString(),
              inline: true
          }
      )
      
  await message.channel.send(embed)


  }}