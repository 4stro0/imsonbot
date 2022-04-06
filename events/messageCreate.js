const client = require("../index");
const db = require('quick.db');
const antiSwearWords = require("anti-swear-words-packages-discord");
client.on("messageCreate", async (message) => {
    const banneduser = await db.get(`bu`, message.author.id)
    const badword = await db.get('badword' , message.content)
    const owner = client.channels.cache.get('951420963822641162')
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;
        if(message.author.id === banneduser) return message.reply('You Has Been Banned From The Bot , You Cannot Use The Command Forever !!')
      
        

      
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);


    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    try { 

        await command.run(client, message, args);

    } catch (error) {
        console.log(error)
    }
    //xp leveling

    
});
