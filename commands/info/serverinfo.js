


const Discord = require('discord.js');

module.exports = {
	name: "serverinfo",
	description: "",
	usage: "",
	enabled: true,
	aliases: ['guildinfo'],
	memberPermissions: [],
	botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
	nsfw: false,
	cooldown: 3000,
	ownerOnly: false,
     async execute(client, message, args, data) {
        console.log(message.guild.channels);
		let categoryi = 0;
		message.guild.channels.cache.forEach(channels =>{
			if(channels.type == "category") {
				categoryi++;
			}
		});
		let textchanneli = 0;
		message.guild.channels.cache.forEach(channels =>{
			if(channels.type == "text") {
				textchanneli++;
			}
		});
		let voicechanneli = 0;
		message.guild.channels.cache.forEach(channels =>{
			if(channels.type == "voice") {
				voicechanneli++;
			}
		});
		let rolemap = message.guild.roles.cache
		.sort((a, b) => b.position - a.position)
		.map(r => r)
		.join(",");
		if (rolemap.length > 1024) rolemap = "To many roles to display";
		if (!rolemap) rolemap = "No roles";
		try {
			const serverinfoembed = new Discord.MessageEmbed()
				.setTitle(`${message.guild}'s Server Info`)
				.setDescription(`Here is the general server info for ${message.guild}`)
				.setColor("9b6dff")
				.addFields(
					{ name: `<a:redBadge:792301502474879016>Guild Owner`, value: `${message.guild.owner}`, inline: true },
					{ name: `<a:redBadge:792301502474879016>Creation Date`, value: `${message.guild.createdAt}`, inline: true },
					{ name: `<a:redBadge:792301502474879016>Region`, value: `${message.guild.region}`, inline: true },
					{ name: `<a:redBadge:792301502474879016>Channel Catgories`, value: categoryi, inline: true },
					{ name: `<a:redBadge:792301502474879016>Text Channels`, value: textchanneli, inline: true },
					{ name: `<a:redBadge:792301502474879016>Voice Channels`, value: voicechanneli, inline: true },
					{ name: `<a:redBadge:792301502474879016>Membercount`, value: `${message.guild.memberCount}`, inline: true },
					{ name: `<a:redBadge:792301502474879016>Rolecount`, value: `${message.guild.roles.cache.size}`, inline: true },
					{ name: `<a:redBadge:792301502474879016>Emojicount`, value: `${message.guild.emojis.cache.size}`, inline: true },
					{ name: `<a:redBadge:792301502474879016>Server Roles`, value: rolemap },
				)
				.setFooter(message.client.user.username, message.client.user.displayAvatarURL());
			message.channel.send(serverinfoembed), message.react('✅');
		}
		catch(err) {
			return message.channel.send(err);
		}




    }
}