const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=>{
    console.log('Big shaq!');
});

client.login(process.env.BOT_TOKEN);
bot.on('message', function(user, userID, channelID, message, evt){
    //Bot needs to know if it will execute a command.
    //It will listen for messages that start with an '!'.
    if(message.substring(0, 1) == '!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //!ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ah, Yo, Boom, Ah'
                });
            break;
            //!skraa
            case 'skraa':
                bot.sendMessage({
                    to: channelID,
                    message: "The ting goes skrrrahh, pap, pap, ka-ka-ka Skidiki-pap-pap, and a pu-pu-pudrrrr-boom, Skya, du-du-ku-ku-dun-dun Poom, poom, you don' know"
                });
            break;
            //!hot
            case 'hot':
                bot.sendMessage({
                    to: channelID,
                    message: 'The girl told me, "Take off your jacket". I said, "Babes, man is not hot" (never hot). I tell her man is not hot (never hot). I tell her man is not hot (never hot)'
                });
            break;
            //!maths
            case 'maths':
                bot.sendMessage({
                    to: channelID,
                    message: 'TWO PLUS TWO IS FOUR MINUS ONE IS THREE, QUICK MATHS!'
                });
            break;
            //!introduce
            case 'introduce':
                bot.sendMessage({
                    to: channelID,
                    message: 'Yo, Big Shaq, the one and only.'
                });
            break;
            //!dad
            case 'dad':
                bot.sendMessage({
                    to: channelID,
                    message: "Hop out the four-door with the .44, it was one, two, three and four. Chillin' in the corridor, your dad is fourty-four."
                });
            break;
            //!nose
            case 'nose':
                bot.sendMessage({
                    to: channelID,
                    message: 'Look at your nose (Check your nose, fam) You donut, nose long like garden hose.'
                });
            break;
            //!sauce
            case 'sauce':
                bot.sendMessage({
                    to: channelID,
                    message: "Your girl knows I've got the sauce, no ketchup, just sauce, raw sauce."
                });
            break;
            //!cold
            case 'cold':
                bot.sendMessage({
                    to: channelID,
                    message: 'Put on your jacket, man can never be cold.'
                });
        }
    }
});
