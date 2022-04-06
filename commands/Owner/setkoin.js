const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'setkoin', 
description : 'set koin user',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.author.id === client.config.dev) return message.reply('Ga Bisa lu pake ini bdo')

    const member = message.mentions.members.first()
        if (!member) return message.channel.send('Sapa Yang Lu Mau Set Koin Nya.')
        if (!args[1]) return message.channel.send('Berapa tod???.')
        eco.balance.set(args[1], member.id, message.guild.id)
        message.channel.send(`Berhasil Sekarang Koin ${member} berjumlah **${args[1]}**.`)
}
}