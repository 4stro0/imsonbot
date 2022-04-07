const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const ly= require('@jeve/lyrics-finder')
module.exports = {
name: 'lyric',
aliases : ["ly"], 
description : 'Menampilkan Lirik Lagu',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const songName = args.join(' ')

    if(!songName) return message.reply('Enter The Music Title')

    ly.LyricsFinder(songName).then(ly => {
        message.reply({
            embeds : [
                new MessageEmbed()
                .setTitle(`${songName} Lyrics`)
                .setDescription(ly)
            ]
        })
    })
}
}