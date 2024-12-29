module.exports.config = {
  name: "uid",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Mirai Team",
  description: "Get the user's Facebook UID.",
  prefix: false,
  category: "other",
  cooldowns: 5
};

module.exports.run = function ({ api, event }) {
  if (Object.keys(event.mentions).length === 0) {
    if (event.messageReply) {
      const senderID = event.messageReply.senderID;
      return api.shareContact(senderID, event.messageReply.senderID, event.threadID);
    } else {
      return api.shareContact(`${event.senderID}`, event.senderID, event.threadID, event.messageID);
    }
  } else {
    for (const mentionID in event.mentions) {
      const mentionName = event.mentions[mentionID];
      api.shareContact(`${mentionName.replace('@', '')}: ${mentionID}`, mentionName, event.threadID);
    }
  }
};