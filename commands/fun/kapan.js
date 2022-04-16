const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'kapan', 
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
    const segini = ["nanti" , "besok" , "gatau" , "bentar lagi" , "gak akan pernah" , "gak akan terjadi" , "yo ndak tau kok tanya saya" , "ntah", "kiamat mungkin" , "tanya sama dukun", "minggu depan" , "100 tahun lagi" , "bulan depan" , "tahun depan" , "ntahlah mungkin gak akan" , "gaatau mungkin gaakan aowkaow" , "bentar lagi , tapi tak mungkin" , "tanya terus , gw aja nebak" , "besok , begini tanggapan lesti kejora" , "hmmmm besok?" , "gatau sih ntar kecewa lu ma jawaban gw" , "gatauuuuu" , "afh iyh cuy 😅" , "yanh benerjh 😅" ]
    message.reply(random_item(segini))
    
}
}