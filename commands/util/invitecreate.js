const Discord = require('discord.js')

module.exports = {
  name: "invitec",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['createinvite'],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    var uses = args[0];
  var age = args[1];
  const wrong = new Discord.MessageEmbed()
  .setTitle('<a:bilgi:799891819705401364>You forgot to specify how many times the invite can be used')
  .setColor('9b6dff');
  const owo = new Discord.MessageEmbed()
  .setTitle('<a:bilgi:799891819705401364>As you forgot to include the max age of the invite it will not expire')
  .setColor('9b6dff')

	if (!uses) {
		return message.reply(wrong);
	}
	if (!age) {
		message.reply(owo);
		age = await 0;
	}

	uses = await uses.toString(); // Have to convert to string for indexOf(...) below

	if (uses.indexOf(".") !== -1) {
		return message.reply("How can you invite only a part of a person? :confused:"); // There will always be those people
	}

	age = await age.toString();

	if (age.indexOf("s") !== -1) { // Seconds
		age = await age.replace(/s.*/, "");
	} else if (age.indexOf("m") !== -1) { // Minutes
		var agemin = await age.replace(/m.*/, "");
		age = await agemin * 60;
	} else if (age.indexOf("h") !== -1) { // Hours
		var agehour = await age.replace(/h.*/, "");
		age = await agehour * 60 * 60;
	} else if (age.indexOf("d") !== -1) { // Days
		var ageday = await age.replace(/d.*/, "");
		age = await ageday * 60 * 60 * 24;
	} else {
		if (age.indexOf(".") !== -1) {
			return message.reply("Nope, seconds must be whole numbers."); // For people who want to do this
		}
		age = await age; // No value letter can be found. This is seconds
  }


	message.channel.createInvite({ maxUses: uses, maxAge: age }).then((invite) => {
    const o = new Discord.MessageEmbed()
    .setTitle(`<a:bilgi:799891819705401364>Your invite **${invite}** with settings maxUses: ${uses}, maxAge: ${age} `)
   
    .setColor('9b6dff')
		//console.log(invite);
		message.channel.send(o);
	});



  }}