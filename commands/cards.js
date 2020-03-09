module.exports = {
    name: 'card',
    description: 'Displays love live cards',
    execute(message, args){
        const axios = require('axios');
        const cheerio = require('cheerio');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min ) ) + min;
        }

        
        if(args[0] === "1"){
            const urlbeginning = 'https://schoolido.lu/cards/';
            const maxnumberofcards = getRandomInt(0,2307);
            const fullurl = urlbeginning + maxnumberofcards;
            const newdata = axios.get(fullurl).then(response => {
                const $ = cheerio.load(response.data);
                const halffinalmessage = $('meta[property="og:image"]').attr('content');
                const fullfinalmessage = "https:" + halffinalmessage;
                message.channel.send(fullfinalmessage);
            });
        } else {
            function getcard(){
                const urlbeginning = 'https://schoolido.lu/cards/';
                var maxnumberofcards = getRandomInt(0,2308);
                var fullurl = urlbeginning + maxnumberofcards;
                return axios.get(fullurl).then(response =>{
                    return response.data
                });
            }
            for(var x = 0; x < 9; x++){
                getcard().then(data => {
                    var $ = cheerio.load(data);
                    var titleofcard = $('title').text();
                    var arrayoftitle = titleofcard.split(" ");
                    //console.log(titleofcard);
                    message.channel.send(arrayoftitle[6] + " " + arrayoftitle[7] + " " + arrayoftitle[8] + " " + arrayoftitle[9]);
                });
            }

        }
    }
}
