const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {prefix, token} = require('./config.json');

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.on('message', message => {
    console.log(message.guild.name + " | " + message.author.tag + ": " + message.content);

    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    
    
    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try{
        command.execute(message, args, commandName);
    }catch(error){
        console.error(error);
        message.reply('!!! Sorun !!!');
    }
    
});

client.login(token);

p = prefix;
client.once('ready', () =>  {
    console.log('Ready!');
});



/*module.exports ={
    name: 'p',
    description: 'Info about arguments',
    args: true,
    execute(message, args, command) {
        message.channel.send(`Komut adı: ${command}\nParçalar: ${args}`);
    },
};*/
