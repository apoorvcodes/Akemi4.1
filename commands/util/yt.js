const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports =
{
name: "yt",
description: "",
usage: "",
enabled: true,
aliases: ['youtube'],
memberPermissions: [],
botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
nsfw: false,
cooldown: 3000,
ownerOnly: false,
  args: true,     async execute(client, message, args, data) {
    async function AsyncFunc(message, args) {
      const search = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          args.slice(0).join(" ")
        )}&order=relevance&type=video&key=${process.env.GOOGLE_KEY}`
      ).then((response) => response.json());

      if (search.error) {
        if (search.error.message) {
          const Embed = new MessageEmbed()
            .setTitle(`Error ${search.error.code}!`)
            .setDescription(`\`${search.error.message}\``)
            .setColor("RED");
          console.log(`${search.error.code}:\n${search.error.message}`);
          return message.channel.send(Embed);
        }
      }

      const Embed = new MessageEmbed()
        .setTitle("Results")
        .setColor(0xff0000)
        .addFields(
          {
            name: "Author",
            value: search.items.map((v) => v.snippet.channelTitle),
            inline: true,
          },
          {
            name: "Title",
            value: search.items.map((v) => v.snippet.title),
            inline: true,
          }
        )
        .setFooter("Say the number that corresponds to a result to send it.");
      message.channel.send(Embed).then((optionsMessage) => {
        const messageAuthor = message.author;
        function AwaitResponse() {
          if (timeUp) {
            return;
          } else {
            message.client.once("message", (message) => {
              if (message.author != messageAuthor) return AwaitResponse();

              const matches = message.content.match(/(\d+)/);
              if (matches) {
                if (matches[0] <= search.items.length) {
                  message.channel
                    .send(
                      `https://www.youtube.com/watch?v=${
                        search.items[matches[0] - 1].id.videoId
                      }`
                    )
                    .then(() => {
                      optionsMessage.delete();
                    });
                } else return AwaitResponse();
              } else return AwaitResponse();
            });
          }
        }
        AwaitResponse();
      });
    }
    let timeUp = false;
    setTimeout(function () {
      timeUp = true;
    }, 60000);
    AsyncFunc(message, args);
  },
};