const axios = require("axios");
module.exports = {
  config: {
    name: "demorse",
    version: "1.0.1",
    author: "Kushal-Don",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Morse to text"
    },
    longDescription: {
      en: "Convert morse to morse text"
    },
    category: "tool",
    guide: {
      en: "{prefix}morse <text>"
    },
  },
onStart: async function ({ api, event, args }) {
  let muji = args.join(" ");
  if (!muji)return api.sendMessage("You must need to enter a morse code for text", event.threadID, event.messageID);

  try {
  const res = await axios.get(`https://api.kushal-projects.repl.co/muji/morse-decode/kushal?code=${encodeURIComponent(muji)}`);
  
  var kushal = res.data.kushal;
  return api.sendMessage(kushal, event.threadID, event.messageID);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return api.sendMessage("❌ you are using wrong api or api is updated please contact Kushal Don for new updated api", event.threadID, event.messageID);
    } else {
      return api.sendMessage("I think this code isn't working properly");
    }
  }
  }
};