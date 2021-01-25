const Discord = require("discord.js");
module.exports = {
  name: "ticket",
  description: "",
  usage: "",
  enabled: true,
  aliases: ['modmail'],
  memberPermissions: [""],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  nsfw: false,
  cooldown: 3000,
  ownerOnly: false,
     async execute(client, message, args, data) {


    const wmbed = new Discord.MessageEmbed()
  .setTitle('Already a ticket is open')
  .setDescription(`There is a ticket by you already opened in the server`)
  .setThumbnail('https://cdn.discordapp.com/attachments/790800413804462121/791361907859914752/standard_5.gif')
  .setColor('#9b6dff')
          
                  
              let c = message.guild.channels.cache.find((x) => (x.name === `ticket-${message.author.username}`))
              if(c) return message.channel.send(wmbed);
          

  const help = new Discord.MessageEmbed()
  .setTitle('New Modmail Thread Made')
  .setDescription(`Someone needs Help,Dont wory ${message.author} you will be soon helped out by a Admin or Moderator `)
  .setColor('9b6dff')
  .setThumbnail()


message.react('✅');

const server = message.guild;
     console.log("modmail")
    server.channels.create(`ticket-${message.author.username}` , {
      type: 'text',

      permissionOverwrites: [

        {
            id: message.guild.id,
            deny: ['VIEW_CHANNEL']

        },
        {
            id: message.author.id,
            allow:  ['VIEW_CHANNEL']

        }
        
        


        


      ]
     
    


    }).then(channel =>{
        channel.send(help)
        let payembed = new Discord.MessageEmbed()
        .setTitle('Support thread created!')
        .setColor('#9b6dff')
        .setDescription(`Created a new support thread in <#${channel.id}> `)
        .setTimestamp()
          message.channel.send(payembed)
    })
    let chan = message.guild.channels.cache.find((x) => (x.name === "akemi-ticket-logs"))
    
    if(!chan) 
      return ;
    
                                                    
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Ticket opened by: " + message.author.tag, message.author.avatarURL())
    .setTitle(`Help Needed`)
    .setThumbnail(message.author.avatarURL())
    .setColor("#9b6dff")
    
    .setDescription(`All Mods and Admin ${message.author} needs help, please help him Asap in Modmail thred he made`)
    .setTimestamp()
    
    
    chan.send(embed).then(m => {
      m.react("<a:redBadge:792301502474879016>")
    
    }).catch(err => {})
    

    
    message.channel.send("Sent logs to " + chan).catch(err => {})










  }}