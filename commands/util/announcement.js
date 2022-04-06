const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const dev = require('../../config.json')
module.exports = {
name: 'announcement', 
description : 'Ingpo Masseh',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.author.id === dev) return message.reply('Maaf Cuma Imson Dan Staff Lain Yang Bisa Menggunakan Ini')

    const info = args.join(" ")
    if(!info) return;

    client.channels.cache.get('960111492806639618').send('@everyone ' + info)
}
}