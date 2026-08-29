# Kuchu Puchu Bot
This bot is very cute (Kuchu Puchu). It shows you cute images of dogs, cats and ducks.

<img width="613" height="462" alt="image" src="https://github.com/user-attachments/assets/8ba751c0-d073-43cf-953d-4df9bfea9155" />

You can use the following commands - 
 - /kuchupuchubot-help   -  Get some help!
 - /kuchupuchubote-ping  -  Check bot latency
 - /kuchupuchubot-doggy  -  Get a cutie doggy image
 - /kuchupuchubot-quack  -  Get a cutie duck image
 - /kuchupuchubot-meow   -  Get a cutie cat image

<img width="465" height="353" alt="image" src="https://github.com/user-attachments/assets/820a24ee-75e9-48a4-aba8-140aac372dbf" />

You can test it out right now! - 

Join the [Hack Club Slack](https://slack.hackclub.com/) and try the bot [here](https://hackclub.enterprise.slack.com/archives/C0P5NE354).

# Working
The bot's actions are handled by a NodeJS app. It is connected to the Slack API and sends the response through it whenever someone runs a command. This can be ran on your system locally or on services like Vercel and Nest to keep it running 24/7.

# Use it locally on your own bot
 - Clone this repo
 - Create a .env file with the `SLACK_BOT_TOKEN` and `SLACK_APP_TOKEN` from your bot.
 - Rename or Customize the bot's commands if you wish to from `index.js` and make sure it matches with Slash commands in your slack bot settings.
 - Add the bot to your workspace, run the `index.js` file and you're good to go.

# Credits 

 - Dog images - https://random.dog/woof.json
 - Cat images - https://api.thecatapi.com/v1/images/search
 - Duck images - https://random-d.uk/api/v2/random
 - The bot is live 24/7, thanks to Hackclub's Nest. 
