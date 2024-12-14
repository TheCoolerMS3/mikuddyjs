const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('areyoujavascript')
		.setDescription('is meeksuddy javscacript........'),
	async execute(interaction) {
		await interaction.reply('I AMS THE JAVASCRIP!!!!!!!!!!!!!!');
	},
};
