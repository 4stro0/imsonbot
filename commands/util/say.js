const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'say', 
description : 'Say Something',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const word = args.join(" ")

    if(!word) return;

    message.channel.send(word)
    message.channel.bulkDelete(1)
}
}