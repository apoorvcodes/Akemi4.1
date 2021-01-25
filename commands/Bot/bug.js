const Discord = require('discord.js')

module.exports = {

  name: "bug",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["devbug"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
    //Settings for command
  
  
  async execute(client, message, args, data) {
    const channel = '796672451899031563';
    let bugText = args.join(" ");
    if (!bugText) return message.reply("I can't send an empty bug report!");
    message.reply("Thank you for submitting a bug, hopefully it won't require major surgery :grimacing:");
    const bug = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n\n"${bugText}"\n\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    let embed = new Discord.MessageEmbed()
        .setTitle("Bug Report")
        .setDescription(bug)
        .setColor("#9b6dff");

    client.channels.cache.get(channel).send(embed)
        .catch(console.error);






  }}