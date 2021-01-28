const fetch = require("node-fetch");
const cheerio = require('cheerio');
const discord = require("discord.js");

module.exports = {
  name: "wallpaper",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['wl'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {

    let random = Math.floor(Math.random() * 107)
    let text = await fetch(`https://hdqwalls.com/category/anime-wallpapers/page/${random}`, { method: "GET" })
    text = await text.text()
    let $ = cheerio.load(text)
    let images = []

    $('img[class="thumbnail img-responsive custom_width"]').each(function(i, elem) {
      images.push($(this).attr('src'));
    });



    let limit = images.length
    let pg = 0;
    let embed = new discord.MessageEmbed()
      .setColor("#FF69B4")
      .setImage(images[0].replace("/thumb", ""))

    const msg = await message.channel.send(embed);

  }}