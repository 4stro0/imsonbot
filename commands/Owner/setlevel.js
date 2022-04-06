const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const { config, leveling } = require('../..')
module.exports = {
name: 'setlevel', 
description : 'Set Level User',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.author.id === config.dev) return message.reply('Kocag Gemink Beliau Satu Ini , Padahal Category Nya Khusus Owner')
    const member = message.mentions.members.first()
    const amount = args[1]

    if(!member) return message.reply('Sapa Yang Kau Mau Set Level Nya')
    if(!amount) return message.reply('Berapa Level??')

    leveling.levels.set(amount , member.id , message.guild.id)

    message.reply(`Kamu Telah Meng-Set Level ${member} Ke Level ${amount}`)
}
}