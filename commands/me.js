module.exports ={
    name: 'me',
    description: 'Info about author of the command',
    execute(message, args, command) {
        if (message.member.nickname == null) {
            message.channel.send('Takma adın : ' + 'Bu serverda yok');
            message.channel.send('Kullanıcı adın : ' + message.author.username);
            message.channel.send('İd : ' + message.author);
        } else{
            message.channel.send('Takma adın : ' + message.member.nickname);
            message.channel.send('Kullanıcı adın : ' + message.author.username);
            message.channel.send('İd : ' + message.author);
        }
    },
};