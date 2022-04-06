const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton, ButtonInteraction } = require('discord.js')
module.exports = {
name: 'balance', 
description : 'Cek Uang Mu Didalam Dompet',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args , interaction) => {
    const member = message.mentions.members.first() || message.author

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('btnwith')
        .setLabel('Masukan Ke Rekening')
        .setStyle('SUCCESS'),

    )

    const balance = client.eco.balance.fetch(member.id, message.guild.id)
    const bank = await Economy.get(message.author.id , "bank")

    message.reply({
        embeds: [
            new MessageEmbed()
                .setTitle('Uang Anda')
                .setDescription(`Anda Punya ${balance} Koin Di Dalam Dompet`)
        ],
        components: [row]
    })

    const filter = (interaction) => {
        if(interaction.user.id === message.author.id) return true;
        return interaction.reply({ content: 'Kamu Tidak Bisa Melakukan Itu!' , ephemeral: true })
    }

    const collector = message.channel.createMessageComponentCollector({
        filter,
        max: 1
    })

    collector.on('end' ,async (ButtonInteraction) => {
        const id = ButtonInteraction.first().customId;

        if(id === "btnwith") {
            if(balance === 0) return ButtonInteraction.first().reply({ content: 'Anda Tidak Memiliki Koin Sama Sekali' })
            client.eco.balance.subtract(balance, message.author.id, message.guild.id)
            client.eco.bank.add(balance, message.author.id, message.guild.id)
            ButtonInteraction.first().reply({ content: `Semua Koin Telah Dimasukan Ke Rekening` , ephemeral: true })
             } 
        })
}
}