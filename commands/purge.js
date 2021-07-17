const Discord = require('discord.js');
const ms = require('ms');
exports.run = async(client, msg, args) => {
   if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
   if(!args[0]) return msg.reply('Specify the number of messages you want me to purge');
   if(isNaN(args[0])) return msg.reply('You need to specify a vaild number')

   if(args[0] > 100) return msg.reply('Please enter a number lesst than 100')
   if(args[0] < 1) return msg.reply('You need to specify a number greater than 0')

   msg.delete()
   await msg.channel.messages.fetch({limit: args[0]}).then (messages => {
       msg.channel.bulkDelete(messages);

       var embed = new Discord.MessageEmbed()
    .setColor('0xff3030')
    .setTitle(`I have purged ${args[0]} messages`)
    msg.channel.send(embed)
   })

}