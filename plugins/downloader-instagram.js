import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import instagramGetUrl from 'instagram-url-direct'
import vm from 'node:vm'
import { instagram } from "@xct007/frieren-scraper";
import { instagramdl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        }, 
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

if (!args[0]) throw `❌ ERROR \n\n𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.instagram.com/p/B8tX7znH9jX/?igsh=MXc0eWRhM2Y5YjU0dw==*`
  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
try {
const datTa = await instagram.v1(args[0])
if (datTa.error) return m.reply(`${datTa.message}`);
for (let urRRl of datTa) {
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${urRRl.url}`)).text()    
let tXXxt = `✨ *ENLACE:* ${shortUrRRl}\n\n${wm}`.trim()    
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m)    
await new Promise(resolve => setTimeout(resolve, 10000))}
} catch {  
try {  
const AA = await savefrom(args[0])    
let shortUrl222 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt222 = `✨ *ENLACE:* ${shortUrl222}\n\n${wm}`.trim()
await conn.sendFile(m.chat, AA.url[0].url, 'error.mp4', txt222, m)
} catch {
console.log('Error en el intento 1')  
try {    
const resultss = await instagramGetUrl(args[0]).url_list[0]    
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `✨ *ENLACE:* ${shortUrl2}\n\n${wm}`.trim()
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
} catch {  
console.log('Error en el intento 2')  
try {
const resultssss = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text()
let txt4 = `✨ *ENLACE:* ${shortUrl3}\n\n${wm}`.trim()
for (const { url } of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
} catch {
console.log('Error en el intento 3')  
try {   
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `✨ *ENLACE:* ${shortUrl1}\n\n${wm}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)     
} catch { 
console.log('Error en el intento 4, sin resultados')  
conn.sendMessage(m.chat, {text: '`❌ ERROR` \n\n𝙀𝙍𝙍𝙊𝙍 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍', edit: key});
handler.limit = 0
}}}}}}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70
handler.register = true
export default handler
async function savefrom(urlL) {
let body = new URLSearchParams({ "sf_url": encodeURI(urlL), "sf_submit": "", "new": 2, "lang": "id", "app": "", "country": "id", "os": "Windows", "browser": "Chrome", "channel": " main", "sf-nomad": 1 });
let { data } = await axios({ "url": "https://worker.sf-tools.com/savefrom.php", "method": "POST", "data": body, "headers": { "content-type": "application/x-www-form-urlencoded", "origin": "https://id.savefrom.net", "referer": "https://id.savefrom.net/", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36" }});
let exec = '[]["filter"]["constructor"](b).call(a);';
data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
let context = { "scriptResult": "", "i": 0 };
vm.createContext(context);
new vm.Script(data).runInContext(context);
return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])
}
/*import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {

    if (!args[0]) {

        throw `⚠️ Por favor, ingresa un enlace de Instagram.`;

    }

if (!args[0].match(/instagram/gi))

    throw `❎ Asegurese que el enlace sea de Instagram`;

   
    try {

        const apiUrl = `https://visionaryapi.boxmine.xyz/api/v1/igdl?url=${args[0]}`;

        const response = await fetch(apiUrl);

        const data = await response.json();

        if (data.success && data.data.length > 0) {

            for (const media of data.data) {

                if (media.type === 'video')

            {

                    await conn.sendFile(m.chat, media.url_download, 'video.mp4', '', m);

                } else {

                    await conn.sendFile(m.chat, media.url_download, 'imagen.jpg', '', m);

                }

            }

        } else {

            throw '🐢 No se pudo obtener el contenido de Instagram.';

        }

    } catch (error) {

        throw `🐢 Ocurrió un error al procesar la solicitud:\n\n ${error}`;

    }

};

handler.help = ['instagram'];

handler.tags = ['dl'];

handler.command = /^(instagramdl|instagram|igdl|ig)$/i;

export default handler
/*import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagramdl} from '@bochilteam/scraper';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `*_ingresa un enlace de instagram_*\n\n*ejemplo:* ${usedPrefix + command} https://www.instagram.com/reel/C4QftgYIYI_/?igsh=NDVjY2ZqdWU2d3dm`;
  m.reply(`⌛ descargando video...`);
  try {
    const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
    const responsel = await axios.get(apiUrll);
    const resultl = responsel.data;
    for (const item of resultl.message) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
      const tXXxt = ``.trim();
      conn.sendFile(m.chat, item._url, null, tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {    
  try {
    const datTa = await instagram.v1(args[0]);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const tXXxt = ``.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = ``.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = ``.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = ``.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch {
            throw `[❌] Ocurrio un error, intentalo denuevo`;
          }
        }
      }
    }
  }
};
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
export default handler;*/
