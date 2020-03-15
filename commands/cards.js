module.exports = {
    name: 'scout1',
    description: 'Displays love live cards from love live SIF All Stars \nUSAGE: uwu starsscout OR uwu starsscout <number_of_card>',
    execute(message, args){
        const axios = require('axios');
        const cheerio = require('cheerio');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min ) ) + min;
        }

        function getcard(){
            const baseurl = 'http://kachagain.com/sifas/cards.php';
            const urlbeginning = 'https://kachagain.com/sifas/images/cards/';
            var maxnumberofcards = getRandomInt(0,190);
            var fullurl = urlbeginning + maxnumberofcards;
            //message.channel.send(fullurl);
            const newdata = axios.get(baseurl).then(response => {
                const $ = cheerio.load(response.data);
                var yourint = 0;
                if(args[0] == "view"){
                    yourint = args[1]
                } else {
                    yourint = getRandomInt(0,190)
                }

                var imageurl = "";
                var createselector = '#cards > div:nth-child(' + yourint + ') > table > tbody > tr:nth-child(1) > th'
                var fullurl = urlbeginning + yourint;
                var title = $(createselector).text()
                if(title.includes("R")){
                    imageurl = 'https://media.discordapp.net/attachments/557010696844345344/688535766728441869/0.png'
                }
                if(title.includes("SR")){
                    imageurl = 'https://media.discordapp.net/attachments/557010696844345344/688535583382962369/1.png'
                }
                if(title.includes("UR")){
                    imageurl = 'https://media.discordapp.net/attachments/557010696844345344/688535676127281259/2.png'
                }
                const embed = {
                    "title": title,
                    "description": "",
                    "url": "",
                    "color": 10631964,
                    "footer": {
                        "icon_url": "",
                        "text": "Questions? Comments? Concerns? Me too, pal. -Anna 2020"
                      },
                    "thumbnail": {
                        "url": imageurl
                      },
                    "image": {
                        "url": fullurl
                      },
                  };
                  message.channel.send("", { embed });
                });
        }
        getcard();

    }
}
