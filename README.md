# CuriousbotJS

This is a discord bot made in javascripts's node.js. It uses the discordjs api found here https://github.com/discordjs/discord.js

In addition to this api, there are also webscraping capabilities using axios https://github.com/axios/axios and cheerio https://github.com/cheeriojs/cheerio 




## Using the Markov Chain Text Generator

There are multiple ways to setup the text generator, however they all require a bit of manual modification on your end. A future improvement would to make this much more streamlined.

In order to give someone the ability to generate text based of their speaking patterns:

First, copy the dictionaryexample.json to the folder where main.js is being run and change "example" to any name. Remember this name.

Next, open runmarkovconstant.js and copy the following block inside function "themessage", it should be the only function in this file.
```js
if(anid === "<id>"){
        mr.mainadder(msgcontent, "<person>");
    }
```
Replace <person> with the name you chose on the dictionary. Replace <id> with the user's discord id, you can get this by right clicking on their name in a server (make sure you are in developer mode first!).

Its all set! In order to generate some text, run "<bot_prefix> simulate <person>".

## Markov Chain Text Generator Options

You can change the length of the outputted text by heading into markovgenerate.js file inside the commands folder, and changing the length variable on line 12 (it is measured in characters).

### I want add the entire server to a single command
This is also possible, simply follow the "Using the Markov Chain Text Generator" but instead of the copying the given block copy this instead:
```js
 mr.mainadder(msgcontent, "<person>");
```
As before, replace <person> with the name of the dictionary file, in this case it wouldn't be a person's name it would probably be the name of the server or channel.
## FAQ

#### What is a Markov Chain?

A Wikipedia article https://en.wikipedia.org/wiki/Markov_chain can probably explain it better than I can. However the best explanation I can give is that it gives the probability of what can happen next based on what has happened before.

A better way to explain is how it is used in this program. If we have the sentence "The quick brown fox jumped over the lazy dog" we can see that "quick" and "lazy" comes after "the". Therefore, there is a 50% chance that when we call a text generation, "quick" or "lazy" will come after "the" if "the" ever comes up. The chain continues, after "lazy" is "dog" and so on and so forth. The result will complexify the more data the program gets to read.

#### None of the text generated seems to make sense. Why?

After all, we are still relying on probability to create our sentences. The program has no idea how to use proper grammar, it doesn't even know what the words mean. But since we (typically) write using proper grammar, a markov chain generator like this will have a high probability of choosing legibile arrangement of words. But there is no gurantee it will make any sense. 

#### You also have the same program in your curiousbot project. Why is that?

When I made this bot, I made it with the intention of learning a new programming language, in this case javascript. While I believe I succeeded somewhat, I eventually found that my purposes for programming are better utilized on python.



  
## Other features

- Ping discord servers (useful to see if the servers have gone down or not)
- Sleep Cycle Calculator
- View System info (CPU Temps/Utilization , uptime, etc)
- Love Live! SIF & SIFAS Gacha Card Generator

  
