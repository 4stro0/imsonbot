const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'suggest', 
description : 'Suggestikan Ide Gila Mu!!',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const channel = client.channels.cache.get("961374623155507320")
    const suggest = args.join(" ")
    if(!suggest) return message.reply('Masukan Suggesti Anda')

     const embed = new MessageEmbed()
        .setTitle(`From ${message.author.tag}`)
        .setDescription(suggest)
        message.reply(`Suggested! check <#961374623155507320>`)
    
        const msw = await channel.send(embed)

        msw.react('👍')
        msw.react('👎')
}
}