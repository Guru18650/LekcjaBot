require('dotenv').config();

const Discord = require('discord.js');
const Enmap = require('enmap');
const FS = require('fs');

const Bot = new Discord.Client();
const BotConfig = require('./config.json');
Bot.config = BotConfig;

const MSTeams = require('./msteams.js');

FS.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  
  files.forEach(async file => {
    const event = await require(`./events/${file}`);
    let eventName = file.split('.')[0];
    Bot.on(eventName, event.bind(null, MSTeams, Bot));
  });
});
  
Bot.commands = new Enmap();
  
FS.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
  
  files.forEach(async file => {
    if (!file.endsWith('.js')) return;
  
    let props = await require(`./commands/${file}`);
    let cmdName = file.split('.')[0];
    Bot.commands.set(cmdName, props);
  });
});

Bot.login(process.env.BOT_TOKEN);