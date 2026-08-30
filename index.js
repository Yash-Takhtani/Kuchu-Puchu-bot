require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");

const pexels = process.env.PEXELS;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
//help
app.command("/kuchupuchubot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/kuchupuchubot-help - Get some help!
/kuchupuchubote-ping - Check bot latency
/kuchupuchubot-doggy - Get a cutie doggy image
/kuchupuchubot-quack - Get a cutie duck image
/kuchupuchubot-meow - Get a cutie cat image
/kuchupuchubot-pigeon - Get a cutie pigeon image`
  });
});
// ping
app.command("/kuchupuchubot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
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
// random cat
app.command("/kuchupuchubot-meow",async({ack, respond}) => {
  await ack();
  try{
    const response = await axios.get("https://api.thecatapi.com/v1/images/search");
    await respond({
      blocks: [
        {
          type: "image",
          image_url: response.data[0].url,
          alt_text: "Meow"
        }
      ]
    });
  }catch(err){
    console.error(err);

    await respond({
      text: "Meow unavailable :("
    });
  }

});
// random batak
app.command("/kuchupuchubot-quack",async({ack, respond}) => {
  await ack();
  try{
    const response = await axios.get("https://random-d.uk/api/v2/random");
    await respond({
      blocks: [
        {
          type: "image",
          image_url: response.data.url,
          alt_text: "Batak Kumar"
        }
      ]
    });
  }catch(err){
    console.error(err);

    await respond({
      text: "Batak unavailable :("
    });
  }

});
// random pigeon
app.command("/kuchupuchubot-pigeon",async({ack, respond}) => {
  await ack();
  const randomPage = Math.floor(Math.random() * 50) + 1;
  try{
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query: "pigeons",
        per_page: 20,
        page: randomPage,
      },
      headers: {
        Authorization: pexels,
      },
    });

    const photos = response.data?.photos;
    if (!photos || photos.length === 0) {
      throw new Error("No photos returned");
    }
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

    await respond({
      blocks: [
        {
          type: "image",
          image_url: randomPhoto.src.medium,
          alt_text: "Gutargu"
        }
      ]
    });
  }catch(err){
    console.error(err);

    await respond({
      text: "Pigeon unavailable :("
    });
  }

});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
