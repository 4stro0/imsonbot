
const { Message, Client , MessageEmbed , MessageActionRow , MessagButton , Permissions } = require('discord.js')
module.exports = {
name: 'poll',
description: 'Make A Poll' ,
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    const mod = message.author

    if (!message.member.permissions.has("ADMINISTRATOR")) {
        message.reply('You Dont Have `ADMINITRATION` Permissions')
    } else {
        const channel = message.mentions.channels.first()
        const poll = args[1]

        if (!channel) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setDescription('Mention The Channel')
                ]
            })
            
        }
        if (!poll) {
            return message.reply(
                {
                    embeds: [
                        new MessageEmbed()
                        .setDescription('Enter The Message')
                    ]
                }
            )
            
        }
        
        if (channel) {
            const embed =  new MessageEmbed()
            .setTitle('Poll Baruu')
            .setDescription(`\`${poll}\``)
            .setThumbnail(message.guild.iconURL())
            .setColor('#00000')
            const pollsend = await channel.send({
                embeds: [embed]
            })
            pollsend.react('👍')
            pollsend.react('👎')
        }
    }
},
};