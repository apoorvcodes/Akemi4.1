const Discord = require('discord.js')

module.exports = {
  name: "devsuggest",
  description: "",
  usage: "",
  enabled: true,
  aliases: ["suggest"],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
   
    let bugText = args.join(" ");
    if (!bugText) return message.reply("I can't send an empty Suggestion <a:bigrip:785706026606526474>");
    message.reply("Thank you for submitting a suggestion, hopefully it will make in the bot <a:offpurple:793861369354780682>");
    const bug = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n\n"${bugText}"\n\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    let embed = new Discord.MessageEmbed()
        .setTitle("Suggestion")
        .setDescription(bug)
        .setColor('#9b6dff');
        const channnel = '796672648083013652'
    client.channels.cache.get(channnel).send(embed)
        .catch(console.error);


  }}