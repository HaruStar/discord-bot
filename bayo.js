const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message',message=>{
  if (message.content == 'bayo!hi'){
   message.reply('wait am i working?');
  }else if (message.content == 'bayo!'){
   message.reply('call me Bayonetta!');
  }else if (message.content == 'bayo!heroku?'){
    message.reply('Yes I\'m running off Heroku!');
  }else if (message.content == 'bayo!ergastolator1'){
    message.reply('Thanks for waiting for me ergastolator1!');
  }else if (message.content == 'bayo!help'){
    message.reply("I'm a very basic bot made by BayoDino and Haruyuki and Ergastolator1. I'll become a helper for Cranterns bot ^-^, I'm not a person that made it, BTW :slight_smile: I only helped to make it, but thanks for including me anyways in the command!");
  }else if (message.content == 'bayo!confused'){
    message.reply("Why are you confused?");
  }
});

Client.login(process.env.BOT_TOKEN);
