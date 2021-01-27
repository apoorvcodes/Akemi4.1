const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "deletemoji",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['emojidelete'],
  memberPermissions: ["MANAGE_EMOJIS"],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(`You Don't Have Permission To Use This Command! Manage Emojis`)
    }
    
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.resolve(customemoji.id).delete();

      const Added = new MessageEmbed()
        .setTitle(`Emoji Deleted`)
        .setColor(`#9b6dff`)
        .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
        .setDescription(
          `Emoji Has Been Deleted!`
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }


  }}
