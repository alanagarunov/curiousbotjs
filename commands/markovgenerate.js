module.exports = {
    name: 'simulate',
    description: 'Markov chain data harvesting project, rewritten pog',
    execute(message, args){
        const fs = require('fs');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }

        function readArugments(args){
            const nameoffile = "dictionary" + args + ".json";
            const length = 100;
            const filename = nameoffile;
            return [length, filename];
        }
        
        function loadDictionary(filename){
                //const path = './' + filename;
                let rawdata = fs.readFileSync(filename);
                var dictionary = JSON.parse(rawdata);
                return dictionary;

            }

        function pickRandom(dict){
            const randomNumber = getRandomInt(0, (Object.keys(dict).length) - 1 );
            const newWord = Object.keys(dict)[randomNumber];
            return newWord;
        }
        function getNextWord(word, dict){
            for(var key in dict){
                if(word === key){
                    var canadiates = dict[word];
                    var canadiatesNormal = [];
                    for(word in canadiates){
                        frequency = canadiates[word];
                        for(var i = 0; i < frequency; i++){
                            canadiatesNormal.push(word);
                        }
                    }
                    const rnd = getRandomInt(0, (canadiatesNormal.length -1) );
                    return canadiatesNormal[rnd];
                }
                else{
                    newWord = pickRandom(dict);
                    return newWord;
                }
            }
        }
        function maingenerator(args){
            var values = readArugments(args);
            const length = values[0];
            const filename = values[1];
            dictionary = loadDictionary(filename);
            var lastWord = "dust";
            var result = "";
            for(var i = 0; i < length; i++){
                newWord = getNextWord(lastWord, dictionary);
                result = result + " " + newWord;
                lastWord = newWord
            }
            return result;
        }
        var coolmessage = maingenerator(args);
        message.channel.send(coolmessage);
        
        }
    }
