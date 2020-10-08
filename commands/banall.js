const Discord = require('discord.js');

module.exports ={
    name: 'banall',
    description: 'fetch',
    execute(message, args, command) {
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        const banlayan = message.member;
        const perm = message.member.id;
        const botperm = message.guild.me.hasPermission("BAN_MEMBERS");
        let reason = args.slice(1).join(" ");

        const embed = new Discord.MessageEmbed()

        .setTitle('Ban bildirisi')
        .setDescription(`Sunucudaki tüm kullanıcılıar banlandı`)
        .setColor(0xff0000)
        .setThumbnail('https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
        .addField('Detaylar', `Banlanan: ALL \n Banlayan: ${banlayan} \n Banlanılan zaman: ${message.createdAt}`)
if (perm !== 444164464024092692) {
            message.channel.send('Bu kişiyi banlamak için yetkiniz yok!');
        } else if (botperm == false) {
            message.channel.send('Bu kişiyi banlamak için yetkim yok!');
        } else {
            if(reason === undefined) reason = 'Belirtilmedi';
            let list = Promise.resolve(message.guild.members.cache.array()[0].nickname);
            
            for (i = 0; i < message.guild.memberCount; i++) {
                list = Promise.resolve(message.guild.members.cache.array()[i].nickname);
                console.log(list    );
            }
        }
        },
    };


