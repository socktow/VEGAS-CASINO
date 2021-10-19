const { MessageEmbed } = require("discord.js");
const hqvv1 = require('../../assets/hqvv.json').data;

module.exports = {
    name: 'hopquavuive',
    aliases: ["hqvv","luckybox"],
    category: 'admin',
    description: 'hqvv @user < Hộp Quà >',
    usage: `hqvv  @user < Hộp Quà >`,

    run: async (client, message, args) => {
        if(!message.member.roles.cache.has("881391031516536864")) return message.channel.send(`Bạn Không Phải MC Của **[VEGAS CASINO]**`);
        let hqvv = hqvv1[Math.floor(Math.random() * hqvv1.length)]
        if (message.author.bot) return false;
        if (!args[1]) {
            return message.channel.send(`Ủa rồi tặng ai zậy **${message.author.username}**`)
        }
        let host = message.author.username;
        let nguoitag = message.mentions.members.array() 
        let member = message.mentions.members.first();
        let person = nguoitag[0]
        //embed hopqua1
        let embed1 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 1] Phần quà của bạn là : **500.000 owo**')
        .setImage('https://i.pinimg.com/originals/8c/a9/48/8ca948df7b68e24dbd666765e9457f6b.gif')
        
        let embed2 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 2] Phần quà của bạn là : **Nitro Classic**')
        .setImage('https://salad.com/static/20da3e68b00b36360861b41054684619/89aeb/reward_discord_nitro_classic_c88918cb02.png')
        let embed3 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 3] Phần quà của bạn là : **1.000.000 owo**')
        .setImage('https://c.tenor.com/PoREZRj_xAAAAAAC/money-cash.gif')
        let embed4 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 4] Phần quà của bạn là : **2.000.000 owo**')
        .setImage('https://thumbs.gfycat.com/BlackandwhiteGranularCanine-size_restricted.gif')
        let embed5 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 5] Phần quà của bạn là : **Nitro Boost**')
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctTR67gwRuD07pS2X1kdhmzTzr5vOA4v9iwOI0ofjnxP3lEo6Lfo3kE9dL249fKjHWYU&usqp=CAU')
        let embed6 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 6] Phần quà của bạn là : **50.000 owo**')
        .setImage('http://1.bp.blogspot.com/-8z2arGYQvY4/T6QLWmzp7lI/AAAAAAAAA6k/0mUukvJcxgw/s1600/Obama-bucks-animated-money-gif.gif')
        let embed7 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 7] Phần quà của bạn là : **5 owo**')
        .setImage('https://www.icegif.com/wp-content/uploads/money-icegif-26.gif')
        let embed8 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 8] Phần quà của bạn là : **20.000 owo**')
        .setImage('https://i.pinimg.com/originals/96/48/34/9648343e863eeb15658b82cba46f142b.gif')
        let embed9 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('[Box 9] Phần quà của bạn là : **5 owo**')
        .setImage('https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/5/11/1838231623132930535787184664500772534562905n-16207423956661420616110.jpg')
        //hopqua 1
        if (args[1] === '1' || args[1] === 'hopqua1') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed1);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        // Hộp quà 2
        }else if (args[1] === '2' || args[1] === 'hopqua2') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed2);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '3' || args[1] === 'hopqua3') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed3);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '4' || args[1] === 'hopqua4') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed4);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '5' || args[1] === 'hopqua5') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed5);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '6' || args[1] === 'hopqua6') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed6);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '7' || args[1] === 'hopqua7') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed7);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '8' || args[1] === 'hopqua8') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed8);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }else if (args[1] === '9' || args[1] === 'hopqua9') {
            return message.channel.send(`${person.displayName} bạn nhận được hộp quà từ ${message.author.username}`)
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
                                    message.channel.send(`<a:pickyes:880551847193092176>| **${person.displayName}** đã nhận phần quà này**`)
                                    .then(msg => {
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 3000);
                                        setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 5000)
                                          setTimeout(function() {
                                            msg.edit(`${hqvv}`);
                                          }, 8000)
                                          setTimeout(function() {
                                            msg.edit(embed9);
                                          }, 10000)
                                        });
                                    break;
                                
                                case '❌':
                                    msg.reactions.removeAll()
                                    message.channel.send(`<a:pickno:880551844814925836> | **${message.author.username}** đã từ chối nhận quà từ **${person.displayName}**`);
                                    break;
                            }
                        })
                    })
            });
        }
    }
}
