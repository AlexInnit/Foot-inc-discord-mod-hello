const Discord = require('discord.js');
const ms = require('ms');
exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args[0]) return msg.reply('you need to specify a time.')
    if(isNaN(args[0])) return msg.reply('You need to specify a valid number');
    var time = args[0]
    if(args[0] < 0) return msg.reply('You can not put slow mode to negative numbers!');
    if(args[0] > 21600) return msg.reply('You need to put a number less than 21600 seconds')
    msg.channel.setRateLimitPerUser(time)

    var embed = new Discord.MessageEmbed()
    .setColor('0xff3030')
    .setTitle(`I have set the Slowmode to \`${time}\` seconsds`)
    msg.channel.send(embed)
}