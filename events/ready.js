module.exports = async(client) => {
try {

  client.user.setPresence({ activity: { name: `${client.guilds.cache.size} servers | ${client.users.cache.size} users `, type: "WATCHING" }, status: "idle" });
  client.logger.ready(`${client.user.tag} is now up and running!`);

} catch (e) {
    console.log(e);
}

};
//in ${client.guilds.cache.size} servers | Shard #0`  , ` with ${client.users.cache.size} users `