import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `[📚] 𝑖𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜 𝑑𝑒 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑞𝑢𝑒 𝑞𝑢𝑖𝑒𝑟𝑒𝑠\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜 :*\n ${usedPrefix + command} Mono`
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
} catch {  
try {
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
} catch {
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
} catch {
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
} catch {
}}}}};
handler.help = ['iaimagen']
handler.tags = ['ia']
handler.command = ['iaimagen']
export default handler
