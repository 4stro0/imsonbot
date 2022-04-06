const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
const moment = require('moment')
module.exports = {
name: 'serverinfo', 
description : 'Show Server Info',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    try {
        function trimArray(arr, maxLen = 25) {
          if (arr.array().length > maxLen) {
            const len = arr.array().length - maxLen;
            arr = arr.array().sort((a, b) => b.rawPosition - a.rawPosition).slice(0, maxLen);
            arr.map(role => `<@&${role.id}>`)
            arr.push(`${len} more...`);
          }
          return arr.join(", ");
        }
        await message.guild.members.fetch();
        function emojitrimarray(arr, maxLen = 20) {
          if (arr.length > maxLen) {
            const len = arr.length - maxLen;
            arr = arr.slice(0, maxLen);
            arr.push(`${len} more...`);
          }
          return arr.join(", ");
        }
        let boosts = message.guild.premiumSubscriptionCount;
        var boostlevel = 0;
        if (boosts >= 2) boostlevel = "1";
        if (boosts >= 15) boostlevel = "2";
        if (boosts >= 30) boostlevel = "3 / ∞";
        let maxbitrate = 96000;
        if (boosts >= 2) maxbitrate = 128000;
        if (boosts >= 15) maxbitrate = 256000;
        if (boosts >= 30) maxbitrate = 384000;
          message.reply({embeds: [new MessageEmbed()
          .setAuthor("Server Information About: " +  message.guild.name, message.guild.iconURL({
            dynamic: true
          }), "https://clan.milrato.eu")
          
          .addField(" Pemilik", `<@${message.guild.ownerId}>\n\`${message.guild.name}\``, true)
          .addField(" Kamu Join Pada", "\`" + moment(message.guild.createdTimestamp).format("DD/MM/YYYY") + "\`\n" + "`"+ moment(message.guild.createdTimestamp).format("hh:mm:ss") +"`", true)
          .addField(" You Joined", "\`" + moment(message.member.joinedTimestamp).format("DD/MM/YYYY") + "\`\n" + "`"+ moment(message.member.joinedTimestamp).format("hh:mm:ss") +"`", true)
        
          .addField(" Total Channel", "👁‍🗨 \`" + message.guild.channels.cache.size + "\`", true)
          .addField(" Channel Text", "💬 \`" + message.guild.channels.cache.filter(channel => channel.type == "text").size + "\`", true)
          .addField(" Channel Voice", "🔈 \`" + message.guild.channels.cache.filter(channel => channel.type == "voice").size + "\`", true)
         
          .addField(" Total User", "😀 \`" + message.guild.memberCount + "\`", true)
          .addField(" Manusia", "👤 \`" + message.guild.members.cache.filter(member => !member.bot).size + "\`", true)
          .addField(" Bot", "🤖 \`" + message.guild.members.cache.filter(member => member.bot).size + "\`", true)
  
          .addField(" Total Boost", "\`" + message.guild.premiumSubscriptionCount + "\`", true)
          .addField(" Level Boost", "\`" + boostlevel + "\`", true)
          .addField(" Bitrate Dalam Voice", "👾 \`" + maxbitrate + " kbps\`", true)
        
          .setThumbnail(message.guild.iconURL({
            dynamic: true
          }))
          .setFooter("ID: " + message.guild.id, message.guild.iconURL({
            dynamic: true
          }))]});
       
      } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.reply({embeds: [new MessageEmbed()
            
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.message ? String(e.message).substr(0, 2000) : String(e).substr(0, 2000)}\`\`\``)
        ]});
      }
        },
};