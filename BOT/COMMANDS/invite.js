module.exports = async function invite(MessageEmbed, interaction){
    const embed = new MessageEmbed()
					.setColor('#006fdd')
					.setTitle('CLICK ME TO INVITE THE BOT')
					.setURL('https://discord.com/oauth2/authorize?client_id=920135532602859570&scope=bot+applications.commands&permissions=717259533055')
		await interaction.reply({ embeds: [embed]});
}