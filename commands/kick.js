const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return 

    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('There Where No User Mention. <@720581909175992400>, Pinged So they can fix it if its a bug')
    var member;
    try {
        member = await msg.guild.members.fetch(user)
    } catch(err) {
        member = null
    }
    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Staff cannot be kicked. <@720581909175992400>, Pinged So they can fix it if its a bug')
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('I cant Kick a person if they havent done anything so please put a reason. <@720581909175992400>, Pinged So they can fix it if its a bug')
    var channel = msg.guild.channels.cache.find(c => c.name === 'logs');
    var log = new Discord.MessageEmbed()
    .setColor('0xD2DF1B')
    .setDescription(`${user} has been kicked by ${msg.author} for "**${reason}**"`)
    channel.send(log);

    var userlogs = new Discord.MessageEmbed()
    .setColor('0xD2DF1B')
    .setDescription(`You have been kicked for ${reason} but you still can join back beacuse its a kick, please dont repeat the mistake :).`)
    try {
        await user.send(userlogs);
    } catch(err) {
        console.warn(err)
    }
    member.kick(reason)

    var confir = new Discord.MessageEmbed()
    .setColor('0xD2DF1B')
    .setDescription(`${user} has been Kicked by ${msg.author}`)
    msg.channel.send(confir);
    msg.delete();
} 
