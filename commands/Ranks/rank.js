const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
const { leveling } = require('../../index.js')
module.exports = {
name: 'rank', 
description : 'Lihat Level Mu',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {

        const member = message.mentions.members.first()?.user || 
        message.guild.members.cache.get(args[0])?.user || 
        message.guild.members.cache.find(x => x.user.username.toLowerCase() == args.join(' ').toLocaleLowerCase())?.user || 
        message.guild.members.cache.find(x => x.displayName.toLowerCase() == args.join(' ').toLocaleLowerCase())?.user || 
        message.author

        const isOnTheServer = member ? '\n' : '\nNot on the server.\n'

        const {
            level, xp, maxXP,
            totalXP, difference, userData
        } = leveling.ranks.get(member.id, message.guild.id)

        if (!userData && !member) return message.channel.send('Cannot find the specified user!')
        return message.channel.send(`**${userData.tag}**${isOnTheServer}**------------------------**\nLevel: **${level || 1}**\nXP: **${xp || 0}/${maxXP || 300}**\nTotal XP: **${totalXP || 0}**\nXP until the next level: **${maxXP - xp}**`)
    
}
}