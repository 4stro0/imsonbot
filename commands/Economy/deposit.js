const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const Economy = require('discord-bot-eco')
module.exports = {
name: 'deposit', 
description : 'Taruh Uang Mu Di Rekeing',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const amount = args.join(" ")
    if (!amount) return message.reply('Masukan Nominal')

    if(isNaN(amount)) return message.reply('Hmm.. Itu Bukan Angka')

    const bal = client.eco.balance.fetch(message.author.id , message.guild.id)
    if(bal < amount) return message.reply('Tch , Watashi Tidak Bisa Ditipu , Kamu Tidak Punya Uang Sebanyak Itu!!')

    client.eco.bank.add(amount, message.author.id, message.guild.id)
    client.eco.balance.subtract(amount, message.author.id, message.guild.id)

    
    
    message.reply(`Kamu Berhasil Memasukan Koin Mu Sebanyak ${amount} Di Rekening`)
}
}