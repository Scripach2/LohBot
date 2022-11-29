const Discord = require("discord.js")
require ("dotenv").config()
const TOKEN = "MTAwODMzNzEwNTIxMjE2NjIwNA.GAjzI6.h3WKBRnoEfq5UHa4K6eIqsb7TLcatyzHD3nBxo"

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "@LohBot hi"){
        message.content("hi")
    }
})

client.login(Tprocess.env.TOKEN)