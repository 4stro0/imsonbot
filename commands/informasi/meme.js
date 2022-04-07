const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
name: 'meme', 
description : 'Memperlihatkan meme yang agak cringe',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json =>{
      
      message.reply({
          embeds: [
            new MessageEmbed()
            .setTitle(json.title)
            .setImage(json.url)
          ]
      })
       })
        
    }
}