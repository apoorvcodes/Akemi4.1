
const Discord = require("discord.js");
module.exports = {
  name: "close",
  description: "",
  usage: "",
  enabled: true,
  aliases: [''],
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {
   
    
      if(message.channel.name.startsWith('ticket') || message.channel.name.startsWith('giveawaysuggestion')){
        const reason = args.join(" ")
        if(!reason) return message.channel.send('Give a Valid reason for closing the ticket')
    
          message.channel.delete();
      }
      else{message.channel.send("Can Only be used in ticket channel")}




      let channel = message.guild.channels.cache.find((x) => (x.name === "akemi-ticket-logs"))
      const reason = args.join(" ")
      if(!channel) 
        return ;
      
                                                      
      
      let embed = new Discord.MessageEmbed()
      .setAuthor("Ticket closed by: " + message.author.tag, message.author.avatarURL())
      .setTitle(`Reason of closing`)
      .setThumbnail(message.author.avatarURL())
      .setColor(" 9b6dff")
      
      .setDescription(reason)
      .setTimestamp()
      
      
      channel.send(embed).then(m => {
        m.react("<a:redBadge:792301502474879016>")
      
      }).catch(err => {})
      
  
      
      message.channel.send("Sended logs to " + channel).catch(err => {})















    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    













  } 

