// add index 
Collection.prototype.array = function() {
  return [...this.values()]
  }
// command 
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
        let nguoitag = message.mentions.members.array() 
        let person = nguoitag[0]
    
        //hopqua 1
        if (args[1] === '1' || args[1] === 'club1') {
            return message.channel.send(`${message.author.username} đã mời ${person.user.username} vào club`)
            .then(async msg => {
                await msg.react('✅');
                await msg.react(`❌`);
                const filter = (reaction, user) => (reaction.emoji.name === '❌'|| reaction.emoji.name === '✅') 
                && (user.id === nguoitag[0].id);
                msg.awaitReactions(filter, { max: 1 })
                    .then((collected) => {
                        collected.map((emoji) => {
                            switch (emoji._emoji.name) {
                                case '✅':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.user.username}** đã đồng ý tham gia club**`)
                                    break;
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối tham gia club **${person.user.username}**`);
                                    break;
                            }
                        })
                    })
            });
        }
}
}
                    
            
