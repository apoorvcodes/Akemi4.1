const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "emojis",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['emoji-list'],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    if (Animated.length > 1024) Animated = "To many to display";
    if (!Animated) Animated = "No Animated emojis";
    if (EmojisAnimated.length > 1024) EmojisAnimated = "To many to display";
    if (!EmojisAnimated) EmojisAnimated = "Nothing";
    if (Emojis.length > 1024) Emojis = "To many to display";
		if (!Emojis) Emojis = "Nothing";
 
    let Embed = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n`
      )
      .setColor(`#9b6dff`);
     message.channel.send(Embed)

      

  }}