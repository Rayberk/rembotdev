module.exports ={
    name: 'ping',
    description: 'Pinger command',
    execute(message, args) {
        message.channel.send('Pong!');
    },
};