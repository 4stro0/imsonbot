const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const { leveling, config } = require('../..')
module.exports = {
name: 'givelevel', 
description : 'Memberi User Level',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.author.id === config.dev) return message.reply('Lu Pikir Gw Nyediain Fitur Cheat Apa ? stupid.')
    const member = message.mentions.members.first()
    const amount = args[1]

    if(!member) return message.reply('Sapa Yang Mau Kau Kasih?')
    if(!amount) return message.reply('Berapa Level?')

    leveling.levels.add(amount , member.id , message.guild.id)
    message.reply(`Kamu Telah Memberikan ${amount} Level Kepada ${member}`)
}
}