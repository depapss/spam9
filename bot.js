const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("554282679718379543")
setInterval(function() {
channel.send(`***spam***`);
}, 10)
})

client.login(process.env.BOT_TOKEN);
