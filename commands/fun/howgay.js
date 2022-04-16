const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'how', 
description : 'Seberapa?',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const apa = args.join(" ")
    if(!apa) return message.reply('+how [hal yang diperhitungkan]')
    const mention = message.mentions.members.first() || message.author
    const gay = Math.floor(Math.random() * 100)
    message.reply(`${mention} Dia ${gay}% ${apa}`)
}
}