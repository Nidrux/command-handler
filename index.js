const Discord = require('discord.js');
const fs = require('fs');

const { error } = require('./components/error');
const { handler } = require('./handler');

require('log-timestamp'); 
require('dotenv').config();

const client = new Discord.Client();
client.login(process.env.TOKEN).catch(err => {
    error(err);
})
client.on('ready', (err) => {
    if(err) return error(err);
    console.log(client.user.username);
})
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', (message) => {
    handler(client, message);
})