const Discord = require('discord.js');
 const amclient = require("../../helpers/amapi")
module.exports = {
  name: "facebook",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['fb'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
   
     async execute(client, message, args, data) {
	let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;
	let args1 = args.slice(1).join(" ")
	if(!args1) {
		message.reply("Lacking params dude")
	}
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await amclient.generate("facebook", { url: User.user.displayAvatarURL({ format: "png", size: 2048 }), text: args1 });
       
        let attachment = new Discord.MessageAttachment(buffer, "mission.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);
        
    }}