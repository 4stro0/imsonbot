const client = require('../index')

client.on('guildMemberRemove', async(message) => {
    const goodbye = client.channels.cache.get('960111692858155058')
    goodbye.send(`Yah Kok Keluar <@${message.user.tag}> `)
})