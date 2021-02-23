var cron = require("cron");
const discord = require ('discord.js');
const { Client, Message } = require('discord.js');
const { contentType } = require('mime-types');
const client = new discord.Client();
let channel = client.channels.cache.get('777899451914125342');
var d = new Date();
const prefix = "p!";  
//client.zadania = require ("./zadania.json");
const fs = require("fs");
//const plan = require('./def/plan_lekcji.json')


var zero =  ['', '', '', '', 'ABDN / ', 'PSI'];
var one =   ['', 'PBD', '', 'WF / ', 'TSI / ', 'PSI'];
var two =   ['', 'PPr', 'Biologia', 'WF / ', 'TSI / Informatyka', 'Chemia'];
var three = ['', 'PPr', 'Edukacja Regionalna', 'PBD', 'Informatyka / TSI', 'Religia'];
var four =  ['', 'Informatyka Stosowana', 'Angielski / Niemiecki', 'Godzina Wychowawcza', ' / TSI', 'Filozofia'];
var five =  ['', 'Niemiecki / WF', 'Informatyka Stosowana', 'Geografia', ' / ABDN', 'Matematyka'];
var six =   ['', 'Fizyka', 'Matematyka', 'Historia', '', 'Historia'];
var seven = ['', 'WF / Angielski', 'EDB', 'Polski', '', ' / Niemiecki'];
var eight = ['', 'Matematyka', 'Niemiecki / Angielski', 'Polski', '', ''];
var nine =  [''', Polski', ' / WF', 'Angielski / WF', '', ''];
var ten =   ['', '', '', 'Religia', '', ''];



let scheduledMessage0 = new cron.CronJob('05 10 06 * * *', () => {
  var d = new Date();
var msge = zero[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send("@everyone Rozpoczyna się " + msge);
  });



let scheduledMessage1 = new cron.CronJob('05 00 07 * * *', () => {
  var d = new Date();
var msge = one[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage2 = new cron.CronJob('05 50 07 * * *', () => {
    var d = new Date();
    var msge = two[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage3 = new cron.CronJob('05 40 8 * * *', () => {
    var d = new Date();
    var msge = three[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage4 = new cron.CronJob('05 30 9 * * *', () => {
    var d = new Date();
    var msge = four[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage5 = new cron.CronJob('05 20 10 * * *', () => {
    var d = new Date();
    var msge = five[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage6 = new cron.CronJob('05 20 11 * * *', () => {
    var d = new Date();
var msge = six[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage7 = new cron.CronJob('05 10 12 * * *', () => {
    var d = new Date();
    var msge = seven[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage8 = new cron.CronJob('05 00 13 * * *', () => {
    var d = new Date();
var msge = eight[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send("@everyone Rozpoczyna się " + msge);
  });



    let scheduledMessage9 = new cron.CronJob('05 50 13 * * *', () => {
      var d = new Date();
      var msge = nine[d.getDay()];
      let channel = client.channels.cache.get('777899451914125342');
              channel.send("@everyone Rozpoczyna się " + msge);
  });



  let scheduledMessage10 = new cron.CronJob('05 51 14 * * *', () => {
    var d = new Date();
    var msge = ten[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send("@everyone Rozpoczyna się " + msge);
  });

  scheduledMessage0.start()
  scheduledMessage1.start()
  scheduledMessage2.start()
  scheduledMessage3.start()
  scheduledMessage4.start()
  scheduledMessage5.start()
  scheduledMessage6.start()
  scheduledMessage7.start()
  scheduledMessage8.start()
  scheduledMessage9.start()
  scheduledMessage10.start()


  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'ping') {
      message.channel.send('Pong.');
    } else if (command === 'beep') {
      message.channel.send('Boop.');
    } else if (command === 'dzien') {
      
      var d = new Date();
var weekday = new Array(7);
weekday[0] = "Niedziela";
weekday[1] = "Poniedziałek";
weekday[2] = "Wtorek";
weekday[3] = "Środa";
weekday[4] = "Czwartek";
weekday[5] = "Piątek";
weekday[6] = "Sobota";

var n = weekday[d.getDay()];
  
      message.channel.send(n);
    }
    // other commands...
  });
client.login(process.env.BOT_TOKEN);
//process.env.BOT_TOKEN
