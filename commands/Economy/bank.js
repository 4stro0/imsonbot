const Economy = require('discord-bot-eco')
const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'bank', 
description : 'Liat Koin Mu Di Rekening',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.author
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel('Tarik Koin')
        .setStyle('SUCCESS')
        .setCustomId('btntarik')
    )
    const bank = client.eco.bank.fetch(member.id, message.guild.id)
    const balance = client.eco.balance.fetch(member.id , message.guild.id)

    message.reply({ embeds: [
        new MessageEmbed()
    .setTitle('Uang Anda')
    .setDescription(`Anda Punya ${bank} Koin Di Dalam Rekening`)
    ], components: [row] 
})




    const filter = (interaction) => {
        if(interaction.user.id === message.author.id) return true;
        return interaction.followUp({ content: 'Kamu Tidak Bisa Melakukan Itu!' , ephemeral: true })
    }

    const collector = message.channel.createMessageComponentCollector({
        filter,
        max: 1
    })

    collector.on('end' ,async (ButtonInteraction) => {
        const id = ButtonInteraction.first().customId;

        if(id === "btntarik") {
            if(bank === 0) return ButtonInteraction.first().reply({ content: 'Anda Tidak Memiliki Koin Di Rekening Sama Sekali' })
            client.eco.balance.add(bank, member.id, message.guild.id)
            client.eco.bank.subtract(bank, member.id, message.guild.id)
            ButtonInteraction.first().reply({ content: `Semua Koin Telah Ditarik` })
        }
    })
}
}