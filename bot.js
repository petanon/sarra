const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const Discord = require("discord.js");
const myid = ["515138634513383425"];
const client = new Discord.Client();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://sarra-chan.glitch.me`);
}, 280000);

client.on("message", message => {
  if (message.author.id === "723152446087626773") return; 

  if (message.content === "joba") {
    message.channel.send("***سوق سوداء***");
  }
  if (message.content === "yaw aw") {
    message.channel.reply("***nice name hh***")
  }
  if (message.content === "انيس") {
    message.channel.send("***قال ملك براول هه***");
  }
  if (message.content.startsWith("قولي")) {
      var text = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      message.channel.send(text);
  }
  if (message.content === "اعطيني ريب") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
  if (message.content === "حسين") {
    message.reply("***البركة تاع السيرفر***");
  }
  if (message.content === "ايمن") {
    message.reply(" :hhh: ***الي عندو نيترو خاص هه ***");
  }
  if (message.content === "جواد") {
    message.reply("***الذي صنعني***");
  }
  if (message.content === "djawed") {
    message.reply("***الذي صنعني***");
  }
  if (message.content === "شيرو") {
    message.reply("***نسيب جواد هه ***");
  }
  if (message.content === "دير دايلي تشو") {
    message.channel.send("#daily");
  }
  if (message.content === "شحال عندك") {
    message.channel.send("#credits");
  }
  if (message.content === "غاي") {
    message.reply(":rainbow_flag:");
  }
  if (message.content === "test") {
    message.reply("***am working***");
  }
  if (message.content === "مهدي") {
    message.reply("***خو كاكو 0-0***");
  }
  if (message.content === "رحيم") {
    message.reply("***خو بابا هخخخ***");
  }
  if (message.content === "رسيم") {
    message.reply("***R.I.P***");
  }
  if (message.content === "بلو") {
    message.reply("***الويب***");
  }
  if (message.content === "مودا") {
    message.channel.send("***الميمر العظيم***");
  }
  if (message.content === "ايوب") {
    message.reply("***Slanzo***");
  }
  if (message.content === "كات") {
    message.reply("***DOG***");
  }
  if (message.content === "شايا") {
    message.reply("***تشوتشو***");
  }
  if (message.content === "فرح") {
    message.reply("***قبم قبم 0-0***");
  }
  if (message.content === "يوسف") {
    message.reply("***يا ربييي***");
  }
  if (message.content === "بوتين") {
    message.reply("***جلالة فلاديمير بوتين العظيم الاول***");
  }
  if (message.content === "انور") {
    message.reply("***الهكر***");
  }
  if (message.content === "سيدا") {
    message.reply("***ارواح ماين نلعبو***");
  }
  if (message.content === "خديجة") {
    message.reply("***حب فرح تدنا تتقاس***");
  }
  if (message.content === "امين") {
    message.reply("***فخر العرب***");
  }
  if (message.content === "ادم") {
    message.reply("***لي زوم***");
  }
  if (message.content === "بلاك غوست") {
    message.reply("***يا الفرويتي اقعد فالدار***");
  }
  if (message.content === "هيكور") {
    message.reply("***باصط مود***");
  }
  if (message.content === "الياس") {
    message.reply("***ليزوم ما عنداك هخخخخ***");
  }
  if (message.content === "kaku") {
    message.reply("***Synonyme de magnifique*** :sparkles: " );
  }
  if (message.content === "كاكو")  {
    message.reply("***Synonyme de magnifique*** :sparkles: " );
  }
  if (message.content === "ziko") {
    message.reply("***jib 17 hh***")
  }
  if (message.content === "ياسين")  {
    message.reply("***منحوس تاع السيرفر***")
  }
  if (message.content === "teste")  {
    message.reply("***bl3 '-'***")
  }
  if (message.content === 'maissan') {
    message.reply('***wut a cutie EBiChu UwU*** :heart_eyes: ')
  }
    if (message.content === 'ميسان') {
    message.reply('***wut a cutie EBiChu UwU*** :heart_eyes: ')
  } 
   if (message.content === 'ايسو')   {
     message.reply("***chkon hada man3rfoch***")
   }
  if (message.content === '.') {
    message.reply('***شحال في عمرك حتى راك تسبامي يرحم باباك***')
  }
  if (message.content === '..') {
    message.reply('***تقعد تبعث فالنقاطي دكا***')
  }
  if (message.content === 'back') {
 message.reply("***Welcome Nibba***")
  }
  if (message.content === 'thx') {
    message.reply("***np*** :pray:")
  }
  if (message.content === 'wtf') {
    message.reply(':scream:')
  }
  
{ if (message.content === 'roll')
    message.channel.send(
      ` **${message.author.username}**, you rolled a **${Math.floor(  Math.random() * 100
      ) + 0}**!`
    );
  }
  console.log(express)
});
//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????
client.on("ready", () => {
  console.log("online");
});
client.login("NzQwMTM0MjM5MjM1NzM1NTUy.Xykl3w.G6pShnzXXWmiQ5BSW7y1EwCOtIU");
//?????????????????????????????????????????????????????????????????????,
