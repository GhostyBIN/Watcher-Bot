module.exports = async function help(MessageEmbed, interaction){
    const embed = new MessageEmbed()
					.setColor('#006fdd')
					.setTitle('HELP MENU')
					.setDescription('**COMMANDS** \n \n `' + 
					'/' + 'help` | The general help menu for Watcher' + '\n \n `' + 
					'/' + 'status` | Get the status of the Watcher bot.' + '\n \n `' + 
    				'/' + 'invite` | Get the invite link for the bot.')
		await interaction.reply({ embeds: [embed]});
}