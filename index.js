const fs = require('fs');
const { Client, Intents } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
});

const Discord = require('discord.js');
client.discord = Discord;
client.config = config;

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.execute(...args, client));
    console.log('');
};

client.login(require('./config.json').token);