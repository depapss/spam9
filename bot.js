const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546633565916495885")
setInterval(function() {
channel.send(`s`);
}, 4)
})

client.login(process.env.BOT_TOKEN);
