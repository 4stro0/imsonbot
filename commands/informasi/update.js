const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'update', 
description : 'Melihat Apa Yang Baru',
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
            .setTitle('Update')
            .addFields([
                { name: '1.seberapa' , value: 'Seberapa?' },
                { name: "2.kapan" , value: "Kapan hal itu terjadi?" },
                { name: '3.apakah', value : "apakah akan terjadi?" }
            ])
        ]
    })
}
}