# Command handler


## Installation

Download files from this repository.
Open your command line and type `npm i` to install all necesarry node-modules.

Adding command can be done trough creating a new file inside of the commands folder!

Repositories used: 
[discord.js](https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------)
[dotenv](https://www.npmjs.com/package/dotenv)
[log-timestamp](https://www.npmjs.com/package/log-timestamp)

## Options

| Option       | value    |  type    | 
| -------------| :------------:| :------------:| 
| name | your choosen name | string |
| description | description | string |
| permission | discord permission [list of permissions](https://discord.com/developers/docs/topics/permissions) | string |
| onlyGuild | true / false| boolean |
| channel | channel id | string |

#### onlyGuild
Set the command to only be used inside of a guild.

#### permission
Only let the command be used with people with the given permission. This will automaticly set the command to guild only
so the guildOnly option is not required when setting a permission.

#### channel
Only let the command be used within a certain channel. This will automaticly set the command to guild only
so the guildOnly option is not required when using a specific channel.

### Example command
```js
  module.exports = {
    name: 'ping',
    description: 'Ping!',
    permission: 'ADMINISTRATOR',
    onlyGuild: false,
    channel: 'channel id'
    execute(client, message, args) {
          let ping = Date.now() - message.createdTimestamp + 'ms';
          message.channel.send(ping);
    },
  };
```
