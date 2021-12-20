module.exports = async function ping(MessageEmbed, interaction, client){
    const embed = new MessageEmbed()
					.setColor('#006fdd')
					.setTitle('LATENCY: ' + client.ws.ping + ' MS');
		await interaction.reply({ embeds: [embed]});
}