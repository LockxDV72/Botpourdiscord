const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send("@everyone, Salut tout le monde!", { disableEveryone: false});
  if (msg.content === 'noteveryone') msg.channel.send("@everyone (noteveryone), Salut tout le monde!",);
});

client.login('NjgxNTM0NjQ2Nzg1NTQwMTEz.XlQCrg.2mAbYkS3FTHS5zF-RI75IO52Y10');