const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
const ms = require('ms')
module.exports = {
name: 'timeout', 
description : 'Timeout Members',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    const user = message.mentions.members.first()
    const time = args[1]
    const reason = args[2]

    if(!message.member.permissions.has('MUTE_MEMBERS')) return message.reply('Kamu Tidak Bisa Menggunakan Ini !')

    const timeInMs = ms(time)
    if(!timeInMs) return message.reply('Masukan Berapa Lama Kamu Ingin Meng Timeout Dia')

    user.timeout(timeInMs , reason)
    message.reply(`<@${user.id}> Sudah Di Timeout Selama **${time}** Dengan Alasan \`(${reason})\``)
        },
};