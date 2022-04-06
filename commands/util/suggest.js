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
    const suggest =  args.join(" ")
    if(!suggest) return message.reply('Masukan Ide Mu!')

   
    
      const send = await   channel.send(`----------------------- \nNew Suggestion!! \n -------------------------\n  \`${suggest}\`\n\n~${message.author}`)
      send.react('👍')
      send.react('👎')
}
}