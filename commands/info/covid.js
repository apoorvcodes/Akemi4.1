const fetch = require('node-fetch');
const Discord = require('discord.js')

module.exports = {
    name: "covid",
    description: "",
    usage: "",
    enabled: true,
    aliases: ['corona'],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
     async execute(client, message, args, data) {
    
        //Credit to Sarastro#7725 for the command :)
        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)
      
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some specification (ex: -covid all || -covid Canada)')
        .setTimestamp()
      
        if(!args[0]) return message.channel.send(noArgs);
      
        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()
      
                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
      .setColor("#9b6dff")
      .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()
      
                const cobed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
      .setColor("#9b6dff")
      .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
                message.channel.send(cobed)
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
       


  }}