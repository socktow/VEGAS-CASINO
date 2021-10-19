const discord = module.require("discord.js");
const leader = [
    "551161303704797185",
    "872582370228834334",
    "327410729466724352"
]
const { MessageMentions } = require("discord.js");

module.exports = {
    name : "clubinvite",
    botPerms: ["EMBED_LINKS"],
    run: async (client, message, args) => {
        if(!leader.includes(message.author.id)) return message.channel.send(`Bạn không phải chủ của câu lạc bộ nào`);
        if (message.author.bot) return false;
        if (!args[1]) {
            return message.channel.send(`chưa nhập tên người mời **${message.author.username}**`)
        }
        if (!args[0]) return message.channel.send("**Please Enter A User!**");
    let user =
      message.mentions.members.array() ||
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!user) return message.channel.send("**Enter A Valid User!**");

        //hopqua 1
        if (args[1] === '1' || args[1] === 'club1') {
            return message.channel.send(`${message.author.username} đã mời vào club`)
            .then(async msg => {
                await msg.react('✅');
                await msg.react(`❌`);
                const filter = (reaction, user) => (reaction.emoji.name === '❌'|| reaction.emoji.name === '✅') 
                && (user.id == args[0].id);
                msg.awaitReactions(filter, { max: 1 })
                    .then((collected) => {
                        collected.map((emoji) => {
                            switch (emoji._emoji.name) {
                                case '✅':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickyes:880551847193092176>| đã đồng ý tham gia club**`)
                                    break;
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}**  đã từ chối tham gia club`);
                                    break;
                            }
                        })
                    })
            });
        }
}
}
                    
            
