const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
module.exports = {
name: 'ban', 
description: 'Ban Members',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply('Kamu Tidak Bisa Menggunakan Ini!')
    const target = message.mentions.members.first()
    const reason = args[1]
    
    
    if(!target){
        message.reply('Tag User Yang Kamu Mau Ban')
        if(target.roles.highest.position >= message.member.roles.highest.position) return message.reply('Kamu Ga Bisa Ban Dia!')
    }
    try {

        if (target) {
            await target.ban({
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
        message.reply(`Kamu Harus Menempatkan Role Ku Lebih Tinggi Dibanding <@${target.id}> \n Atau Kamu Tidak Memberi Ku \`BAN_MEMBERS\` Permissions`)
    }
},
};