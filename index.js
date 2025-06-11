const { Telegraf } = require("telegraf");

require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `const binarySearch = function search(arr, x) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return undefined;
}
`;

try {
  bot.start((ctx) => ctx.reply("Welcome to Sathwik's tg bot"));

  bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString));

  bot.command("toplinuxcommands", (ctx) => ctx.reply("ls cd pwd grep rm"));

  bot.command("cricketlineup", (ctx) =>
    ctx.reply(
      "rohit shikar kohli rahul rishab hardik axar jadeja bumrah kuldeep siraj"
    )
  );

  bot.command("sticker", (ctx) => ctx.reply("🫠"));

  bot.on("text", (ctx) => {
    console.log(ctx.update.message);
    if (ctx.update.message == "Fav cricket player") {
      ctx.reply("VIRAT KOHLI");
    }
    ctx.reply("I don't understand humans");
  });

  bot.launch();
} catch (error) {
  console.log("Unexpected command");
}
