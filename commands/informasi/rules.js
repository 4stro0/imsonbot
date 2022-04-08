const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'rules', 
description : 'Peraturan Server',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    message.reply({ embeds: [
        new MessageEmbed()
        .addFields( [
          {  name: "Dilarang Toxic", value: "Dilarang Toxic Dalam Hal Menghina , Mengejek , Rasis , Sara , Body Shaming , Boleh Berkata Kasar Asal Jan Berlebihan"},
          { name: "Dilarang Ping Pemilik Server Dan Developer Bot" ,value: "2 Role Itu Mempunyai Tugas Yang Banyak Jangan Ping Dia Untuk Hal Yang Tak Berguna"},
          {name : "Dilarang Spam" , value: "Gausah Spam , Itu tidak keren"},
          { name: "Patuhi Discord TOS" , value: "discord.com/terms"},
          { name: "Dilarang Mempromosikan Server Lain" , value: "Dilarang Mempromosikan Server Lain Atau Mengirim Link" },
          { name: "Jika Ingin Bertanya Tanyakan Pada Helper" , value: `Tanya Helper Di Channel <#961134139027890196>` }
        ])
        .setTitle("Rules")
        .setColor('BLUE')
        .setTimestamp()
    ] })
}
}