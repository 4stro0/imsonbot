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
                { name: '1.how' , value: 'Seberapa?' },
                { name: "2.when" , value: "Kapan hal itu terjadi?" },
            ])
        ]
    })
}
}