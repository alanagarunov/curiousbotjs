const Discord = require('discord.js');
const fs = require('fs');
const {prefix,token} = require('./config.json');
const reader = require('./runmarkovconstant.js')
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {console.log("Logged in as "+ client.user.tag); });
client.on('message', msg => {
    reader.themessage((msg.author.id), (msg.channel), (msg.content));

    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try{
        client.commands.get(command).execute(msg, args);
    } catch(error){
        console.error(error);
        msg.reply("The command returned an error: " + error);
    } });


client.login(token);
