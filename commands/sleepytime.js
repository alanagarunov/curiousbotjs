module.exports = {
    name: 'sleeptime',
    description: 'Tells you what time to wake up for goods night rest.\nUSAGE: uwu sleeptime <hour> <minute>\n where <hour> <minute> is 24 hour time and the time is what time you wanna wake up at.',
    execute(message, args){
        var now = new Date();
        var totalminutes = parseInt(args[1]) + parseInt(args[0])*60;
        var totalcurrentminutes = now.getMinutes() + (now.getHours())*60;
        var sleepcycle = 0;
        var timetofall = [];

        for(var i = 0; i < 10; i++){
            if(totalminutes > 0){
                if((totalminutes - 90) > 0){
                    totalminutes = totalminutes - 90;
                    sleepcycle++;
                } else{
                    totalminutes = 1439;
                }
            }
            if(sleepcycle == 2){
                timetofall.push(totalminutes);
            } else if(sleepcycle == 4){
                timetofall.push(totalminutes);
            } else if(sleepcycle == 6){
                timetofall.push(totalminutes);
            } else if(sleepcycle == 8){
                timetofall.push(totalminutes);
            }
        }
        var b2h = 0, b2m = 0, b4h = 0, b4m = 0, b6h = 0, b6m = 0, b8h = 0, b8m = 0;

        if(Math.floor(timetofall[0]/60) < 10) {b2h = "0"+ Math.floor(timetofall[0]/60)} else {b2h = Math.floor(timetofall[0]/60) }
        if((timetofall[0]%1)*60  < 10){b2m = "0"+ (timetofall[0]%1)*60} else {b2m = (timetofall[0]%1)*60 }

        if(Math.floor(timetofall[1]/60) < 10) {b4h = "0"+ Math.floor(timetofall[1]/60)} else {b4h = Math.floor(timetofall[1]/60) }
        if((timetofall[1]%1)*60  < 10){b4m = "0"+ (timetofall[1]%1)*60} else {b4m = (timetofall[1]%1)*60 }

        if(Math.floor(timetofall[2]/60) < 10) {b6h = "0"+ Math.floor(timetofall[2]/60)} else {b6h = Math.floor(timetofall[2]/60) }
        if((timetofall[2]%1)*60  < 10){b6m = "0"+ (timetofall[2]%1)*60} else {b6m = (timetofall[2]%1)*60 }

        if(Math.floor(timetofall[3]/60) < 10) {b8h = "0"+ Math.floor(timetofall[3]/60)} else {b8h = Math.floor(timetofall[3]/60) }
        if((timetofall[3]%1)*60  < 10){b8m = "0"+ (timetofall[3]%1)*60} else {b8m = (timetofall[3]%1)*60 }


        const embed = {
            "title": "",
            "description": "",
            "url": "",
            "color": 10631964,
            "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/557010696844345344/687741874827690044/633701746782502961.png"
              },
            "footer": {
                "icon_url": "",
                "text": "Keep in mine, these are the times you should be falling asleep at.\nWant to do it yourself? Just count how many times you add 90 minutes to reach your wakeup time. What up count must be a whole number."
              },
            "fields": [
              {
                "name": "For a total of 2 sleep cycles (unideal) you should sleep at:",
                "value": b2h + ":" + b2m
              },
              {
                "name": "For a total of 4 sleep cycles you should sleep at:",
                "value": b4h +  ":" +  b4m
              },
              {
                "name": "For a total of 6 sleep cycles (gold standard) you should sleep at:",
                "value": b6h +  ":" +  b6m
              },
              {
                "name": "For a total of 8 sleep cycles you should sleep at:",
                "value": b8h +  ":" +  b8m
              },
            ]
          };
          message.channel.send("", { embed });

    }
}
