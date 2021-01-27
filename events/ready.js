module.exports = async(client) => {
try {
  setInterval(function() {
    const activities = [`${client.users.cache.size} users | ${client.guilds.cache.size} servers` ];
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(activity, { type: "WATCHING" });
	}, 5000);
  client.logger.ready(`${client.user.tag} is now up and running!`);

} catch (e) {
    console.log(e);
}

};
//in ${client.guilds.cache.size} servers | Shard #0`  , ` with ${client.users.cache.size} users `
