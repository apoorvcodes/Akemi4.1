const Discord = require('discord.js')

const client = require('../../app.js')

const imdb = require("imdb-api");


module.exports = {
  name: "movie",
  description: "",
  usage: "",
  enabled: true,
  aliases: [''],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {

        if (!args.length) {
            return message.channel.send("Please give the name of movie or series");
          }
      
          const imob = new imdb.Client({ apiKey: "5e36f0db" }); //You need to paste you imdb api
      
          let movie = await imob.get({ name: args.join(" ") });
      
          let embed = new Discord.MessageEmbed()
          .setColor("#9b6dff")
          .setTitle(movie.title)
          .setURL(movie.imdburl)
          .setDescription(movie.plot)
          .setThumbnail(movie.poster)
          .addField("❯ Rate", movie.rating, true)
          .addField("❯ Time", movie.runtime, true)
          .addField("❯ Awards", movie.awards, true)
          .addField("❯ Langueages", movie.languages, true)
          .addField("❯ Genres", movie.genres, true)
          .addField("❯ PG", movie.rated, true)
          .addField("❯ Coutry", movie.country, true)
          .addField("❯ Released", movie.released)
          .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
      
          message.channel.send(embed)
          
    }
}