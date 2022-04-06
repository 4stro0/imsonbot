const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
const moment = require('moment')
module.exports = {
name: 'whois', 
description : 'Shows User Information',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member || message.author

    message.reply({
        embeds : [
            new MessageEmbed()
            .setTitle(`${member.displayName} Information`)
            .addFields([
                {
                    name: 'Nama',
                    value: `<@${message.author.id}>`,
                    inline: true
                },
                {
                    name: 'ID',
                    value: message.author.id,
                    inline: true
                },
                {
                    name: 'Dibuat Pada',
                    value: moment(member.createdTimestamp).format('DD/MM/YYYY'),
                    inline: true
                },
                {
                    name: 'Bergabung Pada',
                    value: moment(member.joinedTimestamp).format('DD/MM/YYYY'),
                    inline: true
                },
                {
                    name: 'Permissions',
                    value: `${member.permissions.toArray().map(p=>`\`${p}\``).join(", ")}`
                },
            ])
            .setThumbnail(member.displayAvatarURL())
        ]
    })
        },
};