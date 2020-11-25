
var cron = require("cron");
const { Client } = require('discord.js');
const { contentType } = require('mime-types');
const client = new Client();
let channel = client.channels.cache.get('777899451914125342');
var d = new Date();
  
let scheduledMessage1 = new cron.CronJob('05 00 08 * * *', () => {
  var d = new Date();
    var wiadomosc1 = new Array(5);
    wiadomosc1[1] = "@g2 8:00, zaczynamy WF!";
    wiadomosc1[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc1[3] = "@g2 8:00, zaczynamy WF!";
    wiadomosc1[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc1[5] = "Dzisiaj lekcji brak :sob:";
var msge1 = wiadomosc1[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge1);
  });

  let scheduledMessage2 = new cron.CronJob('05 50 08 * * *', () => {
    var d = new Date();
    var wiadomosc2 = new Array(5);
    wiadomosc2[1] = "@everyone 8:50, czas na matematykę!";
    wiadomosc2[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc2[3] = "@everyone 8:50, czas na geografię!";
    wiadomosc2[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc2[5] = "@g1 8:50, zaczynamy ABDN!";
var msge2 = wiadomosc2[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge2);
  });

  let scheduledMessage3 = new cron.CronJob('05 40 09 * * *', () => {
    var d = new Date();
    var wiadomosc3 = new Array(5);
    wiadomosc3[1] = "@everyone 9:40, czas na PPR!";
    wiadomosc3[2] = "@everyone 9:40, zaczynamy chemię!";
    wiadomosc3[3] = "@everyone 9:40, @g1 czas na WF! @g2, wy macie anigelski!";
    wiadomosc3[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc3[5] = "@everyone 9:40, czas na PBD!";
var msge3 = wiadomosc3[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge3);
  });

  let scheduledMessage4 = new cron.CronJob('05 30 10 * * *', () => {
    var d = new Date();
    var wiadomosc4 = new Array(5);
    wiadomosc4[1] = "@everyone 10:30, zaczynami informatykę stosowaną!";
    wiadomosc4[2] = "@everyone 10:30, @g1 zapraszam na informatykę! @g2, zapraszam na angielski!";
    wiadomosc4[3] = "@everyone 10:30, przyszedł czas na zajęcia z wychowawcą!";
    wiadomosc4[4] = "@everyone 10:30, zaczynamy dzień historią!";
    wiadomosc4[5] = "@everyone 10:30, czas na religię!";
var msge4 = wiadomosc4[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge4);
  });

  let scheduledMessage5 = new cron.CronJob('05 20 11 * * *', () => {
    var d = new Date();
    var wiadomosc5 = new Array(5);
    wiadomosc5[1] = "@everyone 11:20, druga godzina informatyki stosowanej!";
    wiadomosc5[2] = "@everyone 11:20, @g1 zapraszam na WF! @g2, czeka was informatyka!";
    wiadomosc5[3] = "@everyone 11:20, czas na PBD!";
    wiadomosc5[4] = "@everyone 11:20, nadszedł czas na biologię!";
    wiadomosc5[5] = "@everyone 11:20, zaczynamy PPR!";
var msge5 = wiadomosc5[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge5);
  });

  let scheduledMessage6 = new cron.CronJob('05 20 12 * * *', () => {
    var d = new Date();
    var wiadomosc6 = new Array(5);
    wiadomosc6[1] = "@everyone 12:20, zaczynamy fizykę!";
    wiadomosc6[2] = "@everyone 12:20, czas na matematykę!";
    wiadomosc6[3] = "@everyone 12:20, @g1 zapraszam na niemiecki! @g2 czas poćwiczyć na WF!";
    wiadomosc6[4] = "@everyone 12:20, czas na PSI!";
    wiadomosc6[5] = "@everyone 12:20, czas na PSI!";
var msge6 = wiadomosc6[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge6);
  });

  let scheduledMessage7 = new cron.CronJob('05 10 13 * * *', () => {
    var d = new Date();
    var wiadomosc7 = new Array(5);
    wiadomosc7[1] = "@everyone 13:10, zaczynamy edukację regionalną!";
    wiadomosc7[2] = "@everyone 13:10, czas na historię!";
    wiadomosc7[3] = "@everyone 13:10, religia się rozpoczyna!";
    wiadomosc7[4] = "@everyone 13:10, bądźmy bezpieczni na EDB!";
    wiadomosc7[5] = "@everyone 13:10, ulubiona lekcja czyli filozofia!";
var msge7 = wiadomosc7[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge7);
  });

  let scheduledMessage8 = new cron.CronJob('05 00 14 * * *', () => {
    var d = new Date();
    var wiadomosc8 = new Array(5);
    wiadomosc8[1] = "@everyone 14:00, @g1 rozpoczyna angielski! @g2 sprechen Sie Deutsch?";
    wiadomosc8[2] = "@everyone 14:00, @g1 rozpoczyna angielski! @g2 sprechen Sie Deutsch?";
    wiadomosc8[3] = "@everyone 14:00, czas na polski!";
    wiadomosc8[4] = "@everyone 14:00, matematyka przyszłością!";
    wiadomosc8[5] = "@g1 14:00, tworzymy stroni internetowe!";
var msge8 = wiadomosc8[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge8);
  });

    let scheduledMessage9 = new cron.CronJob('05 50 14 * * *', () => {
      var d = new Date();
        var wiadomosc9 = new Array(5);
        wiadomosc9[1] = "@everyone 14:50, zaczynamy polski!";
        wiadomosc9[2] = "@g1 14:50, niemiecki się zaczyna!";
        wiadomosc9[3] = "@everyone 14:50, druga godzina polskiego!";
        wiadomosc9[4] = "@everyone 14:50, @g1 zaczyna WF! @g2 idzie tworzyć strony internetowe!";
        wiadomosc9[5] = "@g1 14:50, TSI - ostatnia lekcja w tygodniu!";
    var msge9 = wiadomosc9[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send(msge9);
  });

  let scheduledMessage10 = new cron.CronJob('05 40 15 * * *', () => {
    var d = new Date();
    var wiadomosc10 = new Array(5);
    wiadomosc10[1] = "Dzisiaj lekcji brak :sob:";
    wiadomosc10[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc10[3] = "@g2 15:40, zaczynami TSI!";
    wiadomosc10[4] = "@g2 15:40, czas na ABDN!";
    wiadomosc10[5] = "Dzisiaj lekcji brak :sob:";
var msge10 = wiadomosc10[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge10);
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

client.login(process.env.BOT_TOKEN);