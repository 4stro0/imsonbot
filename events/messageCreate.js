const client = require("../index");
const db = require('quick.db');
const antiSwearWords = require("anti-swear-words-packages-discord");
client.on("messageCreate", async (message) => {
    const banneduser = await db.get(`bu`, message.author.id)
    const badword = await db.get('badword' , message.content)
    const owner = client.channels.cache.get('951420963822641162')
    if (
        message.author.bot 
        
    ) return;
    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Status Afk Mu telah dihapus (${info})`)
    }
    //checking for mentions
    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + " Sedang Afk " + " : " + "**" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`) + "**" )
        }else return;
    }else 


        if(!message.guild ||
            !message.content.toLowerCase().startsWith(client.config.prefix)) return;
      
        

      
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
