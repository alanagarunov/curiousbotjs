module.exports = {
    name: 'ping',
    description: 'Preforms a ping test on discord',
    execute(message, args){
        var ping = require('ping');
        const servers = ["us-south373.discord.gg", "us-west937.discord.gg", "us-central307.discord.gg", "eu-central971.discord.gg", "southafrica996.discord.gg", "japan906.discord.gg", "sydney334.discord.gg"];
        const area = ["southUS", "westUS", "usCentral", "EU", "Africa", "Japan/Asia", "Aus"];
        var responses = [];

        servers.forEach(function(host){
            var time1 = new Date().getTime();
            ping.sys.probe(host, function(isAlive){
                var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
                console.log(msg)
                if(msg.includes("alive")){
                    var time2 = new Date().getTime();
                    var milliseconds = time2 - time1;
                    responses.push(milliseconds)
                }
                if(responses.length >= 6){
                    const embed = {
                        "title": "",
                        "description": "",
                        "url": "",
                        "color": 10631964,
                        "thumbnail": {
                            "url": "https://cdn.discordapp.com/attachments/557010696844345344/687741874827690044/633701746782502961.png"
                          },
                        "fields": [
                          {
                            "name": "US South ping on 373",
                            "value": responses[0] + "ms"
                          },
                          {
                            "name": "US West ping on 937",
                            "value": responses[1] + "ms"
                          },
                          {
                            "name": "US Central ping on 307",
                            "value": responses[2] + "ms"
                          },
                          {
                            "name": "EU central ping on 971",
                            "value": responses[3] + "ms"
                          },
                          {
                            "name": "Africa (South) ping on 996",
                            "value": responses[4] + "ms"
                          },
                          {
                            "name": "Japan ping on 906",
                            "value": responses[5] + "ms"
                          },
                          {
                            "name": "Australia ping on 334",
                            "value": responses[6] + "ms"
                          },
                        ]
                      };
                      message.channel.send("", { embed });
                }
            })
        })
    }
}
