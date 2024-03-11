import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'waifu.png', '*Waifu*', m)
}

handler.help = ['waifu']
handler.tags = ['img']
handler.command = ['waifu']


export default handler
