const { Message, Client , MessageEmbed , MessageActionRow , MessagButton, GuildMemberManager } = require('discord.js')
module.exports = {
 name: 'unban',
description: 'Unban Member', 
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    const id = args[0]
    const reason = args[1]

    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply('Kamu Gak Bisa Menggunakan Ini!')

    if (!id) {
        message.reply('Enter The ID')
    }
    try {
        if(id){
            message.guild.members.unban(id , { reason: reason })
            message.reply(`<@${id}> **Telah Di Unbanned**\n**Moderator**: ${message.author}`)
        }
    } catch(err) {
        message.reply('Aku Tidak Bisa Melakukan Itu')
    }
},
};