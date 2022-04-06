const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')

module.exports = {
name: 'gamble', 
description : 'Gandakan Uang Mu !! (Judi)',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const pilihan = args[0]
    if(!pilihan) return message.reply('Masukan Taruhan Mu')

    if(pilihan > await client.eco.balance.fetch(message.author.id , message.guild.id)) return message.reply('Lu Gada Koin Segitu Kocak , Nipu Anjer')
    client.eco.balance.subtract(pilihan , message.author.id , message.guild.id) 
    function random_item(items)
    {
          
        return items[Math.floor(Math.random()*items.length)];
             
    }
    
    var items = [0 , pilihan*2];
        if(random_item(items) === 0) return message.reply(`Kamu Kalah dengan gweh , sisa koin lo ${await client.eco.balance.fetch(message.author.id , message.guild.id)}`)
        message.reply(`Lu Menang Coy , Uang Lu Sekarang ${await client.eco.balance.fetch(message.author.id , message.guild.id)}`);

        client.eco.balance.add(random_item(items) , message.author.id , message.guild.id)
    
 }
}