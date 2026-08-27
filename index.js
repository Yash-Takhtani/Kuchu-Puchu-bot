require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
// ping
app.command("/kuchupuchubot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
//help
app.command("/kuchupuchubot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/kuchupuchubot-help - Get some help!
/kuchupuchubote-ping - Check bot latency
/kuchupuchubot-doggy - Get a cutie doggy image`
  });
});
// random dog
app.command("/kuchupuchubot-doggy", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://random.dog/woof.json");
    const dogUrl = response.data.url;

    await respond({
      blocks: [
        {
          type: "image",
          image_url: dogUrl,
          alt_text: "A random dog"
        }
      ]
    });

  } catch (err) {
    console.error(err);

    await respond({
      text: "Doggy unavailable :("
    });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();