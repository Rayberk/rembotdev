const Discord = require('discord.js');

module.exports ={
    name: 'kick',
    description: 'Kick people',
    execute(message, args, command) {
       
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        const banlayan = message.member;
        const perm = message.member.hasPermission(0x00000002);
        const botperm = message.guild.me.hasPermission(0x00000002);
        let reason = args.slice(1).join(" ");

        const embed = new Discord.MessageEmbed()

        .setTitle('Kick bildirisi')
        .setDescription(`Üye atıldı, ${member}!`)
        .setColor(0xff0000)
        .setImage('https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
        .addField('Detaylar', `Atılan: ${member} \n Atan: ${banlayan} \n Atıldığı zaman: ${message.createdAt}`)
        if (!member) {
            message.channel.send('Kişi belirtilmedi!');
        } else if (member == undefined) {
            message.channel.send('Belirtilen kişi bulunamadı!');
        } else if (!member.kickable) {
            message.channel.send('Belirtilen kişinin yetkisi benden daha yüksek!')
        } else if (perm == false) {
            message.channel.send('Bu kişiyi atmak için yetkiniz yok!');
        } else if (botperm == false) {
            message.channel.send('Bu kişiyi atmak için yetkim yok!');
        }else {
            if(reason === undefined) reason = 'Belirtilmedi';
            member.ban(reason)
            message.channel.send(embed)

        }

        },
    };


