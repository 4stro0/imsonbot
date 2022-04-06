const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const config = require('../../config.json')
module.exports = {
name: 'take', 
description : 'Ambil Uang User',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.author.id === config.dev) return message.reply('Cuma Dev Dan Owner Yang Bisa Menggunakan Ini !')

    const amount = args[1]
    const member = message.mentions.members.first()
    if(!amount) return message.reply('Masukan Nominal')
    const bal = client.eco.balance.fetch(member.id,message.guild.id)
    if(!member) return message.reply('Tag member yang ingin anda ambil koin nya')
    if(amount > bal) return message.reply('Koinya Ga sebanyak itu bre -_-')
    client.eco.balance.subtract(amount, member.id, message.guild.id)
    message.reply(`Berhasil Mengambil ${amount} Koin Dari <@${member.id}>`)
}
}