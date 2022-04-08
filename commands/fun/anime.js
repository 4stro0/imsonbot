const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const request = require('node-superfetch');
module.exports = {
name: 'anime', 
description : 'Memperlihatkan Informasi Anime',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const query = args.join(' '); //After entering the name
    try {
		const { text } = await request //From here, the bot will start searching for your request 
			.get('https://kitsu.io/api/edge/anime') //To check the bot from kitsu.io api 
			.query({ 'filter[text]': query }); //The bot starts collecting the search results
		const body = JSON.parse(text); //after done let's check 
		if (!body.data.length) return message.reply('Could not find any results.'); //If your search is missing or wrong, it does not support most languages
		const data = body.data[0].attributes; //Let's extract the data
		message.reply({ embeds : [
            new MessageEmbed() //Let's see the search results
			.setURL(`https://kitsu.io/anime/${data.slug}`) //let's show your search results from data
			.setThumbnail(data.posterImage ? data.posterImage.original : null) //your anime image 
			.setTitle(data.canonicalTitle)
			.setDescription(data.synopsis) //Here it will give you anime description
			.addField('❯ Type', `${data.showType} - ${data.status}.`, true) //To tell you its type, manga, movie or anime; With his statuts if it is continuous or finished
			.addField('❯ Episodes', `${data.episodeCount}.` || '???', true) //To tell you how many episodes it has, it may not tell you the number of episodes of most of the episodes if their episodes are not specified in total
			.addField('❯ Start Date', `${data.startDate}.` ? new Date(data.startDate).toDateString() : '???', true) //When did it started
			.addField('❯ End Date', `${data.endDate}.` ? new Date(data.endDate).toDateString() : '???', true) //When did it ended
        ]})
	} catch (err) {
		return message.reply(`ops, something is wrong: \`${err.message}\`. please try again later !`); //Let's check if your search has a bug
	}
}
}