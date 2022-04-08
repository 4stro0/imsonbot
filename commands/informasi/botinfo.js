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
    message.reply({ embeds: [
        new MessageEmbed()
        .setTitle('Imson Bot')
        .setDescription(`Bot Ini Dibuat Oleh @naughtysd , dengan pemilik @imson\n Bot Ini Memiliki Fitur Economy Dan Leveling Dan Akan Bertambah seiring waktu`)
        .setColor('BLUE')
    ] })
}
}