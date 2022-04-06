const { WelcomeChannel, MessageEmbed } = require('discord.js')
const client = require('../index')

client.on('guildMemberAdd' , async(message) => {
    const welcome = client.channels.cache.get('960111692858155058')

    welcome.send(`Haloooo Selamat Datang <@${message.user.id}> Semoga Betah Ya :D`)
})
