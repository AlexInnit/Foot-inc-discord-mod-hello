exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return 

    msg.channel.send(`Your current ping is at \`${client.ws.ping}\` ms`)
}