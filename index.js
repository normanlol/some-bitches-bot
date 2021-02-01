const discordjs = require("discord.js");
const discord = new discordjs.Client();
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("config.json"));

discord.on("ready", function() {
    discord.user.setActivity("some bitches", {type:"PLAYING"});
    console.log("ready some bitches");
});

discord.on("message", function(message) {
    var content = message.content.split(" ");
    for (var c in content) {
        message.author.send(content[c] + " some bitches").catch(function() {});
    }
    return;
});

discord.login(config.token);