const mr = require('./markovread.js');

function themessage(anid, achannel, msgcontent){
    mr.mainadder(msgcontent, "<person>");
    if(anid === "<id>" && !(achannel == ("<channel>" || "<channel>""))){
        mr.mainadder(msgcontent, "maddy");
    }
    if(anid === "<id>" && !(achannel == ("<channel>"" || "<channel>""))){
        mr.mainadder(msgcontent, "<person>");
    }
    if(anid === "<id>"){
        mr.mainadder(msgcontent, "<person>");
    }
    if(anid === "<id>"){
        mr.mainadder(msgcontent, "<person>");
    }
    if(anid === "<id>"){
        mr.mainadder(msgcontent, "<person>");
    }
}

module.exports = {
    themessage
}
