const { Client } = require("discord.js");
const client = require("../index");
const config = require('../config.json')
const economy = require('discord-bot-eco')
client.on("ready", () => {
    //config economy

    // penanda
    console.log(`${client.user.tag} is up and ready to go!`)
    // set activity
    client.user.setActivity('/help' , { type: 'PLAYING' })

    economy.setConfig({
        mongoURL: "mongodb+srv://RoshanGamer:public@cluster0.kyoy7.mongodb.net/Public1?retryWrites=true&w=majority",
        currency: "$",
        allowBankruptcy: false,
        limits: {
            defaultBankLimit: 3000,
            enabled: true
        },
        shopEnabled: false,
        shop: [
            /*
                Item properties can be modified but the following below must be kept as they are used in the module!
                The entire item is returned when using it with functions, go crazy!
            */
            {
                itemName: "Example Item",
                itemBuyPrice: 1000,
                itemSellPrice: 900,
                itemBuyable: true,
                itemSellable: false
            }
        ]
    });
})