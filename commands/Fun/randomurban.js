const urban = require('urban');
const Discord = require('discord.js');

module.exports = {
    name: "randomurban",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['random-urban'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
       async execute(client, message, args, data) {
        urban.random().first(json => {
            const def = new Discord.MessageEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`)
                .setColor("9b6dff")

            message.channel.send(def);
        });
    },
};