let handler = async (m, { conn, args, text, usedPrefix, command }) => {

    const ruletaresultado = "https://telegra.ph/file/8fd3db1eee3b458ec373b.mp4"

    let user = global.db.data.users[m.sender]
    
    let time = global.db.data.users[m.sender].lastrt + 40000

if (new Date - global.db.data.users[m.sender].lastrt < 40000) throw `⏱️ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙉𝙊 𝙃𝘼𝙂𝘼 𝙎𝙋𝘼𝙈`

    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 || !color) throw '`❌ Error`\n\n*_Ingresa la cantidad que quieres apostar y el color rojo o negro._* \n\n> Formato correcto: .ruleta3 <cantidad> <color>'
    let colores = ['rojo', 'negro']
    let colour = colores[Math.floor(Math.random() * colores.length)];
   
    if (isNaN(amount) || amount < 10) throw '`❌ Error` \n\n *_Lo minimo para apostar son 10 Diamantes 💎_ * \n\n> Formato correcto: . ruleta3 <cantidad> <color>'
    if (!colores.includes(color)) throw '`❌ Error` \n\n _Debes especificar un color válido: rojo o negro_*'
    if (user.limit < amount) throw '`❌ Error`\n\n*_¡No tienes suficientes Diamantes 💎!_*'
    if (amount > 99) throw '`❌ Error`\n\n*_No puedes apostar mas de 99 Diamantes 💎_.*'
    let result = ''
    if (colour == color) {
        result = `${colour == 'rojo' ? '*`La pelota paro en el color:`* 🔴' : '*`La pelota paro en el color:`* ⚫'} \n\n *𝗚𝗮𝗻𝗮𝘀𝘁𝗲: + ${amount * 2} 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 💎*`
        user.limit += amount * 2
    } else {
        result = `${colour == 'rojo' ? '*`La pelota paro en el color:`* 🔴' : '`La pelota paro en el color:`* ⚫'} \n\n *𝗣𝗲𝗿𝗱𝗶𝘀𝘁𝗲: - ${amount} 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 💎*`
        user.limit -= amount
    }
    /*conn.sendMessage(m.chat, { video: { url: ruletaresultado }, caption: result }, { quoted: m })
*/
   /* conn.sendMessage(m.chat, { video: { url: ruletaresultado }, gifPlayback: true, caption: result }, { quoted: m })*/
   conn.sendMessage(m.chat, { video: { url: ruletaresultado }, gifPlayback: true, caption: result,
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `CANAL DE WHATSAPP`,
body: `🤍 Unete al canal OFC`,
mediaType: 1,
sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'
}}}, { quoted: m })
    
    global.db.data.users[m.sender].lastrt = new Date * 1

}


handler.help = ['ruleta3 apuesta/color']
handler.tags = ['game']
handler.command = ['ruleta3', 'rt3']


export default handler

function msToTime(duration) {

var milliseconds = parseInt((duration % 1000) / 100),

seconds = Math.floor((duration / 1000) % 60),

minutes = Math.floor((duration / (1000 * 60)) % 60),

hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours

minutes = (minutes < 10) ? "0" + minutes : minutes

seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 

}  

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}


