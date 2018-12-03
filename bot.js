const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', (2) => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "473238924320571422"; // 517298975691505665
var channel = "510071577753288704";//517302579689029634
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split("spek")[0];
  command = command.slice(prefix.length);

  let args = message.content.split("m").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
