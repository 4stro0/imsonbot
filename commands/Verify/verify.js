const { MessageActionRow } = require('discord.js')
const { Message, Client , MessageEmbed  ,  MessageButton } = require('discord.js')
module.exports = {
name: 'verify', 
description : 'Kirim Verify',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Coba Situ Liat Role Nya , Admin Atau Bukan Nih 😅☝')
    const role = message.guild.roles.cache.find(role => role.name === "Peserta Bapack")
    const roleEmoji = "✅"


        const verify = await message.channel.send({
            embeds: [
                new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Verifikasi')
        .setDescription(`Pencet ✅ Untuk Di Verifikasi`)
            ]
        }) 

        verify.react(roleEmoji)

        client.on('messageReactionAdd', async(reaction , user) => {
            if(reaction.message.partial) await reaction.fetch()
            if(reaction.partial) await reaction.message.fetch()
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == 961671462731796570) {
                if(reaction.emoji.name === roleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role)
                }
            } else {
                return;
            }
        })
}
}