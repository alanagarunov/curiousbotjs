module.exports = {
    name: 'scout',
    description: 'Allows you to scout a bunch of cards. USAGE: uwu scout <amount>',
    execute(message, args){
        const axios = require('axios');
        const cheerio = require('cheerio');
        var tempstr = "";
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min ) ) + min;
        }
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
          }

        function getcard(){
            const urlbeginning = 'https://schoolido.lu/cards/';
            var maxnumberofcards = getRandomInt(0,2308);
            var fullurl = urlbeginning + maxnumberofcards;
            return axios.get(fullurl).then(response =>{
                return response.data
            });
        }

        //var i = 0;
        //console.log(typeof parseInt(args[0]))
        //console.log(parseInt(args[0]))
        var runthismanytimes = 100;
        var scouted = 0;
        for(var i = 0; i < runthismanytimes; i++){
            getcard().then(data => {
                var $ = cheerio.load(data);
                var titleofcard = $('title').text();
                var arrayoftitle = titleofcard.split(" ");
                tempstr = arrayoftitle[9];
                //console.log(tempstr);

                if(scouted == parseInt(args[0])){
                    i = 101;
                } else {
                    if(tempstr == "R"){
                        //console.log("pass");
                        if((getRandomInt(1,10) == 1 || getRandomInt(1,10) == 2 || getRandomInt(1,10) ==3 || getRandomInt(1,10) ==4 || getRandomInt(1,10) ==5 || getRandomInt(1,10) ==6)){
                            message.channel.send("Pick #" + scouted + ": " + arrayoftitle[6] + " " + arrayoftitle[7] + " " + arrayoftitle[8] + " " + arrayoftitle[9]);
                            scouted++
                        }
                    }
                    if(tempstr == "SR"){
                        //console.log("pass");
                        if((getRandomInt(1,10) == 7 || getRandomInt(1,10) == 8)){
                            message.channel.send("Pick #" + scouted + ": " + arrayoftitle[6] + " " + arrayoftitle[7] + " " + arrayoftitle[8] + " " + arrayoftitle[9]);
                            scouted++
                        }
                    }
                    if(tempstr == "SSR"){
                        //console.log("pass");
                        if((getRandomInt(1,10) == 9)){
                            message.channel.send("Pick #" + scouted + ": " + arrayoftitle[6] + " " + arrayoftitle[7] + " " + arrayoftitle[8] + " " + arrayoftitle[9]);
                            scouted++
                        }
                    }
                    if(tempstr == "UR"){
                        //console.log("pass");
                        if((getRandomInt(1,10) == 10)){
                            message.channel.send("Pick #" + scouted + ": " + arrayoftitle[6] + " " + arrayoftitle[7] + " " + arrayoftitle[8] + " " + arrayoftitle[9]);
                            scouted++
                        }
                    }
                }
            }
        )};
    }
}
