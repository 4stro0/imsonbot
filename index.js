const { Client, Collection, MessageEmbed } = require("discord.js")
const Economy = require('discord-economy-super')
const Leveling = require('discord-leveling-super')
const antiSwearWords = require("anti-swear-words-packages-discord")



const client = new Client({
  intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./config.json')
client.eco = new Economy({
  storagePath: './storage.json',
    updateCountdown: 1000,
    checkStorage: true,
    deprecationWarnings: true,
    sellingItemPercent: 75,
    savePurchasesHistory: true,
    dailyAmount: 10,
    workAmount: [10, 50],
    weeklyAmount: 30,
    dailyCooldown: 60000 * 60 * 24,
    workCooldown: 60000 * 60,
    weeklyCooldown: 60000 * 60 * 24 * 7,
    dateLocale: 'en',
    updater: {
        checkUpdates: true,
        upToDateMessage: true
    },
    errorHandler: {
        handleErrors: true,
        attempts: 5,
        time: 3000
    },
    optionsChecker: {
        ignoreInvalidTypes: false,
        ignoreUnspecifiedOptions: true,
        ignoreInvalidOptions: false,
        showProblems: true,
        sendLog: true,
        sendSuccessLog: false
    }
})

client.leveling = new Leveling(client, {
  storagePath: './leveling.json', // Full path to a JSON file. Default: './leveling.json'.
  checkStorage: true, // Checks the if database file exists and if it has errors. Default: true.
  xp: 50, // Amount of XP that user will receive after sending a message. Default: 5.
  maxXP: 300, // Amount of XP that user will need to reach the next level. This value will double for each level. Default: 300.
  status: true, // You can enable or disable the leveling system using this option. Default: true.
  lockedChannels: [], // Array of channel IDs that won't give XP to users. Default: [].
  ignoredUsers: [], // Array of user IDs that won't give XP. Default: [].
  ignoreBots: true, // If true, every message from bots won't give them XP. Default: true.

  /**
   * Filter function that accepts a message; 
   * it must return a boolean value and it will add XP 
   * only to authors of filtered messages.; 
   * Use 'null' to disable the filter. 
   * 
   * Default: '() => true'.
   */
  filter: msg => !msg.content.startsWith("+"),
  updater: {
      checkUpdates: true, // Sends the update state message in console on start. Default: true.
      upToDateMessage: true // Sends the message in console on start if module is up to date. Default: true.
  },
  errorHandler: {
      handleErrors: true, // Handles all errors on start. Default: true.
      attempts: 5, // Amount of attempts to load the module. Use 'null' for infinity attempts. Default: 5.
      time: 3000 // Time between every attempt to start the module. Default: 3000.
  },
  optionsChecker: {
      ignoreInvalidTypes: false, // Allows the method to ignore the options with invalid types. Default: false.
      ignoreUnspecifiedOptions: false, // Allows the method to ignore the unspecified options. Default: false.
      ignoreInvalidOptions: false, // Allows the method to ignore the unexisting options. Default: false.
      showProblems: false, // Allows the method to show all the problems in the console. Default: false.
      sendLog: false, // Allows the method to send the result in the console. Default: false.
      sendSuccessLog: false // Allows the method to send the result if no problems were found. Default: false.
  }
});


client.leveling.on('levelUp', data => {
  data.sendMessage(`Selamat, ${data.user}, Kamu Naik Ke Level **${data.level}**!`)
})

// Initializing the project
require("./handler")(client);


// login client
client.login(client.config.token);

process.on('unhandledRejection', (reason, p) => {
        console.log(' [antiCrash] :: Unhandled Rejection/Catch');
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log(err, origin);
    }) 
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
        console.log(err, origin);
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [antiCrash] :: Multiple Resolves');
        console.log(type, promise, reason);
      });