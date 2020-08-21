module.exports ={
    name: 's',
    description: 'Info about server',
    execute(message, args, command) {
        if (command == `s` || command == `server`){
        message.channel.send('Server adı:' + message.guild.name);
        message.channel.send('Server üye sayısı:' + message.guild.memberCount);
        message.channel.send('Server oluşturulma tarihi:' + message.guild.createdAt);
        if (message.guild.owner.nickname == null) {
        message.channel.send('Server sahibi:' + message.guild.owner.user.tag);
        } else {
            message.channel.send('Server sahibi:' + message.guild.owner.nickname + " / " + message.guild.owner.user.tag);
        }
    }
    },
};