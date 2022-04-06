const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
module.exports = {
name: 'membercount', 
description : 'Show The Member Count',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    try {
        await message.guild.members.fetch();
          message.reply({embeds: [new MessageEmbed()
          .setAuthor("Informasi Member : " +  message.guild.name, message.guild.iconURL({
            dynamic: true
          }), "https://clan.milrato.eu")
          .addField("  Total User ", "😀 \`" + message.guild.memberCount + "\`", true)
          .addField("  Manusia", "👤 \`" + message.guild.members.cache.filter(member => !member.user.bot).size + "\`", true)
          .addField(" Bot", "🤖 \`" + message.guild.members.cache.filter(member => member.user.bot).size + "\`", true)
      
          .setTimestamp()
        ]});
      } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.reply({embeds: [new MessageEmbed()
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.message ? String(e.message).substr(0, 2000) : String(e).substr(0, 2000)}\`\`\``)
        ]});
      }
        },
};