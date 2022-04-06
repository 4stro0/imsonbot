const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'work', 
description : 'Berkerja Untuk Mendapatkan Uang !!',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const work = client.eco.rewards.work(message.author.id, message.guild.id)

    if (!work.status) return message.channel.send(`Karakter Mu Cape Lur , Tunggu Dlu \`${work.value.hours}:${work.value.minutes}:${work.value.seconds}\``)
    message.channel.send(`Bagus Kerja mu , Ini Gajimu : **${work.pretty}** Koin `)
}
}