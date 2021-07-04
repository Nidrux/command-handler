module.exports.handler = (client, message) => {
    const { prefix } = require('./config.json'); // Destructure config.json to get the prexix
    const { error } = require('./components/error')
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    let command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    command = client.commands.get(command);
    function runCommand() {
        try {
            command.execute(client, message, args);
        } catch (error) {
            error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
    if(message.channel.type === 'dm') {
        if(command.onlyGuild) return  message.reply('This is a guild only command!');
        if(command.permission) return  message.reply('This command requires guild specific permissions\n Guild:' + message.guild);
        if(command.channel) return  message.reply('This is command is bound to a specific channel');
    }
    if(command.permission && !message.member.hasPermission(command.permission)) return message.reply('Insufficient permissions!');
    if(command.channel && message.channel.id != command.channel) return message.reply(`This command can only be used in <#${command.channel}>`)
    runCommand()
}

