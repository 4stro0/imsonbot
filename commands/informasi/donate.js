const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'donate', 
description : 'Donate Owner',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    message.reply({
        embeds: [
            new MessageEmbed()
            .setDescription('Donate Owner Untuk Mendapatkan update yang lebih banyak lagi , dan jangan lupa suggestikan ide mu supaya developer makin semangat!!\n https://trakteer.id/imson-t4mv4n')
        ]
    })
}
}