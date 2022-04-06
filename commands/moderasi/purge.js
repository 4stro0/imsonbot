const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'purge', 
description : 'Delete Message',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const amount = args[0]

    if (isNaN(amount)) return message.reply('Enter The Number')

    if(amount < 2 || amount > 500) return message.reply('you need to input a number between 2 and 500.');

    message.channel.bulkDelete(amount , true)
    message.channel.send(`Dihapus \`${amount}/${amount}\` Message`)
}
}