const { Message, Client , MessageEmbed , MessageActionRow , MessagButton } = require('discord.js')
module.exports = {
name: 'role', 
description : 'Give Members Roles',
/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

         
        // if not a member
        if (!member) {
            return message.reply({embeds: [new MessageEmbed()
                .setColor('#030306')
                .setDescription(`> Usage =  ${prefix}role + <@user> + <@role>`)
                .setFooter(ee.footertext)]})
        }

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        
        // if not a Role
        if (!role) {
            return message.reply({ embeds: [new MessageEmbed()
                .setColor('#030306')
                .setDescription(`**Tag Role Yang Mau Kamu Beri \ Ambil Dari User **`)
                .setFooter(ee.footertext)] })
        }

        
        // add role to user
        if (!member.roles.cache.has(role.id)) {
            await member.roles.add(role.id);
            message.reply({ embeds: [new MessageEmbed()
                .setColor('#030306')
                .setDescription(`${role} Role Telah Diterima Oleh <@${member.user.id}>`)
                .setFooter(`Role added by ${message.author.username}`)] })

                
            } else if  (member.roles.cache.has(role.id)) {
               await member.roles.remove(role.id)
               message.reply({embeds: [
                   new MessageEmbed()
                   .setDescription(`${role} Role Telah Diambil Dari <@${member.user.id}>`)
               ]})
            
        }

        },
};