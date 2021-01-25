
const fetch = require("node-fetch").default;
module.exports = {
    name: "docs",
    description: "",
    usage: "",
    enabled: true,
    aliases: ["djs"],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    nsfw: false,
    cooldown: 3000,
    ownerOnly: false,
   
     async execute(client, message, args, data) {
    let [query, branch] = args;

    if (!query) return message.channel.send("Please include a search query!");
    if (!branch) branch = "master";

    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(json => {
            if (!json) return message.channel.send("Not found!");

            message.channel.send({ embed: json });
        })
        .catch(() => {
            message.channel.send("Couldn't fetch docs!");
        })

    }
}