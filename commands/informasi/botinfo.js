const { MessageSelectMenu } = require('discord.js')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'botinfo', 
description : 'Menlihat Info Bot',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const embeds = new MessageEmbed()
    .setDescription(`Bot Ini Dibuat Oleh @naughtysd , dengan pemilik @imson , bot ini dibuat pads ${client.user.createdAt.getFullYear} , ${client.user.createdAt.getMonth} , ${client.user.createdAt.getDay} `)
    message.reply({ embeds: embeds })
}
}