const { Message, Client , MessageEmbed , MessageActionRow ,  MessageButton } = require('discord.js')
module.exports = {
name: 'eval', 
description : 'Jalankan Code Di Bot',
/**
*
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client, message, args) => {
    if(!message.author.id === client.config.dev) return message.reply('Gabisa Bro Gabisa Maksa amat')
    const code = args.join(" ")
    try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
        let token = client.config.token.replace(/\./g, "\.")
        let re = new RegExp(token, 'g') 
        ev = ev.replace(re, "*R-eD-Ac-Te-D-*");
        message.channel.send("**Input:**```js\n"+code+"```**Eval:**```js\n"+ev+"```")
        } catch(err) {
            message.channel.send('```js\n'+err+"```")
        }
    }
}
