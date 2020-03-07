module.exports = {
    name: 'checksystem',
    description: 'Delievers system information',
    execute(message, args){
        const si = require('systeminformation');
        async function cpudata(){
            const data = await si.cpuTemperature();
            const data1 = await si.system();
            const data3 = await si.currentLoad();
            const data4 = await si.osInfo();
            const data2 = await si.time();
            const embed = {
                "title": "WELCOME",
                "description": "The following System stats are presented:",
                "color": 12411222,
                "image": {
                  "url": "https://image.flaticon.com/icons/svg/2653/2653570.svg"
                },
                "fields": [
                  {
                    "name": "CPU Temperature (average)",
                    "value": data.main + " C"
                  },
                  {
                    "name": "System info",
                    "value": "Running on " + data1.model,
                    "Inline": true
                  },
                  {
                    "name": "Operating system",
                    "value": "We are on " + data4.platform + " " + data4.distro + " " + data4.release + " " + data4.kernel + " " + data4.codepage,
                    "Inline": true
                  },
                  {
                    "name": "I am experiencing this current load",
                    "value": data3.currentload + " %"
                  },
                  {
                    "name": "I've been up for this amount of time",
                    "value": data2.uptime + " seconds, or " + data2.uptime/86400 + " days. I'm located at " + data2.timezone + " if you were wondering."
                  },
                ]
              };
              message.channel.send(" Here is the information ", { embed });
        }
        cpudata();
    }
}
