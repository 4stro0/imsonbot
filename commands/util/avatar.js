const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
module.exports = {
name: 'avatar',
aliases: "av",
description: 'Show User Avatar', 
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    const avatar = message.mentions.members.first() || message.member;
    message.reply({
        embeds: [
            new MessageEmbed()
            .setImage(avatar.displayAvatarURL({
                dynamic: true,
                size: 512
            }))
        ]
    })
},
};