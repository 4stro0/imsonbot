const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'givekoin', 
description : 'memberi member koin',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const dev = require('../../config.json')
    if(!message.author.id === dev) return message.reply('Hanya Dev Dan Owner Yang bisa menggunakan ini!')
    
    const amount = args[1]
    const member = message.mentions.members.first()
    

    if(!amount) return message.reply('Masukan Nominal')
    if(!member) return message.reply('Tag member')

    client.eco.balance.add(amount , member.id, message.guild.id)
    message.reply(`Kamu Telah memberi ${member} , ${amount} koin`)
}
}