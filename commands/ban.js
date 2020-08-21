const Discord = require('discord.js');

module.exports ={
    name: 'ban',
    description: 'ban people',
    execute(message, args, command) {
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Tanımlanmadı';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('Bir sorun oluştu')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User banned', member)
        .addField('banned by', message.author)
        .addField('Reason', reason)
        .setFooter('Time banned', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);
        },
    };


