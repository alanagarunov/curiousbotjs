
    const fs = require('fs');
    function readArguments(nameofperson){
        const nameoffile = "dictionary" + nameofperson + ".json";
        const filename = nameoffile;
        return filename;
    }

    function loadDictionary(filename){
        let rawdata = fs.readFileSync(filename);
        var dictionary = JSON.parse(rawdata);
        return dictionary;
    }

    function learn(dict, input){
        var splitwords = [];
        splitwords = input.split(" ")
        for(var i = 0; i < (splitwords.length - 1); i++){
            var currentWord = splitwords[i];
            var nextWord = splitwords[i+1];
            if(!(currentWord in dict)){
                dict[currentWord] = { [nextWord] : 1 };
            } else{
                AllNextWords = dict[currentWord];
                if(!(nextWord in AllNextWords)){
                    dict[currentWord][nextWord] = 1;
                }else{
                    dict[currentWord][nextWord] = dict[currentWord][nextWord]+1;
                }
            }
        }
        return dict;
    }

    function updateFile(filename, dictionary){
        var jsonstr = JSON.stringify(dictionary);
        fs.writeFileSync(filename, jsonstr);
    }

  
     function mainadder(inputmessage, nameofperson){
        var dictionaryFile = readArguments(nameofperson);
        var dictionary = loadDictionary(dictionaryFile);
        var userinput = inputmessage;
        if(userinput === ""){
            console.log("Error");
        }
        dictionary = learn(dictionary, userinput);
        updateFile(dictionaryFile, dictionary);
    }
    module.exports = {
        mainadder,
        updateFile,
        learn,
        loadDictionary,
        readArguments
    };
