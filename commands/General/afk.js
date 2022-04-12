const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const db = require('quick.db')
module.exports = {
name: 'afk', 
description : 'Setting Sebuah Afk',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        
        message.reply({ embeds : [
            new MessageEmbed()
            .setDescription(`Kamu Telah Afk\n**Alasan :** ${content}`)
        ] })
}
}