const urban = require('urban');
const Discord = require('discord.js');

module.exports = {
    name: "urban",
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
        if (args.length < 1) {
            return message.channel.send('Please enter a word');
        }
        let word = args.join(' ');
        console.log(word);

        urban(word).first(json => {
            if (!json) {
                return message.channel.send('No such word exist!');
            }
            console.log(json);
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