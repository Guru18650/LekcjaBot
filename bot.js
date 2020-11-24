require('dotenv').config();
var cron = require("cron");
const { Client } = require('discord.js');
const { contentType } = require('mime-types');
const client = new Client();
const guild = '753619195664793641'
const prefix = "!"
let channel = client.channels.cache.get('777899451914125342');
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
client.on('message', msg => {
    if (msg.content === 'tst') {
        var wiadomosc = new Array(5);
        wiadomosc[1] = "1";
        wiadomosc[2] = "2";
        wiadomosc[3] = "3";
        wiadomosc[4] = "4";
        wiadomosc[5] = "5";
    var msge = wiadomosc[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send(msge);
    }
  });
  
let scheduledMessage1 = new cron.CronJob('05 00 08 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@g2 8:00, zaczynamy WF!";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@g2 8:00, zaczynamy WF!";
    wiadomosc[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[5] = "Dzisiaj lekcji brak :sob:";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage2 = new cron.CronJob('05 50 08 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 8:50, czas na matematykę!";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@everyone 8:50, czas na geografię!";
    wiadomosc[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[5] = "@g1 8:50, zaczynamy ABDN!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage3 = new cron.CronJob('05 40 09 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 9:40, czas na PPR!";
    wiadomosc[2] = "@everyone 9:40, zaczynamy chemię!";
    wiadomosc[3] = "@everyone 9:40, @g1 czas na WF! @g2, wy macie anigelski!";
    wiadomosc[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[5] = "@everyone 9:40, czas na PBD!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage4 = new cron.CronJob('05 30 10 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 10:30, zaczynami informatykę stosowaną!";
    wiadomosc[2] = "@everyone 10:30, @g1 zapraszam na informatykę! @g2, zapraszam na angielski!";
    wiadomosc[3] = "@everyone 10:30, przyszedł czas na zajęcia z wychowawcą!";
    wiadomosc[4] = "@everyone 10:30, zaczynamy dzień historią!";
    wiadomosc[5] = "@everyone 10:30, czas na religię!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage5 = new cron.CronJob('05 20 11 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 11:20, druga godzina informatyki stosowanej!";
    wiadomosc[2] = "@everyone 11:20, @g1 zapraszam na WF! @g2, czeka was informatyka!";
    wiadomosc[3] = "@everyone 11:20, czas na PBD!";
    wiadomosc[4] = "@everyone 11:20, nadszedł czas na biologię!";
    wiadomosc[5] = "@everyone 11:20, zaczynamy PPR!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage6 = new cron.CronJob('05 20 12 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 12:20, zaczynamy fizykę!";
    wiadomosc[2] = "@everyone 12:20, czas na matematykę!";
    wiadomosc[3] = "@everyone 12:20, @g1 zapraszam na niemiecki! @g2 czas poćwiczyć na WF!";
    wiadomosc[4] = "@everyone 12:20, czas na PSI!";
    wiadomosc[5] = "@everyone 12:20, czas na PSI!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage7 = new cron.CronJob('05 10 13 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 13:10, zaczynamy edukację regionalną!";
    wiadomosc[2] = "@everyone 13:10, czas na historię!";
    wiadomosc[3] = "@everyone 13:10, religia się rozpoczyna!";
    wiadomosc[4] = "@everyone 13:10, bądźmy bezpieczni na EDB!";
    wiadomosc[5] = "@everyone 13:10, ulubiona lekcja czyli filozofia!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage8 = new cron.CronJob('05 00 14 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 14:00, @g1 rozpoczyna angielski! @g2 sprechen Sie Deutsch?";
    wiadomosc[2] = "@everyone 14:00, @g1 rozpoczyna angielski! @g2 sprechen Sie Deutsch?";
    wiadomosc[3] = "@everyone 14:00, czas na polski!";
    wiadomosc[4] = "@everyone 14:00, matematyka przyszłością!";
    wiadomosc[5] = "@g1 14:00, tworzymy stroni internetowe!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

    let scheduledMessage9 = new cron.CronJob('05 50 14 * * *', () => {
        var wiadomosc = new Array(5);
        wiadomosc[1] = "@everyone 14:50, zaczynamy polski!";
        wiadomosc[2] = "@g1 14:50, niemiecki się zaczyna!";
        wiadomosc[3] = "@everyone 14:50, druga godzina polskiego!";
        wiadomosc[4] = "@everyone 14:50, @g1 zaczyna WF! @g2 idzie tworzyć strony internetowe!";
        wiadomosc[5] = "@g1 14:50, TSI - ostatnia lekcja w tygodniu!";
    var msge = wiadomosc[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send(msge);
  });

  let scheduledMessage10 = new cron.CronJob('05 40 15 * * *', () => {
    var wiadomosc = new Array(5);
    wiadomosc[1] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@g2 15:40, zaczynami TSI!";
    wiadomosc[4] = "@g2 15:40, czas na ABDN!";
    wiadomosc[5] = "Dzisiaj lekcji brak :sob:";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });


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

client.login(process.env.DISCORDJS_BOT_TOKEN);