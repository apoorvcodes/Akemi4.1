const Discord = require('discord.js')

module.exports = {
  name: "eval",
  description: "",
  usage: "",
  enabled: true,
  aliases: ["evl"],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: true,
  
      if(message.author.id !== "786077329377853460") return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send((evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
      }
    
     
    


  }}
