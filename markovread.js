
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
            nextWord = splitwords[i+1];
        }
        for(var key in dict){
            if(key === currentWord){
                var AllNextWords = dict[currentWord];
                //console.log(AllNextWords);
                for(var key in AllNextWords){
                    if(key === nextWord){
                    //convert python syntax to js??
                        dict[currentWord][nextWord] = dict[currentWord][nextWord]+1;
                        }
                        else{
                            dict[currentWord][nextWord] = 1;
                    }
                }
            }
            else{
            //improper syntax most likely
                dict[currentWord] = { currentWord : 1 };
            }
        }
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
