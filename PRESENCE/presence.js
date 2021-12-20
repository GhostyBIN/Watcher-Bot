module.exports = function presence(Discord, client, config){
    client.user.setActivity(`${client.guilds.cache.size} Servers | /help`, { type: "WATCHING" });
}