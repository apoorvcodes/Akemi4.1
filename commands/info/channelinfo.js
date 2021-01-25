
  
const Discord = require('discord.js');
const channelTypes = {
    dm: 'DM',
    group: 'Group DM',
    text: 'Text Channel',
    voice: 'Voice Channel',
    category: 'Category',
    unknown: 'Unknown',
};

module.exports = {
  name: "channelinfo",
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


    const channel = message.mentions.channels.first() || message.channel || message.guild.channels.get(args[0]);

    if (!channel) {
        return message.reply('please enter a valid channel.');
    }
   
    const channelEmbed = new Discord.MessageEmbed()
            .setColor('#9b6dff')
            .setThumbnail(message.guild.iconURL)
            .setTitle('Channel Info')
            .addField(' Name', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, )
            .addField(' ID', channel.id, true)
            .addField(' Creation Date', channel.createdAt.toDateString(), )
            .addField(' NSFW', channel.nsfw ? 'Yes' : 'No', )
            .addField(' Category', channel.parent ? channel.parent.name : 'None', )
            .addField(' Type', channelTypes[channel.type], )
            .addField(' Topic', channel.topic || 'None', );

    message.channel.send(channelEmbed);











  }}