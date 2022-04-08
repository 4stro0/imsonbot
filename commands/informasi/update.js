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
                { name: '1.Anime' , value: 'Memperlihatkan Informasi Anime' },
                { name: "2.Botinfo" , value: "Memperlihatkan Informasi Dari Bot" },
                { name: "3.Rules" , value: "Memperlihatkan Rules Dari Server" }
            ])
        ]
    })
}
}