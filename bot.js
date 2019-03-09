const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553993995228020738")
setInterval(function() {
channel.send(`s`);
}, 4)
})

client.login(process.env.BOT_TOKEN);
