import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname, version, release, arch } from 'os'
import speed from 'performance-now'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'


let format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix }) => {
   let bot = global.db.data.settings[conn.user.jid]
  
   let totalreg = Object.keys(global.db.data.users).length
   let totalcmd = Object.values(plugins).filter((v) => v.help && v.tags).length
   const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
   const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
   const used = process.memoryUsage()
   const cpus = _cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
   }, {
      speed: 0,
      total: 0,
      times: {
         user: 0,
         nice: 0,
         sys: 0,
         idle: 0,
         irq: 0
      }
   })
let pp = 'https://telegra.ph/file/e454350e2031b86d0b362.jpg'
   let timestamp = speed()
   let latensi = speed() - timestamp
   let uptime = `${clockString(process.uptime())}`
   let teks = ` –  *☾ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ☽*
╓╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌✪
╠➤  *ᴄʀᴇᴀᴅᴏʀ* : @${owner[0][0].split('@s.whatsapp.net')[0]}
╠➤  *ᴘʀᴇꜰɪᴊᴏ* : [  ${usedPrefix}  ]
╠➤  *ᴘʟᴀᴛᴀꜰᴏʀᴍᴀ* : ${platform()}
╠➤  *ʀᴀᴍ* : ${format(totalmem() - freemem())} / ${format(totalmem())}
╠➤  *ꜰʀᴇᴇʀᴀᴍ* : ${format(freemem())}
╠➤  *ꜱᴘᴇᴇᴅ* : ${latensi.toFixed(4)} ms
╠➤  *ᴜᴘᴛɪᴍᴇ* : ${uptime}
╠➤  *ᴍᴏᴅᴏ* : ${bot.public ? 'Privado' : 'Publico'}
╠➤  *ʀᴇɢɪꜱᴛʀᴀᴅᴏꜱ* : ${totalreg} Usuarios
╠➤  *ᴄᴏᴍᴀɴᴅᴏꜱ* : ${totalcmd} total
╙╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌✪

 –  *☾ 𝗜𝗡𝗙𝗢 𝗖𝗛𝗔𝗧 ☽*
╓╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌✪
╠➤   *ᴄʜᴀᴛꜱ ᴇɴ ɢʀᴜᴘᴏꜱ* : ${groupsIn.length}
╠➤   *ɢʀᴜᴘᴏꜱ ᴜɴɪᴅᴏꜱ* : ${groupsIn.length}
╠➤   *ɢʀᴜᴘᴏꜱ ꜱᴀʟɪᴅᴏꜱ* : ${groupsIn.length - groupsIn.length}
╠➤   *ᴄʜᴀᴛꜱ ᴘʀɪᴠᴀᴅᴏꜱ* : ${chats.length - groupsIn.length}
╠➤   *ᴄʜᴀᴛꜱ ᴛᴏᴛᴀʟᴇꜱ* : ${chats.length}
╙╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌✪`
await conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'], externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: '↷✦╎IBKMR - Bot╎🤍˖ ✨',body: '𝙸𝚗𝚏𝚘 𝙱𝚘𝚝', previewType: 0, thumbnailUrl: pp, sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc'}}})
}


handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot']

export default handler

function clockString(ms) {
	let h = isNaN(ms) ? '--' : Math.floor(ms % (3600 * 24) / 3600)
	let m = isNaN(ms) ? '--' : Math.floor(ms % 3600 / 60)
	let s = isNaN(ms) ? '--' : Math.floor(ms % 60)
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}