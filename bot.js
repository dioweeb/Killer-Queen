const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config');

client.on("ready", () => {
    client.user.setGame(`on ${client.guilds.size} servers`);
});

client.login('MzMyOTIyNzA4MDY3MzUyNTc2.DEPN-g.OvgPYkInAWpPp6zlxVQVK2FZtpw');
client.on("ready", () => {
    console.log("ya gotov")
})

var isReady = true;
function getRandomInt(min, max)

    {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var servers = {};
client.on("message", (message) => {

    if (message.content.startsWith((config.prefix) + 'play')){
        var server = servers[message.guild.id];

    }


    if (message.content.startsWith((config.prefix) + "prefix")) {
        let newPrefix = message.content.split(" ").slice(1, 2)[0];
        config.prefix = newPrefix;
        fs.writeFile("./config", JSON.stringify(config), (err) => console.error);
        message.channel.send("Префикс изменен на " + (config.prefix));
    }
    if (message.content.startsWith((config.prefix) + 'voice')) { message.member.voiceChannel.join()
    }
        if (message.content.startsWith((config.prefix) + 'leave')) { message.member.voiceChannel.leave() };
   
    if (message.content.startsWith((config.prefix) + "coin")) {
        if (getRandomInt(0, 1) == 1) {
            message.channel.send("Орел");
        
            

        }
        else {
            message.channel.send("Решка");
     
        }
        isReady = false;
    }


    if (message.content.startsWith((config.prefix) + "pistol")) {
        var resu = 0;
        var bullet = message.content.split(" ").slice(1, 2)[0];
        if ((bullet >0)&&(bullet < 6)) {

     
            if (bullet == 1) {
                let count = (getRandomInt(1, 6));
                if (count != bullet) { var resu = 1 };
            }
            if (bullet == 2) {
                let count = (getRandomInt(1, 3));
                if (count != bullet) {var resu = 1 };
            }
            if (bullet == 3) {
                let count = (getRandomInt(1, 2));
                if (count != 1) {var resu = 1 };
            }
            if (bullet == 4) {
                let count = (getRandomInt(1, 3));
                if (count == 3) {var resu = 1 };
            }
            if (bullet == 5) {
                let count = (getRandomInt(1, 6));
                if (count == bullet) { var resu = 1 };
            }
        }
        else  {message.channel.send("");
        return;}

        if (resu == 0) {
            message.channel.send("Мозги " + message.member + " разлетелись по всей комнате!");
            message.member.setMute();
        }
        else {
            if (resu == 1) {
                message.channel.send("автар идеот"), (err) => (console.error, message.channel.send("Что-то пошло не так"));
            }
        }
    }
    if (message.content.startsWith((config.prefix) + "kk")) {
        var mcd = message.content.split(" ").slice(1, 2)[0];
        let i = 0;
        while (i<mcd) {
            let mcd = message.content.split(" ").slice(1, 2)[0];
            bot.deleteMessage(message);
            i++;
        }
        message.channel.send(message.author+" удалил "+(i)+" сообщений");
    }
    if (message.content.startsWith((config.prefix) + "say")) {
        var say = message.content.slice(1, 2);
        message.channel.send(say);
    message.delete(0)}
    })
