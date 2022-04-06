
const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const convertMS = require('ms-convert')
module.exports = {
name: 'daily', 
description : 'Ambil Uang Harian Mu',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {

    const timeout = await Economy.getTimeout(message.author.id, "daily")
    const daily = client.eco.rewards.daily(message.author.id, message.guild.id)
    if (!daily.status) return message.channel.send(`Sabar Dikit Oi , Tunggu Dulu Masih Selama Ini \`${daily.value.hours}:${daily.value.minutes}:${daily.value.seconds}\`.`)
    message.reply('Kamu Telah Menerima 10 Koin Di Dompet Mu')
    

}
}