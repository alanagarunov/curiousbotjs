module.exports = {
    name: 'card',
    description: 'Displays love live cards',
    execute(message, args){
        const axios = require('axios');
        const cheerio = require('cheerio');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
        const urlbeginning = 'https://schoolido.lu/cards/';
        const maxnumberofcards = getRandomInt(0,2307);
        const fullurl = urlbeginning + maxnumberofcards;
        const thedata = axios.get(fullurl).then(response => {
            const $ = cheerio.load(response.data); 
            const halffinalmessage = $('meta[property="og:image"]').attr('content');
            const fullfinalmessage = "https:" + halffinalmessage;
            message.channel.send(fullfinalmessage);
        })

    }
}