const Discord = require('discord.js')

  const  AME_API = ('bb03f373caa534fcfcbaeae177a65134f44a6e57ba7a7b098be273867b376d8a677ddae3c23c6ded4fec8288573945e8c3483689deb13f229376ad4b5b60231d')
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(AME_API);


module.exports = {
  name: "challanger",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["smash"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {

    let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;
    let m = await message.channel.send("<a:Loading:799112970633740288>**Please Wait...**");
    let buffer = await AmeAPI.generate("challenger", { url: User.user.displayAvatarURL({ format: "png", size: 2048 }) });
   
    let attachment = new Discord.MessageAttachment(buffer, "mission.png");
    m.delete({ timeout: 4000 });
    message.channel.send(attachment);





//owo//

  }}