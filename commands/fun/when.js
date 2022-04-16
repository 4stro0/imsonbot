const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'when', 
description : 'Kapan itu terjadi?',
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
    const segini = ["nanti" , "besok" , "gatau" , "bentar lagi" , "gak akan pernah" , "gak akan terjadi" , "yo ndak tau kok tanya saya" , "ntah", "kiamat mungkin" , "tanya sama dukun", "minggu depan" , "100 tahun lagi" , "bulan depan" , "tahun depan"]
    message.reply(random_item(segini))
    
}
}