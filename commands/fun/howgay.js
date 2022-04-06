const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'howgay', 
description : 'melihat seberapa gay',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const mention = message.mentions.members.first() || message.author
    const gay = Math.floor(Math.random() * 100)
    if(gay === 100) return message.reply(`${mention} Dia ${gay}% Gay , Anjir Jauhin Cuk Gay Kali Dia`)
    if(gay < 100 ) return message.reply(`${mention} Dia ${gay}% Gay , Mengandung Unsur Gay Mnding Jauhin Dah`)
    if(gay < 50) return message.reply(`${mention} Dia ${gay}% Gay , Sedikit Gay , Kurangin Nafus Mu Kawan`)
    if(gay < 10) return message.reply(`${mention} Dia ${gay}% Gay  , Jangan Sampe Dia Tercemari Lebih Dalam`)
    if(gay === 0) return message.reply(`Syukurlah , ${mention} Dia Tidak Gay Sama Sekali`)
}
}