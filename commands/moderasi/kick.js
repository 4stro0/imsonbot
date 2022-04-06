const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
module.exports = {
name: 'kick', 
description: 'Kick Members',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    if(!message.member.permissions.has('KICK_MEMBERS')) return message.reply('Kamu Tidak Bisa Menggunakan Command Ini!')
    const target = message.mentions.members.first();
    const reason = args[1]

    if(target.roles.highest.position >= message.member.roles.highest.position) return message.reply('Kamu Gabisa Kick Dia!!')

    if(!target){
        message.reply('Tag User Yang Mau Kamu Kick')
    }
    try {

        if (target) {
            await target.kick({
                reason: reason
            })
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription(`**Nama**: <@${target.id}>\n\n**Moderator**: <@${message.author.id}>\n\n**Alasan**: \`${reason || 'No Reason'}\` `)
                ]
            })
        }
    } catch(err){
        message.reply(`Kamu Harus Menempatkan Role Ku Lebih Tinggi Dari <@${target.id}> \n Atau Kamu Tidak Memberi Ku  \`KICK_MEMBERS\` Permissions`)
    }
},
};