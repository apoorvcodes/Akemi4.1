const Discord = require('discord.js')

module.exports = {
    name: "steal",
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
  
  const emoji = args[0];
  if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

  let customemoji = Discord.Util.parseEmoji(emoji);

  if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
          `${Link}`,
          `${name || `${customemoji.name}`}`
      ).catch(error => {
          console.log(error)
      })
      const Added = new Discord.MessageEmbed()
          .setTitle(`Emoji Added`)
          .setColor(`#9b6dff`)
          .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
          .setDescription(
              `**Emoji Has Been Added!** | **Name:** \`${name || `${customemoji.name}`}\` | **Preview:** [Click Me](${Link})`
          );
          
      return message.channel.send(Added).catch(e => {
          console.log(e)
      })
  } else {
      let CheckEmoji = parse(emoji, {
          assetType: "png"
      });
      if (!CheckEmoji[0])
          return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
          `You Can Use Normal Emoji Without Adding In Server!`
      );
  }






  }}