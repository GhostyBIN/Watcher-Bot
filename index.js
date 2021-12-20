const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, Discord} = require('discord.js');
const { token } = require('./config.json');
const config = require('./config.json');
const chalk = require('chalk');
const os = require('os-utils');
const db = require('rethinkdb');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//PRESENCE
const presence = require('./PRESENCE/presence.js');

//COMMANDS
const ping = require('./BOT/COMMANDS/ping.js');
const help = require('./BOT/COMMANDS/help.js');
const invite = require('./BOT/COMMANDS/invite.js');
const status = require('./BOT/COMMANDS/status.js');


client.once('ready', () => {
	presence(Discord, client, config);
    setInterval(() => {
        presence(Discord, client, config);
    }, 15000);
	db.connect({ 
		host: 'localhost', 
		port: '28015', 
		db: 'Watcher'}
	, function(err, conn) {
		global.conn = conn;
		if(err)console.log(chalk.red(err));
		console.log(chalk.grey('[' + chalk.cyan('DB') + ']Logged in to Database: ' + chalk.cyan(conn.db) + ' Address: ' + chalk.cyan(conn.host + ':' + conn.port)));
	});
	console.log(chalk.grey('[' + chalk.red('LOGIN') + ']Logged in as: ' + chalk.red(client.user.tag)));
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;


	if (commandName === 'ping') {
		ping(MessageEmbed, interaction, client);
	} else if (commandName === 'help') {
		help(MessageEmbed, interaction);
	} else if (commandName === 'invite') {
		invite(MessageEmbed, interaction);
	} else if (commandName === 'status') {
		status(MessageEmbed, interaction, client, os);
	} 
});

client.login(token);