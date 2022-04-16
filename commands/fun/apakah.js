const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'apakah', 
description : 'mungkin itu terjadi?',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const kapan = args.join(" ")
    if(!kapan) return message.reply('Masukan Kondisi')
    function random_item(segini)
    {
          
        return segini[Math.floor(Math.random()*segini.length)];
             
    }
    const segini = ['mungkin' , "iya" , "gatau" , "gak"]
    message.reply(random_item(segini))
    
}
}