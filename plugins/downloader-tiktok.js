import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) return conn.reply(m.chat, `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑙𝑎 𝑢𝑟𝑙 𝑑𝑒 𝑢𝑛 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘 𝑞𝑢𝑒 𝑑𝑒𝑠𝑒𝑎𝑠 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* ${usedPrefix + command} https://www.tiktok.com/@catsparadise.1/video/7246312711640894746?is_from_webapp=1&sender_device=pc&web_id=7333552077824722438 .*`, m, estilo)
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `𝑉𝑒𝑟𝑖𝑓𝑖𝑐𝑎 𝑞𝑢𝑒 𝑙𝑎 𝑢𝑟𝑙 𝑠𝑒𝑎 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘`, m)
try {
let p = await fg.tiktok(args[0]) 
await conn.sendFile(m.chat, p.play, 'tiktok.mp4', '', m)
} catch {  	
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw global.error
await conn.sendFile(m.chat, url, 'fb.mp4', 'Aqui tienes tu video', m)
} catch {
conn.reply(m.chat, '[❌] 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟 𝑖𝑛𝑒𝑠𝑝𝑒𝑟𝑎𝑑𝑜', m)
}}}
handler.help = ['tiktok'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
export default handler
