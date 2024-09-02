import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    
    const a = ['10', '11', '15', '16','20','23','25','28','30','34','35','39','40','42'].getRandom();
    const b = ['50','53','55','58','60','62','65','66','70','72','75','77','80','81','85','87'].getRandom();
    const c = ['90','92','95','99'].getRandom();
    
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `*¡Empezando reinicio!*`}, {quoted: m});
await delay(1000 * 1);
          await conn.sendMessage(m.chat, {text: `*Progreso: ${a}%*`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*Progreso: ${b}%*`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*Progreso: ${c}%*`, edit: key});
await conn.sendMessage(m.chat, {text: `*_Reiniciando._*`, edit: key});
 await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*_Reiniciando.._*`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*_Reiniciando..._*`, edit: key});            
    process.send('reset')
  } else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
