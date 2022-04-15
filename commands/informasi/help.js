const { Message, Client , MessageEmbed , MessageActionRow , MessagButton, Interaction, ButtonInteraction, MessageButton , MessageSelectMenu} = require("discord.js");

module.exports = {
    name: "help",
    aliases: ['h'],
    description: 'List Command',
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const directories = [
            ...new Set(client.commands.map(cmd => cmd.directory))
        ];

        const formatString = (str) =>
        `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

        const categories = directories.map((dir) => {
            const getCommands = client.commands.filter(
                (cmd) => cmd.directory === dir
            ).map(cmd => {
                return {
                    name: cmd.name || "there is no name",
                    description:
                    cmd.description || "there is no description in this command"
                };
            })
            return {
                directory : formatString(dir),
                commands: getCommands,
            };
        });
        const embed = new MessageEmbed()
        .setTitle('Help Commands')
        .setDescription('**Prefix Ku**: `+`\n\n`Pilih Kategori Command Untuk Dilihat Info Nya`\n\nOYAAA! Akhir-akhir ini owner mendengar bumi kita sedang mengalami pemanasan global. Yuk kita bantu dengan mendonasikan pohon! Dan ini gratis, kalian hanya download apk ecoasia atau link ini http://ecosia.co/mobile_ft_android?referer=tt%3D terimakasih sudah membantu bumi kita dari pemanasan global!,')
        .setThumbnail('https://cdn.discordapp.com/attachments/960360393669214299/960365170373328926/20220404_092802.jpg')
        .setColor('#030306')

        const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId('help-menu')
                .setPlaceholder("Pilih Disini")
                .setDisabled(state)
                .addOptions(
                    categories.map((cmd) => {
                        return {
                            label: cmd.directory,
                            value: cmd.directory.toLowerCase(),
                            description: `Commands Dari Kategori ${cmd.directory}`
                        }
                    })
                )
            ),
                ]
        const initialMessage = await message.reply({
            embeds: [embed],
            components: components(false)
        });

        const filter = (interaction) =>
        interaction.user.id === message.author.id

        const collector = message.channel.createMessageComponentCollector({
            filter,
            componentType: "SELECT_MENU",
            //time: 6000,
        });

        collector.on('collect',(interaction)=> {
            const [directory] = interaction.values;
            const category = categories.find(x => x.directory.toLowerCase() === directory
            );
            const categoryEmbed = new MessageEmbed()
            .setTitle((`${directory} Commands`))
            .setColor('#030306')
            .setDescription('**Here Are The List of Commands**')
            .addFields(
                category.commands.map((cmd) => {
                    return {
                        name: `\`${cmd.name.toLowerCase()}\``,
                        value: cmd.description,
                        inline:true,
                    };
                })
            );
            interaction.reply({ embeds: [categoryEmbed] , ephemeral: true })
        });
        collector.on('end', ()=> {
            initialMessage.edit({ components: components(true) })
        })
    }
};