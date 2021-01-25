const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");
const Discord = require('discord.js')

module.exports = {
  name: "gif",
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
    if (args.length === 0) {
      message.channel.send('No Seacrh terms!')
      return;
    }
    if (args.length === 1) {
      term = args.toString()
    } else {
      term = args.join(" ");
    }
    giphy.search(term).then(function (res) {
      // Res contains gif data!
      let id = res.data[0].id
      let messageurl = `https://media.giphy.com/media/${id}/giphy.gif`
      const embed = {
        
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
          "text": "Powered by Giphy"
        },
        "image": {
          "url": messageurl
        },
        "fields": [
          {
            "name": "Search Term",
            "value": "`" + term + "`",
            "inline": true
          },
          {
            "name": "Page URL",
            "value": "[Giphy](" + res.data[0].url + ")",
            "inline": true,
            "color": "#9b6dff"
          }
        ]
      };
      message.channel.send({ embed });
  
    });
  
    message.delete();


  }}