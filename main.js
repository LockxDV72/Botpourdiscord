const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true});

client.on("ready", () => {
  console.log("Je suis prêt!");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("Pong!");
  if (msg.content.startsWith(`${PREFIX}pong`)) msg.channel.send("Ping!");
  if (msg.content === "everyone") msg.channel.send("@everyone, Salut tout le monde!", { disableEveryone: false});
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), Salut tout le monde!",);
});

client.login(TOKEN);