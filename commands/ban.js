const Discord = require('discord.js');

module.exports ={
    name: 'ban',
    description: 'ban people',
    execute(message, args, command) {
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        const banlayan = message.member;
        const perm = message.member.id;
        const botperm = message.guild.me.hasPermission(0x00000004);
        let reason = args.slice(1).join(" ");

        const embed = new Discord.MessageEmbed()

        .setTitle('Ban bildirisi')
        .setDescription(`Üye banlandı, ${member}!`)
        .setColor(0xff0000)
        .setImage('https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
        .addField('Detaylar', `Banlanan: ${member} \n Banlayan: ${banlayan} \n Banlanılan zaman: ${message.createdAt}`)
        if (!member) {
            message.channel.send('Kişi belirtilmedi!');
        } else if (member == undefined) {
            message.channel.send('Belirtilen kişi bulunamadı');
        } else if (!member.bannable) {
            message.channel.send('Belirtilen kişinin yetkisi benden daha yüksek!')
        } else if (perm !== 444164464024092692) {
            message.channel.send('Bu kişiyi banlamak için yetkiniz yok!');
        } else if (botperm == false) {
            message.channel.send('Bu kişiyi banlamak için yetkim yok!');
        }else {
            if(reason === undefined) reason = 'Belirtilmedi';
            member.ban(reason)
            message.channel.send(embed)
        }
        },
    };


