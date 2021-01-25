const Discord = require('discord.js');
let giveMeAJoke = require('give-me-a-joke');

module.exports = {
  name: "joke",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['jk'],
  memberPermissions: [""],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {

        giveMeAJoke.getRandomCNJoke(function(joke){
            const jokembed = new Discord.MessageEmbed()
            .setColor('#9b6dff')
        .setTitle('Joke For You')
        
        
        .setDescription(`${joke}`)
        
      .setThumbnail('https://media.discordapp.net/attachments/755177322730225705/784676651119804436/3x.gif')
      .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
            message.channel.send(jokembed)
        
        })
    }}




        
    