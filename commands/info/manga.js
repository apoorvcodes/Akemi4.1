const request = require('node-superfetch');
const Discord = require('discord.js');
const utility = require('./utility.js')
module.exports = {
	name: "manga",
	description: "",
	usage: "",
	enabled: true,
	aliases: ['kitsu-manga'],
	memberPermissions: [],
	botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
	nsfw: false,
	cooldown: 3000,
	ownerOnly: false,

     async execute(client, message, args, data) {


    const query = args.join(' ');

        try {
			const { text } = await request
				.get('https://kitsu.io/api/edge/manga')
				.query({ 'filter[text]': query });
			const body = JSON.parse(text);
			if (!body.data.length) return message.reply('Could not find any results.');
			const data = body.data[0].attributes;
			const embed = new Discord.MessageEmbed()
				.setColor('9b6dff')
				.setAuthor('Akemi')
				.setURL(`https://kitsu.io/manga/${data.slug}`)
				.setThumbnail(data.posterImage ? data.posterImage.original : null)
				.setTitle(data.canonicalTitle)
				.setDescription(utility.shorten(data.synopsis))
				.addField('❯ Type', `${data.subtype} - ${data.status}`, true)
				.addField('❯ Volumes / Chapters', `${data.volumeCount || '???'} / ${data.chapterCount || '???'}`, true)
				.addField('❯ Start Date', data.startDate ? new Date(data.startDate).toDateString() : '???', true)
				.addField('❯ End Date', data.endDate ? new Date(data.endDate).toDateString() : '???', true);
			return message.channel.send(embed);
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}



  }}