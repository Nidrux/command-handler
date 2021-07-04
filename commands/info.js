module.exports = {
	name: 'info',
	description: 'Wow, so this is how you use embeds :o',
    permission: 'ADMINISTRATOR',
    onlyGuild: true,
    channel: '861251403469291521',
	execute(client, message, args) {
		const { MessageEmbed } = require('discord.js');
        const { colors: { primary } } = require('../config.json');
        let embed = new MessageEmbed()
        .setColor(primary)
        .setDescription(this.description);
        message.reply(embed);
	},
};