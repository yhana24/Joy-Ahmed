module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "Joy-Ahmed",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/2jJqZ5sK/received-1099503094252818.jpg", 

            "https://i.postimg.cc/2jJqZ5sK/received-1099503094252818.jpg", 

            "https://i.postimg.cc/2jJqZ5sK/received-1099503094252818.jpg",

"https://i.postimg.cc/2jJqZ5sK/received-1099503094252818.jpg",

            "https://i.postimg.cc/2jJqZ5sK/received-1099503094252818.jpg"];

var callback = () => api.sendMessage({body:`𝔸𝔻𝕄𝕀ℕ 𝔸ℕ𝔻 𝔹𝕆𝕋 𝕀ℕ𝔽𝕆ℝ𝕄𝔸𝕋𝕀𝕆ℕ 
________________________________________

❇️𝑩𝑶𝑻 𝑵𝑨𝑴𝑬 : ${global.config.BOTNAME}

❇️𝑩𝑶𝑻 𝑨𝑫𝑴𝑰𝑵 : 『𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬』

❇️ADDRESS: 𝑻𝑨𝑹𝑨𝑲𝑨𝑵𝑫𝑰, 𝑺𝑨𝑹𝑰𝑺𝑯𝑨 𝑩𝑨𝑹𝑰, 𝑱𝑨𝑴𝑨𝑳 𝑷𝑼𝑹 

_____________CONTACT_____________

❇️𝑭𝑨𝑪𝑬𝑩𝑶𝑶𝑲: https://www.facebook.com/profile.php?id=100000121528628

❇️𝑾𝑯𝑨𝑻𝑺 𝑨PP: 01709045888

❇️𝑩𝑶𝑻 𝑷𝑹𝑬𝑭𝑰𝑿 : ${global.config.PREFIX}

❇️𝑩𝑶𝑻 𝑶𝑾𝑵𝑬𝑹 :  𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 

𝑂𝑇𝐻𝐸𝑅 𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝑇𝐼𝑂𝑁____________________

𝑻𝒀𝑷𝑬 /𝑨𝑫𝑴𝑰𝑵 

➟ 𝑼𝑷𝑻𝑰𝑴𝑬

𝑻𝑶 𝑫𝑨𝒀 𝑰𝑺 𝑻𝑰𝑴𝑬 : ${juswa} 

𝑩𝑶𝑻 𝑰𝑺 𝑹𝑼𝑵𝑵𝑰𝑵𝑮 ${hours}:${minutes}:${seconds}.

𝑇𝐻𝐴𝑁𝐾𝑆 𝐹𝑂𝑅 𝑈𝑆𝐼𝑁𝐺 𝐵𝑂𝑇 ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
