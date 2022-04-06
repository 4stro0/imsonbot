const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'withdraw', 
description : 'Ambil Koin Mu Dari Rekening',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const amount = args[0]
    const balance = eco.bank.fetch(message.author.id, message.guild.id)

    if (!amount) return message.channel.send('Masukan Nominal.')
    if (isNaN(amount)) return message.channel.send('Aduh Masszzeee Ini Mah Bukan Angka.')
    if (amount > balance) return message.channel.send(`Jangan Nipu Lah Kau Gada Sebanyak Itu.`)

    client.eco.balance.add(amount, message.author.id, message.guild.id)
    client.eco.bank.subtract(amount, message.author.id, message.guild.id)

    message.channel.send(`Berhasil Memesukan **${amount}** Koin Ke Rekening Mu!`)
    
}
}