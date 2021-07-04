module.exports = {
	name: 'ping',
	description: 'Ping!',
    permission: 'ADMINISTRATOR',
    onlyGuild: false,
	execute(client, message, args) {
        let ping = Date.now() - message.createdTimestamp + 'ms';
		message.channel.send(ping);
	},
};